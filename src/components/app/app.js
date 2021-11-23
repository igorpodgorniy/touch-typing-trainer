import React from "react";
import Modal from "../modal";
import Motivation from "../motivation";
import Text from "../text";
import Stat from "../stat";

import "./app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Modal />
        <header>
          <h1>Тренажер слепой печати</h1>
        </header>
        <Motivation />
        <article>
          <Text />
        </article>
        <Stat />
      </div>
    );
  }
}
