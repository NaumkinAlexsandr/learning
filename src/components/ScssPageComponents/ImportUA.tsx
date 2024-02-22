import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";

export default function ImportUA() {
  return (
    <>
      <Table id="scss_import">
        <TableBody>
          <TableOneCol text={<h2>Директиви.</h2>} />
          <TableOneCol text={<h3>@import</h3>} />
          <TableOneCol
            text={
              <p>
                Sass розширює CSS правило1 @import, дозволяючи імпортувати scss
                та sass файли. Усі імпортовані scss та sass файли можуть бути
                об'єднані в одному результуючому css файлі. Крім того, будь-які
                змінні або міксини, оголошені в імпортованому файлі, можуть
                використовуватись у головному файлі.
                <br />
                Компілятор шукає інші sass файли в поточній папці, і в каталозі
                файлів sass при використанні Rack, Rails або Merb. Додаткові
                каталоги пошуку можуть задаватись за допомогою опції :load_paths
                або ключ --load-path у командному рядку. <br />
                @import використовує назву файлу для імпорту. За замовчуванням,
                @import шукає Sass-файли, але є кілька правил, за якими @import
                відпрацьовує як CSS-правило:
                <br />
                Якщо розширення файлу .css <br />
                Якщо ім'я файлу починається з http://
                <br />
                Якщо ім'я файлу викликається через url()
                <br />
                Якщо правило @import включає будь-які медіа-запити <br />
                Якщо жодної з вищезгаданих умов не дотримано, а розширення
                файлів .scss або .sass, то ці файли будуть імпортовані. Якщо
                розширення файлів не вказано, Sass спробує знайти файли на ім'я
                з розширенням .scss або .sass та імпортує їх. Наприклад:
              </p>
            }
          />
          <TableTwoEqualCol
            title={
              <p>
                scss <br />
                <br />
                @import "foo.css"; <br />
                @import "foo" screen; <br />
                @import "http://foo.com/bar"; <br />
                @import url(foo);
              </p>
            }
            text={
              <p>
                css <br />
                <br />
                @import "foo.css"; <br />
                @import "foo" screen; <br />
                @import "http://foo.com/bar"; <br />
                @import url(foo);
              </p>
            }
          />
        </TableBody>
      </Table>
    </>
  );
}
