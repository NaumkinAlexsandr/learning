import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  timerFunctionConst,
  functionSetIntervalConst,
  functionAnimationFrameConst,
  syncConst,
  asyncConst,
} from "./TimeConstPre.ts";
import { functionAnimationFrame } from "./time.js";
const sync = require("../../images/sync.png");
const async = require("../../images/async.gif");

export default function TimeRU() {
  return (
    <Table id="js_time">
      <TableBody>
        <TableOneCol text={<h2>Порядок обработки событий.</h2>} />
        <TableOneCol
          text={
            <p>
              Для выполнения действий через определенные промежутки времени в
              объекте window предусмотрены функции таймеров. Есть два типа
              таймеров: одни выполняются только один раз, а другие постоянно
              через промежуток времени.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>setTimeout()</h3>}
          text={
            <p>
              Для одноразового выполнения действий через промежуток времени
              предназначена функция setTimeout(). Она может принимать два
              параметра: <br />
              const timerId = setTimeout(someFunction, period)
              <br />
              - period указывает на промежуток, через который будет выполняться
              функция. <br />- someFunction. А в качестве результата функция
              возвращает id таймера.
              <pre>
                <code>{timerFunctionConst}</code>
              </pre>
              <br />В данном случае через 3 секунды после загрузки страницы
              произойдет срабатывание функции timerFunction.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>clearTimeout()</h3>}
          text={<p>Для остановки таймера.</p>}
        />
        <TableTwoEqualCol
          title={<h3>setInterval()</h3>}
          text={
            <p>
              Работают аналогично функциям setTimeout() только постоянно
              выполняет определенную функцию через промежуток времени.
              <pre>
                <code>{functionSetIntervalConst}</code>
              </pre>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>clearInterval()</h3>}
          text={<p>Для остановки таймера.</p>}
        />
        <TableTwoEqualCol
          title={<h3>requestAnimationFrame()</h3>}
          text={
            <>
              <p>
                Действует аналогично setInterval() за тем исключением, что он
                больше заточен под анимации, работу с графикой и имеет ряд
                оптимизаций, которые улучшают его производительность.
              </p>
            </>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример requestAnimationFrame"}
          title={
            <p id="formated-text">
              <div id="rect"></div>
            </p>
          }
          text={
            <pre>
              <code>{functionAnimationFrameConst}</code>
            </pre>
          }
          onClick={functionAnimationFrame}
        />
        <TableTwoEqualCol
          title={<h3>Синхронность</h3>}
          text={
            <p>
              JavaScript сам по себе однопоточный, что означает то, что только
              один блок кода может запускаться за раз. Иными словами Пока не
              закончится первое действие второе не начнётся.
            </p>
          }
        />
        <ButtonExampleTwoCol
          titleButtonExample={"Пример синхронности"}
          title={
            <>
              <img src={sync} alt="sync" />
              <pre>
                <code>{syncConst}</code>
              </pre>
              <p id="formated-text">
                1. В самом начале создаётся глобальный контекст main().
                <br />
                2. Затем создаётся first() и добавляется наверх. <br />
                3. Помещяем на верх Section 1 <br />
                4. Выполныем его и убираем <br />
                5. Затем переходим дальше и находим second() <br />
                6. Выполняем и помещаем наверх Section 2 <br />
                7. Выполнили и убрали <br />
                8. Убираем second() <br />
                9. Выполныем Section 3 и удаляем его <br />
                10. Все действия сделаны, очищаем колстак. Убираем first()
                <br />
                11. Убираем main() <br />
                12. Все колстаки выполнены и убраны
              </p>
            </>
          }
        />
        <TableTwoEqualCol
          title={<h3>Асинхронность</h3>}
          text={
            <p>
              Основной инструмент, который обрабатывает запросы параллельно с
              загрузкой веб-страницы. Сейчас невозможно представить интернет,
              где все запросы на сервер отправлялись бы с перезагрузкой
              страницы. Любые данные от сервера запрашиваются асинхронно:
              отправляется запрос (XMLHttpRequest или XHR), и код не ждёт его
              возвращения, продолжая выполняться. Когда же сервер отвечает,
              объект XHR получает уведомление об этом и запускает функцию
              обратного вызова — callback, который передали в него перед
              отправкой запроса.
            </p>
          }
        />
        <ButtonExampleTwoCol
          titleButtonExample={"Пример асинхронности"}
          title={
            <>
              <img src={async} alt="async" />
              <pre>
                <code>{asyncConst}</code>
              </pre>
              <p id="formated-text">
                1. Section 1 попадает попадает в стек, выполняется и удаляется.
                <br />
                2. Затем следует funcAsync() и добавляется на верх стека. <br />
                3. Затем помещаем setTimeout() на верх стека.
                <br />
                4. setTimeout() запускает таймер который попал в web API <br />
                5. setTimeout() завершается и удаляется <br />
                6. Затем очередь доходит до Section 3 <br />
                7. Настаёт момент выполнения setTimeout() который ждал своего
                времени <br />
                8. Section 2 попадает в вершину стека, выполняется и удаляется.
              </p>
            </>
          }
        />
      </TableBody>
    </Table>
  );
}
