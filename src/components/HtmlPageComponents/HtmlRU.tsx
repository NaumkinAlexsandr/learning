import React, { useState } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Button from "@mui/material/IconButton";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";
import Arrow from "../../core/Arrow";
import MenuHtml from "./MenuHtml.tsx";
import MetaTagRU from "./MetaTagRU.tsx";
import SectioningRU from "./SectioningRU.tsx";
import TextRU from "./TextRU.tsx";
import TextSemanticsRU from "./TextSemanticsRU.tsx";
import MultimediaRU from "./MultimediaRU.tsx";
import EmbeddedContentRU from "./EmbeddedContentRU.tsx";
import ScriptingRU from "./ScriptingRU.tsx";
import EditsRU from "./EditsRU.tsx";
import TableRU from "./TableRU.tsx";
import FormRU from "./FormRU.tsx";
import InteractiveRU from "./InteractiveRU.tsx";
import "./html.scss";

export default function HtmlRU() {
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
            section1={"Метаданные документа"}
            section2={"Секционирование содержания"}
            section3={"Текстовое содержание"}
            section4={"Встроенные текстовые семантики"}
            section5={"Изображения и мультимедиа"}
            section6={"Встроенное содержание"}
            section7={"Скриптинг"}
            section8={"Разграничительные правки"}
            section9={"Содержание таблиц"}
            section10={"Формы"}
            section11={"Интерактивные элементы"}
            onClose={handleMenuInfoClose}
          />
        )}
        <TableContainer>
          <Table id="html-title">
            <TableOneCol text={<h1>Работа с HTML.</h1>} />
            <TableOneCol text={<h2>Основные элементы</h2>} />
            <TableOneCol
              text={
                <p>
                  Основные элементы являются основой любого HTML документа. Вы
                  увидите эти элементы в исходном коде для всех веб-страниц
                  после задания типа документа на первой строке на странице.
                  DOCTYPE определяет, какую версию (X) HTML эта страница
                  использует. Элементы страницы находятся между открывающим и
                  закрывающим тегом &lt;html&gt; &lt;/html&gt;. Элемент
                  &lt;html&gt; называется корневым элементом.
                </p>
              }
            />
            <TableTwoCol
              title={<h3>&lt;html&gt; &lt;/html&gt;</h3>}
              text={
                <p>
                  Представляет собой корень (элемент верхнего уровня)
                  HTML-документа, поэтому его так же называют корневым
                  элементом. Все другие элементы должны быть потомками этого
                  элемента (должны находиться внутри него).
                </p>
              }
            />
          </Table>
          <MetaTagRU />
          <SectioningRU />
          <TextRU />
          <TextSemanticsRU />
          <MultimediaRU />
          <EmbeddedContentRU />
          <ScriptingRU />
          <EditsRU />
          <TableRU />
          <FormRU />
          <InteractiveRU />
        </TableContainer>
        <footer className="footer">
          <a
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/HTML"
          >
            Документация HTML5
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
