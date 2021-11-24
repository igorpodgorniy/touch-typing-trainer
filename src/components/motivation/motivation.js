import React from "react";

import "./motivation.css";

const Motivation = ({ firstName, text, stat }) => {
  const username = firstName ? `, ${firstName}` : "";
  let motivation = `Привет${username}.`;
  let classNames = "container-item motivation-text";

  const index = text.findIndex((elem) => elem.current);
  if (index > 0) {
    if (text[index].style === 3) {
      classNames = "container-item motivation-text motivation-text-error";
      motivation = `Попробуйте ещё раз${username}.`;
    } else {
      classNames = "container-item motivation-text motivation-text-passed";
      motivation = `Отлично выходит${username}!`;
    }
  } else if (stat.finish) {
    motivation = `Вы дошли до конца${username}. Так держать!`;
  } else if (index === 0 && text[index].style === 3) {
    classNames = "container-item motivation-text motivation-text-error";
    motivation = `Попробуйте ещё раз${username}.`;
  }

  return <div className={classNames}>{motivation}</div>;
};

export default Motivation;
