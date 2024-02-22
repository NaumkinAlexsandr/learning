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

export default function EventRU() {
  return (
    <>
      <Table id="developments_mouseEvents">
        <TableBody>
          <TableOneCol text={<h2>Браузерные события.</h2>} />
          <TableOneCol text={<h3>События мыши.</h3>} />
          <TableTwoEqualCol
            title={<h3>auxclick</h3>}
            text={
              <p>
                Кнопка указывающего устройства (любая неосновная кнопка) была
                нажата и отпущена на элементе.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>click</h3>}
            text={
              <p>Происходит, когда кликнули на элемент левой кнопкой мыши.</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dblclick</h3>}
            text={
              <p>
                Происходит, когда дважды кликнули на элемент левой кнопкой мыши.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>contextmenu</h3>}
            text={
              <p>Происходит, когда кликнули на элемент правой кнопкой мыши.</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>mouseover</h3>}
            text={<p>Когда мышь наводится на элемент.</p>}
          />
          <TableTwoEqualCol
            title={<h3>mouseout</h3>}
            text={<p>Когда мышь покидает элемент.</p>}
          />
          <TableTwoEqualCol
            title={<h3>mousedown</h3>}
            text={<p>Когда нажали кнопку мыши на элементе.</p>}
          />
          <TableTwoEqualCol
            title={<h3>mouseup</h3>}
            text={<p>Когда отжали кнопку мыши на элементе.</p>}
          />
          <TableTwoEqualCol
            title={<h3>mousemove</h3>}
            text={<p>При движении мыши.</p>}
          />
          <TableTwoEqualCol
            title={<h3>mouseenter</h3>}
            text={
              <p>
                Указывающее устройство перемещено на элемент, к которому
                подключён обработчик.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>mouseleave</h3>}
            text={
              <p>
                Указывающее устройство перемещается от элемента, к которому
                подключён обработчик.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>pointerlockchange</h3>}
            text={<p>Указатель был заблокирован или отпущен.</p>}
          />
          <TableTwoEqualCol
            title={<h3>pointerlockerror</h3>}
            text={
              <p>
                Указатель был заблокирован по техническим причинам или из-за
                отказа в разрешении.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>select</h3>}
            text={<p>Выбирается какой-то текст.</p>}
          />
          <TableTwoEqualCol
            title={<h3>wheel</h3>}
            text={
              <p>
                Колесо указывающего устройства вращается в любом направлении.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="developments_management">
        <TableBody>
          <TableOneCol text={<h3>События на элементах управления.</h3>} />
          <TableTwoEqualCol
            title={<h3>submit</h3>}
            text={<p>Пользователь отправил форму &lt;form&gt;.</p>}
          />
          <TableTwoEqualCol
            title={<h3>reset</h3>}
            text={<p>Кнопка сброса нажата.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_focus">
        <TableBody>
          <TableOneCol text={<h3>События фокуса.</h3>} />
          <TableTwoEqualCol
            title={<h3>focus</h3>}
            text={
              <p>
                Пользователь фокусируется на элементе, например нажимает на
                &lt;input &gt;.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>blur</h3>}
            text={<p>Элемент потерял фокус.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_keyboards">
        <TableBody>
          <TableOneCol text={<h3>Клавиатурные события.</h3>} />
          <TableTwoEqualCol
            title={<h3>keydown</h3>}
            text={<p>Когда пользователь нажимает клавишу.</p>}
          />
          <TableTwoEqualCol
            title={<h3>keyup</h3>}
            text={<p>Когда пользователь отпускает клавишу.</p>}
          />
          <TableTwoEqualCol
            title={<h3>keypress</h3>}
            text={
              <p>
                Любая клавиша, кроме Shift, Fn, CapsLock, находится в нажатом
                положении. (Происходит непрерывно.)
              </p>
            }
          />
          <TableOneCol text={<h3>События документа.</h3>} />
          <TableTwoEqualCol
            title={<h3>DOMContentLoaded</h3>}
            text={
              <p>
                Когда HTML загружен и обработан, DOM документа полностью
                построен и доступен.
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
            text={<p>CSS-анимация началась.</p>}
          />
          <TableTwoEqualCol
            title={<h3>animationcancel</h3>}
            text={<p>CSS-анимация прервалась.</p>}
          />
          <TableTwoEqualCol
            title={<h3>animationend</h3>}
            text={<p>CSS-анимация завершена.</p>}
          />
          <TableTwoEqualCol
            title={<h3>animationiteration</h3>}
            text={<p>CSS-анимация повторяется.</p>}
          />
          <TableTwoEqualCol
            title={<h3>transitionstart</h3>}
            text={
              <p>
                CSS переход уже фактически начался (запустился после каких-либо
                задержек).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>transitioncancel</h3>}
            text={<p>CSS переход отменён.</p>}
          />
          <TableTwoEqualCol
            title={<h3>transitionend</h3>}
            text={<p>CSS переход завершён.</p>}
          />
          <TableTwoEqualCol
            title={<h3>transitionrun</h3>}
            text={
              <p>
                CSS переход начал выполняться (запускается до начала любой
                задержки).
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="developments_page">
        <TableBody>
          <TableOneCol text={<h3>События журнала сессии.</h3>} />
          <TableTwoEqualCol
            title={<h3>pagehide</h3>}
            text={<p>Выполняется обход записей журнала сессии.</p>}
          />
          <TableTwoEqualCol
            title={<h3>pageshow</h3>}
            text={<p>Выполняется переход к записи журнала сессии.</p>}
          />
          <TableTwoEqualCol
            title={<h3>popstate</h3>}
            text={
              <p>
                Выполняется переход к записи журнала сессии (в некоторых
                случаях).
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="developments_composition">
        <TableBody>
          <TableOneCol text={<h3>События Text Composition.</h3>} />
          <TableTwoEqualCol
            title={<h3>compositionstart</h3>}
            text={
              <p>
                Подготавливается композиция отрывка текста (аналогично нажатию
                клавиш для ввода с клавиатуры, но работает с другими входами,
                такими как распознавание речи).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>compositionupdate</h3>}
            text={<p>К отрывку составляемого текста добавляется символ.</p>}
          />
          <TableTwoEqualCol
            title={<h3>compositionend</h3>}
            text={<p>Составление отрывка текста завершено или отменено.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_print">
        <TableBody>
          <TableOneCol text={<h3>События печати.</h3>} />
          <TableTwoEqualCol
            title={<h3>beforeprint</h3>}
            text={<p>Диалоговое окно печати открыто.</p>}
          />
          <TableTwoEqualCol
            title={<h3>afterprint</h3>}
            text={<p>Диалоговое окно печати закрыто.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_resource">
        <TableBody>
          <TableOneCol text={<h3>События ресурса.</h3>} />
          <TableTwoEqualCol
            title={<h3>error</h3>}
            text={<p>Не удалось загрузить ресурс.</p>}
          />
          <TableTwoEqualCol
            title={<h3>abort</h3>}
            text={<p>Загрузка ресурса была прервана.</p>}
          />
          <TableTwoEqualCol
            title={<h3>load</h3>}
            text={<p>Ресурс и его зависимые ресурсы завершили загрузку.</p>}
          />
          <TableTwoEqualCol
            title={<h3>loadend</h3>}
            text={
              <p>
                Выполнение остановлено (после отправки "error", "abort" или
                "load").
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>loadstart</h3>}
            text={<p>Выполнение началось.</p>}
          />
          <TableTwoEqualCol
            title={<h3>progress</h3>}
            text={<p>В ходе выполнения.</p>}
          />
          <TableTwoEqualCol
            title={<h3>timeout</h3>}
            text={
              <p>Выполнение прекращено по истечении установленного времени.</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>beforeunload</h3>}
            text={<p>Окно, документ и его ресурсы будут выгружены.</p>}
          />
          <TableTwoEqualCol
            title={<h3>unload</h3>}
            text={<p>Выгружается документ или зависимый ресурс.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_network">
        <TableBody>
          <TableOneCol text={<h3>Сетевые события.</h3>} />
          <TableTwoEqualCol
            title={<h3>online</h3>}
            text={<p>Браузер получил доступ к сети.</p>}
          />
          <TableTwoEqualCol
            title={<h3>offline</h3>}
            text={<p>Браузер потерял доступ к сети.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_web">
        <TableBody>
          <TableOneCol text={<h3>События веб-сокетов.</h3>} />
          <TableTwoEqualCol
            title={<h3>open</h3>}
            text={<p>Установлено соединение с WebSocket.</p>}
          />
          <TableTwoEqualCol
            title={<h3>message</h3>}
            text={<p>Сообщение принимается через WebSocket.</p>}
          />
          <TableTwoEqualCol
            title={<h3>error</h3>}
            text={
              <p>
                Соединение WebSocket было закрыто с предубеждением (например,
                некоторые данные не могут быть отправлены).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>close</h3>}
            text={<p>Соединение WebSocket было закрыто.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_view">
        <TableBody>
          <TableOneCol text={<h3>События представления.</h3>} />
          <TableTwoEqualCol
            title={<h3>fullscreenchange</h3>}
            text={
              <p>
                Элемент был переведён в полноэкранный режим или обратно в
                нормальный режим.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>fullscreenerror</h3>}
            text={
              <p>
                Переход в полноэкранный режим был невозможен по техническим
                причинам или из-за отказа в разрешении.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>resize</h3>}
            text={<p>Размер просмотра документа изменён.</p>}
          />
          <TableTwoEqualCol
            title={<h3>scroll</h3>}
            text={<p>Документ или элемент были прокручены.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_buffer">
        <TableBody>
          <TableOneCol text={<h3>События буфера обмена.</h3>} />
          <TableTwoEqualCol
            title={<h3>cut</h3>}
            text={<p>Выделение было вырезано и скопировано в буфер обмена.</p>}
          />
          <TableTwoEqualCol
            title={<h3>copy</h3>}
            text={<p>Выделение было скопировано в буфер обмена.</p>}
          />
          <TableTwoEqualCol
            title={<h3>paste</h3>}
            text={<p>Элемент из буфера обмена был вставлен.</p>}
          />
        </TableBody>
      </Table>
      <Table id="developments_drag">
        <TableBody>
          <TableOneCol text={<h3>События Drag & Drop.</h3>} />
          <TableTwoEqualCol
            title={<h3>drag</h3>}
            text={
              <p>
                Элемент или выделение текста перетаскивается. (Срабатывает
                непрерывно каждые 350 мс).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dragend</h3>}
            text={
              <p>
                Операция перетаскивания завершается (отпуская кнопку мыши или
                нажимая клавишу выхода).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dragenter</h3>}
            text={
              <p>
                Перетаскиваемый элемент или выделенный текст попадает в
                допустимую цель перетаскивания.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dragstart</h3>}
            text={
              <p>
                Пользователь начинает перетаскивать элемент или выделенный
                текст.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dragleave</h3>}
            text={
              <p>
                Перетаскиваемый элемент или выделенный текст оставляет
                допустимую цель перетаскивания.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>dragover</h3>}
            text={
              <p>
                Выбранный элемент или текст перетаскивается над допустимой целью
                перетаскивания. (Срабатывает непрерывно каждые 350 мс).
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>drop</h3>}
            text={
              <p>Элемент перетаскивается на допустимую цель перетаскивания.</p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
