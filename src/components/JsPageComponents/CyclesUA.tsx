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

export default function CyclesUA() {
  return (
    <Table id="js_cycles">
      <TableBody>
        <TableOneCol text={<h2>Цикли.</h2>} />
        <TableOneCol
          text={
            <p>
              Цикли дозволяють в залежності від певних умов виконувати деяка дія
              багато разів.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>for</h3>}
          text={
            <p>
              Цикл for складається з трьох частин:
              <br />
              1. Оголошення циклу - let i = 0 - створює та ініціалізує
              лічильник.
              <br />
              2. Умова, за якої виконуватиметься цикл: i &lt; 5. <br />
              3. Сам лічильник.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад for i++"}
          title={
            <p id="formated-text">
              <span id="jsForPlus"></span>
            </p>
          }
          text={
            <p id="formated-text">
              i++ або i+= 1 <br />
              <pre>
                <code>{forPlusCode}</code>
              </pre>
            </p>
          }
          onClick={forPlus}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад for i--"}
          title={
            <p id="formated-text">
              <span id="jsForMinus"></span>
            </p>
          }
          text={
            <p id="formated-text">
              i-- або i-= 1 <br />
              <pre>
                <code>{forMinusCode}</code>
              </pre>
            </p>
          }
          onClick={forMinus}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад for парних чисел"}
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
          titleButtonExample={"Приклад for непарних чисел"}
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
          titleButtonExample={"Приклад for вкладених циклів"}
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
              Цикл while виконується до тих пір, поки деяка умова є істинною.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад while"}
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
              У циклі do спочатку виконується код циклу, а потім відбувається
              перевірка умов в інструкції while. І поки ця умова істинна, цикл
              повторюється.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад do while"}
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
          title={<h3>Оператори continue</h3>}
          text={<p>Дозволяє продовжити цикл до певного моменту.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад continue"}
          title={
            <p id="formated-text">
              Коли значення змінної i дорівнюватиме 6, то в циклі конструкція
              if(i===6) continue завершить поточну ітерацію, далі інструкції
              циклу, що йдуть, не виконуватимуться, і відбудеться перехід до
              наступної ітерації.<span id="jsContinue"></span>
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
          title={<h3>Оператори break</h3>}
          text={<p>Дозволяє перервати цикл.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад break"}
          title={
            <p id="formated-text">
              Даний цикл збільшує змінну i c 1 до 10. Однак оскільки в блоці
              циклу відбувається перевірка if(i===6) break; те, коли значення
              змінної i досягне 6, то це умова перерве виконання циклу за
              допомогою оператора break.<span id="jsBreak"></span>
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
              Призначений головним чином для перебору об'єктів. Цей цикл
              перебирає всі властивості об'єкта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад for in"}
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
            <p>Призначений для перебору наборів даних. Наприклад масивів.</p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад for of"}
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
