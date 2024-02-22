import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";
import { funcComponent, classComponent } from "./TsConstPre.tsx";

export default function ComponentsRU() {
  return (
    <>
      <Table id="ts_components">
        <TableBody>
          <TableOneCol text={<h2>Components - Компоненти.</h2>} />
          <TableTwoEqualCol
            title={
              <>
                <p>
                  Function component
                  <pre>
                    <code>{funcComponent}</code>
                  </pre>
                </p>
              </>
            }
            text={
              <>
                <p>
                  Class component
                  <pre>
                    <code>{classComponent}</code>
                  </pre>
                </p>
              </>
            }
          />
          ;
        </TableBody>
      </Table>
    </>
  );
}
