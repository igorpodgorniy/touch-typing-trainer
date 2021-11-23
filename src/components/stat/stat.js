import React from "react";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./stat.css";

const Stat = ({ stat, time, clickMouse, classNameStat }) => {
  return (
    <footer className={classNameStat}>
      <div className="stat-symbol">
        <p className="stat-value">
          <span>{stat.symbols}</span>
        </p>
        <p className="stat-item">знаки</p>
      </div>
      <div className="stat-progress">
        <p className="stat-value">
          <span>{stat.progress}</span>%
        </p>
        <p className="stat-item">прогресс</p>
      </div>
      <div className="stat-errors">
        <p className="stat-value">
          <span>{stat.errors}</span>
        </p>
        <p className="stat-item">ошибки</p>
      </div>
      <div className="stat-speed">
        <p className="stat-value">
          <span>{stat.speed}</span> зн./мин.
        </p>
        <p className="stat-item">скорость</p>
      </div>
      <div className="stat-accuracy">
        <p className="stat-value">
          <span>{stat.accuracy}</span>%
        </p>
        <p className="stat-item">точность</p>
      </div>
      <div className="stat-time">
        <p className="stat-value">
          <span>{time}</span>
        </p>
        <p className="stat-item">время</p>
      </div>
      <div className="stat-repeat">
        <p className="stat-value">
          <span onClick={clickMouse}>
            <FontAwesomeIcon className="redo" icon={faRedo} />
          </span>
        </p>
        <p className="stat-item">заново</p>
      </div>
    </footer>
  );
};

export default Stat;
