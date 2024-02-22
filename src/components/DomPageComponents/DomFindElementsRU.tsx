import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import { matches } from "./DomConstPre.tsx";

export default function DomFindElementsRU() {
  return (
    <>
      <Table id="dom_findElement">
        <TableBody>
          <TableOneCol text={<h3>Поиск элементов.</h3>} />
          <TableTwoEqualCol
            title={<h3>.getElementById(id)</h3>}
            text={
              <p>
                Находит элемент по идентификатору элемента, является
                статическим. document.getElementById(id)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.getElementsByName(name)</h3>}
            text={
              <p>
                Находит элементы по имени, является динамичным (живым).
                document.getElementsByName(name)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.getElementsByTagName(name)</h3>}
            text={
              <p>
                Находит элементы по имени тегов. Способен искать внутри
                элементов и является динамичным (живым).
                document.getElementsByTagName(name)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.getElementsByClassName(name)</h3>}
            text={
              <p>
                Находит элементы под названием класса. Способен искать внутри
                элементов и является динамичным (живым).
                document.getElementsByClassName (name)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.querySelectorAll(selector)</h3>}
            text={
              <p>
                Находит элементы соответствующему css селектору. Способен искать
                внутри элементов и является статическим.
                document.querySelectorAll(selector)
                <br />
                Поиск по тегу первого уровня вложенности.
                document.querySelectorAll(selector &gt; selector) <br />
                Поиск по нескольким класам. document.querySelectorAll(selector,
                selector)
                <br />
                Поиск по вложенным класам. document.querySelectorAll(selector
                selector)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.querySelector(selector)</h3>}
            text={
              <p>
                Находит первый элемент соответствующему css селектору. Способен
                искать внутри элементов и является статическим.
                document.querySelector(selector)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.closest</h3>}
            text={
              <p>
                Ищет ближайшего предка который соответствует css селектору.
                document.querySelector(selector) .closest(selector)
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.matches</h3>}
            text={
              <p>
                Ничего не ищет, а проверяет, удавлетворяет ли элемент css
                селекторуб возвращает true или false.
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
