import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuJs from "./MenuJs.tsx";
import "./js.scss";
import VisibilityRU from "./VisibilityRU.tsx";
import VariablesRU from "./VariablesRU.tsx";
import OperatorsRU from "./OperatorsRU.tsx";
import CyclesRU from "./CyclesRU.tsx";
import NumberRU from "./NumberRU.tsx";
import StringRU from "./StringRU.tsx";
import ObjectRU from "./ObjectRU.tsx";
import ArrayRU from "./ArrayRU.tsx";
import FunctionRU from "./FunctionRU.tsx";
import RegularExpressionsRU from "./RegularExpressionsRU.tsx";
import SymbolRU from "./SymbolRU.tsx";
import DescriptorRU from "./DescriptorRU.tsx";
import ProtoRU from "./ProtoRU.tsx";
import ClassRU from "./ClassRU.tsx";
import MapRU from "./MapRU.tsx";
import SetRU from "./SetRU.tsx";
import TimeRU from "./TimeRU.tsx";
import PromiseRU from "./PromiseRU.tsx";
import AwaitRU from "./AwaitRU.tsx";
import ProxyRU from "./ProxyRU.tsx";

export default function JsRU() {
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
          JavaScript
        </Button>
        {isMenuInfoOpen && (
          <MenuJs
            section1={"Область видимости"}
            section2={"Переменные"}
            section3={"Операторы"}
            section4={"Циклы"}
            section5={"Числа и Math"}
            section6={"Строки"}
            section7={"Объекты"}
            section8={"Массивы"}
            section9={"Функции"}
            section10={"Регулярные выражения"}
            section11={"Symbol"}
            section12={"Дескриптор свойства"}
            section13={"Прототип объекта"}
            section14={"Классы"}
            section15={"Map"}
            section16={"Set"}
            section17={"Порядок обработки событий"}
            section18={"Promise"}
            section19={"Async/await"}
            section20={"Proxy"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <VisibilityRU />
          <VariablesRU />
          <OperatorsRU />
          <CyclesRU />
          <NumberRU />
          <StringRU />
          <ObjectRU />
          <ArrayRU />
          <FunctionRU />
          <RegularExpressionsRU />
          <SymbolRU />
          <DescriptorRU />
          <ProtoRU />
          <ClassRU />
          <MapRU />
          <SetRU />
          <TimeRU />
          <PromiseRU />
          <AwaitRU />
          <ProxyRU />
        </TableContainer>
        <footer className="footer">
          <a
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
          >
            Документация JS
          </a>
          <a target="_blank" href="https://learn.javascript.ru/">
            Toturial JavaScript
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
