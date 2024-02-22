import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function BackgroundRU() {
  return (
    <>
      <Table id="css_background">
        <TableBody>
          <TableOneCol text={<h2>Работа с фоном.</h2>} />
          <TableOneCol text={<h3>Background - Фон.</h3>} />
          <TableTwoCol
            title={<h3>background:</h3>}
            text={<p>Сокращённая форма всех свойств.</p>}
          />
          <TableTwoCol
            title={<h3>background-attachment:</h3>}
            text={
              <p>
                Устанавливает, будет ли прокручиваться фоновое изображение
                вместе с содержимым элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>background-blend-mode:</h3>}
            text={<p>Позволяет наложить один рисунок на другой.</p>}
          />
          <TableTwoCol
            title={<h3>background-clip:</h3>}
            text={
              <p>
                Определяет, как цвет фона или фоновая картинка должна выводиться
                под границами.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>background-color:</h3>}
            text={<p>Позволяет задать цвет фона.</p>}
          />
          <TableTwoCol
            title={<h3>background-image:</h3>}
            text={<p>Позволяет вставить картинку фона.</p>}
          />
          <TableTwoCol
            title={<h3>background-origin:</h3>}
            text={
              <p>
                Определяет область позиционирования фонового рисунка. Это
                свойство не применяется, когда значение background-attachment
                задано как fixed.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>background-position-x:</h3>}
            text={
              <p>
                Задает положение фонового изображения внутри элемента по
                горизонтали.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>background-position-y:</h3>}
            text={
              <p>
                Задает положение фонового изображения внутри элемента по
                вертикали.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>background-position:</h3>}
            text={<p>Позволяет менять позицию картинки.</p>}
          />
          <TableTwoCol
            title={<h3>background-repeat:</h3>}
            text={
              <p>Позволяет отключить или подключить повторение картинки.</p>
            }
          />
          <TableTwoCol
            title={<h3>background-size:</h3>}
            text={<p>Позволяет изменить размер картинки.</p>}
          />
          <TableTwoCol
            title={<h3>box-decoration-break:</h3>}
            text={
              <p>
                Указывает, как оформлять фрагмент текста при его переносе на
                другую строку. Работает только для следующих свойств:
                background, border, border-image, box-shadow, clip-path, margin
                и padding.
                <br />
                slice - Каждый фрагмент разрезается в месте переноса и никакие
                эффекты оформления на месте «разреза» не отображаются. В
                частности, граница не показывается, тень не выводится, радиус
                скругления работает только для всего блока целиком. <br />
                clone - Каждый фрагмент оформляется независимо. Ко всем
                фрагментам отдельно применяется рамка, тень, фон и др.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>box-shadow:</h3>}
            text={<p>Позволяет создать тень для объекта.</p>}
          />
          <TableTwoCol
            title={<h3>box-sizing:</h3>}
            text={
              <p>
                Позволяет изменить этот алгоритм, чтобы свойства width и height
                задавали размеры не контента, а размеры блока.
                <br />
                content-box - Основывается на стандартах CSS, при этом свойства
                width и height задают ширину и высоту содержимого и не включают
                в себя значения margin, padding и border. <br />
                border-box - Свойства width и height включают в себя значения
                padding и border, но не margin.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>accent-color:</h3>}
            text={
              <p>Применяется для замены фона в (checkbox, radio, range).</p>
            }
          />
          <TableTwoCol
            title={<h3>isolation:</h3>}
            text={
              <p>
                Определяет должен ли элемент создавать новый контекст наложения.
                Это свойство особенно полезно при использовании совместно с
                background-blend-mode.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
