import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { changeStyle, getComputedStyle } from "./DomConstPre.tsx";
import { changeStyleFn, getStyle } from "./DomFunc.js";

export default function ChangePropertiesRU() {
  return (
    <>
      <Table id="dom_changeProperties">
        <TableBody>
          <TableOneCol text={<h3>Изменение свойств элементов HTML.</h3>} />
          <TableTwoEqualCol
            title={<h3>.innerHTML</h3>}
            text={
              <p>
                Изменяет внутренний HTML элемент.
                <br />
                element.innerHTML = новое содержимое html
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.outerHTML</h3>}
            text={
              <p>
                Отличие от innerHTML состоит в том что кроме содержимого мы
                получаем объект целиком.
                <br />
                element.outerHTML = новое содержимое html
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.insertAdjacentHTML</h3>}
            text={
              <p>
                Позволяет вставлять произвольный HTML в любое место документа, в
                том числе и между узлами!
                <br />
                html - Строка HTML, которую нужно вставить. <br />
                where - Куда по отношению к elem вставлять строку. Всего четыре
                варианта: <br />
                beforeBegin – перед elem. <br />
                afterBegin – внутрь elem, в самое начало. <br />
                beforeEnd – внутрь elem, в конец. <br />
                afterEnd – после elem. <br />
                element.insertAdjacentHTML(where, html);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.insertAdjacentElement</h3>}
            text={
              <p>
                Метод добавляет переданный элемент в DOM-дерево относительно
                элемента, вызвавшего метод.
                <br />
                element - Элемент, добавляемый в DOM-дерево. <br />
                where - Куда по отношению к elem вставлять строку. Всего четыре
                варианта:
                <br />
                beforeBegin – перед elem. <br />
                afterBegin – внутрь elem, в самое начало. <br />
                beforeEnd – внутрь elem, в конец. <br />
                afterEnd – после elem. <br />
                element.insertAdjacentElement(where, element);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.insertAdjacentText</h3>}
            text={
              <p>
                Метод помещает заданный текстовый узел в указанную позицию
                относительно элемента, который передан в вызове метода.
                <br />
                element - Текст, который будет помещён в заданную позицию.
                <br />
                where - Куда по отношению к elem вставлять строку. Всего четыре
                варианта: <br />
                beforeBegin – перед elem. <br />
                afterBegin – внутрь elem, в самое начало. <br />
                beforeEnd – внутрь elem, в конец. <br />
                afterEnd – после elem. <br />
                element.insertAdjacentText(where, element);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.textContent</h3>}
            text={
              <p>
                Позволяет получить непосредственно содержимое. При этом внесеные
                изменения передаются в виде строки полностью. <br />
                element.textContent = новое содержимое html
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Пример style"}
            title={
              <p id="formated-text">
                <span id="style-text">Начальный текст.</span>
              </p>
            }
            text={
              <pre>
                <code>{changeStyle}</code>
              </pre>
            }
            onClick={changeStyleFn}
          />
          <TableTwoEqualCol
            title={<h3>getComputedStyle</h3>}
            text={
              <p>
                Позволяет получить все стили элемента. <br />
                getComputedStyle(element)
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Пример getComputedStyle"}
            title={
              <p id="formated-text">
                <div className="getStyle">Text</div>
                <div className="getStyle1"></div>
              </p>
            }
            text={
              <pre>
                <code>{getComputedStyle}</code>
              </pre>
            }
            onClick={getStyle}
          />
        </TableBody>
      </Table>
    </>
  );
}
