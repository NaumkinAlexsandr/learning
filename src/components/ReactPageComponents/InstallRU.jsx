import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import { install, router } from "./InstallConstPre.ts";

function InstallRU() {
  return (
    <>
      <Table id="react_install">
        <TableBody>
          <TableOneCol text={<h2> Установка библиотек и фреймворков</h2>} />
          <TableOneCol text={<h3>React</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i react-helmet</h3>}
            text={
              <p>
                Пакет react-helmet - это инструмент для управления содержимым
                заголовков &lt;head&gt; в React приложениях. Он позволяет
                динамически изменять мета-теги, заголовки страницы, ссылки на
                стили и скрипты, а также другие элементы &lt;head&gt; для каждой
                страницы вашего приложения.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример"}
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
                Пакет @types/react-dom представляет собой типизацию TypeScript
                для библиотеки React DOM. Установка этого пакета с помощью
                команды npm i @types/react-dom добавляет объявления типов
                TypeScript для React DOM в ваш проект.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i react-router-dom</h3>}
            text={
              <p>
                Пакет react-router-dom - это библиотека, предназначенная для
                реализации маршрутизации в веб-приложениях, созданных с
                использованием библиотеки React. Установка пакета
                react-router-dom с помощью команды npm i react-router-dom
                добавляет этот пакет в зависимости вашего проекта.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @types/react-router-dom</h3>}
            text={
              <p>
                Пакет @types/react-router-dom представляет собой типизацию
                TypeScript для библиотеки React Router DOM. Этот пакет содержит
                объявления типов TypeScript для библиотеки react-router-dom ,
                что позволяет TypeScript понимать структуру и типы данных,
                используемых в React Router DOM, и обеспечивает поддержку
                автодополнения и проверку типов при разработке React-приложений
                с использованием React Router DOM.
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Пример"}
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
                Эти командыют новый проект с использованием шаблона TypeScript.
                <br /> <br /> npx react-native init MyProject --template
                react-native-template-typescript
                <br />
                npx create-expo-app my-app -t expo-template-blank-typescript
              </p>
            }
          />
          <TableOneCol text={<h3>GitHub pages</h3>} />
          <TableOneCol text={<p>npm i gh-pages</p>} />
          <TableOneCol text={<h3>React SASS</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i sass</h3>}
            text={
              <p>
                Пакет sass предоставляет возможность компиляции файлов Sass в
                CSS. Sass - это метаязык стилей, который добавляет множество
                удобных функций и возможностей к обычному CSS, таких как
                переменные, вложенность, миксины и многое другое.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i node-sass</h3>}
            text={
              <p>
                Пакет node-sass является биндингом для Node.js к библиотеке
                LibSass, которая компилирует Sass в CSS. Он предоставляет
                высокую производительность и эффективность при компиляции Sass
                файлов.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i sass-loader</h3>}
            text={
              <p>
                Пакет sass-loader - это загрузчик для Webpack, который позволяет
                использовать Sass вместе с Webpack. Он позволяет Webpack
                компилировать Sass файлы в процессе сборки проекта.
              </p>
            }
          />
          <TableOneCol text={<h3>Redux</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i redux react-redux</h3>}
            text={
              <p>
                Redux - это библиотека для управления состоянием приложения в
                React и других JavaScript-приложениях. Она предоставляет
                предсказуемый контейнер состояния, который упрощает управление
                данными и состоянием приложения.
                <br />
                React-Redux - это официальная библиотека интеграции Redux с
                React. Она предоставляет удобные средства для связывания
                состояния Redux с компонентами React, обеспечивая эффективное
                управление состоянием и обновлением компонентов при изменении
                данных.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i redux-persist</h3>}
            text={
              <p>
                redux-persist - это библиотека, которая предоставляет
                инструменты для сохранения и восстановления состояния Redux в
                локальном хранилище (например, в localStorage браузера) или в
                AsyncStorage для мобильных приложений React Native. Это
                позволяет сохранять состояние приложения между перезагрузками
                страницы или перезапусками приложения.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i redux-thunk</h3>}
            text={
              <p>
                redux-thunk - это middleware для Redux, который позволяет вам
                писать асинхронные действия (actions) в вашем приложении Redux.
                С помощью redux-thunk , вы можете диспетчеризовать функции
                вместо объектов действий, что позволяет вам выполнять сложные
                асинхронные операции, такие как отправка запросов на сервер,
                получение данных и обновление состояния Redux на основе
                полученных данных.
                <br />
                При использовании redux-thunk , ваше действие (action creator)
                может возвращать функцию вместо обычного объекта действия. Эта
                функция получает dispatch и getState в качестве аргументов, что
                позволяет вам делать асинхронные операции, а затем
                диспетчеризовать другие действия на основе результата.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i redux-devtools-extension</h3>}
            text={
              <p>
                redux-devtools-extension предоставляет инструменты разработчика
                для удобного отслеживания и отладки состояния вашего
                Redux-приложения. Это расширение позволяет вам просматривать,
                манипулировать и отслеживать изменения в хранилище Redux во
                время разработки приложения. После установки, вы сможете
                настроить и использовать инструменты разработчика для Redux,
                чтобы улучшить процесс разработки, отлаживать состояние вашего
                приложения и ускорить разработку.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i redux-localstorage-simple</h3>}
            text={
              <p>
                redux-localstorage-simple - это простой пакет, который
                обеспечивает интеграцию между Redux и локальным хранилищем
                браузера. Он позволяет автоматически сохранять и восстанавливать
                состояние Redux в локальном хранилище, таком как localStorage
                или sessionStorage. Это полезно для сохранения состояния Redux
                между перезагрузками страницы или при закрытии и открытии
                приложения. После установки, вы сможете использовать его вместе
                с Redux, чтобы автоматически сохранять и восстанавливать
                состояние вашего приложения в локальном хранилище браузера. Это
                удобно для создания приложений, которые сохраняют состояние
                пользователя даже после перезагрузки страницы или закрытия
                браузера.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @reduxjs/toolkit</h3>}
            text={
              <p>
                @reduxjs/toolkit - это официальный пакет от команды Redux,
                который предоставляет удобные инструменты и упрощенный подход к
                использованию Redux. Он включает в себя множество функций, таких
                как создание хранилища Redux, упрощенное определение срезов
                состояния, утилиты для раб
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @types/react-redux</h3>}
            text={
              <p>
                Пакет @types/react-redux предоставляет объявления типов
                TypeScript для React-Redux, что позволяет TypeScript понимать
                структуру и типы данных, используемых в React-Redux. Установка
                этих типов поможет вам в правильном определении типов данных при
                работе с React-Redux в ваших TypeScript проектах, что повысит
                надежность и читаемость вашего кода.
              </p>
            }
          />
          <TableOneCol text={<h3>React-Bootstrap</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i bootstrap</h3>}
            text={
              <p>
                Пакет Bootstrap содержит CSS и JavaScript библиотеку Bootstrap,
                которая предоставляет готовые стили и компоненты для создания
                современных и адаптивных веб-интерфейсов.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i react-bootstrap</h3>}
            text={
              <p>
                React-Bootstrap - это библиотека компонентов React, которая
                предоставляет обертки для компонентов Bootstrap, позволяя
                использовать их в React-приложениях.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i react-router-bootstrap</h3>}
            text={
              <p>
                React-Router-Bootstrap - это библиотека, предоставляющая
                интеграцию компонентов Bootstrap с React Router. Она позволяет
                использовать компоненты навигации из Bootstrap вместе с
                маршрутизацией React Router.
              </p>
            }
          />
          <TableOneCol text={<h3>Material UI v5</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i @mui/material</h3>}
            text={
              <p>
                @mui/material - это пакет, который предоставляет набор готовых
                компонентов для создания пользовательского интерфейса
                веб-приложений. Он основан на библиотеке Material-UI и
                предлагает множество стилизованных компонентов, которые можно
                использовать для создания современного и привлекательного
                дизайна.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @emotion/react @emotion/styled</h3>}
            text={
              <p>
                @emotion/react и @emotion/styled - это пакеты, которые
                предоставляют инструменты для работы с эмоциональными стилями
                (Emotion). Emotion - это библиотека CSS-in-JS, которая позволяет
                вам создавать и применять стили к компонентам React. Она
                предлагает удобный и мощный способ управления стилями в вашем
                приложении.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @mui/icons-material</h3>}
            text={
              <p>
                @mui/icons-material - это пакет, который предоставляет набор
                иконок, соответствующих Material Design. Он содержит множество
                иконок, которые можно использовать для улучшения
                пользовательского интерфейса вашего приложения.
              </p>
            }
          />
          <TableOneCol text={<h3>Material UI v4</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i @material-ui/core</h3>}
            text={
              <p>
                @material-ui/core - это пакет, который предоставляет набор
                готовых компонентов для создания пользовательского интерфейса
                веб-приложений. Он основан на библиотеке Material-UI и
                предлагает множество стилизованных компонентов, которые можно
                использовать для создания современного и привлекательного
                дизайна.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @emotion/react @emotion/styled</h3>}
            text={
              <p>
                @emotion/react и @emotion/styled - это пакеты, которые
                предоставляют инструменты для работы с эмоциональными стилями
                (Emotion). Emotion - это библиотека CSS-in-JS, которая позволяет
                вам создавать и применять стили к компонентам React. Она
                предлагает удобный и мощный способ управления стилями в вашем
                приложении.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @material-ui/icons</h3>}
            text={
              <p>
                @material-ui/icons - это пакет, который предоставляет набор
                иконок, соответствующих Material Design. Он содержит множество
                иконок, которые можно использовать для улучшения
                пользовательского интерфейса вашего приложения.
              </p>
            }
          />
          <TableOneCol text={<h3>TypeScript</h3>} />
          <TableTwoEqualCol
            title={<h3>npm i typescript</h3>}
            text={
              <p>
                После выполнения команды npm i typescript, пакет TypeScript
                будет установлен в вашем проекте. Вы сможете использовать
                TypeScript для разработки вашего приложения, добавлять типы к
                переменным, функциям и компонентам, а также использовать другие
                возможности, предоставляемые TypeScript для улучшения разработки
                и поддержки вашего кода.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @types/jest</h3>}
            text={
              <p>
                @types/jest - это пакет, который предоставляет типы TypeScript
                для библиотеки тестирования Jest. Когда вы пишете тесты с
                использованием Jest и TypeScript, установка @types/jest
                позволяет TypeScript понимать и проверять типы, связанные с
                функциями и объектами, используемыми в ваших тестах.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @types/react</h3>}
            text={
              <p>
                @types/react - это пакет, который предоставляет типы TypeScript
                для библиотеки React. Когда вы разрабатываете приложение с
                использованием React и TypeScript, установка @types/react
                позволяет TypeScript понимать и проверять типы, связанные с
                компонентами, хуками, контекстом и другими элементами React.
              </p>
            }
          />
          <TableTwoEqualCol
            title={<h3>npm i @types/node</h3>}
            text={
              <p>
                @types/node - это пакет, который предоставляет типы TypeScript
                для Node.js. Когда вы разрабатываете приложение с использованием
                Node.js и TypeScript, установка @types/node позволяет TypeScript
                понимать и проверять типы, связанные с модулями, функциями и
                объектами, используемыми в вашем коде Node.js.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}

export default InstallRU;
