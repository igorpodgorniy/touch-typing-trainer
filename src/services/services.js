async function getText() {
  const text = await fetch("https://fish-text.ru/get?format=json&number=1")
    .then((response) => response.json())
    .then((result) => result.text);
  return await text;
}

async function textToArr() {
  let textAPI = await getText();
  let textArr = [];
  for (let i = 0; i < textAPI.length; i++) {
    if (i === 0) {
      textArr.push({ char: textAPI[i], style: 1, current: true });
    } else {
      textArr.push({ char: textAPI[i], style: 0, current: false });
    }
  }
  return textArr;
}

export default textToArr;
