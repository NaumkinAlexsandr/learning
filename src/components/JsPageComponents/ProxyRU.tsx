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

export default function ProxyRU() {
  return (
    <Table id="js_proxy">
      <TableBody>
        <TableOneCol text={<h2>Proxy.</h2>} />
        <TableOneCol
          text={
            <p>
              Прокси это своеобразная обёртка в которую помещаются другие
              объекты. При этом можно производить различные манипуляции
              (добавлять, изменять, удалять) с свойствами. <br />
              let proxy = new Proxy(target, handler);
              <br />
              target — объект (массив, функция и т.д.) для которого создаётся
              прокси. <br />
              handler - тут описываются ловушки которые необходимы для данного
              прокси.
            </p>
          }
        />
        <TableOneCol text={<h3>Функции обработчика.</h3>} />
        <TableTwoEqualCol
          title={<h3>.apply()</h3>}
          text={
            <p>
              apply(target, thisArg, argArray) <br />
              thisArg – это контекст this. <br />
              argArray – список аргументов.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy apply"}
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
              newTarget - конструктор, который был первоначально вызван.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy construct"}
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
              descriptor - дескриптор определяемого или изменяемого свойства.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy defineProperty"}
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
          text={<p>Позволяет удалить ненужное свойства.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy deleteProperty"}
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
              Является ловушкой для получения значения свойства. <br />
              get(target, property, receiver) <br />
              target – это оригинальный объект, который передавался первым
              аргументом в конструктор new Proxy. <br />
              property – имя свойства. <br />
              receiver – это сам объект прокси (или наследующий от него объект).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy get"}
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
              Является ловушкой и позволяет просмотреть точное описание свойства
              состоящего из строкового имени и дескриптора свойства.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy getOwnPropertyDescriptor"}
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
              Является ловушкой способеной вернуть прототип свойств указанного
              объекта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy getPrototypeOf"}
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
              Возвращает булевое значение. Если свойства есть true и false если
              свойства нет. <br />
              has(target, property)
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy has"}
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
              Является ловушкой для isExtensible. Определяет, является ли объект
              расширяемым (то есть, можно ли к нему добавлять новые свойства).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy isExtensible"}
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
              Возвращает массив всех собственных свойств (не унаследованных)
              целевого объекта, включая неперечисляемые свойства.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy ownKeys"}
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
              Метод используется для предотвращения добавления новых свойств к
              объекту. Когда этот метод вызывается на объекте, он делает объект
              нерасширяемым, что означает, что нельзя добавить новые свойства к
              объекту.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy preventExtensions"}
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
              Данная ловушка срабатывает когда необходимо написать какое то
              свойство. <br />
              set(target, property, value, receiver) <br />
              target – это оригинальный объект, который передавался первым
              аргументом в конструктор new Proxy. <br />
              property – имя свойства. <br />
              value – значение свойства. <br />
              receiver – это сам объект прокси (или наследующий от него объект).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy set"}
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
              Это функция JavaScript, которая используется для установки
              прототипа (прототипного объекта) для указанного объекта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример Proxy setPrototypeOf"}
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
