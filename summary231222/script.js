// функция
// функция это изолированный блок кода, который можно переиспользовать
// выносим логику в отдельную функцию
// мы можем кусок кода переиспользовать

// function declaration
// function - служебное слово зарезервированное
// объявление функции
// declare - заявить объявить
// () - внутри параметры
// внутри  {} - тело функции
// return - возвращать
// чтобы функция что-то вовзаращала мы должны написать return
// после return - недостижимый код (unreachable)
// весь код (вся логика) перед return
function sayHi() {
    return 'Hi'
  }
  
  function fullName(name, surname) {
    return name + ' ' + surname
  }
  // return - вернула результат и могли его использовать в вычислениях
  const hiVar = sayHi()
  const fullName1 = fullName('Ivan', 'Petrov')
  
  console.log(sayHi() + ' ' + fullName('Ivan', 'Petrov'))
  document.body.innerHTML = `<h1>${sayHi()}  ${fullName('Ivan', 'Petrov')}</h1>`
  
  // hoisting - мы можем вызвать FUNCTION DECLARATION до ее объявления
  // hoisting - ПОДНЯТИЕ
  // берет все func declar - поднимает их на верх файла
  console.log(sum(3, 4)) // 7
  
  // hoist
  // host - хозяин / размещает
  function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber
  }
  
  a = 1
  console.log(a)
  var a
  // function expression
  // функциональное выражение
  //multiply(4, 5) //ReferenceError:
  
  // удаляем  function
  // после параметров =>
  //  если функция с одним действием - можно убрать {} и return
  const multiply = (a, b) => {
    //console.log(arguments)
    return a * b
  }
  
  console.log(multiply(3, 4))
  function checkDivisionByThree(number) {
    console.log(arguments)
    return number % 3 === 0
  }
  
  checkDivisionByThree(3)
  // 1. у стрелочной функции нет поднятия hoisting
  // 2. меньше кода - нет явного return ( когда нет фиг скобок)
  // 3. arguments - у стрел функции их нет
  // 4. у стрелочной функции нет своего контекста и она берет его извне
  
  // callback functions
  // call back - вызови обратно / перезвонить
  // callback функция - вызывается другой функцией
  
  // 1. в методах массивов
  // 2. в обработчиках событий
  // 3. setTimeout
  // 4. внутри других функций - фетчим данные и вызываем функцию кот. их отрисовывает
  // fetch принести
  //const button = document.querySelector('button')
  // button.addEventListener('click', () => console.log('click'))
  
  // метод - это функция объекта
  const user = {
    name: 'Ivan',
    sayHi: function () {
      console.log('hi')
    },
  }
  user.sayHi()
  
  const arr = [1, 2, 3, 4, 5]
  arr.forEach((el) => console.log(el))
  // forEach - функция
  // если передаем в функцию другую функцию она называется callback
  // const interval = setInterval(() => console.log('timout'), 1000)
  
  // clearInterval(interval)
  
  function time() {
    console.log('timeOUT ')
  }
  // два правильных варианта
  setTimeout(() => time(), 1000)
  setTimeout(function () {
    time()
  }, 1000)
  setTimeout(time, 1000) // только когда у функции не передаются аргументы
  
  // НЕПРАВИЛЬНО
  setTimeout(time(), 1000)
  // функция вызывается сразу же
  // в качестве первого аргумента результат выполнения функции
  // в данном случае undefined потому что функция ничего не вовзращает
  
  function showSmth(number, callback) {
    const newValue = number * 2
    callback(newValue) // я не знаю что она с ним делаем
    // но я вызываю функцию с этим значением
  }
  
  const showData = (value) => (document.body.innerHTML = `<h1>${value}</h1>`)
  showSmth(5, (number) => showData(number))
  
  const button = document.createElement('button')
  button.innerText = 'CLICK'
  document.body.append(button) //  прикрепить - добавить на страницу
  button.addEventListener('click', () => console.log('THIS IS BUTTOn'))
  
  // МЕТОДЫ МАССИВОВ
  // .startsWith() trim() substring()
  
  // form login password
  // пользователь что-то вводит
  // trim убирает пробелы с начала и конца
  const userName = '    christine   '
  console.log(userName)
  console.log(userName.length)
  console.log(userName.trim().length)
  console.log(userName.trim())
  
  // substring1
  const userName1 = 'christine'
  console.log(userName1.substring(1))
  console.log(userName1.slice(0, 5))
  
  // MAP forEach
  
  // оба метода НЕ изменяют исходный массив
  
  // что возращает forEach() - undefined
  // результат выполнения foreach - undefined
  
  // что возвращает map ? новый массив
  
  const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // for - для
  // each - каждого
  
  const map1 = numbers6.map((element, index, array) => {
    if (index % 3 === 0) {
      return element * 2
    } else {
      return element
    }
  })
  
  console.log(map1)
  
  // 1. Сделать все числа положительными
  const numbers3 = [1, -2, 3, -4, 5]
  console.log(Math.abs(-2)) // abs = absolute |-2| = 2 => Math.abs(-2)
  // если меньше нуля то примени Math.abs()  если больше то просто верни число
  
  const newArr = numbers3.map(function (element) {
    if (element > 0) {
      return element
    } else {
      return Math.abs(element)
    }
  })
  console.log(newArr)
  
  // 2. Сделать каждое число строкой
  const numbers4 = [5, 10, 15, 20]
  const allStrings = numbers4.map(function (number) {
    return number.toString()
  })
  
  // 3. Умножить каждый элемент на его индекс
  const numbers5 = [1, 2, 3, 4, 5]
  numbers3.map(function (element, index) {
      return element * index
  })
  // 4. Прибавить к числу 10 если его индекс кратен 3
  const numbers61 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  numbers61.map(function (element, index) {
      if () {
       
      } else {
          
   }
  })