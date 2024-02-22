import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function SizeRU() {
  return (
    <>
      <Table id="css_size">
        <TableBody>
          <TableOneCol text={<h2>Размеры элемента.</h2>} />
          <TableTwoCol
            title={<h3>height:</h3>}
            text={<p>Позволят обозначать высоту элемента.</p>}
          />
          <TableTwoCol
            title={<h3>max-height:</h3>}
            text={<p>Устанавливает максимальную высоту элемента.</p>}
          />
          <TableTwoCol
            title={<h3>min-height:</h3>}
            text={<p>Устанавливает минимальную высоту элемента.</p>}
          />
          <TableTwoCol
            title={<h3>width:</h3>}
            text={<p>Позволят обозначать ширину элемента.</p>}
          />
          <TableTwoCol
            title={<h3>max-width:</h3>}
            text={<p>Устанавливает максимальную ширину элемента.</p>}
          />
          <TableTwoCol
            title={<h3>min-width:</h3>}
            text={<p>Устанавливает минимальную ширину элемента.</p>}
          />
          <TableTwoCol
            title={<h3>max-block-size:</h3>}
            text={
              <p>
                Определяет максимальный горизонтальный или вертикальный размер
                блока элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>min-block-size:</h3>}
            text={
              <p>
                Определяет минимальный горизонтальный или вертикальный размер
                блока элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>max-inline-size:</h3>}
            text={
              <p>
                Определяет максимальный размер блока элемента по горизонтали или
                вертикали в зависимости от режима записи.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>min-inline-size:</h3>}
            text={
              <p>
                Определяет минимальный размер блока элемента по горизонтали или
                вертикали в зависимости от режима записи.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
