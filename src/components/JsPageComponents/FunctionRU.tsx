import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import ButtonExample from "../../core/ButtonExample.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  funcDeclarationConst,
  funcExpressionConst,
  funcBackConst,
  funcClosureConst,
  funcCallbackConst,
  getFactorialConst,
  recNumberConst,
  recClearConst,
  recNotClearConst,
  functionBindConst,
  functionCallConst,
  functionApplyConst,
  peopleCode,
  functionRegular,
  functionArrow,
  functionAdd,
  functionAdd2,
} from "./FunctionConstPre.ts";
import {
  funcBack,
  funcClosure,
  funcCallback,
  getFactorial,
  recNumber,
  functionBind,
  functionCall,
  functionApply,
} from "./function.js";

export default function FunctionRU() {
  return (
    <Table id="js_function">
      <TableBody>
        <TableOneCol text={<h2>Функции.</h2>} />
        <TableOneCol
          text={
            <p>
              Функции представляют собой набор инструкций, которые выполняют
              определенное действие или вычисляют определенное значение. Код
              который определяестся один раз и может быть вызван сколько угодно
              раз. Если какието строчки кода повторяются несколько раз то их
              желательно вынести в функцию.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>function</h3>}
          text={
            <p>
              Определение функции начинается с ключевого слова function, после
              которого следует имя функции. После имени функции в скобках идет
              перечисление параметров. Даже если параметров у функции нет, то
              просто идут пустые скобки. Затем в фигурных скобках идет тело
              функции, содержащее набор инструкций.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Function Declaration</h3>}
          text={
            <p>
              Функция, объявленная в основном потоке кода.
              <br />
              <pre>
                <code>{funcDeclarationConst}</code>
              </pre>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Function Expression</h3>}
          text={
            <p>
              Объявление функции в контексте какого-либо выражения, например
              присваивания. <br />
              <pre>
                <code>{funcExpressionConst}</code>
              </pre>
            </p>
          }
        />
        <TableOneCol text={<p>Также можно возвращать функции из функций.</p>} />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример возвращение функции"}
          title={
            <p id="formated-text">
              <span>Возвращение функции</span>
              <br /> <br />
              <span id="jsFuncBack"></span>
            </p>
          }
          text={
            <pre>
              <code>{funcBackConst}</code>
            </pre>
          }
          onClick={funcBack}
        />
        <TableTwoEqualCol
          title={<h3>Замыкание функции</h3>}
          text={
            <p>
              Замыкание дает вам доступ к области действия внешней функции из
              внутренней функции. В JavaScript замыкания создаются каждый раз,
              когда создается функция, во время создания функции.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример замыкание функции"}
          title={
            <p id="formated-text">
              <span>Замыкание функции</span>
              <br /> <br />
              <span id="jsFuncClosure"></span>
            </p>
          }
          text={
            <pre>
              <code>{funcClosureConst}</code>
            </pre>
          }
          onClick={funcClosure}
        />
        <TableTwoEqualCol
          title={<h3>Колбэк функции</h3>}
          text={
            <p>
              Это обычная функция, которая просто вызывается внутри другой
              функции. Такие функции ещё называются функциями обратного вызова.
              Они очень часто применяются в асинхронном коде.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример колбэк функции"}
          title={
            <p id="formated-text">
              <span>Колбэк функции</span>
              <br /> <br />
              <span id="jsCallback"></span>
            </p>
          }
          text={
            <pre>
              <code>{funcCallbackConst}</code>
            </pre>
          }
          onClick={funcCallback}
        />
        <TableTwoEqualCol
          title={<h3>Рекурсия</h3>}
          text={
            <p>
              Функцию можно также вызвать внутри самой себя. Это действие в
              программировании называется рекурсией. Кроме этого необходимо
              предусмотреть условия для выхода из рекурсии. Если это не сделать
              функция будет вызывать сама себя до тех пор, пока не будет брошена
              ошибка, связанная с переполнением стека.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример рекурсия"}
          title={
            <p id="formated-text">
              <span>
                Рассмотрим функцию, определяющую факториал числа. <br />
                Нам надо получить факториал числа 5, т.е. 5*4*3*2*1
              </span>
              <br /> <br />
              <span id="jsFactorial"></span>
            </p>
          }
          text={
            <pre>
              <code>{getFactorialConst}</code>
            </pre>
          }
          onClick={getFactorial}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример рекурсия №2"}
          title={
            <p id="formated-text">
              <span id="jsRecNumber"></span>
            </p>
          }
          text={
            <pre>
              <code>{recNumberConst}</code>
            </pre>
          }
          onClick={recNumber}
        />
        <TableTwoEqualCol
          title={<h3>Чистая функция</h3>}
          text={
            <p>
              Это функция, которая выводит свои данные основываясь исключительно
              на свои входные данные и не вызывает побочных эффектов в
              приложении.
            </p>
          }
        />
        <ButtonExample
          titleButtonExample={"Пример"}
          title={
            <p id="formated-text">
              <span>Чистая функция</span>
              <pre>
                <code>{recClearConst}</code>
              </pre>
            </p>
          }
          text={
            <p id="formated-text">
              <span>Нечистая функция</span>
              <pre>
                <code>{recNotClearConst}</code>
              </pre>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Стрелочные функции</h3>}
          text={
            <p>
              Позоляют сократить определение обычных функций. Стрелочные функции
              образуются с помощью знака стрелки (=&gt;), перед которым в
              скобках идут параметры функции, а после - собственно тело функции.
            </p>
          }
        />
        <ButtonExample
          titleButtonExample={"Пример стрелочная функция"}
          title={
            <pre>
              <code>{peopleCode}</code>
            </pre>
          }
          text={
            <p id="formated-text">
              <span>Обычная функция.</span>
              <pre>
                <code>{functionRegular}</code>
              </pre>
              <br />
              <span>Стрелочная функция.</span>
              <pre>
                <code>{functionArrow}</code>
              </pre>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>this</h3>}
          text={
            <p>
              Значение this определяется тем, каким образом вызвана функция. В
              JavaScript ключевое слово this относится к объекту, к которому оно
              принадлежит. <br />
              Оно имеет разные значения в зависимости от того, где используется:
              <br />
              - в методе, this относится к объекту, по отношению к которому
              вызван метод; <br />
              - в глобальном контексте выполнения this ссылается к глобальному
              объекту; <br />
              - в функции, значение this зависит от того, каким образом вызвана
              функция; <br />
              - в обычной функции this относится к глобальному объекту; <br />
              - в стрелочных функциях, this привязан к окружению, в котором была
              создана функция; <br />
              - в строгом режиме функции, this не определен, если предварительно
              он не был установлен в контексте исполнения; <br />
              - в событии this относится к элементу, который получил событие;
              <br />- такие методы, как call() и apply() могут ссылать this на
              любой объект.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>bind()</h3>}
          text={
            <p>
              Создаёт новую функцию, которая при вызове устанавливает в качестве
              контекста выполнения this предоставленное значение. В метод также
              передаётся набор аргументов один за другим, которые будут
              установлены перед переданными в привязанную функцию аргументами
              при её вызове.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример bind"}
          title={
            <p id="formated-text">
              <span>
                Создаёт новую "привязанную функцию", позволяет взять данные из
                другой функции и применить их к новой. Используя функцию
                person.logInfo мы передаём новые значения из объекта masha.
              </span>
              <br />
              <br />
              <span id="jsFunctionBind"></span>
            </p>
          }
          text={
            <pre>
              <code>{functionBindConst}</code>
            </pre>
          }
          onClick={functionBind}
        />
        <TableTwoEqualCol
          title={<h3>call()</h3>}
          text={
            <p>
              Вызывают функцию с указанным контекстом this и необязательными
              аргументами.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример call"}
          title={
            <p id="formated-text">
              <span>
                Данный метод автоматически фызывает функцию. Поэтому без "()"
              </span>
              <br />
              <br />
              <span id="jsFunctionCall"></span>
            </p>
          }
          text={
            <pre>
              <code>{functionCallConst}</code>
            </pre>
          }
          onClick={functionCall}
        />
        <TableTwoEqualCol
          title={<h3>apply()</h3>}
          text={
            <p>
              Вызывают функцию с указанным контекстом this и необязательными
              аргументами.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример apply"}
          title={
            <p id="formated-text">
              <span>
                Данный метод автоматически фызывает функцию, но аргументы должны
                передаваться как массив. Поэтому без "()" но добавляем "[]"
              </span>
              <br />
              <br />
              <span id="jsFunctionApply"></span>
            </p>
          }
          text={
            <pre>
              <code>{functionApplyConst}</code>
            </pre>
          }
          onClick={functionApply}
        />
        <ButtonExampleTwoCol
          titleButtonExample={"Пример добавление информации"}
          title={
            <>
              <p id="formated-text">
                <span>
                  Пример № 1. Информация про (job, phone) отсутствует у обоих
                  обьектов.
                </span>
                <br />
                <br />
                <pre>
                  <code>{functionAdd}</code>
                </pre>
                <br />
                <hr />
                <br />
                <span>
                  Пример № 2. Информация про (job, phone) отсутствует у обоих
                  обьектов.
                </span>
                <br />
                <br />
                <pre>
                  <code>{functionAdd2}</code>
                </pre>
              </p>
            </>
          }
        />
      </TableBody>
    </Table>
  );
}
