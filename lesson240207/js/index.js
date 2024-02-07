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

let todosData = [];

let createTodoElement = (todo) => {
    let todoElementLi = document.createElement("li");
    todoElementLi.classList.add("todo__item");

    todoElementLi.innerText = `${todo.id} - ${todo.title}`;

    let todoElementButton = document.createElement("button");
    todoElementButton.classList.add("btn-delete");
    todoElementButton.addEventListener("click", () => deleteTodo(todo.id))
    todoElementButton.innerText = "Delete";

    todoElementLi.append(todoElementButton)

    return todoElementLi;
}

function deleteTodo(id) {
    console.log(id)
}

function toggleLoader() {
    let loading = document.querySelector(".loading");
    let isHidden = loading.hasAttribute("hidden");

    // if(isHidden){
    //     loading.removeAttribute("hidden");
    // }else {
    //     loading.setAttribute("hidden", "");
    // }

    if (loading.classList.contains("loader-active")) {
        loading.classList.remove("loader-active")
    } else {
        loading.classList.add("loader-active")
    }

    // isHidden ? loading.removeAttribute("hidden") : loading.setAttribute("hidden")
}

// toggleLoader();
// toggleLoader();

// function getTodos() {
//     toggleLoader();

//     fetch(TODOS_URL)
//         .then(res => res.json())
//         .then(todos => {
//             // console.log("Результат запросов:", todos);

//             todos.forEach(todo => {
//                 // console.log(todo)
//                 let li = createTodoElement(todo)

//                 todoContainer.append(li)
//             });
//         })
//         .catch(err=> console.log(err))
//         .finally(() => toggleLoader())
// }

// getTodos();

async function getTodosAsync() {
    toggleLoader();

    try {
        let res = await fetch(TODOS_URL);
        console.log(res)
        let todos = await res.json();


        // todos.slice(0, 20).forEach(todo => {
        //     // console.log(todo)
        //     let li = createTodoElement(todo)

        //     todoContainer.append(li)
        // });

        todosData = todos.slice(0, 20);

        createTodo();
    } catch (error) {
        console.log(error)
    } finally {
        toggleLoader()
    }
}

function createTodo() {
    todosData.forEach(todo => {
        let li = createTodoElement(todo)

        todoContainer.append(li)
    });
}

// getTodosAsync()


let users = [
    {
        id: 1,
        name: "John",
        surname: "Done"
    },
    {
        id: 2,
        name: "Bob",
        surname: "Bobik"
    },
    {
        id: 3,
        name: "Anna",
        surname: "Hello"
    }
];

let content = document.querySelector(".users");

function createUsers() {
    content.innerHTML = "";

    users.forEach(item => {
        // {
        //     id: 1,
        //     name: "John",
        //     surname: "Done"
        // }

        let li = document.createElement("li");
        li.innerText = `${item.id} - ${item.name}`

        let btn = document.createElement("button");
        btn.innerText = "Удалить";

        btn.addEventListener("click", () => deleteUser(item.id))

        li.append(btn)

        content.append(li)
    })
}

function deleteUser(userId) {
    // console.log("user", userId)
    users = users.filter(item => item.id !== userId); // 1 !== 2, 2 !== 2, 3 !== 2

    createUsers()
}

createUsers()