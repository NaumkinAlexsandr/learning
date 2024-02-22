import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  ifOne,
  ifTwo,
  ifThree,
  ifFour,
  forOne,
  forTwo,
  eachOne,
  eachTwo,
  eachThree,
  eachFour,
  eachFive,
  eachSix,
  whileOne,
  whileTwo,
} from "./ScssConstPre.tsx";

export default function ExpressionsRU() {
  return (
    <>
      <Table id="scss_if">
        <TableBody>
          <TableOneCol text={<h2>Выражения.</h2>} />
          <TableOneCol text={<h3>@if</h3>} />
          <TableOneCol
            text={
              <p>
                Директива @if принимает выражение SassScript и использует стили,
                вложенные в неё в случае, если выражение возвращает любое
                значение, кроме false или null:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{ifOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{ifTwo}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                После выражения @if может следовать несколько выражений @else if
                и одно выражение @else. Если выражение @if вернёт false, то
                будут производиться попытки вычисления выражений @else if, пока
                одно из них не вернёт истину или до достижения выражения @else.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{ifThree}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{ifFour}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="scss_for">
        <TableBody>
          <TableOneCol text={<h3>@for</h3>} />
          <TableOneCol
            text={
              <p>
                Директива @for выводит набор стилей заданное число раз. Для
                каждого повторения используется переменная-счётчик для изменения
                вывода.
                <br />
                Директива имеет две формы: @for $var from начало through конец и
                @for $var from начало to конец. Заметьте различие в словах
                through и to. <br />
                $var может быть любым именем переменной, таким как $i; начало и
                конец - выражения SassScript, которые должны возвращать целые
                числа. Если начало больше, чем конец, счётчик будет убывать,
                вместо того, чтобы расти. <br />
                Выражение @for устанавливает переменную $var в каждое
                последующее значение в заданном диапазоне и каждый раз выводит
                вложенные стили, используя очередное значение переменной $var.
                Форма from ... through, диапазон включает значения начало и
                конец, а форма from ... to не включает значение конец.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{forOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{forTwo}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="scss_each">
        <TableBody>
          <TableOneCol text={<h3>@each</h3>} />
          <TableOneCol
            text={
              <p>
                Директива @each обычно имеет вид @each $var in список или карта
                значений. $var может быть любой переменной, такой как $length
                или $name, и список или карта значений - это выражение
                SassScript, возвращающее список или карту значений. <br />
                Директива @each устанавливает $var в каждое из значений списка
                или карты и выводит содержащиеся в ней стили, используя
                соответствующее значение $var. Например:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{eachOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{eachTwo}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Директива @each также может использовать несколько переменных по
                следующему принципу: @each $var1, $var2, ... in список. Если
                список — это список списков, то значение каждого элемента
                внутреннего списка будет назначено соответствующей переменной.
                Например:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{eachThree}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{eachFour}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Так как мапы обрабатываются как списки или пары значений,
                множественное присваивание с ними тоже работает. Например:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{eachFive}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{eachSix}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="scss_while">
        <TableBody>
          <TableOneCol text={<h3>@while</h3>} />
          <TableOneCol
            text={
              <p>
                Директива @while принимает выражение SassScript и циклично
                выводит вложенные в неё стили, пока выражение вычисляется как
                true. Она может быть использована для создания более сложных
                циклов, чем тех, для которых подходит @for, хотя она бывает
                необходима довольно редко. Например:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{whileOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{whileTwo}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
