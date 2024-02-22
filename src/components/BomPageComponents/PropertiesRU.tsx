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

export default function PropertiesRU() {
  return (
    <>
      <Table id="bom_title">
        <TableBody>
          <TableOneCol text={<h1>Работа с BOM.</h1>} />
          <TableOneCol text={<h2>Window</h2>} />
          <TableOneCol
            text={
              <p>
                Глобальный объект предоставляет переменные и функции, доступные
                в любом месте программы. По умолчанию это те, что встроены в
                язык или среду исполнения.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="bom_properties">
        <TableBody>
          <TableOneCol text={<h2>Свойства.</h2>} />
          <TableTwoEqualCol
            title={<h3>.closed</h3>}
            text={
              <p>Свойство, указывающее было ли текущее окно закрыто или нет.</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.devicePixelRatio</h3>}
            text={
              <p>
                Возвращает соотношение между физическими пикселями и пикселями
                на дисплее текущего устройства. <br />
                console.log(window.devicePixelRatio);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.document</h3>}
            text={
              <p>
                Возвращает ссылку на содержащийся в окне документ. <br />
                console.log(window.document);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.frameElement</h3>}
            text={
              <p>
                Возвращает элемент, в который встроено окно, или null, если оно
                не встроено.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.frames</h3>}
            text={
              <p>Возвращает массив дополнительных фреймов в текущем окне.</p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.length</h3>}
            text={
              <p>
                Возвращает число фреймов в окне. <br />
                console.log(window.length);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.fullScreen</h3>}
            text={
              <p>
                Это свойство указывает, отображается ли окно в полноэкранном
                режиме или нет.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.history</h3>}
            text={
              <p>
                Предоставляет интерфейс для манипулирования историей сессии
                браузера. <br />
                Переход на прошлую страницу - history.back(); <br />
                Переход на последнюю страницу - history.go();
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.localStorage</h3>}
            text={
              <p>
                Возвращает ссылку на локальный объект хранилища, используемый
                для хранения данных, которые могут быть доступны только
                первоисточникам, создавшим их. <br />
                console.log(window.localStorage);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.location</h3>}
            text={
              <p>
                Получает/устанавливает расположение или текущий URL для текущего
                объекта окна. <br />
                console.log(window.location);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.locationbar</h3>}
            text={
              <p>
                Возвращает объект locationbar, который может быть добавлен и
                убран из окна. <br />
                console.log(window.locationbar);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.menubar</h3>}
            text={
              <p>
                Возвращает объект menubar, который может быть добавлен и убран
                из окна. <br />
                console.log(window.menubar);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.personalbar</h3>}
            text={
              <p>
                Возвращает объект personalbar, который может быть добавлен и
                убран из окна. <br />
                console.log(window.personalbar);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.scrollbars</h3>}
            text={
              <p>
                Возвращает объект scrollbars, который может быть добавлен и
                убран из окна. <br />
                console.log(window.scrollbars);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.statusbar</h3>}
            text={
              <p>
                Возвращает объект statusbar, который может быть добавлен и убран
                из окна. <br />
                console.log(window.statusbar);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.toolbar</h3>}
            text={
              <p>
                Возвращает объект toolbar, который может быть добавлен и убран
                из окна. <br />
                console.log(window.toolbar);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.name</h3>}
            text={
              <p>
                Получает/устанавливает имя для окна. <br />
                window.name = 'Hello World!'; <br />
                console.log(window.name);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.navigator</h3>}
            text={
              <p>
                Возвращает ссылку на объект, содержащий информацию о приложении,
                запустившем скрипт.
                <br />
                console.log(window.navigator);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.opener</h3>}
            text={<p>Возвращает ссылку на окно, открывшее текущее окно.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.orientation</h3>}
            text={
              <p>
                Возвращает ориентацию в градусах (с зависимостью от 90
                градусов).
                <br />
                console.log(screen.orientation);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.sessionStorage</h3>}
            text={
              <p>
                Возвращает ссылку на объект хранения сессии, используемый для
                хранения данных, которые могут быть получены только источником,
                создавшим их. <br />
                console.log(window.sessionStorage);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.parent</h3>}
            text={
              <p>
                Возвращает ссылку на родителя текущего окна или встроенного
                фрейма. Если у объекта window нет родителя, то свойство данного
                объекта будет ссылаться на сам объект. <br />
                console.log(window.parent);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.innerHeight</h3>}
            text={
              <p>
                Получает высоту области содержимого окна браузера, включая, если
                есть, горизонтальный скроллбар. <br />
                console.log(window.innerHeight + 'px');
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.innerWidth</h3>}
            text={
              <p>
                Получает ширину области содержимого окна браузера, включая, если
                есть, вертикальный скроллбар.
                <br />
                console.log(window.innerWidth + 'px');
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.outerHeight</h3>}
            text={
              <p>
                Получает высоту вместе с внешней частью окна. <br />
                console.log(window.outerHeight);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.outerWidth</h3>}
            text={
              <p>
                Получает ширину вместе с внешней частью окна. <br />
                console.log(window.outerWidth);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.screen</h3>}
            text={
              <p>
                Возвращает ссылку на объект экрана, ассоциируемый с окном.
                <br />
                console.log(window.screen);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.screenX</h3>}
            text={
              <p>
                Возвращает горизонтальный размер левой рамки браузера
                пользователя с левой стороны экрана.
                <br />
                console.log(window.screenX);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.screenY</h3>}
            text={
              <p>
                Возвращает вертикальный размер верхней рамки браузера
                пользователя с верхней стороны экрана.
                <br />
                console.log(window.screenY);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.scrollMaxX</h3>}
            text={
              <p>
                Максимальный отступ, на который может быть проскроллено окно по
                горизонтали.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.scrollMaxY</h3>}
            text={
              <p>
                Максимальный отступ, на который может быть проскроллено окно по
                вертикали.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.pageXOffset</h3>}
            text={<p>Псевдоним для window.scrollX.</p>}
          />
          <TableTwoEqualCol
            title={<h3>.pageYOffset</h3>}
            text={<p>Псевдоним для window.scrollY</p>}
          />
          <TableTwoEqualCol
            title={<h3>.scrollX</h3>}
            text={
              <p>
                Возвращает число пикселей, на которое документ уже был
                проскроллен по горизонтали.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.scrollY</h3>}
            text={
              <p>
                Возвращает число пикселей, на которое документ уже был
                проскроллен по вертикали.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.speechSynthesis</h3>}
            text={
              <p>
                Возвращает объект, который является точкой входа для
                использования Web Speech API, функциональности для речевого
                синтеза. <br />
                console.log(window.speechSynthesis);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.top</h3>}
            text={
              <p>
                Возвращает ссылку на самое первое окно в иерархии текущих окон.
                <br />
                console.log(window.top);
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>.console</h3>}
            text={
              <p>
                Возвращает ссылку на объект консоли, обеспечивающего доступ к
                консоли браузера.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="bom_console">
        <TableBody>
          <TableOneCol text={<h3>Методы console.</h3>} />
          <TableTwoEqualCol
            title={<h3>.assert()</h3>}
            text={
              <p>
                Выводит в консоль сообщение и стек вызова метода, если первый
                аргумент false.
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
                Очистка консоли.
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
                Выводит количество вызовов метода с определённой меткой.
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
                Обнуляет значение счётчика с заданным значением.
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
                Отображает интерактивный список свойств указанного объекта. Этот
                список позволит вам посмотреть дочерние объекты и их свойства.
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
                Отображает представление указанного объекта в XML/HTML-виде,
                если это возможно.
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
                Выводит сообщение об ошибке.
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
                Создаёт новую группировку сообщений, сдвигая все следующие
                выводимые строки вправо на один уровень. Для завершения группы
                вызовите groupEnd().
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
                Также как и group, только выводится в закрытом виде.
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
                Выход из текущей группы.
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
                Информационное сообщение.
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
                Общий метод вывода информации.
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
                Запускает профайлер, встроенный в браузер.
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
                Останавливает профайлер.
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
                Отображает табличные данные в виде таблицы.
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
                Запускает таймер с именем из переданного параметра.
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
                Ставит маркер в браузерном инструменте измерения
                производительности Timeline или Waterfall.
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
                Останавливает указанный таймер и записывает в лог, сколько
                прошло секунд от его старта.
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
                Вывод трассировки стека.
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
                Выводит предупреждающее сообщение.
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
