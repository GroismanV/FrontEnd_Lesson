// let user = {
//     name: "Jon",
//     age: 30,
//     // "email address": "admin@gmail.com"
// }

// console.log(user);
// console.log(user.name);

// user.surname = "Don";
// console.log(user);

// console.log(user["email address"]);
// console.log(user["name"]);

// let x = "email";
// user.x = "test@gmail.com"
// user[x] = "test@gmail.com"

// console.log(user);


// let user = {
//     0: "Jon"
// }

// console.log(user[0]);
// console.log(user["0"]);


// let users = [
//     {
//         id: 1,
//         username: "Jon",
//         surname: "Done",
//         age: 25
//     },
//     {
//         id: 2,
//         username: "James",
//         surname: "Bond",
//         age: 40
//     },
//     {
//         id: 3,
//         username: "Anna",
//         surname: "Bobik",
//         age: 30
//     },
// ];

// users.forEach(item => {
//     console.log("username:", item.username, "surname:", item.surname, "age:", item.age)
// })


// let user = {
//     name: "Jon",
//     surname: "Done",
//     address: {
//         country: "France",
//         street: "House 1"
//     }
// }

// console.log(user.address.country);
// console.log(user.address.street);


// let name = "Jon";
// let surname = "Done";

// let user = {
//     name,
//     surname
// }

// console.log(user);

// function getUserInfo(name, age){
//     return {
//         name,
//         age
//     }
// }

// let user = getUserInfo("Jon", 28);
// console.log(user);

// let user = {
//     name: "Jon",
//     surname: "Done",
//     age: 25
// }

// console.log(user);

// delete user.surname;

// delete user["age"];

// console.log(user);

// let user = {
//     name: "Jon",
//     surname: "Done",
//     age: 30
// }

// let user2 = {
//     age: 25
// }

// let userCopy = user;
// userCopy.name = "Bob";

// console.log(user, userCopy)

// let userCopy = Object.assign({age: 25}, user);
// userCopy.name = "Bob";

// console.log(user, userCopy);


// let user = {
//     user: "Jon",
//     // surname: "Done"
// }

// console.log(user.surname);

// if(user.surname){
//     console.log(user.surname);
// }

// console.log(user?.surname);
// // -----------------------------

// let btn = document.querySelector(".btn-add");
// let todos = [
//     {
//         id: 1,
//         label: "Todo 1"
//     },
//     {
//         id: 2,
//         label: "Todo 2"
//     },
//     {
//         id: 3,
//         label: "Todo 3"
//     },
//     {
//         id: 4,
//         label: "Todo 4"
//     },
// ];

// function createTodoItem(data = todos) {
//     let todoList = document.querySelector(".todo__list");

//     todoList.innerHTML = "";

//     data.forEach((todo) => {
//         let liElement = document.createElement("li");
//         liElement.classList.add("todo__item");
//         liElement.innerText = todo.label;

//         let buttonElement = document.createElement("button");
//         buttonElement.classList.add("todo__remove");
//         buttonElement.innerText = "Remove";

//         buttonElement.addEventListener("click", () => removeTodoItem(todo.id))

//         liElement.append(buttonElement);
//         todoList.append(liElement);
//     })
// };


// function removeTodoItem(id) {
//     todos = todos.filter(todo => todo.id !== id);

//     createTodoItem();
// }

// function createNewTodo() {
//     let label = document.querySelector(".todo__label").value;

//     todos.push({ id: Date.now(), label });

//     createTodoItem();

//     console.log(todos);
//     document.querySelector(".todo__label").value = "";
// }

// btn.addEventListener("click", createNewTodo)
// createTodoItem();
// // --------------------------------------------

let btn = document.querySelector(".btn-add");
let todoList = document.querySelector(".todo__list");
let totalCheckedSpan = document.getElementById("totalChecked");

let todos = [
    {
        id: 1,
        label: "Todo 1",
        checked: false
    },
    {
        id: 2,
        label: "Todo 2",
        checked: false
    },
    {
        id: 3,
        label: "Todo 3",
        checked: false
    },
];

function createTodoItem(data = todos) {
    todoList.innerHTML = "";

    data.forEach((todo) => {
        let liElement = document.createElement("li");
        liElement.classList.add("todo__item");

        let checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.classList.add("todo__checkbox");
        checkboxElement.checked = todo.checked;

        let labelElement = document.createElement("span");
        labelElement.innerText = todo.label;

        let buttonElement = document.createElement("button");
        buttonElement.classList.add("todo__remove");
        buttonElement.innerText = "Remove";

        checkboxElement.addEventListener("change", () => toggleTodoCheck(todo.id));
        buttonElement.addEventListener("click", () => removeTodoItem(todo.id));

        liElement.appendChild(checkboxElement);
        liElement.appendChild(labelElement);
        liElement.appendChild(buttonElement);

        todoList.appendChild(liElement);
    });

    updateTotalChecked();
}

function toggleTodoCheck(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.checked = !todo.checked;
        }
        return todo;
    });

    createTodoItem();
}

function removeTodoItem(id) {
    todos = todos.filter(todo => todo.id !== id);

    createTodoItem();
}

function createNewTodo() {
    let label = document.querySelector(".todo__label").value;

    todos.push({ id: Date.now(), label, checked: false });

    createTodoItem();

    document.querySelector(".todo__label").value = "";
}

function updateTotalChecked() {
    let checkedCount = todos.filter(todo => todo.checked).length;
    totalCheckedSpan.innerText = checkedCount;
}

btn.addEventListener("click", createNewTodo);
createTodoItem();
