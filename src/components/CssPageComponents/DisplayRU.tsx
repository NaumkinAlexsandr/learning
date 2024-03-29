import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function DisplayRU() {
  return (
    <>
      <Table id="css_display">
        <TableBody>
          <TableOneCol text={<h2>Отображение элементов.</h2>} />
          <TableTwoCol
            title={<h3>display: block</h3>}
            text={
              <p>
                Блочные элементы располагаются один над другим, вертикально.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>display: inline</h3>}
            text={
              <p>Элементы располагаются на той же строке, последовательно.</p>
            }
          />
          <TableTwoCol
            title={<h3>display: inline-block</h3>}
            text={
              <p>
                Это значение – означает элемент, который продолжает находиться в
                строке (inline), но при этом может иметь важные свойства блока.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>display: inline-table</h3>}
            text={
              <p>
                Определяет, что элемент является таблицей как при использовании
                тега &lt; table &gt;, но при этом таблица является встроенным
                элементом и происходит ее обтекание другими элементами,
                например, текстом.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>display: inline-flex</h3>}
            text={
              <p>
                Встроенная версия flex позволяет элементу и его дочерним
                элементам иметь свойства flex, оставаясь при этом в обычном
                потоке документа/веб-страницы. В принципе, вы можно разместить
                два встроенных гибких контейнера в одной строке, если ширина
                была достаточно мала, без лишнего стиля, чтобы позволить им
                существовать в одной строке.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>display: flex</h3>}
            text={
              <p>
                Это сокращённое свойство, определяющее способность гибкого
                элемента растягиваться или сжиматься для заполнения собой
                доступного свободного пространства.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>display: flexbox</h3>}
            text={
              <p>
                Эффективно справляется с выравниванием, распределением и
                направлением элементов страницы. Двумя основными понятиями этой
                модели макета являются главная ось и поперечная ось. Главная ось
                flex-контейнера – это основное направление, вдоль которого
                выстраиваются flex-элементы, поперечная же ось ей
                перпендикулярна.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>display: grid</h3>}
            text={
              <p>
                Это набор пересекающихся горизонтальных и вертикальных линий,
                которые создают размерность и позиционируют систему координат
                для контента в самом grid -контейнере.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="css_flex">
        <TableBody>
          <TableOneCol text={<h3>Flex.</h3>} />
          <TableTwoCol
            title={<h3>flex-direction:</h3>}
            text={
              <p>
                Помогает изменить порядок расположения блоков.
                <br />
                row - Элементы размещаются по направлению текста.
                <br />
                row-reverse - Элементы отображаются в обратном порядке к
                направлению текста. <br />
                column - Элементы располагаются сверху вниз. <br />
                column-reverse - Элементы располагаются снизу вверх.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>flex-wrap:</h3>}
            text={
              <p>
                Переносит объект на новую строчку если он вылазит за область,
                также можно изменить расположение блоков.
                <br />
                nowrap - Размеры элементов устанавливаются автоматически, чтоб
                они поместились в один ряд. <br />
                wrap - Элементы автоматически переносятся на новую строку.
                <br />
                wrap-reverse - Элементы автоматически переносятся на новую
                строку, но строки расположены в обратном порядке.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>flex-flow:</h3>}
            text={
              <p>
                Является сокращением для отдельных свойств flex-direction и
                flex-wrap.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>flex-basis:</h3>}
            text={<p>Задаёт базовый размер элемента.</p>}
          />
          <TableTwoCol
            title={<h3>flex-grow:</h3>}
            text={
              <p>
                Позволяет увеличить размер элемента за счёт пустого
                пространства.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>flex-shrink:</h3>}
            text={
              <p>
                Позволяет уменьшить размер контейнера за счёт своего
                пространства.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="css_grid">
        <TableBody>
          <TableOneCol text={<h3>Grid.</h3>} />
          <TableTwoCol
            title={<h3>gap (grid-gap):</h3>}
            text={
              <p>
                Создает отступы между блоками. Отступ задаётся с помощью %, em,
                px и т.д.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>grid-column-gap:</h3>}
            text={<p>Создает отступы между рядами.</p>}
          />
          <TableTwoCol
            title={<h3>grid-row-gap:</h3>}
            text={<p>Создает отступы между строк.</p>}
          />
          <TableTwoCol
            title={<h3>grid-auto-columns:</h3>}
            text={<p>Задаёт одинаковую ширину всем блокам.</p>}
          />
          <TableTwoCol
            title={<h3>grid-auto-flow:</h3>}
            text={
              <p>
                Позволяет поменять последовательность размещения блоков с
                горизонтального на вертикальный. <br />
                row - Вертикальное расположение. <br />
                columns - Горизонтальное расположение.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>grid-auto-rows:</h3>}
            text={<p>Задаёт одинаковую высоту всем блокам.</p>}
          />
          <TableTwoCol
            title={<h3>grid-column:</h3>}
            text={
              <p>
                Позволяет указать начальную и конечную позицию любого блока по
                вертикали. <br />
                grid-column: 1/3;
              </p>
            }
          />
          <TableTwoCol
            title={<h3>grid-column-end:</h3>}
            text={
              <p>
                Позволяет указать конечную позицию любого блока по вертикали.
                <br />
                grid-column-end: 3;
              </p>
            }
          />
          <TableTwoCol
            title={<h3>grid-column-start:</h3>}
            text={
              <p>
                Позволяет указать начальную позицию любого блока по вертикали.
                <br />
                grid-column-start: 1;
              </p>
            }
          />
          <TableTwoCol
            title={<h3>grid-row:</h3>}
            text={
              <p>
                Позволяет указать начальную и конечную позицию любого блока по
                горизонтали. <br />
                grid-row: 1/3;
              </p>
            }
          />
          <TableTwoCol
            title={<h3>grid-row-end:</h3>}
            text={
              <p>
                Позволяет указать конечную позицию любого блока по горизонтали.
                <br />
                grid-row-end: 3;
              </p>
            }
          />
          <TableTwoCol
            title={<h3>grid-row-start:</h3>}
            text={
              <p>
                Позволяет указать начальную позицию любого блока по горизонтали.
                <br />
                grid-row-start: 1;
              </p>
            }
          />
          <TableTwoCol
            title={<h3>grid-area:</h3>}
            text={<p>Позволяет выделить область (шапка, секция и футер).</p>}
          />
          <TableTwoCol
            title={<h3>grid-template-areas:</h3>}
            text={<p>Создаёт области из объектов.</p>}
          />
          <TableTwoCol
            title={<h3>grid-template-columns:</h3>}
            text={
              <p>
                Указывает количество колонок и их размеры в ширину. <br />
                repeat (auto-fill) - Создаёт пространство для эфемерных
                элементов.
                <br />
                repeat (auto-fit) - Не создаёт пространство для эфемерных
                элементов.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>grid-template-rows:</h3>}
            text={<p>Указывает количество рядов и их размеры в высоту.</p>}
          />
        </TableBody>
      </Table>
      <Table id="css_otherElement">
        <TableBody>
          <TableOneCol text={<h3>Размещение элементов.</h3>} />
          <TableTwoCol
            title={<h3>align-content:</h3>}
            text={
              <p>
                Выравнивание элементов и заполнение ими контейнера. <br />
                flex-start - Элементы группируются в верхней части контейнера.
                <br />
                flex-end - Элементы группируются в нижней части контейнера.
                <br />
                center - Элементы группируются вертикально по центру контейнера.
                <br />
                space-between - Элементы отображаются с одинаковыми расстояниями
                между ними. <br />
                space-around - Элементы отображаются с одинаковыми расстояниями
                вокруг них. <br />
                space-evenly - Элементы отображаются с одинаковыми расстояниями
                вокруг ними. <br />
                stretch - Ряды растягиваются, чтоб заполнить контейнер
                равномерно.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>align-items:</h3>}
            text={
              <p>
                Производит выравнивание всех элементов внутри флекс контейнера
                вдоль поперечной оси.
                <br />
                center - Элементы располагаются по центру строки контейнера
                (середина поперечной оси, или оси столбца). <br />
                flex-start - Элементы располагаются в начале строки контейнера.
                <br />
                flex-end - Элементы располагаются в конце строки контейнера.
                <br />
                baseline - Элементы распологаются по их базовой линии. <br />
                initial - Устанавливает свойство в значение по умолчанию. <br />
                inherit - Указывает, что значение наследуется от родительского
                элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>align-self:</h3>}
            text={
              <p>
                Выравнивает флекс-элементы текущей строки, переписывая значение
                align-items.
                <br />
                auto - Берёт родительское значение align-items или stretch, если
                нет родителя. <br />
                flex-start - Элемент выравнивается в начале поперечной оси
                контейнера. <br />
                flex-end - Элемент выравнивается в конце поперечной оси
                контейнера. <br />
                center - Элемент выравнивается по центральной линии на
                поперечной оси. <br />
                baseline - Элемент выравнивается по базовой линии текста. <br />
                stretch - Элемент растягивается таким образом, чтобы занять всё
                свободное пространство контейнера по поперечной оси.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>justify-items:</h3>}
            text={
              <p>
                Производит выравнивание всех элементов макета сетки по оси
                строки.
                <br />
                stretch - Элементы растягиваются по размеру строки ячейки
                контейнера. <br />
                center - Элементы размещаются в середине каждой ячейки
                контейнера. <br />
                start - Элементы размещаются по начальному краю ячеек. <br />
                end - Элементы размещаются по конечному краю ячеек. <br />
                baseline - Элементы распологаются по их базовой линии.
                <br />
                initial - Устанавливает свойство в значение по умолчанию.
                <br />
                inherit - Указывает, что значение наследуется от родительского
                элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>justify-content:</h3>}
            text={
              <p>
                Производит выравнивание всех элементов внутри флекс контейнера
                по вертикали.
                <br />
                flex-start - Элементы позиционируются в начале контейнера.
                <br />
                flex-end - Элементы позиционируются в конце контейнера.
                <br />
                center- Элементы позиционируются в центре контейнера.
                <br />
                space-between - Элементы отображаются с одинаковыми расстояниями
                между ними. <br />
                space-around - Элементы отображаются с одинаковыми расстояниями
                вокруг них. <br />
                space-evenly - Элементы отображаются с одинаковыми расстояниями
                вокруг ними. <br />
                initial - Устанавливает свойство в значение по умолчанию. <br />
                inherit - Указывает, что значение наследуется от родительского
                элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>justify-self:</h3>}
            text={
              <p>
                Производит выравнивание элемента макета сетки внутри ячейки по
                оси строки.
                <br />
                stretch - Элемент растягивается по размеру столбца ячейки
                контейнера. <br />
                center - Элемент располагается по центру столбца ячейки
                контейнера. <br />
                start - Элемент располагается по начальному краю ячейки. <br />
                end - Элемент располагается по конечному краю ячейки. <br />
                baseline - Элемент распологается по его базовой линии.
                <br />
                initial - <br />
                Устанавливает свойство в значение по умолчанию. <br />
                inherit - Указывает, что значение наследуется от родительского
                элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>place-content:</h3>}
            text={
              <p>
                Позволяет вам выравнивать содержимое как по блочному, так и по
                встроенному направлениям одновременно (т. е. по свойствам и ) в
                соответствующей системе макета, такой как Grid или Flexbox
                .place-content align-contentjustify-content
              </p>
            }
          />
          <TableTwoCol
            title={<h3>place-items:</h3>}
            text={
              <p>
                Позволяет одновременно выравнивать элементы и колонки, и ряда
                (т.е. по свойствам align-items и justify-items) в
                соответствующей системе раскладки, такой как Grid или Flexbox.
                Если задано одно значение, оно используется для выравнивания и в
                колонке, и в ряду.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>place-self:</h3>}
            text={
              <p>
                Позволяет вам выравнивать отдельный элемент одновременно как в
                блочном, так и в линейном направлении (т. е. свойства и ) в
                соответствующей системе макета, такой как Grid или Flexbox .
                Если второе значение отсутствует, для него также используется
                первое значение.place-self align-selfjustify-self
              </p>
            }
          />
          <TableTwoCol
            title={<h3>order:</h3>}
            text={
              <p>
                Позволяет перемещать отдельные дочерние элементы по сторонам
                (-1, 0, 1).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>clear:</h3>}
            text={<p>Позволяет убрать обтекаемость при использовании.</p>}
          />
          <TableTwoCol
            title={<h3>clip:</h3>}
            text={
              <p>
                Обрезает область по прямоугольнику. Все, что не помещается в эту
                область, будет обрезано и становится невидимым.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>float:</h3>}
            text={
              <p>
                Определяет, по какой стороне будет выравниваться элемент, при
                этом остальные элементы будут обтекать его с других сторон.
                Когда значение свойства float равно none, элемент выводится на
                странице как обычно, при этом допускается, что одна строка
                обтекающего текста может быть на той же линии, что и сам
                элемент.
                <br />
                left - Выравнивает элемент по левому краю, а все остальные
                элементы, вроде текста, обтекают его по правой стороне.
                <br />
                right - Выравнивает элемент по правому краю, а все остальные
                элементы обтекают его по левой стороне. <br />
                none - Обтекание элемента не задается. <br />
                inherit - Наследует значение родителя.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>overflow:</h3>}
            text={
              <p>
                Позволяет обрезать содержимое которое не вмещается в блок, также
                можно создать скрол.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>overflow-anchor:</h3>}
            text={
              <p>
                Позволяет отказаться от поведения привязки прокрутки браузера,
                которое регулирует положение прокрутки, чтобы свести к минимуму
                сдвиги содержимого.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>overflow-block:</h3>}
            text={
              <p>
                Устанавливает, что будет отображаться, когда содержимое
                переполняет начальные и конечные края блока. Это может быть
                ничего, полоса прокрутки или содержимое переполнения.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>overflow-clip-margin:</h3>}
            text={
              <p>
                Определяет, насколько далеко за пределы своих границ может быть
                закрашен элемент , прежде чем он будет обрезан.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>overflow-inline:</h3>}
            text={
              <p>
                Устанавливает, что отображается, когда содержимое выходит за
                пределы встроенных начального и конечного краев блока.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>overflow-wrap:</h3>}
            text={
              <p>
                Применяется к строковым элементам, устанавливая должен ли
                браузер расставлять переносы строк внутри неразрывной строки,
                чтобы избежать выхода текста за границы элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>overflow-x:</h3>}
            text={
              <p>
                Управляет отображением содержания блочного элемента по
                горизонтали, если контент целиком не помещается и выходит за
                область сверху или снизу от блока.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>overflow-y:</h3>}
            text={
              <p>
                Управляет отображением содержания блочного элемента по
                вертикали, если контент целиком не помещается и выходит за
                область сверху или снизу от блока.
                <br />
                visible - Отображается все содержание элемента, даже за
                пределами установленной высоты. <br />
                hidden - Отображается только область внутри элемента, остальное
                будет скрыто. <br />
                scroll - Всегда добавляется вертикальная полоса прокрутки.
                <br />
                auto - В зависимости от браузера. В основном, вертикальная
                полоса прокрутки добавляется только при необходимости.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>visibility:</h3>}
            text={
              <p>
                Предназначен для отображения или скрытия элемента, включая рамку
                вокруг него и фон. При скрытии элемента, хотя он и становится не
                виден, место, которое элемент занимает, остается за ним. Если
                предполагается вывод разных элементов в одно и то же место
                экрана, для обхода этой особенности следует использовать
                абсолютное позиционирование или воспользоваться свойством
                display.
                <br />
                visible - Отображает элемент как видимый. <br />
                hidden - Элемент становится невидимым или правильней сказать,
                полностью прозрачным, поскольку он продолжает участвовать в
                форматировании страницы. <br />
                collapse - Если это значение применяется не к строкам или
                колонкам таблицы, то результат его использования будет таким же,
                как hidden. В случае использования collapse для содержимого
                ячеек таблиц, то заданные строки и колонки убираются, а таблица
                перестраивается по новой. <br />
                inherit - Наследует значение родителя.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>inset-block:</h3>}
            text={
              <p>
                Определяет начальное и конечное смещение логического блока
                элемента, которое сопоставляется с физической вставкой в
                ​​зависимости от режима записи элемента, направления и
                ориентации текста.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>inset-block-end:</h3>}
            text={<p>Только конечное смещение.</p>}
          />
          <TableTwoCol
            title={<h3>inset-block-start:</h3>}
            text={<p>Только начальное смещение.</p>}
          />
          <TableTwoCol
            title={<h3>inset-inline:</h3>}
            text={
              <p>
                Определяет логическое начальное и конечное смещения элемента во
                встроенном направлении, которые сопоставляются с физическими
                смещениями в зависимости от режима записи элемента, направления
                и ориентации текста.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>inset-inline-end:</h3>}
            text={<p>Только конечное смещение.</p>}
          />
          <TableTwoCol
            title={<h3>inset-inline-start:</h3>}
            text={<p>Только начальное смещение.</p>}
          />
          <TableTwoCol
            title={<h3>opacity:</h3>}
            text={
              <p>
                Устанавливает непрозрачность элемента. Непрозрачность - это
                степень, в которой содержимое скрывается за элементом, является
                противоположностью прозрачности.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>object-fit:</h3>}
            text={
              <p>
                Управляет соотношением сторон заменяемых элементов, таких как
                &lt; img &gt; и &lt; video &gt;, когда у них задана ширина или
                высота, а также способом масштабирования. Свойство object-fit
                может сохранять исходные пропорции элемента или наоборот,
                искажать пропорции, в угоду соблюдения размеров.
                <br />
                fill - Элемент масштабируется, чтобы соответствовать заданным
                размерам, при этом пропорции игнорируются. <br />
                contain - Элемент масштабируется, чтобы целиком уместиться в
                заданные размеры с соблюдением пропорций. <br />
                cover - Элемент увеличивается или уменьшается, чтобы целиком
                заполнить заданную область с сохранением пропорций. <br />
                none - Сохраняются исходные пропорции элемента, установленные
                значения ширины или высоты не влияют на содержимое.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>object-position:</h3>}
            text={
              <p>
                Определяет выравнивание контента выбранного замещаемого элемента
                внутри блока элемента. На областях блока, не покрытых объектом
                замещаемого элемента, будет отображаться фон элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>perspective:</h3>}
            text={
              <p>
                Определяет расстояние от плоскости экрана до точки сходимости
                линий и тем самым задаёт, насколько выражен эффект перспективы.
                Точка сходимости по умолчанию располагается в центре элемента и
                может быть изменена с помощью свойства perspective-origin.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>perspective-origin:</h3>}
            text={
              <p>
                Задаёт координаты точки, куда смотрит наблюдатель. Это свойство
                работает совместно со свойством perspective и определяет точку
                сходимости линий при перспективе.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
