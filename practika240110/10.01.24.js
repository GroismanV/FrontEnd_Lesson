// reduce - accumulator, currentValue

// 1. Отсортировать строки по алфавиту
// сначала идут с большой буквы а потом с маленькой
const names = [
  "ann",
  "Vlad",
  "Ivan",
  "sergey",
  "mark",
  "oleg",
  "екатерина",
  "Олег",
];

// sort
names.sort();
console.log(names);

// 2. отсортировать массив по длине слов
const names1 = [
  "ann",
  "Vlad",
  "Ivan",
  "sergey",
  "mark",
  "oleg",
  "екатерина",
  "Олег",
];
names1.sort((a, b) => {
  console.log(a, b);
  return b.length - a.length;
});
console.log(names1);
// length

// 3. Отсориторовтаь по убыванию
const arrNumber6 = [3, 4, 5, 6, 22, 10, 1, 100, 7, 8, 9];

arrNumber6.sort((a, b) => b - a); //  меньше нуля - остаются на местах/ больше нуля - меняются
console.log(arrNumber6);

// 1. Вернуть сумму элементов
const arrNumber10 = [3, 4, 5, 6, 7, 8, 9];

const result = arrNumber10.reduce(function (accumulator, currentValue) {
  console.log("acc: ", accumulator, currentValue);
  return accumulator + currentValue / arrNumber10.length;
}, 0);

// 3/9 + 4/9 + 5/9 etc
console.log(result);
// reduce - возвр последнее значение аккумулятора

// среднее арифметическое - сумма делится на количество
const average = result / arrNumber10.length;
console.log(average); // 6
// посчитать сумму иксов
let sum11 = [{ x: 1 }, { x: 2 }, { x: 3 }];

// метод reduce найти сумму четных чисел массива.
const numbers22 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39];
const answer1 = numbers22
  .filter((el) => el % 2 === 0)
  .reduce((acc, currentValue) => acc + currentValue);

const answer2 = numbers22.reduce(function (acc, currentValue) {
  if (currentValue % 2 === 0) {
    return acc + currentValue;
  } else {
    return acc;
  }
}, 0);
console.log(answer2);

// Задача. Используя метод reduce найти наибольшее число массива
const numbers223 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39];
const res = numbers223.reduce(function (accumulator, current) {
  console.log(accumulator, current);
  if (accumulator > current) {
    return accumulator;
  } else {
    return current;
  }
});
// acc - последний результат return в колбеке
// accumulator - одно число

console.log(res);
