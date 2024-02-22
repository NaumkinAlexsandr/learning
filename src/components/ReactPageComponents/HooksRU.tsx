import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  useState,
  useStateTwo,
  useEffect,
  useContext,
  contextExample,
  contextExampleProps,
  useReducer,
  useCallback,
  useMemo,
  useRef,
} from "./HooksConstPre.ts";
const context = require("../../images/context.png");
import State from "./State.jsx";
import StateTwo from "./StateTwo.jsx";
import Effect from "./Effect.jsx";
import Context from "./ContextTwo.jsx";
import Reducer from "./Reducer.jsx";
import Callback from "./Callback.jsx";
import Memo from "./Memo.jsx";
import UseRef from "./UseRef.jsx";

export default function HooksRU() {
  return (
    <>
      <Table id="react_hooks">
        <TableBody>
          <TableOneCol text={<h2>Примеры использования Hooks.</h2>} />
          <TableOneCol text={<h3>useState.</h3>} />
          <TableOneCol
            text={
              <p>
                Этот хук позволяет взаимодействовать с состоянием. <br />
                Он принимает две переменные: <br />
                1. само состояние <br />
                2. функция позволяющая изменить состояние, всегда используется с
                префиксом set <br />
                const [counter, setCounter] = useState();
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Данный код представляет собой компонент React, который
                использует хук useState для управления состоянием компонента. В
                компоненте определены следующие состояния:
                <br />
                1. counter : хранит текущее значение счетчика и инициализируется
                значением 0.
                <br />
                2. state : хранит объект состояния, который содержит два
                свойства: title (с инициализацией "Some count") и data (с
                инициализацией текущей даты в формате строки).
                <br />
                Компонент также содержит несколько функций-обработчиков событий:
                <br />
                1. increment() : увеличивает значение счетчика на 1.
                <br />
                2. decrement() : уменьшает значение счетчика на 1.
                <br />
                3. reset() : сбрасывает значение счетчика на 0.
                <br />
                4. updateTitle() : обновляет значение свойства title в объекте
                состояния.
                <br />
                <State />
                <br />
                <span>
                  Edit – изменить title, сохраняя другие строки без изменения
                  благодаря ...update, если этого не сделать то data:
                  Date.now(), удаляется, поскольку setState полностью
                  перезаписывает объект.
                </span>
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{useState}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                Данный код представляет собой еще один компонент React, который
                также использует хук useState для управления состоянием
                компонента. В этом компоненте определено следующее состояние:
                <br />
                1. numbers : хранит массив чисел и инициализируется значением
                [1, 2, 3] .
                <br />
                Компонент также содержит функцию addNumbers , которая
                выполняется при клике на кнопку "Add". Внутри этой функции
                пользователю предлагается ввести новое число с помощью
                всплывающего окна prompt . Затем новое число добавляется в
                массив numbers с помощью функции setNumbers , используя оператор
                расширения ... для создания нового массива.
                <br />
                Возвращаемое значение компонента содержит элементы JSX, которые
                отображают каждый элемент массива numbers в виде списка
                &lt;li&gt; . При клике на кнопку "Add" вызывается функция
                addNumbers , которая добавляет новое число в массив.
                <StateTwo />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{useStateTwo}</code>
                </pre>
              </>
            }
          />
          <TableOneCol text={<h3>useEffect</h3>} />
          <TableOneCol
            text={
              <p>
                Позволяет изменить некоторые методы класса жизненного цикла
                компонента
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                В компоненте определены следующие состояния:
                <br />
                1. type: хранит тип ресурса, который будет запрашиваться с
                помощью API (users, todos, posts).
                <br />
                2. data: хранит полученные данные с сервера в формате JSON.
                <br />
                Функция useEffect используется для выполнения запроса к API при
                изменении значения type. При каждом изменении type, useEffect
                будет запускаться снова и выполнять запрос к соответствующему
                ресурсу с помощью функции fetch. Полученные данные преобразуются
                в формат JSON и сохраняются в состояние data с помощью функции
                setData.
                <br />
                Возвращаемое значение компонента содержит элементы JSX, которые
                отображают текущий выбранный ресурс ( type ) и кнопки, при
                нажатии на которые будет изменяться type. Кнопка "Reset"
                сбрасывает значение type на пустую строку, что приводит к сбросу
                данных в data и отображению пустого массива.
                <br />
                После кнопок выводится содержимое состояния data в формате JSON
                с помощью элемента &lt;pre&gt;.
                <br />
                <Effect />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{useEffect}</code>
                </pre>
              </>
            }
          />
          <TableOneCol text={<h3>useContext</h3>} />
          <TableOneCol
            text={
              <p>
                Context – предназначен для передачи данных на разных уровнях
                вложенности. Это позволит избежать передачи <b>props</b> в
                промежуточные компоненты
                <img className="react_images" src={context} alt="context" />
                <br />
                <table style={{ border: "1px solid white" }}>
                  <tbody>
                    <tr>
                      <td style={{ padding: "5px 5px" }}>Context.Provider</td>
                      <td style={{ padding: "5px 5px" }}>
                        Каждый объект Context используется вместе с Provider
                        компонентом. Он принимает props value, который
                        передается в все необходимые компоненты.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "5px 5px" }}>Context.Consumer</td>
                      <td style={{ padding: "5px 5px" }}>
                        Принимает функцию, содержащую значение контекста, и
                        возвращает компонент. Значение берет из ближайшего props
                        value компонента Provider. Если нет Provider, тогда
                        value="defaultValue".
                      </td>
                    </tr>
                  </tbody>
                </table>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <Context />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{useContext}</code>
                </pre>
              </>
            }
          />
          <TableOneCol text={<h3>Сравнение Context и Props.</h3>} />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{contextExample}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{contextExampleProps}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol text={<h3>useReducer</h3>} />
          <TableOneCol
            text={
              <p>
                Хук useReducer позволяет нам управлять сложными состояниями и
                действиями в нашем компоненте, предоставляя более
                структурированный способ изменения состояния.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                В этом примере мы используем хук useReducer, чтобы управлять
                состоянием счетчика.
                <br />
                Мы начинаем с инициализации начального состояния initialState,
                которое содержит свойство count со значением 0.
                <br />
                Затем мы определяем редьюсер reducer, который принимает текущее
                состояние и действие, и возвращает новое состояние в зависимости
                от действия. В нашем примере мы обрабатываем действия
                "increment", "decrement" и "reset", изменяя значение count в
                соответствии с каждым действием.
                <br />
                В компоненте ExampleComponent мы используем хук useReducer для
                создания состояния state и функции dispatch, которая позволяет
                вызывать действия и передавать их редьюсеру.
                <br />
                Затем мы определяем обработчики событий handleIncrement,
                handleDecrement и handleReset, которые вызывают соответствующие
                действия, передавая их в dispatch.
                <Reducer />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{useReducer}</code>
                </pre>
              </>
            }
          />
          <TableOneCol text={<h3>useCallback</h3>} />
          <TableOneCol
            text={
              <p>
                Хук useCallback вернет мемоизированную версию колбека, который
                меняется только, если изменяются значения одной из зависимостей.
                Это полезно при передаче колбеков оптимизированным дочерним.
                компонентам, которые возлагаются на равенство ссылок для
                предотвращение ненужных рендеров. useCallback используется для
                мемоизации коллбеков в компонентах.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Данный код представляет собой компонент React с использованием
                хука useState и useCallback. В компоненте определены следующие
                состояния:
                <br />
                1. colored: хранит логическое значение для определения цвета
                текста.
                <br />
                2. count: хранит числовое значение для отображения количества
                элементов.
                <br />
                3. style: объект стилей для текста в зависимости от значения
                colored.
                <br />
                Функция generateItems создает массив элементов на основе
                текущего значения count. Эта функция использует хук useCallback
                , чтобы мемоизировать результат и избежать лишних перерисовок
                компонента при изменении других состояний.
                <br />
                Возвращаемое значение компонента содержит элементы JSX, которые
                отображают текущее значение count, кнопки для увеличения и
                уменьшения значения count, кнопку для изменения цвета текста, а
                также компонент ItemList, которому передается функция
                generateItems в качестве пропса.
                <br />
                Компонент ItemList используется для отображения списка
                элементов, которые генерируются функцией generateItems.
                <br />
                Этот компонент демонстрирует использование хука useCallback для
                оптимизации производительности компонента, чтобы избежать лишних
                вычислений при изменении зависимостей.
                <br />
                <Callback />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{useCallback}</code>
                </pre>
              </>
            }
          />
          <TableOneCol text={<h3>useMemo</h3>} />
          <TableOneCol
            text={
              <p>
                useMemo производит вычисления только тогда, когда зависимости
                изменились. Это позволяет оптимизировать вычислительную мощность
                при каждому рендеру. useMemo используется для мемоизации
                значений.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Данный код представляет собой компонент React, который
                использует хуки useState и useMemo. В компоненте определены
                следующие состояния:
                <br />
                1. number: хранит числовое значение, инициализированное
                значением 33.
                <br />
                2. colored: хранит логическое значение для определения цвета
                текста.
                <br />
                3. style: используется useMemo для мемоизации объекта стилей
                текста в зависимости от значения colored.
                <br />
                4. computed: используется useMemo для мемоизации результата
                сложной вычислительной функции complexCompute в зависимости от
                значения number.
                <br />
                Функция complexCompute представляет собой вычислительно
                интенсивную функцию, которая выполняет множество итераций для
                симуляции вычислительной нагрузки.
                <br />
                Возвращаемое значение компонента содержит элементы JSX, которые
                отображают результат вычислений computed, кнопки для увеличения
                и уменьшения значения number, а также кнопку для изменения цвета
                текста.
                <br />
                Хук useMemo используется для оптимизации производительности
                компонента, чтобы избежать лишних вычислений и повторных
                рендеров при изменении зависимостей. В данном случае, результат
                сложных вычислений и стиль текста мемоизируются с помощью
                useMemo.
                <br /> <Memo />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{useMemo}</code>
                </pre>
              </>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
