import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import "./tableTwoEqualCol.scss";

export default function TableTwoEqualCol({ title, text }) {
  const tableRowStyle = {
    width: "100%",
    display: "flex",
  };
  return (
    <TableRow style={tableRowStyle} className="tableTwoEqualCol">
      <TableCell className="tableTwoEqualCol_colOne">{title}</TableCell>
      <TableCell className="tableTwoEqualCol_colTwo">{text}</TableCell>
    </TableRow>
  );
}
