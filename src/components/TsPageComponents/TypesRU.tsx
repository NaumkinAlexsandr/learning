import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  typeObjectJs,
  typeObjectTs,
  typeArrayJs,
  typeArrayTsRU,
  typeAnyJs,
  typeAnyTsRU,
  typeUnknowJs,
  typeUnknowTs,
  typeVoidJs,
  typeVoidTs,
  typeNeverJs,
  typeNeverTs,
  typeFuncJs,
  typeFuncTs,
  typeEnumJs,
  typeEnumTs,
  typeAliasJs,
  typeAliasTs,
  typeInterfaceJs,
  typeInterfaceTs,
  typeUnionJs,
  typeUnionTs,
} from "./TsConstPre.tsx";

export default function TypesRU() {
  return (
    <>
      <Table id="ts_type">
        <TableBody>
          <TableOneCol text={<h2>Types - Типы данных.</h2>} />
          <TableTwoEqualCol
            title={<h3>JavaScript</h3>}
            text={<h3>TypeScript</h3>}
          />
          <TableOneCol
            text={
              <p>
                <b>string</b> - используется для представления текстовой
                информации.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const str = "Hello";</p>}
            text={<p>const str: string = "Hello";</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>number</b> - используется для представления числовой
                информации. Это может быть как целое число, так и число с
                плавающей запятой.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const numb = 42;</p>}
            text={<p>const numb: number = 42;</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>boolean</b> - используется для представления логических
                значений True (истина) или False (ошибка).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const isLoading = false;</p>}
            text={<p>const isLoading: boolean = false;</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>bigint</b> - это целый тип, который может представлять числа,
                которые не могут быть представлены с помощью типа number. bigint
                используется для работы с большими целыми числами, которые могут
                быть очень большими, чем тип number.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const bigIntValue = 12345678901234567890n;</p>}
            text={<p>const bigIntValue: bigint = 12345678901234567890n;</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>symbol</b> - это тип данных, являющийся уникальным
                идентификатором, который может быть использован для
                идентификации свойств объекта.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const symbolValue = Symbol("mySymbol");</p>}
            text={<p>const symbolValue: symbol = Symbol("mySymbol");</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>null</b> - это тип данных, не имеющий значения. null
                используется обозначение того, что значение нет определенного
                значение.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<p>const nullValue = null;</p>}
            text={<p>const nullValue: null = null;</p>}
          />
          <TableOneCol
            text={
              <p>
                <b>undefined</b> - это тип данных, составляющий неопределенное
                значение. undefined используется для обозначения того, что
                значение не было определено или не имеет определенного значения.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                let myVariable; <br />
                console.log(myVariable); // undefined
              </p>
            }
            text={
              <p>
                let myVariable: string; <br /> console.log(myVariable); //
                undefined
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>object</b> - используется для представления сложных структур
                данных, содержащих ключ-значение пара.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeObjectJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeObjectTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>array</b> - используется для хранения набора значений одного
                типа.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeArrayJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeArrayTsRU}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>any</b> - используется для обозначения значений, которые
                могут иметь любой тип данных. Использование типа any в TS
                позволяет нам миновать проверку типов во время компиляции и
                обеспечивает большую гибкость при программировании. Однако,
                использование типа "any" может привести к проблемам с
                типизацией, увеличение количества ошибок и понижение
                производительности разработки.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeAnyJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeAnyTsRU}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>unknow</b> - это тип данных, представляющий значение, которое
                может быть любого типа данных. unknown используется для
                обозначение того, что значение может быть любого типа данных, но
                нет определенного типа.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeUnknowJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeUnknowTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>void</b> - это тип данных, не имеющий никакого значения. void
                используется для функций, не возвращающих значение.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeVoidJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeVoidTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>never</b> - когда нужно вернуть ошибку или для запуска
                нескончаемого цикла.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeNeverJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeNeverTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>functions</b> - это блоки кода, которые могут быть вызваны из
                других частей программы Они могут принимать аргументы и
                возвращать значение.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeFuncJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeFuncTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>enum</b> - это тип данных, используемый для определения
                перечисление (например, список возможных значений). Каждое
                значение перечисление может иметь имя, соответствующее значению
                перечисления, и числовое значение, которое может быть
                использовано для ответа на запросы. То есть позволяет грамотнее
                структурировать код, особенно при использовании однотипных
                частей.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeEnumJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeEnumTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>Alias</b> - используется для создания новых типов данных,
                которые могут использоваться для хранения данных в обычных
                объектах или для определения новых типов данных. Итак "type"
                используется для хранения данных в обычных объектах.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeAliasJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeAliasTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>interface </b> - интерфейсы позволяют описывать объекты,
                которые содержат данные и методы для их обработки, но не требуют
                определение конкретного класса. Интерфейсы могут содержать
                свойства, методы и другие. Следовательно "Interface"
                используется для определения объектов, содержащих данные и
                методы для них обработки.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeInterfaceJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeInterfaceTs}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>union</b> - позволяет нам использовать более одного типа
                данных для переменной или параметра функции. Это называется
                типом объединение.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{typeUnionJs}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{typeUnionTs}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
