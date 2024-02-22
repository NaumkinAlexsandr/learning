import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import ButtonExample from "../../core/ButtonExample.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {} from "./DomConstPre.tsx";
import {} from "./DomFunc.js";

export default function EventUA() {
  return (
    <>
      <Table id="developments_mouseEvents">
        <TableBody>
          <TableOneCol text={<h2>Браузерні події.</h2>} />
          <TableOneCol text={<h3>Події миші.</h3>} />
          <TableTwoEqualCol
            title={<h3>auxclick</h3>}
            text={
              <p>
                Кнопка вказівного пристрою (будь-яка неосновна кнопка) була
                натиснута та відпущена на елементі.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>click</h3>}
            text={
              <p>Відбувається, коли клацнули на елемент лівою кнопкою миші.</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dblclick</h3>}
            text={
              <p>
                Відбувається, коли двічі клікнули на елемент лівою кнопкою миші.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>contextmenu</h3>}
            text={
              <p>Відбувається, коли клацнули на елемент правою кнопкою миші.</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>mouseover</h3>}
            text={<p>Коли миша наводиться на елемент.</p>}
          />
          <TableTwoEqualCol
            title={<h3>mouseout</h3>}
            text={<p>Коли миша залишає елемент.</p>}
          />
          <TableTwoEqualCol
            title={<h3>mousedown</h3>}
            text={<p>Коли натиснули кнопку миші на елементі.</p>}
          />
          <TableTwoEqualCol
            title={<h3>mouseup</h3>}
            text={<p>Коли відтиснули кнопку миші на елементі.</p>}
          />
          <TableTwoEqualCol
            title={<h3>mousemove</h3>}
            text={<p>При русі миші.</p>}
          />
          <TableTwoEqualCol
            title={<h3>mouseenter</h3>}
            text={
              <p>
                Вказівний пристрій переміщено на елемент, до якого підключено
                обробник.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>mouseleave</h3>}
            text={
              <p>
                Вказівний пристрій переміщається від елемента, до якого
                підключений обробник.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>pointerlockchange</h3>}
            text={<p>Покажчик був заблокований або відпущений.</p>}
          />
          <TableTwoEqualCol
            title={<h3>pointerlockerror</h3>}
            text={
              <p>
                Покажчик був заблокований з технічних причин або через відмову у
                дозволі.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>select</h3>}
            text={<p>Вибирається текст.</p>}
          />
          <TableTwoEqualCol
            title={<h3>wheel</h3>}
            text={
              <p>
                Колесо вказівного пристрою обертається в будь-якому напрямку.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="developments_management">
        <TableBody>
          <TableOneCol text={<h3>Події на елементах керування.</h3>} />
          <TableTwoEqualCol
            title={<h3>submit</h3>}
            text={<p>Користувач надіслав форму &lt;form&gt;.</p>}
          />
          <TableTwoEqualCol
            title={<h3>reset</h3>}
            text={<p>Кнопка скидання натиснута.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_focus">
        <TableBody>
          <TableOneCol text={<h3>Події фокусу.</h3>} />
          <TableTwoEqualCol
            title={<h3>focus</h3>}
            text={
              <p>
                Користувач фокусується на елементі, наприклад, натискає на
                &lt;input &gt;.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>blur</h3>}
            text={<p>Елемент втратив фокус.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_keyboards">
        <TableBody>
          <TableOneCol text={<h3>Клавіатурні події.</h3>} />
          <TableTwoEqualCol
            title={<h3>keydown</h3>}
            text={<p>Коли користувач натискає клавішу.</p>}
          />
          <TableTwoEqualCol
            title={<h3>keyup</h3>}
            text={<p>Коли користувач відпускає клавішу.</p>}
          />
          <TableTwoEqualCol
            title={<h3>keypress</h3>}
            text={
              <p>
                Будь-яка клавіша, крім Shift, Fn, CapsLock, знаходиться в
                натиснутому положенні. (Відбувається безперервно.)
              </p>
            }
          />
          <TableOneCol text={<h3>Події документа.</h3>} />
          <TableTwoEqualCol
            title={<h3>DOMContentLoaded</h3>}
            text={
              <p>
                Коли HTML завантажений та оброблений, DOM документа повністю
                побудований та доступний.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="developments_cssEvents">
        <TableBody>
          <TableOneCol text={<h3>CSS events.</h3>} />
          <TableTwoEqualCol
            title={<h3>animationstart</h3>}
            text={<p>CSS-анімація почалася.</p>}
          />
          <TableTwoEqualCol
            title={<h3>animationcancel</h3>}
            text={<p>CSS-анімація перервалася.</p>}
          />
          <TableTwoEqualCol
            title={<h3>animationend</h3>}
            text={<p>CSS-анімація завершена.</p>}
          />
          <TableTwoEqualCol
            title={<h3>animationiteration</h3>}
            text={<p>CSS-анімація повторюється.</p>}
          />
          <TableTwoEqualCol
            title={<h3>transitionstart</h3>}
            text={
              <p>
                CSS перехід вже фактично почався (запустився після будь-яких
                затримок).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>transitioncancel</h3>}
            text={<p>CSS перехід скасовано.</p>}
          />
          <TableTwoEqualCol
            title={<h3>transitionend</h3>}
            text={<p>CSS перехід завершено.</p>}
          />
          <TableTwoEqualCol
            title={<h3>transitionrun</h3>}
            text={
              <p>
                CSS перехід почав виконуватися (запускається до початку
                будь-якої затримки).
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="developments_page">
        <TableBody>
          <TableOneCol text={<h3>Події журналу сесії.</h3>} />
          <TableTwoEqualCol
            title={<h3>pagehide</h3>}
            text={<p>Виконується обхід записів журналу сесії.</p>}
          />
          <TableTwoEqualCol
            title={<h3>pageshow</h3>}
            text={<p>Виконується перехід до запису журналу сесії.</p>}
          />
          <TableTwoEqualCol
            title={<h3>popstate</h3>}
            text={
              <p>
                Здійснюється перехід до запису журналу сесії (у деяких
                випадках).
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="developments_composition">
        <TableBody>
          <TableOneCol text={<h3>Події Text Composition.</h3>} />
          <TableTwoEqualCol
            title={<h3>compositionstart</h3>}
            text={
              <p>
                Підготовляється композиція уривка тексту (аналогічно натисканню
                клавіш для введення з клавіатури, але працює з іншими входами,
                такими як розпізнавання мови).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>compositionupdate</h3>}
            text={<p>До уривку тексту, що складається, додається символ.</p>}
          />
          <TableTwoEqualCol
            title={<h3>compositionend</h3>}
            text={<p>Складання уривка тексту завершено або скасовано.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_print">
        <TableBody>
          <TableOneCol text={<h3>Події друку.</h3>} />
          <TableTwoEqualCol
            title={<h3>beforeprint</h3>}
            text={<p>Діалогове вікно друку відкрито.</p>}
          />
          <TableTwoEqualCol
            title={<h3>afterprint</h3>}
            text={<p>Діалогове вікно друку закрито.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_resource">
        <TableBody>
          <TableOneCol text={<h3>Події ресурсу.</h3>} />
          <TableTwoEqualCol
            title={<h3>error</h3>}
            text={<p>Не вдалося завантажити ресурс.</p>}
          />
          <TableTwoEqualCol
            title={<h3>abort</h3>}
            text={<p>Завантаження ресурсу було перервано.</p>}
          />
          <TableTwoEqualCol
            title={<h3>load</h3>}
            text={<p>Ресурс та його залежні ресурси завершили завантаження.</p>}
          />
          <TableTwoEqualCol
            title={<h3>loadend</h3>}
            text={
              <p>
                Виконання зупинено (після відправки "error", "abort" або
                "load").
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>loadstart</h3>}
            text={<p>Виконання почалося.</p>}
          />
          <TableTwoEqualCol
            title={<h3>progress</h3>}
            text={<p>Під час виконання.</p>}
          />
          <TableTwoEqualCol
            title={<h3>timeout</h3>}
            text={
              <p>Виконання припинено після закінчення встановленого часу.</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>beforeunload</h3>}
            text={<p>Вікно, документ та його ресурси будуть вивантажені.</p>}
          />
          <TableTwoEqualCol
            title={<h3>unload</h3>}
            text={<p>Вивантажується документ або залежний ресурс.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_network">
        <TableBody>
          <TableOneCol text={<h3>Мережні події.</h3>} />
          <TableTwoEqualCol
            title={<h3>online</h3>}
            text={<p>Браузер отримав доступ до мережі.</p>}
          />
          <TableTwoEqualCol
            title={<h3>offline</h3>}
            text={<p>Браузер втратив доступ до мережі.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_web">
        <TableBody>
          <TableOneCol text={<h3>Події веб-сокетів.</h3>} />
          <TableTwoEqualCol
            title={<h3>open</h3>}
            text={<p>Встановлено з'єднання з WebSocket.</p>}
          />
          <TableTwoEqualCol
            title={<h3>message</h3>}
            text={<p>Повідомлення приймається через WebSocket.</p>}
          />
          <TableTwoEqualCol
            title={<h3>error</h3>}
            text={
              <p>
                З'єднання WebSocket було закрито з упередженням (наприклад,
                деякі дані не можуть бути надіслані).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>close</h3>}
            text={<p>З'єднання WebSocket було закрито.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_view">
        <TableBody>
          <TableOneCol text={<h3>Події подання.</h3>} />
          <TableTwoEqualCol
            title={<h3>fullscreenchange</h3>}
            text={
              <p>
                Елемент був переведений у повноекранний режим або назад у
                нормальний режим.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>fullscreenerror</h3>}
            text={
              <p>
                Перехід у повноекранний режим був неможливий з технічних причин
                або через відмову у дозволі.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>resize</h3>}
            text={<p>Розмір перегляду документа змінено.</p>}
          />
          <TableTwoEqualCol
            title={<h3>scroll</h3>}
            text={<p>Документ або елемент були прокручені.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_buffer">
        <TableBody>
          <TableOneCol text={<h3>Події буфера обміну.</h3>} />
          <TableTwoEqualCol
            title={<h3>cut</h3>}
            text={<p>Виділення було вирізано та скопійовано в буфер обміну.</p>}
          />
          <TableTwoEqualCol
            title={<h3>copy</h3>}
            text={<p>Виділення було скопійовано в буфер обміну.</p>}
          />
          <TableTwoEqualCol
            title={<h3>paste</h3>}
            text={<p>Елемент із буфера обміну було вставлено.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_drag">
        <TableBody>
          <TableOneCol text={<h3>Події Drag & Drop.</h3>} />
          <TableTwoEqualCol
            title={<h3>drag</h3>}
            text={
              <p>
                Елемент або виділення тексту перетягується. (Спрацьовує
                безперервно кожні 350 мс).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dragend</h3>}
            text={
              <p>
                Операція перетягування завершується (відпускаючи кнопку миші або
                натискаючи клавішу виходу).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dragenter</h3>}
            text={
              <p>
                Перетягується або виділений текст потрапляє в допустиму мета
                перетягування.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dragstart</h3>}
            text={
              <p>
                Користувач починає перетягувати елемент або виділений текст.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dragleave</h3>}
            text={
              <p>
                Перетягується або виділений текст залишає допустиму мету
                перетягування.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dragover</h3>}
            text={
              <p>
                Вибраний елемент або текст перетягується над допустимою метою
                перетягування. (Спрацьовує безперервно кожні 350 мс).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>drop</h3>}
            text={<p>Елемент перетягується на допустиму мету перетягування.</p>}
          />
        </TableBody>
      </Table>
    </>
  );
}
