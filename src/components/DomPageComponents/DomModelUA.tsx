import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
const dom = require("../../images/dom.png");
const domLinks = require("../../images/dom-links.png");
const domLinksElements = require("../../images/dom-links-elements.png");

// import {} from "./ScssConstPre.tsx";

export default function DomModelUA() {
  return (
    <>
      <Table id="dom_title">
        <TableBody>
          <TableOneCol text={<h1>Вивчення CSS.</h1>} />
          <TableOneCol text={<h2>Document Object Model.</h2>} />
          <TableOneCol
            text={
              <p>
                DOM – це об'єктна модель документа, яку браузер створює в
                пам'яті комп'ютера на основі HTML-коду, отриманого ним від
                сервера. Якщо сказати по-простому, HTML-код – це текст сторінки,
                а DOM – це набір пов'язаних об'єктів, створених браузер при
                парсингу її тексту.
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
                Вузол html утворений елементом <span>html</span>. Вузли
                <span>head</span> та <span>body</span> мають батьківський
                зв'язок з<span>html</span>. Вузол <span>head</span> пов'язаний з
                <span>link</span>, <span>meta</span> та <span>title</span> та є
                для них батьком. В свою чергу
                <span>body</span> пов'язаний з <span>header</span>,
                <span>section</span> та <span>footer</span> і є для них батьком.
                Елемент <span>section</span> має трьох дітей
                <span>div</span>, <span>p</span> та <span>a</span>. <br />
                Не знаючи як влаштовано DOM-дерево та зв'язки між вузлами якийсь
                певний елемент у ньому буде достатньо важко.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <img className="dom_images" src={domLinks} alt="dom-links" />
              </p>
            }
            text={
              <p>
                DOM дозволяє нам робити будь-що з елементами та їх вмістом, але
                спочатку потрібно отримати відповідний DOM-об'єкт.
                <br />
                Усі операції з DOM починаються з об'єкта document. Це головна
                "точка входу" в DOM. З нього ми можемо отримати доступ до
                будь-якого вузлу. <br />
                Так виглядають основні посилання, за якими можна переходити між
                вузлами DOM.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>document.documentElement</h3>}
            text={
              <p>Найвищий вузол документа відповідає тегу &lt; html &gt;.</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>document.head</h3>}
            text={<p>Застосовується до тега &lt; head &gt;.</p>}
          />
          <TableTwoEqualCol
            title={<h3>document.body</h3>}
            text={
              <p>
                Інший часто використовуваний DOM-вузол – вузол тега &lt; body
                &gt;. Для скорочення коду надалі використовуємо змінну. <br />
                const bodyElement = document.body;
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.childNodes</h3>}
            text={
              <p>
                Має список усіх дітей, включаючи текстові вузли.
                bodyElement.childNodes
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.hasChildNodes</h3>}
            text={
              <p>
                Для перевірки чи є у елемента дочірні вузли.
                bodyElement.hasChildNodes
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.firstChild</h3>}
            text={
              <p>
                Забезпечують швидкий доступ до першого дочірнього елемента.
                bodyElement.firstChild
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.lastChild</h3>}
            text={
              <p>
                Забезпечують швидкий доступ до останнього дочірнього елемента.
                bodyElement.lastChild
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.previousSibling</h3>}
            text={
              <p>Попередній вузол того ж батька. bodyElement.previousSibling</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.nextSibling</h3>}
            text={<p>Наступний вузол того ж батька. bodyElement.nextSibling</p>}
          />
          <TableTwoEqualCol
            title={<h3>.parentNode</h3>}
            text={<p>Батько. bodyElement.parentNode</p>}
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
                Навігаційні властивості, описані вище, відносяться до всіх
                вузлів у документ. Зокрема, в childNodes знаходяться і текстові
                вузли вузли-елементи та вузли-коментарі, якщо вони є.
                <br />
                Але для більшості завдань текстові вузли та вузли-коментарі нам
                не потрібні. Ми хочемо маніпулювати вузлами-елементами, які є
                теги і формують структуру сторінки.
                <br />
                Тому давайте розглянемо додатковий набір посилань, які
                враховують лише вузли-елементи.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.children</h3>}
            text={<p>Колекція дітей, які є елементами. bodyElement.children</p>}
          />
          <TableTwoEqualCol
            title={<h3>.firstElementChild</h3>}
            text={<p>Перший дочірній елемент. bodyElement.firstElementChild</p>}
          />
          <TableTwoEqualCol
            title={<h3>.lastElementChild</h3>}
            text={
              <p>Останній дочірній елемент. bodyElement.lastElementChild</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.previousElementSibling</h3>}
            text={
              <p>
                Попередній сусідній елемент. bodyElement.previousElementSibling
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.nextElementSibling</h3>}
            text={
              <p>Наступний сусідній елемент. bodyElement.nextElementSibling</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.parentElement</h3>}
            text={<p>Батьківський елемент. bodyElement.parentElement</p>}
          />
        </TableBody>
      </Table>
    </>
  );
}
