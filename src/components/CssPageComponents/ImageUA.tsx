import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import { circle, ellipse, inset, polygon } from "./CssConstPre.tsx";

export default function ImageUA() {
  return (
    <>
      <Table id="css_img">
        <TableBody>
          <TableOneCol text={<h2>Зображення.</h2>} />
          <TableTwoCol
            title={<h3>aspect-ratio:</h3>}
            text={
              <p>
                Задає переважне співвідношення сторін для поля, яке буде
                використовуватися при розрахунку автоматичних розмірів та деяких
                інших функціях макета.aspect-ratio
              </p>
            }
          />
          <TableTwoCol
            title={<h3>image-rendering:</h3>}
            text={
              <p>
                Повідомляє браузеру, яким алгоритмом інтерполювати зображення
                при масштабування його розмірів.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>mix-blend-mode:</h3>}
            text={
              <p>
                Визначає режим змішування кольорів вибраного елемента з низ
                лежачими шарами.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>shape-image-threshold:</h3>}
            text={
              <p>
                Задає граничне значення альфа-каналу, що використовується для
                вилучення форми з використанням зображення як значення для
                .shape-image-threshold shape-outside.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>shape-margin:</h3>}
            text={<p>Задає поле для фігури.</p>}
          />
          <TableTwoCol
            title={<h3>shape-outside:</h3>}
            text={
              <p>
                Властивість визначає фігури, навколо яких може обтікати текст.
                <br />
                circle() - Текст може обтікати по колу. <br />
                ellipse() - Текст може обтікати у вигляді еліпса. <br />
                inset() - Текст може обтікати у вигляді прямокутника <br />
                polygon() - Текст може обтікати у формі трикутника.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад circle"}
            title={
              <>
                <pre>
                  <code>{circle}</code>
                </pre>
                <div className=" circle ">
                  <div className="left"></div>
                  <p id="formated-text">
                    Деякий час на web page's text content appears to be
                    funneling Ваша вага догори на spot на сторінці до drive you
                    to follow a particular link. Деякий час ви не можете. Деякий
                    час на web page's text content appears to be funneling Ваша
                    вага догори на spot на сторінці до drive you to follow a
                    particular link. Sometimes you don't notice.Sometimes a web
                    page's text content appears to be funneling your attention
                    towards a spot on the page to drive ви дотримуєтеся
                    особливого link. Деякий час ви не можете.
                  </p>
                </div>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад ellipse"}
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
            titleButtonExample={"Приклад inset"}
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
            titleButtonExample={"Приклад polygon"}
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
