import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import {
  decoratorTsOne,
  decoratorTsTwo,
  decoratorPropertyOne,
  decoratorMethodOne,
  decoratorSetMethodOne,
} from "./TsConstPre.tsx";

export default function DecoratorRU() {
  return (
    <>
      <Table id="ts_decorator">
        <TableBody>
          <TableOneCol text={<h2>Decorator - Декораторы.</h2>} />
          <TableOneCol
            text={
              <p>
                Декоратор - это специальная функция, которая применима к класса,
                метода, свойства или параметра, чтобы расширить или изменить его
                функциональность.
              </p>
            }
          />
          <TableOneCol text={<h3>Class Decorator.</h3>} />
          <TableOneCol
            text={
              <p>
                Class Decorator применяется перед объявлением класса и принимает
                в качестве аргумента конструктор класса. Декоратор может
                модифицировать или расширить класс, изменить его свойства или
                методы, добавить новые методы или свойства, а также выполнять
                прочие операции.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример TypeScript v4.0"}
            title={
              <>
                <pre>
                  <code>{decoratorTsOne}</code>
                </pre>
                <p id="formated-text">
                  <br />
                  Этот код определяет функцию debounce, которая принимает время
                  задержки в миллисекундах и возвращает функцию обертки, которая
                  будет вызывать оригинальный метод с задержкой. <br /> Затем
                  класс MyClass содержит метод myMethod, который должен быть
                  вызван с задержкой в 1.5 секунды. Для этого метод myMethod
                  обратит в функцию debounce которая вызывает оригинальный метод
                  из-за задержки.
                  <br /> В конце кода создается экземпляр класса MyClass и
                  вызывается метод myMethod. Результат выводится в консоль.
                  <br /> Обратите внимание, что в этом коде используется
                  декоратор @debounce, применяемый к методу myMethod класса
                  MyClass. Это позволяет применить функцию debounce к метода без
                  явного вызова функции debounce в коде.
                </p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример TypeScript v5.0"}
            title={
              <>
                <pre>
                  <code>{decoratorTsTwo}</code>
                </pre>
                <p id="formated-text">
                  <br /> Этот код определяет функцию Debounce, принимающую число
                  delay как аргумент и возвращает функцию-заменителя.
                  Функция-заменителя принимает два аргумента: originalMethod -
                  оригинальный метод, который нужно заменить, и context -
                  Контекст вызова. <br /> Внутри функции-заменителя создается
                  переменная timer, которая будет сохранять идентификатор
                  таймеры. Затем создается функция replacementFunc вызывающая
                  оригинальный метод с задержкой, если таймер еще не истек. Если
                  таймер уже закончился, он будет очищен и новый таймер будет
                  создан. <br />В функции Debounce также проверяется, что вызов
                  метода происходит только методу класса. Если вызов происходит
                  для другого типа, выбрасывается ошибка. <br />
                  Затем создается класс MyClass, содержащий метод delayMethod,
                  который должен быть заменен на задержанную версию по с помощью
                  функции Debounce.
                </p>
              </>
            }
          />
          <TableOneCol text={<h3>Property Decorator.</h3>} />
          <TableOneCol
            text={
              <p>
                Property decorator – это специальный декоратор, который
                применяется к свойству класса. Он предоставляет возможность
                изменять поведение или метаданные свойства во время его
                объявления.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример TypeScript v4.0"}
            title={
              <>
                <pre>
                  <code>{decoratorPropertyOne}</code>
                </pre>
                <p id="formated-text">
                  <br />
                  В этом примере мы определяем декоратор uppercase, который
                  принимает два аргумента: target (класс, к которому применяется
                  декоратор) и propertyName (имя свойства).
                  <br /> Внутри декоратора мы изменяем поведение геттера и
                  сеттера свойства так, чтобы значение всегда было преобразовано
                  в верхний регистр.
                  <br /> Затем мы применяем этот декоратор к свойству name в
                  классе Person. При создании объекта person с именем "John" и
                  выводе значения свойства name мы получаем значение "JOHN", так
                  как оно было превращено декоратором.
                  <br /> Property decorator в TypeScript полезен для смены или
                  расширение поведения свойства класса, например, для валидации
                  значений или автоматической конвертации типов данных.
                </p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример TypeScript 5.0"}
            title={
              <>
                <pre>
                  <code>{}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol text={<h3>Method Decorator.</h3>} />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад TypeScript v4.0"}
            title={
              <>
                <pre>
                  <code>{decoratorMethodOne}</code>
                </pre>
                <p id="formated-text">
                  Этот код определяет функцию logMethod, которая принимает три
                  аргумента: target, propertyKey и descriptor. Эта функция будет
                  вызываться каждый раз, когда свойство класса будет добавлено
                  или изменено.
                  <br /> Внутри функции logMethod мы просто выводим propertyKey
                  в консоль. <br /> Затем код определяет класс User. В
                  Конструкторы класса определены свойства name и age. Класс
                  также содержит метод getPass, который возвращает строку
                  состоит из имени пользователя и возраста.
                  <br /> Для добавления метода logMethod к методу getPass мы
                  используем декоратор @logMethod. Это означает, что когда метод
                  getPass будет вызван, функция logMethod будет вызвана
                  автоматически.
                  <br /> Наконец, мы создаем экземпляр класса User и вызываем
                  метод getPass Когда метод getPass вызывается, функция
                  logMethod выводит в консоль имя свойства propertyKey, которое
                  в данном случае является строчкой "getPass".
                </p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример TypeScript v5.0"}
            title={
              <>
                <pre>
                  <code>{}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol text={<h3>get/set Decorator.</h3>} />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример TypeScript v4.0"}
            title={
              <>
                <pre>
                  <code>{decoratorSetMethodOne}</code>
                </pre>
                <p id="formated-text">
                  <br /> Этот код определяет функцию logSet, которая является
                  декоратором (decorator) для метода set класса User. Когда
                  метод myAge устанавливает значение качества age, декоратор
                  logSet выводит имя свойства консоль. <br /> Затем код
                  определяет класс User , имеющий свойства name и age, а также
                  метод myAge, который устанавливает значение свойства age.
                  Метод myAge декорирован методом с помощью декоратора logSet.
                  <br />
                  Затем код создает экземпляр класса User с именем user и
                  устанавливает значение свойства myAge равным 35. После этого
                  код выводит значение свойства age экземпляра user, которое
                  равна 35. <br /> В результате выполнения этого кода в консоль
                  будет выведено имя свойства myAge, а затем значение свойства
                  age, которое также будет равным 35.
                </p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример TypeScript v5.0"}
            title={
              <>
                <pre>
                  <code>{}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
