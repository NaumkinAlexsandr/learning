import React, { useRef, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import { bomAlert, bomPrompt, bomConfirm, handlePrint } from "./BomFunc.js";

export default function MethodsRU() {
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
        <TableOneCol text={<h2>Методы.</h2>} />
        <TableTwoEqualCol
          title={<h3>.alert()</h3>}
          text={
            <p>
              Отображает предупреждающее диалоговое окно. <br />
              <button className="bom-btn" onClick={bomAlert}>
                Нажми
              </button>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.prompt()</h3>}
          text={
            <p>
              Возвращает текст, введённый пользователем в диалоге подсказки.
              <br />
              <button className="bom-btn" onClick={bomPrompt}>
                Нажми
              </button>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.confirm()</h3>}
          text={
            <p>
              Отображает диалог с сообщением, на которое пользователь должен
              ответить. <br />
              <button className="bom-btn" onClick={bomConfirm}>
                Нажми
              </button>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>blur()</h3>}
          text={
            <p>
              Убирает фокус с окна. <br />
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
              Устанавливает фокус на текущем окне.
              <br />
              <input className="bom-input" type="text" ref={inputRef} />
              <button className="bom-btn" onClick={handleFocus}>
                Нажми
              </button>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.close()</h3>}
          text={<p>Закрывает текущее окно.</p>}
        />
        <TableTwoEqualCol
          title={<h3>.clearImmediate()</h3>}
          text={
            <p>
              Отменяет повторяющееся исполнение, установленное с помощью
              setImmediate.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>setImmediate()</h3>}
          text={
            <p>
              Исполняет функцию после того, как браузер некую тяжёлую задачу.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.clearInterval()</h3>}
          text={
            <p>
              Отменяет повторяющееся исполнение, установленное с помощью
              .setInterval()
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>setInterval()</h3>}
          text={<p>Назначает выполнение функции каждые X миллисекунд.</p>}
        />
        <TableTwoEqualCol
          title={<h3>.clearTimeout()</h3>}
          text={
            <p>
              Отменяет повторяющееся исполнение, установленное с помощью
              .setTimeout().
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>setTimeout()</h3>}
          text={
            <p>
              Устанавливает отложенное выполнение функции. <br />
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
              Возвращает объект, содержащий значения всех CSS-свойств элемента.
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
              Получает подсчитанные стили по умолчанию для определённого
              элемента, игнорируя авторские стили.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>getSelection()</h3>}
          text={
            <p>
              Возвращает выбранный объект, представляющий выбранный элемент(ы).
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>matchMedia()</h3>}
          text={
            <p>
              Возвращает объект MediaQueryList, представляющий указанную строку
              медиавыражения.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>moveBy()</h3>}
          text={<p>Сдвигает текущее окно на определённое значение.</p>}
        />
        <TableTwoEqualCol
          title={<h3>moveTo()</h3>}
          text={<p>Сдвигает окно до определённых координат.</p>}
        />
        <TableTwoEqualCol
          title={<h3>open()</h3>}
          text={<p>Открывает новое окно.</p>}
        />
        <TableTwoEqualCol
          title={<h3>openDialog()</h3>}
          text={<p>Открывает новое диалоговое окно.</p>}
        />
        <TableTwoEqualCol
          title={<h3>postMessage()</h3>}
          text={
            <p>
              Предоставляет безопасный способ для одного окна передать строку с
              данными в другое окно, которое должно находиться в пределах того
              же домена, что и первое.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>print()</h3>}
          text={
            <p>
              Открывает Print Dialog для распечатки текущего документа.
              <button className="bom-btn" onClick={handlePrint}>
                Print
              </button>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>resizeBy()</h3>}
          text={<p>Меняет размер текущего окна на определённое число.</p>}
        />
        <TableTwoEqualCol
          title={<h3>resizeTo()</h3>}
          text={<p>Динамически меняет размер окна.</p>}
        />
        <TableTwoEqualCol
          title={<h3>scroll()</h3>}
          text={<p>Прокручивает окно до определенного места в документе.</p>}
        />
        <TableTwoEqualCol
          title={<h3>scrollBy()</h3>}
          text={<p>Прокручивает документ в окна на данное число.</p>}
        />
        <TableTwoEqualCol
          title={<h3>scrollTo()</h3>}
          text={<p>Прокручивает до заданных координат в документе.</p>}
        />
        <TableTwoEqualCol
          title={<h3>scrollByLines()</h3>}
          text={<p>Прокручивает документ на данное число строк.</p>}
        />
        <TableTwoEqualCol
          title={<h3>scrollByPages()</h3>}
          text={<p>Прокручивает документ на данное число страниц.</p>}
        />
        <TableTwoEqualCol
          title={<h3>showModalDialog()</h3>}
          text={<p>Отображает модальный диалог.</p>}
        />
        <TableTwoEqualCol
          title={<h3>sizeToContent()</h3>}
          text={<p>Подгоняет размер окна под его содержимое.</p>}
        />
        <TableTwoEqualCol
          title={<h3>stop()</h3>}
          text={<p>Останавливает загрузку страницы.</p>}
        />
      </TableBody>
    </Table>
  );
}
