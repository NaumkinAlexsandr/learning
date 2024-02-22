import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import { classes } from "./TsConstPre.tsx";

export default function ClassesRU() {
  return (
    <>
      <Table id="ts_classes">
        <TableBody>
          <TableOneCol text={<h2>Classes - Классы.</h2>} />
          <TableOneCol
            text={
              <p>
                Создаем класс User. Класс имеет конструктор, принимающий три
                параметра: name, age и nickName. Внутри конструктора Значения
                параметров придаются соответствующим свойствам класса. Затем, с
                помощью оператора new, создается новый экземпляр класса User с
                переданными значениями.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Таким образом, этот код создает объект alex типа User с именем
                'Alexsander', возрастом 31 и ником 'Alex'.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <pre>
                  <code>{classes}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
