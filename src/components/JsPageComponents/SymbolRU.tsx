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

export default function SymbolRU() {
  return (
    <Table id="js_symbol">
      <TableBody>
        <TableOneCol text={<h2>Symbol.</h2>} />
        <TableOneCol
          text={
            <p>
              Это уникальный и неизменяемый тип данных, который может быть
              использован как идентификатор для свойств объектов. Синтаксис
              выглядит так: let symbol = Symbol(); <br />
              Каждый символ является уникальным и никогда не будет равен
              другому, даже если описание одинаковое.
            </p>
          }
        />
      </TableBody>
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol"}
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
      <TableOneCol text={<h3>Методы.</h3>} />
      <TableTwoEqualCol
        title={<h3>Symbol.for(key)</h3>}
        text={
          <p>
            Метод Symbol.for() сначала ищет символ с One ключом в глобальном
            реестре символов. Он возвращает существующий символ, если он есть. В
            противном случае Symbol.for() метод создает новый символ,
            регистрирует его в глобальном реестре символов с указанным ключом и
            возвращает символ.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.for"}
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
            Позволяет получить ключ. Если ключ отсутствует тогда выведет
            undefined.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.keyFor"}
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
      <TableOneCol text={<h3>Системные символы.</h3>} />
      <TableTwoEqualCol
        title={<h3>Symbol.asyncIterator</h3>}
        text={
          <p>
            Это встроенный символ, который используется для доступа к
            @@asyncIteratorметоду объекта.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.asyncIterator"}
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
            Метод, определяющий, распознает ли конструктор некоторый объект как
            свой экземпляр. Используется оператором instanceof.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.hasInstance"}
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
            Булево значение, показывающее, должен ли объект быть сведён к
            плоскому представлению в виде массива его элементов функцией
            Array.prototype.concat().
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.isConcatSpreadable"}
        title={
          <p id="formated-text">
            <span id="jssymboIsConcatSpreadable"></span>
            <br />
            <span>
              Если значение будет установлено как false. Мы получим массив с
              встроенным объектом.
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
            Указывает, будет ли функция Symbol.iterator возвращать итератор для
            объекта. Используется конструкцией for...of.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.iterator"}
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
        text={<p>Указывает соответствует ли значение регулярному выражению.</p>}
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.match"}
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
            Возвращает итератор, который дает совпадения регулярного выражения
            со строкой.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.matchAll"}
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
        text={<p>Позволяет заменить совпадающие подстроки в строке.</p>}
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.replace"}
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
          <p>
            Возвращает индекс в строке, соответствующей регулярному выражению.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.search"}
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
            Позволяет подклассам переопределять конструктор по умолчанию для
            объектов. Это определяет протокол о том, как следует копировать
            экземпляры.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.species"}
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
            Разбивает строку по индексам, соответствующим регулярному выражению.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.split"}
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
          <p>Метод, преобразующий объект в примитив (примитивное значение).</p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.toPrimitive"}
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
            Это строковое значение свойства, которое используется при создании
            строки описания объекта по умолчанию.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.toStringTag"}
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
            Используется для указания значения объекта, собственные и
            унаследованные имена свойств которого исключены из withпривязок
            среды связанного объекта.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример Symbol.unscopables"}
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
      <TableOneCol text={<h3>Итераторы.</h3>} />
      <TableOneCol
        text={
          <p>
            Это объект, предназначенный для перебора другого объекта.
            Практически везде, где нужен перебор, он осуществляется через
            итераторы. Это включает в себя не только строки, массивы, но и вызов
            функции с оператором spread f(...args), и многое другое.
          </p>
        }
      />
      <TableTwoEqualCol
        title={<h3>next()</h3>}
        text={
          <p>
            Метод который при каждом вызове возвращает очередное значение и
            проверяет, окончен ли перебор. Также у него присутствует два
            свойства: <br />
            value – очередное значение. <br />
            done – равно false если есть ещё значения, и true – в конце.
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример итератор"}
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
      <TableOneCol text={<h3>Генераторы.</h3>} />
      <TableOneCol
        text={
          <p>
            Генераторы могут порождать (yield) множество значений одно за
            другим, по мере необходимости. Генераторы отлично работают с
            перебираемыми объектами и позволяют легко создавать потоки данных.
            <br />
            <pre>
              <code>{symbolGeneratorThreeConst}</code>
            </pre>
            <br />
            * - означает, это генератор, а не обычная функция. <br />
            yield - оператор возвращает значение и приостанавливает выполнение
            функции. <br />
            Далее следует поместить генератор в переменную. <br />
            let generator = generateSequence();
          </p>
        }
      />
      <ButtonExampleWithBtn
        titleButtonExample={"Пример генератор"}
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
        titleButtonExample={"Пример генератора в массиве"}
        title={
          <p id="formated-text">
            <span>
              Для того чтобы вывести в консоль данные из массива по очередно
              необходимо поставить *.
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
    </Table>
  );
}
