import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import { error, warn, debug } from "./ScssConstPre.tsx";

export default function OtherDirectiveUA() {
  return (
    <>
      <Table id="scss_debug">
        <TableBody>
          <TableOneCol text={<h3>@debug</h3>} />
          <TableOneCol
            text={
              <p>
                Виводить значення функцій Sass засобами стандартного виведення
                помилок. Це корисно для налагодження функцій Sass, особливо для
                тих, що містять складну структуру даних.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <pre>
                  <code>{debug}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="scss_warn">
        <TableBody>
          <TableOneCol text={<h3>@warn</h3>} />
          <TableOneCol
            text={
              <p>
                Виводить значення виразів Sass засобами стандартного виведення
                помилок. Ця директива корисна для бібліотек, яким потрібно
                попереджати користувачів про використання застарілих чи
                відновлених після незначних помилок міксинів. Є дві основні
                відмінності між warn і debug: <br />
                -Ви можете вимкнути відображення попереджень прапором --quiet в
                командному рядку або опцією Sass: quiet. <br />
                -Попередження буде виведено разом з уривком таблиці стилів, щоб
                користувач міг зрозуміти, де в коді потрібна його увага.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <pre>
                  <code>{warn}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="scss_error">
        <TableBody>
          <TableOneCol text={<h3>@error</h3>} />
          <TableOneCol
            text={
              <p>
                Відображає значення виразів та функцій Sass як фатальну помилку,
                включаючи нормальну частину стека трасування. Ця директива є
                корисною для перевірки аргументів міксинів. та функцій.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <pre>
                  <code>{error}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
