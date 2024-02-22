import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import {
  nameExamples,
  counterClass,
  counterFunction,
  textInput,
  firstPropsRU,
  renderProps,
  clockFunction,
  clockClass,
  temperatureClass,
  refExamples,
  keyExamples,
  formExamples,
} from "./ExamplesConstPre.ts";
import Name from "./Name.jsx";
import CounterFunction from "./CounterFunction.jsx";
import TextInputClass from "./TextInputClass.jsx";
import FirstProps from "./FirstProps.jsx";
import RenderProps from "./RenderProps.jsx";
import ClockFunction from "./ClockFunction.jsx";
import TemperatureClass from "./TemperatureClass.jsx";
import Ref from "./Ref.jsx";
import Key from "./Key.jsx";
import Form from "./Form.jsx";

export default function ExamplesRU() {
  return (
    <>
      <Table id="react_title">
        <TableBody>
          <TableOneCol text={<h1>Работа с React.</h1>} />
        </TableBody>
      </Table>
      <Table id="react_examples">
        <TableBody>
          <TableOneCol text={<h2>Примеры использования.</h2>} />
          <TableOneCol
            text={
              <p>
                Замена имени на полное имя. <br />
                В этом компоненте у вас есть состояние name , которое изначально
                установлено как "Alex".
                <br />
                В конструкторе компонента вы также привязываете метод
                handleClick к текущему контексту, чтобы он мог быть вызван
                правильно в обработчике событий.
                <br />
                Метод handleClick обновляет состояние name на "Alexander" при
                вызове.
                <br />
                В методе render компонента вы отображаете текущее значение name
                в теге &lt;h4&gt; , а также отображаете кнопку &lt;Button&gt; ,
                при нажатии на которую будет вызываться метод handleClick .
                <br />
                <Name />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{nameExamples}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                Счетчик. <br />
                В коде ниже есть состояние count , которое изначально
                установлено в 0.
                <br />
                В конструкторе компонента вы привязываете методы increment ,
                decrement и rest к текущему контексту, чтобы они могли быть
                вызваны правильно в обработчиках событий.
                <br />
                Метод increment увеличивает значение состояния count на 1 при
                вызове.
                <br />
                Метод decrement уменьшает значение состояния count на 1 при
                вызове.
                <br />
                Метод rest сбрасывает значение состояния count на 0 при вызове.
                <br />
                В методе render компонента вы отображаете текущее значение count
                в теге &lt;h1&gt; , а также отображаете три кнопки
                &lt;Button&gt; , которые вызывают соответствующие методы при
                нажатии.
                <br /> <CounterFunction />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код class"}
            title={
              <>
                <pre>
                  <code>{counterClass}</code>
                </pre>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код function"}
            title={
              <>
                <pre>
                  <code>{counterFunction}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                В коде ниже есть состояния input , inputBtn и submit , которые
                изначально установлены в пустую строку.
                <br />
                В конструкторе компонента вы привязываете методы handleChange ,
                handleChangeBtn и handleSubmit к текущему контексту, чтобы они
                могли быть вызваны правильно в обработчиках событий.
                <br />
                Метод handleChangeBtn обновляет состояние inputBtn на значение,
                введенное пользователем в поле ввода.
                <br />
                Метод handleChange обновляет состояние input на значение,
                введенное пользователем в поле ввода.
                <br />
                Метод handleSubmit вызывается при отправке формы и предотвращает
                перезагрузку страницы. Он устанавливает состояние submit равным
                значению inputBtn .
                <br />
                В методе render компонента вы отображаете две формы
                &lt;Form&gt;. Первая форма имеет поле ввода, и значение input
                отображается в теге &lt;h3&gt; . Вторая форма также име
                <br /> <TextInputClass />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код class"}
            title={
              <>
                <pre>
                  <code>{textInput}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                Знакомство с props.
                <br />
                В этом компоненте вы используете хук useState для управления
                состоянием name , которое изначально установлено в пустую
                строку.
                <br />
                В компоненте у вас есть пропс names , который вы используете для
                отображения приветствия с переданным именем.
                <br />
                Метод handleName вызывается при нажатии на кнопку и отображает
                всплывающее окно prompt , в котором пользователь может ввести
                свое имя. Затем введенное имя устанавливается в состояние name
                при помощи функции setName .
                <br />
                В методе render компонента вы отображаете два блока с
                приветствиями. Первый блок использует пропс names для
                отображения приветствия с переданным именем. Второй блок
                отображает приветствие с именем, полученным из prompt , после
                нажатия на кнопку.
                <br />
                <FirstProps
                  enterName="Введите ваше имя"
                  names="Александр"
                  titleOne="Вывод имени путем передачи через props"
                  hello="Привет"
                  titleTwo="Вывод имени полученного из prompt"
                  btn="Нажмите"
                />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{firstPropsRU}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <>
                <p>
                  <b>Рендер-пропс</b>— функция, сообщающая компоненту, что
                  необходимо рендер.
                  <br />
                  В этом компоненте вы используете хуки useState и useEffect для
                  управления состоянием и выполнения запроса к API.
                  <br />
                  В компоненте DataProvider вы используете хук useEffect , чтобы
                  выполнить запрос к API при монтировании компонента. Результат
                  запроса сохраняется в состоянии data с помощью функции
                  setData. Затем вы передаете data в качестве аргумента для
                  функции props.render.
                  <br />
                  Компоненты PostListForUser и PostListForAdmin отображают
                  список постов в зависимости от переданных им свойств posts.
                  Если posts не пустой массив, то компоненты маппят каждый пост
                  и выводят его заголовок и содержимое. Для компонента
                  PostListForAdmin также добавлены кнопки "Edit" и "Delete".
                  <br />
                  В компоненте Blog вы используете хук useState для управления
                  состоянием admin, которое изначально установлено в значение
                  false. Функция toggle изменяет значение admin при вызове.
                  <br />
                  Функция render принимает данные и возвращает либо компонент
                  PostListForAdmin, либо PostListForUser, в зависимости от
                  значения admin.
                  <br />В методе render компонента Blog вы вызываете компонент
                  DataProvider, передавая ему функцию render в качестве свойства
                  render. Затем отображаете кнопку, которая при нажатии вызывает
                  функцию toggle и изменяет значение admin.
                </p>
                <RenderProps />
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{renderProps}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                Жизненный цикл. <br />
                В этом компоненте вы используете хуки useState и useEffect для
                управления состоянием и обновления времени.
                <br />
                В состоянии dateNow вы храните текущее время, которое изначально
                устанавливается с помощью функции getTime().
                <br />
                В хуке useEffect вы устанавливаете интервал, который вызывает
                функцию setDate() каждую секунду. Это обновляет состояние
                dateNow с новым значением времени.
                <br />
                Функция getTime() создает новый объект Date и возвращает его в
                формате date. Здесь date - это объект Date, представляющий
                текущее время.
                <br />
                В методе render компонента вы отображаете заголовок "Time now!"
                и текущее время в формате toLocaleTimeString().
                <br /> <ClockFunction />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код class"}
            title={
              <>
                <pre>
                  <code>{clockClass}</code>
                </pre>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код function"}
            title={
              <>
                <pre>
                  <code>{clockFunction}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                Подъем состояния. <br />
                Функции toCelsius и toFahrenheit принимают значение температуры
                и выполняют соответствующие преобразования для перевода значения
                из одной шкалы в другую.
                <br />
                Функция tryConvert принимает значение температуры и функцию
                преобразования, и пытается преобразовать значение в другую
                шкалу. Если входное значение неверное, функция возвращает пустую
                строку.
                <br />
                Компонент BoilingVerdict отображает сообщение о том, будет ли
                вода закипать при заданной температуре (если температура выше
                или равна 100 градусам Цельсия).
                <br />
                Компонент TemperatureInput представляет поле ввода для ввода
                температуры. Он принимает значение температуры и шкалу, а также
                функцию обратного вызова onTemperatureChange , которая
                вызывается при изменении значения температуры.
                <br />
                Компонент TemperatureClass является основным компонентом,
                который содержит два экземпляра TemperatureInput для ввода
                температуры в шкалах Цельсия и Фаренгейта. Он также отображает
                компонент BoilingVerdict для вывода результата о кипении воды.
                <br />
                При изменении значения температуры в одном из TemperatureInput ,
                соответствующая функция обратного вызова вызывается, и состояние
                TemperatureClass обновляется.
                <br /> <TemperatureClass />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код code"}
            title={
              <>
                <pre>
                  <code>{temperatureClass}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>ref</b> – представляет собой атрибут, который позволяет
                получить ссылку на DOM-элемент или экземпляр компонента в React.
                Он используется для доступа к элементам DOM или вызова методов
                компонента извне. Чтобы создать ref в React, вы можете
                использовать функцию React.createRef() или создать
                колбэк-функцию с использованием ref. <br /> <Ref />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{refExamples}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                <b>Key</b> – уникальный ключ объекта. Чаще всего используется
                для тегов <i>li, td</i>. React каждый раз сравнивает смены
                виртуального DOM дерево и DOM Дерево браузера. После сравнение
                заменяет только те данные, которые изменились. Поэтому
                использование Key необходимо для ускорения работы программы.
                <br /> В этом примере у вас есть массив "people", содержащий
                имена людей.
                <br />
                В методе render компонента вы используете метод map для итерации
                по массиву "people" и создания элементов списка &lt;li&gt; для
                каждого имени. Каждому элементу списка вы также присваиваете
                атрибут key со значением index , чтобы обеспечить уникальность
                ключей.
                <br />
                Затем вы отображаете список &lt;ul&gt;, содержащий созданные
                элементы списка &lt;li&gt;. <br /> <Key />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{keyExamples}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <p>
                Form <br />
                В этом компоненте у вас есть состояние, которое содержит
                значения полей ввода, текстовой области и выбранной позиции, а
                также объект "showData", который содержит данные, которые будут
                отображаться после нажатия кнопки "Show".
                <br />
                Методы handleInputChange , handleTextareaChange и
                handleSelectChange обновляют соответствующие значения в
                состоянии при изменении соответствующих полей ввода.
                <br />
                Метод handleShow вызывается при нажатии кнопки "Show". Он
                обновляет состояние, сбрасывает значения полей ввода и
                устанавливает значения в объект "showData" на основе введенных
                данных.
                <br />
                В методе render компонента вы отображаете форму с полями ввода,
                текстовой областью и выпадающим списком. Значения полей ввода и
                выбранной позиции связаны с состоянием компонента. При нажатии
                кнопки "Show" отображаются данные из объекта "showData".
                <br />
                <br /> <Form />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Просмотреть код"}
            title={
              <>
                <pre>
                  <code>{formExamples}</code>
                </pre>
              </>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
