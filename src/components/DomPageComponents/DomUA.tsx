import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuDom from "./MenuDom.tsx";
import "./dom.scss";
import DomModelUA from "./DomModelUA.tsx";
import DomFindElementsUA from "./DomFindElementsUA.tsx";
import ChangePropertiesUA from "./ChangePropertiesUA.tsx";
import AttributesClassUA from "./AttributesClassUA.tsx";
import CreatingNodesUA from "./CreatingNodesUA.tsx";
import ElementsUA from "./ElementsUA.tsx";
import ListenerUA from "./ListenerUA.tsx";
import EventUA from "./EventUA.tsx";

export default function DomUA() {
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
          DOM
        </Button>
        {isMenuInfoOpen && (
          <MenuDom
            section1={"DOM"}
            section2={"Пошук елементів"}
            section3={"Зміна властивостей елементів HTML"}
            section4={"Атрибути"}
            section5={"Класи"}
            section6={"Методи створення вузлів"}
            section7={"Додавання та видалення елементів"}
            section8={"Клонування елементів"}
            section9={"Обробник"}
            section10={"Делегування подій"}
            section11={"Події миші"}
            section12={"Події на елементах керування"}
            section13={"Події фокусу"}
            section14={"Клавіатурні події"}
            section15={"CSS events"}
            section16={"Події журналу сесії"}
            section17={"Події Text Composition"}
            section18={"Події друку"}
            section19={"Події ресурсу"}
            section20={"Мережні події"}
            section21={"Події веб-сокетів"}
            section22={"Події подання"}
            section23={"Події буфера обміну"}
            section24={"Події Drag & Drop"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <DomModelUA />
          <DomFindElementsUA />
          <ChangePropertiesUA />
          <AttributesClassUA />
          <CreatingNodesUA />
          <ElementsUA />
          <ListenerUA />
          <EventUA />
        </TableContainer>
        <footer className="footer">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
          >
            Документація DOM
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
