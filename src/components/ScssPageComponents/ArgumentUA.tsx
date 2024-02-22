import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  argumentOne,
  argumentTwo,
  argumentThree,
  argumentFour,
  argumentFive,
  argumentSix,
  argumentSeven,
  argumentEight,
  argumentNine,
  argumentTenUA,
} from "./ScssConstPre.tsx";

export default function ArgumentUA() {
  return (
    <>
      <Table id="scss_argument">
        <TableBody>
          <TableOneCol text={<h3>Аргументи.</h3>} />
          <TableOneCol
            text={
              <p>
                Міксин може приймати значення SassScript як аргументи, що
                передаються при підключенні міксину і стають доступними як
                змінні усередині нього. <br />
                При визначенні міксину аргументи пишуться як імена змінних,
                розділені комами всередині круглих дужок відразу після імені.
                Потім, при підключенні міксину значення можуть бути передані
                аналогічним чином. Наприклад:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{argumentOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{argumentTwo}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                У міксинах також можна визначати значення аргументів за
                замовчуванням, використовуючи звичайний синтаксис установки
                значень змінних. Потім при підключенні міксину, якщо йому не
                буде передано аргумент, то буде використано значення за
                промовчанням.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{argumentThree}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{argumentFour}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol text={<h3>Іменовані аргументи.</h3>} />
          <TableOneCol
            text={
              <p>
                Міксин також можна викликати використовуючи явно іменовані
                аргументи. Наприклад, вищезазначений приклад міг би бути
                записаний як:
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <pre>
                  <code>{argumentFive}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Цей спосіб запису робить код меншим коротким, але більш
                читабельним. Також він дозволяє функціям представляти більш
                гнучкі інтерфейси: велика кількість параметрів у функції не
                ускладнює її виклик.
                <br />
                Іменовані аргументи можна передавати в будь-якому порядку,
                аргументи, що мають значення за замовчуванням, можуть бути
                пропущено. Оскільки іменовані аргументи - це імена змінних,
                символи підкреслення та дефіси можуть бути використані як
                взаємозамінні.
              </p>
            }
          />
          <TableOneCol text={<h3>Змінні аргументи.</h3>} />
          <TableOneCol
            text={
              <p>
                Іноді має сенс міксину чи функції приймати невідому кількість
                аргументів. Наприклад, міксин для створення тіні блоку може
                набувати будь-яку кількість значень тіні. Для таких ситуацій
                Sass підтримує можливість передачі "змінних аргументів" - це
                такі аргументи, що передаються останніми у функцію або міксин,
                отримують всі інші передані параметри та упаковують їх у список.
                Ці аргументи виглядають як звичайні, але після них слід
                багатокрапка. Наприклад:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{argumentSix}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{argumentSeven}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Змінні аргументи також можна використовувати у міксинах.
                Використовуючи той самий синтаксис, можна розгорнути список
                значень так, що кожне значення буде передано як окремий параметр
                або розгорнути карту значень так, що кожна пара буде трактована
                як іменований аргумент. Наприклад:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{argumentEight}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{argumentNine}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Ви можете використовувати змінні аргументи для того, щоб
                обернути міксин і додати до нього додаткові стилі, не змінюючи
                сигнатури аргументів цього міксину. Якщо ви це зробите,
                іменовані аргументи будуть безпосередньо передано в обгорнутий
                міксин:
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <pre>
                  <code>{argumentTenUA}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
