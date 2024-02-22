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

export default function TimeUA() {
  return (
    <Table id="js_time">
      <TableBody>
        <TableOneCol text={<h2>Порядок обробки подій.</h2>} />
        <TableOneCol
          text={
            <p>
              Для виконання дій через певні Проміжки часу в об'єкті window
              передбачені функції таймерів. Є два типи таймерів: одні
              виконуються лише один раз, а інші постійно через проміжок часу.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>setTimeout()</h3>}
          text={
            <p>
              Для одноразового виконання дій через проміжок часу призначено
              функцію setTimeout(). Вона може приймати два параметра: <br />
              const timerId = setTimeout(someFunction, period)
              <br />- period вказує на проміжок, через який виконуватиметься
              функція. <br />- Деякіфункції. А як результат функція повертає id
              таймер.
              <pre>
                <code>{timerFunctionConst}</code>
              </pre>
              <br />У цьому випадку через 3 секунди після завантаження сторінки
              відбудеться спрацювання функції timerFunction.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>clearTimeout()</h3>}
          text={<p>Для зупинки таймера.</p>}
        />
        <TableTwoEqualCol
          title={<h3>setInterval()</h3>}
          text={
            <p>
              Працюють аналогічно до функцій setTimeout() тільки постійно
              виконує певну функцію через проміжок часу.
              <pre>
                <code>{functionSetIntervalConst}</code>
              </pre>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>clearInterval()</h3>}
          text={<p>Для зупинки таймера.</p>}
        />
        <TableTwoEqualCol
          title={<h3>requestAnimationFrame()</h3>}
          text={
            <p>
              Діє аналогічно setInterval() за винятком, що він більше заточений
              під анімації, роботу з графікою та має ряд оптимізацій, які
              покращують його продуктивність.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>clearInterval()</h3>}
          text={<p>Для зупинки таймера.</p>}
        />
        <TableTwoEqualCol
          title={<h3>requestAnimationFrame()</h3>}
          text={
            <>
              <p>
                Діє аналогічно setInterval() за винятком, що він більше
                заточений під анімації, роботу з графікою та має ряд
                оптимізацій, які покращують його продуктивність.
              </p>
            </>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад requestAnimationFrame"}
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
          title={<h3>Синхронність</h3>}
          text={
            <p>
              JavaScript сам по собі однопотоковий, що означає те, що тільки
              один блок коду може запускатися за один раз. Іншими словами, Поки
              не закінчиться перша дія друга не почнеться.
            </p>
          }
        />
        <ButtonExampleTwoCol
          titleButtonExample={"Приклад синхронності"}
          title={
            <>
              <img src={sync} alt="sync" />
              <pre>
                <code>{syncConst}</code>
              </pre>
              <p id="formated-text">
                1. На початку створюється глобальний контекст main().
                <br />
                2. Потім створюється first() і додається догори. <br />
                3. Поміщаємо на гору Section 1 <br />
                4. Виконуємо його та прибираємо <br />
                5. Потім переходимо далі і знаходимо second(). 6. Виконуємо та
                розміщуємо нагору Section 2 <br />
                7. Виконали та прибрали <br />
                8. Забираємо second() <br />
                9. Виконуємо Section 3 і видаляємо його. 10. Всі дії зроблено,
                очищаємо кільця. Забираємо first()
                <br />
                11. Забираємо main() <br />
                12. Всі колстаки виконані та прибрані
              </p>
            </>
          }
        />
        <TableTwoEqualCol
          title={<h3>Асинхронність</h3>}
          text={
            <p>
              Основний інструмент, який обробляє запити паралельно з
              завантаження веб-сторінки. Зараз неможливо уявити інтернет, де всі
              запити на сервер надсилалися б із перезавантаженням сторінки.
              Будь-які дані від сервера запитуються асинхронно: надсилається
              запит (XMLHttpRequest або XHR), і код не чекає на його повернення,
              продовжуючи виконуватись. Коли сервер відповідає, об'єкт XHR
              отримує сповіщення про це і запускає функцію зворотного виклику
              callback, який передали до нього перед відправкою запиту.
            </p>
          }
        />
        <ButtonExampleTwoCol
          titleButtonExample={"Приклад асинхронності"}
          title={
            <>
              <img src={async} alt="async" />
              <pre>
                <code>{asyncConst}</code>
              </pre>
              <p id="formated-text">
                1. Section 1 потрапляє в стек, виконується і видаляється.
                <br />
                2. Потім слідує funcAsync() і додається на верх стека. <br />
                3. Потім ставимо setTimeout() на верх стека.
                <br />
                4. setTimeout() запускає таймер, який потрапив у web API <br />
                5. setTimeout() завершується та видаляється <br />
                6. Потім черга сягає Section 3 <br />
                7. Настає момент виконання setTimeout(), який чекав свого часу{" "}
                <br />
                8. Section 2 потрапляє у вершину стека, виконується та
                видаляється.
              </p>
            </>
          }
        />
      </TableBody>
    </Table>
  );
}
