import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function BoxModelRU() {
  return (
    <>
      <Table id="css_margin">
        <TableBody>
          <TableOneCol text={<h2>Блочная модель.</h2>} />
          <TableOneCol text={<h3>Margin - Внешний отступ.</h3>} />
          <TableTwoCol
            title={<h3>margin:</h3>}
            text={
              <p>
                Создает отступ за пределами блока. Отступ задаётся в %, рх, em и
                т.д. <br />
                margin: 1em - Применяется ко всем четырём сторонам. <br />
                margin: 5% auto - по вертикали | по горизонтали. <br />
                margin: 1em auto 2em - сверху | горизонтально | снизу. <br />
                margin: 2px 1em 0 auto - сверху | справа | снизу | слева.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>margin-left:</h3>}
            text={<p>Отступ слева.</p>}
          />
          <TableTwoCol
            title={<h3>margin-right:</h3>}
            text={<p>Отступ справа.</p>}
          />
          <TableTwoCol
            title={<h3>margin-top:</h3>}
            text={<p>Отступ сверху.</p>}
          />
          <TableTwoCol
            title={<h3>margin-bottom:</h3>}
            text={<p>Отступ снизу.</p>}
          />
          <TableTwoCol
            title={<h3>margin-block-end:</h3>}
            text={<p>Определяет конечное поле логического блока элемента.</p>}
          />
          <TableTwoCol
            title={<h3>margin-block-start:</h3>}
            text={<p>Определяет начальное поле логического блока элемента.</p>}
          />
          <TableTwoCol
            title={<h3>margin-block:</h3>}
            text={
              <p>
                Определяет начальные и конечные поля логического блока элемента,
                которые сопоставляются с физическими полями в зависимости от
                режима записи элемента, направления и ориентации текста.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>margin-inline-end:</h3>}
            text={
              <p>
                Определяется отступом логического элемента края, который
                сопоставляется с отступом в зависимости от направления
                написания, направленности и расположения текста.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>margin-inline-start:</h3>}
            text={
              <p>
                Определяется отступом логического элемента края, который
                сопоставляется с отступом в зависимости от направления
                написания, направленности и расположения текста.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>margin-inline:</h3>}
            text={
              <p>
                Определяет как логические встроенные начальные, так и конечные
                поля элемента, которые сопоставляются с физическими полями в
                зависимости от режима записи элемента, направления и ориентации
                текста.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>margin-trim:</h3>}
            text={
              <p>
                Позволяет контейнеру обрезать поля своих дочерних элементов там,
                где они примыкают к краям контейнера.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="css_padding">
        <TableBody>
          <TableOneCol text={<h3>Padding - Внутренний отступ.</h3>} />
          <TableTwoCol
            title={<h3>padding:</h3>}
            text={
              <p>
                Создает отступ внутри блока. Отступ задаётся в %, рх, em и т.д.
                <br />
                padding: 1em - Применяется ко всем четырём сторонам. <br />
                padding: 5% auto - по вертикали | по горизонтали. <br />
                padding: 1em auto 2em - сверху | горизонтально | снизу.
                <br />
                padding: 2px 1em 0 auto - сверху | справа | снизу | слева.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>padding-left:</h3>}
            text={<p>Отступ слева.</p>}
          />
          <TableTwoCol
            title={<h3>padding-right:</h3>}
            text={<p>Отступ справа.</p>}
          />
          <TableTwoCol
            title={<h3>padding-top:</h3>}
            text={<p>Отступ сверху.</p>}
          />
          <TableTwoCol
            title={<h3>padding-bottom:</h3>}
            text={<p>Отступ снизу.</p>}
          />
          <TableTwoCol
            title={<h3>padding-block-end:</h3>}
            text={<p>Определяет отступ конца логического блока элемента.</p>}
          />
          <TableTwoCol
            title={<h3>padding-block-start:</h3>}
            text={<p>Определяет отступ начала логического блока элемента.</p>}
          />
          <TableTwoCol
            title={<h3>padding-inline-end:</h3>}
            text={<p>Определяет отступ конца логического элемента.</p>}
          />
          <TableTwoCol
            title={<h3>padding-inline-start:</h3>}
            text={<p>Определяет отступ начала логического элемента.</p>}
          />
        </TableBody>
      </Table>
      <Table id="css_border">
        <TableBody>
          <TableOneCol text={<h3>Border - Рамка.</h3>} />
          <TableTwoCol
            title={<h3>border:</h3>}
            text={
              <p>
                {" "}
                Универсальное свойство border позволяет одновременно установить
                толщину, стиль и цвет границы вокруг элемента. Значения могут
                идти в любом порядке, разделяясь пробелом, браузер сам
                определит, какое из них соответствует нужному свойству.
                <br />
                dotted - Рамка из точек. <br />
                dashed - Прерывистая рамка.
                <br />
                solid - Сплошная рамка. <br />
                double - Двойная сплошная рамка.
                <br />
                inset - Вдавленная рамка. <br />
                outset - Выдавленная рамка.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-left:</h3>}
            text={<p>Рамка слева.</p>}
          />
          <TableTwoCol
            title={<h3>border-right:</h3>}
            text={<p>Рамка справа.</p>}
          />
          <TableTwoCol
            title={<h3>border-top:</h3>}
            text={<p>Рамка сверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom:</h3>}
            text={<p>Рамка снизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block:</h3>}
            text={<p>Рамка сверху и снизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-end:</h3>}
            text={<p>Рамка снизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-start:</h3>}
            text={<p>Рамка сверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline:</h3>}
            text={<p>Рамка слева и справа.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-end:</h3>}
            text={<p>Рамка справа.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-start:</h3>}
            text={<p>Рамка слева.</p>}
          />
          <TableTwoCol
            title={<h3>border-radius:</h3>}
            text={<p>Создает закругление сторон.</p>}
          />
          <TableTwoCol
            title={<h3>border-top-left-radius:</h3>}
            text={<p>Верхний левый угол.</p>}
          />
          <TableTwoCol
            title={<h3>border-top-right-radius:</h3>}
            text={<p>Верхний правый угол.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom-left-radius:</h3>}
            text={<p>Нижний левый угол.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom-right-radius</h3>}
            text={<p>Нижний правый угол.</p>}
          />
          <TableTwoCol
            title={<h3>border-start-end-radius:</h3>}
            text={
              <p>
                Определяет радиус логической границы элемента, который
                сопоставляется с радиусом физической границы в зависимости от
                элементов.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-start-start-radius:</h3>}
            text={
              <p>
                Определяет радиус логической границы элемента, который
                сопоставляется с радиусом физической границы в зависимости от
                элементов.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-end-end-radius:</h3>}
            text={
              <p>
                Определяет радиус логической границы элемента, который
                сопоставляется с радиусом физической границы в зависимости от
                элементов.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-end-start-radius:</h3>}
            text={
              <p>
                Определяет радиус логической границы элемента, который
                сопоставляется с радиусом физической границы в зависимости от
                элементов.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-color:</h3>}
            text={<p>Полностью цветная рамка.</p>}
          />
          <TableTwoCol
            title={<h3>border-left-color:</h3>}
            text={<p>Цветная рамка слева.</p>}
          />
          <TableTwoCol
            title={<h3>border-right-color:</h3>}
            text={<p>Цветная рамка справа.</p>}
          />
          <TableTwoCol
            title={<h3>border-top-color:</h3>}
            text={<p>Цветная рамка сверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom-color:</h3>}
            text={<p>Цветная рамка снизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-color:</h3>}
            text={<p>Цветная рамка сверху и снизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-end-color:</h3>}
            text={<p>Цветная рамка снизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-start-color:</h3>}
            text={<p>Цветная рамка сверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-color:</h3>}
            text={<p>Цветная рамка слева и справа.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-end-color:</h3>}
            text={<p>Цветная рамка справа.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-start-color:</h3>}
            text={<p>Цветная рамка слева.</p>}
          />
          <TableTwoCol
            title={<h3>border-style:</h3>}
            text={
              <p>
                Устанавливает стиль границы вокруг элемента. Допустимо задавать
                индивидуальные стили для разных сторон элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-left-style:</h3>}
            text={<p>Устанавливает стиль слева.</p>}
          />
          <TableTwoCol
            title={<h3>border-right-style:</h3>}
            text={<p>Устанавливает стиль справа.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom-style:</h3>}
            text={<p>Устанавливает стиль снизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-top-style:</h3>}
            text={<p>Устанавливает стиль сверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-style:</h3>}
            text={<p>Устанавливает стиль сверху и снизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-end-style:</h3>}
            text={<p>Устанавливает стиль снизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-start-style:</h3>}
            text={<p>Устанавливает стиль сверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-style:</h3>}
            text={<p>Устанавливает стиль слева и справа.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-end-style:</h3>}
            text={<p>Устанавливает стиль справа.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-start-style:</h3>}
            text={<p>Устанавливает стиль слева.</p>}
          />
          <TableTwoCol
            title={<h3>border-width:</h3>}
            text={<p>Устанавливает ширину рамки.</p>}
          />
          <TableTwoCol
            title={<h3>border-left-width:</h3>}
            text={<p>Устанавливает ширину рамки слева.</p>}
          />
          <TableTwoCol
            title={<h3>border-right-width:</h3>}
            text={<p>Устанавливает ширину рамки справа.</p>}
          />
          <TableTwoCol
            title={<h3>border-top-width:</h3>}
            text={<p>Устанавливает ширину рамки сверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom-width:</h3>}
            text={<p>Устанавливает ширину рамки снизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-image:</h3>}
            text={<p>Рисует изображение вокруг заданного элемента.</p>}
          />
          <TableTwoCol
            title={<h3>border-image-outset:</h3>}
            text={
              <p>
                Определяет величину, на которую область границы изображения
                выходит за пределы блока границы.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-image-repeat:</h3>}
            text={
              <p>
                Определяет, должна ли граница изображения быть повторена,
                масштабируема или растянута.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-image-slice:</h3>}
            text={
              <p>
                Определяет, как разделить изображение, используемое в роли
                изображения-границы и указанное в свойстве
                border-image-sourcecss3.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-image-source:</h3>}
            text={
              <p>
                Указывает путь (относительный или абсолютный) к изображению,
                которое будет использовано в качестве границы. Допускается
                использование градиентов вместо изображения.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-image-width:</h3>}
            text={
              <p>
                Задает ширину границы-изображения путем определения смещения
                (внутрь элемента от края границы).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-collapse:</h3>}
            text={
              <p>
                Определяет имеют ли ячейки внутри общие или отдельные границы.
                <br />
                collapse - Смежные ячейки имеют общие границы (модель рендеринга
                таблицы со свернутой границей). <br />
                separate - Смежные ячейки имеют четкие границы (модель
                рендеринга таблицы с разделенными границами).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-spacing:</h3>}
            text={
              <p>Задаёт расстояние между границами соседних ячеек в файле.</p>
            }
          />
          <TableTwoCol
            title={<h3>outline:</h3>}
            text={
              <p>
                Универсальное свойство, одновременно устанавливающее цвет, стиль
                и толщину внешней границы на всех четырёх сторонах элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>outline-color:</h3>}
            text={
              <p>
                Указывает цвет внешней границы элемента. В отличие от линии,
                задаваемой через border, линия через свойство outline
                отображается вокруг элемента, не влияя на ширину блока или его
                положение.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>outline-offset:</h3>}
            text={
              <p>
                Устанавливает расстояние между рамкой, созданной с помощью
                свойства outline, и краем или границей элемента добавленной
                через border.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>outline-width:</h3>}
            text={
              <p>
                Определяет толщину внешней границы элемента. В отличие от
                свойства border-width, для outline-width нельзя задать границу
                для каждой стороны элемента индивидуально. Чтобы outline-width
                работал, необходимо установить у свойства outline-style любое
                значение кроме none.
                <br />
                thin - Тонкая линия. Значение в пикселях может изменяться в
                зависимости от браузера, но обычно составляет 1 пиксель.
                <br />
                medium - Линия средней толщины (3 пикселя). <br />
                thick - Линия большой толщины (6 пикселей).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>outline-style:</h3>}
            text={
              <p>
                Устанавливает стиль внешней границы элемента. В отличие от
                линии, задаваемой через border, линия через outline отображается
                вокруг элемента, не влияя на ширину блока или его положение.
                <br />
                none - Граница не отображается. Это значение перекрывает
                свойство outline-width, если оно присутствует. <br />
                dotted - Линия состоящая из набора точек. <br />
                dashed - Пунктирная линия, состоящая из серии коротких отрезков.
                <br />
                solid - Сплошная линия.
                <br />
                double - Двойная линия. <br />
                groove - Создаёт эффект вдавленной рамки. <br />
                ridge - Создаёт эффект рельефной границы.
                <br />
                inset - Псевдотрёхмерная рамка, при которой правая и нижняя
                граница осветляется, а левая и верхняя линии затемняются.
                <br />
                outset - Псевдотрёхмерная рамка, при которой левая и верхняя
                граница имеют более светлый оттенок, чем заданный цвет, а правая
                и нижняя линии затемняются.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
