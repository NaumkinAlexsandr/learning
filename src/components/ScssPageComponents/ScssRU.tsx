import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import TableOneCol from "../../core/TableOneCol.tsx";
import Table from "@mui/material/Table";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuCss from "./MenuScss.tsx";
import "./scss.scss";
import ImportRU from "./ImportRU.tsx";
import MediaRU from "./MediaRU.tsx";
import ExtendRU from "./ExtendRU.tsx";
import AtRootRU from "./AtRootRU.tsx";
import OtherDirectiveRU from "./OtherDirectiveRU.tsx";
import ExpressionsRU from "./ExpressionsRU.tsx";
import MixinRU from "./MixinRU.tsx";
import ArgumentRU from "./ArgumentRU.tsx";
import ContentRU from "./ContentRU.tsx";

export default function ScssRU() {
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
          SCSS
        </Button>
        {isMenuInfoOpen && (
          <MenuCss
            section1={"@import"}
            section2={"@media"}
            section3={"@extend"}
            section4={"@at-root"}
            section5={"@debug"}
            section6={"@warn"}
            section7={"@error"}
            section8={"@if"}
            section9={"@for"}
            section10={"@each"}
            section11={"@while"}
            section12={"mixin"}
            section13={"Аргументы"}
            section14={"Блоки контента в миксинах"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <Table id="scss_title">
            <TableOneCol text={<h1>Изучение SCSS.</h1>} />
            <TableOneCol
              text={
                <p>
                  Sass позволяет использовать функции недоступные в самом CSS,
                  например, переменные, вложенности, миксины, наследование и
                  другие приятные вещи, возвращающие удобство написания CSS.
                </p>
              }
            />
          </Table>
          <ImportRU />
          <MediaRU />
          <ExtendRU />
          <AtRootRU />
          <OtherDirectiveRU />
          <ExpressionsRU />
          <MixinRU />
          <ArgumentRU />
          <ContentRU />
        </TableContainer>
        <footer className="footer">
          <a target="_blank" href="https://sass-lang.com/documentation/">
            Документація SASS/SCSS
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
