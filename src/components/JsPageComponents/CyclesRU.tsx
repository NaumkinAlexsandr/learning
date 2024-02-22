import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  forPlusCode,
  forMinusCode,
  forEvenCode,
  forOddCode,
  forDoubleCode,
  forWhileCode,
  forDoWhileCode,
  forContinueCode,
  forBreakCode,
  forInCode,
  forOffCode,
} from "./CyclesConstPre.ts";
import {
  forPlus,
  forMinus,
  forEven,
  forOdd,
  forDouble,
  forWhile,
  forDoWhile,
  forContinue,
  forBreak,
  forIn,
  forOff,
} from "./cycles.js";

export default function CyclesRU() {
  return (
    <Table id="js_cycles">
      <TableBody>
        <TableOneCol text={<h2>Циклы.</h2>} />
        <TableOneCol
          text={
            <p>
              Циклы позволяют в зависимости от определенных условий выполнять
              некоторое действие множество раз.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>for</h3>}
          text={
            <p>
              Цикл for состоит из трех частей:
              <br />
              1. Объявления цикла - let i = 0 - создает и инициализирует
              счетчик.
              <br />
              2. Условие, при котором будет выполняться цикл: i &lt; 5. <br />
              3. Сам счетчик.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример for i++"}
          title={
            <p id="formated-text">
              <span id="jsForPlus"></span>
            </p>
          }
          text={
            <p id="formated-text">
              i++ или i+= 1 <br />
              <pre>
                <code>{forPlusCode}</code>
              </pre>
            </p>
          }
          onClick={forPlus}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример for i--"}
          title={
            <p id="formated-text">
              <span id="jsForMinus"></span>
            </p>
          }
          text={
            <p id="formated-text">
              i-- или i-= 1 <br />
              <pre>
                <code>{forMinusCode}</code>
              </pre>
            </p>
          }
          onClick={forMinus}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример for четные числа"}
          title={
            <p id="formated-text">
              <span id="jsForEven"></span>
            </p>
          }
          text={
            <pre>
              <code>{forEvenCode}</code>
            </pre>
          }
          onClick={forEven}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример for нечетные числа"}
          title={
            <p id="formated-text">
              <span id="jsForOdd"></span>
            </p>
          }
          text={
            <pre>
              <code>{forOddCode}</code>
            </pre>
          }
          onClick={forOdd}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример for вложенные циклы"}
          title={
            <p id="formated-text">
              <span id="jsForDouble"></span>
            </p>
          }
          text={
            <pre>
              <code>{forDoubleCode}</code>
            </pre>
          }
          onClick={forDouble}
        />
        <TableTwoEqualCol
          title={<h3>while</h3>}
          text={
            <p>
              Цикл while выполняется до тех пор, пока некоторое условие истинно.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример while"}
          title={
            <p id="formated-text">
              <span id="jsWhile"></span>
            </p>
          }
          text={
            <pre>
              <code>{forWhileCode}</code>
            </pre>
          }
          onClick={forWhile}
        />
        <TableTwoEqualCol
          title={<h3>do while</h3>}
          text={
            <p>
              В цикле do сначала выполняется код цикла, а потом происходит
              проверка условия в инструкции while. И пока это условие истинно,
              цикл повторяется.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример do while"}
          title={
            <p id="formated-text">
              <span id="jsDoWhile"></span>
            </p>
          }
          text={
            <pre>
              <code>{forDoWhileCode}</code>
            </pre>
          }
          onClick={forDoWhile}
        />
        <TableTwoEqualCol
          title={<h3>Операторы continue</h3>}
          text={<p>Позволяет продолжить цикл до определённого момента.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример continue"}
          title={
            <p id="formated-text">
              Когда значение переменной i станет равным 6, то в цикле
              конструкция if(i===6) continue завершит текущую итерацию, далее
              идущие инструкции цикла не будут выполняться, и произойдет переход
              к следующей итерации.<span id="jsContinue"></span>
            </p>
          }
          text={
            <pre>
              <code>{forContinueCode}</code>
            </pre>
          }
          onClick={forContinue}
        />
        <TableTwoEqualCol
          title={<h3>Операторы break</h3>}
          text={<p>Позволяет прервать цикл.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример break"}
          title={
            <p id="formated-text">
              Данный цикл увеличивает переменную i c 1 до 10. Однако поскольку в
              блоке цикла происходит поверка if(i===6) break;, то, когда
              значение переменной i достигнет 6, то данное условие прервет
              выполнение цикла с помощью оператора break.
              <span id="jsBreak"></span>
            </p>
          }
          text={
            <pre>
              <code>{forBreakCode}</code>
            </pre>
          }
          onClick={forBreak}
        />
        <TableTwoEqualCol
          title={<h3>for in</h3>}
          text={
            <p>
              Предназначен главным образом для перебора объектов. Этот цикл
              перебирает все свойства объекта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример for in"}
          title={
            <p id="formated-text">
              <span id="jsIn"></span>
            </p>
          }
          text={
            <pre>
              <code>{forInCode}</code>
            </pre>
          }
          onClick={forIn}
        />
        <TableTwoEqualCol
          title={<h3>for of</h3>}
          text={
            <p>Предназначен для перебора наборов данных. Например массивов.</p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример for of"}
          title={
            <p id="formated-text">
              <span id="jsOf"></span>
            </p>
          }
          text={
            <pre>
              <code>{forOffCode}</code>
            </pre>
          }
          onClick={forOff}
        />
      </TableBody>
    </Table>
  );
}
