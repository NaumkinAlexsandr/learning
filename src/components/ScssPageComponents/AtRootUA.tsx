import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  atRootOne,
  atRootTwo,
  atRootThree,
  atRootFour,
  atRootFive,
  atRootSix,
} from "./ScssConstPre.tsx";

export default function AtRootUA() {
  return (
    <>
      <Table id="scss_at-root">
        <TableBody>
          <TableOneCol text={<h3>@at-root</h3>} />
          <TableOneCol
            text={
              <p>
                Вилучає одне або кілька правил з батьківського селектора на
                кореневий рівень документа. Такий спосіб можна використовувати
                із селекторами першого рівня вкладення:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{atRootOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{atRootTwo}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Також цей спосіб може бути використаний з кількома селекторами:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{atRootThree}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{atRootFour}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                За умовчанням @at-root вилучає тільки селектори. Тим не менш,
                @at-root можна використовувати і для вилучення селекторів,
                вкладених у директиви, таких як @media. Наприклад:
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Ви можете використовувати @at-root (without: ...) для вилучення
                з будь-якої директиви. Також ви можете вилучати селектори
                відразу з кількох директив, просто розділивши їх пробілами:
                @at-root (without: media supports) вилучить елементи з запитів
                @media та @supports. <br />
                Існує два спеціальних значення у @at-root, які ви також можете
                використати. "rule" відноситься до Традиційним правилам CSS.
                <br />
                -Команда @at-root (without: rule) має таке ж значення, як
                @at-root без запитів. <br />
                -Команда @at-root (without: all) позначає, що стилі мають бути
                вилучені з усіх директив та правил CSS. <br />
                Якщо ви хочете вказати які директиви або правила включати, а не
                список тих, які мають бути вилучені, то ви Ви можете
                використовувати with замість without. Наприклад, команда
                @at-root (with: rule) означає, що необхідно вилучити елементи з
                усіх директив, але не торкатися вкладених правил CSS.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
