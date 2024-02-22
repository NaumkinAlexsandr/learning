import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  peopleCode,
  filterCode,
  forEachCode,
  findCode,
  findIndexCode,
  mapCode,
  mapTwoCode,
  mapThreeCode,
  reduceCode,
  reduceRightCode,
  splitCode,
  pushCode,
  arrPopCode,
  unshiftCode,
  shiftCode,
  arrincludesCode,
  includesCode,
  arrEveryCode,
  arrSomeCode,
  arrSortCode,
  arrConcatCode,
  arrLastIndexOfCode,
  arrIndexOfCode,
  arrOfCode,
  arrFlatCode,
  arrFlatMapCode,
  arrAtCode,
  arrFromCode,
  fromCode,
  arrSpliceCode,
  arrSpliceTwoCode,
  arrSliceCode,
  arrSliceTwoCode,
  arrJoinCode,
  arrcopyWithinCode,
  arrEntriesCode,
  arrFillCode,
  arrTLSCode,
  arrToStringCode,
  arrValuesCode,
} from "./ArrayConstPre.ts";
import {
  people,
  filter,
  forEach,
  find,
  findIndex,
  map,
  mapTwo,
  mapThree,
  reduce,
  reduceRight,
  split,
  push,
  arrPop,
  unshift,
  shift,
  arrincludes,
  includes,
  arrEvery,
  arrSome,
  arrSort,
  arrConcat,
  arrLastIndexOf,
  arrIndexOf,
  arrOf,
  arrFlat,
  arrFlatMap,
  arrAt,
  arrFrom,
  from,
  arrSplice,
  arrSpliceTwo,
  arrSlice,
  arrSliceTwo,
  arrJoin,
  arrcopyWithin,
  arrEntries,
  arrFill,
  arrTLS,
  arrToString,
  arrValues,
} from "./array.js";

export default function ArrayUA() {
  return (
    <Table id="js_array">
      <TableBody>
        <TableOneCol text={<h2>Масиви.</h2>} />
        <TableOneCol
          text={
            <p>
              Масив – це спеціальна структура даних, яка призначена для
              зберігання впорядкованих колекцій значень. Масиви дуже популярна
              конструкція і часто використовуються у коді, т.к. дозволяють нам
              зберігати кілька значень в одній змінній. Кожне значення масиві
              має свій порядковий номер (індекс). Значення називаються
              елементами. Перший елемент масиву має індекс 0, другий – 1, третій
              – 2 тощо.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.at()</h3>}
          text={
            <p>
              Відкриває доступ до елементів масиву з використанням як
              позитивних, і негативних індексів.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад at"}
          title={
            <p id="formated-text">
              <span id="jsarrAt"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrAtCode}</code>
            </pre>
          }
          onClick={arrAt}
        />
        <TableTwoEqualCol
          title={<h3>.concat()</h3>}
          text={
            <p>
              Повертає новий масив, що складається з масиву, на якому він був
              викликаний, сполученого з іншими масивами та/або значеннями,
              переданими як аргументи.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад concat"}
          title={
            <p id="formated-text">
              <span id="jsarrConcat"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrConcatCode}</code>
            </pre>
          }
          onClick={arrConcat}
        />
        <TableTwoEqualCol
          title={<h3>.copyWithin()</h3>}
          text={
            <p>
              Копіює частину масиву в інше місце в тому ж масиві і повертає його
              без зміни його довжини. br copyWithin(target, start, end)
              <br />
              target - Індекс з відліком від нуля, в який копіюється
              послідовність. Якщо негативний, target буде зважати на кінця.
              <br />
              start - Індекс з відліком від нуля, з якого слід розпочати
              копіювання елементів. <br />
              end - Індекс з відліком від нуля, з якого слід закінчити
              копіювання елементів.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад copyWithin"}
          title={
            <p id="formated-text">
              <span id="jsarrcopyWithin"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrcopyWithinCode}</code>
            </pre>
          }
          onClick={arrcopyWithin}
        />
        <TableTwoEqualCol
          title={<h3>.entries()</h3>}
          text={
            <p>
              Повертає новий об'єкт Array Iterator , що містить пари
              ключ/значення для кожного індексу в масиві.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад entries"}
          title={
            <p id="formated-text">
              <span id="jsarrEntries"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrEntriesCode}</code>
            </pre>
          }
          onClick={arrEntries}
        />
        <TableTwoEqualCol
          title={<h3>.fill()</h3>}
          text={
            <p>
              Змінює всі елементи в масиві на статичне значення з початкового
              індексу на кінцевий індекс Він повертає змінений масив. <br />
              fill(value, start, end) <br />
              value – значення для заповнення масиву. <br />
              start – Початковий індекс. <br />
              end - Кінцевий індекс.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад fill"}
          title={
            <p id="formated-text">
              <span id="jsarrFill"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrFillCode}</code>
            </pre>
          }
          onClick={arrFill}
        />
        <TableTwoEqualCol
          title={<h3>.flat()</h3>}
          text={
            <p>
              Створює новий масив з усіма елементами підмасивів, приєднаних до
              нього рекурсивно до вказаної глибини. При цьому треба зазначити,
              наскільки глибоко метод згладжувати структуру масиву.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад flat"}
          title={
            <p id="formated-text">
              <span>
                Глибина згладжування 1. Результат зливаються лише два масиву.
              </span>
              <br />
              <span id="jsarrFlat"></span>
              <br />
              <br />
              <span>
                Глибина згладжування 2. Результат зливаються лише три масиву.
              </span>
              <br />
              <span id="jsarrFlat2"></span>
              <br />
              <br />
              <span>
                Якщо ви не знаєте яка потрібна глибина щоб зробити єдиний масив,
                тоді пишемо <b>Infinity</b>
              </span>
              <br />
              <span id="jsarrFlat3"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrFlatCode}</code>
            </pre>
          }
          onClick={arrFlat}
        />
        <TableTwoEqualCol
          title={<h3>.flatMap()</h3>}
          text={
            <p>
              Спорівняє кожен елемент масиву за допомогою функції зіставлення, а
              потім зводить результати до нового масиву. Являє собою комбінацію
              map() методу, за яким слідує flat() метод глибини 1.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад flatMap"}
          title={
            <p id="formated-text">
              <span id="jsarrFlatMap"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrFlatMapCode}</code>
            </pre>
          }
          onClick={arrFlatMap}
        />
        <TableTwoEqualCol
          title={<h3>.of()</h3>}
          text={
            <p>
              Створює масив, що містить значення, які ви йому передаєте,
              незалежно від типів чи кількості аргументів.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад of"}
          title={
            <p id="formated-text">
              <span id="jsarrOf"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrOfCode}</code>
            </pre>
          }
          onClick={arrOf}
        />
        <TableTwoEqualCol
          title={<h3>.from()</h3>}
          text={
            <p>
              Створює новий екземпляр масиву з масивоподібного або ітерованого
              об'єкта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад from"}
          title={
            <p id="formated-text">
              <span>
                Завдання перебрати масив та вивести новий масив з унікальними
                фруктів.
              </span>
              <br />
              <span id="jsFrom"></span>
            </p>
          }
          text={
            <pre>
              <code>{fromCode}</code>
            </pre>
          }
          onClick={from}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад from 2"}
          title={
            <p id="formated-text">
              <span id="jsarrFrom"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrFromCode}</code>
            </pre>
          }
          onClick={arrFrom}
        />
        <TableTwoEqualCol
          title={<h3>.includes()</h3>}
          text={<p>Проводить пошук і видає буліон.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад includes"}
          title={
            <p id="formated-text">
              <span id="jsIncludes"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrincludesCode}</code>
            </pre>
          }
          onClick={arrincludes}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад includes 2"}
          title={
            <p id="formated-text">
              <span>Перебрати масив із чисел і вивести числа більше 10.</span>
              <span id="jsIncludes"></span>
            </p>
          }
          text={
            <pre>
              <code>{includesCode}</code>
            </pre>
          }
          onClick={includes}
        />
        <TableTwoEqualCol
          title={<h3>.indexOf()</h3>}
          text={
            <p>
              Повертає перший індекс, за яким цей елемент може бути знайдено у
              масиві або -1, якщо такого індексу немає.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад indexOf"}
          title={
            <p id="formated-text">
              <span id="jsarrIndexOf"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrIndexOfCode}</code>
            </pre>
          }
          onClick={arrIndexOf}
        />
        <TableTwoEqualCol
          title={<h3>.lastIndexOf()</h3>}
          text={
            <p>
              Повертає останній індекс, за яким цей елемент може бути знайдено у
              масиві або -1, якщо такого індексу немає.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад lastIndexOf"}
          title={
            <p id="formated-text">
              <span id="jsarrLastIndexOf"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrLastIndexOfCode}</code>
            </pre>
          }
          onClick={arrLastIndexOf}
        />
        <TableTwoEqualCol
          title={<h3>.find()</h3>}
          text={<p>Дозволяє знайти елемент масиву за якимось критерієм.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад find"}
          title={
            <p id="formated-text">
              <span>
                Завдання. <br />
                Знайти людину в масиві на ім'я Vasya та вивести об'єкт.
              </span>
              <br /> <br />
              <span id="jsFind"></span>
            </p>
          }
          text={
            <pre>
              <code>{peopleCode}</code>
              <code>{findCode}</code>
            </pre>
          }
          onClick={find}
        />
        <TableTwoEqualCol
          title={<h3>.findIndex()</h3>}
          text={<p>Дозволяє знайти елемент масиву за його індексом.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад findIndex"}
          title={
            <p id="formated-text">
              <span>
                Завдання. <br />
                Знайти людину в масиві на ім'я Gosha і вивести її індекс у
                масиві.
              </span>
              <span id="jsFindIndex"></span>
            </p>
          }
          text={
            <pre>
              <code>{peopleCode}</code>
              <code>{findIndexCode}</code>
            </pre>
          }
          onClick={findIndex}
        />
        <TableTwoEqualCol
          title={<h3>.map()</h3>}
          text={
            <p>
              Створює новий масив з результатом виклику зазначеної функції для
              кожного елемента масиву.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map"}
          title={
            <p id="formated-text">
              <span>
                Завдання. <br />
                Перебрати масив за віком та ім'ям, і вивести в новий масив.
              </span>
              <br />
              <br />
              <span id="jsMap"></span>
            </p>
          }
          text={
            <pre>
              <code>{peopleCode}</code>
              <code>{mapCode}</code>
            </pre>
          }
          onClick={map}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map 2"}
          title={
            <p id="formated-text">
              <span>
                Завдання. <br />Є масив, потрібно помножити числа масиву на інше
                число (наприклад 2) та вивести результат у новий масив.
              </span>
              <br />
              <span>
                Надалі можна звертатися до нього у будь-який момент
                використовуючи лише ім'я функції.
              </span>
              <br />
              <br />
              <span id="jsMapTwo"></span>
            </p>
          }
          text={
            <pre>
              <code>{mapTwoCode}</code>
            </pre>
          }
          onClick={mapTwo}
        />
        <TableTwoEqualCol
          title={<h3>.filter()</h3>}
          text={
            <p>Дозволяє відсіяти елементи з масиву за якимось критерієм.</p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад filter"}
          title={
            <p id="formated-text">
              <span>
                Завдання. <br />
                Необхідно відсортувати людей за віком. Наприклад &gt;=20 років.
              </span>
              <br />
              <br />
              <span id="jsFilter"></span>
            </p>
          }
          text={
            <pre>
              <code>{peopleCode}</code>
              <code>{filterCode}</code>
            </pre>
          }
          onClick={filter}
        />
        <TableTwoEqualCol
          title={<h3>.reduce()</h3>}
          text={
            <p>
              Застосовується до кожного елемента масиву та виводить суму.
              Проходить масив зліва направо.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад reduce"}
          title={
            <p id="formated-text">
              <span>
                Завдання. <br />
                Підсумувати бюджети всіх людей.
              </span>
              <br />
              <br />
              <span id="jsReduce"></span>
            </p>
          }
          text={
            <pre>
              <code>{reduceCode}</code>
            </pre>
          }
          onClick={reduce}
        />
        <TableTwoEqualCol
          title={<h3>.reduceRight()</h3>}
          text={
            <p>
              Застосовується до кожного елемента масиву та виводить суму.
              Проходить масив з права на ліво.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад reduceRight"}
          title={
            <p id="formated-text">
              <span>
                Завдання. <br />
                Підсумувати бюджети всіх людей.
              </span>
              <br />
              <br />
              <span id="jsReduceRight"></span>
            </p>
          }
          text={
            <pre>
              <code>{reduceRightCode}</code>
            </pre>
          }
          onClick={reduceRight}
        />
        <TableTwoEqualCol
          title={<h3>.every()</h3>}
          text={
            <p>
              Перевіряє, чи всі елементи масиву задовольняють умові, заданій у
              функції, що передається.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад every"}
          title={
            <p id="formated-text">
              <span id="jsarrEvery"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrEveryCode}</code>
            </pre>
          }
          onClick={arrEvery}
        />
        <TableTwoEqualCol
          title={<h3>.some()</h3>}
          text={
            <p>
              Перевіряє, чи задовольняє якийсь елемент масиву умові, заданому в
              функції, що передається.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад some"}
          title={
            <p id="formated-text">
              <span id="jsarrSome"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrSomeCode}</code>
            </pre>
          }
          onClick={arrSome}
        />
        <TableTwoEqualCol
          title={<h3>.sort()</h3>}
          text={<p>Сортує масиви в алфавітному порядку.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад sort"}
          title={
            <p id="formated-text">
              <span id="jsarrSort"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrSortCode}</code>
            </pre>
          }
          onClick={arrSort}
        />
        <TableTwoEqualCol
          title={<h3>.forEach()</h3>}
          text={
            <p>
              Виконує функцію callback один раз для кожного елемента, що
              знаходиться в масиві в порядку зростання.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад forEach"}
          title={
            <p id="formated-text">
              <span>
                Завдання. <br />
                Перебрати масив об'єктів та вивести в результат дані людини та
                її індекс у масиві.
              </span>
              <br />
              <br />
              <span id="jsForEach"></span>
            </p>
          }
          text={
            <pre>
              <code>{peopleCode}</code>
              <code>{forEachCode}</code>
            </pre>
          }
          onClick={forEach}
        />
        <TableTwoEqualCol
          title={<h3>.isArray()</h3>}
          text={
            <p>
              Повертає true, якщо об'єкт є масивом і false, якщо він масивом не
              є.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.keys()</h3>}
          text={<p>Дозволяє вивести об'єкт.</p>}
        />
        <TableTwoEqualCol
          title={<h3>.splice()</h3>}
          text={
            <p>
              Змінює вміст масиву, видаляючи існуючі елементи та/або додаючи
              нові.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад splice"}
          title={
            <p id="formated-text">
              <span>Видаляємо елементи від 0 до 7.</span>
              <br /> <br />
              <span id="jsarrSplice"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrSpliceCode}</code>
            </pre>
          }
          onClick={arrSplice}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад splice"}
          title={
            <p id="formated-text">
              <span>
                Видаляємо елементи від 0 до 7 і додаємо 1, 2, 3 на початок
                масиву.
              </span>
              <br /> <br />
              <span id="jsarrSpliceTwo"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrSpliceTwoCode}</code>
            </pre>
          }
          onClick={arrSpliceTwo}
        />
        <TableTwoEqualCol
          title={<h3>.slice()</h3>}
          text={
            <p>
              Не змінює вихідний масив, а повертає нову «однорівневу» копію, що
              містить копії елементів, вирізаних із вихідного масиву.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад slice"}
          title={
            <p id="formated-text">
              <span>Передамо в новий масив перші 4 цифри.</span>
              <br /> <br />
              <span id="jsarrSlice"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrSliceCode}</code>
            </pre>
          }
          onClick={arrSlice}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад slice 2"}
          title={
            <p id="formated-text">
              <span>Поділ масиву на підмасиви.</span>
              <span id="jsarrSliceTwo"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrSliceTwoCode}</code>
            </pre>
          }
          onClick={arrSliceTwo}
        />
        <TableTwoEqualCol
          title={<h3>.push()</h3>}
          text={
            <p>
              Додає один або більше елементів у кінець масиву та повертає нову
              довжину масиву.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад push"}
          title={
            <p id="formated-text">
              <span>Перебрати масив із чисел і вивести числа більше 10.</span>
              <span id="jsPush"></span>
            </p>
          }
          text={
            <pre>
              <code>{pushCode}</code>
            </pre>
          }
          onClick={push}
        />
        <TableTwoEqualCol
          title={<h3>.pop()</h3>}
          text={
            <p>Видаляє останній елемент з масиву та повертає його значення.</p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад pop"}
          title={
            <p id="formated-text">
              <span id="jsarrPop"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrPopCode}</code>
            </pre>
          }
          onClick={arrPop}
        />
        <TableTwoEqualCol
          title={<h3>.unshift()</h3>}
          text={
            <p>
              Додає один або більше елементів на початок масиву і повертає нову
              довжину масиву.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад unshift"}
          title={
            <p id="formated-text">
              <span>Перебрати масив із чисел і вивести числа більше 10.</span>
              <span id="jsUnshift"></span>
            </p>
          }
          text={
            <pre>
              <code>{unshiftCode}</code>
            </pre>
          }
          onClick={unshift}
        />
        <TableTwoEqualCol
          title={<h3>.shift()</h3>}
          text={
            <p>
              Видаляє перший елемент з масиву та повертає його значення. Цей
              метод змінює довжину масиву.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад shift"}
          title={
            <p id="formated-text">
              <span id="jsShift"></span>
            </p>
          }
          text={
            <pre>
              <code>{shiftCode}</code>
            </pre>
          }
          onClick={shift}
        />
        <TableTwoEqualCol
          title={<h3>.reverse()</h3>}
          text={
            <p>
              На місці звертає порядок проходження елементів масиву. Перший
              елемент масиву стає останнім, а останній - першим.array.reverse()
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.split()</h3>}
          text={<p>Дозволяє розділити слова на масиви.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад split"}
          title={
            <p id="formated-text">
              <span>
                Написати код, який приймає на вхід рядок і вивести консоль усі
                слова по черзі, видаливши всі літери 'e', ​​'a'.
              </span>
              <span id="jsSplit"></span>
            </p>
          }
          text={
            <pre>
              <code>{splitCode}</code>
            </pre>
          }
          onClick={split}
        />
        <TableTwoEqualCol
          title={<h3>.join()</h3>}
          text={
            <p>
              Перетворює всі елементи масиву в рядки і об'єднує їх в одну
              великий рядок. Елемент масиву з типом undefined або null
              перетворюється на порожній рядок. <br />
              arr.join([separator])
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад join"}
          title={
            <p id="formated-text">
              <span id="jsarrJoin"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrJoinCode}</code>
            </pre>
          }
          onClick={arrJoin}
        />
        <TableTwoEqualCol
          title={<h3>.toLocaleString()</h3>}
          text={
            <p>
              Повертає рядок, що представляє елементи масиву. Елементи
              перетворюються на рядки з використанням їх методів, і ці рядки
              поділяються специфічним для локалі рядком (наприклад, комою ",")
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад toLocaleString"}
          title={
            <p id="formated-text">
              <span id="jsarrTLS"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrTLSCode}</code>
            </pre>
          }
          onClick={arrTLS}
        />
        <TableTwoEqualCol
          title={<h3>.toString()</h3>}
          text={
            <p>
              Повертає рядок, що представляє вказаний масив та його елементи.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад toString"}
          title={
            <p id="formated-text">
              <span id="jsarrToString"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrToStringCode}</code>
            </pre>
          }
          onClick={arrToString}
        />
        <TableTwoEqualCol
          title={<h3>.values()</h3>}
          text={
            <p>
              Повертає новий об'єкт ітератора масиву , який перебирає значення
              кожного індексу в масиві.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад values"}
          title={
            <p id="formated-text">
              <span id="jsarrValues"></span>
            </p>
          }
          text={
            <pre>
              <code>{arrValuesCode}</code>
            </pre>
          }
          onClick={arrValues}
        />
      </TableBody>
    </Table>
  );
}
