import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function BoxModelUA() {
  return (
    <>
      <Table id="css_margin">
        <TableBody>
          <TableOneCol text={<h2>Блочна модель.</h2>} />
          <TableOneCol text={<h3>Margin - Зовнішній відступ.</h3>} />
          <TableTwoCol
            title={<h3>margin:</h3>}
            text={
              <p>
                Створює відступ за межами блоку. Відступ задається у %, рх, em і
                і т.д. <br />
                margin: 1em - Застосовується до всіх чотирьох сторін. <br />
                margin: 5% auto - по вертикалі по горизонталі. <br />
                margin: 1em auto 2em - зверху | горизонтально | знизу. <br />
                margin: 2px 1em 0 auto - зверху | праворуч | знизу | ліворуч.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>margin-left:</h3>}
            text={<p>Відступ зліва.</p>}
          />
          <TableTwoCol
            title={<h3>margin-right:</h3>}
            text={<p>Відступ праворуч.</p>}
          />
          <TableTwoCol
            title={<h3>margin-top:</h3>}
            text={<p>Відступ зверху.</p>}
          />
          <TableTwoCol
            title={<h3>margin-bottom:</h3>}
            text={<p>Відступ знизу.</p>}
          />
          <TableTwoCol
            title={<h3>margin-block-end:</h3>}
            text={<p>Визначає кінцеве поле логічного блоку елемента.</p>}
          />
          <TableTwoCol
            title={<h3>margin-block-start:</h3>}
            text={<p>Визначає початкове поле логічного блоку елемента.</p>}
          />
          <TableTwoCol
            title={<h3>margin-block:</h3>}
            text={
              <p>
                Визначає початкові та кінцеві поля логічного блоку елемента, які
                зіставляються з фізичними полями залежно від режиму запису
                елемента, напряму та орієнтації тексту.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>margin-inline-end:</h3>}
            text={
              <p>
                Визначається відступом логічного елемента краю, який
                зіставляється з відступом залежно від напряму написання,
                спрямованості та розташування тексту.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>margin-inline-start:</h3>}
            text={
              <p>
                Визначається відступом логічного елемента краю, який
                зіставляється з відступом залежно від напряму написання,
                спрямованості та розташування тексту.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>margin-inline:</h3>}
            text={
              <p>
                Визначає як логічні вбудовані початкові, так і кінцеві поля
                елементи, які зіставляються з фізичними полями залежно від
                режиму запису елемента, напряму та орієнтації тексту.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>margin-trim:</h3>}
            text={
              <p>
                Дозволяє контейнеру обрізати поля своїх дочірніх елементів там,
                де вони примикають до країв контейнера.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="css_padding">
        <TableBody>
          <TableOneCol text={<h3>Padding - Внутрішній відступ.</h3>} />
          <TableTwoCol
            title={<h3>padding:</h3>}
            text={
              <p>
                Створює відступ усередині блоку. Відступ задається у %, рх, em
                тощо.
                <br />
                padding: 1em - Застосовується до всіх чотирьох сторін. <br />
                padding: 5% auto - по вертикалі по горизонталі. <br />
                padding: 1em auto 2em - зверху | горизонтально | знизу.
                <br />
                padding: 2px 1em 0 auto - зверху | праворуч | знизу | ліворуч.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>padding-left:</h3>}
            text={<p>Відступ зліва.</p>}
          />
          <TableTwoCol
            title={<h3>padding-right:</h3>}
            text={<p>Відступ праворуч.</p>}
          />
          <TableTwoCol
            title={<h3>padding-top:</h3>}
            text={<p>Відступ зверху.</p>}
          />
          <TableTwoCol
            title={<h3>padding-bottom:</h3>}
            text={<p>Відступ знизу.</p>}
          />
          <TableTwoCol
            title={<h3>padding-block-end:</h3>}
            text={<p>Визначає відступ кінця логічного блоку елемента.</p>}
          />
          <TableTwoCol
            title={<h3>padding-block-start:</h3>}
            text={<p>Визначає відступ початку логічного блоку елемента.</p>}
          />
          <TableTwoCol
            title={<h3>padding-inline-end:</h3>}
            text={<p>Визначає відступ кінця логічного елемента.</p>}
          />
          <TableTwoCol
            title={<h3>padding-inline-start:</h3>}
            text={<p>Визначає відступ початку логічного елемента.</p>}
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
                Універсальна властивість border дозволяє одночасно встановити
                товщина, стиль і колір кордону навколо елемента. Значення можуть
                йти в Будь-якому порядку, розділяючись пробілом, браузер сам
                визначить, яке з них відповідає потрібній якості.
                <br />
                dotted - Рамка з точок. <br />
                dashed - Уривчаста рамка.
                <br />
                solid - Суцільна рамка. <br />
                double - Подвійна суцільна рамка.
                <br />
                inset - Вдавлена ​​рамка. <br />
                outset - Видавлена ​​рамка.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-left:</h3>}
            text={<p>Рамка зліва.</p>}
          />
          <TableTwoCol
            title={<h3>border-right:</h3>}
            text={<p>Рамка праворуч.</p>}
          />
          <TableTwoCol
            title={<h3>border-top:</h3>}
            text={<p>Рамка зверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom:</h3>}
            text={<p>Рамка знизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block:</h3>}
            text={<p>Рамка зверху та знизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-end:</h3>}
            text={<p>Рамка знизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-start:</h3>}
            text={<p>Рамка зверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline:</h3>}
            text={<p>Рамка ліворуч і праворуч.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-end:</h3>}
            text={<p>Рамка праворуч.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-start:</h3>}
            text={<p>Рамка зліва.</p>}
          />
          <TableTwoCol
            title={<h3>border-radius:</h3>}
            text={<p>Створює закруглення сторін.</p>}
          />
          <TableTwoCol
            title={<h3>border-top-left-radius:</h3>}
            text={<p>Верхній лівий кут.</p>}
          />
          <TableTwoCol
            title={<h3>border-top-right-radius:</h3>}
            text={<p>Верхній правий кут.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom-left-radius:</h3>}
            text={<p>Нижній лівий кут.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom-right-radius</h3>}
            text={<p>Нижній правий кут.</p>}
          />
          <TableTwoCol
            title={<h3>border-start-end-radius:</h3>}
            text={
              <p>
                Визначає радіус логічного кордону елемента, який зіставляється з
                радіусом фізичного кордону залежно від елементів.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-start-start-radius:</h3>}
            text={
              <p>
                Визначає радіус логічного кордону елемента, який зіставляється з
                радіусом фізичного кордону залежно від елементів.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-end-end-radius:</h3>}
            text={
              <p>
                Визначає радіус логічного кордону елемента, який зіставляється з
                радіусом фізичного кордону залежно від елементів.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-end-start-radius:</h3>}
            text={
              <p>
                Визначає радіус логічного кордону елемента, який зіставляється з
                радіусом фізичного кордону залежно від елементів.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-color:</h3>}
            text={<p>Цілком кольорова рамка.</p>}
          />
          <TableTwoCol
            title={<h3>border-left-color:</h3>}
            text={<p>Кольорова рамка зліва.</p>}
          />
          <TableTwoCol
            title={<h3>border-right-color:</h3>}
            text={<p>Кольорова рамка праворуч.</p>}
          />
          <TableTwoCol
            title={<h3>border-top-color:</h3>}
            text={<p>Кольорова рамка зверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom-color:</h3>}
            text={<p>Кольорова рамка знизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-color:</h3>}
            text={<p>Кольорова рамка зверху та знизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-end-color:</h3>}
            text={<p>Кольорова рамка знизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-start-color:</h3>}
            text={<p>Кольорова рамка зверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-color:</h3>}
            text={<p>Кольорова рамка зліва та справа.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-end-color:</h3>}
            text={<p>Кольорова рамка праворуч.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-start-color:</h3>}
            text={<p>Кольорова рамка зліва.</p>}
          />
          <TableTwoCol
            title={<h3>border-style:</h3>}
            text={
              <p>
                Встановлює стиль кордону навколо елемента. Допустимо ставити
                індивідуальні стилі для різних сторін елемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-left-style:</h3>}
            text={<p>Встановлює стиль зліва.</p>}
          />
          <TableTwoCol
            title={<h3>border-right-style:</h3>}
            text={<p>Встановлює стиль праворуч.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom-style:</h3>}
            text={<p>Встановлює стиль знизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-top-style:</h3>}
            text={<p>Встановлює стиль зверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-style:</h3>}
            text={<p>Встановлює стиль зверху та знизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-end-style:</h3>}
            text={<p>Встановлює стиль знизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-block-start-style:</h3>}
            text={<p>Встановлює стиль зверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-style:</h3>}
            text={<p>Встановлює стиль ліворуч і праворуч.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-end-style:</h3>}
            text={<p>Встановлює стиль праворуч.</p>}
          />
          <TableTwoCol
            title={<h3>border-inline-start-style:</h3>}
            text={<p>Встановлює стиль зліва.</p>}
          />
          <TableTwoCol
            title={<h3>border-width:</h3>}
            text={<p>Встановлює ширину рамки.</p>}
          />
          <TableTwoCol
            title={<h3>border-left-width:</h3>}
            text={<p>Встановлює ширину рамки зліва.</p>}
          />
          <TableTwoCol
            title={<h3>border-right-width:</h3>}
            text={<p>Встановлює ширину рамки праворуч.</p>}
          />
          <TableTwoCol
            title={<h3>border-top-width:</h3>}
            text={<p>Встановлює ширину рамки зверху.</p>}
          />
          <TableTwoCol
            title={<h3>border-bottom-width:</h3>}
            text={<p>Встановлює ширину рамки знизу.</p>}
          />
          <TableTwoCol
            title={<h3>border-image:</h3>}
            text={<p>Малює зображення навколо заданого елемента.</p>}
          />
          <TableTwoCol
            title={<h3>border-image-outset:</h3>}
            text={
              <p>
                Визначає величину, на яку область межі зображення виходить за
                межі блоку кордону.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-image-repeat:</h3>}
            text={
              <p>
                Визначає, чи повинна межа зображення бути повторена,
                масштабована або розтягнута.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-image-slice:</h3>}
            text={
              <p>
                Визначає, як розділити зображення, яке використовується в ролі
                зображення-кордону та вказане у властивості
                border-image-sourcecss3.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-image-source:</h3>}
            text={
              <p>
                Вказує шлях (відносний або абсолютний) до зображення, яке буде
                використано як межу. Допускається використання градієнтів
                замість зображення.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-image-width:</h3>}
            text={
              <p>
                Задає ширину межі-зображення шляхом визначення зміщення
                (всередину елемента від краю кордону).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-collapse:</h3>}
            text={
              <p>
                Визначає, чи мають осередки всередині загальні або окремі
                кордони.
                <br />
                collapse - Сумежні осередки мають спільні кордони (модель
                рендерингу таблиці зі згорнутим кордоном). <br />
                separate - Суміжні осередки мають чіткі межі (модель рендерингу
                таблиці з розділеними межами).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>border-spacing:</h3>}
            text={<p>Задає відстань між межами сусідніх осередків у файлі.</p>}
          />
          <TableTwoCol
            title={<h3>outline:</h3>}
            text={
              <p>
                Універсальна властивість, що одночасно встановлює колір, стиль
                та товщину зовнішнього кордону на всіх чотирьох сторонах
                елемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>outline-color:</h3>}
            text={
              <p>
                Вказує колір зовнішньої межі елемента. На відміну від лінії,
                задається через border, лінія через властивість outline
                відображається навколо елемента, не впливаючи на ширину блоку
                або його положення.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>outline-offset:</h3>}
            text={
              <p>
                Встановлює відстань між рамкою, створеною за допомогою
                властивості outline, і краєм чи межею елемента доданого через
                border.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>outline-width:</h3>}
            text={
              <p>
                Визначає товщину зовнішньої межі елемента. На відміну від якості
                border-width, для outline-width не можна задати кордон для
                кожної сторони елемента індивідуально. Щоб outline-width
                працював, необхідно встановити у властивості outline-style
                будь-яке значення крім none.
                <br />
                thin - Тонка лінія. Значення в пікселях може змінюватися Залежно
                від браузера, але зазвичай становить 1 піксель.
                <br />
                medium - Лінія середньої товщини (3 пікселі). <br />
                thick - Лінія великої товщини (6 пікселів).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>outline-style:</h3>}
            text={
              <p>
                Встановлює стиль зовнішньої межі елемента. На відміну від лінії,
                задається через border, лінія через outline відображається
                навколо елемента, не впливаючи на ширину блоку чи його
                положення.
                <br />
                none - Кордон не відображається. Це значення перекриває
                властивість outline-width, якщо вона є. <br />
                dotted - Лінія що складається з набору крапок. <br />
                dashed - Пунктирна лінія, що складається із серії коротких
                відрізків.
                <br />
                solid - Суцільна лінія.
                <br />
                double - Подвійна лінія. <br />
                groove - Створює ефект втиснутої рамки. <br />
                ridge - Створює ефект рельєфного кордону.
                <br />
                inset - Псевдотривимірна рамка, при якій права і нижня межа
                освітлюється, а ліва та верхня лінії затемняються.
                <br />
                outset - Псевдотривимірна рамка, при якій ліва та верхня кордон
                мають світліший відтінок, ніж заданий колір, а правий і нижня
                лінія затемняється.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
