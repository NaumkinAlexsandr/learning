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

export default function DecoratorUA() {
  return (
    <>
      <Table id="ts_decorator">
        <TableBody>
          <TableOneCol text={<h2>Decorator - Декоратори.</h2>} />
          <TableOneCol
            text={
              <p>
                Декоратор - це спеціальна функція, яка може бути застосована до
                класу, методу, властивості чи параметру, щоб розширити чи
                змінити його функціональність.
              </p>
            }
          />
          <TableOneCol text={<h3>Class Decorator</h3>} />
          <TableOneCol
            text={
              <p>
                Class Decorator застосовується перед оголошенням класу та
                приймає в як аргумент конструктор класу. Декоратор може
                модифікувати або розширити клас, змінити його властивості чи
                методи, додати нові методи чи властивості, а також виконувати
                інші операції.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад TypeScript v4.0"}
            title={
              <>
                <pre>
                  <code>{decoratorTsOne}</code>
                </pre>
                <p id="formated-text">
                  <br />
                  Цей код визначає функцію debounce, яка приймає час затримки в
                  мілісекундах і повертає функцію обгортку, яка викликатиме
                  оригінальний метод із затримкою. <br /> Потім клас MyClass
                  містить метод myMethod, який має бути викликаний із затримкою
                  у 1.5 секунди. Для цього метод myMethod обернуть на функцію
                  debounce яка викликає оригінальний метод через затримку.
                  <br /> Наприкінці коду створюється екземпляр класу MyClass і
                  викликається метод myMethod. Результат виводиться у консоль.
                  <br /> Зверніть увагу, що у цьому коді використовується
                  декоратор @debounce, який застосовується до методу myMethod
                  класу MyClass. Це дозволяє застосувати функцію debounce до
                  методу без явного виклику функції debounce у коді.
                </p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад TypeScript v5.0"}
            title={
              <>
                <pre>
                  <code>{decoratorTsTwo}</code>
                </pre>
                <p id="formated-text">
                  <br /> Цей код визначає функцію Debounce, яка приймає число
                  delay як аргумент і повертає функцію-замінника.
                  Функція-замінника приймає два аргументи: originalMethod -
                  оригінальний метод, який потрібно замінити, та context -
                  Контекст виклику методу. <br /> Усередині функції-замінника
                  створюється змінна timer, яка зберігатиме ідентифікатор
                  таймера. Потім створюється функція replacementFunc що викликає
                  оригінальний метод із затримкою, якщо таймер ще не закінчився.
                  Якщо таймер уже закінчився, він буде очищений і новий таймер
                  буде створено. <br />У функції Debounce також перевіряється,
                  що виклик методу відбувається лише методу класу. Якщо виклик
                  відбувається для іншого типу, викидається помилка. <br />{" "}
                  Потім створюється клас MyClass, який містить метод
                  delayMethod, який має бути замінений на затриману версію за
                  допомогою функції Debounce .
                </p>
              </>
            }
          />
          <TableOneCol text={<h3>Property Decorator</h3>} />
          <TableOneCol
            text={
              <p>
                Property decorator - це спеціальний декоратор, який
                застосовується до властивості класу. Він надає можливість
                змінювати поведінку або метадані властивості під час його
                оголошення.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад TypeScript v4.0"}
            title={
              <>
                <pre>
                  <code>{decoratorPropertyOne}</code>
                </pre>
                <p id="formated-text">
                  <br />
                  У цьому прикладі ми визначаємо декоратор uppercase, який
                  приймає два аргументу: target (клас, до якого застосовується
                  декоратор) та propertyName (ім'я властивості).
                  <br /> Усередині декоратора ми змінюємо поведінку геттера та
                  сеттера властивості так, щоб значення завжди було перетворено
                  у верхній регістр.
                  <br /> Потім ми застосовуємо цей декоратор до властивості name
                  в класі Person. При створенні об'єкта person з ім'ям "John" та
                  виведенні значення властивості name ми отримуємо значення
                  "JOHN", так як воно було перетворено декоратором.
                  <br /> Property decorator в TypeScript корисний для зміни або
                  розширення поведінки властивості класу, наприклад, для
                  валідації значень чи автоматичної конвертації типів даних.
                </p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад TypeScript 5.0"}
            title={
              <>
                <pre>
                  <code>{}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol text={<h3>Method Decorator</h3>} />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад TypeScript v4.0"}
            title={
              <>
                <pre>
                  <code>{decoratorMethodOne}</code>
                </pre>
                <p id="formated-text">
                  Цей код визначає функцію logMethod, яка приймає три аргументи:
                  target, propertyKey і descriptor. Ця функція буде викликатись
                  кожного разу, коли властивість класу буде додано або змінено.{" "}
                  <br /> Усередині функції logMethod ми просто виводимо
                  propertyKey у консоль. <br /> Потім код визначає клас User. У
                  конструкторі класу визначено властивості name і age. Клас
                  також містить метод getPass, який повертає рядок, що
                  складається з імені користувача та віку.
                  <br /> Для додавання методу logMethod до методу getPass ми
                  використовуємо декоратор @logMethod. Це означає, що коли метод
                  getPass буде викликано, функція logMethod буде викликано
                  автоматично.
                  <br /> Нарешті, ми створюємо екземпляр класу User і викликаємо
                  метод getPass. Коли метод getPass викликається, функція
                  logMethod виводить у консоль ім'я властивості propertyKey, яке
                  в даному випадку є рядком "getPass".
                </p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад TypeScript v5.0"}
            title={
              <>
                <pre>
                  <code>{}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol text={<h3>get/set Decorator</h3>} />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад TypeScript v4.0"}
            title={
              <>
                <pre>
                  <code>{decoratorSetMethodOne}</code>
                </pre>
                <p id="formated-text">
                  <br /> Цей код визначає функцію logSet яка є декоратором
                  (decorator) для методу set класу User. Коли метод myAge
                  встановлює значення якості age, декоратор logSet виводить ім'я
                  властивості консоль. <br /> Потім код визначає клас User ,
                  який має властивості name і age, а також метод myAge, який
                  встановлює значення властивості age. Метод myAge є декорованим
                  методом за допомогою декоратора logSet. <br />
                  Потім код створює екземпляр класу User з ім'ям user та
                  встановлює значення властивості myAge рівним 35. Після цього
                  код виводить значення властивості age екземпляра user, яке
                  дорівнює 35. <br /> Внаслідок виконання цього коду в консоль
                  буде виведено ім'я властивості myAge, а потім значення
                  властивості age, яке також буде рівним 35.
                </p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад TypeScript v5.0"}
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
