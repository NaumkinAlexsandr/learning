import React, { Component } from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

export default class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Alex",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "Alexander",
    });
  }

  render() {
    return (
      <>
        <h4 style={{ margin: "5px 0" }}>User name: {this.state.name} </h4>
        <Button id="example-btn" onClick={this.handleClick}>
          Натисни
        </Button>
      </>
    );
  }
}
