// 1. Написать цикл который выводит числа от 1 до 10
for (let i = 1; i <= 10; i++) {
    console.log(i)
  }
  
  // пример
  let a = 1
  a += 2 // a = a + 2
  
  // 2. Выводить данные но с шагом через 1
  for (let i = 1; i <= 10; i += 2) {
    console.log(i)
  }
  
  // 3. Считает от 10 до 1 в обратном порядке
  for (let i = 16; i >= 8; i -= 3) {
    console.log(i)
  }
  
  // от 16 до 8 с шагом 3
  
  // из 50 вычесть по очереди от 10 до 1
  let result = 50
  // 50 - 10 - 9 - 8 - 7 -...1
  for (let i = 10; i >= 1; i--) {
    // промежуточный
    result = result - i
  }
  
  console.log(result) // вывожу конечный результат
  
  // от 1 до 20 Выводить числа которые кратны 5
  // вывести сумму чисел кратных 5
  let sum = 0
  for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) sum += i
  }
  console.log(sum)
  
  //Напишите программу, которая выводит на экран числа от 1 до 20.
  //При этом вместо чисел, кратных трем, программа должна выводить слово Fizz,
  //А вместо чисел, кратных пяти — слово Buzz.
  // Если число кратно пятнадцати, то программа должна выводить слово FizzBuzz.
  
  for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else console.log(i)
  }
  
  for (let i = 1; i <= 20; i++) {
    console.log(i)
    if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log('FizzBuzz')
    }
  }
  // number1[0] = 6
  
  // массив индекс элемент
  const numbers11 = [6, 10, 11, 9, 12, 25, 30]
  // получить элемент = массив[индекс]
  console.log(numbers1[0])
  console.log(numbers1.length) // 7
  
  numbers1[numbers1.length] // numbers1[7] undefined
  // loop цикл
  // 3. посчитать сумму чисел у которых индекс кратен трем
  
  const numbers1 = [6, 10, 11, 9, 12, 25, 30]
  numbers1[0] //  к элементу по индексу
  
  let sum1 = 0
  for (let i = 1; i < numbers1.length; i++) {
    if (i % 3 === 0) sum1 += numbers1[i]
  }
  console.log(sum1)
  
  // 4. Написать функцию которая выводит среднее арифметическое чисел массива
  // сумма элементов поделить на их количество
  // arr.length  - количество элементов в массиве
  function average(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum / arr.length
  }
  console.log(average([6, 10, 11, 9, 12, 25, 30, 10]))
  
  // 5. Скопировать массив в новый используя push
  // push добавляет элемент в конец массива
  const ourArray = [6, 10, 11, 9, 12, 25, 30, 10, 90]
  const newArray = []