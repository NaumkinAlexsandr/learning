import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";

export default function OperatorsRU() {
  return (
    <Table id="js_operators">
      <TableBody>
        <TableOneCol text={<h2>Операторы.</h2>} />
        <TableOneCol text={<h3>Математические операции.</h3>} />
        <TableTwoEqualCol
          title={<h3>Сложение.</h3>}
          text={
            <p>
              let x = 20;
              <br />
              let y = x + 20;
              <br />
              console.log(y); // 40
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Вычитание.</h3>}
          text={
            <p>
              let x = 50; <br />
              let y = x - 20;
              <br />
              console.log(y); // 30
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Умножение.</h3>}
          text={
            <p>
              let x = 10; <br />
              let y = 5; <br />
              let z = x * y;
              <br />
              console.log(z); // 50
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Деление.</h3>}
          text={
            <p>
              let x = 10; <br />
              let y = 5; <br />
              let z = x / y;
              <br />
              console.log(z); // 2
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>% - остаток от деления.</h3>}
          text={
            <p>
              let x = 11; <br />
              let y = 5;
              <br />
              let z = x % y;
              <br />
              console.log(z); // 1
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>** - возводит число в определенную степень.</h3>}
          text={
            <p>
              const x = 3;
              <br />
              const y = 4;
              <br />
              const z = x ** y;
              <br />
              console.log(n); //81
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Инкремент.</h3>}
          text={
            <p>
              ++ увеличивает переменную на единицу. Существует префиксный
              инкремент, который сначала увеличивает переменную на единицу, а
              затем возвращает ее значение. И есть постфиксный инкремент,
              который сначала возвращает значение переменной, а затем
              увеличивает его на единицу.
              <br />
              Префиксный инкремент: <br />
              let x = 10; <br />
              let y = ++x; <br />
              console.log(x); // 11 <br />
              console.log(y); // 11 <br />
              Постфиксный инкремент: <br />
              let x = 10; <br />
              let y = x++; <br />
              console.log(x); // 11 <br />
              console.log(y); // 10
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Декремент.</h3>}
          text={
            <p>
              Уменьшает значение переменной на единицу. Также есть префиксный и
              постфиксный декремент.
              <br />
              Префиксный инкремент: <br />
              let x = 10; <br />
              let y = --x; <br />
              console.log(x); // 9 <br />
              console.log(y); // 9 <br />
              Постфиксный инкремент: <br />
              let x = 10; <br />
              let y = x--; <br />
              console.log(x); // 9 <br />
              console.log(y); // 10
            </p>
          }
        />
        <TableOneCol text={<h3>Операторы сравнения.</h3>} />
        <TableTwoEqualCol
          title={<h3>==</h3>}
          text={
            <p>
              Оператор равенства сравнивает два значения, и если они равны,
              возвращает true, иначе возвращает false: x == 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>===</h3>}
          text={
            <p>
              Оператор тождественности также сравнивает два значения и их тип, и
              если они равны, возвращает true, иначе возвращает false: x === 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>!=</h3>}
          text={
            <p>
              Сравнивает два значения, и если они не равны, возвращает true,
              иначе возвращает false: x != 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>!==</h3>}
          text={
            <p>
              Сравнивает два значения и их типы, и если они не равны, возвращает
              true, иначе возвращает false: x !== 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>&gt;</h3>}
          text={
            <p>
              Сравнивает два значения, и если первое больше второго, то
              возвращает true, иначе возвращает false: x &gt; 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>&lt;</h3>}
          text={
            <p>
              Сравнивает два значения, и если первое меньше второго, то
              возвращает true, иначе возвращает false: x &lt; 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>&gt;=</h3>}
          text={
            <p>
              Сравнивает два значения, и если первое больше или равно второму,
              то возвращает true, иначе возвращает false: x &gt;= 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>&lt;=</h3>}
          text={
            <p>
              Сравнивает два значения, и если первое меньше или равно второму,
              то возвращает true, иначе возвращает false: x &lt;= 5
            </p>
          }
        />
        <TableOneCol text={<h3>Логические операции.</h3>} />
        <TableTwoEqualCol
          title={<h3>&& - и</h3>}
          text={
            <p>
              Возвращает true, если обе операции сравнения возвращают true,
              иначе возвращает false.
              <br />
              let x = 60; <br />
              let y = 20; <br />
              let result = x &gt; 50 && y &lt; 22; <br />
              console.log(result); //true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>|| - или</h3>}
          text={
            <p>
              Возвращает true, если хотя бы одна операция сравнения возвращают
              true, иначе возвращает false.
              <br />
              let x = 50; <br />
              let y = true; <br />
              let result = x &gt; 20 || y == true; <br />
              console.log(result); //true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>!</h3>}
          text={
            <p>
              Возвращает true, если операция сравнения возвращает false. <br />
              let x = 50; <br />
              let result = !(x &gt; 20);
            </p>
          }
        />
        <TableOneCol text={<h3>Операции присваивания.</h3>} />
        <TableTwoEqualCol
          title={<h3>=</h3>}
          text={
            <p>Приравнивает переменной определенное значение: let x = 50;</p>
          }
        />
        <TableTwoEqualCol
          title={<h3>+=</h3>}
          text={
            <p>
              Сложение с последующим присвоением результата. <br />
              let x = 50;
              <br />x += 5; <br />
              console.log(x); // 55
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>-=</h3>}
          text={
            <p>
              Вычитание с последующим присвоением результата. <br />
              let x = 50;
              <br />x -= 5; <br />
              console.log(x); // 45
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>*=</h3>}
          text={
            <p>
              Умножение с последующим присвоением результата. <br />
              let x = 50; <br />x *= 2; <br />
              console.log(x); // 100
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>**=</h3>}
          text={
            <p>
              Возведение в степень с последующим присвоением результата.
              <br />
              let x = 10; <br />x **= 2; <br />
              console.log(x); // 100
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>/=</h3>}
          text={
            <p>
              Деление с последующим присвоением результата. let x = 50; <br />x
              /= 2; <br />
              console.log(x); // 25
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>%=</h3>}
          text={
            <p>
              Получение остатка от деления с последующим присвоением результата.
              <br />
              let x = 50; <br />x %= 3; <br />
              console.log(x); // 2
            </p>
          }
        />
      </TableBody>
    </Table>
  );
}
