import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import { circle, ellipse, inset, polygon } from "./CssConstPre.tsx";

export default function ImageRU() {
  return (
    <>
      <Table id="css_img">
        <TableBody>
          <TableOneCol text={<h2>Изображения.</h2>} />
          <TableTwoCol
            title={<h3>aspect-ratio:</h3>}
            text={
              <p>
                Задает предпочтительное соотношение сторон для поля, которое
                будет использоваться при расчете автоматических размеров и
                некоторых других функциях макета.aspect-ratio
              </p>
            }
          />
          <TableTwoCol
            title={<h3>image-rendering:</h3>}
            text={
              <p>
                Сообщает браузеру, каким алгоритмом интерполировать изображение
                при масштабировании его размеров.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>mix-blend-mode:</h3>}
            text={
              <p>
                Определяет режим смешивания цветов выбранного элемента с низ
                лежащими слоями.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>shape-image-threshold:</h3>}
            text={
              <p>
                Задает пороговое значение альфа-канала, используемое для
                извлечения формы с использованием изображения в качестве
                значения для .shape-image-threshold shape-outside.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>shape-margin:</h3>}
            text={<p>Задает поле для фигуры.</p>}
          />
          <TableTwoCol
            title={<h3>shape-outside:</h3>}
            text={
              <p>
                Свойство определяет фигуры, вокруг которых может обтекать текст.
                <br />
                circle() - Текст может обтекать по кругу. <br />
                ellipse() - Текст может обтекать в форме эллипса. <br />
                inset() - Текст может обтекать в форме прямоугольника <br />
                polygon() - Текст может обтекать в форме треугольника.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример circle"}
            title={
              <>
                <pre>
                  <code>{circle}</code>
                </pre>
                <div className="circle">
                  <div className="left"></div>
                  <p id="formated-text">
                    Sometimes a web page's text content appears to be funneling
                    your attention towards a spot on the page to drive you to
                    follow a particular link. Sometimes you don't notice.
                    Sometimes a web page's text content appears to be funneling
                    your attention towards a spot on the page to drive you to
                    follow a particular link. Sometimes you don't
                    notice.Sometimes a web page's text content appears to be
                    funneling your attention towards a spot on the page to drive
                    you to follow a particular link. Sometimes you don't notice.
                  </p>
                </div>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример ellipse"}
            title={
              <>
                <pre>
                  <code>{ellipse}</code>
                </pre>
                <div className="ellipse">
                  <div className="left"></div>
                  <p id="formated-text">
                    Sometimes a web page's text content appears to be funneling
                    your attention towards a spot on the page to drive you to
                    follow a particular link. Sometimes you don't notice.
                    Sometimes a web page's text content appears to be funneling
                    your attention towards a spot on the page to drive you to
                    follow a particular link. Sometimes you don't
                    notice.Sometimes a web page's text content appears to be
                    funneling your attention towards a spot on the page to drive
                    you to follow a particular link. Sometimes you don't notice.
                  </p>
                </div>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример inset"}
            title={
              <>
                <pre>
                  <code>{inset}</code>
                </pre>
                <div className="inset">
                  <div className="left"></div>
                  <p id="formated-text">
                    Sometimes a web page's text content appears to be funneling
                    your attention towards a spot on the page to drive you to
                    follow a particular link. Sometimes you don't notice.
                    Sometimes a web page's text content appears to be funneling
                    your attention towards a spot on the page to drive you to
                    follow a particular link. Sometimes you don't
                    notice.Sometimes a web page's text content appears to be
                    funneling your attention towards a spot on the page to drive
                    you to follow a particular link. Sometimes you don't notice.
                  </p>
                </div>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример polygon"}
            title={
              <>
                <pre>
                  <code>{polygon}</code>
                </pre>
                <div className="polygon">
                  <div className="left"></div>
                  <p id="formated-text">
                    Sometimes a web page's text content appears to be funneling
                    your attention towards a spot on the page to drive you to
                    follow a particular link. Sometimes you don't notice.
                    Sometimes a web page's text content appears to be funneling
                    your attention towards a spot on the page to drive you to
                    follow a particular link. Sometimes you don't notice.
                  </p>
                </div>
              </>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
