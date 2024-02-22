import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function ScriptingRU() {
  return (
    <>
      <Table id="html_scripting">
        <TableBody>
          <TableOneCol text={<h2>Скриптинг.</h2>} />
          <TableOneCol
            text={
              <p>
                Содержание мультимедийных HTML включает в себя другие материалы,
                даже если они не всегда легко взаимодействуют.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;canvas&gt; &lt;/canvas&gt;</h3>}
            text={
              <p>
                Элемент может быть использован для отрисовки графики через
                скрипты (обычно используется JavaScript). Например, его можно
                использовать для отрисовки графиков, делать композиции фото или
                даже выполнять анимации. Вы можете (и должны) дать
                альтернативное содержание внутри блока &lt;canvas&gt;. Этот
                контент будет рендерится в обоих браузерах, в старых которые не
                поддерживают &lt;canvas&gt; и в браузерах с отключённым
                JavaScript.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;noscript&gt; &lt;/noscript&gt;</h3>}
            text={
              <p>
                Определяет секцию &lt;html&gt; кода, которая будет вставлена,
                если в браузере пользователя нет либо отключена
                поддержка JavaScript.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;script&gt; &lt;/script&gt;</h3>}
            text={
              <p>
                Используется для встраивания или подключения исполняемого
                JavaScript кода.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
