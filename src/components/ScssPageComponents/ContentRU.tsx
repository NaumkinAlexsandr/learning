import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  contentOne,
  contentTwo,
  contentThree,
  contentFour,
  contentFive,
} from "./ScssConstPre.tsx";

export default function ContentRU() {
  return (
    <>
      <Table id="scss_content">
        <TableBody>
          <TableOneCol text={<h3>Блоки контента в миксинах.</h3>} />
          <TableOneCol
            text={
              <p>
                Существует возможность передачи блока стилей в миксин, которые
                будут расположены среди стилей, подключаемых этим миксином. Эти
                стили будут размещены вместо директив @content, расположенных
                внутри миксина. Это даёт возможность создания абстракций,
                зависящих от конструкций селекторов или директив. Например:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{contentOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{contentTwo}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Блоки контента, переданные в миксин, вычисляются в той же
                области видимости, где определён этот блок, а не миксин. Это
                значит, что локальные переменные миксина не могут быть
                использованы в передаваемом блоке контента и переменные будут
                восприняты как глобальные:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{contentThree}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{contentFour}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Кроме того, это означает, что переменные и миксины, которые
                используются в передаваемом блоке, зависят от других стилей,
                вблизи которых блок объявлен:
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <pre>
                  <code>{contentFive}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
