import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import TableOneCol from "../../core/TableOneCol.tsx";
import Table from "@mui/material/Table";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuCss from "./MenuScss.tsx";
import "./scss.scss";
import ImportUA from "./ImportUA.tsx";
import MediaUA from "./MediaUA.tsx";
import ExtendUA from "./ExtendUA.tsx";
import AtRootUA from "./AtRootUA.tsx";
import OtherDirectiveUA from "./OtherDirectiveUA.tsx";
import ExpressionsUA from "./ExpressionsUA.tsx";
import MixinUA from "./MixinUA.tsx";
import ArgumentUA from "./ArgumentUA.tsx";
import ContentUA from "./ContentUA.tsx";

export default function ScssUA() {
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
            section13={"Аргументи"}
            section14={"Блоки контенту в міксинах"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <Table id="scss_title">
            <TableOneCol text={<h1>Вивчення SCSS.</h1>} />
            <TableOneCol
              text={
                <p>
                  Sass дозволяє використовувати функції недоступні в самому CSS,
                  наприклад, змінні, вкладеності, міксини, успадкування та інші
                  приємні речі, що повертають зручність написання CSS.
                </p>
              }
            />
          </Table>
          <ImportUA />
          <MediaUA />
          <ExtendUA />
          <AtRootUA />
          <OtherDirectiveUA />
          <ExpressionsUA />
          <MixinUA />
          <ArgumentUA />
          <ContentUA />
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
