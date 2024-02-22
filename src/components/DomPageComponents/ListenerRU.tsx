import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExample from "../../core/ButtonExample.tsx";
import { listener, target } from "./DomConstPre.tsx";
import { listenerFn, listenerFn2 } from "./DomFunc.js";

export default function ListenerRU() {
  return (
    <>
      <Table id="dom_listener">
        <TableBody>
          <TableOneCol text={<h3>Обработчик.</h3>} />
          <TableTwoEqualCol
            title={<h3>.addEventListener()</h3>}
            text={
              <p>
                Это функция, которая первым параметром принимает название
                евента, а вторым параметром функцию, которая выполнится, когда
                мы кликнем.
                <br />
                element.addEventListener()
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.removeEventListener()</h3>}
            text={
              <p>
                Используется для удаления обработчика.
                <br />
                element.removeEventListener()
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.dispatchEvent()</h3>}
            text={
              <p>
                Генерирует событие на объекте. <br />
                element.dispatchEvent()
              </p>
            }
          />
          <ButtonExample
            titleButtonExample={"Пример listener"}
            title={
              <p id="formated-text">
                <span>При наведение на первый элемент, появляется второй.</span>
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
          <TableOneCol text={<h3>Делегирование событий.</h3>} />
          <TableTwoEqualCol
            title={<h3>event.target</h3>}
            text={
              <p>
                Является ссылкой на объект, который был инициатором события.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>event.stopPropagation()</h3>}
            text={<p>Для остановки всплывания нужно вызвать метод.</p>}
          />
          <ButtonExample
            titleButtonExample={"Пример всплытия"}
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
                Если в примере выше кликнуть на div, то последовательно
                выведутся alert: div → form → section. Этот процесс называется
                всплытием, потому что события «всплывают» от внутреннего
                элемента вверх через родителей, подобно тому, как всплывает
                пузырёк воздуха в воде.
              </p>
            }
          />
          <ButtonExample
            titleButtonExample={"Пример event.target"}
            title={
              <p id="formated-text">
                event.target – это исходный элемент, на котором произошло
                событие, в процессе всплытия он неизменен. <br />
                this – это текущий элемент, до которого дошло всплытие, на нём
                сейчас выполняется обработчик.
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
