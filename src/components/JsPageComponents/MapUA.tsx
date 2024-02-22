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

export default function MapUA() {
  return (
    <Table id="js_map">
      <TableBody>
        <TableOneCol text={<h2>Map.</h2>} />
        <TableOneCol
          text={
            <p>
              Map - це колекція пар ключ/значення, яка може використовувати
              будь-який тип даних як ключ і підтримує порядок своїх записів.
              Карти містять як характеристики об'єктів (колекція пар
              ключ/значення), так і масивів (упорядкована колекція), але мають
              більше схожості з об'єктами. Методи та властивості:
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>const map = new Map()</h3>}
          text={<p>Ініціалізація картки.</p>}
        />
        <TableTwoEqualCol
          title={<h3>map.set(key, value)</h3>}
          text={<p>Записуємо ключі та значення.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map set"}
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
          text={<p>Повертає значення по ключу.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map get"}
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
              Повертає значення булю. Якщо ключ є true і false якщо ключа ні.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map has"}
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
          text={<p>Дозволяє видалити непотрібний ключ.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map delete"}
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
          text={<p>Повністю очищає колекцію об'єкта.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map clear"}
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
          text={<p>Показує кількість елементів.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map size"}
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
        <TableOneCol text={<h3>Перебір Map.</h3>} />
        <TableTwoEqualCol
          title={<h3>map.keys()</h3>}
          text={<p>Повертає об'єкт, що ітерується, за ключами.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map keys"}
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
          text={<p>Повертає об'єкт, що ітерується, за значеннями.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map values"}
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
          text={<p>Повертає масив пар ключ/значення.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map entries"}
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
          title={<h3>Ітерація Map</h3>}
          text={
            <p>
              Ітерація карти відбувається в послідовності value, key та map.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад map forEach"}
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
          titleButtonExample={"Приклад map forOf"}
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
