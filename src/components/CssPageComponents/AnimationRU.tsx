import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import {
  backfaceVisibility,
  offset,
  transition,
  rotate,
  scale,
  translate,
} from "./CssConstPre.tsx";
export default function AnimationRU() {
  return (
    <>
      <Table id="css_animation">
        <TableBody>
          <TableOneCol text={<h2>Анимация, трансформация и переходы.</h2>} />
          <TableOneCol text={<h3>Анимация.</h3>} />
          <TableTwoCol
            title={<h3>animation-name:</h3>}
            text={
              <p>
                Определяет имя блока @keyframes, настраивающего кадры анимации.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-duration:</h3>}
            text={
              <p>
                Определяет длительность перехода. Можно указать время
                анимирования всех свойств перехода сразу или для каждого
                свойства в отдельности. Значение может задаваться в секундах (s)
                или миллисекундах (ms).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-timing-function:</h3>}
            text={
              <p>
                Определяет функцию, указывающую, как вычисляются промежуточные
                значения свойств. Большинство временных функций может быть
                определено графиком соответствующей функции, образующей четырьмя
                точками кривую Безье.
                <br />
                ease - Функция по умолчанию, анимация начинается медленно,
                разгоняется быстро и замедляется в конце. <br />
                ease-in - Анимация начинается медленно, а затем плавно
                ускоряется в конце.
                <br />
                ease-out - Анимация начинается быстро и плавно замедляется в
                конце. <br />
                ease-in-out - Анимация медленно начинается и медленно
                заканчивается. <br />
                linear - Линейная функция, анимация происходит равномерно на
                протяжении всего времени, без колебаний в скорости.
                <br />
                step-start - Задаёт пошаговую анимацию, разбивая анимацию на
                отрезки, изменения происходят в начале каждого шага. <br />
                step-end - Задаёт пошаговую анимацию, разбивая анимацию на
                отрезки, изменения происходят в начале каждого шага. <br />
                initial - Устанавливает значение свойства в значение по
                умолчанию. <br />
                inherit - Наследует значение свойства от родительского элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-delay:</h3>}
            text={
              <p>
                Указывает продолжительность ожидания перед запуском эффекта
                перехода свойства при изменении его значения.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-iteration-count:</h3>}
            text={
              <p>
                Определяет количество повторений анимации; вы можете
                использовать значение infinite для бесконечного повторения
                анимации.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-direction:</h3>}
            text={
              <p>
                Дает возможность при каждом повторе анимации идти по
                альтернативному пути, либо сбросить все значения и повторить
                анимацию.
                <br />
                normal - Анимация проигрывается вперёд каждую итерацию, то есть,
                когда анимация заканчивается, она сразу сбрасывается в начальное
                положение и снова проигрывается. <br />
                reverse - Анимация проигрывается наоборот, с последнего
                положения до первого и потом снова сбрасывается в конечное
                положение и снова проигрывается.
                <br />
                alternate - Анимация меняет направление в каждом цикле, то есть
                в первом цикле она начинает с начального положения, доходит до
                конечного, а во втором цикле продолжает с конечного и доходит до
                начального и так далее. <br />
                alternate-reverse - Анимация начинает проигрываться с конечного
                положения и доходит до начального, а в следующем цикле продолжая
                с начального переходит в конечное.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-play-state:</h3>}
            text={
              <p>
                Позволяет приостановить и возобновить анимацию. <br />
                running - Анимация проигрывается. <br />
                paused - Анимация поставлена на паузу.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-fill-mode:</h3>}
            text={
              <p>
                Настраивает значения, используемые анимацией, до и после
                исполнения.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="css_transform">
        <TableBody>
          <TableOneCol text={<h3>Трансформация.</h3>} />
          <TableTwoCol
            title={<h3>transform-box:</h3>}
            text={
              <p>
                content-box - Блок содержимого используется в качестве
                справочного блока. Ссылочный блок a &lt; table &gt; является
                граничным блоком его блока-оболочки таблицы, а не его блока
                таблицы.
                <br />
                border-box - Поле границы используется в качестве эталонного
                поля. Ссылочный блок a &lt; table &gt; является граничным блоком
                его блока-оболочки таблицы, а не его блока таблицы. <br />
                fill-box - Ограничивающая рамка объекта используется в качестве
                эталонной рамки. <br />
                stroke-box - Ограничивающая рамка штриха используется в качестве
                эталонной рамки. <br />
                view-box - Ближайшее окно просмотра SVG используется в качестве
                эталонного блока.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>transform-origin:</h3>}
            text={<p>Устанавливает источник для преобразований элемента.</p>}
          />
          <TableTwoCol
            title={<h3>transform-style:</h3>}
            text={
              <p>
                Определяет положение дочернего элемента в 3D-пространстве или в
                той же плоскости, что и родительский элемент. <br />
                preserve-3d - Показывает, что дочерний элемент должен быть
                спозиционирован в 3D-пространстве. <br />
                flat - Показывает, что дочерний элемент лежит в той же
                плоскости, что и родительский.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="css_transition">
        <TableBody>
          <TableOneCol text={<h3>Переходы.</h3>} />
          <TableTwoCol
            title={<h3>transition-delay:</h3>}
            text={
              <p>
                Указывает продолжительность ожидания перед запуском эффекта
                перехода свойства при изменении его значения.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>transition-duration:</h3>}
            text={
              <p>
                Определяет длительность перехода. Можно указать время
                анимирования всех свойств перехода сразу или для каждого
                свойства в отдельности. Значение может задаваться в секундах (s)
                или миллисекундах (ms).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>transition-property:</h3>}
            text={
              <p>
                Указывает имя или имена свойств, чьи переходы должны
                анимироваться. Изменение других свойств будет происходить
                обычным образом.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>transition-timing-function:</h3>}
            text={
              <p>
                Определяет функцию, указывающую, как вычисляются промежуточные
                значения свойств. Большинство временных функций может быть
                определено графиком соответствующей функции, образующей четырьмя
                точками кривую Безье.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример transition"}
            title={
              <>
                <pre>
                  <code>{transition}</code>
                </pre>
                <div className="transition"></div>
              </>
            }
          />
          <TableTwoCol
            title={<h3>offset:</h3>}
            text={
              <p>
                Задает все свойства, необходимые для анимации элемента по
                заданному пути.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример offset"}
            title={
              <>
                <pre>
                  <code>{offset}</code>
                </pre>
                <div className="offsetElement">
                  <div className="offset"></div>
                </div>
              </>
            }
          />
          <TableTwoCol
            title={<h3>offset-rotate:</h3>}
            text={
              <p>
                Определяет ориентацию/направление элемента при его расположении
                вдоль.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>offset-distance:</h3>}
            text={
              <p>Определяет положение offset-path размещаемого элемента.</p>
            }
          />
          <TableTwoCol
            title={<h3>backface-visibility:</h3>}
            text={
              <p>
                Определяет, видно ли заднюю грань элемента, когда он повёрнут к
                пользователю.
                <br />
                visible - Отображает элемент как видимый.
                <br />
                hidden - Элемент становится невидимым или правильней сказать,
                полностью прозрачным, поскольку он продолжает участвовать в
                форматировании страницы. <br />
                collapse - Если это значение применяется не к строкам или
                колонкам таблицы, то результат его использования будет таким же,
                как hidden. В случае использования collapse для содержимого
                ячеек таблиц, то они реагируют, словно к ним было добавлено
                display: none. Иными словами, заданные строки и колонки
                убираются, а таблица перестраивается по новой. Это значение не
                поддерживается браузером Internet Explorer. <br />
                inherit - Наследует значение родителя.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример backface-visibility"}
            title={
              <>
                <pre>
                  <code>{backfaceVisibility}</code>
                </pre>
                <div id="backface_visibility">
                  <div className=" offsetElementTwo">
                    <h3 id="formated-text">visible</h3>
                    <div className="container">
                      <div className="cube showbf">
                        <div className="face front">1</div>
                        <div className="face back">2</div>
                        <div className="face right">3</div>
                        <div className="face left">4</div>
                        <div className="face top">5</div>
                        <div className="face bottom">6</div>
                      </div>
                    </div>
                  </div>
                  <div className="offsetElementTwo">
                    <h3 id="formated-text">hidden</h3>
                    <div className="container">
                      <div className="cube hidebf">
                        <div className="face front">1</div>
                        <div className="face back">2</div>
                        <div className="face right">3</div>
                        <div className="face left">4</div>
                        <div className="face top">5</div>
                        <div className="face bottom">6</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <TableTwoCol
            title={<h3>rotate:</h3>}
            text={
              <p>
                Пзволяет задавать преобразования поворота индивидуально и
                независимо от свойства. Это лучше соответствует типичному
                использованию пользовательского интерфейса и избавляет от
                необходимости запоминать точный порядок функций преобразования
                для указания в свойстве.rotate transformtransform.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример rotate"}
            title={
              <>
                <pre>
                  <code>{rotate}</code>
                </pre>
                <div className="rotate">
                  <div>
                    <h4 className="rotate_text">Rotate</h4>
                  </div>
                </div>
              </>
            }
          />
          <TableTwoCol
            title={<h3>scale:</h3>}
            text={
              <p>
                Позволяет задавать преобразования масштаба индивидуально и
                независимо от свойства. Это лучше соответствует типичному
                использованию пользовательского интерфейса и избавляет от
                необходимости помнить точный порядок функций преобразования для
                указания значения.scale transformtransform.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример scale"}
            title={
              <>
                <pre>
                  <code>{scale}</code>
                </pre>
                <div className="scale">
                  <div>
                    <h4 className="scale_text">Scale</h4>
                  </div>
                </div>
              </>
            }
          />
          <TableTwoCol
            title={<h3>translate:</h3>}
            text={
              <p>
                Позволяет задавать преобразования перевода индивидуально и
                независимо от свойства. Это лучше соответствует типичному
                использованию пользовательского интерфейса и избавляет от
                необходимости помнить точный порядок функций преобразования для
                указания значения.translate transformtransform.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример translate"}
            title={
              <>
                <pre>
                  <code>{translate}</code>
                </pre>
                <div className="translate">
                  <div>
                    <h4 className="translate_text">Translation</h4>
                  </div>
                </div>
              </>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
