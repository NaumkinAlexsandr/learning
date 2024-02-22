import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExample from "../../core/ButtonExample.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  asyncConst,
  AwaitConst,
  errorConst,
  promiseConst,
  asyncTwoConst,
} from "./AwaitConstPre.ts";
import { async, Await, error } from "./await.js";

export default function AwaitUA() {
  return (
    <Table id="js_await">
      <TableBody>
        <TableOneCol text={<h3>Async/await.</h3>} />
        <TableTwoEqualCol
          title={<h3>Async</h3>}
          text={
            <p>
              Пишеться перед функцією і означає те, що ця функція поверне
              проміс.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Async"}
          title={
            <p id="formated-text">
              <span id="jsasync"></span>
            </p>
          }
          text={
            <pre>
              <code>{asyncConst}</code>
            </pre>
          }
          onClick={async}
        />
        <TableTwoEqualCol
          title={<h3>Await</h3>}
          text={
            <p>
              Виконується всередині функції. Await чекає поки виконається проміс
              і потім повертає його результат.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Await"}
          title={
            <p id="formated-text">
              <span id="jsawait"></span>
            </p>
          }
          text={
            <pre>
              <code>{AwaitConst}</code>
            </pre>
          }
          onClick={Await}
        />
        <TableTwoEqualCol
          title={<h3>Error</h3>}
          text={
            <p>
              Для того щоб відловити помилку в async/await використовується
              try...catch.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Error"}
          title={
            <p id="formated-text">
              <span id="jserror"></span>
            </p>
          }
          text={
            <pre>
              <code>{errorConst}</code>
            </pre>
          }
          onClick={error}
        />
        <ButtonExample
          titleButtonExample={"Приклад порівняння"}
          title={
            <p id="formated-text">
              Promise
              <pre>
                <code>{promiseConst}</code>
              </pre>
            </p>
          }
          text={
            <p id="formated-text">
              Async/await
              <pre>
                <code>{asyncTwoConst}</code>
              </pre>
            </p>
          }
        />
      </TableBody>
    </Table>
  );
}
