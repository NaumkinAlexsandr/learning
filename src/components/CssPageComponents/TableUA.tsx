import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";

export default function TableUA() {
  return (
    <>
      <Table id="css_table">
        <TableBody>
          <TableOneCol text={<h2>Таблиці.</h2>} />
          <TableTwoCol
            title={<h3>caption-side:</h3>}
            text={
              <p>
                Визначає положення заголовка таблиці, який задається за
                допомогою тега &lt;caption&gt;, щодо самої таблиці.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>columns:</h3>}
            text={
              <p>Встановлює кількість стовпців, а також ширину цих стовпців.</p>
            }
          />
          <TableTwoCol
            title={<h3>column-width:</h3>}
            text={<p>Встановлює ідеальну ширину стовпця.</p>}
          />
          <TableTwoCol
            title={<h3>column-count:</h3>}
            text={<p>Розбиває вміст елемента на задану кількість стовпців.</p>}
          />
          <TableTwoCol
            title={<h3>column-fill:</h3>}
            text={
              <p>
                Застосовується до батьківського елемента, розбитого на стовпці
                та вказує як вміст розташовується всередині стовпця.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>column-gap</h3>}
            text={<p>Встановлює проміжок (інтервал) між колонками.</p>}
          />
          <TableTwoCol
            title={<h3>column-span:</h3>}
            text={
              <p>
                Дозволяє елементу охоплювати всі стовпці. Наприклад, для
                заголовка.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>column-rule:</h3>}
            text={<p>Встановлює ширину, стиль та колір лінії.</p>}
          />
          <TableTwoCol
            title={<h3>column-rule-color:</h3>}
            text={
              <p>
                Встановлює колір лінії, розташованої між колонками при
                мультиколонної верстки.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>column-rule-style:</h3>}
            text={
              <p>
                Встановлює стиль лінії, розташованої між колонками при
                мультиколонної верстки.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>column-rule-width:</h3>}
            text={<p>Задає ширину лінії, намальованої між стовпцями.</p>}
          />
          <TableTwoCol
            title={<h3>empty-cells:</h3>}
            text={
              <p>
                Визначає, чи відображатимуться межі та фон навколо &lt;table&gt;
                осередків, які не мають видимого вмісту.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>table-layout:</h3>}
            text={
              <p>
                Вказує алгоритм, який використовується для розмітки
                &lt;table&gt; осередків, рядків та стовпців.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
