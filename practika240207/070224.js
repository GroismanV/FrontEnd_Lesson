//1. Написать функцию getUsers(), которая фетчит данные пользователей
//  с 'https://dummyjson.com/users' и выводит в консоль
const button = document.querySelector('#get')
const root = document.querySelector('#root')
console.log('BEFORE')

// fetch возвращает промис - асинхронный
const showProducts = (arrayOfProducts) => {
    console.log(arrayOfProducts)
    //  это функция отрисовывает в браузере ответ от сервера
}

const fetchProducts = async (callback) => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json() // ИЗ json получаем ОБЪЕКТ JSON.parse()
    console.log(data)
    callback(data)
}

fetchProducts(showProducts)

function getProducts() {
    fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then(console.log)
}

// const start = Date.now()

// while (true) {
//   const current = Date.now()
//   if (current - start > 5000) {
//     break
//   }
// }

const div = document.createElement('div')
root.append(div)
div.innerText = 'HELLO'
console.log('AFTER')
button.addEventListener('click', getProducts)

// fetch()
// async await
// try catch finally

// 2. необходимо написать функцию, кот фетчит данные по id который передается в параметр
// выводит данные в консоль
// интерполяция ${}
const getProductById = (id) => {
    fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then(console.log)
}

// getProductById(1)
// getProductById(2)
// getProductById(3)

// написать функцию, которая забирает все данные рецептов с API

const getAllRecipes = () => {
    console.log('ЭТА ФУНКЦИЯ НИЧЕГО НЕ ВОЗВРАЩАЕТ')
    fetch('https://dummyjson.com/recipes')
        .then((res) => res.json())
        .then(console.log)
}

// getAllRecipes()

// return -  возвращать
// setTimeout(() => console.log('timeot'), 100)

// функция получает данные одного рецепта по id

function getRecipeById(id) {
    fetch(`https://dummyjson.com/recipes/${id}`)
        .then((res) => res.json())
        .then(console.log)
}

// getRecipeById(1)

// getRecipeById(100)
