import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuBom from "./MenuBom.tsx";
import "./bom.scss";
import PropertiesUA from "./PropertiesUA.tsx";
import MethodsUA from "./MethodsUA.tsx";

export default function BomUA() {
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
            section1={"Властивості"}
            section2={"Методи console"}
            section3={"Методи"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <PropertiesUA />
          <MethodsUA />
        </TableContainer>
      </Container>
      <Arrow />
    </>
  );
}
