import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function EmbeddedContentUA() {
  return (
    <>
      <Table id="html_embeddedContent">
        <TableBody>
          <TableOneCol text={<h2>Вбудований зміст.</h2>} />
          <TableOneCol
            text={
              <p>
                Зміст мультимедійних HTML включає інші матеріали, навіть якщо
                вони не завжди легко взаємодіють.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;embed /&gt;</h3>}
            text={
              <p>
                Вставляє розширений контент у вибране місце документа. Цей
                контент може бути представлений від зовнішньої програми або
                іншого джерела інтерактивного контенту, такого як плагін для
                браузера, наприклад.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;iframe&gt; &lt;/iframe&gt;</h3>}
            text={
              <p>
                Дозволяє додати контент з іншого сайту. Атрибути:
                <br /> src - це атрибут, який вказує посилання на веб-сторінку,
                яку треба відобразити внутри .
                <br /> width - це атрибут, який вказує ширину .
                <br /> height - це атрибут, який вказує висоту .
                <br /> frameborder - це атрибут, який вказує, чи відображається
                рамка вокруг . Доступні значення: 0 - немає рамки, 1 - з рамкою.
                <br /> scrolling - це атрибут, який вказує, чи дозволяється
                прокрутка внутрішньої сторінки . Доступні значення: yes -
                дозволяється, no - не дозволяється.
                <br /> allowfullscreen - це атрибут, який вказує, чи
                дозволяється відображати в режимі полного екрана. Доступні
                значення: true - дозволяється, false - не дозволяється.
                <br /> allowpaymentrequest - це атрибут, який вказує, чи
                дозволяється використовувати платіжні запити внутрішньо в .
                Доступні значення: true - дозволяється, false - не дозволяється.
                <br /> referrerpolicy - це атрибут, який вказує, які дані
                посилаються з при переході на іншу веб-сторінку.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;object&gt; &lt;/object&gt;</h3>}
            text={
              <p>
                Повідомляє браузеру, як завантажувати та відображати об'єкти,
                які спочатку браузер не розуміє. Як правило, такі об'єкти
                вимагають підключення до браузера спеціального модуля, який
                називається плагін, або запуску допоміжної програми. Атрибути:
                <br />
                align - Визначає, як об'єкт вирівнюватиметься на сторінці та
                спосіб його обтікання текстом.
                <br />
                archive - Встановлює шлях до файлів, необхідних для роботи
                об'єкту.
                <br />
                classid - Адреса програми (додатки або плагіна), яка працює з
                цим об'єктом, і запускатиме його.
                <br />
                code – Ім'я об'єкта для його виконання.
                <br />
                codebase - Шлях до папки з об'єктом, вказаним атрибутом code чи
                classid.
                <br />
                codetype - Вказує на тип об'єкта, який задано атрибутом classid.
                <br />
                data - Адреса файлу для відображення у вікні браузера.
                <br />
                height – Висота об'єкта.
                <br />
                hspace - Горизонтальний відступ від об'єкта до навколишнього
                контенту.
                <br />
                tabindex - Визначає порядок переходу між елементами з за
                допомогою клавіші Tab.
                <br />
                type – MIME-тип об'єкта.
                <br />
                vspace - Вертикальний відступ від об'єкта до навколишнього
                контенту.
                <br />
                width - Ширина об'єкта.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;param /&gt;</h3>}
            text={
              <p>
                Призначений для передачі значень параметрів Java-апплетам або
                об'єкти веб-сторінки, створені за допомогою тегів &lt;applet&gt;
                або &lt;object&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;picture&gt; &lt;/picture&gt;</h3>}
            text={
              <p>
                Служить контейнером для одного або більше елементів одного
                елемента img для забезпечення оптимальної версії зображення для
                різних розмірів екрану.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;portal&gt; &lt;/portal&gt;</h3>}
            text={
              <p>
                Дозволяє вбудувати іншу HTML-сторінку на поточну, щоб
                забезпечити більш плавну навігацію новими сторінками.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;source /&gt; </h3>}
            text={
              <p>
                Вказує кілька медіа-ресурсів для елементів &lt;picture&gt;,
                &lt;video&gt; і &lt;audio&gt;. Це пустий елемент. Він зазвичай
                використовується для обслуговування одного і того ж
                медіа-контенту в декількох форматах, що підтримуються різними
                браузерами.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}