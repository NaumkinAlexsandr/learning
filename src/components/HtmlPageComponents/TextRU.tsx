import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function TextRU() {
  return (
    <>
      <Table id="html_text">
        <TableBody>
          <TableOneCol text={<h2>Текстовое содержание.</h2>} />
          <TableOneCol
            text={
              <p>
                Используйте текстовые элементы HTML для организации блоков или
                разделов содержания, размещённые между тегами открытия
                &lt;body&gt; и закрытия &lt;/body&gt;. Важное значение для
                accessibility и SEO, чтобы эти элементы определили цель или
                структуру этого контента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;blockquote&gt; &lt;/blockquote&gt;</h3>}
            text={<p>Для создания цитат.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;div&gt; &lt;/div&gt;</h3>}
            text={
              <p>
                Является универсальным контейнером для потокового контента. Он
                не влияет на контент или макет до тех пор, пока не будет
                стилизован с помощью CSS.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;dd&gt; &lt;/dd&gt;</h3>}
            text={
              <p>
                Предоставляет подробности или определение предшествующего
                термина &lt;dt&gt; в списке определений &lt;dl&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;dl&gt; &lt;/dl&gt;</h3>}
            text={
              <p>
                Представляет собой список описаний. Этот элемент служит
                контейнером для списка пар терминов (определяемых элементом
                &lt;dt&gt;) и их описаний (определяемых элементами  &lt;dd&gt;).
                Этот элемент обычно используют при создании глоссария или для
                отображения метаданных (списка пар ключ-значение).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;dt&gt; &lt;/dt&gt;</h3>}
            text={
              <p>
                Определяет термин в описании или списке определений, как таковой
                должен использоваться внутри элемента &lt;dl&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;figcaption&gt; &lt;/figcaption&gt;</h3>}
            text={
              <p>
                Для создания заголовка иллюстрации используется с элементом
                &lt;figure&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;figure&gt; &lt;/figure&gt;</h3>}
            text={
              <p>
                Иллюстрация с необязательной подписью представляет
                самостоятельный контент, которая указывается с помощью
                элемента&lt;figcaption&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;hr /&gt;</h3>}
            text={
              <p>
                Элемент служит для тематического разделения абзацев. Рисует
                горизонтальную прямую.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;menu&gt; &lt;/menu&gt;</h3>}
            text={
              <p>
                Представляет группу команд, которые пользователь может выполнить
                или активировать. Он включает как меню-списки, которые могут
                отображаться в верхней части экрана, так и контекстные меню,
                например, такие, что могут появиться под кнопкой после нажатия.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;p&gt; &lt;/p&gt;</h3>}
            text={<p>Представляет собой абзац.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;pre&gt; &lt;/pre&gt;</h3>}
            text={
              <p>
                Представляет собой предварительно отформатированный текст,
                который должен быть представлен точно так, как написано в
                HTML-файле.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;ul&gt; &lt;/ul&gt;</h3>}
            text={
              <p>
                Используется для неупорядоченного списка - в частности для
                маркированного списка.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;ol&gt; &lt;/ol&gt;</h3>}
            text={
              <p>
                Используется для упорядоченного списка — в частности для
                пронумерованного списка.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;li&gt; &lt;/li&gt;</h3>}
            text={<p>Используется для создания элементов списка.</p>}
          />
        </TableBody>
      </Table>
    </>
  );
}
