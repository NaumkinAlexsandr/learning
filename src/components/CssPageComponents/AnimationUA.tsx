import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import {
  backfaceVisibility,
  offset,
  transition,
  rotate,
  scale,
  translate,
} from "./CssConstPre.tsx";

export default function AnimationUA() {
  return (
    <>
      <Table id="css_animation">
        <TableBody>
          <TableOneCol text={<h2>Анімація, трансформація та переходи.</h2>} />
          <TableOneCol text={<h3>Анімація.</h3>} />
          <TableTwoCol
            title={<h3>animation-name:</h3>}
            text={
              <p>
                Визначає ім'я блоку @keyframes, що налаштовує кадри анімації.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-duration:</h3>}
            text={
              <p>
                Визначає тривалість переходу. Можна вказати час анімації всіх
                властивостей переходу одразу або для кожної властивості окремо.
                Значення може задаватися в секундах (s) або мілісекундах (ms).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-timing-function:</h3>}
            text={
              <p>
                Визначає функцію, яка вказує, як обчислюються проміжні значення
                властивостей. Більшість тимчасових функцій може бути визначено
                графіком відповідної функції, що утворює чотирма точками криву
                Безьє.
                <br />
                ease - Функція за промовчанням, анімація починається повільно,
                розганяється швидко і сповільнюється наприкінці. <br />
                ease-in - Анімація починається повільно, потім плавно
                прискорюється в кінці.
                <br />
                ease-out - Анімація починається швидко і плавно сповільнюється
                наприкінці.
                <br />
                ease-in-out - Анімація повільно починається і повільно
                закінчується. <br />
                linear - Лінійна функція, анімація відбувається поступово
                протягом усього часу, без вагань у швидкості.
                <br />
                step-start - Задає покрокову анімацію, розбиваючи анімацію на
                відрізки, зміни відбуваються на початку кожного кроку. <br />
                step-end - Задає покрокову анімацію, розбиваючи анімацію на
                відрізки, зміни відбуваються на початку кожного кроку. <br />
                initial - Встановлює значення властивості значення за
                замовчуванням. <br />
                inherit - Наслідує значення властивості батьківського елемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-delay:</h3>}
            text={
              <p>
                Вказує тривалість очікування перед запуском ефекту переходу
                властивості при зміні його значення.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-iteration-count:</h3>}
            text={
              <p>
                Визначає кількість повторень анімації; Ви можете використовувати
                значення infinite для нескінченного повторення анімації.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-direction:</h3>}
            text={
              <p>
                Надає можливість при кожному повторі анімації йти альтернативним
                чином шляхи, або скинути всі значення та повторити анімацію.
                <br />
                normal - Анімація програється вперед кожну ітерацію, то є, коли
                анімація закінчується, вона відразу скидається в початкове
                становище і знову програється. <br />
                reverse - Анімація, розваги програється навпаки, з останнього до
                першого і потім знову скидається в кінцеве положення та знову
                програється.
                <br />
                alternate - Анімація змінює напрямок у кожному циклі, то є в
                першому циклі вона починає з початкового положення, доходить до
                кінцевого, а у другому циклі продовжує з кінцевого та доходить
                до початкового і таке інше. <br />
                alternate-reverse - Анімація починає програватися з кінцевого
                стану і доходить до початкового, а в наступному циклі
                продовжуючи з початкового переходить у кінцеве.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-play-state:</h3>}
            text={
              <p>
                Дозволяє призупинити та відновити анімацію. <br />
                running - Анімація програється. <br />
                paused - Анімація поставлена ​​на паузу.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>animation-fill-mode:</h3>}
            text={
              <p>
                Налаштовує значення, що використовуються анімацією, до та після
                виконання.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="css_transform">
        <TableBody>
          <TableOneCol text={<h3>Трансформація.</h3>} />
          <TableTwoCol
            title={<h3>transform-box:</h3>}
            text={
              <p>
                content-box - Блок вмісту використовується як довідковий блоку.
                Посилальний блок a &lt; table &gt; є граничним блоком його
                блок-оболонка таблиці, а не його блок таблиці.
                <br />
                border-box - Поле кордону використовується як еталонний поля.
                Посилальний блок a &lt; table &gt; є граничним блоком його
                блок-оболонка таблиці, а не його блок таблиці. <br />
                fill-box - Обмежуюча рамка об'єкта використовується як еталонна
                рамки. <br />
                stroke-box - Обмежуюча рамка штриха використовується в як
                еталонної рамки. <br />
                view-box - Найближче вікно перегляду SVG використовується як
                еталонний блок.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>transform-origin:</h3>}
            text={<p>Встановлює джерело для перетворення елементів.</p>}
          />
          <TableTwoCol
            title={<h3>transform-style:</h3>}
            text={
              <p>
                Визначає положення дочірнього елемента в 3D-просторі або в тій ж
                площині, як і батьківський елемент. <br />
                preserve-3d - Показує, що дочірній елемент має бути
                спозиціонований у 3D-простір. <br />
                flat - Показує, що дочірній елемент лежить у тій же площині, що
                й батьківська.
              </p>
            }
          />
        </TableBody>
      </Table>
      <Table id="css_transition">
        <TableBody>
          <TableOneCol text={<h3>Переходи.</h3>} />
          <TableTwoCol
            title={<h3>transition-delay:</h3>}
            text={
              <p>
                Вказує тривалість очікування перед запуском ефекту переходу
                властивості при зміні його значення.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>transition-duration:</h3>}
            text={
              <p>
                Визначає тривалість переходу. Можна вказати час анімації всіх
                властивостей переходу одразу або для кожної властивості окремо.
                Значення може задаватися в секундах (s) або мілісекундах (ms).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>transition-property:</h3>}
            text={
              <p>
                Вказує ім'я або імена властивостей, чиї переходи мають
                анімуватися. Зміна інших властивостей відбуватиметься звичайним
                чином.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>transition-timing-function:</h3>}
            text={
              <p>
                Визначає функцію, яка вказує, як обчислюються проміжні значення
                властивостей. Більшість тимчасових функцій може бути визначено
                графіком відповідної функції, що утворює чотирма точками криву
                Безьє.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад transition"}
            title={
              <>
                <pre>
                  <code>{transition}</code>
                </pre>
                <div className="transition"></div>
              </>
            }
          />
          <TableTwoCol
            title={<h3>offset:</h3>}
            text={
              <p>
                Задає всі властивості, необхідні для анімації елемента заданому
                шляху.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад offset"}
            title={
              <>
                <pre>
                  <code>{offset}</code>
                </pre>
                <div className="offsetElement">
                  <div className="offset"></div>
                </div>
              </>
            }
          />
          <TableTwoCol
            title={<h3>offset-rotate:</h3>}
            text={
              <p>
                Визначає орієнтацію/напрямок елемента при його розташуванні
                вздовж.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>offset-distance:</h3>}
            text={<p>Визначає положення offset-path елемента.</p>}
          />
          <TableTwoCol
            title={<h3>backface-visibility:</h3>}
            text={
              <p>
                Визначає, чи видно задню грань елемента, коли він повернутий до
                користувачеві.
                <br />
                visible - Відображає елемент як видимий.
                <br />
                hidden - Елемент стає невидимим або правильніше сказати,
                повністю прозорим, оскільки він продовжує брати участь у
                форматування сторінки.
                <br />
                collapse - Якщо це значення застосовується не до рядків або
                колонок таблиці, то результат його використання буде таким
                самим, як hidden. У разі використання collapse для вмісту
                осередків таблиць, то вони реагують, немов до ним було додано
                display: none. Іншими словами, задані рядки та колонки
                забираються, а таблиця перебудовується за новою. Це значення не
                підтримується браузером Internet Explorer. <br />
                inherit - Наслідує значення батька.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад backface-visibility"}
            title={
              <>
                <pre>
                  <code>{backfaceVisibility}</code>
                </pre>
                <div id="backface_visibility">
                  <div className=" offsetElementTwo">
                    <h3 id="formated-text">visible</h3>
                    <div className="container">
                      <div className="cube showbf">
                        <div className="face front">1</div>
                        <div className="face back">2</div>
                        <div className="face right">3</div>
                        <div className="face left">4</div>
                        <div className="face top">5</div>
                        <div className="face bottom">6</div>
                      </div>
                    </div>
                  </div>
                  <div className="offsetElementTwo">
                    <h3 id="formated-text">hidden</h3>
                    <div className="container">
                      <div className="cube hidebf">
                        <div className="face front">1</div>
                        <div className="face back">2</div>
                        <div className="face right">3</div>
                        <div className="face left">4</div>
                        <div className="face top">5</div>
                        <div className="face bottom">6</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <TableTwoCol
            title={<h3>rotate:</h3>}
            text={
              <p>
                Дозволяє задавати перетворення повороту індивідуально та
                незалежно від якості. Це краще відповідає типовому використанню
                користувальницького інтерфейсу і позбавляє необхідності
                запам'ятовувати точний порядок функцій перетворення для вказівки
                у властивості. transformtransform.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад rotate"}
            title={
              <>
                <pre>
                  <code>{rotate}</code>
                </pre>
                <div className="rotate">
                  <div>
                    <h4 className="rotate_text">Rotate</h4>
                  </div>
                </div>
              </>
            }
          />
          <TableTwoCol
            title={<h3>scale:</h3>}
            text={
              <p>
                Дозволяє задавати перетворення масштабу індивідуально та
                незалежно від якості. Це краще відповідає типовому використання
                інтерфейсу користувача і позбавляє від необхідності пам'ятати
                точний порядок функцій перетворення для вказівки значення. scale
                transformtransform.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад scale"}
            title={
              <>
                <pre>
                  <code>{scale}</code>
                </pre>
                <div className="scale">
                  <div>
                    <h4 className="scale_text">Scale</h4>
                  </div>
                </div>
              </>
            }
          />
          <TableTwoCol
            title={<h3>translate:</h3>}
            text={
              <p>
                Дозволяє задавати перетворення перекладу індивідуально та
                незалежно від якості. Це краще відповідає типовому використання
                інтерфейсу користувача і позбавляє від необхідності пам'ятати
                точний порядок функцій перетворення для вказівки
                значення.translate transformtransform.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад translate"}
            title={
              <>
                <pre>
                  <code>{translate}</code>
                </pre>
                <div className="translate">
                  <div>
                    <h4 className="translate_text">Translation</h4>
                  </div>
                </div>
              </>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
