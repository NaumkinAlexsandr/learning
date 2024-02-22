import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";

export default function CreatingNodesRU() {
  return (
    <>
      <Table id="dom_createNodes">
        <TableBody>
          <TableOneCol text={<h3>Методы для создания узлов.</h3>} />
          <TableTwoEqualCol
            title={<h3>document.write(html)</h3>}
            text={
              <p>
                Записывает html на страницу «прямо здесь и сейчас». Строка html
                может быть динамически сгенерирована, поэтому метод достаточно
                гибкий. Мы можем использовать JavaScript, чтобы создать
                полноценную веб-страницу и записать её в документ.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>document.createElement(tag)</h3>}
            text={<p>Создаёт элемент с заданным тегом.</p>}
          />
          <TableTwoEqualCol
            title={<h3>document.createTextNode(value)</h3>}
            text={<p>Создаёт текстовый узел (редко используется)</p>}
          />
        </TableBody>
      </Table>
    </>
  );
}
