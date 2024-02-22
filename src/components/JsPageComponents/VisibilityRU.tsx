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

export default function VisibilityRU() {
  return (
    <>
      <Table id="js_title">
        <TableBody>
          <TableOneCol text={<h1>Работа с Javascript.</h1>} />
        </TableBody>
      </Table>
      <Table id="js_visibility">
        <TableBody>
          <TableTwoEqualCol
            title={<h3>Глобальная область видимости (Global Scope).</h3>}
            text={
              <p>
                Все переменные и константы, которые объявлены вне функций,
                являются глобальными. Они доступны из любого места программы.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Пример Global Scope"}
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
            title={<h3>Локальная область видимости (Local Scope).</h3>}
            text={
              <p>
                Переменные, объявленные внутри функций, становятся локальными и
                рассматриваются в своей локальной области. Локальная область
                видимости может быть разделена на область видимости функции и
                область видимости блока.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Пример Local Scope"}
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
            title={<h3>Область видимости функции (Function Scope).</h3>}
            text={
              <p>
                Когда мы объявляем переменную в функции, переменная видна только
                внутри функции. Мы не можем получить к ней доступ вне функции.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Пример Function Scope"}
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
            title={<h3>Область видимости блока (Block Scope).</h3>}
            text={
              <p>
                Это область в условиях (if и switch) или циклов (for, while).
                const и let позволяют разработчикам объявлять переменные в
                области видимости блока, что означает, что эти переменные
                существуют только в соответствующем блоке. При этом var буде
                виден ещё и в области функции.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Пример Block Scope"}
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
            title={<h3>Лексическая область видимости (Lexical Scope).</h3>}
            text={
              <p>
                Ещё один момент, о котором стоит упомянуть - это лексическая
                область. Лексическая область означает, что дочерняя область
                имеет доступ к переменным, определенным в родительской области.
                Дочерние функции лексически связаны с контекстом исполнения их
                родителей.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Пример Lexical Scope"}
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
            title={<h3>Динамическая область видимости (Dynamic Scope).</h3>}
            text={
              <p>
                Не связана с тем, как и где объявляются функции и области, а
                связана с тем, откуда они вызываются. Другими словами, цепочка
                областей видимости основана на стеке вызовов, а не на вложении
                областей видимости в коде.
              </p>
            }
          />
          <ButtonExampleWithBtn
            titleButtonExample={"Пример Dynamic Scope"}
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
