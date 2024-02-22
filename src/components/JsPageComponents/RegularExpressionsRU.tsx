import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  n,
  nm,
  nm2,
  username,
  email,
  email2,
  phoneNumber,
  password,
  postIndex,
  creditCard,
  space,
  data,
  IPv4,
  IPv6,
  Base64,
  ISBN,
  ifNumber,
  price,
  URL,
  domen,
  extensions,
  protocol,
  twitter,
  facebook,
  youTube,
  HEXColor,
  img,
  css,
  mediaQueries,
  word,
  removeDuplicates,
} from "./RegularExpressionsConstPre.ts";
// import {} from "./JSFunc.js";

export default function RegularExpressionsRU() {
  return (
    <Table id="js_regularExpressions">
      <TableBody>
        <TableOneCol text={<h2>Регулярные выражения.</h2>} />
        <TableOneCol text={<h3>Методы.</h3>} />
        <TableTwoEqualCol
          title={<h3>.match()</h3>}
          text={
            <p>
              Метод str.match(regexp) возвращает получившиеся совпадения при
              сопоставлении строки с регулярным выражением.
              <br />
              let str = "We will, we will rock you";
              <br />
              console.log(str.match(/will/gi) ); <br />
              // will,will - выводит два совпадения.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.test()</h3>}
          text={
            <p>
              Метод regexp.test(str) проверяет, есть ли хоть одно совпадение,
              если да, то возвращает true, иначе false.
              <br />
              let str = "We will, we will rock you"; <br />
              let regexp = /rock/i; <br />
              console.log(regexp.test(str)); <br />
              // true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.search()</h3>}
          text={
            <p>
              Поиск в строке по указанному регулярному выражению, возвращает
              индекс на котором есть совпадение и только первое.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.replaceAll()</h3>}
          text={<p>Вернет строку с замененными частями строки.</p>}
        />
        <TableTwoEqualCol
          title={<h3>.replace()</h3>}
          text={
            <p>
              Метод replace() возвращает новую строку с некоторыми или всеми
              сопоставлениями с шаблоном, заменёнными на заменитель. Этот метод
              не изменяет объект String, на котором он вызывается. Он просто
              возвращает новую строку. str.replace(regexp, replacement)
              <br />
              let str = "We will, we will rock you";
              <br />
              console.log("Wewill, we will rock you".replace(/we/ig, "I"))
              <br />
              // I will, I will rock you
            </p>
          }
        />
        <TableOneCol
          text={
            <p>
              В replacement можно использовать специальные комбинации символов.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>$&</h3>}
          text={
            <p>
              Вставляет всё найденное совпадение. <br />
              let str = "We will";
              <br />
              console.log("We will".replace(/will/, "$&, we will rock you"))
              <br />
              // We will, we will rock you
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>$$</h3>}
          text={<p>Вставляет символ доллара $.</p>}
        />
        <TableTwoEqualCol
          title={<h3>$`</h3>}
          text={<p>Вставляет часть строки до совпадения.</p>}
        />
        <TableTwoEqualCol
          title={<h3>$'</h3>}
          text={<p>Вставляет часть строки после совпадения.</p>}
        />
        <TableTwoEqualCol
          title={<h3>$n</h3>}
          text={
            <p>
              n это 1-2 значное число, вставляет содержимое n-й скобочной группы
              регулярного выражения.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>$nn</h3>}
          text={<p>nn являются десятичными цифрами.</p>}
        />
        <TableTwoEqualCol
          title={<h3>$ &lt;name&gt;</h3>}
          text={<p>Вставляет содержимое скобочной группы с именем name.</p>}
        />
        <TableOneCol text={<h3>Флаги.</h3>} />
        <TableTwoEqualCol
          title={<h3>i</h3>}
          text={
            <p>
              С этим флагом поиск не зависит от регистра: нет разницы между A и
              a
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>g</h3>}
          text={
            <p>
              С этим флагом поиск ищет все совпадения, без него – только первое.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>m</h3>}
          text={<p>Многострочный режим.</p>}
        />
        <TableTwoEqualCol
          title={<h3>s</h3>}
          text={
            <p>
              Включает режим «dotall», при котором точка . может соответствовать
              символу перевода строки \n
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>u</h3>}
          text={
            <p>
              Включает полную поддержку Юникода. Флаг разрешает корректную
              обработку суррогатных пар.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>y</h3>}
          text={<p>Режим поиска на конкретной позиции в тексте.</p>}
        />
        <TableOneCol text={<h3>Символьные классы.</h3>} />
        <TableTwoEqualCol
          title={<h3>\d</h3>}
          text={
            <p>
              Цифра: символ от 0 до 9. Аналог [0-9].
              <br />
              const str = 'abc123def456'
              <br />
              str.match(/\d/g, '').replace('', '')
              <br />
              console.log(str) // abcdef{" "}
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>\D</h3>}
          text={<p>Не цифры. Аналог [^0-9]</p>}
        />
        <TableTwoEqualCol
          title={<h3>\s</h3>}
          text={
            <p>
              Пробельные символы, табы, новые строки.
              <br />
              const str = "Hello, world!" <br />
              str.match(/\s/gi)
              <br />
              console.log(str) // Hello,world!
            </p>
          }
        />
        <TableTwoEqualCol title={<h3>\S</h3>} text={<p>Все, кроме \s.</p>} />
        <TableTwoEqualCol
          title={<h3>\w</h3>}
          text={
            <p>
              Латиница, цифры, подчёркивание '_'.
              <br />
              const str = "Hello, world!" <br />
              str.match(/\w/gi, '')
              <br />
              console.log(str) // ["H", "e", "l", "l", "o", "w", "o", "r", "l",
              "d"]
            </p>
          }
        />
        <TableTwoEqualCol title={<h3>\W</h3>} text={<p>Все, кроме \w.</p>} />
        <TableTwoEqualCol
          title={<h3>.</h3>}
          text={
            <p>
              Любой символ, если с флагом регулярного выражения s, в противном
              случае любой символ, кроме перевода строки \n.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>\n</h3>}
          text={<p>Соответствует символу перевода строки (U+000A).</p>}
        />
        <TableTwoEqualCol
          title={<h3>\r</h3>}
          text={<p>Соответствует символу возврата каретки (U+000D).</p>}
        />
        <TableTwoEqualCol
          title={<h3>^</h3>}
          text={
            <p>
              Совпадение с началом текста.
              <br />
              let str = "We will, we will rock you";
              <br />
              console.log(/^We/.test(str) ) <br />
              // true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>$</h3>}
          text={
            <p>
              Совпадение с концом текста. <br />
              let str = "We will, we will rock you"; <br />
              console.log(/you$/.test(str)) <br />
              // true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>*</h3>}
          text={
            <p>
              Соответствует предыдущему символу повторенному 0 или более раз.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>+</h3>}
          text={
            <p>
              Соответствует предыдущему символу повторенному 1 или более раз.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>?</h3>}
          text={
            <p>
              Соответствует предыдущему символу повторенному 0 или 1 раз.
              <br />
              let str = '123abc'; <br />
              console.log(str.match(/\d+/)); // 123 <br />
              console.log(str.match(/\d+?/)); // 1
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>(x)</h3>}
          text={
            <p>
              Соответствует 'x' и запоминает это соответствие. Это называется
              захватывающие скобки.
              <br />
              let str = 'We will, we will rock you';
              <br />
              console.log(str.match(/(wi)/)); <br />
              // (2) 'wi', 'wi'
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>(?:x)</h3>}
          text={
            <p>
              Соответствует 'x' но не запоминает соответствие. Это называется
              не-захватывающие скобки.
              <br />
              let str = 'We will, we will rock you';
              <br />
              console.log(str.match(/(?:wi)/)); <br />
              // wi
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>x(?=y)</h3>}
          text={
            <p>
              Соответствует 'x' только если за 'x' следует 'y'. Это называется
              упреждение.
              <br />
              let str = 'We will, we will rock you';
              <br />
              console.log(str.match(/we(?: will)/));
              <br />
              // we will
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>x(?!y)</h3>}
          text={
            <p>
              Соответствует 'x' только если за 'x' не следует 'y'. Это
              называется отрицательное упреждение.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>x|y</h3>}
          text={
            <p>
              Соответствует либо 'x' либо 'y'. <br />
              let str = 'We will, we will rock you';
              <br />
              console.log(str.match(/We|will/));
              <br />
              // We
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>{n}</h3>}
          text={
            <p>
              n - положительное целое. Соответствует ровно n вхождениям
              предыдущего символа.
              <br />
              let str = 'We will, we will rock you';
              <br />
              console.log(str.match(/l{2}/));
              <br />
              // ll
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>{nm}</h3>}
          text={
            <p>
              m и n - положительные целые. Соответствует как минимум n и
              максимум m вхождениям предыдущего символа. При m=n=1 пропускается.
              <br />
              let str = 'greeeeen'; <br />
              {nm2}
              <br />
              // eee
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>[xyz]</h3>}
          text={
            <p>
              Набор символов. Соответствует любому символу из перечисленных.
              Можно указать диапазон символов, используя тире. <br />
              let str = 'We will, we will rock you'; <br />
              console.log(str.match(/[abcd]/));
              <br />
              // c
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>[^xyz]</h3>}
          text={
            <p>
              Инвертированный или дополняющий набор символов. Это означает
              соответствие всему, что не в скобках. Можно указать диапазон
              символов с помощью тире. <br />
              let str = 'We will, we will rock you'; <br />
              console.log(str.match(/[^abcd]/)); <br />
              // W
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>[\b]</h3>}
          text={<p>Соответствует бэкспейсу (U+0008).</p>}
        />
        <TableTwoEqualCol
          title={<h3>\b</h3>}
          text={
            <p>
              Соответствует границе слова. Граница слова соответствует позиции,
              где за символом слова не следует другой символ слова или
              предшествует ему. <br />
              let str = 'We will, we will rock you';
              <br />
              console.log(str.match(/\b/));
              <br />
              // ' '
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>\B</h3>}
          text={
            <p>
              Соответствует несловообразующей границе. Несловообразующая граница
              соответствует позиции, в которой предыдущий и следующий символы
              являются символами одного типа: либо оба должны быть
              словообразующими символами, либо несловообразующими.
              <br />
              let str = 'We will, we will rock you';
              <br />
              console.log(str.match(/\B..../));
              <br />
              // e wi
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>\f</h3>}
          text={
            <p>
              Соответствует символу прогона страницы (U+000C). Особый символ
              управления печатью.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>\t</h3>}
          text={<p>Соответствует символу горизонтальной табуляции (U+0009).</p>}
        />
        <TableTwoEqualCol
          title={<h3>\v</h3>}
          text={<p>Соответствует символу вертикальной табуляции (U+000B).</p>}
        />
        <TableTwoEqualCol
          title={<h3>\0</h3>}
          text={<p>Соответствует символу NULL (U+0000).</p>}
        />
        <TableTwoEqualCol
          title={<h3>\xhh</h3>}
          text={
            <p>Соответствует символам кода hh (две шестнадцатеричные цифры).</p>
          }
        />
        <TableTwoEqualCol
          title={<h3>\uhhhh</h3>}
          text={
            <p>
              Соответствует символам кода hhhh (четыре шестнадцатеричные цифры).
            </p>
          }
        />
        <TableOneCol text={<h2>ТОП Регулярных выражений.</h2>} />
        <TableTwoEqualCol title={<h3>Юзернейм.</h3>} text={<p>{username}</p>} />
        <TableTwoEqualCol
          title={<h3>Валидация email.</h3>}
          text={
            <p>
              Вариант №1 <br />
              {email}
              <br /> Вариант №2
              <br />
              {email2}
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Номер телефона.</h3>}
          text={<p>{phoneNumber}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Надёжность пароля.</h3>}
          text={<p>{password}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Почтовый индекс (zip-code).</h3>}
          text={<p>{postIndex}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Номер кредитной карты.</h3>}
          text={<p>{creditCard}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Начальные и конечные пробелы.</h3>}
          text={<p>{space}</p>}
        />
        <TableTwoEqualCol title={<h3>Дата.</h3>} text={<p>{data}</p>} />
        <TableTwoEqualCol title={<h3>IPv4</h3>} text={<p>{IPv4}</p>} />
        <TableTwoEqualCol title={<h3>IPv6</h3>} text={<p>{IPv6}</p>} />
        <TableTwoEqualCol title={<h3>Base64</h3>} text={<p>{Base64}</p>} />
        <TableTwoEqualCol title={<h3>ISBN</h3>} text={<p>{ISBN}</p>} />
        <TableTwoEqualCol
          title={<h3>Проверка на число.</h3>}
          text={<p>{ifNumber}</p>}
        />
        <TableTwoEqualCol title={<h3>Цена.</h3>} text={<p>{price}</p>} />
        <TableTwoEqualCol
          title={<h3>Сопоставить строку URL.</h3>}
          text={<p>{URL}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Извлечение домена.</h3>}
          text={<p>{domen}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Расширения.</h3>}
          text={<p>{extensions}</p>}
        />
        <TableTwoEqualCol title={<h3>Протокол.</h3>} text={<p>{protocol}</p>} />
        <TableTwoEqualCol title={<h3>Twitter.</h3>} text={<p>{twitter}</p>} />
        <TableTwoEqualCol title={<h3>Facebook.</h3>} text={<p>{facebook}</p>} />
        <TableTwoEqualCol title={<h3>YouTube.</h3>} text={<p>{youTube}</p>} />
        <TableTwoEqualCol
          title={<h3>HEX-цвета.</h3>}
          text={<p>{HEXColor}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Адрес изображения.</h3>}
          text={<p>{img}</p>}
        />
        <TableTwoEqualCol title={<h3>CSS-свойства.</h3>} text={<p>{css}</p>} />
        <TableTwoEqualCol
          title={<h3>Медиа запросы.</h3>}
          text={<p>{mediaQueries}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Подсветка слов.</h3>}
          text={<p>{word}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Удалить повторы.</h3>}
          text={<p>{removeDuplicates}</p>}
        />
      </TableBody>
    </Table>
  );
}
