import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  objectCreateValueCode,
  objectCreateEnumerableCode,
  objectCreateWritableCode,
  objectCreateConfigurableCode,
  objectCreateGetCode,
  objectCreateSetCode,
  objectCreateValueCode2,
} from "./DescriptorConstPre.ts";
import {
  objectCreateValue,
  objectCreateEnumerable,
  objectCreateWritable,
  objectCreateConfigurable,
  objectCreateGet,
  objectCreateSet,
} from "./descriptor.js";

export default function DescriptorRU() {
  return (
    <Table id="js_descriptor">
      <TableBody>
        <TableOneCol text={<h2>Дескриптор свойства.</h2>} />
        <TableTwoEqualCol
          title={<h3>value</h3>}
          text={
            <p>
              Значение, ассоциированное со свойством (только в дескрипторе
              данных).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример value"}
          title={
            <p id="formated-text">
              <span>
                Рассмотрим пример: создаём новый объект people и передаём в него
                совойства name и age.
              </span>
              <br /> <br />
              <span id="jsObjectCreateValue"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateValueCode}</code>
            </pre>
          }
          onClick={objectCreateValue}
        />
        <TableOneCol
          text={
            <p>
              При этом данные ключи не будут доступны при итерации по ключам.
              <br />
              <pre>
                <code>{objectCreateValueCode2}</code>
              </pre>
              <br />
              Это происходит по тому что по умолчанию дескриптор enumerable:
              false
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>enumerable</h3>}
          text={
            <p>
              Определяет, просматривается ли свойство в цикле for...in и методом
              Object.keys() или нет.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример enumerable"}
          title={
            <p id="formated-text">
              <span>
                Рассмотрим пример: переключим дескриптор enumerable: true и
                выполним итерацию по ключам.
              </span>
              <br /> <br />
              <span id="jsObjectCreateEnumerable"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateEnumerableCode}</code>
            </pre>
          }
          onClick={objectCreateEnumerable}
        />
        <TableTwoEqualCol
          title={<h3>writable</h3>}
          text={
            <p>
              По умолчанию свойства установлен в false и ему невозможно
              присвоить новое значение.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример writable"}
          title={
            <p id="formated-text">
              <span>
                Рассмотрим пример: допустим мы хотим поменять имя и возраст, но
                мы не можем сделать этого, по умолчанию writable: false
                Переключим дескриптор writable: true для имени, а для возраста
                оставим false.
              </span>
              <br /> <br />
              <span id="jsObjectCreateWritable"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateWritableCode}</code>
            </pre>
          }
          onClick={objectCreateWritable}
        />
        <TableTwoEqualCol
          title={<h3>configurable</h3>}
          text={
            <p>
              Одновременно контролирует, может ли свойство быть удалено из
              объекта и могут ли быть изменены его атрибуты (кроме контроля
              изменения атрибута writable).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример configurable"}
          title={
            <p id="formated-text">
              <span>
                Рассмотрим пример: попробуем удалить имя и возраст у объекта.
                Для этого переключим configurable: true для возроста, а для
                имени оставим configurable: false. В итоге удалится только
                возраст.
              </span>
              <br />
              <br />
              <span id="jsObjectCreateConfigurable"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateConfigurableCode}</code>
            </pre>
          }
          onClick={objectCreateConfigurable}
        />
        <TableTwoEqualCol
          title={<h3>get</h3>}
          text={
            <p>
              Функция, возвращающая значение свойства, либо undefined, если
              такая функция отсутствует (только в дескрипторе доступа).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример get"}
          title={
            <p id="formated-text">
              <span>
                Рассмотрим пример: с помощью гетера попробуем посчитать когда
                человек родился.
              </span>
              <br />
              <br />
              <span id="jsObjectCreateGet"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateGetCode}</code>
            </pre>
          }
          onClick={objectCreateGet}
        />
        <TableTwoEqualCol
          title={<h3>set</h3>}
          text={
            <p>
              Функция, изменяющая значение свойства, либо undefined, если такая
              функция отсутствует (только в дескрипторе доступа).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример set"}
          title={
            <p id="formated-text">
              <span>
                Рассмотрим пример: с помощью сетера попробуем изменить дату
                рождения. Но если вывести people.born, то увидим что осталось
                1992. Всё по тому что сетер не переназначает значение.
              </span>
              <br />
              <br />
              <span id="jsObjectCreateSet"></span>
            </p>
          }
          text={
            <pre>
              <code>{objectCreateSetCode}</code>
            </pre>
          }
          onClick={objectCreateSet}
        />
      </TableBody>
    </Table>
  );
}
