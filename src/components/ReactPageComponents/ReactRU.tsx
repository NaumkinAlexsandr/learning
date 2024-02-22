import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuReact from "./MenuReact.tsx";
import "./react.scss";
import ExamplesRU from "./ExamplesRU.tsx";
import HooksRU from "./HooksRU.tsx";
import InstallRU from "./InstallRU.jsx";

export default function ReactRU() {
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
          React
        </Button>
        {isMenuInfoOpen && (
          <MenuReact
            section1={"Примеры использования"}
            section2={"Примеры использования Hooks"}
            section3={"Библиотеки и фреймворки"}
            section4={""}
            section5={""}
            section6={""}
            section7={""}
            section8={""}
            section9={""}
            section10={""}
            section11={""}
            section12={""}
            section13={""}
            section14={""}
            section15={""}
            section16={""}
            section17={""}
            section18={""}
            section19={""}
            section20={""}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <ExamplesRU />
          <HooksRU />
          <InstallRU />
        </TableContainer>
        <footer className="footer">
          <a target="_blank" href="https://ru.legacy.reactjs.org/">
            Документация React
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
