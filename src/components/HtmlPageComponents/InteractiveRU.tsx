import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function InteractiveRU() {
  return (
    <>
      <Table id="html_interactive">
        <TableBody>
          <TableOneCol text={<h2>Интерактивные элементы.</h2>} />
          <TableOneCol
            text={
              <p>
                HTML содержит в себе элементы, которые помогают создавать
                интерактивные объекты пользовательского интерфейса.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;details&gt; &lt;/details&gt;</h3>}
            text={
              <p>
                Используется для раскрытия скрытой (дополнительной) информации.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;dialog&gt; &lt;/dialog&gt;</h3>}
            text={
              <p>
                Определяет диалоговое окно или другой интерактивный элемент,
                такой как инспектор или окно. Элементы &lt;form&gt; могут
                интегрироваться с диалогом с помощью указания
                атрибута method="dialog". Когда отправляется такая форма, диалог
                закрывается с returnValue равным value нажатой кнопки submit.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;summary&gt; &lt;/summary&gt;</h3>}
            text={
              <p>
                Определяет сводку, заголовок или легенду для &lt;details&gt;
                поля раскрытия элемента. Щелчок по &lt;summary&gt; элементу
                переключает состояние родительского &lt;details&gt; элемента
                открытым и закрытым.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
