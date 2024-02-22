import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import TableOneCol from "../../core/TableOneCol.tsx";
import Table from "@mui/material/Table";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuCss from "./MenuCss.tsx";
import "./css.scss";
import BackgroundRU from "./BackgroundRU.tsx";
import FontRU from "./FontRU.tsx";
import ListRU from "./ListRU.tsx";
import SizeRU from "./SizeRU.tsx";
import PositionRU from "./PositionRU.tsx";
import DisplayRU from "./DisplayRU.tsx";
import BoxModelRU from "./BoxModelRU.tsx";
import AnimationRU from "./AnimationRU.tsx";
import ImageRU from "./ImageRU.tsx";
import TableRU from "./TableRU.tsx";
import PseudoElementsRU from "./PseudoElementsRU.tsx";

export default function CssRU() {
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
            section1={"Работа с фоном"}
            section2={"Работа с шрифтами"}
            section3={"Работа с текстом"}
            section4={"Дополнительные свойства для текста"}
            section5={"Работа с макросом"}
            section6={"Размеры элемента"}
            section7={"Позиционирование"}
            section8={"Отображение элементов"}
            section9={"Flex"}
            section10={"Grid"}
            section11={"Размещение элементов"}
            section12={"Блочная модель. Margin"}
            section13={"Padding"}
            section14={"Border"}
            section15={"Анимация"}
            section16={"Трансформация"}
            section17={"Переходы"}
            section18={"Изображения"}
            section19={"Таблицы"}
            section20={"Псевдоэлеиенты"}
            section21={"Псевдоклассы"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <Table id="ts_title">
            <TableOneCol text={<h1>Изучение CSS.</h1>} />
          </Table>
          <BackgroundRU />
          <FontRU />
          <ListRU />
          <SizeRU />
          <PositionRU />
          <DisplayRU />
          <BoxModelRU />
          <AnimationRU />
          <ImageRU />
          <TableRU />
          <PseudoElementsRU />
        </TableContainer>
        <footer className="footer">
          <a
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/CSS"
          >
            Документация CSS
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
