import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function ScriptingUA() {
  return (
    <>
      <Table id="html_scripting">
        <TableBody>
          <TableOneCol text={<h2>Скріптінг.</h2>} />
          <TableOneCol
            text={
              <p>
                Зміст мультимедійних HTML включає інші матеріали, навіть якщо
                вони не завжди легко взаємодіють.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;canvas&gt; &lt;/canvas&gt;</h3>}
            text={
              <p>
                Елемент може бути використаний для відтворення графіки через
                скрипти (зазвичай використовується JavaScript). Наприклад, його
                можна використовувати для відтворення графіків, робити
                композиції фото або навіть виконувати анімації. Ви можете (і
                повинні) дати альтернативний вміст усередині блоку
                &lt;canvas&gt;. Цей контент буде рендеруватись в обох браузерах,
                у старих які не підтримують &lt;canvas&gt; та у браузерах з
                відключеним JavaScript.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;noscript&gt; &lt;/noscript&gt;</h3>}
            text={
              <p>
                Визначає секцію &lt;html&gt; коду, яка буде вставлено, якщо в
                браузері користувача немає або вимкнено підтримка JavaScript.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;script&gt; &lt;/script&gt;</h3>}
            text={
              <p>
                Використовується для вбудовування або підключення виконуваного
                JavaScript кода.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
