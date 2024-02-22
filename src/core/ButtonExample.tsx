import React, { useState } from "react";
import Button from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import "./buttonExample.scss";

export default function ButtonExample({ titleButtonExample, title, text }) {
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
          <Table onClose={handleMenuInfoClose}>
            <TableRow style={tableRowStyle} className="table-example">
              <TableCell className="colOne">{title}</TableCell>
              <TableCell className="colTwo">{text}</TableCell>
            </TableRow>
          </Table>
        )}
      </Table>
    </>
  );
}

/*

<Table id="menu-example">
        <Button className="menu-example-btn" onClick={handleMenuInfoOpen}>
          {titleButtonExample}
        </Button>
        {isExampleOpen && (
          <Table onClose={handleMenuInfoClose}>
            <TableRow style={tableRowStyle} className="table-example">
              <TableCell className="colOne">
                {getFormatedText(`${title}`)}
              </TableCell>
              <TableCell className="colTwo">
                {getFormatedText(`${text}`)}
              </TableCell>
            </TableRow>
          </Table>
        )}
      </Table>

      */
