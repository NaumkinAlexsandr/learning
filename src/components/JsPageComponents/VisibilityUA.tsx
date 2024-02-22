import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  globalScopeCode,
  localScopeCode,
  functionScopeCode,
  blockScopeCode,
  lexicalScopeCode,
  dynamicScopeCode,
} from "./VisibilityConstPre.ts";
import {
  globalScope,
  localScope,
  functionScope,
  blockScope,
  lexicalScope,
  dynamicScope,
} from "./visibility.js";

export default function VisibilityUA() {
  return (
    <>
      <Table id="js_title">
        <TableBody>
          <TableOneCol text={<h1>Робота з Javascript.</h1>} />
        </TableBody>
      </Table>
      <Table id="js_visibility">
        <TableBody>
          <TableTwoEqualCol
            title={<h3>Глобальна область видимості (Global Scope).</h3>}
            text={
              <p>
                Усі змінні та константи, які оголошені поза функціями, є
                глобальними. Вони доступні з будь-якого місця програми.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Приклад Global Scope"}
            title={
              <p id="formated-text">
                <span id="jsGlobalScope"></span>
              </p>
            }
            text={
              <pre>
                <code>{globalScopeCode}</code>
              </pre>
            }
            onClick={globalScope}
          />
          <TableTwoEqualCol
            title={<h3>Локальна область видимості (Local Scope).</h3>}
            text={
              <p>
                Змінні, оголошені всередині функцій, стають локальними та
                розглядаються у своїй локальній області. Локальна область
                видимості може бути поділена на область видимості функції та
                область видимості блоку.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Приклад Local Scope"}
            title={
              <p id="formated-text">
                <span id="jsLocalScope"></span>
              </p>
            }
            text={
              <pre>
                <code>{localScopeCode}</code>
              </pre>
            }
            onClick={localScope}
          />
          <TableTwoEqualCol
            title={<h3>Область видимості функції (Function Scope).</h3>}
            text={
              <p>
                Коли ми оголошуємо змінну функції, змінна видно лише всередині
                функції. Ми не можемо отримати до неї доступ поза функцією.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Приклад Function Scope"}
            title={
              <p id="formated-text">
                <span id="jsFunctionScope"></span>
              </p>
            }
            text={
              <pre>
                <code>{functionScopeCode}</code>
              </pre>
            }
            onClick={functionScope}
          />
          <TableTwoEqualCol
            title={<h3>Область видимості блоку (Block Scope).</h3>}
            text={
              <p>
                Це область в умовах (if і switch) або циклів (for, while). const
                і let дозволяють розробникам оголошувати змінні в області
                видимості блоку, що означає, що ці змінні існують лише у
                відповідному блоці. При цьому var буде видно ще й у сфері
                функції.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Приклад Block Scope"}
            title={
              <p id="formated-text">
                <span id="jsBlockScope"></span>
              </p>
            }
            text={
              <pre>
                <code>{blockScopeCode}</code>
              </pre>
            }
            onClick={blockScope}
          />
          <TableTwoEqualCol
            title={<h3>Лексична область видимості (Lexical Scope).</h3>}
            text={
              <p>
                Ще один момент, про який варто згадати - Це лексична область.
                Лексична область означає, що дочірня область має доступ до
                змінних, визначених у батьківської області. Дочірні функції
                лексично пов'язані з контекстом виконання їхніх батьків.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Приклад Lexical Scope"}
            title={
              <p id="formated-text">
                <span id="jsLexicalScope"></span>
              </p>
            }
            text={
              <pre>
                <code>{lexicalScopeCode}</code>
              </pre>
            }
            onClick={lexicalScope}
          />
          <TableTwoEqualCol
            title={<h3>Динамічна область видимості (Dynamic Scope).</h3>}
            text={
              <p>
                Не пов'язана з тим, як і де оголошуються функції та області, а
                пов'язана з тим, звідки вони викликаються. Іншими словами,
                ланцюжок областей видимості заснований на стеку викликів, а не
                на вкладенні областей видимості у коді.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Приклад Dynamic Scope"}
            title={
              <p id="formated-text">
                <span id="jsDynamicScope"></span>
              </p>
            }
            text={
              <pre>
                <code>{dynamicScopeCode}</code>
              </pre>
            }
            onClick={dynamicScope}
          />
        </TableBody>
      </Table>
    </>
  );
}
