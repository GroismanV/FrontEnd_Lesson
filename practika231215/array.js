// массив это упорядоченная структура
// порядок элементов - индекс элементов
// начинается с 0
// можем хранить любой тип
const arr = [
  11,
  'hello',
  true,
  undefined,
  null,
  [0, 1, 2],
  { user: 'Ivan' },
  function sayHI() {
    console.log('hi')
  },
]
// обращаемся к нулевому элементу
const firstElement = arr[0]
const secondElement = arr[1]
const thirdElement = arr[2]
// узнаем длину - количество элементов в массиве
arr.length

// на 1 больше чем последний индекс
// потому что индексация начинается с 0
arr.length - 1 // последний индекс
const lastElement = arr[arr.length - 1]

// деструктуризация
// слева направо в переменные заносятся значения
// first - элемент с нулевым индекосм
// second - со первым индексом и тд.
const [first, second, forth] = arr
console.log(first, second, forth)

// методы массивов
// изменяют исходный массив
// возвращают новый массив

// push pop shift unshift
const arr1 = [
  11,
  'hello',
  true,
  undefined,
  null,
  [0, 1, 2],
  { user: 'Ivan' },
  function sayHI() {
    console.log('hi')
  },
]
console.log(typeof arr1) // object
// Object --> все остальные объекты
// в JS все объекты
// ООП - объекто ориентированное програмимрование

const obj = {
  user: 'Ivan',
  hi: function () {
    console.log('hi')
  },
}
console.log(Object.values(obj))
String
Array
Number
console.log(obj.user)
obj.hi()
console.log(typeof obj)
// последний элемент выкинуть

// методы массивов - метод НА массиве
// метод это функция объекта
const arr11 = [
  11,
  'hello',
  true,
  undefined,
  null,
  [0, 1, 2],
  { user: 'Ivan' },
  function sayHI() {
    console.log('hi')
  },
]
console.log(typeof arr11)
const value = arr11.pop() // function
const fv = arr11.shift() //11

const ch = arr11.push(1) // длину массива
const unsh = arr11.unshift('aaa', 'bbb') // длина массива

// split join
// splice slice
// splice - изменяет исходный
// slice - не изменяет
const items = ['Apples', 'Bananas', 'Oranges', 'Grapes']
const copy = items.splice(0, 0, 'kiwi', 'cherry') // items полностью пустой
// splice - исзменяет исходный массив
// const sliceCopy = items.slice() // целиком копируем но исходный массив не изменился
console.log('items: ', items)
console.log(copy)
items.slice() // первый параметр- индекс,  последний пар -  индекс // не изменяет исходный массив
items.splice() // первый пар - индекс, второй - колво элементов, данные которые хотим вставить // изменяет массив

const items1 = ['Apples', 'Bananas', 'Oranges', 'Grapes']
const i = items1.slice(1, 2) // все жо второго индекса

// indexOf - возвращает индекс элемента
// -1 если элемента нет в массиве
items1.indexOf('Kiwi') // номер индекса
console.log(items1.includes('Apples')) // true false
const items2 = ['apricot', 'grape', 'avocado', 'kiwi']
const newArr = items2.concat(items1)

console.log(newArr)
items2.push(111)
console.log(items2)
console.log(newArr)

// Методы строк

// split() - из строки в массив
const hello = 'Hello world My name is Vlad!'
console.log(hello.split(' '))

// Метод массива Join() - из массива в строку
const items21 = ['apricot', 'grape', 'avocado', 'kiwi']
console.log(items21.join(''))

const word = 'AnaNas'
console.log(word.split('').reverse().join(''))
const word2 = 'anna'
console.log(word2.split('').reverse().join(''))
// toLowerCase()
const word1 = 'AnaNas'
console.log(word1.toLowerCase())
// to UpperCase()
console.log(word1.toUpperCase())(
  // case - регистр
  // low - низкий
  // lower - ниже / нижний
  // up - вверх
  // upper - верхний
  'Ananas'
)('ananas')('ANANAS')

console.log(true && true)

// устроен на работу --> ушел в отпуск
// 1 аргумент - человек устроен на работу
// 2 аргумент - в отпуске сейчас он или нет
console.log(true && !true) // false
console.log(true && !false) // true
console.log(false && !false) // false
console.log(false && !true) //false
