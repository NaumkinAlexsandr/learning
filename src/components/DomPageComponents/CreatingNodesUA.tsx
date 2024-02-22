import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";

export default function CreatingNodesUA() {
  return (
    <Table id="dom_createNodes">
      <TableBody>
        <TableOneCol text={<h3>Методи для створення вузлів.</h3>} />
        <TableTwoEqualCol
          title={<h3>document.write(html)</h3>}
          text={
            <p>
              Записує html на сторінку «прямо тут і зараз». Рядок html може бути
              динамічно згенерована, тому метод достатньо гнучкий. Ми можемо
              використовувати JavaScript, щоб створити повноцінну веб-сторінку
              та записати її в документ.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>document.createElement(tag)</h3>}
          text={<p>Створює елемент із заданим тегом.</p>}
        />
        <TableTwoEqualCol
          title={<h3>document.createTextNode(value)</h3>}
          text={<p>Створює текстовий вузол (рідко використовується)</p>}
        />
      </TableBody>
    </Table>
  );
}
