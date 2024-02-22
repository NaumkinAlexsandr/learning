import React, { useState, useCallback } from "react";
import Button from "@mui/material/IconButton";
import ItemList from "./itemList";
import "./react.scss";

function Callback() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const style = {
    color: colored ? "#83D350" : "#2196f3",
  };

  const generateItems = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <>
      <h1 style={style}>Numbers: {count}</h1>
      <Button
        onClick={() => setCount((prew) => prew + 1)}
        id="example-btn"
        style={{ backgroundColor: "#83D350" }}
      >
        Add
      </Button>
      <Button onClick={() => setCount((prew) => prew - 1)} id="example-btn">
        Subtract
      </Button>
      <Button
        onClick={() => setColored((prew) => !prew)}
        id="example-btn"
        style={{ backgroundColor: "#d0ccd1", color: "black" }}
      >
        Edit
      </Button>
      <ItemList getItems={generateItems} />
    </>
  );
}

export default Callback;
