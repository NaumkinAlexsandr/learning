import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Button from "@mui/material/IconButton";
import Arrow from "../../core/Arrow";
import MenuJs from "./MenuJs.tsx";
import "./js.scss";
import VisibilityUA from "./VisibilityUA.tsx";
import VariablesUA from "./VariablesUA.tsx";
import OperatorsUA from "./OperatorsUA.tsx";
import CyclesUA from "./CyclesUA.tsx";
import NumberUA from "./NumberUA.tsx";
import StringUA from "./StringUA.tsx";
import ObjectUA from "./ObjectUA.tsx";
import ArrayUA from "./ArrayUA.tsx";
import FunctionUA from "./FunctionUA.tsx";
import RegularExpressionsUA from "./RegularExpressionsUA.tsx";
import SymbolUA from "./SymbolUA.tsx";
import DescriptorUA from "./DescriptorUA.tsx";
import ProtoUA from "./ProtoUA.tsx";
import ClassUA from "./ClassUA.tsx";
import MapUA from "./MapUA.tsx";
import SetUA from "./SetUA.tsx";
import TimeUA from "./TimeUA.tsx";
import PromiseUA from "./PromiseUA.tsx";
import AwaitUA from "./AwaitUA.tsx";
import ProxyUA from "./ProxyUA.tsx";

export default function JsUA() {
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
            section1={"Область видимості"}
            section2={"Змінні"}
            section3={"Оператори"}
            section4={"Цикли"}
            section5={"Числа та Math"}
            section6={"Рядки"}
            section7={"Об'єкти"}
            section8={"Массиви"}
            section9={"Функції"}
            section10={"Регулярні вирази"}
            section11={"Symbol"}
            section12={"Дескриптор якості"}
            section13={"Прототип об'єкта"}
            section14={"Класи"}
            section15={"Map"}
            section16={"Set"}
            section17={"Порядок обробки подій"}
            section18={"Promise"}
            section19={"Async/await"}
            section20={"Proxy"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <VisibilityUA />
          <VariablesUA />
          <OperatorsUA />
          <CyclesUA />
          <NumberUA />
          <StringUA />
          <ObjectUA />
          <ArrayUA />
          <FunctionUA />
          <RegularExpressionsUA />
          <SymbolUA />
          <DescriptorUA />
          <ProtoUA />
          <ClassUA />
          <MapUA />
          <SetUA />
          <TimeUA />
          <PromiseUA />
          <AwaitUA />
          <ProxyUA />
        </TableContainer>
        <footer className="footer">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >
            Документація JS
          </a>
          <a target="_blank" href="https://uk.javascript.info/">
            Toturial JavaScript
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
