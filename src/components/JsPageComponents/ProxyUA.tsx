import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  proxyGetConst,
  proxySetConst,
  proxyHasConst,
  proxydeleteConst,
  proxyApplyConst,
  proxyConstructConst,
  proxyDefinePropertyConst,
  proxyGetOwnConst,
  proxyPrototypeOfConst,
  proxyIsExtensibleConst,
  proxyOwnKeysConst,
  proxyPreventExtensionsConst,
  proxySetPrototypeOfConst,
} from "./ProxyConstPre.ts";
import {
  proxyGet,
  proxySet,
  proxyHas,
  proxydelete,
  proxyApply,
  proxyConstruct,
  proxyDefineProperty,
  proxyGetOwn,
  proxyPrototypeOf,
  proxyIsExtensible,
  proxyOwnKeys,
  proxyPreventExtensions,
  proxySetPrototypeOf,
} from "./proxy.js";

export default function ProxyUA() {
  return (
    <Table id="js_proxy">
      <TableBody>
        <TableOneCol text={<h2>Proxy.</h2>} />
        <TableOneCol
          text={
            <p>
              Проксі це своєрідна обгортка в яку розміщуються інші об'єкти. При
              цьому можна робити різні маніпуляції (додавати, змінювати,
              видаляти) із властивостями. <br />
              let proxy = new Proxy(target, handler);
              <br />
              target - об'єкт (масив, функція і т.д.) для якого створюється
              проксі. <br />
              handler - тут описуються пастки які необхідні для цього проксі.
            </p>
          }
        />
        <TableOneCol text={<h3>Функції обробника.</h3>} />
        <TableTwoEqualCol
          title={<h3>.apply()</h3>}
          text={
            <p>
              apply(target, thisArg, argArray) <br />
              thisArg - це контекст this. <br />
              argArray – список аргументів.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy apply"}
          title={
            <p id="formated-text">
              <span id="jsproxyapply"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxyApplyConst}</code>
            </pre>
          }
          onClick={proxyApply}
        />
        <TableTwoEqualCol
          title={<h3>.construct()</h3>}
          text={
            <p>
              construct(target, argumentsList, newTarget) <br />
              newTarget - конструктор, який був спочатку викликаний.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy construct"}
          title={
            <p id="formated-text">
              <span id="jsproxyConstruct"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxyConstructConst}</code>
            </pre>
          }
          onClick={proxyConstruct}
        />
        <TableTwoEqualCol
          title={<h3>.defineProperty()</h3>}
          text={
            <p>
              defineProperty(target, property, descriptor) <br />
              descriptor - дескриптор визначуваної або змінної властивості.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy defineProperty"}
          title={
            <p id="formated-text">
              <span id="jsproxyDefineProperty"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxyDefinePropertyConst}</code>
            </pre>
          }
          onClick={proxyDefineProperty}
        />
        <TableTwoEqualCol
          title={<h3>.deleteProperty()</h3>}
          text={<p>Дозволяє видалити непотрібні властивості.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy deleteProperty"}
          title={
            <p id="formated-text">
              <span id="jsproxydelete"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxydeleteConst}</code>
            </pre>
          }
          onClick={proxydelete}
        />
        <TableTwoEqualCol
          title={<h3>.get()</h3>}
          text={
            <p>
              Є пасткою для отримання значення властивості. <br />
              get(target, property, receiver) <br />
              target – це оригінальний об'єкт, який передавався першим
              аргументом конструктор new Proxy. <br />
              property – ім'я якості. <br />
              receiver – це сам об'єкт проксі (або об'єкт, що його успадковує).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy get"}
          title={
            <p id="formated-text">
              <span id="jsproxyGet"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxyGetConst}</code>
            </pre>
          }
          onClick={proxyGet}
        />
        <TableTwoEqualCol
          title={<h3>.getOwnPropertyDescriptor()</h3>}
          text={
            <p>
              Є пасткою і дозволяє переглянути точний опис властивості що
              складається з рядкового імені та дескриптора властивості.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy getOwnPropertyDescriptor"}
          title={
            <p id="formated-text">
              <span id="jsproxyGetOwn"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxyGetOwnConst}</code>
            </pre>
          }
          onClick={proxyGetOwn}
        />
        <TableTwoEqualCol
          title={<h3>.getPrototypeOf()</h3>}
          text={
            <p>
              Є пасткою здатною повернути прототип властивостей зазначеного
              об'єкта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy getPrototypeOf"}
          title={
            <p id="formated-text">
              <span id="jsproxyPrototypeOf"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxyPrototypeOfConst}</code>
            </pre>
          }
          onClick={proxyPrototypeOf}
        />
        <TableTwoEqualCol
          title={<h3>.has()</h3>}
          text={
            <p>
              Повертає значення булю. Якщо властивості є true і false якщо
              властивості немає. <br />
              has(target, property)
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy has"}
          title={
            <p id="formated-text">
              <span id="jsproxyHas"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxyHasConst}</code>
            </pre>
          }
          onClick={proxyHas}
        />
        <TableTwoEqualCol
          title={<h3>.isExtensible()</h3>}
          text={
            <p>
              Є пасткою для isExtensible. Визначає, чи є об'єкт розширюваним
              (тобто, чи можна до нього додавати нові властивості).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy isExtensible"}
          title={
            <p id="formated-text">
              <span id="jsproxyIsExtensible"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxyIsExtensibleConst}</code>
            </pre>
          }
          onClick={proxyIsExtensible}
        />
        <TableTwoEqualCol
          title={<h3>.ownKeys()</h3>}
          text={
            <p>
              Повертає масив усіх власних властивостей (не успадкованих)
              цільового об'єкта, включаючи неперераховані властивості.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy ownKeys"}
          title={
            <p id="formated-text">
              <span id="jsproxyOwnKeys"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxyOwnKeysConst}</code>
            </pre>
          }
          onClick={proxyOwnKeys}
        />
        <TableTwoEqualCol
          title={<h3>.preventExtensions()</h3>}
          text={
            <p>
              Метод використовується для запобігання додавання нових
              властивостей до об'єкта. Коли цей метод викликається на об'єкті,
              він робить об'єкт нерозширюваним, що означає, що не можна додати
              нові властивості об'єкту.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy preventExtensions"}
          title={
            <p id="formated-text">
              <span id="jsproxyPreventExtensions"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxyPreventExtensionsConst}</code>
            </pre>
          }
          onClick={proxyPreventExtensions}
        />
        <TableTwoEqualCol
          title={<h3>.set()</h3>}
          text={
            <p>
              Дана пастка спрацьовує коли необхідно написати якесь те
              властивість. <br />
              set(target, property, value, receiver) <br />
              target – це оригінальний об'єкт, який передавався першим
              аргументом конструктор new Proxy. <br />
              property – ім'я якості. <br />
              value – значення якості. <br />
              receiver – це сам об'єкт проксі (або об'єкт, що його успадковує).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy set"}
          title={
            <p id="formated-text">
              <span id="jsproxySet"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxySetConst}</code>
            </pre>
          }
          onClick={proxySet}
        />
        <TableTwoEqualCol
          title={<h3>.setPrototypeOf()</h3>}
          text={
            <p>
              Це функція JavaScript, яка використовується для встановлення
              прототипу (прототипного об'єкта) для вказаного об'єкта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад Proxy setPrototypeOf"}
          title={
            <p id="formated-text">
              <span id="jsproxySetPrototypeOf"></span>
            </p>
          }
          text={
            <pre>
              <code>{proxySetPrototypeOfConst}</code>
            </pre>
          }
          onClick={proxySetPrototypeOf}
        />
      </TableBody>
    </Table>
  );
}
