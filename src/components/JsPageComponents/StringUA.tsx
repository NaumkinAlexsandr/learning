import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { strMatchCode, strMatchAllCode, strRaw } from "./StringConstPre.ts";
import { strMatch, strMatchAll } from "./string.js";

export default function StringUA() {
  return (
    <Table id="js_string">
      <TableBody>
        <TableOneCol text={<h2>Рядки.</h2>} />
        <TableOneCol
          text={
            <p>
              Будь-які текстові дані JavaScript вважаються рядками. Це
              примітивний тип, але мова дозволяє працювати з ним так, ніби він є
              об'єктом. У тому числі використовувати вбудовані в JS методи
              рядків.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.length</h3>}
          text={
            <p>
              Показує, яка довжина рядка.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.length);
              <br />
              Виводить: 9
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.charAt()</h3>}
          text={
            <p>
              Дозволяє вивести вказаний символ з рядка.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.charAt(2));
              <br />
              Виводить: е
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.charCodeAt()</h3>}
          text={
            <p>
              Повертає числове значення Юнікоду для символу вказаного індексу
              (за винятком кодових точок Юнікоду, великих 0x10000).
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.codePointAt()</h3>}
          text={
            <p>
              Повертає невід'ємне ціле число, що є закодованим у UTF-16
              значенням кодової точки.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.concat()</h3>}
          text={
            <p>
              Об'єднує текст із двох або більше рядків і повертає новий рядок.
              <br />
              let text = 'Привіт'; <br />
              console.log(text.concat(' ', 'Олександр'));
              <br />
              Виводить: Привіт Олександр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.fromCharCode()</h3>}
          text={
            <p>
              Повертає рядок, створений із зазначеної послідовності значень
              одиниць коду UTF-16.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.fromCodePoint()</h3>}
          text={
            <p>
              Повертає рядок, створений із зазначеної кодової послідовності
              точок.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.indexOf()</h3>}
          text={
            <p>
              Проводить пошук вказаної літери та виводить її номер.
              <br />
              let text = 'Олександр';
              <br />
              console.log(text.indexOf('А'));
              <br />
              Виводить: 0
              <br />
              console.log(text.indexOf('н'));
              <br />
              Виводить: 6
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.lastIndexOf()</h3>}
          text={
            <p>
              Проводить пошук вказаної літери та виводить її номер пошук
              починається з кінця рядка.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.lastIndexOf('А'));
              <br />
              Виводить: 0<br />
              console.log(text.lastIndexOf('н'));
              <br />
              Виводить: 6
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.search()</h3>}
          text={
            <p>
              Приймає регулярний вираз і повертає індекс першого збіги у рядку.
              <br />
              let re = /\к/;
              <br />
              let text = 'Олександр';
              <br />
              console.log(text.search(re));
              <br />
              Виводить: 3
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.startsWith()</h3>}
          text={
            <p>
              Дозволяє дізнатися як починається стоку.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.startsWith('А'));
              <br />
              Виводить: true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.endsWith()</h3>}
          text={
            <p>
              Дозволяє дізнатися як закінчується стоку.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.endsWith('ндр'));
              <br />
              Виводить: true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.match()</h3>}
          text={
            <p>Виходить результат зіставлення рядка з регулярним виразом.</p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад match"}
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
              Повертає ітератор усіх результатів, що збігаються з рядком та
              регулярним виразом, включаючи захоплені групи.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад matchAll"}
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
              Повертає форму нормалізації Unicode рядка.
              <br />
              let text = ''; <br />
              let text2 = '';
              <br />
              console.log(text === text2);
              <br />
              Виводить: false
              <br />
              console.log(text.normalize() === text2.normalize());
              <br />
              Виводить: true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.raw()</h3>}
          text={
            <p>
              Статичний метод є функцією тега літералів шаблону.
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
              Дублює рядок певну кількість разів.
              <br />
              let text = 'Олександр';
              <br />
              console.log(text.repeat(2));
              <br />
              Виводить: Олександр Олександр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.replace()</h3>}
          text={
            <p>
              Дозволяє замінити якийсь символ іншим.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.replace('р', 'рa'));
              <br />
              Виводить: Олександрa
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.replaceAll()</h3>}
          text={
            <p>
              Дозволяє замінити вказане слово на інше у всьому рядку.
              <br />
              let text = 'we will, we will rock you.';
              <br />
              console.log(text.replaceAll('we', 'We'));
              <br />
              Виводить: We will, We will rock you.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.split()</h3>}
          text={
            <p>
              Дозволяє розділити слова на масиви.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.split(''));
              <br />
              Виводить: ['А', 'л', 'е', 'к', 'с', 'а', 'н', 'д', 'р']
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.substr()</h3>}
          text={
            <p>
              Дозволяє вибрати з якого символу виводити + другим параметром
              можна задати скільки символів вивести.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.substr(3, 6));
              <br />
              Виводить: ксандр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.substring()</h3>}
          text={
            <p>
              Дозволяє вивести від певного символу і до кінця, також якщо
              поставити друге значення тоді до нього.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.substring(2, 6));
              <br />
              Виводить: екса
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.slice()</h3>}
          text={
            <p>
              Такий самий як і .substring, якщо задати негативне значення то
              тоді виводитиме з останніх символів.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.slice(0, 5));
              <br />
              Виводить: Алекс
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.strike()</h3>}
          text={<p>Дозволяє замінити щось.</p>}
        />
        <TableTwoEqualCol
          title={<h3>.small()</h3>}
          text={
            <p>
              Створює HTML-елемент &lt;small&gt;, що змушує рядок відображатися
              маленьким шрифтом.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.sub()</h3>}
          text={
            <p>
              Нижній індекс Н<sub>2</sub>O
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.sup()</h3>}
          text={
            <p>
              Верхній індекс x<sup>2</sup>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toLowerCase()</h3>}
          text={
            <p>
              Нижній регістр.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.toLowerCase());
              <br />
              Виводить: Олександр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toUpperCase()</h3>}
          text={
            <p>
              Верхній регістр.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.toUpperCase());
              <br />
              Виводить: ОЛЕКСАНДР
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.toString()</h3>}
          text={
            <p>
              Повертає рядок, що представляє вказаний об'єкт.
              <br />
              const num = 42;
              <br />
              console.log(typeof num.toString())
              <br />
              Виводить: string
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.padEnd()</h3>}
          text={
            <p>
              Задає мінімальний розмір рядка, додаючи прогалини в кінці рядка.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.padEnd(12));
              <br />
              Виводить: Олександр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.padStart()</h3>}
          text={
            <p>
              Задає мінімальний розмір рядка, додаючи пробіли на початку рядка.
              <br />
              let text = 'Олександр'; <br />
              console.log(text.padStart(12));
              <br />
              Виводить: Олександр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>trim()</h3>}
          text={
            <p>
              Забирає пробіли.
              <br />
              let text = 'Александр'; <br />
              console.log(text.trim());
              <br />
              Виводить: Олександр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.trimEnd()</h3>}
          text={
            <p>
              Забирає прогалини в кінці рядка.
              <br />
              let text = 'Александр'; <br />
              console.log(text.trimEnd());
              <br />
              Виводить: Олександр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.trimStart()</h3>}
          text={
            <p>
              Забирає пробіли на початку рядка.
              <br />
              let text = 'Александр'; <br />
              console.log(text.trimStart());
              <br />
              Виводить: Олександр
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.valueOf()</h3>}
          text={
            <p>
              Повертає примітивне значення об'єкта у вигляді рядкового типу
              даних.
            </p>
          }
        />
      </TableBody>
    </Table>
  );
}
