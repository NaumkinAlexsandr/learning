import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  contentOne,
  contentTwo,
  contentThree,
  contentFour,
  contentFive,
} from "./ScssConstPre.tsx";

export default function ContentUA() {
  return (
    <>
      <Table id="scss_content">
        <TableBody>
          <TableOneCol text={<h3>Блоки контенту в міксинах.</h3>} />
          <TableOneCol
            text={
              <p>
                Існує можливість передачі блоку стилів у міксин, які будуть
                розташовані серед стилів, що підключаються цим міксином. Ці
                стилі будуть розміщені замість директив @content, розташованих
                усередині міксину. Це дає можливість створення абстракцій, що
                залежать від конструкцій селекторів чи директив. Наприклад:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{contentOne}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{contentTwo}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Блоки контенту, передані в міксин, обчислюються в тій же області
                видимості, де визначено цей блок, а не міксин. Це означає, що
                локальні змінні міксину не можуть. бути використані в блоці
                контенту, що передається, і змінні будуть сприйняті як
                глобальні:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>
                  <code>{contentThree}</code>
                </pre>
              </p>
            }
            text={
              <p>
                <pre>
                  <code>{contentFour}</code>
                </pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Крім того, це означає, що змінні та міксини, які
                використовуються в блоці, що задаються, залежать від інших
                стилів, поблизу яких блок оголошено:
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                <pre>
                  <code>{contentFive}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
