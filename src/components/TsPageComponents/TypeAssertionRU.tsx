import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  assertionOne,
  assertionTwo,
  assertionThree,
  assertionFour,
} from "./TsConstPre.tsx";

export default function TypeAssertionRU() {
  return (
    <>
      <Table id="ts_typeAssertion">
        <TableBody>
          <TableOneCol text={<h2>Type Assertion - Утверждение типов.</h2>} />
          <TableOneCol
            text={
              <p>
                <b>Type Assertion</b> - это механизм, позволяющий привязывать
                переменную типа, который не может быть определен обычно. Это
                заключается в том, что вы можете указать тип данных, которые вы
                ожидаете, чтобы использовались в переменной, и TypeScript
                обеспечивает, что эти данные соответствуют указанному типу.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                Утверждение с помощью &lt; &gt;. <br />
                <pre>
                  <code>{assertionOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                Утверждение с помощью оператора as.
                <br />
                <pre>
                  <code>{assertionTwo}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol text={<h3>Приведение к константе.</h3>} />
          <TableOneCol
            text={
              <p>
                <b>Const Assertion</b> - это функциональность TypeScript,
                которая позволяет ограничить тип значений переменной, чтобы она
                имела только разрешенные значения. Это позволяет уменьшить
                количество ошибок в разработке, поскольку возникает
                предупреждение, если код использует значения, не подходящие для
                данной переменной.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{assertionThree}</code>
                </pre>
                <br />
                Определение типа Person, представляющего объект с двумя
                свойствами: name типа string и age типа number. Определение
                переменной bill, которая также является объектом типа Person и
                нет константного типа. Это означает, что свойства объекта bill
                могут быть изменены после определения.
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{assertionFour}</code>
                </pre>
                <br />
                Определение типа Person, представляющего объект с двумя
                свойствами: name типа string и age типа number. Определение
                переменной john, которая является объектом типа Person и имеет
                константный тип. Это означает, что свойства объекта john не
                могут быть изменены после определения.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
