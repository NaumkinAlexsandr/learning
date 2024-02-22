import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { randomCode, randomCode2 } from "./NumberConstPre.ts";
import { randomFunc, randomFunc2 } from "./number.js";

export default function NumberRU() {
  return (
    <Table id="js_number">
      <TableBody>
        <TableOneCol text={<h2>Числа и Math.</h2>} />
        <TableOneCol
          text={
            <p>
              В современном JavaScript существует два типа чисел: <br />
              1. Обычные числа в JavaScript хранятся в 64-битном формате
              IEEE-754, который также называют «числа с плавающей точкой двойной
              точности».
              <br />
              2. BigInt числа дают возможность работать с целыми числами
              произвольной длины. Они нужны достаточно редко и используются в
              случаях, когда необходимо работать со значениями более чем 2
              <sup>53</sup> или менее чем -2 <sup>53</sup>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.isFinite()</h3>}
          text={
            <p>
              Определяет, является ли переданное значение конечным числом.
              <br />
              console.log(Number.isFinite(358.36));
              <br /> Выводит: true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.isInteger()</h3>}
          text={
            <p>
              Определяет, является ли переданное значение целым числом.
              <br />
              console.log(Number.isInteger(358.36)); <br /> Выводит: false
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.isNaN()</h3>}
          text={
            <p>
              Определяет, является ли переданное значение NaN. Это более
              надёжная версия оригинальной глобальной функции isNaN().
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.isSafeInteger()</h3>}
          text={
            <p>
              Определяет, является ли переданное значение безопасным целым
              числом.
              <br />
              console.log(Number.isSafeInteger(358.36)); <br /> Выводит: false
              <br />
              console.log(Number.isSafeInteger(358)); <br /> Выводит: true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.parseFloat()</h3>}
          text={
            <p>
              Преобразует строковый аргумент и возвращает число с плавающей
              запятой. <br />
              console.log(Number.parseFloat('358.36'));
              <br /> Выводит: 358.36
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.parseInt()</h3>}
          text={
            <p>
              Преобразует строковый аргумент и возвращает целое число.
              <br />
              console.log(Number.parseInt('358.36')); <br /> Выводит: 358
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toExponential()</h3>}
          text={
            <p>
              Возвращает строку, представляющую объект Number в экспоненциальной
              записи. <br />
              console.log(77.1234.toExponential(2));
              <br /> Выводит: 7.71e+1
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toFixed()</h3>}
          text={
            <p>
              Позволяет указать сколько чисел будет после точки.
              <br />
              console.log(12345.6789.toFixed(1)); <br /> Выводит: 12345.7
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toLocaleString()</h3>}
          text={
            <p>
              Возвращает строку с языкозависимым представлением числа.
              <br />
              console.log((123456.789).toLocaleString()); <br /> Выводит:
              123 456,789
              <br />
              console.log(typeof (123456.789).toLocaleString()); <br /> Выводит:
              string
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toPrecision()</h3>}
          text={
            <p>
              Возвращает строку, представляющую объект Number с указанной
              точностью. <br />
              console.log(5.123456.toPrecision(2));
              <br /> Выводит: 5.1
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toString()</h3>}
          text={
            <p>
              Возвращает строковое представление указанного объекта Number.
              <br />
              console.log((123.456).toString());
              <br /> Выводит: 123.456
              <br />
              console.log(typeof (123.456).toString());
              <br /> Выводит: string
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.valueOf()</h3>}
          text={<p>Возвращает примитивное значение объекта Number.</p>}
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
              Выводит модуль числа. <br />
              console.log(Math.abs(-0.5)); <br />
              Выводит: 0.5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.clz32()</h3>}
          text={
            <p>
              Возвращает количество ведущих нулевых битов в 32-битном двоичном
              представлении числа.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.exp()</h3>}
          text={<p>Возводит в степень число Эйлера (Math.E = e≈2,718).</p>}
        />
        <TableTwoEqualCol
          title={<h3>.expm1()</h3>}
          text={
            <p>
              Возвращает результат экспоненты отрицательного числа e в числе x,
              прибавив 1. <br /> console.log(Math.expm1(1)); <br />
              Выводит: 1.718281828459045
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.fround()</h3>}
          text={
            <p>
              Выводит ближайшее число с плавающей запятой. <br />
              console.log(Math.fround(0.9));
              <br />
              Выводит: 0.8999999761581421
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.hypot()</h3>}
          text={
            <p>
              Выводит квадратный корень суммы квадратов своих аргументов.
              <br />
              console.log(Math.hypot(5, 12)); <br />
              Выводит: 13
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.imul()</h3>}
          text={
            <p>
              Выводит результат умножения.
              <br />
              console.log(Math.imul(5, 5)); <br />
              Выводит: 25
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.log()</h3>}
          text={
            <p>
              Возвращает ( e ) логарифм числа.
              <br />
              console.log(Math.log(2)); <br />
              Выводит: 0.6931471805599453
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.log10()</h3>}
          text={
            <p>
              Выводит десятичный (по основанию 10) логарифм числа.
              <br />
              console.log(Math.log10(2));
              <br />
              Выводит: 0.3010299956639812
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.log1p()</h3>}
          text={
            <p>
              Возвращает натуральный логарифм числа Math.log1p(x) x + 1 где x -
              число, для которого нужно вычислить натуральный логарифм x + 1.
              <br />
              console.log(Math.log1p(2));
              <br />
              Выводит: 1.0986122886681098
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.log2()</h3>}
          text={
            <p>
              Возвращает натуральный логарифм числа по основанию 2. Math.log2(x)
              где x - число, для которого нужно вычислить логарифм по основанию
              2.
              <br />
              console.log(Math.log2(4));
              <br />
              Выводит: 2
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.max()</h3>}
          text={
            <p>
              Выводит большее число из аргументов.
              <br /> let number = Math.max(5, 8, 6, 9); <br />
              console.log(number); <br />
              Выводит: 9
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.min()</h3>}
          text={
            <p>
              Выводит меньшее число из аргументов.
              <br />
              let number = Math.min(5, 8, 6, 9);
              <br />
              console.log(number);
              <br />
              Выводит: 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.trunc()</h3>}
          text={
            <p>
              Выводит целую часть числа путём удаления всех дробных знаков.
              <br />
              let number = Math.trunc(123.4567);
              <br />
              console.log(number);
              <br />
              Выводит: 123
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.pow()</h3>}
          text={
            <p>
              Возводит в степень.
              <br />
              let number = Math.pow(5, 8);
              <br />
              console.log(number);
              <br />
              Выводит: 390625
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.random()</h3>}
          text={
            <p>
              Выводит произвольное число от 0 до. С помощью функции можно задать
              диапазон.
              <br />
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример random"}
          title={
            <p id="formated-text">
              Вывести случайное целое число от 1 до 10.
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
          titleButtonExample={"Пример random2"}
          title={
            <p id="formated-text">
              Вернуть случайное числа из массива.<span id="jsRandom2"></span>
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
              Округляет до целого числа.
              <br />
              let number = Math.round(123.4567);
              <br />
              console.log(number);
              <br />
              Выводит: 123
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.ceil()</h3>}
          text={
            <p>
              Принудительное округление в большую сторону.
              <br />
              let number = Math.ceil(5.547);
              <br />
              console.log(number);
              <br />
              Выводит: 6
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.floor()</h3>}
          text={
            <p>
              Принудительное округление в меньшую сторону.
              <br />
              let number = Math.floor(5.547);
              <br />
              console.log(number);
              <br />
              Выводит: 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toFixed()</h3>}
          text={
            <p>
              Позволяет указать сколько чисел будет после точки.
              <br />
              console.log(12345.6789.toFixed(1));
              <br />
              Выводит: 12345.7
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.sign()</h3>}
          text={
            <p>
              Выводит знак числа, указывающий на то, является ли число
              отрицательным, положительным или нулём.
              <br />
              console.log(Math.sign(-123), Math.sign(124));
              <br />
              Выводит: -1 1
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.sqrt()</h3>}
          text={
            <p>
              Выводит квадратный корень.
              <br />
              console.log(Math.sqrt(25));
              <br />
              Выводит: 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.cbrt()</h3>}
          text={
            <p>
              Выводит кубический корень числа.
              <br />
              console.log(Math.cbrt(125));
              <br />
              Выводит: 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.acos()</h3>}
          text={
            <p>
              Арккосинус.
              <br />
              console.log(Math.acos(0.5)); <br /> Выводит: 1.0471975511965979
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
              Выводит: 0.6435011087932844
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
              Выводит: 0.5404195002705842
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
              Выводит: 0.9912028118634736
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
              Выводит: -0.13235175009777303
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
              Выводит: -0.13352640702153587
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.acosh()</h3>}
          text={
            <p>
              Гиперболический арккосинус.
              <br />
              console.log(Math.acosh(25));
              <br />
              Выводит: 3.9116227652145885
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.asinh()</h3>}
          text={
            <p>
              Гиперболический арксинус.
              <br />
              console.log(Math.asinh(25));
              <br />
              Выводит: 3.9124227656412556
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.atanh()</h3>}
          text={
            <p>
              Гиперболический арктангенс.
              <br />
              console.log(Math.atanh(0.6));
              <br />
              Выводит: 0.6931471805599453
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.cosh()</h3>}
          text={
            <p>
              Гиперболический косинус.
              <br />
              console.log(Math.cosh(0.6));
              <br />
              Выводит: 1.1854652182422676
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.sinh()</h3>}
          text={
            <p>
              Гиперболический синус.
              <br />
              console.log(Math.sinh(0.6));
              <br />
              Выводит:0.6366535821482412
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.tanh()</h3>}
          text={
            <p>
              Гиперболический тангенс.
              <br />
              console.log(Math.tanh(0.6));
              <br />
              Выводит: 0.5370495669980353
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.atan2()</h3>}
          text={
            <p>
              Арктангенс от частного своих аргументов.
              <br />
              console.log(Math.atan2(25, 5));
              <br />
              Выводит: 1.373400766945016
            </p>
          }
        />
      </TableBody>
    </Table>
  );
}
