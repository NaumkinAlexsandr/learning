import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function TableRU() {
  return (
    <>
      <Table id="html_table">
        <TableBody>
          <TableOneCol text={<h2>Содержание таблиц.</h2>} />
          <TableOneCol
            text={
              <p>
                Эти элементы используются для создания и обработки табличных
                данных.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;caption&gt; &lt;/caption&gt;</h3>}
            text={
              <p>
                Элемент заголовка таблицы. Если этот элемент используется,
                он всегда должен быть первым вложенным элементом тэга 
                &lt;table&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;col /&gt; </h3>}
            text={
              <p>
                Определяет столбец в таблице и используется для определения
                общей семантики на всех ячейках. Обычно он находится в элементе
                &lt;colgroup&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;colgroup&gt; &lt;/colgroup&gt;</h3>}
            text={<p>Определяет группу столбцов в таблице.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;table&gt; &lt;/table&gt;</h3>}
            text={
              <p>
                Информацию представленная в двумерной таблице, состоящей из
                строк и столбцов ячеек, содержащих данные.
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
            text={<p>Определяет ячейку как заголовок группы ячеек таблицы.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;tr&gt; &lt;/tr&gt;</h3>}
            text={<p>Определяет ряд ячеек в таблице.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;thead&gt; &lt;/thead&gt;</h3>}
            text={<p>Набор строк, определяющих заголовок столбцов таблицы.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;tbody&gt; &lt;/tbody&gt;</h3>}
            text={<p>Набор строк таблицы, составляющие тело таблицы.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;tfoot&gt; &lt;/tfoot&gt;</h3>}
            text={
              <p>
                Элемент подвала таблицы определяющий набор строк суммирующих
                столбцы таблицы.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
