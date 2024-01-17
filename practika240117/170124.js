const user = {
    name: 'Ivan',
    age: 40,
    city: undefined,
    degree: null,
    adress: {
        street: 'Strasse',
        house: 9,
        appartement: 10,
    },
    married: true,
    stack: ['react', 'javascript', 'css'],
}

const students = [
    { name: 'John', grade: 85 },
    { name: 'Jane', grade: 78 },
    { name: 'Doe', grade: 90 },
    { name: 'Smith', grade: 76 },
    { name: 'Chris', grade: 81 },
]

// 2. Отсортировать студентов по оценкам от высоких к низким
students.sort(function (a, b) {
    console.log('a: ', a)
    console.log('b: ', a)
    console.log('оценка а: ', a.grade)
    console.log('оценка b: ', b.grade)
    return a.grade - b.grade
})

console.log(students)
// forEach - вывести оценки в консоль
//students.forEach((el) => console.log(el.grade))
// 0. отфильровать студентов с оценкой больше 85
const newStudents = students.filter(function (el) {
    return el.grade >= 85
})

// map + reduce
// 1. вернуть массив кот содержит оценки/ reduce посчитать сумму этих оценок
const grades = students
    .map((el) => el.grade)
    .reduce((accumulator, currentValue) => accumulator + currentValue)

// 3. посчитать общую сумму каждого товара - общая стоимость бананов (цена на количество)
// вернуть общую стоимость товаров в корзине
const cartItems = [
    { name: 'Apple', price: 2, quantity: 3 },
    { name: 'Banana', price: 8, quantity: 5 },
    { name: 'Orange', price: 6, quantity: 2 },
]

// map
const total = cartItems
    .map((el) => el.price * el.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(total)

// 4. Отфильтровать в диапазоне
const products = [
    { name: 'Apple', price: 15 },
    { name: 'Banana', price: 8 },
    { name: 'Cherry', price: 3 },
    { name: 'Grape', price: 22 },
    { name: 'Orange', price: 12 },
]
const minPrice = 10
const maxPrice = 20
const sorted = products.filter((el) => el.price > minPrice && el.price < maxPrice)

// 5. Найти самый дорогой товар используя reduce
const res = products.reduce((acc, cv) => (acc.price > cv.price ? acc : cv))
console.log(res)
// 6. вернуть среднюю оценку marks -результат массив средних оценок
// map(el => el.marks)
const arr21 = [
    { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
    { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
    { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
    { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
]
const avMarks = arr21.map(function (el) {
    const sum = el.marks.reduce((accumulator, currentValue) => accumulator + currentValue)
    const length = el.marks.length
    return sum / length
})

console.log(avMarks)
// 7. отсортировать объекты по алфавиту
const people1 = [
    { name: 'Frank', age: 35 },
    { name: 'Eva', age: 22 },
    { name: 'Hannah', age: 31 },
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'Jack', age: 27 },
    { name: 'Bob', age: 20 },
    { name: 'David', age: 28 },
    { name: 'Grace', age: 29 },
    { name: 'Isaac', age: 23 },
]
const sortedPeople = people1.slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    return 0; // имена равны
});

console.log(sortedPeople);