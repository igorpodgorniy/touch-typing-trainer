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
      firstName: "",
      text: [],
      stat: {
        symbols: 0,
        progress: "0",
        errors: 0,
        speed: 0,
        accuracy: "100",
        finish: false,
      },
      time: "00:00",
      classNameStat: "stat container-item",
    };
    this.textArr = this.textArr.bind(this);
    this.addName = this.addName.bind(this);
    this.clickMouse = this.clickMouse.bind(this);
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

  addName(value) {
    this.setState(() => {
      return {
        firstName: value,
      };
    });
  }

  clickMouse() {
    textToArr().then((result) => {
      this.sec = 0;
      this.min = 0;
      this.setState(() => {
        return {
          text: result,
          stat: {
            symbols: 0,
            progress: "0",
            errors: 0,
            speed: 0,
            accuracy: "100",
            finish: false,
          },
          time: "00:00",
          classNameStat: "stat container-item",
        };
      });
    });
  }

  render() {
    const { stat, text, firstName, classNameStat, time } = this.state;
    return (
      <div>
        {text.length !== 0 && (
          <div className="app">
            <Modal onAdd={this.addName} />
            <header>
              <h1>Тренажер слепой печати</h1>
            </header>
            <Motivation firstName={firstName} />
            <article>
              <Text text={text} />
            </article>
            <Stat
              stat={stat}
              time={time}
              clickMouse={this.clickMouse}
              classNameStat={classNameStat}
            />
          </div>
        )}
      </div>
    );
  }
}
