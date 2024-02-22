import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { changeAttribute } from "./DomConstPre.tsx";
import { changeAttributeFn } from "./DomFunc.js";

export default function AttributesClassUA() {
  return (
    <>
      <Table id="dom_attribute">
        <TableBody>
          <TableOneCol text={<h3>Атрибути.</h3>} />
          <TableOneCol
            text={
              <p>
                За допомогою нестандартних атрибутів можна прив'язати до
                елемента дані, доступні у JavaScript. Це робиться за допомогою
                атрибутів з назвами, що починаються на data-
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.hasAttribute</h3>}
            text={
              <p>
                Перевіряє наявність атрибуту. <br />
                element.hasAttribute(name)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.getAttribute</h3>}
            text={
              <p>
                Отримує значення атрибута. <br />
                element.getAttribute(name)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.setAttribute</h3>}
            text={
              <p>
                Встановлює атрибут. <br />
                element.setAttribute(ім'я, значення)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.removeAttribute</h3>}
            text={
              <p>
                Видаляє атрибут.
                <br />
                element.removeAttribute(name)
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Приклад використання"}
            title={
              <p id="formated-text">
                Є тег &lt;p id="attribute-text"&gt;&lt;/p&gt;
                <br />
                Перевіримо, чи є в теги id, виведемо id і додамо class="text"
                <br />
                <span id="attribute-text">Початковий текст.</span>
              </p>
            }
            text={
              <pre>
                <code>{changeAttribute}</code>
              </pre>
            }
            onClick={changeAttributeFn}
          />
        </TableBody>
      </Table>
      <Table id="dom_classes">
        <TableBody>
          <TableOneCol text={<h3>Класи.</h3>} />
          <TableTwoEqualCol
            title={<h3>.className</h3>}
            text={
              <p>
                Відповідає за значення атрибута class елемента.
                element.className
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.classList</h3>}
            text={
              <p>
                Повертає псевдомасив DOMTokenList, що містить усі класи елемент.{" "}
                <br />
                element.classList
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.classList.contains</h3>}
            text={
              <p>
                Повертає true/false, залежно від того, чи є елемент клас класу.{" "}
                <br />
                element.classList.contains("class")
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.classList.add</h3>}
            text={
              <p>
                Додає клас. <br />
                element.classList.add("class")
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.classList.remove</h3>}
            text={
              <p>
                Видаляє клас. <br />
                element.classList.remove("class")
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.classList.toggle</h3>}
            text={
              <p>
                Якщо класу немає, додає його, якщо є – видаляє.
                <br />
                element.classList.toggle("class")
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
