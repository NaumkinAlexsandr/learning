import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  typeObjectJs,
  typeObjectTs,
  typeArrayJs,
  typeArrayTs,
  typeAnyJs,
  typeAnyTs,
  typeUnknowJs,
  typeUnknowTs,
  typeVoidJs,
  typeVoidTs,
  typeNeverJs,
  typeNeverTs,
  typeFuncJs,
  typeFuncTs,
  typeEnumJs,
  typeEnumTs,
  typeAliasJs,
  typeAliasTs,
  typeInterfaceJs,
  typeInterfaceTs,
  typeUnionJs,
  typeUnionTs,
} from "./TsConstPre.tsx";

export default function TypesUA() {
  return (
    <>
      <Table id="ts_type">
        <TableBody>
          <TableOneCol text={<h2>Types - Типи даних.</h2>} />
          <TableTwoEqualCol
            title={<h3>JavaScript</h3>}
            text={<h3>TypeScript</h3>}
          />
          <TableOneCol
            text={
              <p>
                <b>string</b> - використовується для представлення текстової
                інформації.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const str = "Hello";</p>}
            text={<p>const str: string = "Hello";</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>number</b> - використовується для представлення числової
                інформації. Це може бути як ціле число, так і число з плаваючою
                комою.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const numb = 42;</p>}
            text={<p>const numb: number = 42;</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>boolean</b> - використовується для представлення логічних
                значень True (істина) або False (хиба).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const isLoading = false;</p>}
            text={<p>const isLoading: boolean = false;</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>bigint</b> - це цілий тип, який може представляти числа, які
                не можуть бути представлені за допомогою типу number. bigint
                використовується для роботи з великими цілими числами, які
                можуть бути дуже великими, ніж тип number.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const bigIntValue = 12345678901234567890n;</p>}
            text={<p>const bigIntValue: bigint = 12345678901234567890n;</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>symbol</b> - це тип даних, який є унікальним ідентифікатором,
                який може бути використаний для ідентифікації властивостей
                об'єкта.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const symbolValue = Symbol("mySymbol");</p>}
            text={<p>const symbolValue: symbol = Symbol("mySymbol");</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>null</b> - це тип даних, який не має значення. null
                використовується позначення те, що значення немає певного
                значення.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const nullValue = null;</p>}
            text={<p>const nullValue: null = null;</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>undefined</b> - це тип даних, що становить невизначене
                значення. undefined використовується для позначення того, що
                значення не було визначено чи не має певного значення.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                let myVariable; <br />
                console.log(myVariable); // undefined
              </p>
            }
            text={
              <p>
                let myVariable: string; <br /> console.log(myVariable); //
                undefined
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>object</b> - використовується для представлення складних
                структур даних, що містять ключ-значення пари.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeObjectJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeObjectTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>array</b> - використовується для зберігання набору значень
                одного типу.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeArrayJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeArrayTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>any</b> - використовується для позначення значень, які можуть
                мати будь-який тип даних. Використання типу "any" у TS дозволяє
                нам оминути перевірку типів під час компіляції і забезпечує
                більшу гнучкість при програмуванні. Однак, використання типу
                "any" може призвести до проблем з типізацією, збільшення
                кількості помилок та зниження продуктивності розробки.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeAnyJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeAnyTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>unknow</b> - це тип даних, який представляє значення, яке
                може бути будь-якого типу даних. unknown використовується для
                позначення того, що значення може бути будь-якого типу даних,
                але немає певного типу.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeUnknowJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeUnknowTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>void</b> - це тип даних, який не має ніякого значення. void
                використовується для функцій, які не повертають значення.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeVoidJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeVoidTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>never</b> - коли потрібно повернути помилку або для запуску
                нескінченного циклу.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeNeverJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeNeverTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>functions</b> - це блоки коду, які можуть бути спричинені з
                інших частин програми. Вони можуть приймати аргументи та
                повертати значення.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeFuncJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeFuncTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>enum</b> - це тип даних, який використовується для визначення
                перелічення (наприклад, списку можливих значень). Кожне значення
                перелічення може мати ім'я, яке відповідає значенню перелічення,
                та числове значення, яке може бути використане для відповіді на
                запити. Тобто дозволяє грамотніше структурувати код, особливо
                при використання однотипних елементів.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeEnumJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeEnumTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>Alias</b> - використовується для створення нових типів даних,
                які можуть використовуватися для зберігання даних в звичайних
                об'єктах або для визначення нових типів даних. Отже "type"
                використовується для зберігання даних в звичайних об'єктах.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeAliasJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeAliasTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>interface </b> -інтерфейси дозволяють описувати об'єкти, які
                містять дані та методи для їх обробки, але не вимагають
                визначення конкретного класу. Інтерфейси можуть містити
                властивості, методи та інші. Отже "Іnterface" використовується
                для визначення об'єктів, які містять дані та методи для їх
                обробки.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeInterfaceJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeInterfaceTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>union</b> - дозволяє нам використовувати більше одного типу
                даних для змінної чи параметру функції. Це називається типом
                об'єднання.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeUnionJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeUnionTs}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
