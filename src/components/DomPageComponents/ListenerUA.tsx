import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import ButtonExample from "../../core/ButtonExample.tsx";
import { listener, target } from "./DomConstPre.tsx";
import { listenerFn, listenerFn2 } from "./DomFunc.js";

export default function ListenerUA() {
  return (
    <>
      <Table id="dom_listener">
        <TableBody>
          <TableOneCol text={<h3>Обробник.</h3>} />
          <TableTwoEqualCol
            title={<h3>.addEventListener()</h3>}
            text={
              <p>
                Це функція, яка першим параметром приймає назву евента, а другим
                параметром функцію, яка виконається, коли ми клацнемо.
                <br />
                element.addEventListener()
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.removeEventListener()</h3>}
            text={
              <p>
                Використовується для видалення обробника.
                <br />
                element.removeEventListener()
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.dispatchEvent()</h3>}
            text={
              <p>
                Генерує подію на об'єкті. <br />
                element.dispatchEvent()
              </p>
            }
          />
          <ButtonExample
            titleButtonExample={"Приклад listener"}
            title={
              <p id="formated-text">
                <span>При наведенні на перший елемент з'являється другий.</span>
                <div onMouseEnter={() => listenerFn()} className="firstElement">
                  <p>First element</p>
                </div>
                <div style={{ display: "none" }} className="secondElement">
                  <p>Second element</p>
                </div>
              </p>
            }
            text={
              <pre>
                <code>{listener}</code>
              </pre>
            }
          />
        </TableBody>
      </Table>
      <Table id="dom_delegation">
        <TableBody>
          <TableOneCol text={<h3>Делегування подій.</h3>} />
          <TableTwoEqualCol
            title={<h3>event.target</h3>}
            text={<p>Це посилання на об'єкт, який був ініціатором події.</p>}
          />
          <TableTwoEqualCol
            title={<h3>event.stopPropagation()</h3>}
            text={<p>Для зупинки спливання потрібно викликати метод.</p>}
          />
          <ButtonExample
            titleButtonExample={"Приклад випливання"}
            title={
              <section className="first_form" onClick={() => alert("section")}>
                section
                <form onClick={() => alert("form")}>
                  form
                  <div onClick={() => alert("div")}>div</div>
                </form>
              </section>
            }
            text={
              <p id="formated-text">
                Якщо в прикладі вище натиснути на div, то послідовно виведуть
                alert: div → form → section. Цей процес називається спливанням,
                тому що події «спливають» від внутрішнього елемента вгору через
                батьків, подібно до того, як спливає бульбашка повітря у воді.
              </p>
            }
          />
          <ButtonExample
            titleButtonExample={"Приклад event.target"}
            title={
              <p id="formated-text">
                event.target - це вихідний елемент, на якому відбулося подія, у
                процесі випливання він незмінний. <br />
                this - це поточний елемент, до якого дійшло спливання, на ньому
                зараз виконується обробник.
                <section
                  onMouseEnter={() => listenerFn2()}
                  className="second_form"
                >
                  section
                  <form>
                    form
                    <div>div</div>
                  </form>
                </section>
              </p>
            }
            text={
              <p id="formated-text">
                <pre>
                  <code>{target}</code>
                </pre>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
