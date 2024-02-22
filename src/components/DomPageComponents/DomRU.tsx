import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuDom from "./MenuDom.tsx";
import "./dom.scss";
import DomModelRU from "./DomModelRU.tsx";
import DomFindElementsRU from "./DomFindElementsRU.tsx";
import ChangePropertiesRU from "./ChangePropertiesRU.tsx";
import AttributesClassRU from "./AttributesClassRU.tsx";
import CreatingNodesRU from "./CreatingNodesRU.tsx";
import ElementsRU from "./ElementsRU.tsx";
import ListenerRU from "./ListenerRU.tsx";
import EventRU from "./EventRU.tsx";

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
            section2={"Поиск элементов"}
            section3={"Изменение свойств элементов HTML"}
            section4={"Атрибуты"}
            section5={"Классы"}
            section6={"Методы для создания узлов"}
            section7={"Добавление и удаление элементов"}
            section8={"Клонирование элементов"}
            section9={"Обработчик"}
            section10={"Делегирование событий"}
            section11={"События мыши"}
            section12={"События на элементах управления"}
            section13={"События фокуса"}
            section14={"Клавиатурные события"}
            section15={"CSS events"}
            section16={"События журнала сессии"}
            section17={"События Text Composition"}
            section18={"События печати"}
            section19={"События ресурса"}
            section20={"Сетевые события"}
            section21={"События веб-сокетов"}
            section22={"События представления"}
            section23={"События буфера обмена"}
            section24={"События Drag & Drop"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <DomModelRU />
          <DomFindElementsRU />
          <ChangePropertiesRU />
          <AttributesClassRU />
          <CreatingNodesRU />
          <ElementsRU />
          <ListenerRU />
          <EventRU />
        </TableContainer>
        <footer className="footer">
          <a
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model"
          >
            Документация DOM
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
