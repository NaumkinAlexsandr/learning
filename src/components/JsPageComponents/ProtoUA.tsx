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

export default function ProtoUA() {
  return (
    <Table id="js_proto">
      <TableBody>
        <TableOneCol text={<h2>Прототип об'єкта.</h2>} />
        <TableOneCol
          text={
            <p>
              Об'єкти JavaScript можна організувати в ланцюжка так, щоб
              властивість, не знайдена в одному об'єкті, автоматично шукалося б
              в іншому.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>__proto__</h3>}
          text={
            <p>
              Якщо об'єкт має посилання __proto__, що веде на інший об'єкт, то
              коли буде викликана якась властивість у даного об'єкта і воно не
              буде знайдено, тоді пошук перейде по ланцюжку до пов'язаного
              об'єкту через __proto__. <br />
              На даний момент __proto__ вважається застарілим, і за стандартом
              воно має підтримуватись тільки браузерами.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад proto"}
          title={
            <p id="formated-text">
              <span>
                Розглянемо приклад: є два об'єкти people і masha. Коли ми будемо
                викликати masha.eats - ми його не знайдемо і перейдемо по
                ланцюжок в людях.
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
            <p>
              Створює новий об'єкт із зазначеним прототипом та властивостями.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад create"}
          title={
            <p id="formated-text">
              <span>
                Розглянемо приклад: створюємо новий об'єкт masha із прототипом
                людей.
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
              Здатний встановити прототип зазначеного об'єкта в інший об'єкт.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад setPrototypeOf"}
          title={
            <p id="formated-text">
              <span>
                Розглянемо приклад: передаємо в об'єкт masha властивість sport
                та прототип людей.
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
          text={
            <p>Здатний повернути прототип властивостей зазначеного об'єкта.</p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад getPrototypeOf"}
          title={
            <p id="formated-text">
              <span>
                Розглянемо приклад: передаємо в об'єкт masha властивість sport
                та прототип людей.
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
