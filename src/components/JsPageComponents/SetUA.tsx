import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import { newSetConst } from "./SetConstPre.ts";
import { newSet } from "./set.js";

export default function SetUA() {
  return (
    <Table id="js_set">
      <TableBody>
        <TableOneCol text={<h2>Set.</h2>} />
        <TableOneCol
          text={
            <p>
              Це особливий вид колекції: «безліч» значень (без ключів), де кожне
              значення може з'являтися лише один раз.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>const set = new Set();</h3>}
          text={<p>Ініціалізація об'єкта.</p>}
        />
        <TableTwoEqualCol
          title={<h3>set.add(value)</h3>}
          text={
            <p>
              Додає значення (якщо воно вже є, то нічого не робить), повертає
              той самий об'єкт set.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>set.delete(value)</h3>}
          text={
            <p>
              Видаляє значення, повертає true, якщо value було в множині на
              момент виклику, інакше false.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>set.has(value)</h3>}
          text={<p>Повертає true, якщо значення є у множині, інакше false.</p>}
        />
        <TableTwoEqualCol
          title={<h3>set.clear()</h3>}
          text={<p>Видаляє всі наявні значення.</p>}
        />
        <TableTwoEqualCol
          title={<h3>set.size()</h3>}
          text={<p>Повертає кількість елементів у безлічі.</p>}
        />
        <TableTwoEqualCol
          title={<h3>set.values()</h3>}
          text={<p>Повертає об'єкт, що перебирається для значень.</p>}
        />
        <TableTwoEqualCol
          title={<h3>set.keys()</h3>}
          text={<p>Як і set.values(), є для зворотної сумісності з Map.</p>}
        />
        <TableTwoEqualCol
          title={<h3>set.entries()</h3>}
          text={
            <p>
              Повертає об'єкт, що перебирається, для пар виду [значення,
              значення], є для зворотної сумісності з Map.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Set"}
          title={
            <p id="formated-text">
              <span>
                Завдання перебрати масив та вивести новий масив з унікальними
                фруктів.
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
