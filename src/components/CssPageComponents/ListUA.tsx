import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function ListUA() {
  return (
    <>
      <Table id="css_list">
        <TableBody>
          <TableOneCol text={<h3>Робота з макросом.</h3>} />
          <TableTwoCol
            title={<h3>list-style:</h3>}
            text={
              <p>
                Універсальна властивість, що дозволяє одночасно встановити стиль
                маркера, його положення, а також зображення, яке буде
                використовуватися як маркер.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>list-style-image:</h3>}
            text={
              <p>
                Дозволяє вставити картинку замість макросу. <br />
                none - Скасує зображення як маркер для батьківського елемента.
                <br />
                url - Відносний чи абсолютний шлях до графічного файлу. Значення
                можна вказувати в одинарних, подвійних лапках або без них.
                <br />
                inherit - успадковує значення батька.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>list-style-position:</h3>}
            text={
              <p>
                Обтічність макросу. <br />
                inside - Маркер є частиною текстового блоку та відображається в
                елементі списку. <br />
                outside - Текст вирівнюється по лівому краю, а маркери
                розміщуються за за межами текстового блоку.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>list-style-type:</h3>}
            text={
              <p>
                Змінює вигляд макросу. <br />
                circle - Маркер у вигляді гуртка. <br />
                disc - Маркер у вигляді крапки. <br />
                square - Маркер у вигляді квадрата.
                <br />
                armenian - Традиційна вірменська нумерація. <br />
                decimal - Арабські числа (1, 2, 3, 4, ...). <br />
                decimal-leading-zero - Арабські числа з нулем попереду для цифр
                менше десяти (01, 02, 03,...). <br />
                georgian - Традиційна грузинська нумерація.
                <br />
                lower-alpha - Рядкові латинські літери (a, b, c, d,...).
                <br />
                lower-greek - Рядкові грецькі літери (α, β, γ, δ,...).
                <br />
                lower-latin - Це значення аналогічно lower-alpha.
                <br />
                lower-roman - Римські числа в нижньому регістрі (i, ii, iii, iv,
                v,...). <br />
                upper-alpha - Великі латинські літери (A, B, C, D,...). <br />
                upper-latin - Це значення аналогічне upper-alpha.
                <br />
                upper-roman - Римські числа у верхньому регістрі (I, II, III,
                IV, V,...). <br />
                none - Скасує маркери для списку. <br />
                inherit - успадковує значення батька.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
