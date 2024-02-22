import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import { install, router } from "./InstallConstPre.ts";

function InstallUA() {
  return (
    <>
      <Table id="react_install">
        <TableBody>
          <TableOneCol text={<h2> Встановлення бібліотек та фреймворків</h2>} />
          <TableOneCol text={<h3>React</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i react-helmet</h3>}
            text={
              <p>
                Пакет react-helmet – це інструмент для керування вмістом
                заголовків &lt;head&gt; у програмах React. Він дозволяє
                динамічно змінювати мета-теги, заголовки сторінки, посилання на
                стилі та скрипти, а також інші елементи &lt;head&gt; для кожного
                сторінки вашої програми.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад"}
            title={
              <>
                <pre>
                  <code>{install}</code>
                </pre>
              </>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @types/react-dom</h3>}
            text={
              <p>
                Пакет @types/react-dom є типізацією TypeScript для бібліотеки
                React DOM. Встановлення цього пакета за допомогою команди npm i
                @types/react-dom додає оголошення типів TypeScript для React DOM
                у ваш проект.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i react-router-dom</h3>}
            text={
              <p>
                Пакет react-router-dom – це бібліотека, призначена для
                реалізації маршрутизації у веб-додатках, створених з
                використанням бібліотеки React. Встановлення пакету
                react-router-dom за допомогою команди npm i react-router-dom
                додає цей пакет залежно від вашого проекту.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @types/react-router-dom</h3>}
            text={
              <p>
                Пакет @types/react-router-dom є типізацією TypeScript для
                бібліотеки React Router DOM. Цей пакет містить оголошення типів
                TypeScript для бібліотеки react-router-dom , що дозволяє
                TypeScript розуміти структуру та типи даних, використовуються в
                React Router DOM, та забезпечує підтримку автодоповнення та
                перевірку типів при розробці React-додатків з використанням
                React Router DOM.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Приклад"}
            title={
              <>
                <pre>
                  <code>{router}</code>
                </pre>
              </>
            }
          />
          <TableOneCol text={<h3>React Native</h3>} />
          <TableOneCol
            text={
              <p>
                Ці командують новий проект з використанням шаблону TypeScript.
                <br /> <br /> npx react-native init MyProject --template
                react-native-template-typescript
                <br />
                npx create-expo-app my-app -t expo-template-blank-typescript
              </p>
            }
          />
          <TableOneCol text={<h3>GitHub pages</h3>} />
          <TableOneCol text={<p>npm і gh-pages</p>} />
          <TableOneCol text={<h3>React SASS</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i sass</h3>}
            text={
              <p>
                Пакет sass надає можливість компіляції файлів Sass у CSS. Sass -
                це метамова стилів, яка додає безліч зручних функцій та
                можливостей до звичайного CSS, таких як змінні, вкладеність,
                міксини та багато іншого.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i node-sass</h3>}
            text={
              <p>
                Пакет node-sass є біндингом для Node.js до бібліотеки LibSass,
                яка компілює Sass у CSS. Він надає високу продуктивність та
                ефективність при компіляції Sass файлів.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm та sass-loader</h3>}
            text={
              <p>
                Пакет sass-loader - це завантажувач для Webpack, який дозволяє
                використовувати Sass разом з Webpack. Він дозволяє Webpack
                компілювати Sass файли в процесі збирання проекту.
              </p>
            }
          />
          <TableOneCol text={<h3>Redux</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i redux react-redux</h3>}
            text={
              <p>
                Redux - це бібліотека для керування станом програми в React та
                інших JavaScript-додатках. Вона надає передбачуваний контейнер
                стану, який спрощує керування даними та станом програми.
                <br />
                React-Redux - це офіційна бібліотека інтеграції Redux з React.
                Вона надає зручні засоби для зв'язування стану Redux з
                компонентами React, забезпечуючи ефективне керування станом та
                оновленням компонентів при зміні даних.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i redux-persist</h3>}
            text={
              <p>
                redux-persist - це бібліотека, яка надає інструменти для
                збереження та відновлення стану Redux у локальному сховищі
                (наприклад, в localStorage браузера) або AsyncStorage для
                мобільних додатків React Native. Це дозволяє зберігати стан
                програми між перезавантаженням сторінки або перезапуском
                програми.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm та redux-thunk</h3>}
            text={
              <p>
                redux-thunk – це middleware для Redux, який дозволяє вам писати
                асинхронні дії (actions) у додатку Redux. За допомогою
                redux-thunk ви можете диспетчеризувати функції замість об'єктів
                дій, що дозволяє вам виконувати складні асинхронні операції,
                такі як надсилання запитів на сервер, отримання даних та
                оновлення стану Redux на основі отриманих даних.
                <br />
                При використанні redux-thunk, ваша дія (action creator) може
                повертати функцію замість звичайного об'єкта дії. Ця функція
                отримує dispatch і getState як аргументи, що дозволяє вам робити
                асинхронні операції, а потім диспетчеризувати інші дії з
                урахуванням результату.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i redux-devtools-extension</h3>}
            text={
              <p>
                redux-devtools-extension надає інструменти розробника для
                зручного відстеження та налагодження стану вашого Redux-додатки.
                Це розширення дозволяє переглядати, маніпулювати та відстежувати
                зміни в сховищі Redux у час розробки програми. Після
                встановлення, ви зможете налаштувати та використовувати
                інструменти розробника для Redux, щоб покращити процес розробки,
                налагоджувати стан вашої програми та прискорити розробку.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i redux-localstorage-simple</h3>}
            text={
              <p>
                redux-localstorage-simple - це простий пакет, який забезпечує
                інтеграцію між Redux та локальним сховищем браузер. Він дозволяє
                автоматично зберігати та відновлювати стан Redux у локальному
                сховищі, такому як localStorage або sessionStorage. Це корисно
                для збереження стану Redux між перезавантаженнями сторінки або
                при закритті та відкритті програми. Після встановлення, ви
                зможете використовувати його разом із Redux, щоб автоматично
                зберігати та відновлювати стан вашої програми в локальне сховище
                браузера. Це зручно для створення програм, які зберігають стан
                користувача навіть після перезавантаження сторінки або закриття
                браузера.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @reduxjs/toolkit</h3>}
            text={
              <p>
                @reduxjs/toolkit – це офіційний пакет від команди Redux, який
                надає зручні інструменти та спрощений підхід до використання
                Redux. Він включає в себе безліч функцій, таких як створення
                сховища Redux, спрощене визначення зрізів стану, утиліти для раб
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @types/react-redux</h3>}
            text={
              <p>
                Пакет @types/react-redux пропонує оголошення типів TypeScript
                для React-Redux, що дозволяє TypeScript розуміти структуру та
                типи даних, що використовуються в React-Redux. Встановлення цих
                типів допоможе вам у правильному визначенні типів даних при
                роботі з React-Redux у ваших TypeScript проектах, що підвищить
                надійність та читаність вашого коду.
              </p>
            }
          />
          <TableOneCol text={<h3>React-Bootstrap</h3>} />
          <TableTwoEqualCol
            title={<h3>npm і bootstrap</h3>}
            text={
              <p>
                Пакет Bootstrap містить CSS та JavaScript бібліотеку Bootstrap,
                яка надає готові стилі та компоненти для створення сучасних та
                адаптивних веб-інтерфейсів.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i react-bootstrap</h3>}
            text={
              <p>
                React-Bootstrap – це бібліотека компонентів React, яка надає
                обгортки для компонентів Bootstrap, дозволяючи використовувати
                їх у React-додатках.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i react-router-bootstrap</h3>}
            text={
              <p>
                React-Router-Bootstrap – це бібліотека, що надає інтеграцію
                компонентів Bootstrap із React Router. Вона дозволяє
                використовувати компоненти навігації з Bootstrap разом з
                маршрутизацією React Router.
              </p>
            }
          />
          <TableOneCol text={<h3>Material UI v5</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i @mui/material</h3>}
            text={
              <p>
                @mui/material - це пакет, який надає набір готових компонентів
                для створення інтерфейсу користувача веб-застосунків. Він
                заснований на бібліотеці Material-UI та пропонує безліч
                стилізованих компонентів, які можна використовувати для
                створення сучасного та привабливого дизайн.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @emotion/react @emotion/styled</h3>}
            text={
              <p>
                @emotion/react та @emotion/styled - це пакети, які надають
                інструменти для роботи з емоційними стилями (Emotion). Emotion -
                це бібліотека CSS-in-JS, яка дозволяє вам створювати та
                застосовувати стилі до компонентів React. Вона пропонує зручний
                та потужний спосіб управління стилями у вашому додаток.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @mui/icons-material</h3>}
            text={
              <p>
                @mui/icons-material - це пакет, який надає набір іконок, які
                відповідають Material Design. Він містить безліч іконок, які
                можна використовувати для покращення інтерфейсу користувача
                вашої програми.
              </p>
            }
          />
          <TableOneCol text={<h3>Material UI v4</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i @material-ui/core</h3>}
            text={
              <p>
                @material-ui/core - це пакет, який надає набір готових
                компонентів для створення інтерфейсу користувача
                веб-застосунків. Він заснований на бібліотеці Material-UI та
                пропонує безліч стилізованих компонентів, які можна
                використовувати для створення сучасного та привабливого дизайн.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @emotion/react @emotion/styled</h3>}
            text={
              <p>
                @emotion/react та @emotion/styled - це пакети, які надають
                інструменти для роботи з емоційними стилями (Emotion). Emotion -
                це бібліотека CSS-in-JS, яка дозволяє вам створювати та
                застосовувати стилі до компонентів React. Вона пропонує зручний
                та потужний спосіб управління стилями у вашому додаток.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @material-ui/icons</h3>}
            text={
              <p>
                @material-ui/icons - це пакет, який надає набір іконок, які
                відповідають Material Design. Він містить безліч іконок, які
                можна використовувати для покращення інтерфейсу користувача
                вашої програми.
              </p>
            }
          />
          <TableOneCol text={<h3>TypeScript</h3>} />
          <TableTwoEqualCol
            title={<h3>npm та typescript</h3>}
            text={
              <p>
                Після виконання команди npm i typescript пакет TypeScript буде
                встановлений у вашому проекті. Ви зможете використовувати
                TypeScript для розробки вашої програми, додавати типи до
                змінним, функціям та компонентам, а також використовувати інші
                можливості, що надаються TypeScript для покращення розробки та
                підтримки вашого коду.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @types/jest</h3>}
            text={
              <p>
                @types/jest - це пакет, який надає типи TypeScript для
                бібліотеки тестування Jest. Коли ви пишете тести з використанням
                Jest та TypeScript, установка @types/jest дозволяє TypeScript
                розуміти та перевіряти типи, пов'язані з функціями та об'єктами,
                що використовуються у ваших тестах.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @types/react</h3>}
            text={
              <p>
                @types/react - це пакет, який надає типи TypeScript для
                бібліотеки React. Коли ви розробляєте програму з використанням
                React та TypeScript, встановлення @types/react дозволяє
                TypeScript розуміти та перевіряти типи, пов'язані з
                компонентами, хуками, контекстом та іншими елементами React.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @types/node</h3>}
            text={
              <p>
                @types/node - це пакет, який надає типи TypeScript для Node.js.
                Коли ви розробляєте програму з використанням Node.js і
                TypeScript, встановлення @types/node дозволяє TypeScript
                розуміти та перевіряти типи, пов'язані з модулями, функціями та
                об'єктами, що використовуються у коді Node.js.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}

export default InstallUA;
