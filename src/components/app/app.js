import React from "react";
import Modal from "../modal";
import Motivation from "../motivation";
import Text from "../text";

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
        <footer className="stat container-item">
          <div className="stat-symbol">
            <p className="stat-value">
              <span>36</span>
            </p>
            <p className="stat-item">знаки</p>
          </div>
          <div className="stat-progress">
            <p className="stat-value">
              <span>3</span>%
            </p>
            <p className="stat-item">прогресс</p>
          </div>
          <div className="stat-errors">
            <p className="stat-value">
              <span>0</span>
            </p>
            <p className="stat-item">ошибки</p>
          </div>
          <div className="stat-speed">
            <p className="stat-value">
              <span>90</span> зн./мин.
            </p>
            <p className="stat-item">скорость</p>
          </div>
          <div className="stat-accuracy">
            <p className="stat-value">
              <span>100</span>%
            </p>
            <p className="stat-item">точность</p>
          </div>
          <div className="stat-time">
            <p className="stat-value">
              <span>00:58</span>
            </p>
            <p className="stat-item">время</p>
          </div>
          <div className="stat-repeat">
            <p className="stat-value">
              <span>
                <i className="fas fa-redo redo"></i>
              </span>
            </p>
            <p className="stat-item">заново</p>
          </div>
        </footer>
      </div>
    );
  }
}
