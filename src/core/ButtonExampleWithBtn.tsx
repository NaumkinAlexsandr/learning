import React, { useState } from "react";
import Button from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import "./buttonExample.scss";
import TableBody from "@mui/material/TableBody";

export default function ButtonExampleWithBtn({
  titleButtonExample,
  title,
  text,
  onClick,
}) {
  const [isExampleOpen, setIsExampleOpen] = useState(false);

  const handleMenuInfoOpen = () => {
    setIsExampleOpen(!isExampleOpen);
  };

  const handleMenuInfoClose = () => {
    setIsExampleOpen(false);
  };

  const tableRowStyle = {
    width: "100%",
    display: "flex",
  };
  return (
    <>
      <Table id="menu-example">
        <Button className="menu-example-btn" onClick={handleMenuInfoOpen}>
          {titleButtonExample}
        </Button>
        {isExampleOpen && (
          <TableBody onClose={handleMenuInfoClose}>
            <TableRow style={tableRowStyle} className="table-example">
              <TableCell className="colOne">
                <Button onClick={onClick} className="example-btn">
                  Нажми
                </Button>
                {title}
              </TableCell>
              <TableCell className="colTwo">{text}</TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </>
  );
}
