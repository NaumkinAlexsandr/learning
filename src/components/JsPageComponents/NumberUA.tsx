import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { randomCode, randomCode2 } from "./NumberConstPre.ts";
import { randomFunc, randomFunc2 } from "./number.js";

export default function NumberUA() {
  return (
    <Table id="js_number">
      <TableBody>
        <TableOneCol text={<h2>Числа та Math.</h2>} />
        <TableOneCol
          text={
            <p>
              У сучасному JavaScript існує два типи чисел: <br />
              1. Звичайні числа JavaScript зберігаються в 64-бітному форматі
              IEEE-754, який також називають «числа з плаваючою точкою подвійний
              точності».
              <br />
              2. BigInt числа дають можливість працювати з цілими числами
              довільної довжини. Вони потрібні досить рідко і використовуються в
              випадках, коли необхідно працювати зі значеннями більш ніж 2
              <sup>53</sup> або менше ніж -2 <sup>53</sup>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.isFinite()</h3>}
          text={
            <p>
              Визначає, чи передане значення є кінцевим числом.
              <br />
              console.log(Number.isFinite(358.36));
              <br /> Виводить: true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.isInteger()</h3>}
          text={
            <p>
              Визначає, чи є передане значення цілим числом.
              <br />
              console.log(Number.isInteger(358.36)); <br /> Виводить: false
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.isNaN()</h3>}
          text={
            <p>
              Визначає, чи є передане значення NaN. Це більш надійна версія
              оригінальної глобальної функції isNaN().
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.isSafeInteger()</h3>}
          text={
            <p>
              Визначає, чи передане значення є безпечним цілим числом.
              <br />
              console.log(Number.isSafeInteger(358.36)); <br /> Виводить: false
              <br />
              console.log(Number.isSafeInteger(358)); <br /> Виводить: true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.parseFloat()</h3>}
          text={
            <p>
              Перетворює рядковий аргумент і повертає число з плаваючою комою.
              <br />
              console.log(Number.parseFloat('358.36'));
              <br /> Виводить: 358.36
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.parseInt()</h3>}
          text={
            <p>
              Перетворює рядковий аргумент і повертає ціле число.
              <br />
              console.log(Number.parseInt('358.36')); <br /> Виводить: 358
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toExponential()</h3>}
          text={
            <p>
              Повертає рядок, що представляє об'єкт Number в експоненційному
              запис. <br />
              console.log(77.1234.toExponential(2));
              <br /> Виводить: 7.71e+1
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toFixed()</h3>}
          text={
            <p>
              Дозволяє вказати скільки чисел буде після точки.
              <br />
              console.log(12345.6789.toFixed(1)); <br /> Виводить: 12345.7
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toLocaleString()</h3>}
          text={
            <p>
              Повертає рядок з мовозалежним поданням числа.
              <br />
              console.log((123456.789).toLocaleString()); <br /> Виводить: 123
              456,789
              <br />
              console.log(typeof (123456.789).toLocaleString()); <br />
              Виводить: string
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toPrecision()</h3>}
          text={
            <p>
              Повертає рядок, що представляє об'єкт Number із зазначеного
              точністю. <br />
              console.log(5.123456.toPrecision(2));
              <br /> Виводить: 5.1
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toString()</h3>}
          text={
            <p>
              Повертає строкове представлення вказаного об'єкта Number.
              <br />
              console.log((123.456).toString());
              <br /> Виводить: 123.456
              <br />
              console.log(typeof (123.456).toString());
              <br /> Виводить: string
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.valueOf()</h3>}
          text={<p>Повертає примітивне значення об'єкта Number.</p>}
        />
        <TableTwoEqualCol title={<h3>Math.E</h3>} text={<p>≈ 2,718</p>} />
        <TableTwoEqualCol title={<h3>Math.LN10</h3>} text={<p>≈ 2,302</p>} />
        <TableTwoEqualCol title={<h3>Math.LN2</h3>} text={<p>≈ 0,693</p>} />
        <TableTwoEqualCol title={<h3>Math.LOG10E</h3>} text={<p>≈ 0,434</p>} />
        <TableTwoEqualCol title={<h3>Math.LOG2E</h3>} text={<p>≈ 1,442</p>} />
        <TableTwoEqualCol title={<h3>Math.PI</h3>} text={<p>≈ 3,14159</p>} />
        <TableTwoEqualCol title={<h3>Math.SQRT1_2</h3>} text={<p>≈ 0,707</p>} />
        <TableTwoEqualCol title={<h3>Math.SQRT2</h3>} text={<p>≈ 1,414</p>} />
        <TableTwoEqualCol
          title={<h3>.abs()</h3>}
          text={
            <p>
              Виводить модуль числа.
              <br />
              console.log(Math.abs(-0.5)); <br />
              Виводить: 0.5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.clz32()</h3>}
          text={
            <p>
              Повертає кількість провідних нульових бітів у 32-бітному
              двійковому поданні числа.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.exp()</h3>}
          text={<p>Зводить до ступеня число Ейлера (Math.E = e≈2,718).</p>}
        />
        <TableTwoEqualCol
          title={<h3>.expm1()</h3>}
          text={
            <p>
              Повертає результат експоненти негативного числа e у числі x,
              додавши 1. console.log(Math.expm1(1)); <br />
              Виводить: 1.718281828459045
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.fround()</h3>}
          text={
            <p>
              Виводить найближче число з плаваючою комою. <br />
              console.log(Math.fround(0.9));
              <br />
              Виводить: 0.8999999761581421
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.hypot()</h3>}
          text={
            <p>
              Виводить квадратний корінь суми квадратів своїх аргументів.
              <br />
              console.log(Math.hypot(5, 12)); <br />
              Виводить: 13
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.imul()</h3>}
          text={
            <p>
              Виводить результат множення.
              <br />
              console.log(Math.imul(5, 5)); <br />
              Виводить: 25
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.log()</h3>}
          text={
            <p>
              Повертає ( e ) логарифм числа.
              <br />
              console.log(Math.log(2)); <br />
              Виводить: 0.6931471805599453
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.log10()</h3>}
          text={
            <p>
              Виводить десятковий (на підставі 10) логарифм числа.
              <br />
              console.log(Math.log10(2));
              <br />
              Виводить: 0.3010299956639812
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.log1p()</h3>}
          text={
            <p>
              Повертає натуральний логарифм числа Math.log1p(x) x + 1 де x –
              число, для якого потрібно обчислити натуральний логарифм x + 1.
              <br />
              console.log(Math.log1p(2));
              <br />
              Виводить: 1.0986122886681098
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.log2()</h3>}
          text={
            <p>
              Повертає натуральний логарифм числа на основі 2. Math.log2(x) де x
              - число, для якого потрібно обчислити логарифм на основі 2.
              <br />
              console.log(Math.log2(4));
              <br />
              Виводить: 2
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.max()</h3>}
          text={
            <p>
              Виводить більше аргументів.
              <br /> let number = Math.max(5, 8, 6, 9);
              <br />
              console.log(number); <br />
              Виводить: 9
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.min()</h3>}
          text={
            <p>
              Виводить менше аргументів.
              <br />
              let number = Math.min(5, 8, 6, 9);
              <br />
              console.log(number);
              <br />
              Виводить: 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.trunc()</h3>}
          text={
            <p>
              Виводить цілу частину числа шляхом видалення всіх дробових знаків.
              <br />
              let number = Math.trunc(123.4567);
              <br />
              console.log(number);
              <br />
              Виводить: 123
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.pow()</h3>}
          text={
            <p>
              Зводить до ступеня.
              <br />
              let number = Math.pow(5, 8);
              <br />
              console.log(number);
              <br />
              Виводить: 390625
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.random()</h3>}
          text={
            <p>
              Виводить довільне число від 0 до. За допомогою функції можна
              задати діапазон.
              <br />
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад random"}
          title={
            <p id="formated-text">
              Вивести випадкове ціле число від 1 до 10.{" "}
              <span id="jsRandom"></span>
            </p>
          }
          text={
            <pre>
              <code>{randomCode}</code>
            </pre>
          }
          onClick={randomFunc}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад random2"}
          title={
            <p id="formated-text">
              Повернути випадкове число з масиву.<span id="jsRandom2"></span>
            </p>
          }
          text={
            <pre>
              <code>{randomCode2}</code>
            </pre>
          }
          onClick={randomFunc2}
        />
        <TableTwoEqualCol
          title={<h3>.round()</h3>}
          text={
            <p>
              Округлює до цілого числа.
              <br />
              let number = Math.round(123.4567);
              <br />
              console.log(number);
              <br />
              Виводить: 123
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.ceil()</h3>}
          text={
            <p>
              Примусове заокруглення у велику сторону.
              <br />
              let number = Math.ceil(5.547);
              <br />
              console.log(number);
              <br />
              Виводить: 6
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.floor()</h3>}
          text={
            <p>
              Примусове заокруглення в меншу сторону.
              <br />
              let number = Math.floor(5.547);
              <br />
              console.log(number);
              <br />
              Виводить: 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toFixed()</h3>}
          text={
            <p>
              Дозволяє вказати скільки чисел буде після точки.
              <br />
              console.log(12345.6789.toFixed(1));
              <br />
              Виводить: 12345.7
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.sign()</h3>}
          text={
            <p>
              Виводить знак числа, що вказує на те, чи є число негативним,
              позитивним чи нулем.
              <br />
              console.log(Math.sign(-123), Math.sign(124));
              <br />
              Виводить: -1 1
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.sqrt()</h3>}
          text={
            <p>
              Виводить квадратний корінь.
              <br />
              console.log(Math.sqrt(25));
              <br />
              Виводить: 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.cbrt()</h3>}
          text={
            <p>
              Виводить кубічний корінь числа.
              <br />
              console.log(Math.cbrt(125));
              <br />
              Виводить: 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.acos()</h3>}
          text={
            <p>
              Арккосинус.
              <br />
              console.log(Math.acos(0.5)); <br /> Виводить: 1.0471975511965979
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.asin()</h3>}
          text={
            <p>
              Арксинус.
              <br />
              console.log(Math.asin(0.6));
              <br />
              Виводить: 0.6435011087932844
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.atan()</h3>}
          text={
            <p>
              Арктангенс.
              <br />
              console.log(Math.atan(0.6));
              <br />
              Виводить: 0.5404195002705842
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.cos()</h3>}
          text={
            <p>
              Косинус.
              <br />
              console.log(Math.cos(25));
              <br />
              Виводить: 0.9912028118634736
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.sin()</h3>}
          text={
            <p>
              Синус.
              <br />
              console.log(Math.sin(25));
              <br />
              Виводить: -0.13235175009777303
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.tan()</h3>}
          text={
            <p>
              Тангенс.
              <br />
              console.log(Math.tan(25));
              <br />
              Виводить: -0.13352640702153587
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.acosh()</h3>}
          text={
            <p>
              Гіперболічний арккосинус.
              <br />
              console.log(Math.acosh(25));
              <br />
              Виводить: 3.9116227652145885
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.asinh()</h3>}
          text={
            <p>
              Гіперболічний арксинус.
              <br />
              console.log(Math.asinh(25));
              <br />
              Виводить: 3.9124227656412556
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.atanh()</h3>}
          text={
            <p>
              Гіперболічний арктангенс.
              <br />
              console.log(Math.atanh(0.6));
              <br />
              Виводить: 0.6931471805599453
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.cosh()</h3>}
          text={
            <p>
              Гіперболічний косинус.
              <br />
              console.log(Math.cosh(0.6));
              <br />
              Виводить: 1.1854652182422676
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.sinh()</h3>}
          text={
            <p>
              Гіперболічний синус.
              <br />
              console.log(Math.sinh(0.6));
              <br />
              Виводить:0.6366535821482412
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.tanh()</h3>}
          text={
            <p>
              Гіперболічний тангенс.
              <br />
              console.log(Math.tanh(0.6));
              <br />
              Виводить: 0.5370495669980353
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.atan2()</h3>}
          text={
            <p>
              Арктангенс від приватного своїх аргументів.
              <br />
              console.log(Math.atan2(25, 5));
              <br />
              Виводить: 1.373400766945016
            </p>
          }
        />
      </TableBody>
    </Table>
  );
}
