import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import { typeofTs, instanceofTs, keyofTs } from "./TsConstPre.tsx";

export default function OperatorsUA() {
  return (
    <>
      <Table id="ts_operators">
        <TableBody>
          <TableOneCol text={<h2>Operators - Оператори.</h2>} />
          <TableOneCol
            text={
              <p>
                <b>typeof</b> - це оператор JavaScript, який дозволяє визначити
                тип змінної. У TypeScript такий оператор також підтримується,
                але з деякими відмінностями. У TypeScript typeof може
                використовуватися для перевірки типів змінних, а також
                визначення типів функцій.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад typeof"}
            title={
              <>
                <pre>
                  <code>{typeofTs}</code>
                </pre>
                <p id="formated-text">
                  <br />У цьому прикладі ми визначаємо три змінні: myString,
                  myNumber і myFunction. Потім ми використовуємо оператор typeof
                  для отримання типу кожної змінної та виводимо його в консоль.{" "}
                  <br /> Оператор typeof може бути корисним, коли ви хочете
                  перевірити тип змінної або функції під час виконання програми.
                  Наприклад, ви можете використовувати оператор typeof для
                  перевірки, чи є змінна функцією, перш ніж викликати її.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>instanceof</b> - використовується для перевірки, чи є об'єкт
                екземпляром певного класу. Він повертає true, якщо об'єкт є
                екземпляром класу, та false, якщо ні. У TypeScript instanceof
                може використовуватися лише для перевірки типів, визначених у
                поточному модулі.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад instanceof"}
            title={
              <>
                <pre>
                  <code>{instanceofTs}</code>
                </pre>
                <p id="formated-text">
                  <br />У першому виразі людина instanceof Person перевіряється,
                  чи є об'єкт person екземпляром класу Person.
                  <br /> Другий вираз Person instanceof Object перевіряється, чи
                  є об'єкт person екземпляром класу Object, який є батьківським
                  класом для всіх об'єктів JavaScript. <br /> У третьому виразі
                  persona instanceof String перевіряється, чи є об'єкт person
                  екземпляром класу String, який немає у JavaScript. <br />{" "}
                  Таким чином, у цьому коді ми створюємо екземпляр класу Person,
                  перевіряємо, чи є він екземпляром класу Person, екземпляром
                  класу Object і не є екземпляром класу String.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>keyof</b> - використовується для одержання типу ключів
                об'єкта. Він дозволяє визначити тип ключів об'єкта, який можна
                використовувати для перевірки типів даних під час компіляції.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад keyof"}
            title={
              <>
                <pre>
                  <code>{keyofTs}</code>
                </pre>
                <p id="formated-text">
                  <br />
                  Цей код визначає інтерфейс Person, який містить дві
                  властивості: name типу string і age типу number. Потім
                  визначено тип PersonKeys, який є об'єднання всіх ключів з
                  інтерфейсу Person. <br /> Далі створюється об'єкт person ,
                  який відповідає інтерфейсу Person. <br /> Функція
                  printPersonKey приймає один аргумент key типу PersonKeys.
                  Всередині функції використовується оператор in, який
                  перевіряє, чи містить об'єкт person властивість із зазначеним
                  ключем. Якщо властивість існує, то функція виводить його
                  значення консоль. <br /> Наприкінці коду викликається функція
                  printPersonKey двічі з різними аргументами: 'name' і 'age'.
                  Однак, якщо ви викликаєте функцію з аргументом 'gender', то
                  TypeScript видасть помилку, оскільки 'gender' не є ключем з
                  інтерфейсу Person.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <ul>
                  Відмінності між instanceof і keyof
                  <li>
                    instanceof використовується для перевірки екземплярів
                    класів, у той час як keyof використовується для одержання
                    типу ключів об'єкта.
                  </li>
                  <li>
                    instanceof може бути використаний для перевірки екземплярів
                    будь-яких класів, включаючи класи, які не були визначені в
                    поточній області видимості, у той час як keyof може бути
                    використаний тільки для об'єктів, визначених у поточній
                    області видимості.
                  </li>
                  <li>
                    keyof може бути використаний для отримання типу ключів
                    будь-якого об'єкта, включаючи об'єкти, які не були визначені
                    в поточній області видимості, тоді як instanceof може бути
                    використаний тільки для об'єктів, створених у поточній
                    області видимості.
                  </li>
                </ul>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
