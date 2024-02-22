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
  firstProps,
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

export default function ExamplesUA() {
  return (
    <>
      <Table id="react_title">
        <TableBody>
          <TableOneCol text={<h1>Робота з React.</h1>} />
        </TableBody>
      </Table>
      <Table id="react_examples">
        <TableBody>
          <TableOneCol text={<h2>Приклади використання.</h2>} />
          <TableOneCol
            text={
              <p>
                Заміна імені на повне ім'я. <br />
                У цьому компоненті у вас є стан name, який спочатку встановлено
                як "Alex".
                <br />
                У конструкторі компонента ви також прив'язуєте метод handleClick
                до поточного контексту, щоб він міг бути викликаний правильно в
                обробнику подій.
                <br />
                Метод handleClick оновлює стан name на "Alexander" при виклик.
                <br />
                У методі render компонента ви відображаєте поточне значення name
                у тезі &lt;h4&gt; , а також відображаєте кнопку &lt;Button&gt; ,
                при натисканні на яку викликатиметься метод handleClick .
                <br /> <Name />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
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
                Лічильник. <br />
                У коді нижче є стан count, яке спочатку встановлено 0.
                <br />
                У конструкторі компонента ви прив'язуєте методи increment ,
                decrement та rest до поточного контексту, щоб вони могли бути
                викликані правильно в обробниках подій.
                <br />
                Метод increment збільшує значення стану count на 1 під час
                виклику.
                <br />
                Метод decrement зменшує значення стану count на 1 під час
                виклику.
                <br />
                Метод rest скидає значення стану count на 0 під час виклику.
                <br />
                У методі render компонента ви відображаєте поточне значення
                count у тезі &lt;h1&gt; , а також відображає три кнопки
                &lt;Button&gt; які викликають відповідні методи при натисканні.
                <CounterFunction />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код class"}
            title={
              <>
                <pre>
                  <code>{counterClass}</code>
                </pre>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код function"}
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
                У коді нижче є стани input , inputBtn і submit , які встановлені
                в порожній рядок.
                <br />
                У конструкторі компонента ви прив'язуєте методи handleChange ,
                handleChangeBtn та handleSubmit до поточного контексту, щоб вони
                могли бути викликані правильно в обробниках подій.
                <br />
                Метод handleChangeBtn оновлює стан inputBtn значення, введене
                користувачем у полі введення.
                <br />
                Метод handleChange оновлює стан input на значення, введене
                користувачем у полі введення.
                <br />
                Метод handleSubmit викликається при надсиланні форми та
                запобігає перезавантаженню сторінки. Він встановлює стан submit
                рівним значенню inputBtn.
                <br />
                У методі render компонента ви відображаєте дві форми
                &lt;Form&gt;. Перша форма має поле введення, і значення input
                відображається у тезі &lt;h3&gt; . Друга форма також має
                <br />
                <TextInputClass />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код class"}
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
                Знайомство з props.
                <br />
                У цьому компоненті ви використовуєте хук useState для керування
                станом name, яке спочатку встановлено в порожню рядок.
                <br />
                У компоненті у вас є пропс names, який ви використовуєте для
                відображення привітання з переданим ім'ям.
                <br />
                Метод handleName викликається при натисканні на кнопку та
                відображає спливаюче вікно prompt , в якому користувач може
                ввести своє ім'я. Потім введене ім'я встановлюється стан name за
                допомогою функції setName.
                <br />
                У методі render компонента ви відображаєте два блоки з
                привітаннями. Перший блок використовує пропс names для
                відображення привітання з переданим ім'ям. Другий блок
                відображає привітання з ім'ям, отриманим з prompt , після
                натискання кнопки.
                <br />
                <FirstProps
                  enterName="Введіть ваше ім'я"
                  names="Олександр"
                  titleOne="Виведення імені шляхом передачі через props"
                  hello="Привіт"
                  titleTwo="Виведення імені отриманого з prompt"
                  btn="Натисни"
                />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
            title={
              <>
                <pre>
                  <code>{firstProps}</code>
                </pre>
              </>
            }
          />
          <TableOneCol
            text={
              <>
                <p>
                  <b>Рендер-пропс</b>— функція, яка повідомляє компоненту, що
                  необхідно рендер.
                  <br />
                  У цьому компоненті ви використовуєте хуки useState і useEffect
                  для управління станом та виконання запиту до API.
                  <br />
                  У компоненті DataProvider ви використовуєте хук useEffect, щоб
                  виконати запит до API під час монтування компонента. Результат
                  запиту зберігається у стані data за допомогою функції setData.
                  Потім ви передаєте data як аргумент для функції props.render.
                  <br />
                  Компоненти PostListForUser та PostListForAdmin відображають
                  список постів залежно від переданих їм властивостей posts.
                  Якщо posts не порожній масив, то компоненти маппят кожен пост
                  і виводять його заголовок та вміст. Для компонента
                  PostListForAdmin також додані кнопки "Edit" та "Delete".
                  <br />
                  У компоненті Blog ви використовуєте хук useState для керування
                  станом admin, яке спочатку встановлено значення false. Функція
                  toggle змінює значення admin під час виклику.
                  <br />
                  Функція render приймає дані та повертає або компонент
                  PostListForAdmin, або PostListForUser, залежно від значення
                  admin.
                  <br />У методі render компонента Blog ви викликаєте компонент
                  DataProvider, передаючи йому функцію render як властивості
                  render. Потім відображаєте кнопку, яка при Натискання викликає
                  функцію toggle і змінює значення admin.
                </p>
                <RenderProps />
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
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
                Життєвий цикл. <br />
                У цьому компоненті ви використовуєте хуки useState і useEffect
                для управління станом та оновлення часу.
                <br />
                У стані dateNow ви зберігаєте поточний час, який спочатку
                встановлюється за допомогою функції getTime().
                <br />
                У хуку useEffect ви встановлюєте інтервал, який викликає функцію
                setDate() кожну секунду. Це оновлює стан dateNow з новим
                значенням часу.
                <br />
                Функція getTime() створює новий об'єкт Date і повертає його в
                форматі date. Тут date – це об'єкт Date, що представляє поточний
                час.
                <br />
                У методі render компонента ви відображаєте заголовок "Time now!"
                та поточний час у форматі toLocaleTimeString().
                <br />
                <ClockFunction />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код class"}
            title={
              <>
                <pre>
                  <code>{clockClass}</code>
                </pre>
              </>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код function"}
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
                Підйом стану. <br /> Функції toCelsius і toFahrenheit приймають
                значення температури та виконують відповідні перетворення для
                перекладу значення з однієї шкали до іншої.
                <br />
                Функція tryConvert приймає значення температури та функцію
                перетворення, і намагається перетворити значення на іншу шкалу.
                Якщо вхідне значення неправильне, функція повертає порожню
                рядок.
                <br />
                Компонент BoilingVerdict відображає повідомлення про те, чи буде
                вода закипати при заданій температурі (якщо температура вища або
                дорівнює 100 градусів Цельсія).
                <br />
                Компонент TemperatureInput представляє поле введення для
                введення температури. Він приймає значення температури та шкалу,
                а також функцію зворотного виклику onTemperatureChange , яка
                викликається за зміни значення температури.
                <br />
                Компонент TemperatureClass є основним компонентом, який містить
                два екземпляри TemperatureInput для введення температури в
                шкалах Цельсія та Фаренгейта. Він також відображає компонент
                BoilingVerdict для виведення результату кипіння води.
                <br />
                При зміні значення температури в одному з TemperatureInput ,
                відповідна функція зворотного виклику викликається, та стан
                TemperatureClass оновлюється.
                <br />
                <TemperatureClass />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код class"}
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
                <b>ref</b> – це атрибут, який дозволяє отримати посилання на
                DOM-елемент або екземпляр компонента React. Він використовується
                для доступу до елементів DOM або виклику методів компонента
                ззовні. Щоб створити ref у React, ви можете використовувати
                функцію React.createRef() або створити колбек-функцію з
                використанням ref. <br /> <Ref />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
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
                <b>Key</b> - унікальний ключ об'єкта. Найчастіше
                використовується для тегів <i>li, td</i>. React щоразу порівнює
                зміни віртуального DOM дерево і DOM Дерево браузера. Після
                порівняння замінює лише ті дані які змінилися. Тому використання
                Key необхідне для прискорення роботи програми.
                <br /> У цьому прикладі у вас є масив "people", що містить імена
                людей.
                <br />
                У методі render компонента ви використовуєте метод map для
                ітерації за масивом "people" та створення елементів списку
                &lt;li&gt; для кожного імені. Кожному елементу списку ви також
                надаєте атрибут key зі значенням index , щоб забезпечити
                унікальність ключів.
                <br />
                Потім ви відображаєте список &lt;ul&gt;, який містить створені
                елементи списку &lt;li&gt;.
                <br /> <Key />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
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
                У цьому компоненті у вас є стан, який містить значення полів
                введення, текстової області та обраної позиції, а також об'єкт
                "showData", який містить дані, які будуть відображатиметься
                після натискання кнопки "Show".
                <br />
                Методи handleInputChange , handleTextareaChange та
                handleSelectChange оновлюють відповідні значення в стан при
                зміні відповідних полів уведення.
                <br />
                Метод handleShow викликається при натисканні кнопки "Show". Він
                оновлює стан, скидає значення полів уведення та встановлює
                значення об'єкт "showData" на основі введених даних.
                <br />
                У методі render компонента ви відображаєте форму з полями
                введення, текстовою областю і списком, що випадає. Значення
                полів введення та обраної позиції пов'язані зі станом
                компонента. При натисканні кнопки "Show" відображаються дані
                об'єкта "showData".
                <br />
                <br /> <Form />
              </p>
            }
          />
          <ButtonExampleTwoCol
            titleButtonExample={"Переглянути код"}
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
