import React, { useState } from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

function State() {
  const [counter, setCounter] = useState(0);

  const [state, setState] = useState({
    title: "Some count",
    data: new Date().toLocaleDateString(),
  });

  function increment() {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  }

  function decrement() {
    setCounter((prevCounter) => {
      return prevCounter - 1;
    });
  }

  function reset() {
    setCounter(0);
  }

  function updateTitle() {
    setState((update) => {
      return {
        ...update,
        title: "New count",
      };
    });
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <Button
        onClick={increment}
        id="example-btn"
        style={{ backgroundColor: "#83D350" }}
      >
        Add
      </Button>
      <Button onClick={decrement} id="example-btn">
        Subtract
      </Button>
      <Button
        onClick={reset}
        style={{ backgroundColor: "#F60030" }}
        id="example-btn"
      >
        Reset
      </Button>
      <Button
        onClick={updateTitle}
        id="example-btn"
        style={{ backgroundColor: "#d0ccd1", color: "black" }}
      >
        Edit
      </Button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}

export default State;
