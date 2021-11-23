import React from "react";

import "./text.css";

const Text = ({ text }) => {
  const classNames = ["", "current-text", "passed-text", "wrong"];
  let string = text.map((item, i) => (
    <span className={classNames[item.style]} key={i}>
      {item.char}
    </span>
  ));
  return <div className="text container-item">{string}</div>;
};

export default Text;
