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

export default function MixinUA() {
  return (
    <>
      <Table id="scss_mixin">
        <TableBody>
          <TableOneCol text={<h3>Mixin.</h3>} />
          <TableOneCol
            text={
              <p>
                Міксини оголошуються директивою @ @ mixin. Після неї має стояти
                ім'я міксину і, опціонально, його параметри, і блок, що містить
                тіло міксину. Наприклад, можна визначити міксин large-text
                наступним чином:
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
                Міксини можуть також містити селектори, можливо із
                властивостями. Селектори навіть можуть містити посилання на
                батька. Наприклад:
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
                Міксин викликається в документ директивою @include. Вона приймає
                ім'я міксину і, опціонально, що передаються в його аргументи,
                включає стилі, визначені цим міксином, поточне правило.
                Наприклад:
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
                Міксини можуть бути також викликані поза будь-якого правила
                (тобто в корені документа), за умови, що вони не визначають
                безпосередньо правил і не використовують посилання на батька.
                Наприклад:
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
