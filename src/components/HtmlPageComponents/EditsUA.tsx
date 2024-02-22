import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function EditsUA() {
  return (
    <>
      <Table id="html_edits">
        <TableBody>
          <TableOneCol text={<h2>Розмежувальні виправлення.</h2>} />
          <TableOneCol
            text={
              <p>
                Эти элементы позволяют вам отметить определённые части текста.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;del&gt; &lt;/del&gt;</h3>}
            text={<p>Представляє діапазон тексту, видаленого з документа.</p>}
          />
          <TableTwoCol
            title={<h3>&lt;ins&gt; &lt;/ins&gt;</h3>}
            text={
              <p>Являє собою діапазон тексту, який був доданий до документа.</p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
