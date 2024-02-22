import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Button from "@mui/material/IconButton";
import TableOneCol from "../../core/TableOneCol.tsx";
import Arrow from "../../core/Arrow";
import MenuTs from "./MenuTs.tsx";
import "./ts.scss";
import ComponentsRU from "./ComponentsRU.tsx";
import TypesRU from "./TypesRU.tsx";
import ClassesRU from "./ClassesRU.tsx";
import AccessModifiersRU from "./AccessModifiersRU.tsx";
import OperatorsRU from "./OperatorsRU.tsx";
import DecoratorRU from "./DecoratorRU.tsx";
import GenericsRU from "./GenericsRU.tsx";
import TypeAssertionRU from "./TypeAssertionRU.tsx";
import TypeGuardsRU from "./TypeGuardsRU.tsx";
import MappedTypesRU from "./MappedTypesRU.tsx";
import UtilityTypesRU from "./UtilityTypesRU.tsx";
import SolidRU from "./SolidRU.tsx";

export default function TsRU() {
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
            section2={"Types - Типы данных"}
            section3={"Classes - Классы"}
            section4={"Access Modifiers - Модификаторы доступа"}
            section5={"Operators - Операторы"}
            section6={"Decorator - Декораторы"}
            section7={"Generics"}
            section8={"Type Assertion - Утверждение типов"}
            section9={"Type Guards - Защитники типа"}
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
            <TableOneCol text={<h1>Изучение TypeScript.</h1>} />
          </Table>
          <ComponentsRU />
          <TypesRU />
          <ClassesRU />
          <AccessModifiersRU />
          <OperatorsRU />
          <DecoratorRU />
          <GenericsRU />
          <TypeAssertionRU />
          <TypeGuardsRU />
          <MappedTypesRU />
          <UtilityTypesRU />
          <SolidRU />
        </TableContainer>
        <footer className="footer">
          <a target="_blank" href="https://www.typescriptlang.org/">
            Документация TypeScript
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
