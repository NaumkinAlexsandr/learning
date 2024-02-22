import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import { classes } from "./TsConstPre.tsx";

export default function ClassesUA() {
  return (
    <>
      <Table id="ts_classes">
        <TableBody>
          <TableOneCol text={<h2>Classes - Класи.</h2>} />
          <TableOneCol
            text={
              <p>
                Створюємо клас User. Клас має конструктор, який приймає три
                параметра: name, age та nickName. Усередині конструктора
                значення параметрів надаються відповідним властивостям класу.
                Потім, з допомогою оператора new, створюється новий екземпляр
                класу User з переданими значеннями.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Таким чином, цей код створює об'єкт alex типу User з ім'ям
                'Alexsander', віком 31 та ніком 'Alex'.
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
