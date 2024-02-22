import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  assertionOne,
  assertionTwo,
  assertionThree,
  assertionFour,
} from "./TsConstPre.tsx";

export default function TypeAssertionUA() {
  return (
    <>
      <Table id="ts_typeAssertion">
        <TableBody>
          <TableOneCol text={<h2>Type Assertion - Затвердження типів.</h2>} />
          <TableOneCol
            text={
              <p>
                <b>Type Assertion</b> - це механізм, який дозволяє прив'язувати
                змінну до типу, який не може бути визначений зазвичай. Це
                полягає в тому, що ви можете вказати тип даних, які ви очікуєте,
                щоб використовувалися в змінній, і TypeScript забезпечує, що ці
                дані відповідають вказаному типу.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                Затвердження за допомогою &lt; &gt; <br />
                <pre>
                  <code>{assertionOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                Затвердження за допомогою оператора as
                <br />
                <pre>
                  <code>{assertionTwo}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol text={<h3>Приведення до константи</h3>} />
          <TableOneCol
            text={
              <p>
                <b>Const Assertion</b> - це функціональність TypeScript, яка
                дозволяє обмежити тип значень змінної, щоб вона мала лише
                дозволені значення. Це дозволяє зменшити кількість помилок в
                розробці, оскільки виникає попередження, якщо код використовує
                значення, які не підходять для даної змінної.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{assertionThree}</code>
                </pre>
                <br />
                Визначення типу Person , який представляє об'єкт із двома
                властивостями: name типу string і age типу number. Визначення
                змінної bill , яка також є об'єктом типу Person і немає
                константного типу. Це означає, що властивості об'єкта bill
                можуть бути змінені після визначення.
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{assertionFour}</code>
                </pre>
                <br />
                Визначення типу Person , який представляє об'єкт із двома
                властивостями: name типу string і age типу number. Визначення
                змінної john яка є об'єктом типу Person та має константний тип.
                Це означає, що властивості об'єкта john не можуть бути змінені
                після визначення.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
