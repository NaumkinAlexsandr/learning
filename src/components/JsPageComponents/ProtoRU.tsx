import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  objectProtoConst,
  objectCreateConst,
  objectSetConst,
  objectGetConst,
} from "./ProtoConstPre.ts";
import { objectProto, objectCreate, objectSet, objectGet } from "./proto.js";

export default function ProtoRU() {
  return (
    <Table id="js_proto">
      <TableBody>
        <TableOneCol text={<h2>Прототип объекта.</h2>} />
        <TableOneCol
          text={
            <p>
              Объекты в JavaScript можно организовать в цепочки так, чтобы
              свойство, не найденное в одном объекте, автоматически искалось бы
              в другом.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>__proto__</h3>}
          text={
            <p>
              Если у объекта присутствует ссылка __proto__ ведущая на другой
              объект, то когда будет вызвано какое-то свойство у данного объекта
              и оно не будет найдено, тогда поиск перейдёт по цепочке к
              связанному объекту через __proto__ . <br />
              На данный момент __proto__ считается устаревшим, и по стандарту
              оно должно поддерживаться только браузерами.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример proto"}
          title={
            <p id="formated-text">
              <span>
                Рассмотрим пример: есть два объекта people и masha. Когда мы
                будем вызвать masha.eats - то мы его не найдём и перейдём по
                цепочке в people.
              </span>
              <br />
              <br />
              <span id="jsProto"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectProtoConst}</code>
            </pre>
          }
          onClick={objectProto}
        />
        <TableTwoEqualCol
          title={<h3>Object.create (proto, descriptors)</h3>}
          text={
            <p>Создаёт новый объект с указанным прототипом и свойствами.</p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример create"}
          title={
            <p id="formated-text">
              <span>
                Рассмотрим пример: создаём новый объект masha с прототипом
                people.
              </span>
              <br />
              <br />
              <span id="jsObjectCreate"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateConst}</code>
            </pre>
          }
          onClick={objectCreate}
        />
        <TableTwoEqualCol
          title={<h3>Object.setPrototypeOf (object, proto)</h3>}
          text={
            <p>
              Способен установить прототип указанного объекта в другой объект.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример setPrototypeOf"}
          title={
            <p id="formated-text">
              <span>
                Рассмотрим пример: передаём в объект masha свойство sport и
                прототип объекта people.
              </span>
              <br />
              <br />
              <span id="jsObjectSet"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectSetConst}</code>
            </pre>
          }
          onClick={objectSet}
        />
        <TableTwoEqualCol
          title={<h3>Object.getPrototypeOf (object)</h3>}
          text={<p>Способен вернуть прототип свойств указанного объекта.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример getPrototypeOf"}
          title={
            <p id="formated-text">
              <span>
                Рассмотрим пример: передаём в объект masha свойство sport и
                прототип объекта people.
              </span>
              <br />
              <br />
              <span id="jsObjectGet"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectGetConst}</code>
            </pre>
          }
          onClick={objectGet}
        />
      </TableBody>
    </Table>
  );
}
