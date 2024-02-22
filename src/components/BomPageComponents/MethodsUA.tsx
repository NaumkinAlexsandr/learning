import React, { useRef, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import { bomAlert, bomPrompt, bomConfirm, handlePrint } from "./BomFunc.js";

export default function MethodsUA() {
  //---------- Blur ----------
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  //---------- Focus ----------
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus2 = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  //---------- setTimeout ----------
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (isRunning) {
      timerId = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [count, isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <Table id="bom_method">
      <TableBody>
        <TableOneCol text={<h2>Методи.</h2>} />
        <TableTwoEqualCol
          title={<h3>.alert()</h3>}
          text={
            <p>
              Відображає попереджувальне діалогове вікно. <br />
              <button className="bom-btn" onClick={bomAlert}>
                Натисни
              </button>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.prompt()</h3>}
          text={
            <p>
              Повертає текст, введений користувачем у діалозі підказки.
              <br />
              <button className="bom-btn" onClick={bomPrompt}>
                Натисни
              </button>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.confirm()</h3>}
          text={
            <p>
              Відображає діалог із повідомленням, на яке користувач повинен
              відповісти. <br />
              <button className="bom-btn" onClick={bomConfirm}>
                Натисни
              </button>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>blur()</h3>}
          text={
            <p>
              Забирає фокус з вікна. <br />
              <input
                type="text"
                className="bom-input"
                onFocus={handleFocus2}
                onBlur={handleBlur}
                style={{
                  border: isFocused ? "4px solid red" : "2px solid #2196f3",
                }}
              />
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.focus()</h3>}
          text={
            <p>
              Встановлює фокус на поточному вікні. <br />
              <input className="bom-input" type="text" ref={inputRef} />
              <button className="bom-btn" onClick={handleFocus}>
                Натисни
              </button>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.close()</h3>}
          text={<p>Закриває поточне вікно.</p>}
        />
        <TableTwoEqualCol
          title={<h3>.clearImmediate()</h3>}
          text={
            <p>
              Скасує повторюване виконання, встановлене за допомогою
              setImmediate.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>setImmediate()</h3>}
          text={
            <p>Виконує функцію після того, як браузер якесь важке завдання.</p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.clearInterval()</h3>}
          text={
            <p>
              Скасує повторюване виконання, встановлене за допомогою
              .setInterval()
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>setInterval()</h3>}
          text={<p>Призначає виконання функції кожні X мілісекунд.</p>}
        />
        <TableTwoEqualCol
          title={<h3>.clearTimeout()</h3>}
          text={
            <p>
              Скасує повторюване виконання, встановлене за допомогою
              .setTimeout().
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>setTimeout()</h3>}
          text={
            <p>
              Встановлює відкладене виконання функції. <br />
              Count: {count}
              <button
                className="bom-btnTwo"
                onClick={handleStart}
                disabled={isRunning}
              >
                Start
              </button>
              <button
                className="bom-btnTwo"
                onClick={handleStop}
                disabled={!isRunning}
              >
                Stop
              </button>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>getComputedStyle()</h3>}
          text={
            <p>
              Повертає об'єкт, що містить значення всіх CSS-властивостей
              елемента.
              <br />
              const element = document.getElementById("ID element");
              <br />
              const style = window.getComputedStyle(element, null);
              <br />
              console.log(style)
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>getDefaulComputedStyle()</h3>}
          text={
            <p>
              Отримує підраховані стандартні стилі для певного елемента,
              ігноруючи авторські стилі.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>getSelection()</h3>}
          text={
            <p>
              Повертає вибраний об'єкт, який представляє вибраний елемент(и).
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>matchMedia()</h3>}
          text={
            <p>
              Повертає об'єкт MediaQueryList, який представляє вказаний рядок
              медіавираження.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>moveBy()</h3>}
          text={<p>Зсув поточного вікна на певне значення.</p>}
        />
        <TableTwoEqualCol
          title={<h3>moveTo()</h3>}
          text={<p>Зсуває вікно до певних координат.</p>}
        />
        <TableTwoEqualCol
          title={<h3>open()</h3>}
          text={<p>Відкриває нове вікно.</p>}
        />
        <TableTwoEqualCol
          title={<h3>openDialog()</h3>}
          text={<p>Відкриває нове діалогове вікно.</p>}
        />
        <TableTwoEqualCol
          title={<h3>postMessage()</h3>}
          text={
            <p>
              Надає безпечний спосіб для одного вікна передати рядок з даними в
              інше вікно, яке має знаходитися в межах того ж домену, що й перше.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>print()</h3>}
          text={
            <p>
              Відкриває Print Dialog для друку поточного документа.{" "}
              <button className="bom-btn" onClick={handlePrint}>
                Print
              </button>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>resizeBy()</h3>}
          text={<p>Змінює розмір поточного вікна на певне число.</p>}
        />
        <TableTwoEqualCol
          title={<h3>resizeTo()</h3>}
          text={<p>Динамічно змінює розмір вікна.</p>}
        />
        <TableTwoEqualCol
          title={<h3>scroll()</h3>}
          text={<p>Прокручує вікно до певного місця в документі.</p>}
        />
        <TableTwoEqualCol
          title={<h3>scrollBy()</h3>}
          text={<p>Прокручує документ у вікна на дане число.</p>}
        />
        <TableTwoEqualCol
          title={<h3>scrollTo()</h3>}
          text={<p>Прокручує до заданих координат у документі.</p>}
        />
        <TableTwoEqualCol
          title={<h3>scrollByLines()</h3>}
          text={<p>Прокручує документ на цю кількість рядків.</p>}
        />
        <TableTwoEqualCol
          title={<h3>scrollByPages()</h3>}
          text={<p>Прокручує документ на цю кількість сторінок.</p>}
        />
        <TableTwoEqualCol
          title={<h3>showModalDialog()</h3>}
          text={<p>Відображає модальний діалог.</p>}
        />
        <TableTwoEqualCol
          title={<h3>sizeToContent()</h3>}
          text={<p>Підганяє розмір вікна під його вміст.</p>}
        />
        <TableTwoEqualCol
          title={<h3>stop()</h3>}
          text={<p>Зупиняє завантаження сторінки.</p>}
        />
      </TableBody>
    </Table>
  );
}
