import React, { Component } from "react";
import "./react.scss";

export default class TextInputClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      inputBtn: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBtn = this.handleChangeBtn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeBtn(event) {
    this.setState({
      inputBtn: event.target.value,
    });
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.inputBtn,
    });
  }

  render() {
    return (
      <>
        <form className="textInput">
          <label>Text output</label>
          <input onChange={this.handleChange} />
          <span className="textInput-h3">{this.state.input}</span>
        </form>
        <br />
        <hr />
        <form className="textInput" onSubmit={this.handleSubmit}>
          <label>Text output on click</label>
          <input value={this.state.inputBtn} onChange={this.handleChangeBtn} />
          <span className="textInput-h3">{this.state.submit}</span>
          <button id="example-btn" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}
