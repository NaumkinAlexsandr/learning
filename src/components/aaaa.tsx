import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import ButtonExampleTwoCol from "../../core/ButtonExampleTwoCol.tsx";
import ButtonExample from "../../core/ButtonExample.tsx";
import ButtonExampleWithBtn from "../../core/ButtonExampleWithBtn.tsx";
import {} from "./JsConstPre.tsx";
// import {} from "./JSFunc.js";

export default function ImportRU() {
  return (
    <>
      <Table>
        <TableBody></TableBody>
      </Table>
    </>
  );
}

/* 
&lt; &gt;
<pre><code>{}</code></pre>
<Table><TableBody></TableBody></Table>
<TableOneCol text={<p></p>} />
<TableOneCol text={<h3></h3>} />
<TableTwoCol title={<h3></h3>} text={<p></p>} />
<TableTwoEqualCol title={<p></p>} text={<p></p>} />
<TableTwoEqualCol title={<h3></h3>} text={<p></p>} />
<TableTwoEqualCol title={<h3></h3>} text={<p><br/><br/>Выводит:</p>} />        

<ButtonExampleTwoCol
  titleButtonExample={"Приклад"}
  title={
    <>
      <pre>
        <code>{}</code>
      </pre>
      <p id="formated-text"></p>
    </>
  }
/>

<ButtonExample
                titleButtonExample={"Приклад"}
                title={<p id="formated-text"></p>}
                text={
                  <pre>
                    <code>{}</code>
                  </pre>
                }
              />

<ButtonExampleWithBtn
            titleButtonExample={"Пример"}
            title={<p id="formated-text"></p>}
            text={
              <pre>
                <code>{}</code>
              </pre>
            }
            onClick={}
          />
*/
