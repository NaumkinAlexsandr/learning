import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableOneCol from "../../core/TableOneCol.tsx";
import TableTwoEqualCol from "../../core/TableTwoEqualCol.tsx";

export default function ImportRU() {
  return (
    <>
      <Table id="scss_import">
        <TableBody>
          <TableOneCol text={<h2>Директивы.</h2>} />
          <TableOneCol text={<h3>@import</h3>} />
          <TableOneCol
            text={
              <p>
                Sass расширяет CSS правило1 @import, позволяя импортировать scss
                и sass файлы. Все импортированные scss и sass файлы могут быть
                объединены в одном результирующем css файле. Кроме того, любые
                переменные или миксины, объявленные в импортированном файле,
                могут использоваться в главном файле.
                <br />
                Компилятор ищет другие файлы sass в текущей папке, и в каталоге
                файлов sass при использовании в Rack, Rails или Merb.
                Дополнительные каталоги поиска могут задаваться с помощью опции
                :load_paths или ключ --load-path в командной строке. <br />
                @import использует название файла для импорта. По умолчанию,
                @import ищет Sass-файлы, но есть несколько правил, по которым
                @import отрабатывает как CSS-правило:
                <br />
                Если расширение файла .css <br />
                Если имя файла начинается с http:// <br />
                Если имя файла вызывается через url()
                <br />
                Если правило @import включает в себя любые медиа-запросы <br />
                Если ни одно из вышеперечисленных условий не соблюдено, а
                расширение файлов .scss или .sass, то эти файлы будут
                импортированы. Если расширения файлов не указаны, то Sass
                попытается найти файлы по имени с расширением .scss или .sass и
                импортирует их. Например:
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
