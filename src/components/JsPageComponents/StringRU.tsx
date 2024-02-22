import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { strMatchCode, strMatchAllCode, strRaw } from "./StringConstPre.ts";
import { strMatch, strMatchAll } from "./string.js";

export default function StringRU() {
  return (
    <Table id="js_string">
      <TableBody>
        <TableOneCol text={<h2>Строки.</h2>} />
        <TableOneCol
          text={
            <p>
              Любые текстовые данные в JavaScript считаются строками. Это
              примитивный тип, но язык позволяет работать с ним так, будто он
              является объектом. В том числе — использовать встроенные в JS
              методы строк.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.length</h3>}
          text={
            <p>
              Показывает какая длина строки.
              <br />
              let text = 'Александр'; <br />
              console.log(text.length);
              <br />
              Выводит: 9
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.charAt()</h3>}
          text={
            <p>
              Позволяет вывести указанный символ из строки.
              <br />
              let text = 'Александр'; <br />
              console.log(text.charAt(2));
              <br />
              Выводит: е
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.charCodeAt()</h3>}
          text={
            <p>
              Возвращает числовое значение Юникода для символа по указанному
              индексу (за исключением кодовых точек Юникода, больших 0x10000).
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.codePointAt()</h3>}
          text={
            <p>
              Возвращает неотрицательное целое число, являющееся закодированным
              в UTF-16 значением кодовой точки.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.concat()</h3>}
          text={
            <p>
              Объединяет текст из двух или более строк и возвращает новую
              строку.
              <br />
              let text = 'Привет'; <br />
              console.log(text.concat(' ', 'Александр'));
              <br />
              Выводит: Привет Александр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.fromCharCode()</h3>}
          text={
            <p>
              Возвращает строку, созданную из указанной последовательности
              значений единиц кода UTF-16.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.fromCodePoint()</h3>}
          text={
            <p>
              Возвращает строку, созданную из указанной последовательности
              кодовых точек.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.indexOf()</h3>}
          text={
            <p>
              Проводит поиск указанной буквы и выводит ее номер.
              <br />
              let text = 'Александр';
              <br />
              console.log(text.indexOf('А'));
              <br />
              Выводит: 0
              <br />
              console.log(text.indexOf('н'));
              <br />
              Выводит: 6
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.lastIndexOf()</h3>}
          text={
            <p>
              Проводит поиск указанной буквы и выводит ее номер поиск начинается
              с конца строки.
              <br />
              let text = 'Александр'; <br />
              console.log(text.lastIndexOf('А'));
              <br />
              Выводит: 0<br />
              console.log(text.lastIndexOf('н'));
              <br />
              Выводит: 6
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.search()</h3>}
          text={
            <p>
              Принимает регулярное выражение и возвращает индекс первого
              совпадения в строке.
              <br />
              let re = /\к/;
              <br />
              let text = 'Александр';
              <br />
              console.log(text.search(re));
              <br />
              Выводит: 3
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.startsWith()</h3>}
          text={
            <p>
              Позволяет узнать как начинается стока.
              <br />
              let text = 'Александр'; <br />
              console.log(text.startsWith('А'));
              <br />
              Выводит: true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.endsWith()</h3>}
          text={
            <p>
              Позволяет узнать как заканчивается стока.
              <br />
              let text = 'Александр'; <br />
              console.log(text.endsWith('ндр'));
              <br />
              Выводит: true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.match()</h3>}
          text={
            <p>
              Извлекает результат сопоставления строки с регулярным выражением.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример match"}
          title={
            <p id="formated-text">
              <span id="jsstrMatch"></span>
            </p>
          }
          text={
            <pre>
              <code>{strMatchCode}</code>
            </pre>
          }
          onClick={strMatch}
        />
        <TableTwoEqualCol
          title={<h3>.matchAll()</h3>}
          text={
            <p>
              Возвращает итератор всех результатов, совпадающих со строкой и
              регулярным выражением , включая захваченные группы.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример matchAll"}
          title={
            <p id="formated-text">
              <span id="jsstrMatchAll"></span>
            </p>
          }
          text={
            <pre>
              <code>{strMatchAllCode}</code>
            </pre>
          }
          onClick={strMatchAll}
        />
        <TableTwoEqualCol
          title={<h3>.normalize()</h3>}
          text={
            <p>
              Возвращает форму нормализации Unicode строки.
              <br />
              let text = '\u0307\u0323'; <br />
              let text2 = '\u0323\u0307';
              <br />
              console.log(text === text2);
              <br />
              Выводит: false
              <br />
              console.log(text.normalize() === text2.normalize());
              <br />
              Выводит: true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.raw()</h3>}
          text={
            <p>
              Статический метод является функцией тега литералов шаблона.
              <pre>
                <code>{strRaw}</code>
              </pre>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.repeat()</h3>}
          text={
            <p>
              Дублирует строку определённое количество раз.
              <br />
              let text = 'Александр';
              <br />
              console.log(text.repeat(2));
              <br />
              Выводит: Александр Александр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.replace()</h3>}
          text={
            <p>
              Позволяет заменить какой-то символ на другой.
              <br />
              let text = 'Александр'; <br />
              console.log(text.replace('р', 'рa'));
              <br />
              Выводит: Александрa
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.replaceAll()</h3>}
          text={
            <p>
              Позволяет заменить указанное слово на другое во всей строке.
              <br />
              let text = 'we will, we will rock you.';
              <br />
              console.log(text.replaceAll('we', 'We'));
              <br />
              Выводит: We will, We will rock you.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.split()</h3>}
          text={
            <p>
              Позволяет разделить слова на массивы.
              <br />
              let text = 'Александр'; <br />
              console.log(text.split(''));
              <br />
              Выводит: ['А', 'л', 'е', 'к', 'с', 'а', 'н', 'д', 'р']
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.substr()</h3>}
          text={
            <p>
              Позволяет выбрать с какого символа выводить + вторым параметром
              можно задать сколько символов вывести.
              <br />
              let text = 'Александр'; <br />
              console.log(text.substr(3, 6));
              <br />
              Выводит: ксандр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.substring()</h3>}
          text={
            <p>
              Позволяет вывести от определённого символа и до конца, также если
              поставить второе значение то тогда до него.
              <br />
              let text = 'Александр'; <br />
              console.log(text.substring(2, 6));
              <br />
              Выводит: екса
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.slice()</h3>}
          text={
            <p>
              Такой же как и .substring, если задать отрицательное значение то
              тогда будет выводить с последних символов.
              <br />
              let text = 'Александр'; <br />
              console.log(text.slice(0, 5));
              <br />
              Выводит: Алекс
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.strike()</h3>}
          text={<p>Позволяет заменить что-то.</p>}
        />
        <TableTwoEqualCol
          title={<h3>.small()</h3>}
          text={
            <p>
              Создаёт HTML-элемент &lt;small&gt;, заставляющий строку
              отображаться маленьким шрифтом.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.sub()</h3>}
          text={
            <p>
              Нижний индекс Н<sub>2</sub>O
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.sup()</h3>}
          text={
            <p>
              Верхний индекс x<sup>2</sup>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toLowerCase()</h3>}
          text={
            <p>
              Нижний регистр.
              <br />
              let text = 'Александр'; <br />
              console.log(text.toLowerCase());
              <br />
              Выводит: александр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toUpperCase()</h3>}
          text={
            <p>
              Верхний регистр.
              <br />
              let text = 'Александр'; <br />
              console.log(text.toUpperCase());
              <br />
              Выводит: АЛЕКСАНДР
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toString()</h3>}
          text={
            <p>
              Возвращает строку, представляющую указанный объект.
              <br />
              const num = 42;
              <br />
              console.log(typeof num.toString())
              <br />
              Выводит: string
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.padEnd()</h3>}
          text={
            <p>
              Задаёт минимальный размер строки, добавляя пробелы в конце строки.
              <br />
              let text = 'Александр'; <br />
              console.log(text.padEnd(12));
              <br />
              Выводит: Александр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.padStart()</h3>}
          text={
            <p>
              Задаёт минимальный размер строки, добавляя пробелы в начале
              строки.
              <br />
              let text = 'Александр'; <br />
              console.log(text.padStart(12));
              <br />
              Выводит: Александр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>trim()</h3>}
          text={
            <p>
              Убирает пробелы.
              <br />
              let text = ' Александр '; <br />
              console.log(text.trim());
              <br />
              Выводит: Александр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.trimEnd()</h3>}
          text={
            <p>
              Убирает пробелы в конце строки.
              <br />
              let text = ' Александр '; <br />
              console.log(text.trimEnd());
              <br />
              Выводит: Александр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.trimStart()</h3>}
          text={
            <p>
              Убирает пробелы в начале строки.
              <br />
              let text = ' Александр '; <br />
              console.log(text.trimStart());
              <br />
              Выводит: Александр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.valueOf()</h3>}
          text={
            <p>
              Возвращает примитивное значение объекта в виде строкового типа
              данных.
            </p>
          }
        />
      </TableBody>
    </Table>
  );
}
