import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import {
  utilityRecord,
  utilityReadonly,
  utilityPartial,
  utilityRequired,
  utilityPick,
  utilityOmit,
  utilityExclude,
  utilityExtract,
  utilityNonNullable,
  utilityParameters,
  utilityReturnType,
} from "./TsConstPre.tsx";
import { getFormatedText } from "../../core/getFormatedText.tsx";

export default function UtilityTypesRU() {
  return (
    <>
      <Table id="ts_utilityTypes">
        <TableBody>
          <TableOneCol text={<h2>Utility Types.</h2>} />
          <TableOneCol
            text={
              <p>
                <b>Utility Types</b> – это типы данных, которые предоставляют
                утилиты для работы с другими типами данных Они могут быть
                использованы для упрощение кода, повышение типобезопасности и
                улучшение читаемости.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b> Record</b> - создает новый тип данных, содержащий свойства с
                указанными именами и типами. <br />
                {getFormatedText(
                  `type Record<K extends string | number | symbol, T> = { [P in K]: T; }`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример Record"}
            title={
              <>
                <pre>
                  <code>{utilityRecord}</code>
                </pre>
                <p id="formated-text"></p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b> Readonly</b> используется для создания типа данных, который
                содержит только свойства исходного типа, но только для чтения.
                Это означает, что свойства исходного типа могут быть прочитаны,
                но не могут быть изменены. <br />
                {getFormatedText(
                  `type Readonly<T> = { readonly [P in keyof T]: T[P]; }`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример Readonly"}
            title={
              <>
                <p id="formated-text">
                  Например, если у нас есть тип данных Person со свойствами name
                  и age, мы можем создать новый тип данных PersonReadonly,
                  который содержит все свойства Person, но только для чтения:
                </p>
                <pre>
                  <code>{utilityReadonly}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b> Partial</b> - создает новый тип данных, содержащий все
                свойства исходного типа, но с указанными свойствами, которые
                могут быть опущены. <br />
                {getFormatedText(`type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
           `)}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример Partial"}
            title={
              <>
                <p id="formated-text">
                  Например, если у нас есть тип данных Person со свойствами name
                  и age, мы можем создать новый тип данных PersonPartial,
                  который содержит все свойства Person, но может быть опущена
                  свойство age:
                </p>
                <pre>
                  <code>{utilityPartial}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b> Required </b>- создает новый тип данных, содержащий все
                свойства исходного типа, но с указанными свойствами, которые
                должны быть предоставлены. <br />
                {getFormatedText(`type Required<T> = { [P in keyof T]-?: T[P]; }
            `)}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример Required"}
            title={
              <>
                <p id="formated-text">
                  К примеру, если у нас есть тип данных Person со свойствами
                  name и age, мы можем создать новый тип данных PersonRequired,
                  который содержит все свойства Person, но должна быть
                  предоставлена свойство name:
                </p>
                <pre>
                  <code>{utilityRequired}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b> Pick </b> – создает новый тип данных, содержащий только
                указанные свойства исходного типа. <br />
                {getFormatedText(`type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
            `)}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример Pick"}
            title={
              <>
                <p id="formated-text">
                  К примеру, если у нас есть тип данных Person со свойствами
                  name, age и address, мы можем создать новый тип данных
                  PersonPick, который содержит только свойства name и age:
                </p>
                <pre>
                  <code>{utilityPick}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b> Omit </b>- создает новый тип данных, содержащий указанные
                свойства исходного типа. <br />
                {getFormatedText(
                  `type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример Omit"}
            title={
              <>
                <p id="formated-text">
                  К примеру, если у нас есть тип данных Person со свойствами
                  name, age и address, мы можем создать новый тип данных
                  PersonOmit, не содержащий свойств address:
                </p>
                <pre>
                  <code>{utilityOmit}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>Exclude</b> - создает новый тип данных, содержащий указанный
                тип данных. <br />
                {getFormatedText(
                  `type Exclude<T, U> = T extends U ? never : T`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример Exclude"}
            title={
              <>
                <p id="formated-text"></p>
                <pre>
                  <code>{utilityExclude}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>Extract</b> – создает новый тип данных, содержащий только
                указанные типы данных. <br />
                {getFormatedText(`type Extract<T, U> = T extends U ? T : never
            `)}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример Extract"}
            title={
              <>
                <p id="formated-text">
                  К примеру, если у нас есть тип данных Person или Employee, мы
                  можем создать новый тип данных PersonExtract, содержащий
                  только свойства name и age:
                </p>
                <pre>
                  <code>{utilityExtract}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b> NonNullable </b>- создает новый тип данных, содержащий
                значение null или undefined. <br />
                {getFormatedText(`type NonNullable<T> = T & {}`)}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример NonNullable"}
            title={
              <>
                <p id="formated-text">
                  Например, если у нас есть тип данных Person, который может
                  содержать свойство address, мы можем создать новый тип данных
                  PersonNonNullable, не содержащий свойство address с типом
                  данных string | null | undefined:
                </p>
                <pre>
                  <code>{utilityNonNullable}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b> Parameters</b> – создает новый тип данных, содержащий типы
                данных параметров функции. <br />
                {getFormatedText(
                  `type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример Parameters"}
            title={
              <>
                <p id="formated-text">
                  Например, мы можем создать новый тип данных
                  ParametersFunction, содержащий типы данных параметров функции
                  add:
                </p>
                <pre>
                  <code>{utilityParameters}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b> ReturnType </b>- создает новый тип данных, содержащий тип
                значение возвращаемой функции.
                <br />
                {getFormatedText(
                  `type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример ReturnType"}
            title={
              <>
                <p id="formated-text">
                  Например, мы можем создать новый тип данных
                  ReturnTypeFunction, содержащий тип значения функции add
                  возвращается:
                </p>
                <pre>
                  <code>{utilityReturnType}</code>
                </pre>
              </>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
