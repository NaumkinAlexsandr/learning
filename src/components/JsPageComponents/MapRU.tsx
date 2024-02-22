import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  newMapSetConst,
  newMapGetConst,
  newMapHasConst,
  newMapDeleteConst,
  newMapClearConst,
  newMapSizeConst,
  newMapKeyConst,
  newMapValuesConst,
  newMapEntriesConst,
  newMapForEachConst,
  newMapForOfConst,
} from "./MapConstPre.ts";
import {
  newMapSet,
  newMapGet,
  newMapHas,
  newMapDelete,
  newMapClear,
  newMapSize,
  newMapKey,
  newMapValues,
  newMapEntries,
  newMapForEach,
  newMapForOf,
} from "./map.js";

export default function MapRU() {
  return (
    <Table id="js_map">
      <TableBody>
        <TableOneCol text={<h2>Map.</h2>} />
        <TableOneCol
          text={
            <p>
              Map — это коллекция пар ключ/значение, которая может использовать
              любой тип данных в качестве ключа и поддерживает порядок своих
              записей. Карты содержат как характеристики объектов (коллекция пар
              ключ/значение), так и массивов (упорядоченная коллекция), но имеют
              больше сходства с объектами. Методы и свойства:
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>const map = new Map()</h3>}
          text={<p>Инициализация карты.</p>}
        />
        <TableTwoEqualCol
          title={<h3>map.set(key, value)</h3>}
          text={<p>Записываем ключи и значения.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map set"}
          title={
            <p id="formated-text">
              <span id="jsMapSet"></span>
            </p>
          }
          text={
            <pre>
              <code>{newMapSetConst}</code>
            </pre>
          }
          onClick={newMapSet}
        />
        <TableTwoEqualCol
          title={<h3>map.get(key)</h3>}
          text={<p>Возвращает значения по ключу.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map get"}
          title={
            <p id="formated-text">
              <span id="jsMapGet"></span>
            </p>
          }
          text={
            <pre>
              <code>{newMapGetConst}</code>
            </pre>
          }
          onClick={newMapGet}
        />
        <TableTwoEqualCol
          title={<h3>map.has(key)</h3>}
          text={
            <p>
              Возвращает булевое значение. Если ключ есть true и false если
              ключа нет.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map has"}
          title={
            <p id="formated-text">
              <span id="jsMapHas"></span>
            </p>
          }
          text={
            <pre>
              <code>{newMapHasConst}</code>
            </pre>
          }
          onClick={newMapHas}
        />
        <TableTwoEqualCol
          title={<h3>map.delete(key)</h3>}
          text={<p>Позволяет удалить ненужный ключ.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map delete"}
          title={
            <p id="formated-text">
              <span id="jsMapDelete"></span>
            </p>
          }
          text={
            <pre>
              <code>{newMapDeleteConst}</code>
            </pre>
          }
          onClick={newMapDelete}
        />
        <TableTwoEqualCol
          title={<h3>map.clear()</h3>}
          text={<p>Полностью очищает коллекцию объекта.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map clear"}
          title={
            <p id="formated-text">
              <span id="jsMapClear"></span>
            </p>
          }
          text={
            <pre>
              <code>{newMapClearConst}</code>
            </pre>
          }
          onClick={newMapClear}
        />
        <TableTwoEqualCol
          title={<h3>map.size</h3>}
          text={<p>Показывает количество элементов.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map size"}
          title={
            <p id="formated-text">
              <span id="jsMapSize"></span>
            </p>
          }
          text={
            <pre>
              <code>{newMapSizeConst}</code>
            </pre>
          }
          onClick={newMapSize}
        />
        <TableOneCol text={<h3>Перебор Map.</h3>} />
        <TableTwoEqualCol
          title={<h3>map.keys()</h3>}
          text={<p>Возвращает итерируемый объект по ключам.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map keys"}
          title={
            <p id="formated-text">
              <span id="jsMapKey"></span>
            </p>
          }
          text={
            <pre>
              <code>{newMapKeyConst}</code>
            </pre>
          }
          onClick={newMapKey}
        />
        <TableTwoEqualCol
          title={<h3>map.values()</h3>}
          text={<p>Возвращает итерируемый объект по значениям.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map values"}
          title={
            <p id="formated-text">
              <span id="jsMapValues"></span>
            </p>
          }
          text={
            <pre>
              <code>{newMapValuesConst}</code>
            </pre>
          }
          onClick={newMapValues}
        />
        <TableTwoEqualCol
          title={<h3>map.entries()</h3>}
          text={<p>Возвращает массив пар ключ/значение.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map entries"}
          title={
            <p id="formated-text">
              <span id="jsMapEntries"></span>
            </p>
          }
          text={
            <pre>
              <code>{newMapEntriesConst}</code>
            </pre>
          }
          onClick={newMapEntries}
        />
        <TableTwoEqualCol
          title={<h3>Итерация Map</h3>}
          text={
            <p>
              Итерация карты происходит в последовательности value, key и map.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map forEach"}
          title={
            <p id="formated-text">
              <span id="jsMapForEach"></span>
            </p>
          }
          text={
            <pre>
              <code>{newMapForEachConst}</code>
            </pre>
          }
          onClick={newMapForEach}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример map forOf"}
          title={
            <p id="formated-text">
              <span id="jsMapForOf"></span>
            </p>
          }
          text={
            <pre>
              <code>{newMapForOfConst}</code>
            </pre>
          }
          onClick={newMapForOf}
        />
      </TableBody>
    </Table>
  );
}
