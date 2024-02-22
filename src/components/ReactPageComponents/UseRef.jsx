import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

function UseRef() {
  const [value, setValue] = useState(" ");
  const renderCount = useRef(null);
  const inputRef = useRef(null);

  const buttonFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <>
      <h1>Amount renders: {renderCount.current}</h1>
      <div>
        <input
          style={{ height: "30px", borderRadius: "8px", marginRight: "5px" }}
          ref={inputRef}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button id="example-btn" onClick={buttonFocus}>
          Focus
        </Button>
      </div>
    </>
  );
}

export default UseRef;
