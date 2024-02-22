import React, { useState } from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";
export default function FirstProps({
  enterName,
  names,
  titleOne,
  hello,
  titleTwo,
  btn,
}) {
  const [name, setName] = useState("");

  const handleName = () => {
    setName(prompt({ enterName }));
  };

  return (
    <>
      <br />
      <span className="props-title">{titleOne}</span> <br />
      <span className="props-output">
        {hello}, {names}
      </span>
      <hr />
      <span className="props-title">{titleTwo} </span> <br />
      <span className="props-output">
        {hello}, {name}
      </span>
      <br />
      <Button id="example-btn" onClick={handleName}>
        {btn}
      </Button>
    </>
  );
}
