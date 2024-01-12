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
  
  // метод который очищают строку от лишних пробелов?
  trim()
  // написать функцию кот принимает строку и возвращает строку очищенную от пробелов справа слева
  
  function withoutWhitespaces(str) {
    console.log(str)
    console.log(str.length) // 4
    return str.trimRight().trimLeft()
  }
  
  console.log(withoutWhitespaces('    aa ')) // 2
  console.log(withoutWhitespaces(200)) // 400
  console.log(withoutWhitespaces(234))
  
  // метод который проверяет начинается ли слово с подстроки/другой строки
  const apple = 'apple'
  console.log(apple.startsWith('dapp')) // true /false
  console.log(apple.includes('dapp'))
  // написать функцию которая принимает два параметра - str, substr
  // проверяет содержит ли str substr
  // начинается ли на эту подстроку
  // возвращает true или false
  function check(str, substr) {
    if (str.includes(substr)) {
      return str.toUpperCase()
    } else {
      return str.at(0).toUpperCase() + str.slice(1)
    }
  }
  console.log(check('apple', 'app'))
  console.log(check('apple', 'ban'))
  // if else
  // если слово содержит подстроку, то сделай его целиком заглавными буквами
  // не соджержит то сделать первую букву заглавной и вернуть слово целиком
  // to UpperCase()
  // slice() - чтобы выбрать буквы со второй по последнюю
  // обратиться к первой букве str.at(0)
  console.log('aa' + 'bb')
  
  function checkStrSubstr(str, substr) {
    if (str.includes(substr)) {
      return str.toUpperCase()
    } else {
      return str.at(0).toUpperCase() + str.slice(1)
    }
  }
  
  console.log(checkStrSubstr('apple', 'app'))
  console.log(checkStrSubstr('apple', 'bb'))
  // функция она принимает два параметра - имя, второй - фамилия
  // вернуть инициалы John White J.W.
  // ivan petrov -> I.P.
  // at + upperCase + concatanation +
  function returnInitials(name, surname) {
    return name.at(0).toUpperCase() + '.' + surname.at(0).toUpperCase() + '.'
  }
  console.log(returnInitials('ivan', 'petrov'))
  console.log(returnInitials('john ', 'black'))
  // то же самое - Одна строка "John White" - разделить (метод строки делит оп пробелу)
  
  const fullName = 'John White'
  console.log(fullName.split(' ')) // [ 'John', 'White' ]
  const newArr1 = fullName.split(' ')
  
  function initials(fullName) {
    const arrOfNames = fullName.split(' ')
  
    const firstName = arrOfNames[0]
    const lastName = arrOfNames[1]
    return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase() + '.'
  }
  console.log(initials('John White'))
  
  // переписать на стрелочную
  const greet = (name) => console.log(`Hello, ${name}!`)
  
  const calculateArea = (length, width) => length * width
  
  const sayGoodbye = () => console.log(`Goodbye !`)
  // убираем слово function
  // после параметров ставим стрелку
  // если одно дейтсвие - можно убрать фигурные скобки и return
  const isEven = (number) => number % 2 === 0
  
  //убираем слово function ставим const
  // перед параметрами знак ровно
  // после параметров ставим стрелку
  // убрать фигурные скобки и return
  const reverseString = (str) => str.split('').reverse().join('')
  
  // HW
  function stringLength(str) {
    console.log(`the length of "${str}" is:`, str.length)
  }
  
  function sayHi() {
    console.log('Hi')
  }
  setTimeout(sayHi, 3000)
  // выполняется через опредленное и вызывает функцию кот передана первым параметром
  setTimeout(() => console.log('Hi1'), 3000)
  
  // два параметра - callback function / time
  
  // написать функцию, которая выводит сообщение "привет" через 3 секунды
  3000
  
  // напистаь функцию которая выводит сообщение с именем HI ${user} - function
  // выводит приветствие через 1000
  
  function sayHi(name) {
    console.log(`HI, ${name}!`)
  }
  
  setTimeout(function () {
    sayHi('Ivan')
  }, 1000)
  
  setTimeout(() => sayHi('Vlad'), 1000)
  
  // MAP
  
  const arrNumber3 = [3, 4, 5, 6, 7, 8, 9]
  // map возвращает новый массив
  // un - не
  // defined - определенный
  // undefined -  неопредленное значение
  // map метод массива
  const NA = arrNumber3.map((element) => element * 3)
  const NA1 = arrNumber3.map(function (element) {
    return element * 3
  })
  
  const words1 = ['apple', 'banana', 'cherry']
  const newWords = words1.map((element) => element.length)
  console.log(newWords)
  // вернуть новый массив содержит длину слов
  // element.length
  
  // 4 Добавить восклицательный знак в конце каждого слова
  const words22 = ['hello', 'world', 'javascript']
  const na = words22.map((el) => el + '!')
  console.log(na)
  // вернуть новый массив и все имена с начинаются с загл буквы
  const users = [
    'john',
    'emma',
    'david',
    'sophia',
    'alex',
    'olivia',
    'william',
    'mia',
    'james',
    'ava',
  ]
  
  console.log(users.map((el) => el.at(0).toUpperCase() + el.slice(1)))