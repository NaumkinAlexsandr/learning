import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";

export default function TableRU() {
  return (
    <>
      <Table id="css_table">
        <TableBody>
          <TableOneCol text={<h2>Таблицы.</h2>} />
          <TableTwoCol
            title={<h3>caption-side:</h3>}
            text={
              <p>
                Определяет положение заголовка таблицы, который задается с
                помощью тега &lt;caption&gt;, относительно самой таблицы.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>columns:</h3>}
            text={
              <p>
                Устанавливает количество столбцов, а также ширину этих столбцов.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>column-width:</h3>}
            text={<p>Устанавливает идеальную ширину столбца.</p>}
          />
          <TableTwoCol
            title={<h3>column-count:</h3>}
            text={
              <p>Разбивает содержимое элемента на заданное число столбцов.</p>
            }
          />
          <TableTwoCol
            title={<h3>column-fill:</h3>}
            text={
              <p>
                Применяется к родительскому элементу, разбитому на столбцы и
                указывает как содержимое располагается внутри столбца.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>column-gap</h3>}
            text={<p>Устанавливает промежуток (интервал) между колонками.</p>}
          />
          <TableTwoCol
            title={<h3>column-span:</h3>}
            text={
              <p>
                Позволяет элементу охватывать все столбцы. Например для
                заголовка.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>column-rule:</h3>}
            text={<p>Устанавливает ширину, стиль и цвет линии.</p>}
          />
          <TableTwoCol
            title={<h3>column-rule-color:</h3>}
            text={
              <p>
                Устанавливает цвет линии, расположенной между колонками при
                мультиколоночной вёрстке.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>column-rule-style:</h3>}
            text={
              <p>
                Устанавливает стиль линии, расположенной между колонками при
                мультиколоночной вёрстке.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>column-rule-width:</h3>}
            text={<p>Задает ширину линии, нарисованной между столбцами.</p>}
          />
          <TableTwoCol
            title={<h3>empty-cells:</h3>}
            text={
              <p>
                Определяет, будут ли отображаться границы и фон вокруг
                &lt;table&gt; ячеек, не имеющих видимого содержимого.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>table-layout:</h3>}
            text={
              <p>
                Задает алгоритм, используемый для разметки &lt;table&gt; ячеек,
                строк и столбцов.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
