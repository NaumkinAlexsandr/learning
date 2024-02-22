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

export default function MappedTypesRU() {
  return (
    <>
      <Table id="ts_mapped">
        <TableBody>
          <TableOneCol text={<h2>Mapped Types.</h2>} />
          <TableOneCol
            text={
              <p>
                <b> Mapped Types </b> – это механизм, позволяющий создавать
                обобщенные типы и функции, которые могут работать с разными
                типами данных, без явного указания конкретного типа. Они очень
                полезны, когда вы хотите создать повторно используемый код,
                который может работать с разными типами данных.
                <ul>
                  Основные свойства Mapped Types:
                  <li>
                    Позволяют изменять тип элементов массива, объекта или класса
                    без необходимости терять информацию о его структуре.
                  </li>
                  <li>
                    Могут быть использованы для создания новых типов с
                    использованием существующих типов.
                  </li>
                  <li>
                    Позволяют изменять тип элементов массива, объекта или класса
                    с использованием переменных или констант.
                  </li>
                  <li>
                    Могут использоваться для создания типов с использованием
                    других типов, таких как условные типы, расширение типов,
                    интерфейсы и т.д.
                  </li>
                </ul>
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Изменение типа элементов массива."}
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
            titleButtonExample={"Изменение типа элементов объекта."}
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
            titleButtonExample={"Смена типа элементов класса."}
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
            titleButtonExample={
              "Изменение типа элементов с использованием переменных."
            }
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
              "Изменение типа элементов с использованием условного типа."
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
                Пример использования Mapped Types для смены регистров ключей.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Используя Capitalize."}
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
            titleButtonExample={"Используя Uppercase."}
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
            titleButtonExample={"С помощью union."}
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
            titleButtonExample={"С помощью Enum."}
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
