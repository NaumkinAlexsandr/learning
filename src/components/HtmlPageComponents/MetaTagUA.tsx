import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function MetaTagUA() {
  return (
    <>
      <Table id="html_metaTag">
        <TableBody>
          <TableOneCol text={<h2>Метадані документа</h2>} />
          <TableOneCol
            text={
              <p>
                Метадані містять інформацію про сторінку. Вони включають в себе
                інформацію про стилі, скрипти і дані, щоб допомогти програмного
                забезпечення (пошукові системи, браузери і т.д.) використовувати
                і відображати сторінку. Метадані для стилів і скрипти можуть
                бути визначені на сторінці або посилання на інший файл, який має
                інформацію.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;base&gt; &lt;/base&gt;</h3>}
            text={
              <p>
                Визначає основну адресу (URL), яка використовується для всіх
                відносних адрес (URLs) у документі. Можливо тільки один
                &lt;base&gt; елемент у одному документі.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;head&gt; &lt;/head&gt;</h3>}
            text={
              <p>
                Містить машиночитану інформацію (metadata) про документ,
                наприклад його заголовок, скрипти і сторінки стилів.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;link /&gt;</h3>}
            text={
              <p>
                Визначає відносини між поточним документом та зовнішнім
                ресурсом. Цей елемент найчастіше використовується для посилання
                на CSS, а також для створення іконок сайту (як для іконок у
                стилі "favicon", так і для іконок домашніх екранів та додатків
                мобільних пристроїв) серед іншого.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;meta /&gt;</h3>}
            text={
              <p>
                Представляє такі Metadata, які не можуть бути представлені
                іншими HTML-метатегами, такими як &lt;base&gt;, &lt;link&gt;,
                &lt;script&gt;, &lt;style&gt; або &lt;title&gt;
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;style&gt; &lt;/style&gt;</h3>}
            text={
              <p>
                Містить стильову інформацію для документа або його частини. За
                замовчуванням стильні інструкції всередині елемента елемента
                написані на CSS.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;title&gt; &lt;/title&gt;</h3>}
            text={
              <p>
                Визначає заголовок документа, який відображається у заголовку
                вікна Browser або на вкладці сторінки. Він містить лише текст, а
                теги всередині елемента ігноруються.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
