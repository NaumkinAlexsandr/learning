import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { addElemets } from "./DomConstPre.tsx";
import { addElemetsFn } from "./DomFunc.js";

export default function ElementsRU() {
  return (
    <>
      <Table id="dom_create">
        <TableBody>
          <TableOneCol text={<h3>Добавление и удаление элементов.</h3>} />
          <TableTwoEqualCol
            title={<h3>.append()</h3>}
            text={<p>Добавляет узлы или строки в конец выбранного тега.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.prepend()</h3>}
            text={<p>Вставляет узлы или строки в начало выбранного тега.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.before()</h3>}
            text={<p>Вставляет узлы или строки до выбранного тега.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.after()</h3>}
            text={<p>Вставляет узлы или строки после выбранного тега.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.replaceWith()</h3>}
            text={<p>Заменяет выбранный тег заданными узлами или строками.</p>}
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Пример"}
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
          <TableOneCol text={<h3>Клонирование элементов.</h3>} />
          <TableTwoEqualCol
            title={<h3>.cloneNode(deep)</h3>}
            text={
              <p>
                Клонирует элемент, если deep==true, то со всеми дочерними
                элементами.
                <br />
                element.cloneNode(deep)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.cloneNode(true)</h3>}
            text={
              <p>
                Создаёт «глубокий» клон элемента – со всеми атрибутами и
                дочерними элементами.
                <br />
                element.cloneNode(true)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.cloneNode(false)</h3>}
            text={
              <p>
                Клон будет без дочерних элементов. <br />
                element.cloneNode(false)
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
