import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/IconButton";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";
import Arrow from "../../core/Arrow";
import MenuHttp from "./MenuHttp.tsx";
import ButtonExample from "../../core/ButtonExample.tsx";

import {
  getResponseUa,
  getRequestUa,
  codeLoadUa,
  codeErrorUa,
  codePprogressUa,
  headRequestUa,
  headResponseUa,
  postResponseUa,
  postRequestUa,
  putResponseUa,
  putRequestUa,
  deleteResponseUa,
  deleteRequestUa,
  methodGet,
  getAllResponseHeadersResponseUa,
  getAllResponseHeadersRequestUa,
  postCode,
  postCode2,
} from "./HttpConstPre.tsx";
import "./http.scss";
import { getFormatedText } from "../../core/getFormatedText.tsx";

export default function HttpUA() {
  const [isMenuInfoOpen, setIsMenuInfoOpen] = useState(false);

  const handleMenuInfoOpen = () => {
    setIsMenuInfoOpen(!isMenuInfoOpen);
  };

  const handleMenuInfoClose = () => {
    setIsMenuInfoOpen(false);
  };

  return (
    <>
      <Container style={{ width: "100%", maxWidth: "none" }}>
        <Button
          id="menu-btnInfo"
          aria-label="open drawer"
          onClick={handleMenuInfoOpen}
        >
          HTTP
        </Button>
        {isMenuInfoOpen && (
          <MenuHttp
            section1={"Опис HTTP"}
            section2={"Методи HTTP запиту"}
            section3={"Інформаційні"}
            section4={"Успішні"}
            section5={"Перенаправлення"}
            section6={"Клієнтські помилки"}
            section7={"Серверні помилки"}
            section8={"Синхронний запит"}
            section9={"Асинхронний запит"}
            section10={"HTTP-заголовки"}
            section11={"POST"}
            section12={"Прогрес відправлення"}
            section13={"Опис Fetch"}
            section14={"Response"}
            section15={"POST-запити"}
            section16={"FormData"}
            onClose={handleMenuInfoClose}
          />
        )}

        <TableContainer>
          <Table id="http_title">
            <TableOneCol text={<h1>Опис HTTP.</h1>} />
          </Table>

          <Table id="http_description">
            <TableBody>
              <TableOneCol text={<h2>Опис HTTP</h2>} />
              <TableOneCol
                text={
                  <p>
                    HTTP – це простий протокол, який найчастіше використовує
                    можливості іншого протоколу – TCP. Завдяки цьому HTTP
                    вважається дуже надійним протоколом обміну вмістом. Також є
                    одним із найчастіше використовуваних протоколів додатків.{" "}
                    <br /> Все програмне забезпечення для роботи з протоколом
                    HTTP поділяється на три великі категорії:
                    <ul className="paragraph">
                      <li>Клієнти – кінцеві споживачі послуг сервера.</li>
                      <li>
                        Проксі посередники для виконання транспортних служб.
                      </li>
                      <li>
                        Сервери як основні постачальники послуг зберігання та
                        обробки інформації.
                      </li>
                    </ul>
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>Клієнти</h3>}
                text={
                  <p>
                    Клієнт робить початковий запит найчастіше через браузер
                    (програми). Після цього браузер вивчає та запитує додаткові
                    файли, необхідні для правильного відображення веб-сторінки.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>Проксі</h3>}
                text={
                  <p>
                    Проміжний сервер у комп'ютерних мережах, що виконує роль
                    посередника між користувачем і цільовим сервером, дозволяє
                    клієнтам виконувати непрямі запити до інших мережевих служб,
                    так і отримувати відповіді.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>Сервери</h3>}
                text={
                  <p>
                    Сервер, який приймає HTTP-запити від клієнтів і видає їм
                    HTTP-відповіді, як правило, разом з HTML-сторінкою,
                    зображенням, файлом, медіа-потоком або іншими даними.
                    Веб-сервер називають як програмне забезпечення, що виконує
                    функції веб-сервера, так і безпосередньо комп'ютер на якому
                    це програмне забезпечення працює.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_method">
            <TableBody>
              <TableOneCol text={<h2>Методи HTTP запиту .</h2>} />
              <TableTwoCol
                title={<h3>GET</h3>}
                text={
                  <p>
                    Запитує подання ресурсу. Такі запити можуть лише витягувати
                    дані.
                  </p>
                }
              />
              <ButtonExample
                titleButtonExample={"Приклад GET"}
                title={
                  <pre>
                    <code>{getRequestUa}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{getResponseUa}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>HEAD</h3>}
                text={
                  <p>
                    Запитує ресурс, як і GET, але відповідь приходить без тіла .
                  </p>
                }
              />
              <ButtonExample
                titleButtonExample={"Приклад HEAD"}
                title={
                  <pre>
                    <code>{headRequestUa}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{headResponseUa}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>POST</h3>}
                text={
                  <p>
                    Відправляє сутність до зазначеного ресурсу. Може викликати
                    побічні ефекти на сервері та зміну стану.
                  </p>
                }
              />
              <ButtonExample
                titleButtonExample={"Приклад POST"}
                title={
                  <pre>
                    <code>{postRequestUa}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{postResponseUa}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>PUT</h3>}
                text={<p>Замінює поточні подання ресурсу даними запиту.</p>}
              />
              <ButtonExample
                titleButtonExample={"Приклад PUT"}
                title={
                  <pre>
                    <code>{putResponseUa}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{putRequestUa}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>DELETE</h3>}
                text={<p>Видаляє вказаний ресурс.</p>}
              />
              <ButtonExample
                titleButtonExample={"Приклад DELETE"}
                title={
                  <pre>
                    <code>{deleteResponseUa}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{deleteRequestUa}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>CONNECT</h3>}
                text={
                  <p>Налаштовує тунель із сервером, визначеним за ресурсом.</p>
                }
              />
              <TableTwoCol
                title={<h3>OPTIONS</h3>}
                text={<p>Описує параметри з'єднання з ресурсом.</p>}
              />
              <TableTwoCol
                title={<h3>TRACE</h3>}
                text={
                  <p>
                    Викликає текстове повідомлення, що повертається з ресурсу.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>PATCH</h3>}
                text={<p>Частково змінює ресурс.</p>}
              />
            </TableBody>
          </Table>

          <Table id="http_code">
            <TableBody>
              <TableOneCol text={<h2>Коди відповіді HTTP</h2>} />
              <TableOneCol text={<h3>Інформаційні</h3>} />
              <TableTwoCol
                title={<h3>100 - Continue</h3>}
                text={
                  <p>
                    "Продовжити". Це означає, що сервер отримав початкову
                    частину запиту і готовий прийняти решту його частини.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>101 - Switching Protocols</h3>}
                text={
                  <p>
                    "Переключити протокол". Це означає, що сервер змінює
                    протокол. Надсилається за наявності в запиті заголовка
                    Upgrade.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>102 - Processing</h3>}
                text={
                  <p>
                    "В обробці". Цей код вказує, що сервер отримав запит та
                    обробляє його, але обробка ще не завершена.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>103 - Early Hints</h3>}
                text={
                  <p>
                    "Попередні дані". Попередня відповідь із частиною
                    заголовків. Використовується, коли сервер не може швидко
                    сформувати усі заголовки.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_ok">
            <TableBody>
              <TableOneCol text={<h3>Успішні</h3>} />
              <TableTwoCol
                title={<h3>200 - OK</h3>}
                text={<p>«Успішно». Сервер успішно опрацював запит.</p>}
              />
              <TableTwoCol
                title={<h3>201 - Created</h3>}
                text={
                  <p>
                    "Створено". Сервер успішно обробив запит та створив новий
                    ресурс.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>202 - Accepted</h3>}
                text={
                  <p>
                    "Прийнято". Сервер почав обробляти запит, але поки що не
                    закінчив процес.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>203 - Non-Authoritative Information</h3>}
                text={
                  <p>
                    "Неофіційна інформація". Сервер успішно обробив запит, але
                    проксі, через який проходив відповідь на запит, змінив ця
                    відповідь.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>204 - No Content</h3>}
                text={
                  <p>
                    "Немає вмісту". Сервер успішно обробив запит, але крім
                    заголовків відповіді немає вмісту, який можна було б
                    відправити у відповідь.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>205 - Reset Content</h3>}
                text={
                  <p>
                    «Сбросить содержимое». Сервер успешно обработал запрос и
                    отправил в ответ команду сбросить данные, которые
                    пользователь ввёл, перед тем как отправить запрос.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>206 - Partial Content</h3>}
                text={
                  <p>
                    «Частковий вміст». Сервер успішно обробив частковий запит і
                    надіслав вміст, вказаний у заголовку Content-Range.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>207 - Multi-Status</h3>}
                text={
                  <p>
                    "Мульти-статус". У результатах запиту є інформація про
                    декілька незалежних один від одного операцій.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_redirects">
            <TableBody>
              <TableOneCol text={<h3>Перенаправлення</h3>} />
              <TableTwoCol
                title={<h3>300 - Multiple Choice</h3>}
                text={
                  <p>
                    «Множинний вибір». Сервер надсилає код, коли є кілька
                    можливих відповідей на запит. Користувач або user-agent
                    повинен вибрати один із варіантів.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>301 - Moved Permanently</h3>}
                text={
                  <p>
                    "Переміщено назавжди". Запитуваний ресурс тепер доступний за
                    новим URI і при наступних запитах варто використовувати саме
                    його.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>302 - Found</h3>}
                text={
                  <p>
                    "Знайдено". Запитуваний ресурс тимчасово доступний по іншому
                    URI і при наступних запитах варто використовувати старий
                    URI.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>303 - See Other</h3>}
                text={
                  <p>
                    "Дивися в іншому місці". Затребуваний ресурс потрібно шукати
                    інакше URI методом запиту GET, як і раніше, що у початковому
                    запиті міг бути інший метод.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>304 - Not Modified</h3>}
                text={
                  <p>
                    «Не изменено». Запрашиваемый ресурс не был изменён, поэтому
                    стоит использовать его кэшированную версию.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>305 - Use Proxy</h3>}
                text={
                  <p>
                    "Використовуй проксі". Запит до ресурсу має здійснюватись
                    через проксі. Цей код не використовується.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>306 - Switch Proxy</h3>}
                text={
                  <p>
                    "Зарезервовано". Запит до ресурсу повинен здійснюватись
                    через проксі, який сервер вказав у заголовках відповіді. Цей
                    код не використовується.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>307 - Temporary Redirect</h3>}
                text={
                  <p>
                    «Тимчасове перенаправлення». Запитуваний ресурс тимчасово
                    доступний іншим URI. Цей код має таку ж логіку, як і 302
                    Found. Його ввели, тому що при 302 HTTP коді деякі клієнти
                    змінювали тип запиту.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>308 Permanent Redirect</h3>}
                text={
                  <p>
                    "Постійний редирект". У запитуваного ресурсу назавжди
                    змінився URI і у всіх наступних запитах варто звертатися до
                    нього.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_clientErrors">
            <TableBody>
              <TableOneCol text={<h3>Клієнтські помилки</h3>} />
              <TableTwoCol
                title={<h3>400 - Bad Request</h3>}
                text={
                  <p>
                    "Невірний запит". Сервер не може опрацювати запит, тому що
                    не розуміє його.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>401 - Unauthorized</h3>}
                text={
                  <p>
                    "Неавторизовано". Сервер не може обробити запит без
                    автентифікації. Потрібно додати до заголовка запиту поле
                    Authorization або перевірити правильність даних у цьому
                    полі, якщо воно вже є.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>402 - Payment Required</h3>}
                text={
                  <p>
                    "Необхідна оплата". Спочатку цей код мав використовуватися у
                    платіжних системах. Нині він не використовується.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>403 - Forbidden</h3>}
                text={
                  <p>
                    "Заборонено". Сервер відмовляється обробити запит, тому що
                    користувач не має прав на перегляд вмісту.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>404 - Not Found</h3>}
                text={
                  <p>
                    "Не знайдено". Сервер не може знайти запитуваний ресурс.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>405 - Method Not Allowed</h3>}
                text={
                  <p>
                    "Метод заборонений". Зазначений у запиті метод не можна
                    використовувати.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>406 - Not Acceptable</h3>}
                text={
                  <p>
                    "Неприйнятно". На сервері немає контенту, який відповідає
                    вказаним у заголовках запиту характеристикам.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>407 - Proxy Authentication Required</h3>}
                text={
                  <p>
                    "Необхідна автентифікація для проксі". Цей код має таку ж
                    логіку, як і 401 Unauthorized, але в цьому випадку клієнт
                    повинен авторизуватися для використання проксі.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>408 - Request Timeout</h3>}
                text={
                  <p>
                    «Минув час очікування відповіді на запит». Сервер не отримав
                    запиту повністю протягом максимально допустимого для цього
                    часу.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>409 - Conflict</h3>}
                text={
                  <p>
                    "Конфлікт". Сервер не зміг обробити запит через те, що вміст
                    цього запиту вступив у конфлікт із параметрами сервера.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>410 - Gone</h3>}
                text={
                  <p>
                    "Видалено". Запит не може бути опрацьований, тому що ресурс
                    був видалений.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>411 - Length Required</h3>}
                text={
                  <p>
                    "Потрібно значення заголовка Content-Length". Сервер
                    відмовляється обробляти запит, доки в його заголовках не
                    буде вказано значення у полі Content-Length.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>412 - Precondition Failed</h3>}
                text={
                  <p>
                    «Неможливі умови запиту». Сервер не може опрацювати запит,
                    тому що в його заголовках зазначена умова, яка не може бути
                    виконана.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>413 - Request Entity Too Large</h3>}
                text={
                  <p>
                    "Занадто велике тіло запиту". Тіло запиту перевищує
                    максимально допустимий розмір, який може прийняти сервер.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>414 - Request-URI Too Long</h3>}
                text={
                  <p>
                    "Занадто довгий URI". URI перевищує максимально допустиму
                    довжину.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>415 - Unsupported Media Type</h3>}
                text={
                  <p>
                    "Непідтримуваний медіа формат даних". Сервер відмовляється
                    обробити запит, тому що вміст містить дані в неприпустимому
                    для такого методу форматі.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>416 - Requested Range Not Satisfiable</h3>}
                text={
                  <p>
                    "Діапазон не може бути виконаний". У полі Range вказано
                    неприпустимий для ресурсу діапазон.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>417 - Expectation Failed</h3>}
                text={
                  <p>
                    "Неприпустиме значення поля Expect". Сервер не може виконати
                    умову в поле Expect у заголовках запиту.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>418 - I'm a teapot</h3>}
                text={
                  <p>
                    "Я чайник". Повідомлення, яке має надсилати чайник для
                    заварювання чаю, якщо на ньому намагаються заварити каву.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>422 - Unprocessable Entity</h3>}
                text={
                  <p>
                    Необроблюваний запит». Синтаксис запиту правильний, але
                    через логічну помилку сервер не може його виконати. Такий
                    код помилки може виникнути, якщо запит містить XML-документ
                    із логічною помилкою.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>423 - Locked</h3>}
                text={
                  <p>
                    "Заблоковано". Запитуваний ресурс заблокований для запитів з
                    таким методом.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>424 - Failed Dependency</h3>}
                text={
                  <p>
                    "Невиконана залежність". Сервер не зміг виконати запит, тому
                    що дія в ньому залежала від іншої дії, і воно не спрацювало.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>426 - Upgrade Required</h3>}
                text={
                  <p>
                    "Необхідно оновити протокол". Сервер відмовляється обробляти
                    запит, використовуючи поточний протокол, але може зробити це
                    після переходу на іншу версію.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>499 - Client Closed Request</h3>}
                text={
                  <p>
                    "Клієнт відкликав запит". Нестандартний код для Nginx, щоб
                    визначити ситуацію, в якій клієнт закрив з'єднання, поки
                    Nginx обробляв запит.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_serverErrors">
            <TableBody>
              <TableOneCol text={<h3>Серверні помилки</h3>} />
              <TableTwoCol
                title={<h3>500 - Internal Server Error</h3>}
                text={
                  <p>
                    "Внутрішня помилка сервера". Сервер зіштовхнувся із
                    непередбаченою помилкою під час обробки запиту.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>501 - Not Implemented</h3>}
                text={
                  <p>
                    "Не реалізовано". Сервер не підтримує функціонал, який
                    потрібний для обробки запиту.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>502 - Bad Gateway</h3>}
                text={
                  <p>
                    "Не реалізовано". Сервер не підтримує функціонал, який
                    потрібний для обробки запиту.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>503 - Service Unavailable</h3>}
                text={
                  <p>
                    Сервіс недоступний. Сервер недоступний, оскільки
                    перевантажений чи ньому проводяться технічні роботи.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>504 - Gateway Timeout</h3>}
                text={
                  <p>
                    "Шлюз не відповідає". Сервер не отримав своєчасної відповіді
                    від сервера, що стоїть вище, і закрив з'єднання.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>505 - HTTP Version Not Supported</h3>}
                text={
                  <p>
                    "Версія HTTP не підтримується". Сервер не підтримує версію
                    HTTP, яка вказана у заголовках запиту.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>507 - Insufficient Storage</h3>}
                text={
                  <p>
                    "Недостатньо місця". Сервер не може виконати запит, тому що
                    на ньому недостатньо вільного місця, щоб зберегти необхідні
                    для виконання запиту дані.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>508 - Loop Detected</h3>}
                text={
                  <p>
                    «Виявлено нескінченне перенаправлення». Сервер скасував
                    виконання операції, оскільки виявив нескінченний редирект
                    під час обробки запиту з параметром Depth: infinity.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>509 - Bandwidth Limit Exceeded</h3>}
                text={
                  <p>
                    «Вичерпано пропускну здатність каналу». Сайт вичерпав ліміт
                    щодо використання трафіку на хостингу.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_xml">
            <TableBody>
              <TableOneCol text={<h2>XMLHttpRequest</h2>} />
              <TableOneCol
                text={
                  <p>
                    XMLHttpRequest – це вбудований у браузер об'єкт, який дає
                    можливість робити HTTP-запити до сервера без
                    перезавантаження сторінки. На даний момент є застарілим
                    методом і зараз найчастіше використовують метод fetch.
                  </p>
                }
              />
              <TableOneCol text={<h3>Синхронний запит.</h3>} />
              <TableOneCol
                text={
                  <p>
                    Для того щоб виконати синхронний запит, то в рядку
                    xhr.open(method, URL, [async, user, password]) параметр
                    async потрібно встановити false. Синхронні запити
                    використовуються рідко, оскільки вони блокують виконання
                    JavaScript доти, доки завантаження не завершено. У деяких
                    браузерах не можна прокручувати сторінку, доки синхронний
                    запит.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_async">
            <TableBody>
              <TableOneCol text={<h3>Асинхронний запит.</h3>} />
              <TableTwoCol
                title={<h3>Створити</h3>}
                text={<p>let xhr = new XMLHttpRequest();</p>}
              />
              <TableTwoCol
                title={<h3>Ініціалізувати</h3>}
                text={
                  <p>
                    xhr.open(method, URL, [async, user, password])
                    <br /> method – Найчастіше використовують "GET" або "POST".
                    <br /> URL - містить адресу, куди ми надсилаємо запит.
                    <br /> async - пишемо true оскільки запит асинхронний.{" "}
                    <br /> user, password – логін та пароль якщо необхідно
                    вказувати.
                  </p>
                }
              />
              <TableTwoCol
                title={
                  <h3>
                    Тип відповіді <br />
                    xhr.responseType
                  </h3>
                }
                text={
                  <p>
                    Існують такі типи відповідей: <br />
                    " " - рядок, встановлений за замовчуванням.
                    <br />
                    "text" – рядок.
                    <br />
                    "arraybuffer" - застосовується для бінарних даних.
                    <br />
                    "blob" - застосовується для бінарних даних.
                    <br />
                    "document" - XML-документ. <br />
                    "json" – у форматі JSON.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>Слухати події</h3>}
                text={
                  <p>
                    Найчастіше використовують три події: <br />
                    load - виконується в той момент, коли приходить відповідь
                    від сервера.
                    <pre>
                      <code>{codeLoadUa}</code>
                    </pre>
                    <br />
                    error - виконується коли відбуваються помилки, немає
                    відповіді чи неправильний URL. <br />
                    <pre>
                      <code>{codeErrorUa}</code>
                    </pre>
                    <br />
                    progress - виконується періодично у процесі завантаження
                    відповіді.
                    <br />
                    <pre>
                      <code>{codePprogressUa}</code>
                    </pre>
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>Надіслати запит</h3>}
                text={<p>xhr.send()</p>}
              />
              <TableTwoCol
                title={<h3>Скасування запиту</h3>}
                text={<p>xhr.abort()</p>}
              />
              <ButtonExample
                titleButtonExample={"Приклад методу GET"}
                title={getFormatedText(` (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
                0:{id: 1, name: 'Leanne Graham', username: 'Bret', email:
                'Sincere@april.biz', address: {…}, …}
                1 : {id: 2, name: 'Ervin Howell', username: 'Antonette',
                email: 'Shanna@melissa.tv', address: {…}, …}
                2 : {id: 3, name: 'Clementine Bauch', username: 'Samantha',
                email: 'Nathan@yesenia.net', address: {…}, …}
                3 : {id: 4, name: 'Patricia Lebsack', username: 'Karianne',
                email: 'Julianne.OConner@kory.org', address: {…}, …}
                4 : {id: 5, name: 'Chelsey Dietrich', username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca', address: {…}, …}
                5 : {id: 6, name: 'Mrs. Dennis Schulist', username:
                'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info',
                address: {…}, …}
                6 : {id: 7, name: 'Kurtis Weissnat', username:
                'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', address:
                {…}, …}
                7 : {id: 8, name: 'Nicholas Runolfsdottir V', username:
                'Maxime_Nienow', email: 'Sherwood@rosamond.me', address:
                {…}, …}
                8 : {id: 9, name: 'Glenna Reichert', username: 'Delphine',
                email: 'Chaim_McDermott@dana.io', address: {…}, …}
                9 : {id: 10, name: 'Clementina DuBuque', username:
                'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', address:
                {…}, …}`)}
                text={
                  <pre>
                    <code>{methodGet}</code>
                  </pre>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_headlines">
            <TableBody>
              <TableOneCol text={<h3>HTTP-заголовки.</h3>} />
              <TableTwoCol
                title={<h3>getAllResponseHeaders()</h3>}
                text={
                  <p>
                    Повертає всі заголовки відповіді, крім Set-Cookie та
                    Set-Cookie2. Заголовки повертаються як однієї стоки. Для
                    більш читального вигляду треба внести невеликі редагування в
                    JS.
                  </p>
                }
              />
              <ButtonExample
                titleButtonExample={"Приклад"}
                title={
                  <pre>
                    <code>{getAllResponseHeadersResponseUa}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{getAllResponseHeadersRequestUa}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>getResponseHeader (name)</h3>}
                text={
                  <p>
                    Повертає значення заголовка відповіді name (крім Set-Cookie
                    та Set-Cookie2). <br />
                    xhr.getResponseHeader('Content-Type')
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>setRequestHeader (name, value)</h3>}
                text={
                  <p>
                    Встановлює заголовок запиту з ім'ям name та значенням value.
                    <br />
                    xhr.setRequestHeader('Content-Type', 'application/json');
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_post">
            <TableBody>
              <TableOneCol text={<h3>POST.</h3>} />
              <TableOneCol
                text={
                  <p>
                    Створюємо об'єкт із зазначенням форми (не обов'язково). Якщо
                    потрібні ще якісь поля, то за допомогою методу append ми їх
                    додаємо.
                    <br />
                    <pre>
                      <code>{postCode}</code>
                    </pre>
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_progress">
            <TableBody>
              <TableOneCol text={<h3>Прогрес відправлення .</h3>} />
              <TableOneCol
                text={
                  <p>
                    Подія progress спрацьовує лише на стадії завантаження
                    відповіді із сервера.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>xhr.onprogress</h3>}
                text={
                  <p>Виконується періодично під час завантаження відповіді.</p>
                }
              />
              <TableTwoCol
                title={<h3>xhr.upload</h3>}
                text={
                  <p>
                    Підходить для відстеження подій під час надсилання запитів.
                    Можна виділити такі події:
                    <br /> loadstart – початок запиту. <br /> progress –
                    періодично генерується під час відправки на сервер. <br />
                    abort – запит було перервано викликом xhr.abort() <br />
                    error – сталася помилка з'єднання. <br /> load – запит
                    успішно завершено. <br /> timeout – запит було скасовано
                    через закінчення відведеного йому часу. <br /> loadend –
                    спрацьовує після load, error, timeout чи abort. <br />
                    Важливо знати, що події error, abort, timeout і load взаємно
                    виключають.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_fetch">
            <TableBody>
              <TableOneCol text={<h2>Fetch.</h2>} />
              <TableOneCol
                text={
                  <p>
                    Даний метод є найсучаснішим. Зважаючи на це, він не
                    підтримується старими браузарами, але підтримується всіма
                    сучасними браузерами. Для підтримки старих браузерів можна
                    використовувати поліфіли. <br /> let promise = fetch(url,
                    [options]) <br />
                    url – URL для надсилання запиту. <br />
                    options – додаткові параметри: метод, заголовки тощо.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_response">
            <TableBody>
              <TableOneCol text={<h3>Response.</h3>} />
              <TableOneCol
                text={<p>Це параметри отримання відповідей від сервера.</p>}
              />
              <TableTwoCol
                title={<h3>response.status</h3>}
                text={<p>Виводить HTTP-код відповіді.</p>}
              />
              <TableTwoCol
                title={<h3>response.ok</h3>}
                text={
                  <p>
                    Бульове значення, яке виводить true, якщо статус відповіді в
                    діапазоні 200-299.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>response.headers</h3>}
                text={<p>Дуже схожий на Map об'єкт із HTTP-заголовками.</p>}
              />
              <TableTwoCol
                title={<h3>response.text()</h3>}
                text={<p>Повертає відповідь як звичайний текст.</p>}
              />
              <TableTwoCol
                title={<h3>response.json()</h3>}
                text={<p>Перетворює відповідь на JSON-об'єкт.</p>}
              />
              <TableTwoCol
                title={<h3>response.formData()</h3>}
                text={<p>Повертає відповідь як об'єкт FormData.</p>}
              />
              <TableTwoCol
                title={<h3>response.blob()</h3>}
                text={<p>Повертає об'єкт як Blob.</p>}
              />
              <TableTwoCol
                title={<h3>response.arrayBuffer()</h3>}
                text={<p>Повертає відповідь як ArrayBuffer.</p>}
              />
              <TableTwoCol
                title={<h3>response.body()</h3>}
                text={
                  <p>
                    Це об'єкт ReadableStream, за допомогою якого можна зчитувати
                    тіло запиту частинами.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_postFeach">
            <TableBody>
              <TableOneCol text={<h3>POST-запити</h3>} />{" "}
              <TableTwoCol
                title={<h3>method</h3>}
                text={<p>HTTP метод, у цьому випадку POST.</p>}
              />
              <TableTwoCol
                title={<h3>headers</h3>}
                text={<p>Для встановлення заголовка запиту.</p>}
              />
              <TableTwoCol
                title={<h3>body</h3>}
                text={
                  <p>
                    Тіло запиту, одне зі списку: <br /> JSON. <br />
                    об'єкт FormData. <br /> Blob/BufferSource для відправки
                    бінарних даних. <br /> URLSearchParams для надсилання даних
                    у кодуванні x-www-form-urlencoded, використовується рідко.{" "}
                    <br />
                  </p>
                }
              />
              <TableOneCol
                text={
                  <p>
                    <pre>
                      <code>{postCode2}</code>
                    </pre>
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_formData">
            <TableBody>
              <TableOneCol text={<h2>FormData</h2>} />
              <TableOneCol
                text={
                  <p>
                    Використовується для відправки різних форм, при цьому його
                    вказують у властивості тіла запиту. <br />
                    let formData = новий FormData([form]);
                    <br />
                  </p>
                }
              />
              <TableOneCol text={<h3>Методи FormData</h3>} />
              <TableTwoCol
                title={<h3>formData.append (name, value)</h3>}
                text={
                  <p>
                    append() додає (створює) нове значення до існуючого ключа
                    всередині об'єкта FormData. <br /> name - Ім'я поля. <br />{" "}
                    value - Значення поля.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.append (name, blob, fileName)</h3>}
                text={
                  <p>
                    name - Ім'я поля. <br />
                    На вибір одне із чотирьох значень:
                    <br />
                    value – значення поля. <br /> Blob - Незмінні необроблені
                    двійкові дані за допомогою яких можна отримати доступ до
                    діапазонів байтів усередині Blob об'єкта у вигляді окремого
                    файлу.
                    <br /> File - Об'єкти зазвичай вилучаються з об'єкта
                    FileList, який повернутий як результат вибору користувача
                    файлів за допомогою input елемента.
                    <br /> USVString - Відповідає набору всіх можливих
                    послідовностей скалярних значень Unicode. <br /> filename -
                    Ім'я файлу, яке буде відправлено на сервер
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.set (name, value)</h3>}
                text={
                  <p>
                    Діє як і метод append, тільки дозволяє видалити поле name і
                    написати нове поле.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.set (name, blob, fileName)</h3>}
                text={
                  <p>
                    Діє як і метод append, тільки дозволяє видалити поле name і
                    написати нове поле.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.delete(name)</h3>}
                text={<p>Видаляє поле із заданим ім'ям name.</p>}
              />
              <TableTwoCol
                title={<h3>formData.get(name)</h3>}
                text={<p>Отримує значення поля з ім'ям name.</p>}
              />
              <TableTwoCol
                title={<h3>formData.getAll(name)</h3>}
                text={<p>Отримує всі значення полів з ім'ям name.</p>}
              />
              <TableTwoCol
                title={<h3>formData.has(name)</h3>}
                text={
                  <p>
                    Якщо є поле з ім'ям name, то повертає true, інакше false.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.entries()</h3>}
                text={
                  <p>
                    Повертає iterator, дозволяючи пройтись по всіх
                    ключах/значеннях у цьому об'єкті. Ключ кожної пари – це
                    об'єкт USVString, значення – це USVString чи Blob.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.keys()</h3>}
                text={
                  <p>
                    Повертає iterator дозволяючи пройтись по всіх ключах, що
                    містяться в цьому об'єкті. Ключі є USVString об'єктами.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.values()</h3>}
                text={
                  <p>
                    Повертає iterator дозволяючи пройтись по всіх значеннях у
                    цьому об'єкті. Значення - це USVString чи Blob об'єкти.
                  </p>
                }
              />
            </TableBody>
          </Table>
        </TableContainer>
        <footer className="footer">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP"
          >
            Документація HTTP
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
