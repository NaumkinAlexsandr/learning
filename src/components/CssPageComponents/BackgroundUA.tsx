import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function BackgroundUA() {
  return (
    <>
      <Table id="css_background">
        <TableBody>
          <TableOneCol text={<h2>Робота з фоном.</h2>} />
          <TableOneCol text={<h3>Background - Фон.</h3>} />
          <TableTwoCol
            title={<h3>background:</h3>}
            text={<p>Скорочена форма всіх властивостей.</p>}
          />
          <TableTwoCol
            title={<h3>background-attachment:</h3>}
            text={
              <p>
                Встановлює, чи прокручуватиметься фонове зображення разом із
                вмістом елемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>background-blend-mode:</h3>}
            text={<p>Дозволяє накласти один малюнок на інший.</p>}
          />
          <TableTwoCol
            title={<h3>background-clip:</h3>}
            text={
              <p>
                Визначає, як колір фону чи фонова картинка має виводитися під
                кордоном.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>background-color:</h3>}
            text={<p>Дозволяє задати колір тла.</p>}
          />
          <TableTwoCol
            title={<h3>background-image:</h3>}
            text={<p>Дозволяє вставити картинку фону.</p>}
          />
          <TableTwoCol
            title={<h3>background-origin:</h3>}
            text={
              <p>
                Визначає область розташування фонового малюнка. Це властивість
                не застосовується, коли значення background-attachment
                поставлено як fixed.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>background-position-x:</h3>}
            text={
              <p>
                Задає положення фонового зображення всередині елемента
                горизонталі.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>background-position-y:</h3>}
            text={
              <p>
                Задає положення фонового зображення всередині елемента
                вертикалі.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>background-position:</h3>}
            text={<p>Дозволяє змінювати позицію зображення.</p>}
          />
          <TableTwoCol
            title={<h3>background-repeat:</h3>}
            text={
              <p>Дозволяє вимкнути або підключити повторення зображення.</p>
            }
          />
          <TableTwoCol
            title={<h3>background-size:</h3>}
            text={<p>Дозволяє змінити розмір зображення.</p>}
          />
          <TableTwoCol
            title={<h3>box-decoration-break:</h3>}
            text={
              <p>
                Вказує, як оформляти фрагмент тексту під час його перенесення на
                інший рядок. Працює тільки для таких властивостей: background,
                border, border-image, box-shadow, clip-path, margin та padding.
                <br />
                slice - Кожен фрагмент розрізається в місці перенесення та ніякі
                ефекти оформлення дома «розрізу» не відображаються. У зокрема,
                кордон не показується, тінь не виводиться, радіус Заокруглення
                працює тільки для всього блоку повністю. <br />
                clone – Кожен фрагмент оформляється незалежно. До всіх
                фрагментам окремо застосовується рамка, тінь, тло та ін.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>box-shadow:</h3>}
            text={<p>Дозволяє створити тінь для об'єкта.</p>}
          />
          <TableTwoCol
            title={<h3>box-sizing:</h3>}
            text={
              <p>
                Дозволяє змінити цей алгоритм, щоб властивості width і height
                задавали розміри контенту, а розміри блоку.
                <br />
                content-box - Ґрунтується на стандартах CSS, при цьому
                властивості width та height задають ширину та висоту вмісту та
                не включають у собі значення margin, padding і border. <br />
                border-box - Властивості width і height включають значення
                padding та border, але не margin.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>accent-color:</h3>}
            text={
              <p>Застосовується для заміни фону (checkbox, radio, range).</p>
            }
          />
          <TableTwoCol
            title={<h3>isolation:</h3>}
            text={
              <p>
                Визначає, чи повинен елемент створювати новий контекст
                накладання. Ця властивість особливо корисна при використанні
                спільно з background-blend-mode.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}

/* 
<Table><TableBody></TableBody></Table>
<TableOneCol text={<p></p>} />
<TableOneCol text={<h3></h3>} />
<TableTwoCol title={<h3></h3>} text={} />
<TableTwoEqualCol title={<p></p>} text={<p></p>} />

<ButtonExampleTwoCol
  titleButtonExample={"Приклад"}
  title={
    <>
      <pre>
        <code>{}</code>
      </pre>
      <p id="formated-text"></p>
    </>
  }
/>

<ButtonExample
                titleButtonExample={"Приклад"}
                title={<p id="formated-text"></p>}
                text={
                  <pre>
                    <code>{}</code>
                  </pre>
                }
              />


*/
