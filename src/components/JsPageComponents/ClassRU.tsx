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

export default function ClassRU() {
  return (
    <Table id="js_class">
      <TableBody>
        <TableOneCol text={<h2>Классы.</h2>} />
        <TableOneCol
          text={
            <p>
              Классы — это шаблон для создания объектов. Они инкапсулируют
              данные с кодом для работы с этими данными. Классы в JS построены
              на прототипах, но также имеют некоторый синтаксис и семантику,
              которые не используются в семантике классов ES5. Синтаксис классов
              выглядит так:
              <br />
              <pre>
                <code>{classConst}</code>
              </pre>
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Class"}
          title={
            <p id="formated-text">
              <span>
                Создаём объект.
                <br />
                Создаём конструктор с именем.
                <br />
                Присваиваем имя. <br />
                Запускаем
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
          titleButtonExample={"Пример Get & Set"}
          title={
            <p id="formated-text">
              <span>
                Создаём объект.
                <br />
                Создаём конструктор с именем.
                <br />
                Присваиваем имя. <br />
                Запускаем
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
        <TableOneCol text={<h3>Наследование классов.</h3>} />
        <TableOneCol
          text={
            <p>
              Наследование – это создание новых «классов» на основе
              существующих. Механизм наследования позволяет определить базовый
              класс например Animal, в нём описать то, что свойственно всем
              животным, а затем на его основе построить другие, более
              конкретные: хищник, травоядный и т.п.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>extends</h3>}
          text={<p>Позволяет наследовать класс от другого класса.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример extends"}
          title={
            <p id="formated-text">
              <span>
                Создадим два класса Animal и Lion. <br />
                Класс Animal содержит функции run(скорость) и type(тип
                животного). <br />
                Класс Lion наследующий Animal содержит функцию family(семойство
                животного).
              </span>
              <br />
              <span>
                Мы вызываем функции и передаем значения, присущие львам, в
                функции run и type.
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
              Способен вызвать родительский конструктор и применяется внутри
              текущего конструктора.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример super"}
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
        <TableOneCol text={<h3>Статические свойства.</h3>} />
        <TableOneCol
          text={
            <p>
              По определению статические методы привязаны к классу , а не к
              экземплярам этого класса. Поэтому статические методы полезны для
              определения вспомогательных или служебных методов.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример static"}
          title={
            <p id="formated-text">
              <span>
                Вызывать статические классы надо напрямую через имя класса.
                <br />
                className.staticName() или this.constructor.staticName().
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
          titleButtonExample={"Пример static 2"}
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
