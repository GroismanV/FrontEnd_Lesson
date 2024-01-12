// 1. создать функцию, которая будет вставлять имя пользователя в строку

const age = 30

console.log(`I am ${age} years old`)

// одинарные двойные ковычки для строк
const str = 'string'
const str2 = 'string2'

// косые скобки позволяют вставлять в строку javascript code
// js code находится в ${}
console.log(`${30 + 30}`)

const firstName = 'Ivan'
console.log(`My name is ${firstName}`)

// 1. создать функцию, которая будет вставлять имя пользователя в строку
// параметр name
// возвращаем Привет имя!
// возвращаем - return (вернуть)

// 1.2 добавить второй параметр - возраст - Привет ___! вам __ лет

const userName = 'Ivan'
const userAge = 20

function userInformation(name, age) {
  return `Привет ${name}! Вам ${age} лет`
}
// чтобы функция отработала надо ее вызвать
// чтобы увидеть результат в консоли надо вывести в консоль
// console.log - выводит в консоль данные
console.log(userInformation('Ivan', 20))

// функция может быть переиспользована
const a = 1
// КОНСОЛЬ - ИНСТРУМЕНТ ДЕБАГ (DEBUG) отладка кода

// 2. написать функцию, которая будет вовращать true / false
// если число делится на 3

// функция devisionByThree
// парметр - number
// остаток от деления на 3 - %
// возвращает true / false

function devisionByThree(number) {
  return number % 3 === 0
}

// 3. написать функцию которая проверяет больше число нуля или нет
// если больше true
// moreThanZero
function moreThanZero(number) {
  return number > 0
}

// 4. проверить возраст клиента, можно ли ему продавать алкоголь
// age больше 18
// sellAlcohol
// возвращаем boolean

// принимает второй параметр license
// если есть документ и больше 18
// license - булевое значения

// Оператор  И
function sellAlcohol(age, license) {
  return age >= 18 && license
}

console.log(sellAlcohol(18, true))
console.log(sellAlcohol(17, true))
console.log(sellAlcohol(18, false))
console.log(sellAlcohol(17, false))

// 7. написать функцию, которая проверяет является ли тип данных строкой
// параметр data
// isString
// typeof data
// === 'string'
// возвращается буллевое значение

function isString(data) {
  return typeof data === 'string'
}
// typeof служебное слово которое возвращает тип данных стоящих после
// в виде строки

console.log(isString({}))
console.log(isString('ss'))
isString(500)
isString(true)

console.log(typeof 'ssss' === 'string')
console.log(typeof 4 === 'string')
console.log(typeof {})

//8. написать функцию которая проверяет является ли три числа cторонами трeугольника
isTriangle
// три стороны
// булевое значение
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b
}

console.log(isTriangle(1, 4, 5))

// Primitive
// number string boolean undefined null

// Ссылочные
// function object array

// && || !

const a1 = false || 'cc' || false
console.log(a1)

console.log(!false)
const number = 5
// какое-то если оно истино то выполни первое условие
// conditional
if (number > 4) {
  console.log('это выражение верно')
} else {
  console.log('неверно')
}
// выражение если ложно то второе

// нестрогое сравнение
// строгое сравнение - по типу сравнивает
// ==  ===

// > < >= <=
// : * % - +

// возвращает рандомное число
// 0 - 1
// toFixed - оставить знаки после запятой/точки
const number2 = Math.random() * 10
console.log(Math.floor(number2)) // floor - пол - к меньшему целому числу
console.log(Math.ceil(number2)) // ceil - потолок - к большему целому числу
console.log(Math.round(number2)) // round круглый - к ближайшему

// массив находится к [] элементы через запятую
// индексация от 0

// целое число от 0 до 3

// создать функцию которая возвращает рандомного пользователя
// functiom randomUser()
// параметр функции - массив
// return

const arrayOfUsers = ['Ivan', 'Peter', 'Oleg', 'Vasya']
arrayOfUsers[3]
function randomUser(arr) {
  const userIndex = Math.floor(Math.random() * arr.length) // случайный индекс массива
  const user = arr[userIndex] // К случайному элементу массиву по случайному индексу
  return user
}

console.log(randomUser(arrayOfUsers))
console.log(randomUser(arrayOfUsers))
console.log(randomUser(arrayOfUsers))
console.log(randomUser(arrayOfUsers))

const str1 = 'Hello'
const str22 = 'World'
const str3 = 'Bye'

// 1. написать функцию stringLength
// 2. которая принимает параметром строку
// 3. возвращает длину строки через return

function stringLength(str) {
  return str.length
}

// вызов функции с аргументом
console.log(stringLength(str1))
console.log(stringLength(str22))
console.log(stringLength(str3))
console.log(stringLength('Hello'))
console.log(stringLength('Hello my name is Victor'))

function returnUser(arr, index) {
  return arr[index]
}

console.log(returnUser(['Ivan', 'Peter', 'Oleg', 'Vasya'], 2))

console.log(returnUser([1, 2, 3, 4, 5, 6], 0))

// написать функцию concat
// она принимает параметрами две строки - text1 text2
// она возвращает две строки склеенные / соединенные

function concat(text1, text2) {
  return text1 + text2
}
console.log(concat('1', '2'))

// function passwordLength принимать параметр str
// функция возвращает длину строки
// проверяем тип данных
// typeof
// вернуть булевое значение true
// если typeof === string и длина больше 8
function passwordLength(str) {
  if (typeof str === 'string' && str.length > 8) {
    console.log('добро пожаловать')
  } else {
    console.log('пароль неправильный должен быть строкой и длинее 8 символов')
  }
}

console.log(passwordLength('123411111')) // true

console.log(typeof '1' === 'string')

// function showMark
// параметр num - число
// написать используя if else
// если оценка больше 90 то оценка  A возвращает строку "А"
// если больше 80 возвращает строку "B"
function showMark(num) {
  // num является числом и оно меньше 100 и больше 70
  if (typeof num !== 'number' || num > 100 || num < 70) {
    return 'данные должны быть числом - меньше 100 и больше 70'
  }

  if (num > 90) {
    return 'A'
  } else if (num > 80) {
    return 'B'
  } else {
    return 'C'
  }
}

console.log(showMark(95))

// https://www.codewars.com/kata/568dcc3c7f12767a62000038
// https://www.codewars.com/kata/5772da22b89313a4d50012f7
// https://www.codewars.com/kata/55685cd7ad70877c23000102
// https://www.codewars.com/kata/5a023c426975981341000014
// https://www.codewars.com/kata/56f6ad906b88de513f000d96
// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
// https://www.codewars.com/kata/55a70521798b14d4750000a4
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8

// 11. Написать функцию которая проверяет что число больше 10 и меньше 20

// 12. Проверить что данные являются числом и больше 10

// 13. Проверить что данные являются строкой и длина больше 5

// 14. Проверить что данные являются строкой и включают подстроку
// includes

// 15. Написать функцию которая повторит строку заданное количество раз

// 16. Написать функцию, которая разделяет строку на буквы ''

// 17. Написать функцию которая разделяет предложение на слова

// 18. Написать функцию которая проверяет является ли данные строкой и сделать его заклавными буквами

// 19. Проверить является ли данные числом, если да то сделать его строкой