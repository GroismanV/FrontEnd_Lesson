// array methods
const numbers = [6, 10, 11, 9, 12, 25, 30];

console.log("a");
// map проходится по каждому элементу массива
// возвращает новый массив
// выполняет с каждым элементом действие в функции колбеке

// setTimeout / setInterval
setTimeout(() => console.log("a"), 100);
// Во всех методах массивов у кот принимается колбек
// map /sort/ reduce/ forEach/ filter etc.
addEventListener("change", () => console.log("click"));
// фунция срабатывет внутри другой функции

// forEach возвращает undefined
const userNames = ["john_doe", "alice_smith", "bob_jackson", "emma_wilson"];
const root = document.querySelector("#root");

function showSmth(number, callBack) {
  const newValue = number * 2;
  callBack(newValue); // я не знаю точно что произойдет
  // это newValue будет использоваться в новой функции
}

showSmth(5, function (number) {
  root.innerHTML = number;
});

const newArr = userNames.forEach((element) => {
  // создаем элемент h1
  const userElement = document.createElement("li");
  console.log(userElement);
  // добавляем текст в созданный тег
  userElement.innerText = element;
  console.log(userElement);
  // закрепляем в root
  root.append(userElement);
  // return userElement
});

console.log(newArr);

const userList = document.querySelector(".userList");
const userCard = document.createElement("li");
userCard.className = "userCard";
userCard.innerText = "USER";
console.log(userCard);
// элемент к которому прикрепляется
// метод append
// элемент кот хочу прикрепить
userList.append(userCard); //  прикрепить тег к другому тегу

const userNames1 = [
  "john_doe",
  "Alex",
  "alice_smith",
  "bob_jackson",
  "Black",
  "emma_wilson",
  "Питер",
  "Мерри",
  "олег",
  1,
  100,
  1000,
];

// sort - он сортирует данные и изменяет исходный массив
// toSorted()

// нет колбек функции
userNames1.sort();
console.log(userNames1);

const arrNumber = [3, 4, 5, 6, 22, 10, 1, 100, 7, 8, 9];
arrNumber.sort(function (a, b) {
  return b - a; // либо больше нуля либо меньше
  // 3 - 4 = -1 меньше нуля или равно элементы остаются на месте
  // 22 - 10 = 12 больше нуля элементы меняются местами
});
console.log(arrNumber);

// function expression
// function declaration
// объявление функции функциональное выражение

// function declaration - объявление
function substr(a, b) {
  return a - b;
}

// function expression - выражение
function substr1(a, b) {
  return a - b;
}
const arrNumber1 = [3, 4, 5, 6, 22, 10, 1, 100, 7, 8, 9];
arrNumber1.sort(substr1);
// метод это функция объекта
// колбек это функция кот вызывается ДРУГОЙ функцией
console.log(arrNumber1);
const str2 = () => {};

arrNumber1.sort(substr1);
console.log(arrNumber1);

const user = {
  name: "ivan",
  sayHi: function () {
    console.log("hi");
  },
};
// sayHi - это метод

user.sayHi();

function sayHi() {
  console.log("hi");
}

sayHi();

// reduce
// Метод reduce() применяет функцию reducer к каждому элементу массива
// (слева - направо),
// возвращая одно результирующее значение.

// reducer - callback function
// принимает два параметра - accumulator / currentValue
// currentValue - текущий элемент
// acculator - что-то что накапливает
// аккумулятор - что возвращает колбек функция после первой итерации
// первая итерация - первое значение массива - 3

// const res = arrNumber11.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue
// })
// console.log(res)
// результат выполнения  reduce  - последнее значение аккумулятора

// найти наибольшее число
const arrNumber11 = [3, 4, 5, 6, 22, 10, 1, 100, 7, 8, 9];

// ищем макс число
const maxValue = arrNumber11.reduce((accumulator, currentValue) =>
  accumulator > currentValue ? accumulator : currentValue
);
console.log(maxValue);

// for (let i = 0; .. )
// for of
for (let el of arrNumber11) {
}

// 3. посчитать сумму квадратов элементов, если они являются числами
// проверяем является ли числом
// то возводим в квадрат
// складываем все квадраты вместе
const mixedArray = [
  "straberry",
  42,
  "apple",
  7,
  "banana",
  3,
  "cherry",
  100,
  "date",
];
const result = mixedArray.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  if (typeof currentValue === "number") {
    return accumulator + currentValue * currentValue; // currentValue**2
  } else {
    return accumulator;
  }
}, 0);
// второй параметр - дефолтное значение аккумулятора
// на первой итерации дефолтное значение становится аккумулятором
console.log(result);
console.log(42 * 42 + 7 * 7 + 3 * 3 + 100 * 100);

// querySelector()
const root1 = document.querySelector("#root");
const list = document.querySelector(".userList");
const par = document.querySelector("p");

document.getElementById("root");
document.getElementsByClassName("userList");

// создание элемента
const header = document.createElement("header");
// чтобы элемент на странице отобразился необходимо его прикрепить
document.body.append(header);
const nav = document.createElement("nav");
header.append(nav);

const ul = document.createElement("ul");
nav.append(ul);

const categories = ["Sports", "Politics", "Nature", "Meteo"];
categories.forEach((element) => {
  const li = document.createElement("li");
  li.innerText = element;
  ul.append(li);
  // li.textContent = element
  // элемент к которому прикрепляем а потом элемент который крепим
  // parent.append(child)
});
// пройтись по массиву
// создать элемент li
// прикрепить к ul

addEventListener(type, listener);
//