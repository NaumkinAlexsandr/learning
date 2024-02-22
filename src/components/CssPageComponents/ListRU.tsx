import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function ListRU() {
  return (
    <>
      <Table id="css_list">
        <TableBody>
          <TableOneCol text={<h3>Работа с макросом.</h3>} />
          <TableTwoCol
            title={<h3>list-style:</h3>}
            text={
              <p>
                Универсальное свойство, позволяющее одновременно задать стиль
                маркера, его положение, а также изображение, которое будет
                использоваться в качестве маркера.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>list-style-image:</h3>}
            text={
              <p>
                Позволяет вставить картинку вместо макроса. <br />
                none - Отменяет изображение в качестве маркера для родительского
                элемента. <br />
                url - Относительный или абсолютный путь к графическому файлу.
                Значение можно указывать в одинарных, двойных кавычках или без
                них.
                <br />
                inherit - Наследует значение родителя.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>list-style-position:</h3>}
            text={
              <p>
                Обтекаемость макроса. <br />
                inside - Маркер является частью текстового блока и отображается
                в элементе списка. <br />
                outside - Текст выравнивается по левому краю, а маркеры
                размещаются за пределами текстового блока.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>list-style-type:</h3>}
            text={
              <p>
                Меняет вид макроса. <br />
                circle - Маркер в виде кружка. <br />
                disc - Маркер в виде точки. <br />
                square - Маркер в виде квадрата.
                <br />
                armenian - Традиционная армянская нумерация. <br />
                decimal - Арабские числа (1, 2, 3, 4,...). <br />
                decimal-leading-zero - Арабские числа с нулем впереди для цифр
                меньше десяти (01, 02, 03,...). <br />
                georgian - Традиционная грузинская нумерация.
                <br />
                lower-alpha - Строчные латинские буквы (a, b, c, d,...).
                <br />
                lower-greek - Строчные греческие буквы (α, β, γ, δ,...).
                <br />
                lower-latin - Это значение аналогично lower-alpha.
                <br />
                lower-roman - Римские числа в нижнем регистре (i, ii, iii, iv,
                v,...). <br />
                upper-alpha - Заглавные латинские буквы (A, B, C, D,...). <br />
                upper-latin - Это значение аналогично upper-alpha.
                <br />
                upper-roman - Римские числа в верхнем регистре (I, II, III, IV,
                V,...). <br />
                none - Отменяет маркеры для списка. <br />
                inherit - Наследует значение родителя.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
