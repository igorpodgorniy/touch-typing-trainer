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
        progress: 0,
        errors: 0,
        speed: 0,
        accuracy: 100,
        finish: false,
      },
      time: "00:00",
      classNameStat: "stat container-item",
    };
    this.sec = 0;
    this.min = 0;
    this.textArr = this.textArr.bind(this);
    this.addName = this.addName.bind(this);
    this.clickMouse = this.clickMouse.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.keyListener = this.keyListener.bind(this);
    this.keyDown = this.keyDown.bind(this);
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
    this.startTimer();
    this.keyDown();
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
      this.keyDown();
      this.setState(() => {
        return {
          text: result,
          stat: {
            symbols: 0,
            progress: 0,
            errors: 0,
            speed: 0,
            accuracy: 100,
            finish: false,
          },
          time: "00:00",
          classNameStat: "stat container-item",
        };
      });
    });
  }

  startTimer() {
    const timer = setTimeout(() => {
      this.sec++;
      if (this.sec >= 60) {
        this.sec = 0;
        this.min++;
        if (this.min >= 99) {
          this.min = 99;
          this.sec = 59;
        }
      }
      this.startTimer();
      this.setState(({ stat, text }) => {
        while (!stat.finish) {
          let { speed, finish, ...itemProps } = stat;
          const divider =
            this.min * 60 + this.sec === 0 ? 1 : this.min * 60 + this.sec;
          speed = ((stat.symbols * 60) / divider).toFixed(0);
          if (text.length === stat.symbols) {
            clearTimeout(timer);
            return {
              classNameStat: "stat container-item finish",
              stat: {
                ...itemProps,
                speed: speed,
                finish: true,
              },
            };
          } else {
            return {
              stat: {
                ...itemProps,
                speed: speed,
                finish: finish,
              },
              time: `${this.min > 9 ? this.min : "0" + this.min}:${
                this.sec > 9 ? this.sec : "0" + this.sec
              }`,
            };
          }
        }
      });
    }, 1000);
  }

  keyListener(e) {
    this.setState(({ text, stat, time }) => {
      const index = text.findIndex((elem) => elem.current);
      const beforArr = text.slice(0, index + 1);
      const afterArr = text.slice(index + 1);
      if (text[index].char === e.key && text[index].current) {
        beforArr[beforArr.length - 1] = {
          char: text[index].char,
          style: 2,
          current: false,
        };
        if (afterArr.length !== 0) {
          afterArr[0] = {
            char: text[index + 1].char,
            style: 1,
            current: true,
          };
        } else {
          window.removeEventListener("keydown", this.keyListener);
        }
        let { symbols, progress, speed, ...itemProps } = stat;
        const newArr = [...beforArr, ...afterArr];
        symbols++;
        progress = ((symbols * 100) / text.length).toFixed(0);
        const min = Number(time.slice(0, 2));
        const sec = Number(time.slice(3));
        const divider = min * 60 + sec === 0 ? 1 : min * 60 + sec;
        speed = ((symbols * 60) / divider).toFixed(0);
        return {
          text: newArr,
          stat: {
            ...itemProps,
            symbols: symbols,
            progress: progress,
            speed: speed,
          },
        };
      } else if (e.shiftKey) {
        return;
      } else {
        let { errors, accuracy, ...itemProps } = stat;
        if (text[index].style !== 3) {
          errors++;
          accuracy = (100 - (errors * 100) / text.length).toFixed(1);
        }
        beforArr[beforArr.length - 1] = {
          char: text[index].char,
          style: 3,
          current: true,
        };
        const newArr = [...beforArr, ...afterArr];
        return {
          text: newArr,
          stat: {
            ...itemProps,
            errors: errors,
            accuracy: accuracy,
          },
        };
      }
    });
  }

  keyDown() {
    window.addEventListener("keydown", this.keyListener);
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
            <Motivation firstName={firstName} text={text} stat={stat} />
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
