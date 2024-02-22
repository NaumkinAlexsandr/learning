import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { newSetConst } from "./SetConstPre.ts";
import { newSet } from "./set.js";

export default function SetRU() {
  return (
    <Table id="js_set">
      <TableBody>
        <TableOneCol text={<h2>Set.</h2>} />
        <TableOneCol
          text={
            <p>
              Это особый вид коллекции: «множество» значений (без ключей), где
              каждое значение может появляться только один раз.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>const set = new Set();</h3>}
          text={<p>Инициализация объекта.</p>}
        />
        <TableTwoEqualCol
          title={<h3>set.add(value)</h3>}
          text={
            <p>
              Добавляет значение (если оно уже есть, то ничего не делает),
              возвращает тот же объект set.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>set.delete(value)</h3>}
          text={
            <p>
              Удаляет значение, возвращает true, если value было в множестве на
              момент вызова, иначе false.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>set.has(value)</h3>}
          text={
            <p>
              Возвращает true, если значение присутствует в множестве, иначе
              false.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>set.clear()</h3>}
          text={<p>Удаляет все имеющиеся значения.</p>}
        />
        <TableTwoEqualCol
          title={<h3>set.size()</h3>}
          text={<p>Возвращает количество элементов в множестве.</p>}
        />
        <TableTwoEqualCol
          title={<h3>set.values()</h3>}
          text={<p>Возвращает перебираемый объект для значений.</p>}
        />
        <TableTwoEqualCol
          title={<h3>set.keys()</h3>}
          text={
            <p>
              Как и set.values(), присутствует для обратной совместимости с Map.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>set.entries()</h3>}
          text={
            <p>
              Возвращает перебираемый объект для пар вида [значение, значение],
              присутствует для обратной совместимости с Map.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Set"}
          title={
            <p id="formated-text">
              <span>
                Задача перебрать массив и вывести новый массив с уникальными
                фруктами.
              </span>
              <br />
              <br />
              <span id="jsSet"></span>
            </p>
          }
          text={
            <pre>
              <code>{newSetConst}</code>
            </pre>
          }
          onClick={newSet}
        />
      </TableBody>
    </Table>
  );
}
