import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function TableUA() {
  return (
    <>
      <Table id="html_table">
        <TableBody>
          <TableOneCol text={<h2>Зміст таблиць.</h2>} />
          <TableOneCol
            text={
              <p>
                Ці елементи використовуються для створення та обробки табличних
                даних.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;caption&gt; &lt;/caption&gt;</h3>}
            text={
              <p>
                Елемент заголовка таблиці. Якщо цей елемент використовується,
                він завжди повинен бути першим вкладеним елементом тега
                &lt;table&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;col /&gt; </h3>}
            text={
              <p>
                Визначає стовпець у таблиці та використовується для визначення
                загальної семантики на всіх осередках. Зазвичай він знаходиться
                в елементі &lt;colgroup&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;colgroup&gt; &lt;/colgroup&gt;</h3>}
            text={<p>Визначає групу стовпців у таблиці.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;table&gt; &lt;/table&gt;</h3>}
            text={
              <p>
                Інформація представлена ​​у двовимірній таблиці, що складається
                з рядків і стовпців осередків, що містять дані.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;td&gt; &lt;/td&gt;</h3>}
            text={
              <p>
                Определяет ячейку таблицы которая содержит данные. Участвует
                в табличной модели.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;th&gt; &lt;/th&gt;</h3>}
            text={
              <p>Визначає осередок як заголовок групи осередків таблиці.</p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;tr&gt; &lt;/tr&gt;</h3>}
            text={<p>Визначає ряд осередків у таблиці.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;thead&gt; &lt;/thead&gt;</h3>}
            text={
              <p>Набір рядків, що визначають заголовок стовпців таблиці.</p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;tbody&gt; &lt;/tbody&gt;</h3>}
            text={<p>Набір рядків таблиці, що становлять тіло таблиці.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;tfoot&gt; &lt;/tfoot&gt;</h3>}
            text={
              <p>
                Елемент підвалу таблиці визначальний набір рядків підсумовують
                стовпці таблиці.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
