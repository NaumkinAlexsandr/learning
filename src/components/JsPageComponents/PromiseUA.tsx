import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  thenResolveConst,
  thenRejectConst,
  thenCatchConst,
  thenFinallyConst,
  chainPromiseConst,
  chainPromisConst,
  chainPromisTwoConst,
  promiseAllConst,
  promiseAllSettledConst,
  promiseRaceConst,
  promiseAnyConst,
} from "./PromiseConstPre.ts";
import {
  thenResolve,
  thenReject,
  thenCatch,
  thenFinally,
  chainPromis,
  chainPromisTwo,
  promiseAll,
  promiseAllSettled,
  promiseRace,
  promiseAny,
} from "./promise.js";

export default function PromiseUA() {
  return (
    <Table id="js_promise">
      <TableBody>
        <TableOneCol text={<h2>Promise.</h2>} />
        <TableOneCol
          text={
            <p>
              є обробником асинхронних операцій який повертається об'єкт з
              перекріпленим колбеком. Колбек може бути двох видів:
              <br />
              1. resolve – коли операція пройшла успішно.
              <br />
              2. reject - якщо у процесі операції Виникла помилка. <br />
              Promise може перебувати у трьох станах, кожен з яких має свій
              результат:
              <br />
              1. pending - Стан очікування. Яке в Залежно від колбека перетікає
              в інший стан. В данному у випадку результат undefined.
              <br />
              2. fulfilled - Стан, в який переходить при ковбеку resolve. В
              даному випадку результат буде позитивним та ми отримаємо значення
              (value).
              <br />
              3. rejected - Стан, в який переходить при колбеку reject. Ну і на
              кінець результат буде негативний, і ми отримаємо (error).
            </p>
          }
        />
        <TableOneCol text={<h3>Функції промісів.</h3>} />
        <TableTwoEqualCol
          title={<h3>then</h3>}
          text={
            <p>
              Дозволяє повернути проміс залежно від стану resolve або reject.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад resolve"}
          title={
            <p id="formated-text">
              <span id="jsThenResolve"></span>
            </p>
          }
          text={
            <pre>
              <code>{thenResolveConst}</code>
            </pre>
          }
          onClick={thenResolve}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад reject"}
          title={
            <p id="formated-text">
              <span id="jsThenReject"></span>
            </p>
          }
          text={
            <pre>
              <code>{thenRejectConst}</code>
            </pre>
          }
          onClick={thenReject}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад catch"}
          title={
            <p id="formated-text">
              <span id="jsThenCatch"></span>
            </p>
          }
          text={
            <pre>
              <code>{thenCatchConst}</code>
            </pre>
          }
          onClick={thenCatch}
        />
        <TableTwoEqualCol
          title={<h3>finally</h3>}
          text={<p>Проводить очищення після завершення всіх операцій.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад finally"}
          title={
            <p id="formated-text">
              <span id="jsThenFinally"></span>
            </p>
          }
          text={
            <pre>
              <code>{thenFinallyConst}</code>
            </pre>
          }
          onClick={thenFinally}
        />
        <TableOneCol text={<h3>Ланцюжок промісів.</h3>} />
        <TableOneCol
          text={
            <p>
              Ланцюжок промісів у тому, що це послідовна передача даних з одного
              вінший.
              <pre>
                <code>{chainPromiseConst}</code>
              </pre>
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад chain Promis"}
          title={
            <p id="formated-text">
              <span id="jsChainPromis"></span>
            </p>
          }
          text={
            <pre>
              <code>{chainPromisConst}</code>
            </pre>
          }
          onClick={chainPromis}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад chain Promis 2"}
          title={
            <p id="formated-text">
              <span id="jsChainPromisTwo"></span>
            </p>
          }
          text={
            <pre>
              <code>{chainPromisTwoConst}</code>
            </pre>
          }
          onClick={chainPromisTwo}
        />
        <TableOneCol text={<h3>Методи промісів.</h3>} />
        <TableTwoEqualCol
          title={<h3>Promise.all</h3>}
          text={
            <p>
              Чекає на виконання всіх промісів і повертає масив з результатами.
              Якщо будь-який із зазначених промісів поверне помилку, то
              результатом роботи Promise.all буде ця помилка, результати інших
              промісів ігноруватимуться.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Promise.all"}
          title={
            <p id="formated-text">
              <span>
                Promise повертає 10, 20 та 30 через 1, 2 та 3 секунди. Ми
                використовуємо setTimeout() для імітації асинхронних операцій:
              </span>
              <br />
              <br />
              <span id="jspromiseAll"></span>
            </p>
          }
          text={
            <pre>
              <code>{promiseAllConst}</code>
            </pre>
          }
          onClick={promiseAll}
        />
        <TableTwoEqualCol
          title={<h3>Promise.allSettled</h3>}
          text={
            <p>
              Чекає, поки всі проміси завершаться і повертає їх результати у
              вигляді масиву з об'єктами.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Promise.allSettled"}
          title={
            <p id="formated-text">
              <span id="jspromiseAllSettled"></span>
            </p>
          }
          text={
            <pre>
              <code>{promiseAllSettledConst}</code>
            </pre>
          }
          onClick={promiseAllSettled}
        />
        <TableTwoEqualCol
          title={<h3>Promise.race</h3>}
          text={
            <p>
              Чекає перший виконаний проміс, який стає його результатом інші
              ігноруються.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Promise.race"}
          title={
            <p id="formated-text">
              <span id="jspromiseRace"></span>
            </p>
          }
          text={
            <pre>
              <code>{promiseRaceConst}</code>
            </pre>
          }
          onClick={promiseRace}
        />
        <TableTwoEqualCol
          title={<h3>Promise.any</h3>}
          text={
            <p>
              Чекає перший успішно виконаний проміс, який стає його результатом,
              решта ігнорується. Якщо всі передані проміси відхилені,
              AggregateError стає помилкою Promise.any.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Promise.any"}
          title={
            <p id="formated-text">
              <span id="jspromiseAny"></span>
            </p>
          }
          text={
            <pre>
              <code>{promiseAnyConst}</code>
            </pre>
          }
          onClick={promiseAny}
        />
        <TableTwoEqualCol
          title={<h3>Promise.resolve</h3>}
          text={<p>Повертає успішно виконаний проміс з результатом value.</p>}
        />
        <TableTwoEqualCol
          title={<h3>Promise.reject</h3>}
          text={<p>Повертає проміс з помилкою error.</p>}
        />
      </TableBody>
    </Table>
  );
}
