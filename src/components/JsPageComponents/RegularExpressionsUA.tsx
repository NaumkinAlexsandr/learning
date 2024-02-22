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

export default function RegularExpressionsUA() {
  return (
    <Table id="js_regularExpressions">
      <TableBody>
        <TableOneCol text={<h2>Регулярні вирази.</h2>} />
        <TableOneCol text={<h3>Методи.</h3>} />
        <TableTwoEqualCol
          title={<h3>.match()</h3>}
          text={
            <p>
              Метод str.match(regexp) повертає збіги, що виявилися при
              зіставлення рядка з регулярним виразом.
              <br />
              let str = "We will, we will rock you";
              <br />
              console.log(str.match(/will/gi) ); <br />
              // will,will - виводить два збіги.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.test()</h3>}
          text={
            <p>
              Метод regexp.test(str) перевіряє, чи є хоч один збіг, якщо так, то
              повертає true, інакше false.
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
              Вставляє весь знайдений збіг. <br />
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
          text={<p>Вставляє символ долара $.</p>}
        />
        <TableTwoEqualCol
          title={<h3>$`</h3>}
          text={<p>Вставляє частину рядка до збігу.</p>}
        />
        <TableTwoEqualCol
          title={<h3>$'</h3>}
          text={<p>Вставляє частину рядка після збігу.</p>}
        />
        <TableTwoEqualCol
          title={<h3>$n</h3>}
          text={
            <p>
              n це 1-2 значне число, вставляє вміст n-ї скобкової групи
              регулярного вираження.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>$nn</h3>}
          text={<p>nn є десятковими цифрами.</p>}
        />
        <TableTwoEqualCol
          title={<h3>$ &lt;name&gt;</h3>}
          text={<p>Вставляє вміст скобкової групи з ім'ям name.</p>}
        />
        <TableOneCol text={<h3>Прапори.</h3>} />
        <TableTwoEqualCol
          title={<h3>i</h3>}
          text={
            <p>
              З цим прапором пошук не залежить від регістру: немає різниці між A
              та a
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>g</h3>}
          text={
            <p>З цим прапором пошук шукає всі збіги, без нього – лише перше.</p>
          }
        />
        <TableTwoEqualCol
          title={<h3>m</h3>}
          text={<p>Багаторядковий режим.</p>}
        />
        <TableTwoEqualCol
          title={<h3>s</h3>}
          text={
            <p>
              Включає режим «dotall», при якому точка . може відповідати символ
              перекладу рядка \n
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>u</h3>}
          text={
            <p>
              Включає повну підтримку Юнікоду. Прапор дозволяє коректну обробку
              сурогатних пар.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>y</h3>}
          text={<p>Режим пошуку на конкретній позиції в тексті.</p>}
        />
        <TableOneCol text={<h3>Символьні класи.</h3>} />
        <TableTwoEqualCol
          title={<h3>\d</h3>}
          text={
            <p>
              Цифра: символ від 0 до 9. Аналог [0-9].
              <br />
              const str = 'abc123def456'
              <br /> str.match(/\d/g, '').replace('', '')
              <br />
              console.log(str) // abcdef{" "}
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>\D</h3>}
          text={<p>Не цифри. Аналог [^0-9]</p>}
        />
        <TableTwoEqualCol
          title={<h3>\s</h3>}
          text={
            <p>
              Пробілові символи, таби, нові рядки.
              <br />
              const str = "Hello, world!" <br />
              str.match(/\s/gi)
              <br />
              console.log(str) // Hello,world!
            </p>
          }
        />
        <TableTwoEqualCol title={<h3>\S</h3>} text={<p>Всі, крім \s.</p>} />
        <TableTwoEqualCol
          title={<h3>\w</h3>}
          text={
            <p>
              Латиниця, цифри, підкреслення '_'.
              <br />
              const str = "Hello, world!" <br />
              str.match(/\w/gi, '')
              <br />
              console.log(str) // ["H", "e", "l", "l", "o", "w", "o", "r", "l",
              "d"]
            </p>
          }
        />
        <TableTwoEqualCol title={<h3>\W</h3>} text={<p>Всі, крім \w.</p>} />
        <TableTwoEqualCol
          title={<h3>.</h3>}
          text={
            <p>
              Будь-який символ, якщо з прапором регулярного виразу s, в іншому у
              разі будь-який символ, крім перекладу рядка \n.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>\n</h3>}
          text={<p>Відповідає символу перекладу рядка (U+000A).</p>}
        />
        <TableTwoEqualCol
          title={<h3>\r</h3>}
          text={<p>Відповідає символу повернення каретки (U+000D).</p>}
        />
        <TableTwoEqualCol
          title={<h3>^</h3>}
          text={
            <p>
              Збіг з початком тексту.
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
              Збіг з кінцем тексту. <br />
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
              Відповідає попередньому символу повтореному 0 або більше разів.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>+</h3>}
          text={
            <p>
              Відповідає попередньому символу повтореному 1 або більше разів.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>?</h3>}
          text={
            <p>
              Відповідає попередньому символу, повтореному 0 або 1 раз.
              <br />
              let str = '123abc'; <br />
              console.log(str.match(/d+/)); // 123 <br />
              console.log(str.match(/d+?/)); // 1
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>(x)</h3>}
          text={
            <p>
              Відповідає 'x' і запам'ятовує цю відповідність. Це називається
              захоплюючі дужки.
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
              Відповідає 'x' але не запам'ятовує відповідність. Це називається
              не-захоплюючі дужки.
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
              Відповідає 'x' тільки якщо за 'x' слідує 'y'. Це називається
              попередження.
              <br />
              let str = 'We will, we will rock you';
              <br />
              console.log(str.match(/we(?: will)/)));
              <br />
              // we will
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>x(?!y)</h3>}
          text={
            <p>
              Відповідає 'x' тільки якщо за 'x' не слід 'y'. Це називається
              негативне попередження.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>x|y</h3>}
          text={
            <p>
              Відповідає або 'x' або 'y'. <br />
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
              n - позитивне ціле. Відповідає рівно n входженням попередній
              символ.
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
              m і n – позитивні цілі. Відповідає як мінімум n та максимум m
              входженням попереднього символу. При m=n=1 пропускається.
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
              Набір символів. Відповідає будь-якому символу з перерахованих.
              Можна, можливо вказати діапазон символів за допомогою тире. <br />
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
              Інвертований або додатковий набір символів. Це означає
              відповідність всьому, що не в дужках. Можна вказати діапазон
              символи за допомогою тире. <br />
              let str = 'We will, we will rock you'; <br />
              console.log(str.match(/[^abcd]/)); <br />
              // W
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>[\b]</h3>}
          text={<p>Відповідає бекспейсу (U+0008).</p>}
        />
        <TableTwoEqualCol
          title={<h3>\b</h3>}
          text={
            <p>
              Відповідає межі слова. Кордон слова відповідає позиції, де за
              символом слова не слідує інший символ слова або передує йому.
              <br />
              let str = 'We will, we will rock you';
              <br />
              console.log(str.match(/\b/));
              <br />
              // ''
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>\B</h3>}
          text={
            <p>
              Відповідає несловотвірному кордону. Несловотвірний кордон
              відповідає позиції, в якій попередній та наступний символи є
              символами одного типу: або обидва мають бути словотворчими
              символами, або несловотвірними.
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
              Відповідає символу прогону сторінки (U+000C). Особливий символ
              управління печаткою.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>\t</h3>}
          text={<p>Відповідає символу горизонтальної табуляції (U+0009).</p>}
        />
        <TableTwoEqualCol
          title={<h3>\v</h3>}
          text={<p>Відповідає символу вертикальної табуляції (U+000B).</p>}
        />
        <TableTwoEqualCol
          title={<h3>\0</h3>}
          text={<p>Відповідає символу NULL (U+0000).</p>}
        />
        <TableTwoEqualCol
          title={<h3>\xhh</h3>}
          text={<p>Відповідає символам коду hh (дві шістнадцяткові цифри).</p>}
        />
        <TableTwoEqualCol
          title={<h3>\uhhhh</h3>}
          text={
            <p>Відповідає символам коду hhhh (чотири шістнадцяткові цифри).</p>
          }
        />
        <TableOneCol text={<h2>ТОП Регулярних виразів.</h2>} />
        <TableTwoEqualCol title={<h3>Юзернейм.</h3>} text={<p>{username}</p>} />
        <TableTwoEqualCol
          title={<h3>Валідація email.</h3>}
          text={
            <p>
              Варіант №1 <br />
              {email}
              <br /> Варіант №2
              <br />
              {email2}
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Номер телефону.</h3>}
          text={<p>{phoneNumber}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Надійність пароля.</h3>}
          text={<p>{password}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Поштовий індекс (zip-code).</h3>}
          text={<p>{postIndex}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Номер кредитної картки.</h3>}
          text={<p>{creditCard}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Початкові та кінцеві прогалини.</h3>}
          text={<p>{space}</p>}
        />
        <TableTwoEqualCol title={<h3>Дата.</h3>} text={<p>{data}</p>} />
        <TableTwoEqualCol title={<h3>IPv4</h3>} text={<p>{IPv4}</p>} />
        <TableTwoEqualCol title={<h3>IPv6</h3>} text={<p>{IPv6}</p>} />
        <TableTwoEqualCol title={<h3>Base64</h3>} text={<p>{Base64}</p>} />
        <TableTwoEqualCol title={<h3>ISBN</h3>} text={<p>{ISBN}</p>} />
        <TableTwoEqualCol
          title={<h3>Перевірка на число.</h3>}
          text={<p>{ifNumber}</p>}
        />
        <TableTwoEqualCol title={<h3>Ціна.</h3>} text={<p>{price}</p>} />
        <TableTwoEqualCol
          title={<h3>Зіставити рядок URL.</h3>}
          text={<p>{URL}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Вилучення домену.</h3>}
          text={<p>{domen}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Розширення.</h3>}
          text={<p>{extensions}</p>}
        />
        <TableTwoEqualCol title={<h3>Протокол.</h3>} text={<p>{protocol}</p>} />
        <TableTwoEqualCol title={<h3>Twitter.</h3>} text={<p>{twitter}</p>} />
        <TableTwoEqualCol title={<h3>Facebook.</h3>} text={<p>{facebook}</p>} />
        <TableTwoEqualCol title={<h3>YouTube.</h3>} text={<p>{youTube}</p>} />
        <TableTwoEqualCol
          title={<h3>HEX-колір.</h3>}
          text={<p>{HEXColor}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Адреса зображення.</h3>}
          text={<p>{img}</p>}
        />
        <TableTwoEqualCol
          title={<h3>CSS-властивості.</h3>}
          text={<p>{css}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Медіа запити.</h3>}
          text={<p>{mediaQueries}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Підсвічування слів.</h3>}
          text={<p>{word}</p>}
        />
        <TableTwoEqualCol
          title={<h3>Видалити повтори.</h3>}
          text={<p>{removeDuplicates}</p>}
        />
      </TableBody>
    </Table>
  );
}
