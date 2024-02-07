// let url1 = "https://example.com/data1";
// let url2 = "https://example.com/data2";
// let url3 = "https://example.com/data3";

// function fetchData(url, ms = 2000) {
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//             res(`Данные с ${url}`)
//         }, ms)
//     })
// }

// fetchData(url1, 2000)
//     .then(res => {
//         console.log(res);
//         return fetchData(url2, 3000)
//     })
//     .then(res => {
//         console.log(res)
//         return fetchData(url3, 4000)
//     })
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => console.log(err))


// Promise.all([
//     fetchData(url1, 2000), 
//     fetchData(url2, 3000), 
//     fetchData(url3, 4000)
// ])
//     .then(res => {
//         console.log("Результат запросов:", res)
//     })
//     .catch(err => console.log(err))


// Promise.race([
//     fetchData(url1, 2000), 
//     fetchData(url2, 3000), 
//     fetchData(url3, 4000)
// ])
//     .then(res => {
//         console.log("Результат запросов:", res)
//     })
//     .catch(err => console.log(err))


// Fetch - это API веб-браузера, предоставляющее простой и гибкий способ выполнения HTTP-запросов к серверу.
// Он предоставляет возможность отправлять запросы и получать ответы в формате JSON, текста, массива байтов и других типов данных.

// Существуют четыре основных типа HTTP-запросов:
// 1. GET: Используется для получения данных с сервера
// 2. POST: Используется для отправки данных на сервер для их обработки
// 3. PUT: Используется для обновления существующих данных на сервере.
// 4. DELETE: Используется для удаления данных на сервере



// let TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(response => {
//     // return response.text();
//     return response.json();
//     })
//     .then(data => console.log(data))

// https://learn.javascript.ru/promise-api
// Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/todos"), 
//     fetch("https://jsonplaceholder.typicode.com/posts")
// ])
//     .then(res => {
//         console.log("Результат запросов:", res)

//         return res.map(item => item.json())
//     })
//     .then(res => {
//         console.log("Готовые данные:", res)
//     })
//     .catch(err => console.log(err))


let todoContainer = document.querySelector(".todo");

let TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// {
//     "userId": 10,
//     "id": 200,
//     "title": "ipsam aperiam voluptates qui",
//     "completed": false
// }

let createTodoElement = (todo) => {
    let todoElementLi = document.createElement("li");
    todoElementLi.classList.add("todo__item");

    todoElementLi.innerText = `${todo.id} - ${todo.title}`;

    return todoElementLi;
}

function toggleLoader() {
    let loading = document.querySelector('.loading')
    let siHidden = loading.hasAttribute('hidden')
    if (isHidden) {
        loading.removeAttribute('hidden')
    } else {
        loading.setAttribute('hidden', "")
    }
}

toggleLoader()


fetch(TODOS_URL)
    .then(res => res.json())
    .then(todos => {
        // console.log("Результат запросов:", todos);

        todos.forEach(todo => {
            // console.log(todo)
            let li = createTodoElement(todo)

            todoContainer.append(li)
        });
    })