import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import { typeofTs, instanceofTs, keyofTs } from "./TsConstPre.tsx";

export default function OperatorsRU() {
  return (
    <>
      <Table id="ts_operators">
        <TableBody>
          <TableOneCol text={<h2>Operators - Операторы.</h2>} />
          <TableOneCol
            text={
              <p>
                <b>typeof</b> – это оператор JavaScript, который позволяет
                определить тип переменной. В TypeScript такой оператор также
                поддерживается, но с некоторыми отличиями. В TypeScript typeof
                может использоваться для проверки типов переменных, а также
                определение типов функций.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример typeof"}
            title={
              <>
                <pre>
                  <code>{typeofTs}</code>
                </pre>
                <p id="formated-text">
                  <br />В этом примере мы определяем три переменных: myString,
                  myNumber и myFunction. Затем мы используем оператор typeof для
                  получения типа каждой переменной и выводим его в консоль.
                  <br /> Оператор typeof может быть полезным, когда вы хотите
                  проверить тип переменной или функции при выполнении программы.
                  Например, вы можете использовать оператор typeof для
                  проверьте, является ли переменная функцией, прежде чем вызвать
                  ее.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>instanceof</b> - используется для проверки, есть ли объект
                экземпляром определенного класса. Он возвращает true, если
                объект есть экземпляром класса и false, если нет. В TypeScript
                instanceof может использоваться только для проверки типов,
                определенных в текущем модуле.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример instanceof"}
            title={
              <>
                <pre>
                  <code>{instanceofTs}</code>
                </pre>
                <p id="formated-text">
                  <br />В первом выражении человек instanceof Person
                  проверяется, ли объект person экземпляром класса Person.
                  <br /> Второе выражение Person instanceof Object проверяется,
                  является объект person экземпляром класса Object, который
                  является родительским классом для всех объектов JavaScript.
                  <br /> В третьем выражении persona instanceof String
                  проверяется, есть ли объект person экземпляром класса String,
                  который отсутствует в JavaScript. <br />
                  Таким образом, в этом коде мы создаем экземпляр класса Person,
                  проверяем, является ли он экземпляром класса Person,
                  экземпляром класса Object и не является экземпляром класса
                  String.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>keyof</b> – используется для получения типа ключей объекта.
                Он позволяет определить тип ключей объекта, который можно
                использовать для проверки типов данных при компиляции.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример keyof"}
            title={
              <>
                <pre>
                  <code>{keyofTs}</code>
                </pre>
                <p id="formated-text">
                  <br />
                  Этот код определяет интерфейс Person, содержащий две свойства:
                  name типа string и age типа number. Затем определен тип
                  PersonKeys, который является объединением всех ключей с
                  интерфейс Person. <br /> Далее создается объект person ,
                  соответствующий интерфейсу Person. <br /> Функция
                  printPersonKey принимает один аргумент key типа PersonKeys.
                  Внутри функции используется оператор in, который проверяет,
                  содержит ли объект person свойство с указанным ключом. Если
                  свойство существует, то функция выводит его значение консоль.
                  <br /> В конце кода вызывается функция printPersonKey дважды с
                  разными аргументами: 'name' и 'age'. Однако, если вы вызываете
                  функцию с аргументом 'gender', то TypeScript выдаст ошибку,
                  поскольку 'gender' не является ключом с интерфейс Person.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <ul>
                  Различия между instanceof и keyof
                  <li>
                    instanceof используется для проверки экземпляров классов, в
                    то время как keyof используется для получения типа ключей
                    объекта
                  </li>
                  <li>
                    instanceof может быть использован для проверки экземпляров
                    любых классов, включая классы, которые не были определены в
                    текущей области видимости, в то время как keyof может быть
                    использован только для объектов, определенных в текущей
                    области видимости.
                  </li>
                  <li>
                    keyof может быть использован для получения типа ключей
                    любого объекта, включая объекты, не определенные в текущей
                    области видимости, тогда как instanceof может быть
                    использован только для объектов, созданных в текущей области
                    видимости.
                  </li>
                </ul>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
