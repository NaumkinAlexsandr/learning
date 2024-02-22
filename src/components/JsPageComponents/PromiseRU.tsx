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

export default function PromiseRU() {
  return (
    <Table id="js_promise">
      <TableBody>
        <TableOneCol text={<h2>Promise.</h2>} />
        <TableOneCol
          text={
            <p>
              Представляет собой обработчик асинхронных операций который
              возвращаемый объект с прекреплённым колбеком. Колбек может быть
              двух видов: <br />
              1. resolve - когда операция прошла успешно.
              <br />
              2. reject - если в процессе операции произошла ошибка. <br />
              Promise может находиться в трёх состояниях, каждое из которых
              имеет свой результат:
              <br />
              1. pending - Состояние ожидания. Которое в зависимости от колбека
              перетекает в другое состаяние. В данном случае результат
              undefined.
              <br />
              2. fulfilled - Состояние в которое переходит при колбеке resolve.
              В данном случае результат будет положительным и мы получим
              значение (value).
              <br />
              3. rejected - Состояние в которое переходит при колбеке reject. Ну
              и на конец результат будет отрицательный и мы получим (error).
            </p>
          }
        />
        <TableOneCol text={<h3>Функции промисов.</h3>} />
        <TableTwoEqualCol
          title={<h3>then</h3>}
          text={
            <p>
              Позволяет вернуть промис в зависимости от состояния resolve или
              reject.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример resolve"}
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
          titleButtonExample={"Пример reject"}
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
        <TableTwoEqualCol
          title={<h3>catch</h3>}
          text={<p>Используется для создания обработчика ошибок.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример catch"}
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
          text={<p>Проводит очистку после завершения всех операций.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример finally"}
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
        <TableOneCol text={<h3>Цепочка промисов.</h3>} />
        <TableOneCol
          text={
            <p>
              Цепочка промисов состоит в том, что это последовательная передача
              данных из одного then в другой.
              <pre>
                <code>{chainPromiseConst}</code>
              </pre>
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример chain Promis"}
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
          titleButtonExample={"Пример chain Promis 2"}
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
        <TableOneCol text={<h3>Методы промисов.</h3>} />
        <TableTwoEqualCol
          title={<h3>Promise.all</h3>}
          text={
            <p>
              Ожидает выполнения всех промисов и возвращает массив с
              результатами. Если любой из указанных промисов вернёт ошибку, то
              результатом работы Promise.all будет эта ошибка, результаты
              остальных промисов будут игнорироваться.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Promise.all"}
          title={
            <p id="formated-text">
              <span>
                Promise возвращает 10, 20 и 30 через 1, 2 и 3 секунды. Мы
                используем setTimeout() для имитации асинхронных операций:
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
              Ждёт, пока все промисы завершатся и возвращает их результаты в
              виде массива с объектами.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Promise.allSettled"}
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
              Ожидает первый выполненный промис, который становится его
              результатом, остальные игнорируются.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Promise.race"}
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
              Ожидает первый успешно выполненный промис, который становится его
              результатом, остальные игнорируются. Если все переданные промисы
              отклонены, AggregateError становится ошибкой Promise.any.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Promise.any"}
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
          text={
            <p>Возвращает успешно выполнившийся промис с результатом value.</p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Promise.reject</h3>}
          text={<p>Возвращает промис с ошибкой error.</p>}
        />
      </TableBody>
    </Table>
  );
}
