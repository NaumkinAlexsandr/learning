import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import {
  mappedArray,
  mappedObject,
  mappedClass,
  mappedVariables,
  mappedElement,
  mappedCapitalize,
  mappedUppercase,
  mappedUnion,
  mappedEnum,
} from "./TsConstPre.tsx";

export default function MappedTypesUA() {
  return (
    <>
      <Table id="ts_mapped">
        <TableBody>
          <TableOneCol text={<h2>Mapped Types.</h2>} />
          <TableOneCol
            text={
              <p>
                <b> Mapped Types </b> - це механізм, що дозволяє створювати
                узагальнені типи та функції, які можуть працювати з різними
                типами даних, без явної вказівки конкретного типу. Вони дуже
                корисні, коли ви хочете створити повторно використовуваний код,
                який може працювати з різними типами даних.
                <ul>
                  Основні властивості Mapped Types:
                  <li>
                    Дозволяють змінювати тип елементів масиву, об'єкта або класу
                    без необхідності втрачувати інформацію про його структуру.
                  </li>
                  <li>
                    Можуть бути використані для створення нових типів з
                    використанням існуючих типів.
                  </li>
                  <li>
                    Дозволяють змінювати тип елементів масиву, об'єкта або класу
                    з використанням змінних або констант.
                  </li>
                  <li>
                    Можуть бути використані для створення типів з використанням
                    інших типів, таких як умовні типи, розширення типів,
                    інтерфейси та т.д.
                  </li>
                </ul>
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Зміна типу елементів масиву"}
            title={
              <>
                <pre>
                  <code>{mappedArray}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Зміна типу елементів об'єкта"}
            title={
              <>
                <pre>
                  <code>{mappedObject}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Зміна типу елементів класу"}
            title={
              <>
                <pre>
                  <code>{mappedClass}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Зміна типу елементів з використанням змінних"}
            title={
              <>
                <pre>
                  <code>{mappedVariables}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={
              "Зміна типу елементів з використанням умовного типу"
            }
            title={
              <>
                <pre>
                  <code>{mappedElement}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                Приклад використання Mapped Types для зміни регістрів ключів.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Використовуючи Capitalize"}
            title={
              <>
                <pre>
                  <code>{mappedCapitalize}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Використовуючи Uppercase"}
            title={
              <>
                <pre>
                  <code>{mappedUppercase}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"За допомогою union"}
            title={
              <>
                <pre>
                  <code>{mappedUnion}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"За допомогою Enum"}
            title={
              <>
                <pre>
                  <code>{mappedEnum}</code>
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
