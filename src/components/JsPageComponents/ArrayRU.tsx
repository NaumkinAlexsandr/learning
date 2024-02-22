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

export default function ArrayRU() {
  return (
    <Table id="js_array">
      <TableBody>
        <TableOneCol text={<h2>Массивы.</h2>} />
        <TableOneCol
          text={
            <p>
              Массив – это специальная структура данных, которая предназначена
              для хранения упорядоченных коллекций значений. Массивы очень
              популярная конструкция и довольно часто используются в коде, т.к.
              позволяют нам хранить несколько значений в одной переменной.
              Каждое значение в массиве имеет свой порядковый номер (индекс).
              Значения называются элементами. Первый элемент массива имеет
              индекс 0, второй – 1, третий – 2 и т.д.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.at()</h3>}
          text={
            <p>
              Открывает доступ к элементам массива с использованием как
              положительных, так и отрицательных индексов.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример at"}
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
              Возвращает новый массив, состоящий из массива, на котором он был
              вызван, соединённого с другими массивами и/или значениями,
              переданными в качестве аргументов.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример concat"}
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
              Копирует часть массива в другое место в том же массиве и
              возвращает его без изменения его длины. br copyWithin(target,
              start, end)
              <br />
              target - Индекс с отсчетом от нуля, в который копируется
              последовательность. Если отрицательный, target будет считаться с
              конца. <br />
              start - Индекс с отсчетом от нуля, с которого следует начать
              копирование элементов. <br />
              end - Индекс с отсчетом от нуля, с которого следует закончить
              копирование элементов.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример copyWithin"}
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
              Возвращает новый объект Array Iterator , содержащий пары
              ключ/значение для каждого индекса в массиве.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример entries"}
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
              Изменяет все элементы в массиве на статическое значение с
              начального индекса на конечный индекс. Он возвращает измененный
              массив. <br />
              fill(value, start, end) <br />
              value - Значение для заполнения массива. <br />
              start - Начальный индекс. <br />
              end - Конечный индекс.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример fill"}
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
              Создает новый массив со всеми элементами подмассивов,
              присоединенных к нему рекурсивно до указанной глубины. При этом
              надо указать, насколько глубоко метод сглаживать структуру
              массива.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример flat"}
          title={
            <p id="formated-text">
              <span>
                Глубина сглаживания 1. Результат сливаются только два массива.
              </span>
              <br />
              <span id="jsarrFlat"></span>
              <br />
              <br />
              <span>
                Глубина сглаживания 2. Результат сливаются только три массива.
              </span>
              <br />
              <span id="jsarrFlat2"></span>
              <br />
              <br />
              <span>
                Если вы не знаете какая нужна глубина чтобы сделать единый
                массив, тогда пишем <b>Infinity</b>
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
              Сопоставляет каждый элемент массива с помощью функции
              сопоставления, а затем сводит результаты в новый массив.
              Представляет собой комбинацию map() метода, за которым следует
              flat() метод глубины 1.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример flatMap"}
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
              Создает массив, содержащий значения, которые вы ему передаете,
              независимо от типов или количества аргументов.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример of"}
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
              Создаёт новый экземпляр массива из массивоподобного или
              итерируемого объекта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример from"}
          title={
            <p id="formated-text">
              <span>
                Задача перебрать массив и вывести новый массив с уникальными
                фруктами.
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
          titleButtonExample={"Пример from 2"}
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
          text={<p>Проводит поиск и выдаёт булион.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример includes"}
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
          titleButtonExample={"Пример includes 2"}
          title={
            <p id="formated-text">
              <span>Перебрать массив из чисел и вывести числа больше 10.</span>
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
              Возвращает первый индекс, по которому данный элемент может быть
              найден в массиве или -1, если такого индекса нет.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример indexOf"}
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
              Возвращает последний индекс, по которому данный элемент может быть
              найден в массиве или -1, если такого индекса нет.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример lastIndexOf"}
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
          text={<p>Позволяет найти элемент массива по какому-то критерию.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример find"}
          title={
            <p id="formated-text">
              <span>
                Задача. <br />
                Найти человека в массиве по имени Vasya и вывести объект.
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
          text={<p>Позволяет найти элемент массива по его индексу.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример findIndex"}
          title={
            <p id="formated-text">
              <span>
                Задача. <br />
                Найти человека в массиве по имени Gosha и вывести его индекс в
                массиве .
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
              Создаёт новый массив с результатом вызова указанной функции для
              каждого элемента массива.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map"}
          title={
            <p id="formated-text">
              <span>
                Задача. <br />
                Перебрать массив по возрасту и имени, и вывести в новый массив.
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
          titleButtonExample={"Пример map 2"}
          title={
            <p id="formated-text">
              <span>
                Задача. <br />
                Есть массив, нужно умножить числа массива на другое число
                (например 2) и вывести результат в новый массив.
              </span>
              <br />
              <span>
                В дальнешем можно обращаться к нему в любой момент используя
                только имя функции.
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
            <p>Позволяет отсеять элементы из массива по какому-то критерию.</p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример filter"}
          title={
            <p id="formated-text">
              <span>
                Задача. <br />
                Необходимо отсортировать людей по их возрасту. Например &gt;=20
                лет.
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
              Применяется к каждому элементу массива и выводит сумму. Проходит
              массив с лева на право.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример reduce"}
          title={
            <p id="formated-text">
              <span>
                Задача. <br />
                Просуммировать бюджеты всех людей.
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
              Применяется к каждому элементу массива и выводит сумму. Проходит
              массив с права на лево.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример reduceRight"}
          title={
            <p id="formated-text">
              <span>
                Задача. <br />
                Просуммировать бюджеты всех людей.
              </span>
              <br />
              <br />
              <span id="jsReduceRight"></span>
            </p>
          }
          text={
            <pre>
              <code>{peopleCode}</code>
              <code>{reduceRightCode}</code>
            </pre>
          }
          onClick={reduceRight}
        />
        <TableTwoEqualCol
          title={<h3>.every()</h3>}
          text={
            <p>
              Проверяет, удовлетворяют ли все элементы массива условию,
              заданному в передаваемой функции.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример every"}
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
              Проверяет, удовлетворяет ли какой-либо элемент массива условию,
              заданному в передаваемой функции.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример some"}
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
          text={<p>Сортирует массивы в алфавитном порядке.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример sort"}
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
              Выполняет функцию callback один раз для каждого элемента,
              находящегося в массиве в порядке возрастания.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример forEach"}
          title={
            <p id="formated-text">
              <span>
                Задача. <br />
                Перебрать массив объектов и вывести в результат данные человека
                и его индекс в массиве.
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
              Возвращает true, если объект является массивом и false, если он
              массивом не является.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.keys()</h3>}
          text={<p>Позволяет вывести объект.</p>}
        />
        <TableTwoEqualCol
          title={<h3>.splice()</h3>}
          text={
            <p>
              Изменяет содержимое массива, удаляя существующие элементы и/или
              добавляя новые.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример splice"}
          title={
            <p id="formated-text">
              <span>Удаляем элементы от 0 до 7.</span>
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
          titleButtonExample={"Пример splice"}
          title={
            <p id="formated-text">
              <span>
                Удаляем элементы от 0 до 7 и добавляем 1, 2, 3 в начало массива.
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
              Не изменяет исходный массив, а возвращает новую «одноуровневую»
              копию, содержащую копии элементов, вырезанных из исходного
              массива.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример slice"}
          title={
            <p id="formated-text">
              <span>Передадим в новый массив первые 4 цифры.</span>
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
          titleButtonExample={"Пример slice 2"}
          title={
            <p id="formated-text">
              <span>Разделение массива на подмассивы.</span>
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
              Добавляет один или более элементов в конец массива и возвращает
              новую длину массива.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример push"}
          title={
            <p id="formated-text">
              <span>Перебрать массив из чисел и вывести числа больше 10.</span>
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
            <p>
              Удаляет последний элемент из массива и возвращает его значение.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример pop"}
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
              Добавляет один или более элементов в начало массива и возвращает
              новую длину массива.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример unshift"}
          title={
            <p id="formated-text">
              <span>Перебрать массив из чисел и вывести числа больше 10.</span>
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
              Удаляет первый элемент из массива и возвращает его значение. Этот
              метод изменяет длину массива.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример shift"}
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
              На месте обращает порядок следования элементов массива. Первый
              элемент массива становится последним, а последний —
              первым.array.reverse()
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.split()</h3>}
          text={<p>Позволяет разделить слова на массивы.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример split"}
          title={
            <p id="formated-text">
              <span>
                Написать код, который принимает на вход строку и вывести в
                консоль все слова поочередно, удалив все буквы 'e', 'a'.
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
              Преобразует все элементы массива в строки и объединяет их в одну
              большую строку. Элемент массива с типом undefined или null
              преобразуется в пустую строку. <br />
              arr.join([separator])
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример join"}
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
              Возвращает строку, представляющую элементы массива. Элементы
              преобразуются в строки с использованием их методов, и эти строки
              разделяются специфичной для локали строкой (например, запятой ",")
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример toLocaleString"}
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
              Возвращает строку, представляющую указанный массив и его элементы.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример toString"}
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
              Возвращает новый объект итератора массива , который перебирает
              значение каждого индекса в массиве.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример values"}
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
