import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  symbolConst,
  symbolForConst,
  symbolKeyForConst,
  symbolHasInstanceConst,
  symbolIteratorConst,
  symboIsConcatSpreadableConst,
  symboToPrimitiveConst,
  symboToStringTagConst,
  symbolAsyncIteratorConst,
  symbolMatchConst,
  symbolMatchAllConst,
  symbolReplaceConst,
  symbolSearchConst,
  symbolSpeciesConst,
  symbolSplitConst,
  symbolUnscopablesConst,
  symbolIterator2Const,
  symbolGeneratorConst,
  symbolGeneratorTwoConst,
  symbolGeneratorThreeConst,
} from "./SymbolConstPre.ts";
import {
  symbol,
  symbolFor,
  symbolKeyFor,
  symbolHasInstance,
  symbolIterator,
  symboIsConcatSpreadable,
  symboToPrimitive,
  symboToStringTag,
  symbolAsyncIterator,
  symbolMatch,
  symbolMatchAll,
  symbolReplace,
  symbolSearch,
  symbolSpecies,
  symbolSplit,
  symbolUnscopables,
  symbolIterator2,
  symbolGenerator,
  symbolGeneratorTwo,
} from "./symbol.js";

export default function SymbolUA() {
  return (
    <Table id="js_symbol">
      <TableBody>
        <TableOneCol text={<h2>Symbol.</h2>} />
        <TableOneCol
          text={
            <p>
              Це унікальний і незмінний тип даних, який може бути використаний
              як ідентифікатор для властивостей об'єктів. Синтаксис має такий
              вигляд: let symbol = Symbol(); <br />
              Кожен символ є унікальним і ніколи не дорівнюватиме іншому, навіть
              якщо опис однаковий.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol"}
          title={
            <p id="formated-text">
              <span id="jssymbol"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolConst}</code>
            </pre>
          }
          onClick={symbol}
        />
        <TableOneCol text={<h3>Методи.</h3>} />
        <TableTwoEqualCol
          title={<h3>Symbol.for(key)</h3>}
          text={
            <p>
              Метод Symbol.for() спочатку шукає символ із One ключем у
              глобальному реєстр символів. Він повертає існуючий символ, якщо
              він є. У в іншому випадку Symbol.for() метод створює новий символ,
              реєструє його у глобальному реєстрі символів із зазначеним ключем
              та повертає символ.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.for"}
          title={
            <p id="formated-text">
              <span id="jssymbolFor"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolForConst}</code>
            </pre>
          }
          onClick={symbolFor}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.keyFor(sym)</h3>}
          text={
            <p>
              Дозволяє отримати ключ. Якщо ключ відсутній тоді виведе undefined.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.keyFor"}
          title={
            <p id="formated-text">
              <span id="jssymbolKeyFor"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolKeyForConst}</code>
            </pre>
          }
          onClick={symbolKeyFor}
        />
        <TableOneCol text={<h3>Системні символи.</h3>} />
        <TableTwoEqualCol
          title={<h3>Symbol.asyncIterator</h3>}
          text={
            <p>
              Це вбудований символ, який використовується для доступу до
              @@asyncIteratorметод об'єкта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.asyncIterator"}
          title={
            <p id="formated-text">
              <span id="jssymbolAsyncIterator"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolAsyncIteratorConst}</code>
            </pre>
          }
          onClick={symbolAsyncIterator}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.hasInstance</h3>}
          text={
            <p>
              Метод, що визначає, чи конструктор розпізнає певний об'єкт як свій
              екземпляр. Використовується оператором instanceof.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.hasInstance"}
          title={
            <p id="formated-text">
              <span id="jssymbolHasInstance"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolHasInstanceConst}</code>
            </pre>
          }
          onClick={symbolHasInstance}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.isConcatSpreadable</h3>}
          text={
            <p>
              Бульове значення, що показує, чи об'єкт повинен бути зведений до
              плоского подання у вигляді масиву його елементів функцією
              Array.prototype.concat().
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.isConcatSpreadable"}
          title={
            <p id="formated-text">
              <span id="jssymboIsConcatSpreadable"></span>
              <br />
              <span>
                Якщо значення буде встановлене як false. Ми отримаємо масив із
                вбудованим об'єктом.
              </span>
              <br />
              <span id="jssymboIsConcatSpreadable2"></span>
            </p>
          }
          text={
            <pre>
              <code>{symboIsConcatSpreadableConst}</code>
            </pre>
          }
          onClick={symboIsConcatSpreadable}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.iterator</h3>}
          text={
            <p>
              Вказує, чи буде функція Symbol.iterator повертати ітератор для
              об'єкт. Використовується конструкцією for...of.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.iterator"}
          title={
            <p id="formated-text">
              <span id="jssymbolIterator"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolIteratorConst}</code>
            </pre>
          }
          onClick={symbolIterator}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.match</h3>}
          text={<p>Вказує чи відповідає значення регулярному виразу.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.match"}
          title={
            <p id="formated-text">
              <span id="jssymbolMatch"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolMatchConst}</code>
            </pre>
          }
          onClick={symbolMatch}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.matchAll</h3>}
          text={
            <p>
              Повертає ітератор, який дає збіги регулярного вираження з рядком.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.matchAll"}
          title={
            <p id="formated-text">
              <span id="jssymbolMatchAll"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolMatchAllConst}</code>
            </pre>
          }
          onClick={symbolMatchAll}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.replace</h3>}
          text={<p>Дозволяє замінити збігаються підрядки в рядку.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.replace"}
          title={
            <p id="formated-text">
              <span id="jssymbolReplace"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolReplaceConst}</code>
            </pre>
          }
          onClick={symbolReplace}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.search</h3>}
          text={
            <p>Повертає індекс у рядку, що відповідає регулярному виразу.</p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.search"}
          title={
            <p id="formated-text">
              <span id="jssymbolSearch"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolSearchConst}</code>
            </pre>
          }
          onClick={symbolSearch}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.species</h3>}
          text={
            <p>
              Дозволяє підкласам перевизначати конструктор за замовчуванням для
              об'єктів. Це визначає протокол про те, як слід копіювати
              екземпляри.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.species"}
          title={
            <p id="formated-text">
              <span id="jssymbolSpecies"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolSpeciesConst}</code>
            </pre>
          }
          onClick={symbolSpecies}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.split</h3>}
          text={
            <p>
              Розбиває рядок за індексами, що відповідають регулярному виразу.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.split"}
          title={
            <p id="formated-text">
              <span id="jssymbolSplit"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolSplitConst}</code>
            </pre>
          }
          onClick={symbolSplit}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.toPrimitive</h3>}
          text={
            <p>
              Метод, що перетворює об'єкт на примітив (примітивне значення).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.toPrimitive"}
          title={
            <p id="formated-text">
              <span id="jssymboToPrimitive"></span>
            </p>
          }
          text={
            <pre>
              <code>{symboToPrimitiveConst}</code>
            </pre>
          }
          onClick={symboToPrimitive}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.toStringTag</h3>}
          text={
            <p>
              Це рядкове значення властивості, яке використовується при
              створенні рядки опису об'єкта за замовчуванням.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.toStringTag"}
          title={
            <p id="formated-text">
              <span id="jssymboToStringTag"></span>
            </p>
          }
          text={
            <pre>
              <code>{symboToStringTagConst}</code>
            </pre>
          }
          onClick={symboToStringTag}
        />
        <TableTwoEqualCol
          title={<h3>Symbol.unscopables</h3>}
          text={
            <p>
              Використовується для вказівки значення об'єкта, власні та
              успадковані імена властивостей якого виключені з прив'язок
              середовища пов'язаного об'єкта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Symbol.unscopables"}
          title={
            <p id="formated-text">
              <span id="jssymbolUnscopables"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolUnscopablesConst}</code>
            </pre>
          }
          onClick={symbolUnscopables}
        />
        <TableOneCol text={<h3>Ітератори.</h3>} />
        <TableOneCol
          text={
            <p>
              Це об'єкт, призначений для перебору іншого об'єкта. Майже скрізь,
              де потрібний перебір, він здійснюється через ітератори. Це включає
              в себе не тільки рядки, масиви, а також виклик функції з
              оператором spread f(...args), та багато іншого.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>next()</h3>}
          text={
            <p>
              Метод який при кожному виклику повертає чергове значення і
              перевіряє, чи закінчено перебір. Також у нього є два властивості:
              <br />
              value – ще одне значення. <br />
              done – рівно false якщо є ще значення, і true – наприкінці.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад ітератора"}
          title={
            <p id="formated-text">
              <span id="jssymbolIterator1"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolIterator2Const}</code>
            </pre>
          }
          onClick={symbolIterator2}
        />
        <TableOneCol text={<h3>Генератори.</h3>} />
        <TableOneCol
          text={
            <p>
              Генератори можуть породжувати (yield) безліч значень одна одною,
              за необхідності. Генератори відмінно працюють з об'єктами, що
              перебираються, і дозволяють легко створювати потоки даних. <br />
              <pre>
                <code>{symbolGeneratorThreeConst}</code>
              </pre>
              <br />
              * - означає, це генератор, а чи не звичайна функція. <br />
              yield - оператор повертає значення та зупиняє виконання функції.
              <br />
              Далі слід помістити генератор у змінну. <br />
              let generator = generateSequence();
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад генератор"}
          title={
            <p id="formated-text">
              <span id="jssymbolGenerator"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolGeneratorConst}</code>
            </pre>
          }
          onClick={symbolGenerator}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад генератора в масиві"}
          title={
            <p id="formated-text">
              <span>
                Для того щоб вивести в консоль дані з масиву ще необхідно
                поставити *.
              </span>
              <span id="jssymbolGeneratorTwo"></span>
            </p>
          }
          text={
            <pre>
              <code>{symbolGeneratorTwoConst}</code>
            </pre>
          }
          onClick={symbolGeneratorTwo}
        />
      </TableBody>
    </Table>
  );
}
