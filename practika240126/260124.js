console.log(this)
// THIS это всегда определяет КОНТЕКСТ выполнения кода
// глобальный контекст выполнения нашего кода в браузере это объект WINDOW

const button = document.createElement('button')
window.document.body.append(button)
button.innerText = 'click'

// контекст выполнения нашего события - это элемент кнопки
button.addEventListener('click', () => {
    console.log(this)
})

// setTimeout()
// localStorage.setItem

fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then(console.log)

// ссылочный тип данных
// хранит данные по принципу ключ значение
// {} - объект
const post = { title: 'first' }
console.log(typeof post) // object

// console.log({} === {}) // false
// при создании объекта создается ссылка в памяти
// копируется объект -- копируется ссылка
// мы не можем сравнивать объеты по значению
const post1 = { title: 'first' }
console.log(post === post1) // false потому что по ссылке

// ссылка в памяти - это банковский счет
// при прямом копировании объекта мы создаем банковскую карточку для одного счета
const post2 = post1 // скопировали ссылку на первый объект
post2.title = 'second'
console.log(post1) // { title: 'second' }

// keys ключи - это строки
// values значения могут быть любым типом данных
// вложенность может быть любой
const post3 = {
    id: 1,
    read: true,
    title: 'How to learn JS',
    tags: null,
    date: undefined,
    reactions: [
        {
            likes: 33,
            share: 11,
        },
    ],
    metaData: {
        user: {
            userData: {
                name: {
                    firstName: 'Ivan',
                    lastName: 'John',
                },
            },
        },
    },
}
// ЧТОБЫ обратиться к значение по ключу
// объект точка ключ = значение
post3.title = 'How to learn REACT'

// keys values entries работает только на глобальном объекте Object
// на жкземпляре класса не работают
console.log(Object.keys(post3))
console.log(Object.values(post3))
console.log(Object.entries(post3))

const showPost = (post) => {
    const postCard = document.createElement('div')
    document.body.append(postCard)
    const title = document.createElement('h1')
    title.innerText = post.title
    postCard.append(title)
}

//showPost(post3)
// мы работаем с каким-то типом данных - понять что за тип за данных

const product = {
    products: [
        {
            id: 1,
            title: 'iPhone 9',
            description: 'An apple mobile which is nothing like apple',
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail: '...',
            images: ['/dog.svg', '...', '...'],
        },

        // 30 items
    ],
}
console.log(product.products[0].images[0])

// в объекте не может быть двух одинаковых ключей
// если сливаем два одинаковых объекта, то перезаписывается ключ, по ПОСЛЕДНЕМУ объекту
const productData1 = { title: 'apple', country: 'Brazil' }
const productData2 = { amount: 22, title: 'cherry' }
// два параметра 1 - целевой объект (куда мы копируем)
// 2 - тот объект кот хотим скопировать
// const newProduct = Object.assign(productData1, productData2) // title cherry
const newProduct = { ...productData1, ...productData2 }
console.log(newProduct)

const user = { name: 'Oleg' }
const newUser = { ...user, id: 1 }
const newUser2 = { ...newUser, id: 2 }
console.log(newUser2)
newUser.name = 'Stan'
console.log(user)

// спред оператор и деструктуризация -
// это две ОЧЕНЬ ВАЖНЫЕ ТЕМЫ кот вы будете использовать в работе каждый день

const product11 = {
    title: 'Cherry',
    amount: 5,
    price: 20,
}

const productWithSum = { ...product11, sum: product11.amount * product11.price }
console.log(productWithSum)

//  пройтись по массиву и создать новые объекты у кот будет поле sum в котором будут общие суммы
const cartItems = [
    { name: 'Apple', price: 2, quantity: 3 },
    { name: 'Banana', price: 8, quantity: 5 },
    { name: 'Orange', price: 6, quantity: 2 },
]

const itemsWithSum = cartItems.map((item) => {
    return { ...item, sum: item.quantity * item.price }
})

console.log(itemsWithSum)

const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]
const newArr = [...arr1, ...arr2]

// ДЕСТРУКТУРИЗАЦИЯ

// const title = product111.title
// const amount = product111.amount
// const price = product111.price

// { } - деструктурируем объект
// мы деструктурируем ключи
// = тот объект который хотим деструктурировать
// могу написать ключи в произвольном порядке
const product111 = {
    title: 'Cherry',
    amount: 5,
    price: 20,
    showTotalSum: function (country, discount) {
        // контекст выполнения функции в объекте сам объект - объект перед точкой
        console.log(`Sum: ${this.amount * this.price}, and in ${country} discount is ${discount}`)
    },
}

// есть объект, но у него нет методов
// мы не можем добавить методы, потому что это объект из внешней библиотеки
const objectWithoutFunction = { title: 'WaterMelon', amount: 100, price: 30 }
// apply принимает вторым параметром массив данных
product111.showTotalSum.apply(objectWithoutFunction, ['Germany', 20])
// принимает параметры через запятую
product111.showTotalSum.call(objectWithoutFunction, 'Brazil', 10)
// call и apply
// оба метода позволяют вызвать функцию с новый контекстом!
// bind - создаю новую функцию с УСТОЯВШИМСЯ новым контекстом
// результат выполнения bind - НОВАЯ ФУНКЦИЯ

const newFunctionWithBindContext = product111.showTotalSum.bind(
    objectWithoutFunction,
    'Germany',
    20
)
// всегда одинаковый результат с контекстом кот мы привязали
newFunctionWithBindContext()
newFunctionWithBindContext()
newFunctionWithBindContext()
newFunctionWithBindContext()
newFunctionWithBindContext()

product111.showTotalSum()
// проверяем наличие свойств в объектах
console.log('title1' in product111)
console.log(product111.hasOwnProperty('title'))

const { price } = product111

console.log(price)
// я хочу писать больше кода и меньше прикладывать усилий

const showProduct = ({ title, price, amount }) => {
    // const { title, price, amount } = pr (в параметре прокидывается)
    // const title = pr.title
    const product = document.createElement('div')
    document.body.append(product)
    const titleContainer = document.createElement('h1')
    titleContainer.innerText = title
    const priceContainer = document.createElement('h2')
    priceContainer.innerText = price
    const amountContainer = document.createElement('p')
    amountContainer.innerText = amount
    product.append(titleContainer, priceContainer, amountContainer)
}

showProduct(product111)

// ARROW FUNCTIONS VS FUNCTION DECLARATION

// 1. hoisting - поднятие
// func decl может вызываться перед(выше) объявления функцции
sum(2, 4) // будет работать
function sum(a, b) {
    return a + b
}

// не работает у стрл функций
arrowSum() // не будет работать
// arrow func частный вид функционального выражения
const expSum = function (a, b) {
    return a + b
}
const arrowSum = (a, b) => a + b

// 2. у arrow function не обязательно будет return если в одну строчку

// 3. У arrow function нет своего контекста выполнения
// берет контекст выполнения из внешнего окружения
// возвр контекст того, что выше нее

// 4. Поскольку у стрелочных функций нет своего контекста
// они НЕ МОГУТ быть функциями конструкторами

const User = (name) => {
    this.name = name
}

const user1 = new User('peter') // User is not a constructor
console.log(user1)

//5. у стрелочной функции нету объекта arguments
function sum1(a, b, c) {
    console.log(arguments)
    return a + b + c
}

sum1(34, 4, 3)

const arrowsum1 = (a, b, c) => {
    console.log(arguments)
    return a + b + c
}
arrowsum1(34, 4, 3)