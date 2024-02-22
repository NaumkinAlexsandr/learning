import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function InteractiveUA() {
  return (
    <>
      <Table id="html_interactive">
        <TableBody>
          <TableOneCol text={<h2>Інтерактивні елементи.</h2>} />
          <TableOneCol
            text={
              <p>
                HTML містить у собі елементи, які допомагають створювати
                інтерактивні об'єкти інтерфейсу користувача.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;details&gt; &lt;/details&gt;</h3>}
            text={
              <p>
                Використовується для розкриття прихованої (додаткової)
                інформації.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;dialog&gt; &lt;/dialog&gt;</h3>}
            text={
              <p>
                Визначає діалогове вікно або інший інтерактивний елемент,
                наприклад, інспектор або вікно. Елементи &lt;form&gt; можуть
                інтегруватися з діалогом за допомогою вказівки атрибуту method =
                "dialog". Коли відправляється така форма, діалог закривається з
                returnValue рівним value натиснутою кнопки submit.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;summary&gt; &lt;/summary&gt;</h3>}
            text={
              <p>
                Визначає зведення, заголовок або легенду для &lt;details&gt;
                поле розкриття елемента. Клацніть по &lt;summary&gt; елементу
                перемикає стан батьківського &lt;details&gt; елемента відкритим
                та закритим.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
