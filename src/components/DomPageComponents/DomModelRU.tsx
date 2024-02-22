import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
const dom = require("../../images/dom.png");
const domLinks = require("../../images/dom-links.png");
const domLinksElements = require("../../images/dom-links-elements.png");

export default function DomModelRU() {
  return (
    <>
      <Table id="dom_title">
        <TableBody>
          <TableOneCol text={<h1>Изучение DOM.</h1>} />
          <TableOneCol text={<h2>Document Object Model.</h2>} />
          <TableOneCol
            text={
              <p>
                DOM – это объектная модель документа, которую браузер создаёт в
                памяти компьютера на основании HTML-кода, полученного им от
                сервера. Если сказать по-простому, то HTML-код – это текст
                страницы, а DOM – это набор связанных объектов, созданных
                браузером при парсинге её текста.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <img className="dom_images" src={dom} alt="dom" />
              </p>
            }
            text={
              <p>
                Узел html образован элементом <span>html</span>. Узлы
                <span>head</span> и <span>body</span> имеют родительскую связь с
                <span>html</span>. Узел <span>head</span> связан с
                <span>link</span>, <span>meta</span> и <span>title</span> и
                является для них родителем. В свою очередь
                <span>body</span> связан с <span>header</span>,
                <span>section</span> и <span>footer</span> и является для них
                родителем. Элемент <span>section</span> имеет трёх детей
                <span>div</span>, <span>p</span> и <span>a</span>. <br />
                Не зная как устроено DOM-дерево и связи между узлами найти
                какой-то определенный элемент в нём будет достаточно
                затруднительно.
              </p>
            }
          />
          <TableOneCol text={<h3>Навигация по DOM-элементам.</h3>} />
          <TableTwoEqualCol
            title={
              <p>
                <img className="dom_images" src={domLinks} alt="dom-links" />
              </p>
            }
            text={
              <p>
                DOM позволяет нам делать что угодно с элементами и их
                содержимым, но для начала нужно получить соответствующий
                DOM-объект.
                <br />
                Все операции с DOM начинаются с объекта document. Это главная
                «точка входа» в DOM. Из него мы можем получить доступ к любому
                узлу. <br />
                Так выглядят основные ссылки, по которым можно переходить между
                узлами DOM.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>document.documentElement</h3>}
            text={
              <p>
                Самый верхний узел документа он соответствует тегу &lt; html
                &gt;.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>document.head</h3>}
            text={<p>Применяется к тегу &lt; head &gt;.</p>}
          />
          <TableTwoEqualCol
            title={<h3>document.body</h3>}
            text={
              <p>
                Другой часто используемый DOM-узел – узел тега &lt; body &gt;.
                Для сокращения кода в дальнейшем используем переменную. <br />
                const bodyElement = document.body;
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.childNodes</h3>}
            text={
              <p>
                Содержит список всех детей, включая текстовые узлы.
                bodyElement.childNodes
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.hasChildNodes</h3>}
            text={
              <p>
                Для проверки есть ли у элемента дочерние узлы.
                bodyElement.hasChildNodes
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.firstChild</h3>}
            text={
              <p>
                Обеспечивают быстрый доступ к первому дочернему элементу.
                bodyElement.firstChild
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.lastChild</h3>}
            text={
              <p>
                Обеспечивают быстрый доступ к последнему дочернему элементу.
                bodyElement.lastChild
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.previousSibling</h3>}
            text={
              <p>
                Предыдущий узел того же родителя. bodyElement.previousSibling
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.nextSibling</h3>}
            text={
              <p>Следующий узел того же родителя. bodyElement.nextSibling</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.parentNode</h3>}
            text={<p>Родитель. bodyElement.parentNode</p>}
          />
          <TableTwoEqualCol
            title={
              <p>
                <img
                  className="dom_images"
                  src={domLinksElements}
                  alt="dom-links"
                />
              </p>
            }
            text={
              <p>
                <br />
                Навигационные свойства, описанные выше, относятся ко всем узлам
                в документе. В частности, в childNodes находятся и текстовые
                узлы и узлы-элементы и узлы-комментарии, если они есть.
                <br />
                Но для большинства задач текстовые узлы и узлы-комментарии нам
                не нужны. Мы хотим манипулировать узлами-элементами, которые
                представляют собой теги и формируют структуру страницы.
                <br />
                Поэтому давайте рассмотрим дополнительный набор ссылок, которые
                учитывают только узлы-элементы.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.children</h3>}
            text={
              <p>
                Коллекция детей, которые являются элементами.
                bodyElement.children
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.firstElementChild</h3>}
            text={<p>Первый дочерний элемент. bodyElement.firstElementChild</p>}
          />
          <TableTwoEqualCol
            title={<h3>.lastElementChild</h3>}
            text={
              <p>Последний дочерний элемент. bodyElement.lastElementChild</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.previousElementSibling</h3>}
            text={
              <p>
                Предыдущий соседний элемент. bodyElement.previousElementSibling
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.nextElementSibling</h3>}
            text={
              <p>Следующий соседний элемент. bodyElement.nextElementSibling</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.parentElement</h3>}
            text={<p>Родительский элемент. bodyElement.parentElement</p>}
          />
        </TableBody>
      </Table>
    </>
  );
}
