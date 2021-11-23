import React from "react";
import Modal from "../modal";
import Motivation from "../motivation";
import Text from "../text";
import Stat from "../stat";
import textToArr from "../../services";

import "./app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
    };
    this.textArr = this.textArr.bind(this);
  }

  componentDidMount() {
    this.textArr();
  }

  textArr() {
    textToArr().then((result) =>
      this.setState(() => {
        return {
          text: result,
        };
      })
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        {text.length !== 0 && (
          <div className="app">
            <Modal />
            <header>
              <h1>Тренажер слепой печати</h1>
            </header>
            <Motivation />
            <article>
              <Text text={text} />
            </article>
            <Stat />
          </div>
        )}
      </div>
    );
  }
}
