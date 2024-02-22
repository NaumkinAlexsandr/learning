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

export default function ExpressionsUA() {
  return (
    <>
      <Table id="scss_if">
        <TableBody>
          <TableOneCol text={<h2>Вирази.</h2>} />
          <TableOneCol text={<h3>@if</h3>} />
          <TableOneCol
            text={
              <p>
                Директива @if приймає вираз SassScript і використовує стилі,
                вкладені в неї у разі, якщо вираз повертає будь-яке значення,
                крім false або null:
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
                Після виразу @if може слідувати кілька виразів @else if і один
                вираз @else. Якщо вираз @ if поверне false, то будуть робитися
                спроби обчислення виразів @else if, поки одне з них не поверне
                істину або до досягнення виразу @else.
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
                Директива @for виводить набір стилів задане число разів. Для
                кожного повторення використовується змінна-лічильник зміни
                виведення.
                <br />
                Директива має дві форми: @for $var from початок through кінець і
                @for $var from початок to кінець. Зауважте різницю у словах
                through та to. <br />
                $var може бути будь-яким ім'ям змінної,таким як $i; початок і
                кінець - вирази SassScript, які повинні повертати цілі числа.
                Якщо початок більше, ніж кінець, лічильник буде зменшуватися,
                замість того, щоб рости. <br />
                Вираз @for встановлює змінну $var у кожне наступне значення в
                заданому діапазоні і щоразу виводить вкладені стилі,
                використовуючи чергове значення змінної $var. Форма from ...
                through, діапазон включає значення початок і кінець, а форма
                from ... to не включає значення кінець.
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
                Директива @each зазвичай має вигляд @each $var in список або
                карту значень. $var може бути будь-якою змінною, такою як
                $length або $name, та список або карта значень - це вираз
                SassScript, що повертає список чи карту значень. <br />
                Директива @each встановлює $var у кожне зі значень списку або
                карти і виводить в ній стилі, використовуючи відповідне значення
                $var. Наприклад:
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
                Директива @each також може використовувати кілька змінних за
                таким принципом: @each $var1, $var2, ... список. Якщо список —
                це список списків, значення кожного елемента внутрішнього списку
                буде призначено відповідною змінної. Наприклад:
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
                Оскільки карти обробляються як списки або пари значень, множинне
                привласнення з ними також працює. Наприклад:
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
                Директива @while приймає вираз SassScript і циклічно виводить
                вкладені в неї стилі, поки вираз обчислюється як true. Вона може
                бути використана для створення більш складніших циклів, ніж тих,
                для яких підходить @for, хоча вона буває потрібна досить рідко.
                Наприклад:
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
