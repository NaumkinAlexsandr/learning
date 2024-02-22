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

export default function GenericsRU() {
  return (
    <>
      <Table id="ts_generics">
        <TableBody>
          <TableOneCol text={<h2>Generics.</h2>} />
          <TableOneCol
            text={
              <p>
                <b> Generics </b> – это механизм, позволяющий создавать
                обобщенные типы и функции, которые могут работать с разными
                типами данных, без явного указания конкретного типа. Они очень
                полезны, когда вы хотите создать повторно используемый код,
                который может работать с разными типами данных.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример перший"}
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
            titleButtonExample={"Пример другий"}
            title={
              <>
                <pre>
                  <code>{genericTwo}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol text={<h3>Generic constraints.</h3>} />
          <TableOneCol
            text={
              <p>
                Generic constraints в TypeScript – это возможность ограничить
                типы, которые могут быть использованы для создания экземпляров
                класса или функции. Они позволяют определить общие правила для
                типов, которые могут быть использованы как аргументы или
                значения, которые возвращаются.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример"}
            title={
              <>
                <pre>
                  <code>{genericThree}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol text={<h3>Generics + Function.</h3>} />
          <TableOneCol
            text={
              <p>
                В следующем примере мы объявляем функцию reverse, используя
                синтаксис обобщенных типов. Мы используем тип T, представляющий
                любой тип данных. Функция принимает массив items с типом T[] и
                возвращает тот же массив, который был изменен методом reverse().
                Затем мы вызываем функцию reverse из массивами чисел и строк, и
                получаем обратно перевернутые массивы.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример"}
            title={
              <>
                <pre>
                  <code>{genericFour}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol text={<h3>Generics + Function + Object.</h3>} />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример"}
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
