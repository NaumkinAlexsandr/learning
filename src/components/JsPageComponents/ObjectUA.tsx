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

export default function ObjectUA() {
  return (
    <Table id="js_object">
      <TableBody>
        <TableOneCol text={<h2>Об'єкти.</h2>} />
        <TableOneCol
          text={
            <p>
              Об'єкт є невпорядкованою колекцією властивостей, кожна з яких має
              ім'я та значення. Імена властивостей є рядками, тому можна
              сказати, що об'єкти відображають рядки значення. Крім своїх
              властивостей об'єкти можуть також успадковувати властивості інших
              об'єктів, відомих під назвою «прототипи».
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.assign()</h3>}
          text={<p>Дозволяє об'єднати об'єкти.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад assign"}
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
              Створює новий об'єкт із зазначеним прототипом та властивостями.
              <a href="#proto">Прототип об'єкта</a>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.getPrototypeOf()</h3>}
          text={
            <p>
              Здатний повернути прототип властивостей зазначеного об'єкта.
              <a href="#proto">Прототип об'єкта</a>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.setPrototypeOf()</h3>}
          text={
            <p>
              Здатний встановити прототип зазначеного об'єкта в інший об'єкт.
              <a href="#proto">Прототип об'єкта</a>
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.defineProperties()</h3>}
          text={
            <p>
              Визначає нові або змінює існуючі властивості, безпосередньо на
              об'єкті, повертаючи об'єкт. Визначає всі властивості, відповідні
              власним властивостям об'єкта props, на об'єкті obj.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад defineProperties"}
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
              Метод дозволяє точно додавати або змінювати властивості об'єкта.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад defineProperty"}
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
              Повертає масив власних властивостей зазначеного об'єкта у форматі
              [key, value], так само, як і в циклі.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад entries"}
          title={
            <p id="formated-text">
              <span>Отримуємо масив, у якому два масиви зі значеннями.</span>
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
              Приймає список пар ключ-значення та повертає новий об'єкт,
              властивості якого задаються цими записами.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад fromEntries"}
          title={
            <p id="formated-text">
              <span>Зробимо зворотну дію та перетворимо масиви на об'єкт.</span>
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
              Метод дозволяє переглянути точний опис властивості, що складається
              з строкового імені та дескриптора властивості.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.getOwnPropertyDescriptors()</h3>}
          text={
            <p>Повертає всі власні дескриптори властивостей даного об'єкта.</p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад getOwnPropertyDescriptors"}
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
              Повертає масив з усіма властивостями (незалежно від того,
              перераховані вони чи ні), знайденими безпосередньо у переданому
              об'єкті.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад getOwnPropertyNames"}
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
              Повертає масив усіх символьних властивостей, знайдених
              безпосередньо на переданому об'єкті.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад getOwnPropertySymbols"}
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
              Метод повертає true, якщо вказаний об'єкт має вказане властивість.
              Якщо властивість немає, повертає false.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад hasOwn"}
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
              Повертає логічне значення, що вказує, чи містить об'єкт вказана
              властивість.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад hasOwnProperty"}
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
          text={<p>Визначає, чи є два значення однаковими значеннями.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад is"}
          title={
            <p id="formated-text">
              У першому прикладі порівнюємо число 5 і рядок 5 отримуємо false. У
              другому прикладі порівнюємо два числа 5 і отримуємо true. <br />
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
              Визначає, чи є об'єкт розширюваним (тобто, чи можна до нього
              додавати нові властивості). <br />
              Object.isExtensible(obj) <br />
              Повертає false, якщо додавання властивостей заборонено, інакше
              true.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад isExtensible"}
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
              Дозволяє вам перевіряти, чи існує об'єкт у ланцюжку прототипів
              іншого об'єкта. prototypeObj.isPrototypeOf(object).
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад isPrototypeOf"}
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
              Повертає масив рядкових елементів, що відповідають іменам
              перерахованих властивостей.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад keys"}
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
          text={<p>Повертає масив значень перерахованих властивостей.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад values"}
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
          text={<p>Повертає примітивне значення зазначеного об'єкта.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад valueOf"}
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
          text={<p>Забороняє додавати нові властивості до об'єкта.</p>}
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад preventExtensions"}
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
              Метод може визначати, чи є вказана властивість в об'єкті
              перерахованим у циклі for...in, за винятком властивостей,
              успадкованих з ланцюжка прототипів.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад propertyIsEnumerable"}
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
              Повертає рядок, що представляє об'єкт. Цей метод призначений для
              перевизначення похідними об'єктами для цілей, специфічних для
              локалі.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад toLocaleString"}
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
          text={<p>Повертає рядок, що представляє об'єкт.</p>}
        />
        <TableTwoEqualCol
          title={<h3>.freeze()</h3>}
          text={
            <p>
              Заморожує об'єкт: це означає, що він запобігає додаванню нових
              властивостей до об'єкта, видалення та зміна існуючих властивостей
              також недоступне. <br />
              Забороняє додавати/вилучати/змінювати властивості. Встановлює
              configurable: false, writable: false для всіх існуючих
              властивостей.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад freeze"}
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
              "Визначає, чи об'єкт був заморожений.
              <br />
              Повертає true, якщо додавання/видалення/зміна властивостей
              заборонено і для всіх поточних властивостей встановлено
              configurable: false, writable: false.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад isFrozen"}
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
              Визначає, чи є об'єкт запечатаним. <br />
              Повертає true, якщо додавання/видалення властивостей заборонено і
              для всіх наявних властивостей встановлено configurable: false.
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>.seal()</h3>}
          text={
            <p>
              Запечатує об'єкт, запобігаючи додаванню нових властивостей до
              об'єкта і роблячи всі існуючі властивості не налаштовується.
              Встановлює configurable: false для всіх існуючих властивостей.
            </p>
          }
        />
        <ButtonExampleWithBtn
          titleButtonExample={"Приклад seal"}
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
