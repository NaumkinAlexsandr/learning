import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { addElemets } from "./DomConstPre.tsx";
import { addElemetsFn } from "./DomFunc.js";

export default function ElementsUA() {
  return (
    <>
      <Table id="dom_create">
        <TableBody>
          <TableOneCol text={<h3>Додавання та видалення елементів.</h3>} />
          <TableTwoEqualCol
            title={<h3>.append()</h3>}
            text={<p>Додає вузли або рядки в кінець вибраного тега.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.prepend()</h3>}
            text={<p>Вставляє вузли або рядки на початок вибраного тега.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.before()</h3>}
            text={<p>Вставляє вузли або рядки до вибраного тега.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.after()</h3>}
            text={<p>Вставляє вузли або рядки після вибраного тега.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.replaceWith()</h3>}
            text={<p>Замінює вибраний тег заданими вузлами або рядками.</p>}
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Приклад"}
            title={
              <p id="formated-text">
                <div className="list_ol">
                  <ol id="list_ol">
                    <li>0</li>
                    <li>1</li>
                    <li>2</li>
                  </ol>
                </div>
              </p>
            }
            text={
              <pre>
                <code>{addElemets}</code>
              </pre>
            }
            onClick={addElemetsFn}
          />
        </TableBody>
      </Table>
      <Table id="dom_cloneNode">
        <TableBody>
          <TableOneCol text={<h3>Клонування елементів.</h3>} />
          <TableTwoEqualCol
            title={<h3>.cloneNode(deep)</h3>}
            text={
              <p>
                Клонує елемент, якщо deep==true, то з усіма дочірніми
                елементами.
                <br />
                element.cloneNode(deep)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.cloneNode(true)</h3>}
            text={
              <p>
                Створює «глибокий» клон елемента – з усіма атрибутами та
                дочірніми елементами.
                <br />
                element.cloneNode(true)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.cloneNode(false)</h3>}
            text={
              <p>
                Клон буде без дочірніх елементів. <br />
                element.cloneNode(false)
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
