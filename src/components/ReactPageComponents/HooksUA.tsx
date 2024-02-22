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

export default function HooksUA() {
  return (
    <>
      <Table id="react_hooks">
        <TableBody>
          <TableOneCol text={<h2>Приклади використання Hooks.</h2>} />
          <TableOneCol text={<h3>useState.</h3>} />
          <TableOneCol
            text={
              <p>
                Цей хук дозволяє взаємодіяти зі станом. <br />
                Він приймає дві змінні: <br />
                1. сам стан <br />
                2. функція яка дозволяє змінити стан, завжди використовується з
                префіксом set <br />
                const [counter, setCounter] = useState();
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Цей код є компонентом React, який використовує хук useState для
                управління станом компонента. У компоненті визначено такі стани:
                <br />
                1. counter: зберігає поточне значення лічильника та
                ініціалізується значенням 0.
                <br />
                2. state: зберігає об'єкт стану, який містить дві властивості:
                title (з ініціалізацією "Some count") та data (з ініціалізацією
                поточної дати у форматі рядка).
                <br />
                Компонент також містить кілька функцій-обробників подій:
                <br />
                1. increment() : підвищує значення лічильника на 1.
                <br />
                2. decrement(): зменшує значення лічильника на 1.
                <br />
                3. reset() : скидає значення лічильника на 0.
                <br />
                4. updateTitle() : оновлює значення властивості title у об'єкті
                стану.
                <br /> <State /> <br />
                <span>
                  Edit - змінити title, зберігаючи інші рядки без зміни завдяки
                  ...update, якщо цього не зробити то data: Date.now(),
                  видаляється, оскільки setState повністю перезаписує об'єкт.
                </span>
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
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
                Цей код є ще одним компонентом React, який також використовує
                хук useState для керування станом компонента. У цьому компоненті
                визначено такий стан:
                <br />
                1. numbers: зберігає масив чисел та ініціалізується значенням
                [1, 2, 3].
                <br />
                Компонент також містить функцію addNumbers, яка виконується при
                натисканні на кнопку "Add". Всередині цієї функції користувачеві
                пропонується ввести нове число за допомогою спливаючого вікна
                prompt. Потім нове число додається до масиву numbers за
                допомогою функції setNumbers , використовуючи оператор
                розширення ... для створення нового масиву.
                <br />
                Значення компонента, що повертається, містить елементи JSX, які
                відображають кожен елемент масиву numbers у вигляді списку
                &lt;li&gt; . При натисканні на кнопку "Add" викликається функція
                addNumbers, яка додає нове число в масив.
                <StateTwo />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
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
                Дозволяє змінити деякі методи життєвого циклу класового
                компонента.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                У компоненті визначено такі стани:
                <br />
                1. type: зберігає тип ресурсу, який вимагатиметься з за
                допомогою API (users, todos, posts).
                <br />
                2. data: зберігає отримані дані із сервера у форматі JSON.
                <br />
                Функція useEffect використовується для виконання запиту до API
                при зміни значення type. При кожній зміні типу useEffect буде
                запускатися знову та виконувати запит до відповідного ресурс за
                допомогою функції fetch. Отримані дані перетворюються на формат
                JSON і зберігаються у стан data з за допомогою функції setData.
                <br />
                Значення компонента, що повертається, містить елементи JSX, які
                відображають поточний вибраний ресурс ( type ) і кнопки, при
                натискання на які змінюватиметься type. Кнопка "Reset" скидає
                значення type на порожній рядок, що призводить до скидання даних
                у data та відображення порожнього масиву.
                <br />
                Після кнопок виводиться вміст стану data у форматі JSON за
                допомогою елемента &lt;pre&gt;.
                <br />
                <Effect />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
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
                Context - Призначений для передачі даних на різних рівнях
                вкладеності. Це дозволить уникнути передачі <b>props</b> у
                проміжні компоненти.
                <img className="react_images" src={context} alt="context" />
                <br />
                <table style={{ border: "1px solid white" }}>
                  <tbody>
                    <tr>
                      <td style={{ padding: "5px 5px" }}>Context.Provider</td>
                      <td style={{ padding: "5px 5px" }}>
                        Кожен об'єкт Context використовується разом із Provider
                        компонентом. Він приймає props value, який передається у
                        всі необхідні компоненти.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "5px 5px" }}>Context.Consumer</td>
                      <td style={{ padding: "5px 5px" }}>
                        Приймає функцію, що містить значення контексту, і
                        повертає компонент. Значення бере з найближчого props
                        value компонента Provider. Якщо немає Provider, тоді
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
            titleButtonExample={"Переглянути код"}
            title={
              <>
                <pre>
                  <code>{useContext}</code>
                </pre>
              </>
            }
          />
          <TableOneCol text={<h3>Порівняння Context и Props.</h3>} />
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
                Хук useReducer дозволяє нам керувати складними станами та діями
                в нашому компоненті, надаючи більш структурований спосіб зміни
                стану.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                У цьому прикладі ми використовуємо хук useReducer, щоб керувати
                станом лічильника.
                <br />
                Ми починаємо з ініціалізації початкового стану
                початковогодержави, яке містить властивість count із значенням
                0.
                <br />
                Потім ми визначаємо редьюсер reducer, який приймає поточне стан
                та дія, і повертає новий стан залежно від дії. У нашому прикладі
                ми обробляємо дії "increment", "decrement" та "reset", змінюючи
                значення count в відповідно до кожної дії.
                <br />
                У компоненті ExampleComponent ми використовуємо хук useReducer
                для створення стану state та функції dispatch, яка дозволяє
                викликати дії та передавати їх редьюсеру.
                <br />
                Потім ми визначаємо обробники подій handleIncrement,
                handleDecrement та handleReset, які викликають відповідні дії,
                передаючи їх у dispatch.
                <Reducer />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
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
                Хук useCallback поверне мемоізовану версію колбека, який
                змінюється лише, якщо змінюються значення однієї із залежностей.
                Це корисно при передачі колбеків оптимізованим дочірнім
                компонентам, які покладаються на рівність посилань для
                запобігання непотрібним рендерів. useCallback використовується
                для мемоізації коллбеків в компонентів.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Цей код є компонентом React з використанням хука useState і
                useCallback. У компоненті визначено такі стану:
                <br />
                1. colored: зберігає логічне значення визначення кольору тексту.
                <br />
                2. count: зберігає числове значення для відображення кількості
                елементів.
                <br />
                3. style: об'єкт стилів для тексту в залежності від значення
                colored.
                <br />
                Функція generateItems створює масив елементів на основі
                поточного значення count. Ця функція використовує хук
                useCallback, щоб мемоізувати результат та уникнути зайвих
                перемальовок компонента за зміни інших станів.
                <br />
                Значення компонента, що повертається, містить елементи JSX, які
                відображають поточне значення count, кнопки для збільшення та
                зменшення значення count, кнопку зміни кольору тексту, а також
                компонент ItemList, якому передається функція Створювалисяв
                якості пропсу.
                <br />
                Компонент ItemList використовується для відображення списку
                елементів, що генеруються функцією generateItems.
                <br />
                Цей компонент демонструє використання хука useCallback для
                оптимізації продуктивності компонента, щоб уникнути зайвих
                обчислень за зміни залежностей.
                <br />
                <Callback />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
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
                useMemo проводить обчислення лише тоді, коли залежності
                змінилися. Це дозволяє оптимізувати обчислювальну потужність при
                кожному рендер. useMemo використовується для мемоізації значень.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Цей код є компонентом React, який використовує хуки useState і
                useMemo. У компоненті визначено такі стани:
                <br />
                1. number: зберігає числове значення, ініціалізоване значенням
                33.
                <br />
                2. colored: зберігає логічне значення визначення кольору тексту.
                <br />
                3. style: використовується useMemo для мемоізації об'єкта стилів
                тексту залежно від значення colored.
                <br />
                4. computed: використовується useMemo для мемоізації результату
                складної обчислювальної функції комплексногокомп'ютера в
                залежності від значення number.
                <br />
                Функція complexCompute є обчислювально інтенсивну функцію, яка
                виконує безліч ітерацій для симуляції обчислювального
                навантаження.
                <br />
                Значення компонента, що повертається, містить елементи JSX, які
                відображають результат обчислень computed, кнопки для збільшення
                та зменшення значення number, а також кнопку для зміни кольори
                тексту.
                <br />
                Хук useMemo використовується для оптимізації продуктивності
                компонента, щоб уникнути зайвих обчислень та повторних рендерів
                за зміни залежностей. В даному випадку, результат складних
                обчислень та стиль тексту мемоізуються за допомогою useMemo.
                <br />
                <Memo />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
            title={
              <>
                <pre>
                  <code>{useMemo}</code>
                </pre>
              </>
            }
          />
          <TableOneCol text={<h3>useRef</h3>} />
          <TableOneCol
            text={
              <p>
                Повертає змінений об'єкт, у якого є властивість .current
                <br />
                const refContainer = useRef(initialValue);
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <UseRef />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
            title={
              <>
                <pre>
                  <code>{useRef}</code>
                </pre>
              </>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
