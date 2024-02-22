import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function FontUA() {
  return (
    <>
      <Table id="css_font">
        <TableBody>
          <TableOneCol text={<h2>Робота з текстом.</h2>} />
          <TableOneCol text={<h3>Font.</h3>} />
          <TableTwoCol
            title={<h3>font-family:</h3>}
            text={
              <p>
                Дозволяє змінювати шрифт, а також підключати шрифти з інших
                джерел, які попередньо імпортовані.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-feature-settings:</h3>}
            text={
              <p>
                Керує розширеними друкарськими функціями у шрифтах OpenType.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-kerning:</h3>}
            text={
              <p>
                Визначає відстань між літерами. У шрифтах з гарною керріною ця
                функція робить відстань між символами більш рівномірною та
                приємним для читання, ніж це було б інакше.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-language-override:</h3>}
            text={
              <p>
                Керує використанням гліфів, які залежать від мови, у шрифті.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-optical-sizing:</h3>}
            text={
              <p>
                Визначає, чи оптимізовано рендеринг тексту для перегляду різних
                розмірах.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-size-adjust:</h3>}
            text={
              <p>Встановлює розмір малих літер щодо поточного розміру шрифт.</p>
            }
          />
          <TableTwoCol
            title={<h3>font-size:</h3>}
            text={<p>Встановлює розмір шрифту.</p>}
          />
          <TableTwoCol
            title={<h3>font-stretch:</h3>}
            text={
              <p>
                Визначає зображення шрифту. <br />
                semi-condensed, condensed, extra-condensed,ultra-condensed -
                Визначає стисліше накреслення шрифту. <br />
                semi-expanded, expanded, extra-expanded,ultra-expanded -
                Визначає розширене зображення шрифту.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-style:</h3>}
            text={<p>Вказує стиль шрифту. Наприклад, нормал або курсив.</p>}
          />
          <TableTwoCol
            title={<h3>font-synthesis:</h3>}
            text={
              <p>
                Визначає, які відсутні шрифти, жирний шрифт, курсив або Маленькі
                великі літери можуть бути синтезовані браузером.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-ligatures:</h3>}
            text={
              <p>
                Керує використанням альтернативних гліфів. На ці альтернативні
                гліфи можна посилатися альтернативними іменами, визначеними у
                @font-feature-values.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-caps:</h3>}
            text={
              <p>Керує використанням альтернативних гліфів для великих букв.</p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-east-asian:</h3>}
            text={
              <p>
                Керує використанням альтернативних гліфів для східноазіатських
                шрифтів, наприклад японського та китайського.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-ligatures:</h3>}
            text={
              <p>
                Контролює, які лігатури та контекстні форми використовуються в
                текстовий вміст елемента, до якого застосовується.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-numeric:</h3>}
            text={
              <p>
                Керує використанням альтернативних нарисів для цифр, дробів та
                порядкових числівників.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant-position:</h3>}
            text={
              <p>
                Керує використанням альтернативних гліфів меншого розміру, які
                розташовуються як верхній чи нижній індекс.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-variant:</h3>}
            text={
              <p>Дозволяє вам встановити всі варіанти шрифту для шрифту.</p>
            }
          />
          <TableTwoCol
            title={<h3>font-variation-settings:</h3>}
            text={
              <p>
                Ця властивість є низькорівневим механізмом, призначений для
                встановлення функцій змінного шрифту, якщо не існує інший спосіб
                включити або отримати доступ до цих функцій. Ви повинні
                використовувати його тільки тоді, коли не Існують основні
                властивості для встановлення цих функцій.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>font-weight:</h3>}
            text={<p>Встановлює накреслення шрифту.</p>}
          />
        </TableBody>
      </Table>
      <Table id="css_text">
        <TableBody>
          <TableOneCol text={<h3>Text.</h3>} />
          <TableTwoCol
            title={<h3>vertical-align:</h3>}
            text={<p>Вирівнювання тексту по вертикалі.</p>}
          />
          <TableTwoCol
            title={<h3>text-align:</h3>}
            text={<p>Вирівнювання тексту по горизонталі</p>}
          />
          <TableTwoCol
            title={<h3>text-combine-upright:</h3>}
            text={
              <p>
                Композиція розглядається як єдиний вертикальний гліф для макету
                та оформлення.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration:</h3>}
            text={
              <p>
                Дозволяє підкреслювати текст. <br />
                <span className="text-decoration">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration-color:</h3>}
            text={
              <p>
                Дозволяє підкреслювати текст кольором. <br />
                <span className="text-decoration-color">
                  This can't be real!
                </span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration-line:</h3>}
            text={
              <p>
                Дозволяє підкреслити текст у трьох положеннях, можна застосувати
                кілька варіантів через пропуск. <br />
                <span className="text-decoration-line">
                  This can't be real!
                </span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration-skip-ink:</h3>}
            text={
              <p>
                Дозволяє перервати лінію, якщо вона налізе на букву. <br />
                <span className="text-decoration-skip-ink">
                  parapsychologists
                </span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration-skip:</h3>}
            text={
              <p>
                Вказує, які частини вмісту елемента повинні пропускати будь-які
                текстові прикраси, що впливають на елемент.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-decoration-style:</h3>}
            text={
              <p>
                Вказує стиль ліній, заданих параметром text-decoration-line.
                <br />
                <span className="text-decoration-style">
                  This can't be real!
                </span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-emphasis:</h3>}
            text={
              <p>
                Застосовує мітки виділення до тексту (крім пропусків та керуючих
                символів).
                <br />
                <span className="text-emphasis">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-emphasis-color:</h3>}
            text={
              <p>
                Дозволяє змінити колір мітки. <br />
                <span className="text-emphasis-color">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-emphasis-position:</h3>}
            text={
              <p>
                Дозволяє змінити позицію позначки.
                <br />
                <span className="text-emphasis-position">
                  This can't be real!
                </span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-emphasis-style:</h3>}
            text={
              <p>
                Дозволяє змінити стиль мітки.
                <br />
                <span className="text-emphasis-style">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-indent:</h3>}
            text={
              <p>
                Визначає розмір відступу (порожнього місця) перед рядком у
                текстовому блоці.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-justify:</h3>}
            text={
              <p>
                Визначає який тип вирівнювання слід застосувати до тексту, коли
                text-align: justify; застосовується до елемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-orientation:</h3>}
            text={
              <p>
                Встановлює орієнтацію текстових символів у рядку. Це впливає
                тільки текст у вертикальному режимі (коли не ). Це корисно для
                керування відображенням мов, що використовують вертикальне лист,
                а також створення вертикальних заголовків таблиць.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-overflow:</h3>}
            text={<p>Обрізає текст, який вилазить за межі області.</p>}
          />
          <TableTwoCol
            title={<h3>text-rendering:</h3>}
            text={
              <p>
                Надає механізму рендерингу інформацію про те, що слідує
                оптимізувати при рендерингу тексту.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-shadow:</h3>}
            text={
              <p>
                Дозволяє створити тінь для тексту.
                <br />
                <span className="text-shadow">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-size-adjust:</h3>}
            text={
              <p>
                Контролює алгоритм збільшення тексту, який використовується на
                деяких смартфони та планшети.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-transform:</h3>}
            text={
              <p>
                Можна використовувати для відображення тексту у верхньому чи
                нижньому регістрі або з великими літерами кожного слова.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>text-underline-position:</h3>}
            text={
              <p>
                Вказує положення підкреслення, яке встановлюється з
                використанням значення якості.
              </p>
            }
          />
        </TableBody>
      </Table>

      <Table id="css_otherText">
        <TableBody>
          <TableOneCol text={<h3>Додаткові властивості для тексту.</h3>} />
          <TableTwoCol
            title={<h3>color:</h3>}
            text={
              <p>
                Визначає колір тексту елемента.
                <span className="color">This can't be real!</span>
              </p>
            }
          />
          <TableTwoCol
            title={<h3>inline-size:</h3>}
            text={
              <p>
                Визначає горизонтальні або вертикальні розміри блоку залежно від
                режиму написання.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>writing-mode:</h3>}
            text={
              <p>
                Розташування тексту горизонтального або вертикального, також як
                положення та напрямок блоку.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>letter-spacing:</h3>}
            text={<p>Визначає між літерну відстань у тексті.</p>}
          />
          <TableTwoCol
            title={<h3>line-break:</h3>}
            text={
              <p>
                Встановлює спосіб розриву рядка тексту китайською, японською або
                корейською.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>line-height-step:</h3>}
            text={
              <p>
                Вказує одиницю кроку для висоти рядка. Коли властивість
                встановлено, висота рядкового блоку округляється до найближчої
                кратної одиниці вимірювання.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>line-height:</h3>}
            text={<p>Встановлює розмір простору між рядками.</p>}
          />
          <TableTwoCol
            title={<h3>counter-increment:</h3>}
            text={
              <p>
                Збільшує або зменшує значення лічильника CSS на задане значення.
                <br />
                Приклад: counter-increment: example-counter 5; <br /> Отримуємо:
                Розділ: 5
              </p>
            }
          />
          <TableTwoCol
            title={<h3>counter-reset:</h3>}
            text={
              <p>
                Скидає лічильник CSS до заданого значення. <br />
                приклад: counter-reset: chapter-count 5; <br /> Отримуємо:
                Розділ 1: Розділ 1.6: Розділ 1.7
              </p>
            }
          />
          <TableTwoCol
            title={<h3>counter-set:</h3>}
            text={
              <p>
                Встановлює для лічильника CSS задане значення.
                <br />
                Приклад: counter-set: chapter-count 5; Отримуємо: Глава 1: Глава
                5:
              </p>
            }
          />
          <TableTwoCol
            title={<h3>direction:</h3>}
            text={
              <p>
                Призначений для сайтів, у яких має значення напрямок тексту.
                Наприклад, під час використання арабського алфавіту читання
                відбувається справа наліво.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>hyphens:</h3>}
            text={
              <p>
                Повідомляє браузер, як розставляти переноси слів у блоці тексту.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>user-select:</h3>}
            text={
              <p>
                Дозволяє заборонити виділення для тексту у вибраній області.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>white-space:</h3>}
            text={<p>Текс в одному рядку без перенесення.</p>}
          />
          <TableTwoCol
            title={<h3>resize:</h3>}
            text={
              <p>
                Вказує, чи можна користувачеві змінювати розмір текстового поля.
                <br />
                none - Розміри елемента не змінюються. <br />
                both - Можна змінювати розміри елемента по горизонталі та
                вертикалі.
                <br />
                horizontal - Можна змінювати розміри елемента тільки за
                горизонталі. <br />
                vertical - Можна змінювати розміри елемента тільки по вертикалі.
                <br />
                inherit - успадковує значення батька.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>word-break:</h3>}
            text={
              <p>
                Визначає, де буде встановлено переклад на новий рядок у у разі
                перевищення текстом меж блоку. <br />
                normal - Використовуються правила перенесення рядків за
                промовчанням. Як правило, у цьому випадку рядки не переносяться
                або переносяться в тих місцях, де явно задане перенесення
                (наприклад, за допомогою тега &lt; br /&gt;). <br />
                break-all - Перенесення рядків додається автоматично, щоб слово
                помістилося у задану ширину блоку. Значення не працює для тексту
                китайською, корейською або японською мовою. <br />
                keep-all - Не дозволяє перенесення рядків у словах китайською,
                корейською чи японською мовою. Для інших мов діє як normal.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>word-spacing:</h3>}
            text={
              <p>
                Встановлює довжину пробілу між словами та між тегами.
                <br />
                normal - Встановлює інтервал між словами як завжди.
                <br />
                inherit - успадковує значення батька.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
