import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function SizeUA() {
  return (
    <>
      <Table id="css_size">
        <TableBody>
          <TableOneCol text={<h2>Розміри елемента.</h2>} />
          <TableTwoCol
            title={<h3>height:</h3>}
            text={<p>Дозволять позначати висоту елемента.</p>}
          />
          <TableTwoCol
            title={<h3>max-height:</h3>}
            text={<p>Встановлює максимальну висоту елемента.</p>}
          />
          <TableTwoCol
            title={<h3>min-height:</h3>}
            text={<p>Встановлює мінімальну висоту елемента.</p>}
          />
          <TableTwoCol
            title={<h3>width:</h3>}
            text={<p>Дозволять позначати ширину елемента.</p>}
          />
          <TableTwoCol
            title={<h3>max-width:</h3>}
            text={<p>Встановлює максимальну ширину елемента.</p>}
          />
          <TableTwoCol
            title={<h3>min-width:</h3>}
            text={<p>Встановлює мінімальну ширину елемента.</p>}
          />
          <TableTwoCol
            title={<h3>max-block-size:</h3>}
            text={
              <p>
                Визначає максимальний горизонтальний або вертикальний розмір
                блоку елемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>min-block-size:</h3>}
            text={
              <p>
                Визначає мінімальний горизонтальний або вертикальний розмір
                блоку елемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>max-inline-size:</h3>}
            text={
              <p>
                Визначає максимальний розмір блоку елемента по горизонталі або
                вертикалі залежно від режиму запису.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>min-inline-size:</h3>}
            text={
              <p>
                Визначає мінімальний розмір блоку елемента по горизонталі або
                вертикалі залежно від режиму запису.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
