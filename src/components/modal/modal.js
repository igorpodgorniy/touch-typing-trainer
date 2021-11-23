import React from "react";

import "./modal.css";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      classNames: "fixed-overlay fixed-overlay-modal",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.value);
    this.setState({
      text: "",
      classNames: "fixed-overlay fixed-overlay-modal close",
    });
  }

  render() {
    return (
      <div className={this.state.classNames}>
        <div className="modal">
          <div className="modal-container">
            <form className="modal-form" onSubmit={this.onSubmit}>
              <label className=".modal-form-label">
                Имя:{" "}
                <input
                  type="text"
                  className="modal-form-input"
                  placeholder="Введите своё имя"
                  onChange={this.onValueChange}
                  value={this.state.value}
                />
              </label>
              <button type="submit" className="modal-form-button">
                Начать печатать
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
