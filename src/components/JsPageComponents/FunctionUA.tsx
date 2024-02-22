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

export default function FunctionUA() {
  return (
    <Table id="js_function">
      <TableBody>
        <TableOneCol text={<h2>Функції.</h2>} />
        <TableOneCol
          text={
            <p>
              Функції є набір інструкцій, які виконують певну дію або обчислюють
              певне значення. Код який визначається один раз і може бути
              викликаний скільки завгодно разів. Якщо якісь рядки коду
              повторюються кілька разів їх бажано винести в функцію.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>function</h3>}
          text={
            <p>
              Визначення функції починається з ключового слова function, після
              якого слідує ім'я функції. Після імені функції у дужках йде
              Перелік параметрів. Навіть якщо параметрів функції немає, то
              просто йдуть порожні дужки. Потім у фігурних дужках йде тіло
              функції, що містить набір інструкцій.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Function Declaration</h3>}
          text={
            <p>
              Функція, оголошена в основному потоці коду.
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
              Оголошення функції в контексті будь-якого виразу, наприклад
              присвоєння. <br />
              <pre>
                <code>{funcExpressionConst}</code>
              </pre>
            </p>
          }
        />
        <TableOneCol text={<p>Також можна повертати функції з функцій.</p>} />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад повернення функції"}
          title={
            <p id="formated-text">
              <span>Повернення функції</span>
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
          title={<h3>Замикання функції</h3>}
          text={
            <p>
              Замикання дає вам доступ до області дії зовнішньої функції з
              внутрішньої функції. У JavaScript замикання створюються щоразу,
              коли створюється функція, під час створення функції.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад замикання функції"}
          title={
            <p id="formated-text">
              <span>Замикання функції</span>
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
          title={<h3>Колбек функції</h3>}
          text={
            <p>
              Це звичайна функція, яка просто викликається всередині іншої
              функції. Такі функції ще називаються функціями зворотного дзвінка.
              Вони дуже часто застосовуються в асинхронному коді.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад колбек функції"}
          title={
            <p id="formated-text">
              <span>Колбек функції</span>
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
          title={<h3>Рекурсія</h3>}
          text={
            <p>
              Функцію можна також викликати всередині самої себе. Це дія в
              програмування називається рекурсією. Крім цього необхідно
              передбачити умови для виходу із рекурсії. Якщо це не зробити
              функція буде викликати сама себе доти, доки не буде кинута
              помилка, пов'язана з переповненням стека.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад рекурсія"}
          title={
            <p id="formated-text">
              <span>
                Розглянемо функцію, що визначає факторіал числа. <br />
                Нам треба отримати факторіал 5, тобто. 5*4*3*2*1
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
          titleButtonExample={"Приклад рекурсія №2"}
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
          title={<h3>Чиста функція</h3>}
          text={
            <p>
              Це функція, яка виводить свої дані виходячи з виключно на свої
              вхідні дані і не викликає побічних ефектів у додатку.
            </p>
          }
        />
        <ButtonExample
          titleButtonExample={"Приклад"}
          title={
            <p id="formated-text">
              <span>Чиста функція</span>
              <pre>
                <code>{recClearConst}</code>
              </pre>
            </p>
          }
          text={
            <p id="formated-text">
              <span>Нечиста функція</span>
              <pre>
                <code>{recNotClearConst}</code>
              </pre>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Стрілкові функції</h3>}
          text={
            <p>
              Позоляють скоротити визначення звичайних функцій. Стрілочні
              функції утворюються за допомогою знака стрілки (=&gt;), перед яким
              у дужках йдуть параметри функції, а потім - власне тіло функції.
            </p>
          }
        />
        <ButtonExample
          titleButtonExample={"Приклад стрілочної функції"}
          title={
            <pre>
              <code>{peopleCode}</code>
            </pre>
          }
          text={
            <p id="formated-text">
              <span>Звичайна функція.</span>
              <pre>
                <code>{functionRegular}</code>
              </pre>
              <br />
              <span>Стрілкова функція.</span>
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
              Значення this визначається тим, яким чином викликана функція. У
              JavaScript ключове слово this відноситься до об'єкта, до якого
              воно належить. <br />
              Воно має різні значення в залежності від того, де
              використовується:
              <br />
              - у методі, що відноситься до об'єкта, по відношенню до якого
              викликаний метод; <br />
              - у глобальному контексті виконання цього посилається до
              глобального об'єкту; <br />
              - у функції, значення this залежить від того, яким чином викликана
              функція; <br />
              - у звичайній функції цього відноситься до глобального об'єкта;
              <br />
              - у стрілочних функціях, це прив'язано до оточення, в якому була
              створено функцію; <br />
              - у строгому режимі функції, це не визначено, якщо попередньо він
              не був встановлений у контексті виконання; <br />
              - у події this відноситься до елемента, який отримав подію;
              <br />- такі методи, як call() і apply() можуть посилати це на
              будь-який об'єкт.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>bind()</h3>}
          text={
            <p>
              Створює нову функцію, яка при викликі встановлює як Контекст
              виконання цьогонаданого значення. У метод також передається набір
              аргументів один за одним, які будуть встановлені перед переданими
              у прив'язану функцію аргументами при її виклик.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад bind"}
          title={
            <p id="formated-text">
              <span>
                Створює нову "прив'язану функцію", дозволяє взяти дані з іншої
                функції та застосувати їх до нової. Використовуючи функцію
                person.logInfo ми передаємо нові значення об'єкта masha.
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
              Викликають функцію із зазначеним контекстом this та
              необов'язковими аргументами.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад call"}
          title={
            <p id="formated-text">
              <span>Цей метод автоматично фізує функцію. Тому без "()"</span>
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
              Викликають функцію із зазначеним контекстом this та
              необов'язковими аргументами.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад apply"}
          title={
            <p id="formated-text">
              <span>
                Цей метод автоматично фізує функцію, але аргументи мають
                передаватися як масив. Тому без "()" але додаємо "[]"
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
          titleButtonExample={"Приклад додавання інформації"}
          title={
            <>
              <p id="formated-text">
                <span>
                  Приклад № 1. Інформація про (job, phone) відсутня в обох
                  об'єктів.
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
                  Приклад № 2. Інформація про (job, phone) відсутня в обох
                  об'єктів.
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
