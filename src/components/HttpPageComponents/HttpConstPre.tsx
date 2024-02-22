export const getRequest = `
Запрос
GET /doc.txt HTTP/1.1
Host: site.com  

`;

export const getResponse = `
Ответ
HTTP/1.1 200 OK
Content-Type: text/plain; charset=UTF-8
Title: Заголовок
Text: Текст

`;

export const headRequest = `
Запрос
HEAD /doc.txt HTTP/1.1 
Host: site.com 

`;

export const headResponse = `
Ответ
HTTP/1.1 200 OK 
Content-Type: text/plain; charset=UTF-8

`;

export const postRequest = `
Запрос
POST /doc.txt HTTP/1.1
Host: site.com
Title=Заголовок
Text=Текст

`;

export const postResponse = `
Ответ без файла
HTTP/1.1 201 Created
Location: /doc.txt
Ответ с файлом
HTTP/1.1 200 OK
Content-Type: text/plain; charset=UTF-8
Добавлен контент в пустой файл «doc.txt»

`;

export const putResponse = `
Запрос
PUT /doc.txt HTTP/1.1
Host: site.com
Title=Новый заголовок
Text=Новый текст

`;

export const putRequest = `
Ответ без файла
HTTP/1.1 200 OK
Content-Type: text/plain; charset=UTF-8
Изменен контент в файле «doc.txt»
Ответ с файлом
HTTP/1.1 201 Created
Content-Type: text/plain; charset=UTF-8
Изменен контент в файле «doc.txt»

`;

export const deleteResponse = ` 
Запрос
DELETE /doc.txt HTTP/1.1
Host: site.com

`;

export const deleteRequest = `
Ответ 
HTTP/1.1 200 OK
Content-Type: text/plain; charset=UTF-8
Файл «doc.txt» удален

`;

export const codeLoad = `
xhr.onload = function() {
  alert(\`Загружено: \${xhr.status}
    \${xhr.response}\`);
};`;

export const codeError = `
xhr.onerror = function() {
  alert(\`Ошибка соединения\`);
};`;

export const codePprogress = `
xhr.onprogress = function(event) {
  // количество загруженных байт
  const loaded = event.loaded;
  // количество байт всего
  const total = event.total;    
  alert(\`Загружено \${loaded} 
    из \${total}\`);
};`;

export const methodGet = `
const userURL = 
'https://jsonplaceholder.typicode.com/users';
const xhr = new XMLHttpRequest();
xhr.open('GET', userURL, true);
xhr.responseType = 'json';
xhr.onload = () => {
 console.log(xhr.response);
};
xhr.send();

`;

export const getAllResponseHeadersResponse = ` 
Запрос
let headers = xhr
.getAllResponseHeaders()
.split('\r\n')
.reduce((result, current) => {
  let [name, value] =
current.split(': ');
result[name] = value;
return result;
}, {});

`;

export const getAllResponseHeadersRequest = `
Ответ
Cache-Control: max-age=31536000
Content-Length: 4260
Content-Type: image/png
Date: Sat, 08 Sep 2012 16:53:16 GMT

`;

export const postCode = `
let formData = new FormData([form]);
formData.append(name, value);
let xhr = new XMLHttpRequest();
xhr.open("POST", "/article/xmlhttprequest/post/user");
xhr.send(formData);
xhr.onload = () => alert(xhr.response);

`;

export const postCode2 = `
let response = await fetch('url', {
  method: 'POST',
  headers: {
    'Content-Type':
    'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

`;

//

export const getRequestUa = `
Запит
GET /doc.txt HTTP/1.1
Host: site.com  

`;

export const getResponseUa = `
Відповідь
HTTP/1.1 200 OK
Content-Type: text/plain; charset=UTF-8
Title: Заголовок
Text: Текст

`;

export const headRequestUa = `
Запит
HEAD /doc.txt HTTP/1.1 
Host: site.com 

`;

export const headResponseUa = `
Відповідь
HTTP/1.1 200 OK 
Content-Type: text/plain; charset=UTF-8

`;

export const postRequestUa = `
Запит
POST /doc.txt HTTP/1.1
Host: site.com
Title=Заголовок
Text=Текст

`;

export const postResponseUa = `
Відповідь без файлу
HTTP/1.1 201 Created
Location: /doc.txt
Відповідь із файлом
HTTP/1.1 200 OK
Content-Type: text/plain; charset=UTF-8
Доданий контент у порожній файл «doc.txt»

`;

export const putResponseUa = `
Запит
PUT /doc.txt HTTP/1.1
Host: site.com
Title=Новый заголовок
Text=Новый текст

`;

export const putRequestUa = `
Відповідь без файлу
HTTP/1.1 200 OK
Content-Type: text/plain; charset=UTF-8
Змінено контент у файлі «doc.txt»
Відповідь із файлом
HTTP/1.1 201 Created
Content-Type: text/plain; charset=UTF-8
Змінено контент у файлі «doc.txt»

`;

export const deleteResponseUa = ` 
Запит
DELETE /doc.txt HTTP/1.1
Host: site.com

`;

export const deleteRequestUa = `
Відповідь 
HTTP/1.1 200 OK
Content-Type: text/plain; charset=UTF-8
Файл "doc.txt" видалено

`;

export const codeLoadUa = `
xhr.onload = function() {
  alert(\`Завантажено: \${xhr.status}
    \${xhr.response}\`);
};`;

export const codeErrorUa = `
xhr.onerror = function() {
  alert(\`Помилка з'єднання\`);
};`;

export const codePprogressUa = `
xhr.onprogress = function(event) {
  // кількість завантажених байт
  const loaded = event.loaded;
  // кількість байт всього
  const total = event.total;    
  alert(\`Завантажено \${loaded} 
    из \${total}\`);
};`;

export const getAllResponseHeadersResponseUa = ` 
Запит
let headers = xhr
.getAllResponseHeaders()
.split('\r\n')
.reduce((result, current) => {
  let [name, value] =
current.split(': ');
result[name] = value;
return result;
}, {});

`;

export const getAllResponseHeadersRequestUa = `
Відповідь
Cache-Control: max-age=31536000
Content-Length: 4260
Content-Type: image/png
Date: Sat, 08 Sep 2012 16:53:16 GMT

`;
