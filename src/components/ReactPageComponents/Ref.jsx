import React, { Component } from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

export default class Ref extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.textInput.focus();
  }

  render() {
    return (
      <>
        <div>
          <input
            style={{ height: "30px", borderRadius: "8px", marginRight: "5px" }}
            type="text"
            ref={(input) => {
              this.textInput = input;
            }}
          />
          <Button id="example-btn" onClick={this.focus}>
            Focus
          </Button>
        </div>
      </>
    );
  }
}
