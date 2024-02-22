import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import TableOneCol from "../../core/TableOneCol.tsx";
import Table from "@mui/material/Table";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuCss from "./MenuCss.tsx";
import "./css.scss";
import BackgroundUA from "./BackgroundUA.tsx";
import FontUA from "./FontUA.tsx";
import ListUA from "./ListUA.tsx";
import SizeUA from "./SizeUA.tsx";
import PositionUA from "./PositionUA.tsx";
import DisplayUA from "./DisplayUA.tsx";
import BoxModelUA from "./BoxModelUA.tsx";
import AnimationUA from "./AnimationUA.tsx";
import ImageUA from "./ImageUA.tsx";
import TableUA from "./TableUA.tsx";
import PseudoElementsUA from "./PseudoElementsUA.tsx";

export default function CssUA() {
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
          CSS
        </Button>
        {isMenuInfoOpen && (
          <MenuCss
            section1={"Робота з фоном"}
            section2={"Робота зі шрифтами"}
            section3={"Робота з текстом"}
            section4={"Додаткові властивості для тексту"}
            section5={"Робота з макросом"}
            section6={"Розміри елемента"}
            section7={"Позиціонування"}
            section8={"Відображення елементів"}
            section9={"Flex"}
            section10={"Grid"}
            section11={"Розміщення елементів"}
            section12={"Блочна модель. Margin"}
            section13={"Padding"}
            section14={"Border"}
            section15={"Анімація"}
            section16={"Трансформація"}
            section17={"Переходи"}
            section18={"Зображення"}
            section19={"Таблиці"}
            section20={"Псевдоелеієнти"}
            section21={"Псевдокласи"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <Table id="ts_title">
            <TableOneCol text={<h1>Вивчення CSS.</h1>} />
          </Table>
          <BackgroundUA />
          <FontUA />
          <ListUA />
          <SizeUA />
          <PositionUA />
          <DisplayUA />
          <BoxModelUA />
          <AnimationUA />
          <ImageUA />
          <TableUA />
          <PseudoElementsUA />
        </TableContainer>
        <footer className="footer">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          >
            Документація CSS
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
