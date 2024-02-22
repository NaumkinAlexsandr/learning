import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoCol from "../../core/TableTwoCol.tsx";

export default function EditsRU() {
  return (
    <>
      <Table id="html_edits">
        <TableBody>
          <TableOneCol text={<h2>Разграничительные правки.</h2>} />
          <TableOneCol
            text={
              <p>
                Эти элементы позволяют вам отметить определённые части текста.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;del&gt; &lt;/del&gt;</h3>}
            text={
              <p>
                Представляет диапазон текста, который был удалён из документа.
              </p>
            }
          />
          <TableTwoCol
            title={<h3>&lt;ins&gt; &lt;/ins&gt;</h3>}
            text={
              <p>
                Представляет собой диапазон текста, который был добавлен в
                документ.
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
