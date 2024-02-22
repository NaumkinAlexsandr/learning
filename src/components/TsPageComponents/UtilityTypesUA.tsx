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

export default function UtilityTypesUA() {
  return (
    <>
      <Table id="ts_utilityTypes">
        <TableBody>
          <TableOneCol text={<h2>Utility Types.</h2>} />
          <TableOneCol
            text={
              <p>
                <b>Utility Types</b> – це типи даних, які надають утиліти для
                роботи з іншими типами даних. Вони можуть бути використані для
                спрощення коду, підвищення типобезпеки та покращення читаності.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b> Record</b> - створює новий тип даних, який містить
                властивості із зазначеними іменами та типами. <br />
                {getFormatedText(
                  `type Record<K extends string | number | symbol, T> = { [P in K]: T; }`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад Record"}
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
                <b> Readonly</b> використовується для створення типу даних, який
                містить лише властивості вихідного типу, але тільки для читання.
                Це означає, що властивості вихідного типу можуть бути прочитані,
                але не можуть бути змінені. <br />
                {getFormatedText(
                  `type Readonly<T> = { readonly [P in keyof T]: T[P]; }`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад Readonly"}
            title={
              <>
                <p id="formated-text">
                  Наприклад, якщо ми маємо тип даних Person з властивостями name
                  і age, ми можемо створити новий тип даних PersonReadonly, який
                  містить всі властивості Person, але тільки для читання:
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
                <b> Partial</b> - створює новий тип даних, який містить усі
                властивості вихідного типу, але із зазначеними властивостями,
                які можуть бути опущені. <br />
                {getFormatedText(`type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
           `)}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад Partial"}
            title={
              <>
                <p id="formated-text">
                  Наприклад, якщо ми маємо тип даних Person з властивостями name
                  і age, ми можемо створити новий тип даних PersonPartial, який
                  містить всі властивості Person, але може бути опущена
                  властивість age:
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
                <b> Required </b>- створює новий тип даних, який містить усі
                властивості вихідного типу, але із зазначеними властивостями,
                які мають бути надані. <br />
                {getFormatedText(`type Required<T> = { [P in keyof T]-?: T[P]; }
            `)}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад Required"}
            title={
              <>
                <p id="formated-text">
                  Наприклад, якщо у нас є тип даних Person з властивостями name
                  і age, ми можемо створити новий тип даних PersonRequired, який
                  містить всі властивості Person, але має бути надана
                  властивість name:
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
                <b> Pick </b> – створює новий тип даних, який містить лише
                зазначені властивості вихідного типу. <br />
                {getFormatedText(`type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
            `)}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад Pick"}
            title={
              <>
                <p id="formated-text">
                  Наприклад, якщо у нас є тип даних Person з властивостями name,
                  age та address, ми можемо створити новий тип даних PersonPick,
                  який містить лише властивості name та age:
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
                <b> Omit </b>- створює новий тип даних, який містить зазначені
                властивості вихідного типу. <br />
                {getFormatedText(
                  `type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад Omit"}
            title={
              <>
                <p id="formated-text">
                  Наприклад, якщо у нас є тип даних Person з властивостями name,
                  age та address, ми можемо створити новий тип даних PersonOmit,
                  який не містить властивостей address:
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
                <b>Exclude</b> - створює новий тип даних, який містить
                зазначений тип даних. <br />
                {getFormatedText(
                  `type Exclude<T, U> = T extends U ? never : T`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад Exclude"}
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
                <b>Extract</b> – створює новий тип даних, який містить лише
                зазначені типи даних. <br />
                {getFormatedText(`type Extract<T, U> = T extends U ? T : never
            `)}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад Extract"}
            title={
              <>
                <p id="formated-text">
                  Наприклад, якщо у нас є тип даних Person або Employee, ми
                  можемо створити новий тип даних PersonExtract, який містить
                  лише властивості name та age:
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
                <b> NonNullable </b>- створює новий тип даних, який містить
                значення null чи undefined. <br />
                {getFormatedText(`type NonNullable<T> = T & {}`)}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад NonNullable"}
            title={
              <>
                <p id="formated-text">
                  Наприклад, якщо ми маємо тип даних Person, який може містити
                  властивість address, ми можемо створити новий тип даних
                  PersonNonNullable, який не містить властивість address з типом
                  даних string | null | undefined:
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
                <b> Parameters</b> – створює новий тип даних, який містить типи
                даних параметрів функції. <br />
                {getFormatedText(
                  `type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад Parameters"}
            title={
              <>
                <p id="formated-text">
                  Наприклад, ми можемо створити новий тип даних
                  ParametersFunction, який містить типи даних параметрів функції
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
                <b> ReturnType </b>- створює новий тип даних, який містить тип
                значення функції, що повертається. <br />
                {getFormatedText(
                  `type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any`
                )}
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад ReturnType"}
            title={
              <>
                <p id="formated-text">
                  Наприклад, ми можемо створити новий тип даних
                  ReturnTypeFunction, який містить тип значення функції add, що
                  повертається:
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
