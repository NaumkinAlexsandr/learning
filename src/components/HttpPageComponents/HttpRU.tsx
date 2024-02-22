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
  getResponse,
  getRequest,
  codeLoad,
  codeError,
  codePprogress,
  headRequest,
  headResponse,
  postResponse,
  postRequest,
  putResponse,
  putRequest,
  deleteResponse,
  deleteRequest,
  methodGet,
  getAllResponseHeadersResponse,
  getAllResponseHeadersRequest,
  postCode,
  postCode2,
} from "./HttpConstPre.tsx";
import "./http.scss";
import { getFormatedText } from "../../core/getFormatedText.tsx";

export default function HttpRU() {
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
            section1={"Описание HTTP"}
            section2={"Методы HTTP запроса"}
            section3={"Информационные"}
            section4={"Успешные"}
            section5={"Перенаправления"}
            section6={"Клиентские ошибки"}
            section7={"Серверные ошибки"}
            section8={"Синхронный запрос"}
            section9={"Асинхронный запрос"}
            section10={"HTTP-заголовки"}
            section11={"POST"}
            section12={"Прогресс отправки"}
            section13={"Описание Fetch"}
            section14={"Response"}
            section15={"POST-запросы"}
            section16={"FormData"}
            onClose={handleMenuInfoClose}
          />
        )}

        <TableContainer>
          <Table id="http_title">
            <TableOneCol text={<h1>Описание HTTP.</h1>} />
          </Table>

          <Table id="http_description">
            <TableBody>
              <TableOneCol text={<h2>Описание HTTP</h2>} />
              <TableOneCol
                text={
                  <p>
                    HTTP — это простой протокол, который чаще всего использует
                    возможности другого протокола - TCP. Благодаря этому HTTP
                    считается очень надежным протоколом для обмена содержимым.
                    Также является одним из самых часто используемых протоколов
                    приложений. <br /> Всё программное обеспечение для работы с
                    протоколом HTTP разделяется на три большие категории:
                    <ul className="paragraph">
                      <li>Клиенты — конечные потребители услуг сервера.</li>
                      <li>
                        Прокси посредники для выполнения транспортных служб.
                      </li>
                      <li>
                        Серверы как основные поставщики услуг хранения и
                        обработки информации.
                      </li>
                    </ul>
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>Клиенты</h3>}
                text={
                  <p>
                    Клиент делает начальный запрос чаще всего через браузер
                    (программы). После этого браузер изучает и запрашивает
                    дополнительные файлы, необходимые для коректного отображения
                    веб-страницы.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>Прокси</h3>}
                text={
                  <p>
                    Промежуточный сервер в компьютерных сетях, выполняющий роль
                    посредника между пользователем и целевым сервером,
                    позволяющий клиентам как выполнять косвенные запросы к
                    другим сетевым службам, так и получать ответы.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>Серверы</h3>}
                text={
                  <p>
                    Сервер, принимающий HTTP-запросы от клиентов и выдающий им
                    HTTP-ответы, как правило, вместе с HTML-страницей,
                    изображением, файлом, медиа-потоком или другими данными.
                    Веб-сервером называют как программное обеспечение,
                    выполняющее функции веб-сервера, так и непосредственно
                    компьютер на котором это программное обеспечение работает.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_method">
            <TableBody>
              <TableOneCol text={<h2>Методы HTTP запроса.</h2>} />
              <TableTwoCol
                title={<h3>GET</h3>}
                text={
                  <p>
                    Запрашивает представление ресурса. Такие запросы могут
                    только извлекать данные.
                  </p>
                }
              />
              <ButtonExample
                titleButtonExample={"Пример GET"}
                title={
                  <pre>
                    <code>{getRequest}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{getResponse}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>HEAD</h3>}
                text={
                  <p>
                    Запрашивает ресурс, как и GET, но ответ приходит без тела.
                  </p>
                }
              />
              <ButtonExample
                titleButtonExample={"Пример HEAD"}
                title={
                  <pre>
                    <code>{headRequest}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{headResponse}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>POST</h3>}
                text={
                  <p>
                    Отправляет сущности к указанному ресурсу. Может вызывать
                    побочные эффекты на сервере и изменение состояния.
                  </p>
                }
              />
              <ButtonExample
                titleButtonExample={"Пример POST"}
                title={
                  <pre>
                    <code>{postRequest}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{postResponse}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>PUT</h3>}
                text={
                  <p>Заменяет текущие представления ресурса данными запроса.</p>
                }
              />
              <ButtonExample
                titleButtonExample={"Пример PUT"}
                title={
                  <pre>
                    <code>{putResponse}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{putRequest}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>DELETE</h3>}
                text={<p>Удаляет указанный ресурс.</p>}
              />
              <ButtonExample
                titleButtonExample={"Пример DELETE"}
                title={
                  <pre>
                    <code>{deleteResponse}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{deleteRequest}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>CONNECT</h3>}
                text={
                  <p>
                    Настраивает туннель с сервером, определенным по ресурсу.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>OPTIONS</h3>}
                text={<p>Описывает параметры соединения с ресурсом.</p>}
              />
              <TableTwoCol
                title={<h3>TRACE</h3>}
                text={
                  <p>Вызывает возвращаемое текстовое сообщение с ресурса.</p>
                }
              />
              <TableTwoCol
                title={<h3>PATCH</h3>}
                text={<p>Частично изменяет ресурс.</p>}
              />
            </TableBody>
          </Table>

          <Table id="http_code">
            <TableBody>
              <TableOneCol text={<h2>Коды ответа HTTP</h2>} />
              <TableOneCol text={<h3>Информационные</h3>} />
              <TableTwoCol
                title={<h3>100 - Continue</h3>}
                text={
                  <p>
                    «Продолжить». Означает, что сервер получил начальную часть
                    запроса и готов принять остальную его часть.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>101 - Switching Protocols</h3>}
                text={
                  <p>
                    «Переключить протокол». Означает, что сервер меняет
                    протокол. Отправляется при наличии в запросе заголовка
                    Upgrade.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>102 - Processing</h3>}
                text={
                  <p>
                    "В обработке". Этот код указывает, что сервер получил запрос
                    и обрабатывает его, но обработка ещё не завершена.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>103 - Early Hints</h3>}
                text={
                  <p>
                    «Предварительные данные». Предварительный ответ с частью
                    заголовков. Используется, когда сервер не может быстро
                    сформировать все заголовки.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_ok">
            <TableBody>
              <TableOneCol text={<h3>Успешные</h3>} />
              <TableTwoCol
                title={<h3>200 - OK</h3>}
                text={<p>«Успешно». Сервер успешно обработал запрос.</p>}
              />
              <TableTwoCol
                title={<h3>201 - Created</h3>}
                text={
                  <p>
                    «Создано». Сервер успешно обработал запрос и создал новый
                    ресурс.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>202 - Accepted</h3>}
                text={
                  <p>
                    «Принято». Сервер начал обрабатывать запрос, но пока ещё не
                    закончил процесс.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>203 - Non-Authoritative Information</h3>}
                text={
                  <p>
                    «Неофициальная информация». Сервер успешно обработал запрос,
                    но прокси, через который проходил ответ на запрос, изменил
                    этот ответ.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>204 - No Content</h3>}
                text={
                  <p>
                    «Нет содержимого». Сервер успешно обработал запрос, но кроме
                    заголовков ответа нет содержимого, которое можно было бы
                    отправить в ответ.
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
                    «Частичное содержимое». Сервер успешно обработал частичный
                    запрос и отправил содержимое, указанное в заголовке
                    Content-Range.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>207 - Multi-Status</h3>}
                text={
                  <p>
                    «Мульти-статус». В результатах запроса есть информация о
                    нескольких независимых друг от друга операциях.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_redirects">
            <TableBody>
              <TableOneCol text={<h3>Перенаправления</h3>} />
              <TableTwoCol
                title={<h3>300 - Multiple Choice</h3>}
                text={
                  <p>
                    «Множественный выбор». Сервер присылает такой код, когда
                    есть несколько возможных ответов на запрос. Пользователь или
                    user-agent должен выбрать один из вариантов.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>301 - Moved Permanently</h3>}
                text={
                  <p>
                    «Перемещено навсегда». Запрашиваемый ресурс теперь доступен
                    по новому URI и при последующих запросах стоит использовать
                    именно его.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>302 - Found</h3>}
                text={
                  <p>
                    «Найдено».Запрашиваемый ресурс временно доступен по другому
                    URI и при последующих запросах стоит использовать старый
                    URI.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>303 - See Other</h3>}
                text={
                  <p>
                    «Смотри в другом месте». Запрашиваемый ресурс нужно искать
                    по другому URI с методом запроса GET, несмотря на то, что в
                    изначальном запросе мог быть другой метод.
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
                    «Используй прокси». Запрос к ресурсу должен осуществляться
                    через прокси. Этот код больше не используется.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>306 - Switch Proxy</h3>}
                text={
                  <p>
                    «Зарезервировано». Запрос к ресурсу должен осуществляться
                    через прокси, который сервер указал в заголовках ответа.
                    Этот код больше не используется.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>307 - Temporary Redirect</h3>}
                text={
                  <p>
                    «Временное перенаправление». Запрашиваемый ресурс временно
                    доступен по другому URI. Этот код имеет такую же логику, что
                    и 302 Found. Его ввели, потому что при 302 HTTP коде
                    некоторые клиенты меняли тип запроса.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>308 Permanent Redirect</h3>}
                text={
                  <p>
                    «Постоянный редирект». У запрашиваемого ресурса навсегда
                    изменился URI и во всех следующих запросах стоит обращаться
                    к нему.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_clientErrors">
            <TableBody>
              <TableOneCol text={<h3>Клиентские ошибки</h3>} />
              <TableTwoCol
                title={<h3>400 - Bad Request</h3>}
                text={
                  <p>
                    «Неверный запрос». Сервер не может обработать запрос, потому
                    что не понимает его.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>401 - Unauthorized</h3>}
                text={
                  <p>
                    «Неавторизованно». Сервер не может обработать запрос без
                    аутентификации. Нужно добавить в заголовок запроса поле
                    Authorization или проверить правильность данных в этом поле,
                    если оно уже присутствует.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>402 - Payment Required</h3>}
                text={
                  <p>
                    «Необходима оплата». Изначально этот код должен был
                    использоваться в платёжных системах. Сейчас он не
                    используется.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>403 - Forbidden</h3>}
                text={
                  <p>
                    «Запрещено». Сервер отказывается обработать запрос, потому
                    что у пользователя нет прав на просмотр содержимого.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>404 - Not Found</h3>}
                text={
                  <p>
                    «Не найдено». Сервер не может найти запрашиваемый ресурс.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>405 - Method Not Allowed</h3>}
                text={
                  <p>
                    «Метод запрещён». Указанный в запросе метод нельзя
                    использовать.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>406 - Not Acceptable</h3>}
                text={
                  <p>
                    «Неприемлемо». На сервере нет контента, который отвечает
                    указанным в заголовках запроса характеристикам.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>407 - Proxy Authentication Required</h3>}
                text={
                  <p>
                    «Необходима аутентификация для прокси». У этого кода такая
                    же логика, что и у 401 Unauthorized, но в этом случае клиент
                    должен авторизоваться для использования прокси.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>408 - Request Timeout</h3>}
                text={
                  <p>
                    «Истекло время ожидания ответа на запрос». Сервер не получил
                    запрос полностью в течение максимально допустимого для этого
                    времени.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>409 - Conflict</h3>}
                text={
                  <p>
                    «Конфликт». Сервер не смог обработать запрос из-за того что
                    содержимое этого запроса вступило в конфликт с параметрами
                    сервера.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>410 - Gone</h3>}
                text={
                  <p>
                    «Удалено». Запрос не может быть обработан, потому что ресурс
                    был удалён.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>411 - Length Required</h3>}
                text={
                  <p>
                    «Требуется значение заголовка Content-Length». Сервер
                    отказывается обрабатывать запрос, пока в его заголовках не
                    будет указано значение в поле Content-Length.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>412 - Precondition Failed</h3>}
                text={
                  <p>
                    «Невыполнимые условия запроса». Сервер не может обработать
                    запрос, потому что в его заголовках указано условие, которое
                    не может быть выполнено.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>413 - Request Entity Too Large</h3>}
                text={
                  <p>
                    «Слишком большое тело запроса». Тело запроса превышает
                    максимально допустимый размер, который сервер может принять.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>414 - Request-URI Too Long</h3>}
                text={
                  <p>
                    «Слишком длинный URI». URI превышает максимально допустимую
                    длину.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>415 - Unsupported Media Type</h3>}
                text={
                  <p>
                    «Неподдерживаемый медиа формат данных». Сервер отказывается
                    обработать запрос, потому что его содержимое содержит данные
                    в недопустимом для такого метода формате.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>416 - Requested Range Not Satisfiable</h3>}
                text={
                  <p>
                    «Диапазон не может быть выполнен». В поле Range указан
                    недопустимый для ресурса диапазон.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>417 - Expectation Failed</h3>}
                text={
                  <p>
                    «Недопустимое значение поля Expect». Сервер не может
                    выполнить условие в поле Expect в заголовках запроса.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>418 - I'm a teapot</h3>}
                text={
                  <p>
                    «Я чайник». Сообщение, которое должен отправлять чайник для
                    заварки чая, если на нём пытаются заварить кофе.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>422 - Unprocessable Entity</h3>}
                text={
                  <p>
                    Необрабатываемый запрос». Синтаксис запроса правильный, но
                    из-за логической ошибки сервер не может его выполнить. Такой
                    код ошибки может возникнуть, если запрос содержит
                    XML-документ с логической ошибкой.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>423 - Locked</h3>}
                text={
                  <p>
                    «Заблокировано». Запрашиваемый ресурс заблокирован для
                    запросов с таким методом.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>424 - Failed Dependency</h3>}
                text={
                  <p>
                    «Невыполненная зависимость». Сервер не смог выполнить
                    запрос, потому что запрашиваемое в нём действие зависело от
                    другого действия, и оно не сработало.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>426 - Upgrade Required</h3>}
                text={
                  <p>
                    «Необходимо обновить протокол». Сервер отказывается
                    обрабатывать запрос, используя текущий протокол, но может
                    сделать это после перехода на его другую версию.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>499 - Client Closed Request</h3>}
                text={
                  <p>
                    «Клиент отозвал запрос». Нестандартный код для Nginx, чтобы
                    обозначить ситуацию, в которой клиент закрыл соединение,
                    пока Nginx обрабатывал запрос.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_serverErrors">
            <TableBody>
              <TableOneCol text={<h3>Серверные ошибки</h3>} />
              <TableTwoCol
                title={<h3>500 - Internal Server Error</h3>}
                text={
                  <p>
                    «Внутренняя ошибка сервера». Сервер столкнулся с
                    непредвиденной ошибкой во время обработки запроса.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>501 - Not Implemented</h3>}
                text={
                  <p>
                    «Не реализовано». Сервер не поддерживает функционал, который
                    необходим для обработки запроса.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>502 - Bad Gateway</h3>}
                text={
                  <p>
                    «Неверный шлюз». Сервер получил некорректный ответ от
                    вышестоящего сервера.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>503 - Service Unavailable</h3>}
                text={
                  <p>
                    «Сервис недоступен». Сервер недоступен, потому что
                    перегружен или на нём проводятся технические работы.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>504 - Gateway Timeout</h3>}
                text={
                  <p>
                    «Шлюз не отвечает». Сервер не получил своевременного ответа
                    от вышестоящего сервера и закрыл соединение.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>505 - HTTP Version Not Supported</h3>}
                text={
                  <p>
                    «Версия HTTP не поддерживается». Сервер не поддерживает
                    версию HTTP, которая указана в заголовках запроса.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>507 - Insufficient Storage</h3>}
                text={
                  <p>
                    «Недостаточно места». Сервер не может выполнить запрос,
                    потому что на нём недостаточно свободного места, чтобы
                    сохранить необходимые для выполнения запроса данные.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>508 - Loop Detected</h3>}
                text={
                  <p>
                    «Обнаружено бесконечное перенаправление». Сервер отменил
                    выполнение операции, поскольку обнаружил бесконечный
                    редирект при обработке запроса с параметром Depth: infinity.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>509 - Bandwidth Limit Exceeded</h3>}
                text={
                  <p>
                    «Исчерпана пропускная способность канала». Сайт исчерпал
                    лимит по использованию трафика на хостинге.
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
                    XMLHttpRequest – это встроенный в браузер объект, который
                    даёт возможность делать HTTP-запросы к серверу без
                    перезагрузки страницы. На данный момент является устаревшим
                    методом и сейчас чаще используют метод fetch.
                  </p>
                }
              />
              <TableOneCol text={<h3>Синхронный запрос.</h3>} />
              <TableOneCol
                text={
                  <p>
                    Для того чтобы выполнить синхронный запрос то в строке
                    xhr.open(method, URL, [async, user, password]) параметр
                    async нужно установить false. Синхронные запросы
                    используются редко, так как они блокируют выполнение
                    JavaScript до тех пор, пока загрузка не завершена. В
                    некоторых браузерах нельзя прокручивать страницу, пока идёт
                    синхронный запрос.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_async">
            <TableBody>
              <TableOneCol text={<h3>Асинхронный запрос.</h3>} />
              <TableTwoCol
                title={<h3>Создать</h3>}
                text={<p>let xhr = new XMLHttpRequest();</p>}
              />
              <TableTwoCol
                title={<h3>Инициализировать</h3>}
                text={
                  <p>
                    xhr.open(method, URL, [async, user, password])
                    <br /> method – Чаще всего используют "GET" или "POST".
                    <br /> URL - содержит адрес куда мы отправляем запрос.
                    <br /> async - пишем true поскольку запрос асинхронный.{" "}
                    <br /> user, password – логин и пароль если необходимо
                    указывать.
                  </p>
                }
              />
              <TableTwoCol
                title={
                  <h3>
                    Тип ответа <br />
                    xhr.responseType
                  </h3>
                }
                text={
                  <p>
                    Существуют такие типы ответов: <br />
                    " " - строка, установлен по умолчанию.
                    <br />
                    "text" – строка.
                    <br />
                    "arraybuffer" - применяется для бинарных данных.
                    <br />
                    "blob" - применяется для бинарных данных.
                    <br />
                    "document" - XML-документ. <br />
                    "json" - в формате JSON.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>Слушать события</h3>}
                text={
                  <p>
                    Чаще всего используют три события: <br />
                    load - выполняется в тот момент когда приходит ответ от
                    сервера.
                    <pre>
                      <code>{codeLoad}</code>
                    </pre>
                    <br />
                    error - выполняется когда происходят ошибки, нет ответа или
                    неправильный URL. <br />
                    <pre>
                      <code>{codeError}</code>
                    </pre>
                    <br />
                    progress - выполняется периодически в процессе загрузки
                    ответа.
                    <br />
                    <pre>
                      <code>{codePprogress}</code>
                    </pre>
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>Послать запрос</h3>}
                text={<p>xhr.send()</p>}
              />
              <TableTwoCol
                title={<h3>Отмена запроса</h3>}
                text={<p>xhr.abort()</p>}
              />
              <ButtonExample
                titleButtonExample={"Пример метода GET"}
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
                    Возвращает все заголовки ответа, кроме Set-Cookie и
                    Set-Cookie2. Заголовки возвращаются в виде одной стоки. Для
                    более читабельного вида надо внети небольшие правки в JS.
                  </p>
                }
              />
              <ButtonExample
                titleButtonExample={"Пример"}
                title={
                  <pre>
                    <code>{getAllResponseHeadersResponse}</code>
                  </pre>
                }
                text={
                  <pre>
                    <code>{getAllResponseHeadersRequest}</code>
                  </pre>
                }
              />
              <TableTwoCol
                title={<h3>getResponseHeader (name)</h3>}
                text={
                  <p>
                    Возвращает значение заголовка ответа name (кроме Set-Cookie
                    и Set-Cookie2). <br />
                    xhr.getResponseHeader('Content-Type')
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>setRequestHeader (name, value)</h3>}
                text={
                  <p>
                    Устанавливает заголовок запроса с именем name и значением
                    value.
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
                    Создаём объект с указание формы (не обязательно). Если нужны
                    ещё какието поля то с помощью метода append мы их добавляем.
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
              <TableOneCol text={<h3>Прогресс отправки.</h3>} />
              <TableOneCol
                text={
                  <p>
                    Событие progress срабатывает только на стадии загрузки
                    ответа с сервера.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>xhr.onprogress</h3>}
                text={
                  <p>Выполняется периодически в процессе загрузки ответа.</p>
                }
              />
              <TableTwoCol
                title={<h3>xhr.upload</h3>}
                text={
                  <p>
                    Подходит для отслеживания событий при отправке запросов.
                    Можно выделить такие события:
                    <br />
                    loadstart – начало запроса. <br />
                    progress – генерируется периодически во время отправки на
                    сервер.
                    <br />
                    abort – запрос был прерван вызовом xhr.abort() <br />
                    error – произошла ошибка соединения. <br />
                    load – запрос успешно завершён. <br />
                    timeout – запрос был отменён по причине истечения
                    отведённого для него времени. <br />
                    loadend – срабатывает после load, error, timeout или abort.{" "}
                    <br />
                    Важно знать что события error, abort, timeout и load взаимно
                    исключающие.
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
                    Данный метод является самым современным. Ввиду этого он не
                    подерживается старыми браузарами, но поддерживается всеми
                    современными браузерами. Для подержки в старых браузерах
                    можно использовать полифилы. <br />
                    let promise = fetch(url, [options]) <br />
                    url – URL для отправки запроса. <br />
                    options – дополнительные параметры: метод, заголовки и так
                    далее.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_response">
            <TableBody>
              <TableOneCol text={<h3>Response.</h3>} />
              <TableOneCol
                text={
                  <p>
                    Представляет собой параметры получения ответов от сервера.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>response.status</h3>}
                text={<p>Выводит HTTP-код ответа.</p>}
              />
              <TableTwoCol
                title={<h3>response.ok</h3>}
                text={
                  <p>
                    Булевое значение которое выводит true, если статус ответа в
                    диапазоне 200-299.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>response.headers</h3>}
                text={<p>Очень похожий на Map объект с HTTP-заголовками.</p>}
              />
              <TableTwoCol
                title={<h3>response.text()</h3>}
                text={<p>Возвращает ответ как обычный текст.</p>}
              />
              <TableTwoCol
                title={<h3>response.json()</h3>}
                text={<p>Преобразовывает ответ в JSON-объект.</p>}
              />
              <TableTwoCol
                title={<h3>response.formData()</h3>}
                text={<p>Возвращает ответ как объект FormData.</p>}
              />
              <TableTwoCol
                title={<h3>response.blob()</h3>}
                text={<p>Возвращает объект как Blob.</p>}
              />
              <TableTwoCol
                title={<h3>response.arrayBuffer()</h3>}
                text={<p>Возвращает ответ как ArrayBuffer.</p>}
              />
              <TableTwoCol
                title={<h3>response.body()</h3>}
                text={
                  <p>
                    Это объект ReadableStream, с помощью которого можно
                    считывать тело запроса по частям.
                  </p>
                }
              />
            </TableBody>
          </Table>

          <Table id="http_postFeach">
            <TableBody>
              <TableOneCol text={<h3>POST-запросы</h3>} />
              <TableTwoCol
                title={<h3>method</h3>}
                text={<p>HTTP метод, в данном случае POST.</p>}
              />
              <TableTwoCol
                title={<h3>headers</h3>}
                text={<p>Для установки заголовка запроса.</p>}
              />
              <TableTwoCol
                title={<h3>body</h3>}
                text={
                  <p>
                    Тело запроса, одно из списка:
                    <br />
                    строка JSON. <br />
                    объект FormData. <br />
                    Blob/BufferSource для отправки бинарных данных. <br />
                    URLSearchParams для отправки данных в кодировке
                    x-www-form-urlencoded, используется редко. <br />
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
                    Используется для отправки различных формб при этом его
                    указывают в свойстве тела запроса. <br />
                    let formData = new FormData([form]);
                    <br />
                  </p>
                }
              />
              <TableOneCol text={<h3>Методы FormData</h3>} />
              <TableTwoCol
                title={<h3>formData.append (name, value)</h3>}
                text={
                  <p>
                    append() добавляет (создаёт) новое значение в существующий
                    ключ внутри объекта FormData. <br />
                    name - Имя поля. <br />
                    value - Значение поля.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.append (name, blob, fileName)</h3>}
                text={
                  <p>
                    name - Имя поля. <br />
                    На выбор один из четырёх значений:
                    <br />
                    value - Значение поля. <br />
                    Blob - Неизменяемые необработанные двоичные данные с помощью
                    которых можно получить доступ к диапазонам байтов внутри
                    Blob объекта в виде отдельного файла.
                    <br />
                    File - Объекты как правило извлекаются из объекта FileList,
                    который возвращён как результат пользовательского выбора
                    файлов с помощью input элемента.
                    <br />
                    USVString - Соответствует набору всех возможных
                    последовательностей скалярных значений Unicode. <br />
                    filename - Имя файла которое будет отправлено на сервер
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.set (name, value)</h3>}
                text={
                  <p>
                    Действует как и метод append, только позволяет удалить поле
                    name, и написать новое поле.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.set (name, blob, fileName)</h3>}
                text={
                  <p>
                    Действует как и метод append, только позволяет удалить поле
                    name, и написать новое поле.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.delete(name)</h3>}
                text={<p>Удаляет поле с заданным именем name.</p>}
              />
              <TableTwoCol
                title={<h3>formData.get(name)</h3>}
                text={<p>Получает значение поля с именем name.</p>}
              />
              <TableTwoCol
                title={<h3>formData.getAll(name)</h3>}
                text={<p>Получает все значения полей с именем name.</p>}
              />
              <TableTwoCol
                title={<h3>formData.has(name)</h3>}
                text={
                  <p>
                    Если существует поле с именем name, то возвращает true,
                    иначе false.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.entries()</h3>}
                text={
                  <p>
                    Возвращает iterator, позволяя пройтись по всем
                    ключам/значениям в этом объекте. Ключ каждой пары - это
                    объект USVString, значение - это USVString или Blob.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.keys()</h3>}
                text={
                  <p>
                    Возвращает iterator позволяя пройтись по всем ключам
                    содержащимся в этом объекте. Ключи являются USVString
                    объектами.
                  </p>
                }
              />
              <TableTwoCol
                title={<h3>formData.values()</h3>}
                text={
                  <p>
                    Возвращает iterator позволяя пройтись по всем значениям в
                    этом объекте. Значения - это USVString или Blob объекты.
                  </p>
                }
              />
            </TableBody>
          </Table>
        </TableContainer>
        <footer className="footer">
          <a
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/HTTP"
          >
            Документация HTTP
          </a>
        </footer>
      </Container>
      <Arrow />
    </>
  );
}
