import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  objectCreateValueCode,
  objectCreateEnumerableCode,
  objectCreateWritableCode,
  objectCreateConfigurableCode,
  objectCreateGetCode,
  objectCreateSetCode,
  objectCreateValueCode2,
} from "./DescriptorConstPre.ts";
import {
  objectCreateValue,
  objectCreateEnumerable,
  objectCreateWritable,
  objectCreateConfigurable,
  objectCreateGet,
  objectCreateSet,
} from "./descriptor.js";
export default function DescriptorUA() {
  return (
    <Table id="js_descriptor">
      <TableBody>
        <TableOneCol text={<h2>Дескриптор властивості.</h2>} />
        <TableTwoEqualCol
          title={<h3>value</h3>}
          text={
            <p>
              Значення, асоційоване з властивістю (тільки в дескрипторі даних).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад value"}
          title={
            <p id="formated-text">
              <span>
                Розглянемо приклад: створюємо новий об'єкт people і передаємо в
                нього совість name і age.
              </span>
              <br /> <br />
              <span id="jsObjectCreateValue"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateValueCode}</code>
            </pre>
          }
          onClick={objectCreateValue}
        />
        <TableOneCol
          text={
            <p>
              При цьому дані ключі не будуть доступні під час ітерації ключів.
              <br />
              <pre>
                <code>{objectCreateValueCode2}</code>
              </pre>
              <br />
              Це відбувається через те, що за умовчанням дескриптор enumerable:
              false
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>enumerable</h3>}
          text={
            <p>
              Визначає, чи проглядається властивість у циклі for...in та методом
              Object.keys() чи ні.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад enumerable"}
          title={
            <p id="formated-text">
              <span>
                Розглянемо приклад: переключимо дескриптор enumerable: true та
                виконаємо ітерацію за ключами.
              </span>
              <br /> <br />
              <span id="jsObjectCreateEnumerable"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateEnumerableCode}</code>
            </pre>
          }
          onClick={objectCreateEnumerable}
        />
        <TableTwoEqualCol
          title={<h3>writable</h3>}
          text={
            <p>
              За умовчанням властивості встановлено в false і йому неможливо
              привласнити нове значення.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад writable"}
          title={
            <p id="formated-text">
              <span>
                Розглянемо приклад: припустимо ми хочемо змінити ім'я та вік,
                але ми не можемо зробити цього за промовчанням writable: false
                Переключимо дескриптор writable: true для імені, а для віку
                залишимо false.
              </span>
              <br /> <br />
              <span id="jsObjectCreateWritable"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateWritableCode}</code>
            </pre>
          }
          onClick={objectCreateWritable}
        />
        <TableTwoEqualCol
          title={<h3>configurable</h3>}
          text={
            <p>
              Одночасно контролює, чи може властивість бути видалена з об'єкта і
              чи можуть бути змінені його атрибути (крім контролю зміни атрибута
              writable).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад configurable"}
          title={
            <p id="formated-text">
              <span>
                Розглянемо приклад: спробуємо видалити ім'я та вік у об'єкт. Для
                цього переключимо configurable: true для віку, а для імені
                залишимо configurable: false. В підсумку вийде лише вік.
              </span>
              <br />
              <br />
              <span id="jsObjectCreateConfigurable"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateConfigurableCode}</code>
            </pre>
          }
          onClick={objectCreateConfigurable}
        />
        <TableTwoEqualCol
          title={<h3>get</h3>}
          text={
            <p>
              Функція, що повертає значення якості, або undefined, якщо така
              функція відсутня (тільки у дескрипторі доступу).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад get"}
          title={
            <p id="formated-text">
              <span>
                Розглянемо приклад: за допомогою гетера спробуємо порахувати
                коли людина народилася.
              </span>
              <br />
              <br />
              <span id="jsObjectCreateGet"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateGetCode}</code>
            </pre>
          }
          onClick={objectCreateGet}
        />
        <TableTwoEqualCol
          title={<h3>set</h3>}
          text={
            <p>
              Функція, що змінює значення якості, або undefined, якщо така
              функція відсутня (тільки в дескрипторі доступу).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад set"}
          title={
            <p id="formated-text">
              <span>
                Розглянемо приклад: за допомогою сетера спробуємо змінити дату
                народження. Але якщо вивести people.born, то побачимо що
                залишилося 1992. Все тому, що сітер не перепризначає значення.
              </span>
              <br />
              <br />
              <span id="jsObjectCreateSet"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateSetCode}</code>
            </pre>
          }
          onClick={objectCreateSet}
        />
      </TableBody>
    </Table>
  );
}
