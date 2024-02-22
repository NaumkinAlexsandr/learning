import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import { error, warn, debug } from "./ScssConstPre.tsx";

export default function OtherDirectiveRU() {
  return (
    <>
      <Table id="scss_debug">
        <TableBody>
          <TableOneCol text={<h3>@debug</h3>} />
          <TableOneCol
            text={
              <p>
                Выводит значения функций Sass средствами стандартного вывода
                ошибок. Это полезно для отладки функций Sass, особенно для тех,
                что содержат сложную структуру данных.
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
                Выводит значения выражений Sass средствами стандартного вывода
                ошибок. Данная директива полезна для библиотек, которым нужно
                предупреждать пользователей об использовании устаревших или
                восстановленных после незначительных ошибок миксинов. Есть два
                основных различия между warn и debug: <br />
                -Вы можете отключить отображение предупреждений флагом --quiet в
                командной строке или опцией Sass :quiet. <br />
                -Предупреждение будет выведено вместе с отрывком таблицы стилей,
                чтобы пользователь мог понять, где в коде требуется его
                внимание.
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
                Отображает значение выражений и функций Sass как фатальную
                ошибку, включая нормальную часть стека трассировки. Эта
                директива полезна для проверки аргументов миксинов и функций.
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
