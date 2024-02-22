import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function TextUA() {
  return (
    <>
      <Table id="html_text">
        <TableBody>
          <TableOneCol text={<h2>Текстовий зміст.</h2>} />
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
            text={<p>Для створення цитат.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;div&gt; &lt;/div&gt;</h3>}
            text={
              <p>
                Є універсальним контейнером для потокового контенту. Він не
                впливає на контент або макет доти, доки не буде стилізований за
                допомогою CSS.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;dd&gt; &lt;/dd&gt;</h3>}
            text={
              <p>
                Надає подробиці або визначення попереднього терміну &lt;dt&gt; у
                списку визначень &lt;dl&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;dl&gt; &lt;/dl&gt;</h3>}
            text={
              <p>
                Являє собою перелік описів. Цей елемент служить контейнером для
                списку пар термінів (визначуваних елементом &lt;dt&gt;) та їх
                описів (визначаються елементами &lt;dd&gt;). Цей елемент
                зазвичай використовують при створенні глосарію або для
                відображення метаданих (списку пар ключ-значення).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;dt&gt; &lt;/dt&gt;</h3>}
            text={
              <p>
                Визначає термін в описі або списку визначень, як такий повинен
                використовуватися всередині елемента dl&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;figcaption&gt; &lt;/figcaption&gt;</h3>}
            text={
              <p>
                Для створення заголовка ілюстрації використовується з елементом
                &lt;figure&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;figure&gt; &lt;/figure&gt;</h3>}
            text={
              <p>
                Ілюстрація з необов'язковим підписом представляє самостійний
                контент, який вказується за допомогою елемента
                &lt;figcaption&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;hr /&gt;</h3>}
            text={
              <p>
                Елемент служить для тематичного поділу абзаців. Малює
                горизонтальну пряму.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;menu&gt; &lt;/menu&gt;</h3>}
            text={
              <p>
                Представляє групу команд, які користувач може виконати чи
                активувати. Він включає як меню-списки, які можуть відображатися
                у верхній частині екрана, так і контекстні меню, наприклад,
                такі, що можуть з'явитися під кнопкою після натискання.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;p&gt; &lt;/p&gt;</h3>}
            text={<p>Являє собою абзац.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;pre&gt; &lt;/pre&gt;</h3>}
            text={
              <p>
                Це попередньо відформатований текст, який повинен бути
                представлений точно так, як написано в HTML-файлі.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;ul&gt; &lt;/ul&gt;</h3>}
            text={
              <p>
                Використовується для невпорядкованого списку, зокрема для
                маркованого списку.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;ol&gt; &lt;/ol&gt;</h3>}
            text={
              <p>
                Використовується для впорядкованого списку, зокрема, для
                пронумерованого списку.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;li&gt; &lt;/li&gt;</h3>}
            text={<p>Використовується для створення елементів списку.</p>}
          />
        </TableBody>
      </Table>
    </>
  );
}
