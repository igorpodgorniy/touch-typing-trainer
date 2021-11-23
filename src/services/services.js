async function getText() {
  const text = await fetch("https://fish-text.ru/get?format=json&number=1")
    .then((response) => response.json())
    .then((result) => result.text);
  return await text;
}

export default getText;
