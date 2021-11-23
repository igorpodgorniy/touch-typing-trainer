import React from "react";

import "./motivation.css";

const Motivation = ({ firstName }) => {
  const username = firstName ? `, ${firstName}` : "";
  let motivation = `Привет${username}.`;
  let classNames = "container-item motivation-text";
  return <div className={classNames}>{motivation}</div>;
};

export default Motivation;
