import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  classConst,
  classOneConst,
  classGetSetConst,
  classExtendsConst,
  classSuperConst,
  classStaticConst,
  classStatic2Const,
} from "./ClassConstPre.ts";
import {
  classOne,
  classGetSet,
  classExtends,
  classSuper,
  classStatic,
  classStatic2,
} from "./class.js";

export default function ClassUA() {
  return (
    <Table id="js_class">
      <TableBody>
        <TableOneCol text={<h2>Класи.</h2>} />
        <TableOneCol
          text={
            <p>
              Класи — це шаблон для створення об'єктів. Вони інкапсулюють дані з
              кодом для роботи з цими даними. Класи у JS побудовані на
              прототипах, але також мають деякий синтаксис та семантику, яка не
              використовується в семантиці класів ES5. Синтаксис класів виглядає
              так:
              <br />
              <pre>
                <code>{classConst}</code>
              </pre>
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Class"}
          title={
            <p id="formated-text">
              <span>
                Створюємо об'єкт.
                <br />
                Створюємо конструктор з ім'ям.
                <br />
                Привласнюємо ім'я. <br />
                Запускаємо
                <br />
                <br />
              </span>
              <span id="jsClassOne"></span>
            </p>
          }
          text={
            <pre>
              <code>{classOneConst}</code>
            </pre>
          }
          onClick={classOne}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Get & Set"}
          title={
            <p id="formated-text">
              <span>
                Створюємо об'єкт.
                <br />
                Створюємо конструктор з ім'ям.
                <br />
                Привласнюємо ім'я. <br />
                Запускаємо
                <br />
                <br />
              </span>
              <span id="jsClassGetSet"></span>
            </p>
          }
          text={
            <pre>
              <code>{classGetSetConst}</code>
            </pre>
          }
          onClick={classGetSet}
        />
        <TableOneCol text={<h3>Спадкування класів.</h3>} />
        <TableOneCol
          text={
            <p>
              Спадкування – це створення нових "класів" на основі існуючих.
              Механізм успадкування дозволяє визначити базовий клас наприклад
              Animal, в ньому описати те, що властиво всім тваринам, а потім на
              його основі побудувати інші, конкретніші: хижак, травоїдний тощо.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>extends</h3>}
          text={<p>Дозволяє успадковувати клас від іншого класу.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад extends"}
          title={
            <p id="formated-text">
              <span>
                Створимо два класи Animal та Lion. <br />
                Клас Animal містить функції run (швидкість) та type (тип
                тварини). <br />
                Клас Lion наслідуючий Animal містить функцію family тварини).
              </span>
              <br />
              <span>
                Ми викликаємо функції і передаємо значення, властиві левам,
                функції run та type.
              </span>
              <br />
              <br />
              <span id="jsClassExtends"></span>
            </p>
          }
          text={
            <pre>
              <code>{classExtendsConst}</code>
            </pre>
          }
          onClick={classExtends}
        />
        <TableTwoEqualCol
          title={<h3>super</h3>}
          text={
            <p>
              Здатний викликати батьківський конструктор і застосовується
              всередині поточного конструктора.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад super"}
          title={
            <p id="formated-text">
              <span id="jsClassSuper"></span>
            </p>
          }
          text={
            <pre>
              <code>{classSuperConst}</code>
            </pre>
          }
          onClick={classSuper}
        />
        <TableOneCol text={<h3>Статичні властивості.</h3>} />
        <TableOneCol
          text={
            <p>
              За визначенням статичні методи прив'язані до класу, а не до
              екземплярів цього класу. Тому статичні методи корисні для
              визначення допоміжних або службових методів.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад static"}
          title={
            <p id="formated-text">
              <span>
                Викликати статичні класи слід безпосередньо через ім'я класу.
                <br />
                className.staticName() або this.constructor.staticName().
              </span>
              <br />
              <br />
              <span id="jsclassStatic"></span>
            </p>
          }
          text={
            <pre>
              <code>{classStaticConst}</code>
            </pre>
          }
          onClick={classStatic}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад static 2"}
          title={
            <p id="formated-text">
              <span id="jsclassStatic2"></span>
            </p>
          }
          text={
            <pre>
              <code>{classStatic2Const}</code>
            </pre>
          }
          onClick={classStatic2}
        />
      </TableBody>
    </Table>
  );
}
