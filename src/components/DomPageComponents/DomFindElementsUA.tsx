import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import { matches } from "./DomConstPre.tsx";

export default function DomFindElementsUA() {
  return (
    <>
      <Table id="dom_findElement">
        <TableBody>
          <TableOneCol text={<h3>Пошук елементів.</h3>} />
          <TableTwoEqualCol
            title={<h3>.getElementById(id)</h3>}
            text={
              <p>
                Знаходить елемент за ідентифікатором елемента, що є статичним.
                document.getElementById(id)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.getElementsByName(name)</h3>}
            text={
              <p>
                Знаходить елементи на ім'я, є динамічним (живим).
                document.getElementsByName(name)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.getElementsByTagName(name)</h3>}
            text={
              <p>
                Знаходить елементи на ім'я тегів. Здатний шукати всередині
                елементів та є динамічним (живим).
                document.getElementsByTagName(name)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.getElementsByClassName(name)</h3>}
            text={
              <p>
                Знаходить елементи під назвою класу. Здатний шукати всередині
                елементів є динамічним (живим). document.getElementsByClassName
                (name)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.querySelectorAll(selector)</h3>}
            text={
              <p>
                Знаходить елементи відповідного селектора css. Здатний шукати
                всередині елементів і є статичним.
                document.querySelectorAll(selector)
                <br />
                Пошук за тегом першого рівня вкладеності.
                document.querySelectorAll(selector &gt; selector) <br />
                Пошук з кільком класам. document.querySelectorAll(selector,
                selector)
                <br />
                Пошук за вкладеними класами. document.querySelectorAll(selector
                selector)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.querySelector(selector)</h3>}
            text={
              <p>
                Знаходить перший елемент відповідному css селектору. Здатний
                шукати всередині елементів та є статичним.
                document.querySelector(selector)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.closest</h3>}
            text={
              <p>
                Шукає найближчого предка котрий відповідає css селектору.
                document.querySelector(selector) .closest(selector)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.matches</h3>}
            text={
              <p>
                Нічого не шукає, а перевіряє, чи задовольняє елемент css
                селекторуб повертає true чи false.
                <pre>
                  <code>{matches}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
