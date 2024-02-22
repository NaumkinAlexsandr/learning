import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuReact from "./MenuReact.tsx";
import "./react.scss";
import Name from "./Name.tsx";
import ExamplesUA from "./ExamplesUA.tsx";
import HooksUA from "./HooksUA.tsx";
import InstallUA from "./InstallUA.jsx";

export default function ReactUA() {
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
            section1={"Приклади використання"}
            section2={"Приклади використання Hooks"}
            section3={"Бібліотекі та фреймворкі"}
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
          <ExamplesUA />
          <HooksUA />
          <InstallUA />
        </TableContainer>
        <footer className="footer">
          <a target="_blank" href="https://uk.legacy.reactjs.org/">
            Документація React
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
