import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";

export default function OperatorsUA() {
  return (
    <Table id="js_operators">
      <TableBody>
        <TableOneCol text={<h2>Оператори.</h2>} />
        <TableOneCol text={<h3>Математичні операції.</h3>} />
        <TableTwoEqualCol
          title={<h3>Складання.</h3>}
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
          title={<h3>Віднімання.</h3>}
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
          title={<h3>Умноження.</h3>}
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
          title={<h3>Ділення.</h3>}
          text={
            <p>
              let x = 10; <br />
              let y = 5; <br />
              let z = x/y;
              <br />
              console.log(z); // 2
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>% - залишок від розподілу.</h3>}
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
          title={<h3>** - зводить число у певний ступінь.</h3>}
          text={
            <p>
              const x = 3;
              <br />
              const y = 4;
              <br />
              const z = x**y;
              <br />
              console.log(n); //81
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>Інкремент.</h3>}
          text={
            <p>
              ++ збільшує змінну на одиницю. Існує префіксний інкремент, який
              спочатку збільшує змінну на одиницю, а потім повертає її значення.
              І є постфіксний інкремент, який спочатку повертає значення
              змінної, а потім збільшує його на одиницю.
              <br />
              Префіксний інкремент: <br />
              let x = 10; <br />
              let y = ++x; <br />
              console.log(x); // 11 <br />
              console.log(y); // 11 <br />
              Постфіксний інкремент: <br />
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
              Зменшує значення змінної на одиницю. Також є префіксний та
              постфіксний декремент.
              <br />
              Префіксний інкремент: <br />
              let x = 10; <br />
              let y = -x; <br />
              console.log(x); // 9 <br />
              console.log(y); // 9 <br />
              Постфіксний інкремент: <br />
              let x = 10; <br />
              let y = x--; <br />
              console.log(x); // 9 <br />
              console.log(y); // 10
            </p>
          }
        />
        <TableOneCol text={<h3>Оператори порівняння.</h3>} />
        <TableTwoEqualCol
          title={<h3>==</h3>}
          text={
            <p>
              Оператор рівності порівнює два значення, і якщо вони рівні,
              повертає true, інакше повертає false: x == 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>===</h3>}
          text={
            <p>
              Оператор тотожності також порівнює два значення і їх тип, і якщо
              вони рівні, повертає true, інакше повертає false: x === 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>!=</h3>}
          text={
            <p>
              Порівнює два значення, і якщо вони не рівні, повертає true, інакше
              повертає false: x != 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>!==</h3>}
          text={
            <p>
              Порівнює два значення та їх типи, і якщо вони не рівні, повертає
              true, інакше повертає false: x !== 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>&gt;</h3>}
          text={
            <p>
              Порівнює два значення, і якщо перше більше за друге, то повертає
              true, інакше повертає false: x & gt; 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>&lt;</h3>}
          text={
            <p>
              Порівнює два значення, і якщо перше менше другого, то повертає
              true, інакше повертає false: x &lt; 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>&gt;=</h3>}
          text={
            <p>
              Порівнює два значення, і якщо перше більше або дорівнює другому,
              то повертає true, інакше повертає false: x &gt;= 5
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>&lt;=</h3>}
          text={
            <p>
              Порівнює два значення, і якщо перше менше або дорівнює другому, то
              повертає true, інакше повертає false: x &lt;= 5
            </p>
          }
        />
        <TableOneCol text={<h3>Логічні операції.</h3>} />
        <TableTwoEqualCol
          title={<h3>&& - та</h3>}
          text={
            <p>
              Повертає true, якщо обидві операції порівняння повертають true,
              інакше повертає false.
              <br />
              let x = 60; <br />
              let y = 20; <br />
              let result = x &gt; 50 && y &lt; 22; <br />
              console.log(result); //true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>|| - або</h3>}
          text={
            <p>
              Повертає true, якщо хоча б одна операція порівняння повертають
              true, інакше повертає false.
              <br />
              let x = 50; let y = true; <br />
              let result = x &gt; 20 || y == true; <br />
              console.log(result); //true
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>!</h3>}
          text={
            <p>
              Повертає true, якщо операція порівняння повертає false. <br />
              let x = 50; <br />
              let result = !(x &gt; 20);
            </p>
          }
        />
        <TableOneCol text={<h3>Операції присвоєння.</h3>} />
        <TableTwoEqualCol
          title={<h3>=</h3>}
          text={<p>Прирівнює змінній певне значення: let x = 50;</p>}
        />
        <TableTwoEqualCol
          title={<h3>+=</h3>}
          text={
            <p>
              Складання з наступним присвоєнням результату. let x = 50; x + = 5;
              <br />
              console.log(x); // 55
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>-=</h3>}
          text={
            <p>
              Віднімання з наступним присвоєнням результату. let x = 50; x -= 5;
              <br />
              console.log(x); // 45
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>*=</h3>}
          text={
            <p>
              Умноження з наступним присвоєнням результату. <br />
              let x = 50; x * = 2; <br />
              console.log(x); // 100
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>**=</h3>}
          text={
            <p>
              Зведення в ступінь з наступним присвоєнням результату.
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
              Поділ із наступним присвоєнням результату. let x = 50; <br />x /=
              2; <br />
              console.log(x); // 25
            </p>
          }
        />
        <TableTwoEqualCol
          title={<h3>%=</h3>}
          text={
            <p>
              Отримання залишку від поділу з наступним присвоєнням результату.
              <br />
              let x = 50; x %= 3; <br />
              console.log(x); // 2
            </p>
          }
        />
      </TableBody>
    </Table>
  );
}
