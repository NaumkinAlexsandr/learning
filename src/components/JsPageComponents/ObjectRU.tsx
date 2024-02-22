import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {
  objAssignCode,
  definePropertiesCode,
  definePropertyCode,
  objEntriesCode,
  objFromEntriesCode,
  objGOPDsCode,
  objGOPNCode,
  objGOPSCode,
  objhasOwnCode,
  objhasOwnPropertyCode,
  objIsCode,
  objIsExtensibleCode,
  objIsPrototypeOfCode,
  objKeysCode,
  objValuesCode,
  objValuesOfCode,
  objPreventExtensionsCode,
  objPropertyIsEnumerableCode,
  objTLSCode,
  objFreezeCode,
  objIsFrozenCode,
  objIsSealedCode,
} from "./ObjectConstPre.ts";
import {
  objAssign,
  defineProperties,
  defineProperty,
  objEntries,
  objFromEntries,
  objGOPDs,
  objGOPN,
  objGOPS,
  objhasOwn,
  objhasOwnProperty,
  objIs,
  objIsExtensible,
  objIsPrototypeOf,
  objKeys,
  objValues,
  objValuesOf,
  objPreventExtensions,
  objPropertyIsEnumerable,
  objTLS,
  objFreeze,
  objIsFrozen,
  objIsSealed,
} from "./object.js";

export default function ObjectRU() {
  return (
    <Table id="js_object">
      <TableBody>
        <TableOneCol text={<h2>Объекты.</h2>} />
        <TableOneCol
          text={
            <p>
              Объект является неупорядоченной коллекцией свойств, каждое из
              которых имеет имя и значение. Имена свойств являются строками,
              поэтому можно сказать, что объекты отображают строки в значения.
              Помимо собственных свойств объекты могут также наследовать
              свойства от других объектов, известных под названием «прототипы».
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.assign()</h3>}
          text={<p>Позволяет объединить объекты.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример assign"}
          title={
            <p id="formated-text">
              <span id="jsobjAssign"></span>
            </p>
          }
          text={
            <pre>
              <code>{objAssignCode}</code>
            </pre>
          }
          onClick={objAssign}
        />
        <TableTwoEqualCol
          title={<h3>.create()</h3>}
          text={
            <p>
              Создаёт новый объект с указанным прототипом и свойствами.
              <a href="#proto">Прототип объекта</a>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.getPrototypeOf()</h3>}
          text={
            <p>
              Способен вернуть прототип свойств указанного объекта.
              <a href="#proto">Прототип объекта</a>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.setPrototypeOf()</h3>}
          text={
            <p>
              Способен установить прототип указанного объекта в другой объект.
              <a href="#proto">Прототип объекта</a>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.defineProperties()</h3>}
          text={
            <p>
              Определяет новые или изменяет существующие свойства,
              непосредственно на объекте, возвращая этот объект. Определяет все
              свойства, соответствующие собственным свойствам объекта props, на
              объекте obj.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример defineProperties"}
          title={
            <p id="formated-text">
              <span id="defineProperties"></span>
            </p>
          }
          text={
            <pre>
              <code>{definePropertiesCode}</code>
            </pre>
          }
          onClick={defineProperties}
        />
        <TableTwoEqualCol
          title={<h3>.defineProperty()</h3>}
          text={
            <p>
              Метод позволяет точно добавлять или изменять свойства объекта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример defineProperty"}
          title={
            <p id="formated-text">
              <span id="defineProperty"></span>
            </p>
          }
          text={
            <pre>
              <code>{definePropertyCode}</code>
            </pre>
          }
          onClick={defineProperty}
        />
        <TableTwoEqualCol
          title={<h3>.entries()</h3>}
          text={
            <p>
              Возвращает массив собственных перечисляемых свойств указанного
              объекта в формате [key, value], в том же порядке, что и в цикле.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример entries"}
          title={
            <p id="formated-text">
              <span>Получаем массив, в котором два массива со значениями.</span>
              <br />
              <span id="jsoobjFromEntries"></span>
            </p>
          }
          text={
            <pre>
              <code>{objEntriesCode}</code>
            </pre>
          }
          onClick={objEntries}
        />
        <TableTwoEqualCol
          title={<h3>.fromEntries()</h3>}
          text={
            <p>
              Принимает список пар ключ-значение и возвращает новый объект,
              свойства которого задаются этими записями.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример fromEntries"}
          title={
            <p id="formated-text">
              <span>
                Сделаем обратное действие и преобразуем массивы в объект.
              </span>
              <br />
              <span id="jsoobjFromEntriesTwo"></span>
            </p>
          }
          text={
            <pre>
              <code>{objFromEntriesCode}</code>
            </pre>
          }
          onClick={objFromEntries}
        />
        <TableTwoEqualCol
          title={<h3>.getOwnPropertyDescriptor()</h3>}
          text={
            <p>
              Метод позволяет просмотреть точное описание свойства состоящего из
              строкового имени и дескриптора свойства.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.getOwnPropertyDescriptors()</h3>}
          text={
            <p>
              Возвращает все собственные дескрипторы свойств данного объекта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример getOwnPropertyDescriptors"}
          title={
            <p id="formated-text">
              <span id="jsobjGOPDs"></span>
            </p>
          }
          text={
            <pre>
              <code>{objGOPDsCode}</code>
            </pre>
          }
          onClick={objGOPDs}
        />
        <TableTwoEqualCol
          title={<h3>.getOwnPropertyNames()</h3>}
          text={
            <p>
              Возвращает массив со всеми свойствами (независимо от того,
              перечисляемые они или нет), найденными непосредственно в
              переданном объекте.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример getOwnPropertyNames"}
          title={
            <p id="formated-text">
              <span id="jsobjGOPN"></span>
            </p>
          }
          text={
            <pre>
              <code>{objGOPNCode}</code>
            </pre>
          }
          onClick={objGOPN}
        />
        <TableTwoEqualCol
          title={<h3>.getOwnPropertySymbols()</h3>}
          text={
            <p>
              Возвращает массив всех символьных свойств, найденных
              непосредственно на переданном объекте.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример getOwnPropertySymbols"}
          title={
            <p id="formated-text">
              <span id="jsobjGOPS"></span>
            </p>
          }
          text={
            <pre>
              <code>{objGOPSCode}</code>
            </pre>
          }
          onClick={objGOPS}
        />
        <TableTwoEqualCol
          title={<h3>.hasOwn()</h3>}
          text={
            <p>
              Метод возвращает true, если указанный объект имеет указанное
              свойство. Если свойство не существует, возвращает false.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример hasOwn"}
          title={
            <p id="formated-text">
              <span id="jsobhasOwn"></span>
            </p>
          }
          text={
            <pre>
              <code>{objhasOwnCode}</code>
            </pre>
          }
          onClick={objhasOwn}
        />
        <TableTwoEqualCol
          title={<h3>.hasOwnProperty()</h3>}
          text={
            <p>
              Возвращает логическое значение, указывающее, содержит ли объект
              указанное свойство.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример hasOwnProperty"}
          title={
            <p id="formated-text">
              <span id="jsobjhasOwnProperty"></span>
            </p>
          }
          text={
            <pre>
              <code>{objhasOwnPropertyCode}</code>
            </pre>
          }
          onClick={objhasOwnProperty}
        />
        <TableTwoEqualCol
          title={<h3>.is()</h3>}
          text={
            <p>Определяет, являются ли два значения одинаковыми значениями.</p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример is"}
          title={
            <p id="formated-text">
              В первом примере сравниваем число 5 и строку 5 получаем false. Во
              втором примере сравниваем два числа 5 и получаем true. <br />
              <span id="jsobjIs"></span>
            </p>
          }
          text={
            <pre>
              <code>{objIsCode}</code>
            </pre>
          }
          onClick={objIs}
        />
        <TableTwoEqualCol
          title={<h3>.isExtensible()</h3>}
          text={
            <p>
              Определяет, является ли объект расширяемым (то есть, можно ли к
              нему добавлять новые свойства). <br />
              Object.isExtensible(obj) <br />
              Возвращает false, если добавление свойств запрещено, иначе true.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример isExtensible"}
          title={
            <p id="formated-text">
              <span id="jsobjIsExtensible"></span>
            </p>
          }
          text={
            <pre>
              <code>{objIsExtensibleCode}</code>
            </pre>
          }
          onClick={objIsExtensible}
        />
        <TableTwoEqualCol
          title={<h3>.isPrototypeOf()</h3>}
          text={
            <p>
              Позволяет вам проверять, существует ли объект в цепочке прототипов
              другого объекта. prototypeObj.isPrototypeOf(object).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример isPrototypeOf"}
          title={
            <p id="formated-text">
              <span id="jsobjIsPrototypeOf"></span>
            </p>
          }
          text={
            <pre>
              <code>{objIsPrototypeOfCode}</code>
            </pre>
          }
          onClick={objIsPrototypeOf}
        />
        <TableTwoEqualCol
          title={<h3>.keys()</h3>}
          text={
            <p>
              Возвращает массив строковых элементов, соответствующих именам
              перечисляемых свойств.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример keys"}
          title={
            <p id="formated-text">
              <span id="jsobjKeys"></span>
            </p>
          }
          text={
            <pre>
              <code>{objKeysCode}</code>
            </pre>
          }
          onClick={objKeys}
        />
        <TableTwoEqualCol
          title={<h3>.values()</h3>}
          text={<p>Возвращает массив значений перечисляемых свойств.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример values"}
          title={
            <p id="formated-text">
              <span id="jsobjValues"></span>
            </p>
          }
          text={
            <pre>
              <code>{objValuesCode}</code>
            </pre>
          }
          onClick={objValues}
        />
        <TableTwoEqualCol
          title={<h3>.valueOf()</h3>}
          text={<p>Возвращает примитивное значение указанного объекта.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример valueOf"}
          title={
            <p id="formated-text">
              <span id="jsobjValuesOf"></span>
            </p>
          }
          text={
            <pre>
              <code>{objValuesOfCode}</code>
            </pre>
          }
          onClick={objValuesOf}
        />
        <TableTwoEqualCol
          title={<h3>.preventExtensions()</h3>}
          text={<p>Запрещает добавлять новые свойства в объект.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример preventExtensions"}
          title={
            <p id="formated-text">
              <span id="jsobjPreventExtensions"></span>
            </p>
          }
          text={
            <pre>
              <code>{objPreventExtensionsCode}</code>
            </pre>
          }
          onClick={objPreventExtensions}
        />
        <TableTwoEqualCol
          title={<h3>.propertyIsEnumerable()</h3>}
          text={
            <p>
              Метод может определять, является ли указанное свойство в объекте
              перечисляемым в цикле for...in, за исключением свойств,
              унаследованных из цепочки прототипов.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример propertyIsEnumerable"}
          title={
            <p id="formated-text">
              <span id="jsobjPropertyIsEnumerable"></span>
            </p>
          }
          text={
            <pre>
              <code>{objPropertyIsEnumerableCode}</code>
            </pre>
          }
          onClick={objPropertyIsEnumerable}
        />
        <TableTwoEqualCol
          title={<h3>.toLocaleString()</h3>}
          text={
            <p>
              Возвращает строку, представляющую объект. Этот метод предназначен
              для переопределения производными объектами для целей, специфичных
              для локали.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример toLocaleString"}
          title={
            <p id="formated-text">
              <span id="jsobjTLS"></span>
            </p>
          }
          text={
            <pre>
              <code>{objTLSCode}</code>
            </pre>
          }
          onClick={objTLS}
        />
        <TableTwoEqualCol
          title={<h3>.toString()</h3>}
          text={<p>Возвращает строку, представляющую объект.</p>}
        />
        <TableTwoEqualCol
          title={<h3>.freeze()</h3>}
          text={
            <p>
              Замораживает объект: это значит, что он предотвращает добавление
              новых свойств к объекту, удаление и изменение существующих свойств
              также не доступно. <br />
              Запрещает добавлять/удалять/изменять свойства. Устанавливает
              configurable: false, writable: false для всех существующих
              свойств.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример freeze"}
          title={
            <p id="formated-text">
              <span id="jsobjFreeze"></span>
            </p>
          }
          text={
            <pre>
              <code>{objFreezeCode}</code>
            </pre>
          }
          onClick={objFreeze}
        />
        <TableTwoEqualCol
          title={<h3>.isFrozen()</h3>}
          text={
            <p>
              "Определяет, был ли объект заморожен. <br />
              Возвращает true, если добавление/удаление/изменение свойств
              запрещено, и для всех текущих свойств установлено configurable:
              false, writable: false.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример isFrozen"}
          title={
            <p id="formated-text">
              <span id="jsobIsFrozen"></span>
            </p>
          }
          text={
            <pre>
              <code>{objIsFrozenCode}</code>
            </pre>
          }
          onClick={objIsFrozen}
        />
        <TableTwoEqualCol
          title={<h3>.isSealed()</h3>}
          text={
            <p>
              Определяет, является ли объект запечатанным. <br />
              Возвращает true, если добавление/удаление свойств запрещено и для
              всех существующих свойств установлено configurable: false.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.seal()</h3>}
          text={
            <p>
              Запечатывает объект, предотвращая добавление новых свойств к
              объекту и делая все существующие свойства не настраиваемыми.
              Устанавливает configurable: false для всех существующих свойств.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Пример seal"}
          title={
            <p id="formated-text">
              <span id="jsobIsSealed"></span>
            </p>
          }
          text={
            <pre>
              <code>{objIsSealedCode}</code>
            </pre>
          }
          onClick={objIsSealed}
        />
      </TableBody>
    </Table>
  );
}
