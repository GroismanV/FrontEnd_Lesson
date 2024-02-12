// JavaScript код
let btn = document.querySelector(".btn-add");
let todoList = document.querySelector(".todo__list");
let totalCheckedSpan = document.getElementById("totalChecked");

let todos = [
    {
        id: 1,
        label: "Задача 1",
        checked: false
    },
    {
        id: 2,
        label: "Задача 2",
        checked: false
    },
    {
        id: 3,
        label: "Задача 3",
        checked: false
    },
];

// Функция для отображения списка задач
function createTodoItem(data = todos) {
    // Очищаем содержимое списка перед обновлением
    todoList.innerHTML = "";

    // Проходим по массиву задач и создаем элементы для каждой задачи
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

        // Добавляем обработчик события для изменения состояния задачи при изменении чекбокса
        checkboxElement.addEventListener("change", () => toggleTodoCheck(todo.id));
        buttonElement.addEventListener("click", () => removeTodoItem(todo.id));

        // Добавляем элементы внутрь li
        liElement.appendChild(checkboxElement);
        liElement.appendChild(labelElement);
        liElement.appendChild(buttonElement);

        // Добавляем li в список
        todoList.appendChild(liElement);
    });

    // Обновляем общее количество отмеченных задач
    updateTotalChecked();
}

// Функция для переключения состояния задачи (отмечена/не отмечена)
function toggleTodoCheck(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.checked = !todo.checked;
        }
        return todo;
    });

    // Обновляем отображение списка
    createTodoItem();
}

// Функция для добавления новой задачи
function createNewTodo() {
    // Получаем значение из поля ввода
    let label = document.querySelector(".todo__label").value;

    // Добавляем новую задачу в массив
    todos.push({ id: Date.now(), label, checked: false });

    // Обновляем отображение списка
    createTodoItem();

    // Очищаем поле ввода
    document.querySelector(".todo__label").value = "";
}

// Функция для обновления общего количества отмеченных задач
function updateTotalChecked() {
    let checkedCount = todos.filter(todo => todo.checked).length;
    totalCheckedSpan.innerText = checkedCount;
}

// Добавляем обработчик события для кнопки "ADD TODO"
btn.addEventListener("click", createNewTodo);

// Инициализируем отображение списка задач
createTodoItem();
