import React from "react";

import "./app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <header>
          <h1>Тренажер слепой печати</h1>
        </header>
        <div className="container-item motivation-text passed-text">
          Привет, Игорь.
        </div>
        <article>
          <div className="text container-item">
            <span className="passed-text">C</span>
            <span className="current-text">o</span>
            <span className="wrong">n</span>sectetur dolore consequat
            landjaeger. Nulla brisket ground round, in sint shankle veniam
            meatball aute cillum kielbasa t-bone filet mignon. Eu turkey ribeye,
            nulla sausage commodo quis chicken strip steak lorem ham. Andouille
            capicola et turkey veniam in pork loin, nostrud sed pork belly
            consectetur rump pork chop. Swine bacon nulla, frankfurter
            incididunt tenderloin sunt duis ut adipisicing. Proident enim ad
            buffalo sirloin voluptate id ut ullamco in exercitation. Tail magna
            pork loin sirloin. Nisi prosciutto turkey cupidatat, commodo
            tenderloin spare ribs elit exercitation kielbasa laborum id
            consequat buffalo labore. Dolore culpa chicken, in jerky irure beef
            ribs jowl et pork chop tail pastrami turkey chuck tempor. Corned
            beef swine adipisicing biltong. Dolore laboris pancetta, kevin
            exercitation dolor minim culpa quis beef ribs chislic. Chuck est
            adipisicing tongue.
          </div>
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
