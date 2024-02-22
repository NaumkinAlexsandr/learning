import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Button from "@mui/material/IconButton";
import TableOneCol from "../../core/TableOneCol.tsx";
import Arrow from "../../core/Arrow";
import MenuTs from "./MenuTs.tsx";
import "./ts.scss";
import ComponentsUA from "./ComponentsUA.tsx";
import TypesUA from "./TypesUA.tsx";
import ClassesUA from "./ClassesUA.tsx";
import AccessModifiersUA from "./AccessModifiersUA.tsx";
import OperatorsUA from "./OperatorsUA.tsx";
import DecoratorUA from "./DecoratorUA.tsx";
import GenericsUA from "./GenericsUA.tsx";
import TypeAssertionUA from "./TypeAssertionUA.tsx";
import TypeGuardsUA from "./TypeGuardsUA.tsx";
import MappedTypesUA from "./MappedTypesUA.tsx";
import UtilityTypesUA from "./UtilityTypesUA.tsx";
import SolidUA from "./SolidUA.tsx";

export default function TsUA() {
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
          TypeScript
        </Button>
        {isMenuInfoOpen && (
          <MenuTs
            section1={"Components - Компоненти"}
            section2={"Types - Типи даних"}
            section3={"Classes - Класи"}
            section4={"Access Modifiers - Модифікатори доступу"}
            section5={"Operators - Оператори"}
            section6={"Decorator - Декоратори"}
            section7={"Generics"}
            section8={"Type Assertion - Затвердження типів"}
            section9={"Type Guards - Захисники типу"}
            section10={"Mapped Types"}
            section11={"Utility Types"}
            section12={"SOLID"}
            section13={""}
            section14={""}
            section15={""}
            section16={""}
            onClose={handleMenuInfoClose}
          />
        )}

        <TableContainer>
          <Table id="ts_title">
            <TableOneCol text={<h1>Вивчення TypeScript.</h1>} />
          </Table>
          <ComponentsUA />
          <TypesUA />
          <ClassesUA />
          <AccessModifiersUA />
          <OperatorsUA />
          <DecoratorUA />
          <GenericsUA />
          <TypeAssertionUA />
          <TypeGuardsUA />
          <MappedTypesUA />
          <UtilityTypesUA />
          <SolidUA />
        </TableContainer>
        <footer className="footer">
          <a target="_blank" href="https://www.typescriptlang.org/">
            Документація TypeScript
          </a>
          <a target="_blank" href="https://www.tutorialsteacher.com/typescript">
            Toturial TypeScript
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}

/* 
<Table><TableBody></TableBody></Table>
<TableOneCol text={<p></p>} />
<TableOneCol text={<h3></h3>} />
<TableTwoCol title={<h3></h3>} text={} />
<TableTwoEqualCol title={<p></p>} text={<p></p>} />

<ButtonExampleTwoCol
  titleButtonExample={"Приклад"}
  title={
    <>
      <pre>
        <code>{}</code>
      </pre>
      <p id="formated-text"></p>
    </>
  }
/>

<ButtonExample
                titleButtonExample={"Приклад"}
                title={<p id="formated-text"></p>}
                text={
                  <pre>
                    <code>{}</code>
                  </pre>
                }
              />


*/
