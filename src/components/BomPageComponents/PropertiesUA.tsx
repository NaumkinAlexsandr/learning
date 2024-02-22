import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import {
  handleLog,
  handleError,
  handleWarn,
  handleInfo,
  handleTable,
  table,
  handleClear,
  handleAssert,
  handleCount,
  handleCountReset,
  handleDir,
  dir,
  handleDirxml,
  dirxml,
  handleGroup,
  handleGroupCollapsed,
  handleProfile,
  handleTime,
  handleStamp,
  trace,
  handleTrace,
} from "./BomFunc.js";

export default function PropertiesUA() {
  return (
    <>
      <Table id="bom_title">
        <TableBody>
          <TableOneCol text={<h1>Робота з BOM.</h1>} />
          <TableOneCol text={<h2>Window</h2>} />
          <TableOneCol
            text={
              <p>
                Глобальний об'єкт надає змінні та функції, доступні у будь-якому
                місці програми. За замовчуванням це ті, що вбудовані в мова чи
                середовище виконання.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="bom_properties">
        <TableBody>
          <TableOneCol text={<h2>Властивості.</h2>} />
          <TableTwoEqualCol
            title={<h3>.closed</h3>}
            text={
              <p>
                Властивість, яка вказує, чи було поточне вікно закрито чи ні.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.devicePixelRatio</h3>}
            text={
              <p>
                Повертає співвідношення між фізичними пікселями та пікселями на
                дисплеї поточного пристрою. <br />
                console.log(window.devicePixelRatio);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.document</h3>}
            text={
              <p>
                Повертає посилання на документ, що міститься у вікні. <br />
                console.log(window.document);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.frameElement</h3>}
            text={
              <p>
                Повертає елемент, у який вбудоване вікно, або null, якщо воно не
                вбудовано.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.frames</h3>}
            text={<p>Повертає масив додаткових кадрів у поточному вікні.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.length</h3>}
            text={
              <p>
                Повертає кількість кадрів у вікні. <br />
                console.log(window.length);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.fullScreen</h3>}
            text={
              <p>
                Ця властивість вказує, чи відображається вікно в повноекранному
                режимі чи ні.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.history</h3>}
            text={
              <p>
                Надає інтерфейс для маніпулювання історією сесії браузер. <br />
                Перехід на попередню сторінку - history.back(); <br />
                Перехід на останню сторінку - history.go();
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.localStorage</h3>}
            text={
              <p>
                Повертає посилання на локальний об'єкт сховища, що
                використовується для зберігання даних, які можуть бути доступні
                тільки першоджерел, які створили їх. <br />
                console.log(window.localStorage);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.location</h3>}
            text={
              <p>
                Отримує/встановлює розташування або поточну URL для поточного
                об'єкт вікна. <br />
                console.log(window.location);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.locationbar</h3>}
            text={
              <p>
                Повертає об'єкт locationbar, який може бути доданий та прибраний
                з вікна. <br />
                console.log(window.locationbar);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.menubar</h3>}
            text={
              <p>
                Повертає об'єкт menubar, який може бути доданий та прибраний з
                вікна. <br />
                console.log(window.menubar);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.personalbar</h3>}
            text={
              <p>
                Повертає об'єкт personalbar, який може бути доданий та прибраний
                з вікна. <br />
                console.log(window.personalbar);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.scrollbars</h3>}
            text={
              <p>
                Повертає об'єкт scrollbars, який може бути доданий та прибраний
                з вікна. <br />
                console.log(window.scrollbars);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.statusbar</h3>}
            text={
              <p>
                Повертає об'єкт statusbar, який може бути доданий та прибраний з
                вікна. <br />
                console.log(window.statusbar);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.toolbar</h3>}
            text={
              <p>
                Повертає об'єкт toolbar, який може бути доданий та прибраний з
                вікна. <br />
                console.log(window.toolbar);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.name</h3>}
            text={
              <p>
                Отримує/встановлює ім'я для вікна. <br />
                window.name = 'Hello World!'; <br />
                console.log(window.name);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.navigator</h3>}
            text={
              <p>
                Повертає посилання на об'єкт, що містить інформацію про
                програму, що запустив скрипт.
                <br />
                console.log(window.navigator);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.opener</h3>}
            text={
              <p>Повертає посилання на вікно, що відкрило поточне вікно.</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.orientation</h3>}
            text={
              <p>
                Повертає орієнтацію у градусах (із залежністю від 90 градусів).
                <br />
                console.log(screen.orientation);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.sessionStorage</h3>}
            text={
              <p>
                Повертає посилання на об'єкт зберігання сесії, що
                використовується для зберігання даних, які можуть бути отримані
                лише джерелом, які створили їх. <br />
                console.log(window.sessionStorage);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.parent</h3>}
            text={
              <p>
                Повертає посилання на батька поточного вікна або вбудованого
                кадру. Якщо об'єкт window не має батька, то властивість даного
                об'єкта буде посилатися сам об'єкт. <br />
                console.log(window.parent);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.innerHeight</h3>}
            text={
              <p>
                Отримує висоту області вмісту вікна браузера, включаючи, якщо є
                горизонтальний скроллбар. <br />
                console.log(window.innerHeight + 'px');
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.innerWidth</h3>}
            text={
              <p>
                Отримує ширину області вмісту вікна браузера, включаючи, якщо є,
                вертикальний скроллбар.
                <br />
                console.log(window.innerWidth + 'px');
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.outerHeight</h3>}
            text={
              <p>
                Отримує висоту разом із зовнішньою частиною вікна. <br />
                console.log(window.outerHeight);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.outerWidth</h3>}
            text={
              <p>
                Отримує ширину разом із зовнішньою частиною вікна. <br />
                console.log(window.outerWidth);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.screen</h3>}
            text={
              <p>
                Повертає посилання на об'єкт екрана, що асоціюється з вікном.
                <br />
                console.log(window.screen);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.screenX</h3>}
            text={
              <p>
                Повертає горизонтальний розмір лівої рамки браузера користувача
                з лівої сторони екрана.
                <br />
                console.log(window.screenX);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.screenY</h3>}
            text={
              <p>
                Повертає вертикальний розмір верхньої рамки браузера користувача
                з верхньої сторони екрана.
                <br />
                console.log(window.screenY);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.scrollMaxX</h3>}
            text={
              <p>
                Максимальний відступ, на який може бути проскролено вікно по
                горизонталі.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.scrollMaxY</h3>}
            text={
              <p>
                Максимальний відступ, на який може бути проскролено вікно по
                вертикалі.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.pageXOffset</h3>}
            text={<p>Псевдонім для window.scrollX.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.pageYOffset</h3>}
            text={<p>Псевдонім для window.scrollY</p>}
          />
          <TableTwoEqualCol
            title={<h3>.scrollX</h3>}
            text={
              <p>
                Повертає кількість пікселів, на яку документ уже був
                проскролений по горизонталі.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.scrollY</h3>}
            text={
              <p>
                Повертає кількість пікселів, на яку документ уже був
                проскролений по вертикалі.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.speechSynthesis</h3>}
            text={
              <p>
                Повертає об'єкт, який є точкою входу для використання Web Speech
                API, функціональність для мовного синтезу. <br />
                console.log(window.speechSynthesis);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.top</h3>}
            text={
              <p>
                Повертає посилання на перше вікно в ієрархії поточних вікон.
                <br />
                console.log(window.top);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.console</h3>}
            text={
              <p>
                Повертає посилання на об'єкт консолі, що забезпечує доступ до
                консолі браузера.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="bom_console">
        <TableBody>
          <TableOneCol text={<h3>Методи console.</h3>} />
          <TableTwoEqualCol
            title={<h3>.assert()</h3>}
            text={
              <p>
                Виводить у консоль повідомлення та стек виклику методу, якщо
                перший аргумент false.
                <br /> console.assert(2 + 2 === 5, "Error: 2 + 2 does not equal
                5");
                <br />
                <button className="bom-btn" onClick={handleAssert}>
                  Assert
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.clear()</h3>}
            text={
              <p>
                Очищення консолі.
                <br /> console.clear();
                <br />
                <button className="bom-btn" onClick={handleClear}>
                  Clear
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.count()</h3>}
            text={
              <p>
                Виводить кількість викликів методу з певною міткою.
                <br />
                console.count("Calling a Method 1"); <br />
                console.count("Calling a Method 2"); <br />
                console.count("Calling a Method 3"); <br />
                <button className="bom-btn" onClick={handleCount}>
                  Count
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.countReset()</h3>}
            text={
              <p>
                Онулює значення лічильника із заданим значенням.
                <br />
                console.count("Method call 1");
                <br />
                console.countReset("Method call");
                <br />
                console.count("Method call 2");
                <br />
                <button className="bom-btn" onClick={handleCountReset}>
                  CountReset
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.dir()</h3>}
            text={
              <p>
                Відображає інтерактивний список властивостей зазначеного
                об'єкта. Цей список дозволить вам переглянути дочірні об'єкти та
                їх властивості.
                <pre>
                  <code>{dir}</code>
                </pre>
                <button className="bom-btn" onClick={handleDir}>
                  Dir
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.dirxml()</h3>}
            text={
              <p>
                Відображає представлення вказаного об'єкта в XML/HTML-виді, якщо
                це можливо.
                <pre>
                  <code>{dirxml}</code>
                </pre>
                <button className="bom-btn" onClick={handleDirxml}>
                  Dirxml
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.error()</h3>}
            text={
              <p>
                Виводить повідомлення про помилку.
                <br />
                console.error("An error has occurred!"); <br />
                <button className="bom-btn" onClick={handleError}>
                  Error
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.group()</h3>}
            text={
              <p>
                Створює нове угрупування повідомлень, зсуваючи всі наступні
                виведені рядки вправо однією рівень. Для завершення групи
                викличте groupEnd().
                <br />
                console.group("Message group");
                <br />
                console.log("Message 1");
                <br />
                console.log("Message 2");
                <br />
                console.groupEnd();
                <br />
                <button className="bom-btn" onClick={handleGroup}>
                  Group
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.groupCollapsed()</h3>}
            text={
              <p>
                Так само як і group, тільки виводиться у закритому вигляді.
                <br />
                console.groupCollapsed("Message group");
                <br />
                console.log("Message 1");
                <br />
                console.log("Message 2");
                <br />
                console.groupEnd();
                <br />
                <button className="bom-btn" onClick={handleGroupCollapsed}>
                  GroupCollapsed
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.groupEnd()</h3>}
            text={
              <p>
                Вихід із поточної групи.
                <br />
                console.group("Message group");
                <br />
                console.log("Message 1");
                <br />
                console.log("Message 2");
                <br />
                console.groupEnd();
                <br />
                <button className="bom-btn" onClick={handleGroup}>
                  GroupEnd
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.info()</h3>}
            text={
              <p>
                Інформаційне повідомлення.
                <br />
                console.info("This is an informational message!");
                <br />
                <button className="bom-btn" onClick={handleInfo}>
                  Info
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.log()</h3>}
            text={
              <p>
                Загальний метод виведення інформації.
                <br />
                console.log("Hello World!");
                <br />
                <button className="bom-btn" onClick={handleLog}>
                  Log
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.profile()</h3>}
            text={
              <p>
                Запускає профайлер, вбудований у браузер.
                <br />
                console.profile("Profiling");
                <br />
                console.profileEnd();
                <br />
                <button className="bom-btn" onClick={handleProfile}>
                  Profile
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.profileEnd()</h3>}
            text={
              <p>
                Зупиняє профайлер.
                <br />
                console.profile("Profiling");
                <br />
                console.profileEnd();
                <br />
                <button className="bom-btn" onClick={handleProfile}>
                  ProfileEnd
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.table()</h3>}
            text={
              <p>
                Відображає табличні дані у вигляді таблиці.
                <pre>
                  <code>{table}</code>
                </pre>
                <button className="bom-btn" onClick={handleTable}>
                  Table
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.time()</h3>}
            text={
              <p>
                Запускає таймер з ім'ям з переданого параметра.
                <br />
                console.time("Time measurement"); <br />
                console.timeEnd("Time measurement"); <br />
                <button className="bom-btn" onClick={handleTime}>
                  Time
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.timeStamp()</h3>}
            text={
              <p>
                Ставить маркер у браузерному інструменті вимірювання
                продуктивності Timeline або Waterfall.
                <br />
                console.timeStamp("Time stamp"); <br />
                <button className="bom-btn" onClick={handleStamp}>
                  TimeStamp
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.timeEnd()</h3>}
            text={
              <p>
                Зупиняє вказаний таймер і записує в лог, скільки пройшло секунд
                від його старту.
                <br />
                console.time("Time measurement"); <br />
                console.timeEnd("Time measurement"); <br />
                <button className="bom-btn" onClick={handleTime}>
                  TimeEnd
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.trace()</h3>}
            text={
              <p>
                Виведення трасування стека.
                <pre>
                  <code>{trace}</code>
                </pre>
                <button className="bom-btn" onClick={handleTrace}>
                  Trace
                </button>
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.warn()</h3>}
            text={
              <p>
                Виводить попереджувальне повідомлення.
                <br />
                console.warn("This is a warning!"); <br />
                <button className="bom-btn" onClick={handleWarn}>
                  Warn
                </button>
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
