import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  atRootOne,
  atRootTwo,
  atRootThree,
  atRootFour,
  atRootFive,
  atRootSix,
} from "./ScssConstPre.tsx";

export default function AtRootRU() {
  return (
    <>
      <Table id="scss_at-root">
        <TableBody>
          <TableOneCol text={<h3>@at-root</h3>} />
          <TableOneCol
            text={
              <p>
                Изымает одно или несколько правил из родительского селектора в
                корневой уровень документа. Такой способ можно использовать с
                селекторами первого уровня вложения:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{atRootOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{atRootTwo}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Также этот способ может быть использован с несколькими
                селекторами:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{atRootThree}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{atRootFour}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                По умолчанию @at-root изымает только селекторы. Тем не менее,
                @at-root можно использовать и для изъятия селекторов, вложенных
                в директивы, таких как @media. Например:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{atRootFive}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{atRootSix}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Вы можете использовать @at-root (without: ...) для изъятия из
                любой директивы. Также вы можете изымать селекторы сразу из
                нескольких директив, просто разделив их пробелами: @at-root
                (without: media supports) изымет элементы из запросов @media и
                @supports. <br />
                Существует два специальных значения у @at-root, которые вы также
                можете использовать. "rule" относится к обычным правилам CSS.
                <br />
                -Команда @at-root (without: rule) имеет такое же значение, как и
                @at-root без запросов. <br />
                -Команда @at-root (without: all) обозначает, что стили должны
                быть изъяты из всех директив и правил CSS. <br />
                Если вы хотите указать какие директивы или правила включать, а
                не список тех, которые должны быть изъяты, то вы можете
                использовать with вместо without. Например, команда @at-root
                (with: rule) означает, что необходимо изъять элементы из всех
                директив, но не затрагивать вложенные правила CSS.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
