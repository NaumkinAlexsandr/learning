import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  mediaOne,
  mediaTwo,
  mediaThree,
  mediaFour,
  mediaFive,
  mediaSix,
} from "./ScssConstPre.tsx";

export default function MediaRU() {
  return (
    <>
      <Table id="scss_media">
        <TableBody>
          <TableOneCol text={<h3>@media</h3>} />
          <TableOneCol
            text={
              <p>
                Директива @media работает так же, как и стандартное правило CSS,
                только с дополнительными возможностями: директива может
                вкладываться в правила CSS. Если директива вложена в
                css-правило, то при компиляции она будет поднята наверх таблицы
                стилей, а все селекторы в которых была директива переместятся
                внутрь @media. Такой метод позволяет легко добавлять правила в
                @media без повторения селекторов или нарушения потока таблицы
                стилей. Например:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>{mediaOne}</pre>
              </p>
            }
            text={
              <p>
                <pre>{mediaTwo}</pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Запросы могут вкладываться друг в друга. После компиляции эти
                @media будут объединены оператором and.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>{mediaThree}</pre>
              </p>
            }
            text={
              <p>
                <pre>{mediaFour}</pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Ну и, наконец, @media запросы могут содержать в себе все
                возможности SassScript (включая переменные, функции и операторы)
                в именах компонентов и различных значений.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>{mediaFive}</pre>
              </p>
            }
            text={
              <p>
                <pre>{mediaSix}</pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
