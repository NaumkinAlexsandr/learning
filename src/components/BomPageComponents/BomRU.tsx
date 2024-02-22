import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuBom from "./MenuBom.tsx";
import "./bom.scss";
import PropertiesRU from "./PropertiesRU.tsx";
import MethodsRU from "./MethodsRU.tsx";

export default function BomRU() {
  const [isMenuInfoOpen, setIsMenuInfoOpen] = useState(false);

  const handleMenuInfoOpen = () => {
    setIsMenuInfoOpen(!isMenuInfoOpen);
  };

  const handleMenuInfoClose = () => {
    setIsMenuInfoOpen(false);
  };
  return (
    <>
      <Container style={{ width: "100%", maxWidth: "none" }}>
        <Button
          id="menu-btnInfo"
          aria-label="open drawer"
          onClick={handleMenuInfoOpen}
        >
          BOM
        </Button>
        {isMenuInfoOpen && (
          <MenuBom
            section1={"Свойства"}
            section2={"Методы console"}
            section3={"Методы"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <PropertiesRU />
          <MethodsRU />
        </TableContainer>
      </Container>
      <Arrow />
    </>
  );
}
