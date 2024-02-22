import React, { useReducer } from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <h1>Counter: {state.count}</h1>
      <Button
        id="example-btn"
        style={{ backgroundColor: "#83D350" }}
        onClick={handleIncrement}
      >
        Add
      </Button>
      <Button id="example-btn" onClick={handleDecrement}>
        Subtract
      </Button>
      <Button
        style={{ backgroundColor: "#F60030" }}
        id="example-btn"
        onClick={handleReset}
      >
        Reset
      </Button>
    </>
  );
}

export default Reducer;
