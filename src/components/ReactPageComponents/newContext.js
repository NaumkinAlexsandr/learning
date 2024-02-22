import React from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

export default function NewContext({ toggle }) {
  return (
    <Button onClick={toggle} id="example-btn">
      Push
    </Button>
  );
}
