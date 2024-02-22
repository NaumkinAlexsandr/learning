import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Button from "@mui/material/IconButton";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";
import Arrow from "../../core/Arrow";
import MenuHtml from "./MenuHtml.tsx";
import MetaTagUA from "./MetaTagUA.tsx";
import SectioningUA from "./SectioningUA.tsx";
import TextUA from "./TextUA.tsx";
import TextSemanticsUA from "./TextSemanticsUA.tsx";
import MultimediaUA from "./MultimediaUA.tsx";
import EmbeddedContentUA from "./EmbeddedContentUA.tsx";
import ScriptingUA from "./ScriptingUA.tsx";
import EditsUA from "./EditsUA.tsx";
import TableUA from "./TableUA.tsx";
import FormUA from "./FormUA.tsx";
import InteractiveUA from "./InteractiveUA.tsx";
import "./html.scss";

export default function HtmlUA() {
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
          HTML5
        </Button>
        {isMenuInfoOpen && (
          <MenuHtml
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
        <TableContainer>
          <Table id="html-title">
            <TableOneCol text={<h1>Робота з HTML.</h1>} />
            <TableOneCol text={<h2>Основні елементи</h2>} />
            <TableOneCol
              text={
                <p>
                  Основні елементи є основою будь-якого HTML документа. Ви
                  побачите ці елементи у вихідному коді для всіх веб-сторінок
                  після встановлення типу документа на першому рядку на
                  сторінці. DOCTYPE визначає, яку версію (X) HTML ця сторінка
                  використовує. Елементи сторінки знаходяться між відкриваючим
                  та закриваючим тегом &lt;html&gt; &lt;/html&gt;. Елемент
                  &lt;html&gt; називається кореневим елементом.
                </p>
              }
            />
            <TableTwoCol
              title={<h3>&lt;html&gt; &lt;/html&gt;</h3>}
              text={
                <p>
                  Являє собою корінь (елемент верхнього рівня) HTML-документа,
                  тому його також називають кореневим елементом. Усі інші
                  елементи мають бути нащадками цього елемента (мають
                  знаходитися всередині нього).
                </p>
              }
            />
          </Table>
          <MetaTagUA />
          <SectioningUA />
          <TextUA />
          <TextSemanticsUA />
          <MultimediaUA />
          <EmbeddedContentUA />
          <ScriptingUA />
          <EditsUA />
          <TableUA />
          <FormUA />
          <InteractiveUA />
        </TableContainer>
        <footer className="footer">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          >
            Документація HTML5
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
