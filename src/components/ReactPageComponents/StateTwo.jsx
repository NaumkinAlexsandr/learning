import React, { useState } from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

export default function StateTwo() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumbers = () => {
    const newNumbers = Number(prompt("Enter new number"));
    setNumbers([...numbers, newNumbers]);
    console.log(`Added new number: ${newNumbers}`);
    console.log(`Prev array numbers: ${numbers}`);
    console.log(`New array numbers: ${[...numbers, newNumbers]}`);
  };

  return (
    <>
      <ul>
        {numbers.map((numb, index) => (
          <li key={index}>{numb}</li>
        ))}
      </ul>
      <Button onClick={addNumbers} id="example-btn">
        Add
      </Button>
    </>
  );
}
