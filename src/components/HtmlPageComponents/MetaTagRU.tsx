import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function MetaTagRU() {
  return (
    <>
      <Table id="html_metaTag">
        <TableBody>
          <TableOneCol text={<h2>Метаданные документа</h2>} />
          <TableOneCol
            text={
              <p>
                Метаданные содержат информацию о странице. Они включают в
                себя информацию о стилях, скрипты и данные, чтобы
                помочь программному обеспечению (поисковые системы, браузеры и
                т.д.) использовать и отображать страницу. Метаданные
                для стилей и скрипты могут быть определены на странице или
                ссылке на другой файл, который имеет информацию.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;base&gt; &lt;/base&gt;</h3>}
            text={
              <p>
                Определяет основной адрес (URL), используемый для всех
                относительных адресов (URLs) в документе. Может быть только
                один  &lt;base&gt; элемент в одном документе.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;head&gt; &lt;/head&gt;</h3>}
            text={
              <p>
                Содержит машиночитаемую информацию (metadata) о документе,
                например его заголовок, скрипты и страницы стилей.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;link /&gt;</h3>}
            text={
              <p>
                Определяет отношения между текущим документом и внешним
                ресурсом. Этот элемент чаще всего используется для ссылки на 
                CSS, а также для создания иконок сайта (как для иконок в стиле
                "favicon", так и для иконок домашних экранов и приложений
                мобильных устройств) среди прочего.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;meta /&gt;</h3>}
            text={
              <p>
                Представляет такие Metadata, которые не могут быть представлены
                другими HTML-метатегами, такими как  &lt;base&gt;, &lt;link&gt;,
                &lt;script&gt;, &lt;style&gt; или  &lt;title&gt;
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;style&gt; &lt;/style&gt;</h3>}
            text={
              <p>
                Содержит стилевую информацию для документа или его части. По
                умолчанию стилевые инструкции внутри этого элемента считаются
                написанными на CSS.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;title&gt; &lt;/title&gt;</h3>}
            text={
              <p>
                Определяет заголовок документа, который отображается в заголовке
                окна Browser или на вкладке страницы. Он содержит только текст,
                а теги внутри элемента игнорируются.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
