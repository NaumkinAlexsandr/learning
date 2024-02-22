import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import "./tableTwoCol.scss";

export default function TableTwoCol({ title, text }) {
  const tableRowStyle = {
    width: "100%",
    display: "flex",
  };
  return (
    <TableRow style={tableRowStyle} className="tableTwoCol">
      <TableCell className="tableTwoCol_colOne">{title}</TableCell>
      <TableCell className="tableTwoCol_colTwo">{text}</TableCell>
    </TableRow>
  );
}
