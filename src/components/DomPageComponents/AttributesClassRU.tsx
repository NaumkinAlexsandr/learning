import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { changeAttribute } from "./DomConstPre.tsx";
import { changeAttributeFn } from "./DomFunc.js";

export default function AttributesClassRU() {
  return (
    <>
      <Table id="dom_attribute">
        <TableBody>
          <TableOneCol text={<h3>Атрибуты.</h3>} />
          <TableOneCol
            text={
              <p>
                С помощью нестандартных атрибутов можно привязать к элементу
                данные, доступные в JavaScript. Это делается с помощью атрибутов
                с названиями, которые начинаются на data-
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.hasAttribute</h3>}
            text={
              <p>
                Проверяет наличие атрибута. <br />
                element.hasAttribute(name)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.getAttribute</h3>}
            text={
              <p>
                Получает значение атрибута. <br />
                element.getAttribute(name)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.setAttribute</h3>}
            text={
              <p>
                Устанавливает атрибут. <br />
                element.setAttribute(имя, значение)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.removeAttribute</h3>}
            text={
              <p>
                Удаляет атрибут.
                <br />
                element.removeAttribute(name)
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Пример использования"}
            title={
              <p id="formated-text">
                Есть тег &lt;p id="attribute-text"&gt;&lt;/p&gt;
                <br />
                Проверим есть ли в теги id, выведим id и добавим class="text"
                <span id="attribute-text">Начальный текст.</span>
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
          <TableOneCol text={<h3>Классы.</h3>} />
          <TableTwoEqualCol
            title={<h3>.className</h3>}
            text={
              <p>
                Отвечает за значение атрибута class элемента. element.className
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.classList</h3>}
            text={
              <p>
                Возвращает псевдомассив DOMTokenList, содержащий все классы
                элемента. <br />
                element.classList
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.classList.contains</h3>}
            text={
              <p>
                Возвращает true/false, в зависимости от того, есть ли у элемента
                класс class. <br />
                element.classList.contains("class")
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.classList.add</h3>}
            text={
              <p>
                Добавляет класс. <br />
                element.classList.add("class")
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.classList.remove</h3>}
            text={
              <p>
                Удаляет класс. <br />
                element.classList.remove("class")
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.classList.toggle</h3>}
            text={
              <p>
                Если класса нет, добавляет его, если есть – удаляет.
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
