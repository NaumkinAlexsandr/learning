import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import {
  genericOne,
  genericTwo,
  genericThree,
  genericFour,
  genericFive,
} from "./TsConstPre.tsx";

export default function GenericsUA() {
  return (
    <>
      <Table id="ts_generics">
        <TableBody>
          <TableOneCol text={<h2>Generics.</h2>} />
          <TableOneCol
            text={
              <p>
                <b> Generics </b> - це механізм, що дозволяє створювати
                узагальнені типи та функції, які можуть працювати з різними
                типами даних, без явної вказівки конкретного типу. Вони дуже
                корисні, коли ви хочете створити повторно використовуваний код,
                який може працювати з різними типами даних.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад перший"}
            title={
              <>
                <pre>
                  <code>{genericOne}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад другий"}
            title={
              <>
                <pre>
                  <code>{genericTwo}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol text={<h3>Generic constraints</h3>} />
          <TableOneCol
            text={
              <p>
                Generic constraints у TypeScript - це можливість обмежити типи,
                які можуть бути використані для створення екземплярів класу чи
                функції. Вони дозволяють визначити загальні правила для типів,
                які можуть бути використані як аргументи або значення, що
                повертаються.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад"}
            title={
              <>
                <pre>
                  <code>{genericThree}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol text={<h3>Generics + Function</h3>} />
          <TableOneCol
            text={
              <p>
                У наведеному нижче прикладі ми оголошуємо функцію reverse,
                використовуючи синтаксис узагальнених типів. Ми використовуємо
                тип T, який представляє будь-який тип даних. Функція приймає
                масив items з типом T[] та повертає той самий масив, який було
                змінено методом reverse(). Потім ми викликаємо функцію reverse з
                масивами чисел та рядків, та отримуємо назад перевернені масиви.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад"}
            title={
              <>
                <pre>
                  <code>{genericFour}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol text={<h3>Generics + Function + Object</h3>} />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад"}
            title={
              <>
                <pre>
                  <code>{genericFive}</code>
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
