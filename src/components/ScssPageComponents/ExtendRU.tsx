import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  extendOne,
  extendTwo,
  extendThree,
  extendFour,
  extendFive,
  extendSix,
} from "./ScssConstPre.tsx";

export default function ExtendRU() {
  return (
    <>
      <Table id="scss_extend">
        <TableBody>
          <TableOneCol text={<h3>@extend</h3>} />
          <TableOneCol
            text={
              <p>
                Допустим, у нас есть дизайн обычной ошибки и серьезной ошибки.
                Мы используем такой вариант разметки:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{extendOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{extendTwo}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Одиночный селектор может быть расширен больше, чем одним
                селектором. Это означает, что он наследует все стили всех
                расширяющих селекторов.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{extendThree}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{extendFour}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Цепное(последовательное) расширение возможно для селектора,
                который расширяется другим селектором, который, в свою очередь,
                расширяется третьим селектором.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{extendFive}</code>
                </pre>
                v
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{extendSix}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
