import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function FontRU() {
  return (
    <>
      <Table id="css_font">
        <TableBody>
          <TableOneCol text={<h2>Работа с текстом.</h2>} />
          <TableOneCol text={<h3>Font.</h3>} />
          <TableTwoCol
            title={<h3>font-family:</h3>}
            text={
              <p>
                Позволяет менять шрифт, а также подключать шрифты из других
                источников, которые за ранее импортированные.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-feature-settings:</h3>}
            text={
              <p>
                Управляет расширенными типографскими функциями в шрифтах
                OpenType.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-kerning:</h3>}
            text={
              <p>
                Определяет расстояние между буквами. В шрифтах с хорошей
                керриной эта функция делает расстояние между символами более
                равномерным и приятным для чтения, чем это было бы в противном
                случае.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-language-override:</h3>}
            text={
              <p>
                Управляет использованием глифов, зависящих от языка, в шрифте.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-optical-sizing:</h3>}
            text={
              <p>
                Определяет, оптимизирован ли рендеринг текста для просмотра в
                разных размерах.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-size-adjust:</h3>}
            text={
              <p>
                Устанавливает размер строчных букв относительно текущего размера
                шрифта.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-size:</h3>}
            text={<p>Устанавливает размер шрифта.</p>}
          />
          <TableTwoCol
            title={<h3>font-stretch:</h3>}
            text={
              <p>
                Определяет начертание шрифта. <br />
                semi-condensed, condensed, extra-condensed,ultra-condensed -
                Определяет более сжатое начертание шрифта. <br />
                semi-expanded, expanded, extra-expanded,ultra-expanded -
                Определяет более расширенное начертание шрифта.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-style:</h3>}
            text={<p>Задаёт стиль шрифта. Например нормал или курсив.</p>}
          />
          <TableTwoCol
            title={<h3>font-synthesis:</h3>}
            text={
              <p>
                Определяет, какие отсутствующие шрифты, жирный шрифт, курсив или
                маленькие заглавные буквы могут быть синтезированы браузером.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-ligatures:</h3>}
            text={
              <p>
                Управляет использованием альтернативных глифов. На эти
                альтернативные глифы можно ссылаться альтернативными именами,
                определенными в @font-feature-values.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-caps:</h3>}
            text={
              <p>
                Управляет использованием альтернативных глифов для заглавных
                букв.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-east-asian:</h3>}
            text={
              <p>
                Управляет использованием альтернативных глифов для
                восточноазиатских шрифтов, например японского и китайского.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-ligatures:</h3>}
            text={
              <p>
                Контролирует, какие лигатуры и контекстные формы используются в
                текстовом содержимом элемента, к которому применяется.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-numeric:</h3>}
            text={
              <p>
                Управляет использованием альтернативных начертаний для цифр,
                дробей и порядковых числительных.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-position:</h3>}
            text={
              <p>
                Управляет использованием альтернативных глифов меньшего размера,
                которые располагаются как верхний или нижний индекс.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant:</h3>}
            text={
              <p>Позволяет вам установить все варианты шрифта для шрифта.</p>
            }
          />
          <TableTwoCol
            title={<h3>font-variation-settings:</h3>}
            text={
              <p>
                Это свойство представляет собой низкоуровневый механизм,
                предназначенный для установки функций переменного шрифта, когда
                не существует другого способа включить или получить доступ к
                этим функциям. Вы должны использовать его только тогда, когда не
                существует основных свойств для установки этих функций.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-weight:</h3>}
            text={<p>Устанавливает начертание шрифта.</p>}
          />
        </TableBody>
      </Table>
      <Table id="css_text">
        <TableBody>
          <TableOneCol text={<h3>Text.</h3>} />
          <TableTwoCol
            title={<h3>vertical-align:</h3>}
            text={<p>Выравнивание текста по вертикали.</p>}
          />
          <TableTwoCol
            title={<h3>text-align:</h3>}
            text={<p>Выравнивание текста по горизонтали</p>}
          />
          <TableTwoCol
            title={<h3>text-combine-upright:</h3>}
            text={
              <p>
                Композиция рассматривается как единый вертикальный глиф для
                макета и оформления.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration:</h3>}
            text={
              <p>
                Позволяет подчеркивать текст. <br />
                <span className="text-decoration">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration-color:</h3>}
            text={
              <p>
                Позволяет подчеркивать текст цветом. <br />
                <span className="text-decoration-color">
                  This can't be real!
                </span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration-line:</h3>}
            text={
              <p>
                Позволяет подчеркнуть текст в трёх положениях, можно применить
                несколько вариантов через пробел. <br />
                <span className="text-decoration-line">
                  This can't be real!
                </span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration-skip-ink:</h3>}
            text={
              <p>
                Позволяет прервать линию если она налезет на букву. <br />
                <span className="text-decoration-skip-ink">
                  parapsychologists
                </span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration-skip:</h3>}
            text={
              <p>
                Указывает, какие части содержимого элемента должны пропускать
                любые текстовые украшения, влияющие на элемент.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration-style:</h3>}
            text={
              <p>
                Задает стиль линий, заданных параметром text-decoration-line.
                <br />
                <span className="text-decoration-style">
                  This can't be real!
                </span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-emphasis:</h3>}
            text={
              <p>
                Применяет метки выделения к тексту (кроме пробелов и управляющих
                символов).
                <br />
                <span className="text-emphasis">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-emphasis-color:</h3>}
            text={
              <p>
                Позволяет изменить цвет метки. <br />
                <span className="text-emphasis-color">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-emphasis-position:</h3>}
            text={
              <p>
                Позволяет изменить позицию метки.
                <br />
                <span className="text-emphasis-position">
                  This can't be real!
                </span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-emphasis-style:</h3>}
            text={
              <p>
                Позволяет изменить стиль метки.
                <br />
                <span className="text-emphasis-style">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-indent:</h3>}
            text={
              <p>
                Определяет размер отступа (пустого места) перед строкой в
                текстовом блоке.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-justify:</h3>}
            text={
              <p>
                Определяет какой тип выравнивания следует применить к тексту,
                когда text-align: justify; применяется к элементу.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-orientation:</h3>}
            text={
              <p>
                Устанавливает ориентацию текстовых символов в строке. Это влияет
                только на текст в вертикальном режиме (когда не ). Это полезно
                для управления отображением языков, использующих вертикальное
                письмо, а также для создания вертикальных заголовков таблиц.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-overflow:</h3>}
            text={<p>Обрезает текст который вылазит за пределы области.</p>}
          />
          <TableTwoCol
            title={<h3>text-rendering:</h3>}
            text={
              <p>
                Предоставляет механизму рендеринга информацию о том, что следует
                оптимизировать при рендеринге текста.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-shadow:</h3>}
            text={
              <p>
                Позволяет создать тень для текста.
                <br />
                <span className="text-shadow">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-size-adjust:</h3>}
            text={
              <p>
                Контролирует алгоритм увеличения текста, используемый на
                некоторых смартфонах и планшетах.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-transform:</h3>}
            text={
              <p>
                Можно использовать для отображения текста в верхнем или нижнем
                регистре или с заглавными буквами каждого слова.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-underline-position:</h3>}
            text={
              <p>
                Указывает положение подчеркивания, которое устанавливается с
                использованием значения свойства.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="css_otherText">
        <TableBody>
          <TableOneCol text={<h3>Дополнительные свойства для текста.</h3>} />
          <TableTwoCol
            title={<h3>color:</h3>}
            text={
              <p>
                Определяет цвет текста элемента. <br />
                <span className="color">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>inline-size:</h3>}
            text={
              <p>
                Определяет горизонтальные или вертикальные размеры блока в
                зависимости от режима написания.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>writing-mode:</h3>}
            text={
              <p>
                Расположение текста горизонтального или вертикального, также как
                положение и направление блока.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>letter-spacing:</h3>}
            text={<p>Определяет меж буквенное расстояние в тексте.</p>}
          />
          <TableTwoCol
            title={<h3>line-break:</h3>}
            text={
              <p>
                Устанавливает способ разрыва строки текста на китайском,
                японском или корейском.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>line-height-step:</h3>}
            text={
              <p>
                Задает единицу шага для высоты строки. Когда свойство
                установлено, высота строкового блока округляется до ближайшего
                кратного единице измерения.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>line-height:</h3>}
            text={<p>Устанавливает величину пространства между строками.</p>}
          />
          <TableTwoCol
            title={<h3>counter-increment:</h3>}
            text={
              <p>
                Увеличивает или уменьшает значение счетчика CSS на заданное
                значение. <br />
                Пример: counter-increment: example-counter 5; <br /> Получаем:
                Глава: 5
              </p>
            }
          />
          <TableTwoCol
            title={<h3>counter-reset:</h3>}
            text={
              <p>
                Сбрасывает счетчик CSS до заданного значения. <br />
                Пример: counter-reset: chapter-count 5; <br /> Получаем: Глава
                1: Глава 1.6: Глава 1.7
              </p>
            }
          />
          <TableTwoCol
            title={<h3>counter-set:</h3>}
            text={
              <p>
                Устанавливает для счетчика CSS заданное значение.
                <br />
                Пример: counter-set: chapter-count 5;
                <br /> Получаем: Глава 1: Глава 5:
              </p>
            }
          />
          <TableTwoCol
            title={<h3>direction:</h3>}
            text={
              <p>
                Предназначен для сайтов, в которых имеет значение направление
                текста. Например, при использовании арабского алфавита чтение
                происходит справа налево.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>hyphens:</h3>}
            text={
              <p>
                Сообщает браузеру, как расставлять переносы слов в блоке текста.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>user-select:</h3>}
            text={
              <p>
                Поволяет запретить выделение для текста в выбранной области.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>white-space:</h3>}
            text={<p>Текс в одной строке без переноса.</p>}
          />
          <TableTwoCol
            title={<h3>resize:</h3>}
            text={
              <p>
                Указывает, можно ли пользователю изменять размеры текстового
                поля.
                <br />
                none - Размеры элемента не изменяются. <br />
                both - Можно изменять размеры элемента по горизонтали и
                вертикали.
                <br />
                horizontal - Можно изменять размеры элемента только по
                горизонтали. <br />
                vertical - Можно изменять размеры элемента только по вертикали.
                <br />
                inherit - Наследует значение родителя.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>word-break:</h3>}
            text={
              <p>
                Определяет, где будет установлен перевод на новую строку в
                случае превышения текстом границ блока. <br />
                normal - Используются правила переноса строк по умолчанию. Как
                правило, в этом случае строки не переносятся или переносятся в
                тех местах, где явно задан перенос (например, с помощью тега
                &lt; br /&gt;). <br />
                break-all - Перенос строк добавляется автоматически, чтобы слово
                поместилось в заданную ширину блока. Значение не работает для
                текста на китайском, корейском или японском языке. <br />
                keep-all - Не разрешает перенос строк в словах на китайском,
                корейском или японском языке. Для остальных языков действует как
                normal.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>word-spacing:</h3>}
            text={
              <p>
                Устанавливает длину пробела между словами и между тегами.
                <br />
                normal - Устанавливает интервал между словами как обычно.
                <br />
                inherit - Наследует значение родителя.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
