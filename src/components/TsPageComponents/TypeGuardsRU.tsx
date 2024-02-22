import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import {
  typeGuards,
  typeGuardsTwo,
  typeGuardsThree,
  typeGuardsFour,
} from "./TsConstPre.tsx";

export default function TypeGuardsRU() {
  return (
    <>
      <Table id="ts_typeGuards">
        <TableBody>
          <TableOneCol text={<h2>Type Guards - Защитники типа.</h2>} />
          <TableOneCol
            text={
              <p>
                <b>Type Guards</b> - это функции, которые позволяют определить,
                определенный тип данных является определенным типом. Они
                используются для проверки типов данных во время выполнения
                программы, а не только под время компиляции.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Type Guards могут быть использованы для проверки типов данных в
                условных операторах, методах и функциях, а также для проверки
                типов данных в функциях обратного вызова. Они могут быть
                полезными для упрощения кода и обеспечения более безопасной
                работы с типами данных.
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                1. typeof Type Guard - позволяет проверить тип значения
                переменной с помощью оператора typeof. Он используется для
                определение конкретного типа значения и позволяет использовать
                соответствующие операции доступны только для этого типа.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример typeof"}
            title={
              <>
                <pre>
                  <code>{typeGuards}</code>
                </pre>
                <p id="formated-text">
                  Этот код определяет функцию isStringOrNumber, которая
                  приобретает значение value типа string number и возвращает
                  true, если тип value является string или number, и false в
                  противном случае. Функция использует оператор typeof для
                  проверки типа value. <br />
                  Затем код определяет функцию myFunction, которая приобретает
                  значение value типа string | номер. Функция вызывает функцию
                  isStringOrNumber для проверки типа value. Если функция
                  isStringOrNumber возвращает true, то функция выводит сообщение
                  "Выход является string или number" консоль. Если функция
                  isStringOrNumber возвращает false, то функция выводит
                  сообщение "Выход не является string или number" консоль.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                2. instanceof Type Guard - позволяет проверить, есть ли значение
                переменной экземпляром определенного класса. Он используется для
                определение типа объекта и позволяет использовать методы и
                свойства доступны только для этого класса.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример instanceof"}
            title={
              <>
                <pre>
                  <code>{typeGuardsTwo}</code>
                </pre>
                <p id="formated-text">
                  Этот код определяет класс Person со свойством name и
                  конструктором, который принимает имя и устанавливает его как
                  свойство name. Затем код определяет функцию isPerson, которая
                  приобретает значение value типа unknown и возвращает true если
                  значение является экземпляром класса Person, и false в
                  противном случае. Функция использует оператор instanceof для
                  проверки, есть ли значение экземпляром класса Person.
                  <br />
                  Затем код создает объект obj типа unknown, содержащий
                  экземпляр класса Person с именем Джон. Затем код проверяет,
                  есть ли объект obj экземпляром класса Person, используя
                  функцию isPerson. Если объект obj является экземпляром класса
                  Person, то код выводит сообщение "obj is an instance of
                  Person" и значение свойства name объекта obj в консоль. В
                  результате выполнение этого кода в консоль будет выведено
                  сообщение "obj is an instance of Person" и значение свойства
                  name объекта obj, равное Джону.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                3. in Type Guard - позволяет проверить наличие определенных
                свойств объекта. Он используется для определения, объект
                содержит определенные свойства, и позволяет использовать эти
                свойства безопасным образом.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример in"}
            title={
              <>
                <pre>
                  <code>{typeGuardsThree}</code>
                </pre>
                <p id="formated-text">
                  Этот код определяет интерфейс Car с двумя свойствами brand и
                  model. Затем код создает объект vehicle типа Car со значениями
                  Toyota и Camry.
                  <br /> Затем код определяет функцию isCar, приобретающую
                  значение value типа unknown и возвращает true если значение
                  является объектом типа Car, и false в противном случае.
                  Функция использует оператор as для приведения типа value к
                  типу Car, а затем проверяет, определены ли свойства brand и
                  model объекта value. <br /> Затем код проверяет, есть ли
                  объект vehicle объектом типа Car, используя функцию isCar.
                  Если объект vehicle является объектом типа Car, то код выводит
                  сообщение "vehicle is a Car" и значение свойств brand и model
                  объекта vehicle в консоль. <br /> В результате выполнения
                  этого кода в консоль будет выведено сообщение "vehicle is a
                  Car" и значение свойств brand и model объекта vehicle.
                </p>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                4. Literal Type Guard - позволяет проверить, значение переменной
                конкретным литералом типа. Он используется для определения
                точного значения, которое может приобретать переменная, и
                позволяет использовать соответствующие методы или свойства,
                доступные только для этого определенного значения.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример literal"}
            title={
              <>
                <pre>
                  <code>{typeGuardsFour}</code>
                </pre>
                <p id="formated-text">
                  Этот код определяет тип Color, который может быть либо "red",
                  либо "blue" или "green". Затем код определяет функцию isColor,
                  которая приобретает значение value типа unknown и возвращает
                  true если Значение является одним из типов Color, и false в
                  противном случае. Функция проверяет, равно ли значение одному
                  из типов Color, используя оператор === . Затем код определяет
                  функцию printColor, которая приобретает значение color типа
                  Color и выводит сообщение "The color is" и значение color в
                  консоль.
                  <br /> Затем код создает переменную color типа unknown,
                  содержащую значение "red". Затем код проверяет, есть ли
                  значение переменной color одним из типов Color, используя
                  функцию isColor. Если значение переменной color является одним
                  из типов Color, то код вызывает функцию printColor с
                  аргументом color. Если значение переменной color не является
                  одним из типов Color, код выводит сообщение "Invalid color" в
                  консоль.
                </p>
              </>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
