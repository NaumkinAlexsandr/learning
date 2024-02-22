import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function FormRU() {
  return (
    <>
      <Table id="html_form">
        <TableBody>
          <TableOneCol text={<h2>Формы.</h2>} />
          <TableOneCol
            text={
              <p>
                HTML содержит некоторое количество элементов, которые
                используются вместе для создания форм, которые пользователь
                может заполнить и отправить на сервер. Доступно множество
                информации по этой теме в руководстве по HTML формам.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;button&gt; &lt;/button&gt;</h3>}
            text={
              <p>
                Создаёт кликабельную кнопку, которая может быть использована в
                формах или в любом другом месте документа, который требует
                простой, стандартной кнопки. По умолчанию, кнопки HTML обычно
                представлены в стиле, аналогичном стилю хост-платформы, на
                которой работает user agent, но вы можете изменить внешний вид
                кнопки, используя CSS. Атрибуты:
                <br /> accesskey - Доступ к элементам формы с помощью горячих
                клавиш.
                <br /> autofocus - Устанавливает, что кнопка получает фокус
                после загрузки страницы.
                <br /> disabled - Блокирует доступ и изменение элемента.
                <br />
                form - Связывает между собой форму и кнопку.
                <br /> formaction - Задаёт адрес, на который пересылаются данные
                формы при нажатии на кнопку.
                <br /> formenctype - Способ кодирования данных формы.
                <br /> formmethod - Указывает метод пересылки данных формы.
                <br /> formnovalidate - Отменяет проверку формы на корректность.
                <br /> formtarget - Открывает результат отправки формы в новом
                окне или фрейме.
                <br /> name - Определяет уникальное имя кнопки.
                <br /> type - Тип кнопки — обычная, для отправки данных формы на
                сервер или для очистки формы.
                <br /> value - Значение кнопки, которое будет отправлено на
                сервер или прочитано с помощью скриптов.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;datalist&gt; &lt;/datalist&gt;</h3>}
            text={
              <p>
                Содержит набор опций (option), доступных для выбора. Выбранное
                значение будет установлено для элемента  &lt;input&gt;, с
                атрибутом list.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;fieldset&gt; &lt;/fieldset&gt;</h3>}
            text={
              <p>
                Используется для группировки нескольких элементов управления без
                веб-форм.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;form&gt; &lt;/form&gt;</h3>}
            text={
              <p>
                Представляет собой раздел документа, содержащий интерактивные
                элементы управления, которые позволяют пользователю отправлять
                информацию на веб-сервер. Атрибуты:
                <br />
                accept-charset - Устанавливает кодировку, в которой сервер может
                принимать и обрабатывать данные. <br />
                action - Адрес программы или документа, который обрабатывает
                данные формы. <br />
                autocomplete - Включает автозаполнение полей формы. <br />
                enctype - Способ кодирования данных формы. <br />
                method - Метод протокола HTTP. name Имя формы.
                <br />
                novalidate - Отменяет встроенную проверку данных формы на
                корректность ввода. <br />
                target - Имя окна или фрейма, куда обработчик будет загружать
                возвращаемый результат.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;input /&gt;</h3>}
            text={
              <p>
                Используется для создания интерактивных элементов управления в
                веб-формах для получения данных от пользователя; в зависимости
                от устройства и user agent, доступен широкий выбор типов входных
                данных и виджетов управления. Из-за огромного количества
                возможных сочетаний типов ввода и атрибутов это один из самых
                мощных и сложных элементов HTML. Атрибуты: <br />
                accept - Устанавливает фильтр на типы файлов, которые вы можете
                отправить через поле загрузки файлов.
                <br />
                accesskey - Переход к элементу с помощью комбинации клавиш.
                <br />
                align - Определяет выравнивание изображения. <br />
                alt - Альтернативный текст для кнопки с изображением. <br />
                autocomplete - Включает или отключает автозаполнение. <br />
                autofocus - Устанавливает фокус в поле формы. <br />
                border - Толщина рамки вокруг изображения. <br />
                checked - Предварительно активированный переключатель или
                флажок. <br />
                disabled - Блокирует доступ и изменение элемента. <br />
                form - Связывает поле с формой по её идентификатору. <br />
                formaction - Определяет адрес обработчика формы. <br />
                formenctype - Устанавливает способ кодирования данных формы при
                их отправке на сервер. <br />
                formmethod - Сообщает браузеру каким методом следует передавать
                данные формы на сервер.
                <br />
                formnovalidate - Отменяет встроенную проверку данных на
                корректность. <br />
                formtarget - Определяет окно или фрейм в которое будет
                загружаться результат, возвращаемый обработчиком формы.
                <br />
                list - Указывает на список вариантов, которые можно выбирать при
                вводе текста. <br />
                max - Верхнее значение для ввода числа или даты. <br />
                maxlength - Максимальное количество символов разрешенных в
                тексте. <br />
                min - Нижнее значение для ввода числа или даты.
                <br />
                multiple - Позволяет загрузить несколько файлов одновременно.
                <br />
                name - Имя поля, предназначено для того, чтобы обработчик формы
                мог его идентифицировать. <br />
                pattern - Устанавливает шаблон ввода. <br />
                placeholder - Выводит подсказывающий текст.
                <br />
                readonly - Устанавливает, что поле не может изменяться
                пользователем. <br />
                required - Обязательное для заполнения поле.
                <br />
                size - Ширина текстового поля. <br />
                src - Адрес графического файла для поля с изображением.
                <br />
                step - Шаг приращения для числовых полей. <br />
                tabindex - Определяет порядок перехода между элементами с
                помощью клавиши Tab. <br />
                type - Сообщает браузеру, к какому типу относится элемент формы.{" "}
                <br />
                value - Значение элемента.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;label&gt; &lt;/label&gt;</h3>}
            text={
              <p>
                Представляет собой подпись к элементу пользовательского
                интерфейса. Атрибуты:
                <br />
                accesskey - Доступ к элементам формы с помощью горячих клавиш.
                <br />
                for - Идентификатор элемента, с которым следует установить
                связь.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;legend&gt; &lt;/legend&gt;</h3>}
            text={
              <p>
                Представляет собой заголовок содержания родительского
                элемента fieldset. Атрибуты: <br />
                accesskey - Переход к группе элементов формы с помощью
                комбинации клавиш. <br />
                align - Определяет выравнивание текста. <br />
                title - Добавляет всплывающую подсказку к тексту заголовка.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;meter&gt; &lt;/meter&gt;</h3>}
            text={
              <p>
                Представляет собой скалярное значение в пределах известного
                диапазона или дробного значения. Атрибуты: <br />
                value - Устанавливает значение. Обязательный атрибут. <br />
                min - Задает минимально возможное значение. <br />
                max - Задает максимально возможное значение. <br />
                low - Определяет предел, при достижении которого значение
                считается низким. <br />
                high - Определяет предел, при достижении которого значение
                считается высоким. <br />
                optimum - Определяет наилучшее или оптимальное значение.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;optgroup&gt; &lt;/optgroup&gt;</h3>}
            text={
              <p>
                Позволяет группировать опции, находящиеся внутри элемента 
                &lt;select&gt;.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;option&gt; &lt;/option&gt;</h3>}
            text={
              <p>
                Используется для определения пункта списка контейнера select,
                элемента optgroup, или элемента datalist. Элемент &lt;option&gt;
                может представлять раздел меню всплывающих окон и других
                перечней или списков HTML документа. Атрибуты: <br />
                disabled - Заблокировать для доступа элемент списка. <br />
                label - Указание метки пункта списка. <br />
                selected - Заранее устанавливает определенный пункт списка
                выделенным. <br />
                value - Значение пункта списка, которое будет отправлено на
                сервер или прочитано с помощью скриптов.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;output&gt; &lt;/output&gt;</h3>}
            text={
              <p>
                Является контейнерным элементом, в котором сайт или приложение
                могут выводить результаты вычислений или действий пользователя.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;progress&gt; &lt;/progress&gt;</h3>}
            text={
              <p>
                Отображает индикатор, показывающий ход выполнения задачи, обычно
                отображаемый в виде прогресс бара (индикатора выполнения).
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;select&gt; &lt;/select&gt;</h3>}
            text={
              <p>
                Представляет собой элемент управления который содержит меню
                опций. Атрибуты:
                <br />
                accesskey - Позволяет перейти к списку с помощью некоторого
                сочетания клавиш. <br />
                autofocus - Устанавливает, что список получает фокус после
                загрузки страницы. <br />
                disabled - Блокирует доступ и изменение элемента. <br />
                form - Связывает список с формой.
                <br />
                multiple - Позволяет одновременно выбирать сразу несколько
                элементов списка.
                <br />
                name - Имя элемента для отправки на сервер или обращения через
                скрипты. required Список обязателен для выбора перед отправкой
                формы. <br />
                size - Количество отображаемых строк списка.
                <br />
                tabindex - Определяет последовательность перехода между
                элементами при нажатии на клавишу.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;textarea&gt; &lt;/textarea&gt;</h3>}
            text={
              <p>
                Представляет собой элемент формы для создания области, в которую
                можно вводить несколько строк текста. Атрибуты:
                <br />
                accesskey - Переход к полю с помощью сочетания клавиш.
                <br />
                autofocus - Автоматическое получение фокуса. <br />
                cols - Ширина поля в символах. <br />
                disabled - Блокирует доступ и изменение элемента.
                <br />
                form - Связывает текстовое поле с формой по её идентификатору.
                <br />
                maxlength - Максимальное число введенных символов. <br />
                name - Имя поля, предназначено для того, чтобы обработчик формы
                мог его идентифицировать. <br />
                placeholder - Указывает замещающийся текст.
                <br />
                readonly - Устанавливает, что поле не может изменяться
                пользователем. <br />
                required - Обязательное для заполнения поле.
                <br />
                rows - Высота поля в строках текста. <br />
                tabindex - Порядок перехода между элементами при нажатии на
                клавишу Tab. <br />
                wrap - Параметры переноса строк.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}