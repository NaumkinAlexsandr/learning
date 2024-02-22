import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import {
  typeGuards,
  typeGuardsTwo,
  typeGuardsThree,
  typeGuardsFour,
} from "./TsConstPre.tsx";

export default function TypeGuardsUA() {
  return (
    <>
      <Table id="ts_typeGuards">
        <TableBody>
          <TableOneCol text={<h2>Type Guards - Захисники типу</h2>} />
          <TableOneCol
            text={
              <p>
                <b>Type Guards</b> - це функції, які дозволяють визначити, чи
                певний тип даних є певним типом. Вони використовуються для
                перевірки типів даних під час виконання програми, а не лише під
                час компіляції.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Type Guards можуть бути використані для перевірки типів даних в
                умовних операторах, методах та функціях, а також для перевірки
                типів даних у функціях зворотного дзвінка. Вони можуть бути
                корисними для спрощення коду та забезпечення більш безпечної
                роботи з типами даних.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                1. typeof Type Guard - дозволяє перевірити тип значення змінної
                за допомогою оператора typeof. Він використовується для
                визначення конкретного типу значення та дозволяє використовувати
                відповідні операції, доступні тільки для цього типу.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад typeof"}
            title={
              <>
                <pre>
                  <code>{typeGuards}</code>
                </pre>
                <p id="formated-text">
                  Цей код визначає функцію isStringOrNumber, яка набуває
                  значення value типу string | number і повертає true, якщо тип
                  value є string або number, і false в іншому випадку. Функція
                  використовує оператор typeof для перевірки типу value. <br />
                  Потім код визначає функцію myFunction, яка набуває значення
                  value типу string | number. Функція викликає функцію
                  isStringOrNumber для перевірки типу value. Якщо функція
                  isStringOrNumber повертає true, то функція виводить
                  повідомлення "The value is a string or a number" консоль. Якщо
                  функція isStringOrNumber повертає false, то функція виводить
                  повідомлення "The value is not a string or a number" консоль.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                2. instanceof Type Guard - дозволяє перевірити, чи є значення
                змінної екземпляром певного класу. Він використовується для
                визначення типу об'єкта та дозволяє використовувати методи та
                властивості, доступні тільки для цього класу.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад instanceof"}
            title={
              <>
                <pre>
                  <code>{typeGuardsTwo}</code>
                </pre>
                <p id="formated-text">
                  Цей код визначає клас Person з властивістю name і
                  конструктором, який приймає ім'я та встановлює його як
                  властивість name. Потім код визначає функцію isPerson, яка
                  набуває значення value типу unknown і повертає true якщо
                  значення є екземпляром класу Person, і false в іншому випадку.
                  Функція використовує оператор instanceof для перевірки, чи є
                  значення екземпляром класу Person.
                  <br />
                  Потім код створює об'єкт obj типу unknown, який містить
                  екземпляр класу Person з ім'ям Джон. Потім код перевіряє, чи є
                  об'єкт obj екземпляром класу Person, використовуючи функцію
                  isPerson. Якщо об'єкт obj є екземпляром класу Person, то код
                  виводить повідомлення "obj is an instance of Person" та
                  значення властивості name об'єкта obj у консоль. В результаті
                  виконання цього коду в консоль буде виведено повідомлення "obj
                  is an instance of Person" та значення властивості name об'єкта
                  obj, яке дорівнює Джон.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                3. in Type Guard - дозволяє перевірити наявність певних
                властивостей об'єкті. Він використовується для визначення, чи
                об'єкт містить певні властивості, і дозволяє використовувати ці
                властивості безпечним чином.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад in"}
            title={
              <>
                <pre>
                  <code>{typeGuardsThree}</code>
                </pre>
                <p id="formated-text">
                  Цей код визначає інтерфейс Car з двома властивостями brand і
                  model. Потім код створює об'єкт vehicle типу Car зі значеннями
                  Toyota і Camry.
                  <br /> Потім код визначає функцію isCar, яка набуває значення
                  value типу unknown і повертає true якщо значення є об'єктом
                  типу Car, і false в іншому випадку. Функція використовує
                  оператор as для приведення типу value до типу Car, а потім
                  перевіряє, чи визначено властивості brand і model об'єкта
                  value. <br /> Потім код перевіряє, чи є об'єкт vehicle
                  об'єктом типу Car, використовуючи функцію isCar. Якщо об'єкт
                  vehicle є об'єктом типу Car, то код виводить повідомлення
                  "vehicle is a Car" та значення властивостей brand і model
                  об'єкта vehicle у консоль. <br /> В результаті виконання цього
                  коду в консоль буде виведено повідомлення "vehicle is a Car"
                  та значення властивостей brand і model об'єкта vehicle.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                4. Literal Type Guard - дозволяє перевірити, чи значення змінної
                конкретним літералом типу. Він використовується для визначення
                точного значення, яке може набувати змінна, і дозволяє
                використовувати відповідні методи або властивості, доступні
                тільки для цього конкретного значення.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад literal"}
            title={
              <>
                <pre>
                  <code>{typeGuardsFour}</code>
                </pre>
                <p id="formated-text">
                  Цей код визначає тип Color, який може бути або "red", або
                  "blue", або "green". Потім код визначає функцію isColor, яка
                  набуває значення value типу unknown і повертає true якщо
                  значення є одним з типів Color, і false в іншому випадку.
                  Функція перевіряє, чи значення дорівнює одному з типів Color,
                  використовуючи оператор === . Потім код визначає функцію
                  printColor, яка набуває значення color типу Color і виводить
                  повідомлення "The color is" та значення color у консоль.{" "}
                  <br /> Потім код створює змінну color типу unknown яка містить
                  значення "red". Потім код перевіряє, чи є значення змінної
                  color одним із типів Color, використовуючи функцію isColor.
                  Якщо значення змінної color є одним із типів Color , то код
                  викликає функцію printColor з аргументом color. Якщо значення
                  змінної color не є одним із типів Color, код виводить
                  повідомлення "Invalid color" в консоль.
                </p>
              </>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
