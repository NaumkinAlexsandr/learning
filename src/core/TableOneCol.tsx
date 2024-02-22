import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function TableOneCol({ text }) {
  return (
    <TableRow>
      <TableCell>{text}</TableCell>
    </TableRow>
  );
}
