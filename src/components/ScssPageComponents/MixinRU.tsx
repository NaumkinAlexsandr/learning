import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  mixinOne,
  mixinTwo,
  mixinThree,
  mixinFour,
  mixinFive,
  mixinSix,
} from "./ScssConstPre.tsx";

export default function MixinRU() {
  return (
    <>
      <Table id="scss_mixin">
        <TableBody>
          <TableOneCol text={<h3>Mixin.</h3>} />
          <TableOneCol
            text={
              <p>
                Миксины объявляются директивой @mixin. После неё должно стоять
                имя миксина и, опционально, его параметры, и блок, содержащий
                тело миксина. Например, можно определить миксин large-text
                следующим образом:
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <pre>
                  <code>{mixinOne}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Миксины могут также содержать селекторы, возможно со свойствами.
                Селекторы даже могут содержать ссылки на родителя. Например:
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <pre>
                  <code>{mixinTwo}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Миксины вызываются в документ директивой @include. Она принимает
                имя миксина и, опционально, передаваемые в него аргументы,
                включает стили, определённые этим миксином, в текущее правило.
                Например:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{mixinThree}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{mixinFour}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Миксины могут быть также вызваны вне какого-либо правила (то
                есть в корне документа), при условии, что они не определяют
                непосредственно правил и не используют ссылку на родителя.
                Например:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{mixinFive}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{mixinSix}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
