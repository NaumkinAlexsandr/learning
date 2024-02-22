import React, { useState } from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

function CounterFunction() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="functionCounter">
        <h1>Score: {count}</h1>
        <div>
          <Button
            id="example-btn"
            style={{ backgroundColor: "#83D350" }}
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            Add
          </Button>
          <Button
            id="example-btn"
            onClick={() => setCount((prevCount) => prevCount - 1)}
          >
            Remove
          </Button>
          <Button
            style={{ backgroundColor: "#F60030" }}
            id="example-btn"
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}

export default CounterFunction;
