import React, { useState, useMemo } from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num;
}

function Memo() {
  const [number, setNumber] = useState(33);
  const [colored, setColored] = useState(false);

  const style = useMemo(() => {
    return {
      color: colored ? "#83D350" : "#2196f3",
    };
  }, [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  return (
    <>
      <h1 style={style}>Numbers: {computed}</h1>
      <Button
        onClick={() => setNumber((prew) => prew + 1)}
        id="example-btn"
        style={{ backgroundColor: "#83D350" }}
      >
        Add
      </Button>
      <Button onClick={() => setNumber((prew) => prew - 1)} id="example-btn">
        Subtract
      </Button>
      <Button
        onClick={() => setColored((prew) => !prew)}
        id="example-btn"
        style={{ backgroundColor: "#d0ccd1", color: "black" }}
      >
        Edit
      </Button>
    </>
  );
}

export default Memo;
