/* // 1. Посчитать сумму чисел в массиве
let sum = 0;
const numbers1 = [6, 10, 11, 9, 12, 25, 30];
for (let i = 0; i < numbers1.length; i++) {
  sum = sum + numbers1[i];
}
console.log(sum);

let sum = 0;
const numbers1 = [6, 10, 11, 9, 12, 25, 30];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0) {
    sum = sum + numbers1[i];
  }
}
console.log(sum); */

/* const numbers1 = [6, 10, 11, 9, 12, 25, 30];
let sum1 = 0;
for (let i = 0; i < numbers1.length; i++) {
  if (i % 3 === 0) {
    sum1 += numbers1[i];
  }
}
console.log(sum1); */

/* const numbers1 = [6, 10, 11, 9, 12, 25, 30];
let sum1 = 0;
middlSumm=0;
for (let i = 0; i < numbers1.length; i++) {
  sum1 += numbers1[i];
}
console.log((middlSumm = sum1 / numbers1.length)); */

// 5. Скопировать массив в новый используя push
// push добавляет элемент в конец массива
const ourArray = [6, 10, 11, 9, 12, 25, 30, 10, 90];
const newArray = [];
// пройтись циклом по массиву ourArray
// в newArray.push(ourArray[i])

/* for (let i = 0; i < ourArray.length; i++) {
  newArray.push(ourArray[i])
  // console.log(newArray)
}

console.log(newArray) */

/* for (let i = 0; i < ourArray.length; i++) {
  newArray.unshift(ourArray[i]);
}
console.log(newArray) */
/* newArray.slice(0,ourArray.length)
console.log(newArray) */

/* const str = 'JavaScript is awesome'
const js = str.slice(0,10) */

// 10. Написать функцию, которая разделяет строку на буквы ''
// испольовать метод сплит
/* const word = 'Hello'
split('') */
function reverseString (str) {
    return str.split('').reverce().join('')
}
console.log(reverseString('world'))
console.log(reverseString('javascript'))