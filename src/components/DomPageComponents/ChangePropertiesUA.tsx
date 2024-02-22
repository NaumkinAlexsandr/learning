import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { changeStyle, getComputedStyle } from "./DomConstPre.tsx";
import { changeStyleFn, getStyle } from "./DomFunc.js";

export default function ChangePropertiesUA() {
  return (
    <>
      <Table id="dom_changeProperties">
        <TableBody>
          <TableOneCol text={<h3>Зміна властивостей елементів HTML.</h3>} />
          <TableTwoEqualCol
            title={<h3>.innerHTML</h3>}
            text={
              <p>
                Змінює внутрішній HTML елемент.
                <br />
                element.innerHTML = новий вміст html
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.outerHTML</h3>}
            text={
              <p>
                Відмінність від innerHTML полягає в тому, що крім вмісту ми
                отримуємо об'єкт цілком.
                <br />
                element.outerHTML = новий вміст html
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.insertAdjacentHTML</h3>}
            text={
              <p>
                Дозволяє вставляти довільний HTML у будь-яке місце документа, в
                тому числі і між вузлами!
                <br />
                html - Рядок HTML, який потрібно вставити. <br />
                where - Куди по відношенню до elem вставляти рядок. Усього
                чотири варіанти: <br />
                beforeBegin - перед elem. <br />
                afterBegin – всередину elem, у саме початок. <br />
                beforeEnd – всередину elem, наприкінці. <br />
                afterEnd – після elem. <br />
                element.insertAdjacentHTML(where, html);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.insertAdjacentElement</h3>}
            text={
              <p>
                Метод додає переданий елемент у DOM-дерево щодо елемента, що
                спричинив метод.
                <br />
                element - Елемент, що додається до DOM-дерева. <br />
                where - Куди до elem вставляти рядок. Усього чотири варіанти:
                <br />
                beforeBegin - перед elem. <br />
                afterBegin – всередину elem, у саме початок. <br />
                beforeEnd – всередину elem, наприкінці. <br />
                afterEnd – після elem. <br />
                element.insertAdjacentElement(where, element);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.insertAdjacentText</h3>}
            text={
              <p>
                Метод поміщає заданий текстовий вузол у вказану позицію щодо
                елемента, який переданий у виклик методу.
                <br />
                element - Текст, який буде поміщений у задану позицію.
                <br />
                where - Куди по відношенню до elem вставляти рядок. Усього
                чотири варіанти: <br />
                beforeBegin - перед elem. <br />
                afterBegin – всередину elem, у саме початок. <br />
                beforeEnd – всередину elem, наприкінці. <br />
                afterEnd – після elem. <br />
                element.insertAdjacentText(where, element);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.textContent</h3>}
            text={
              <p>
                Дозволяє отримати безпосередньо вміст. При цьому внесені зміни
                передаються у вигляді рядка повністю. <br />
                element.textContent = новий вміст html
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Приклад style"}
            title={
              <p id="formated-text">
                <span id="style-text">Початковий текст.</span>
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
                Дозволяє отримати всі стилі елемента. <br />
                getComputedStyle(element)
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Приклад getComputedStyle"}
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
