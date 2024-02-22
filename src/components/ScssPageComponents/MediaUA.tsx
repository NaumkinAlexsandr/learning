import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  mediaOne,
  mediaTwo,
  mediaThree,
  mediaFour,
  mediaFive,
  mediaSix,
} from "./ScssConstPre.tsx";

export default function MediaUA() {
  return (
    <>
      <Table id="scss_media">
        <TableBody>
          <TableOneCol text={<h3>@media</h3>} />
          <TableOneCol
            text={
              <p>
                Директива @media працює так само, як і стандартне правило CSS,
                лише з додатковими можливостями: Директива може вкладатися у
                правила CSS. Якщо директива вкладена в css-правило, то при
                компіляції вона буде піднята нагору таблиці стилів, а всі
                селектори в яких була директива, перемістяться всередину @media.
                Такий метод дозволяє легко додавати правила в @media без
                повторення селекторів чи порушення потоку таблиці стилів.
                Наприклад:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>{mediaOne}</pre>
              </p>
            }
            text={
              <p>
                <pre>{mediaTwo}</pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Запити можуть вкладатися один одного. Після компіляції ці @media
                будуть об'єднані оператором and.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>{mediaThree}</pre>
              </p>
            }
            text={
              <p>
                <pre>{mediaFour}</pre>
              </p>
            }
          />
          <TableOneCol
            text={
              <p>
                Ну і, нарешті, @media запити можуть містити в собі всі
                можливості SassScript (включаючи змінні, функції та оператори) в
                іменах компонентів та різних значень.
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                <pre>{mediaFive}</pre>
              </p>
            }
            text={
              <p>
                <pre>{mediaSix}</pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
