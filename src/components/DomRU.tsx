import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuDom from "./MenuDom.tsx";
import "./dom.scss";

export default function DomRU() {
  const [isMenuInfoOpen, setIsMenuInfoOpen] = useState(false);

  const handleMenuInfoOpen = () => {
    setIsMenuInfoOpen(!isMenuInfoOpen);
  };

  const handleMenuInfoClose = () => {
    setIsMenuInfoOpen(false);
  };
  return (
    <>
      <Container>
        <Button
          id="menu-btnInfo"
          aria-label="open drawer"
          onClick={handleMenuInfoOpen}
        >
          DOM
        </Button>
        {isMenuInfoOpen && (
          <MenuDom
            section1={"Метадані документа"}
            section2={"Секціонування змісту"}
            section3={"Текстовий зміст"}
            section4={"Вбудовані текстові семантики"}
            section5={"Зображення та мультимедіа"}
            section6={"Вбудований зміст"}
            section7={"Скріптінг"}
            section8={"Розмежувальні виправлення"}
            section9={"Зміст таблиць"}
            section10={"Форми"}
            section11={"Інтерактивні елементи"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer></TableContainer>
        <footer className="footer">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          >
            Документация DOM
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
