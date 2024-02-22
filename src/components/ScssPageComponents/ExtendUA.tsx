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

export default function ExtendUA() {
  return (
    <>
      <Table id="scss_extend">
        <TableBody>
          <TableOneCol text={<h3>@extend</h3>} />
          <TableOneCol
            text={
              <p>
                Припустимо, у нас є дизайн звичайної помилки та серйозної
                помилки. Ми використовуємо такий варіант розмітки:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>{extendOne}</pre>
              </p>
            }
            text={
              <p>
                <pre>{extendTwo}</pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Одиночний селектор може бути розширений більше, ніж одним
                селектор. Це означає, що він успадковує всі стилі всіх
                розширювальних селекторів.
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
                Ланцюгове(послідовне) розширення можливе для селектора, який
                розширюється іншим селектором, який, своєю чергою, розширюється
                третім селектором.
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
