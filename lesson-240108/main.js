// Здесь сегодня будем писать код
/*
Пишем реализацию функции makeCoffee. Она принимает 2 аргумента: сорт кофейных зерен (строка), и название воды (строка). Результатом функции также должна быть строка "Ваш кофе готов: вода такая-то, зерна такие-то. Объем 200мл".:
*/

// function makeCoffee(beansKind, water) {
//   return `Your coffee is ready: water ${water}, beans ${beansKind}. Vol.200ml`;
// }

// const myCoffee = makeCoffee('Arabica', 'BonBuasson');
// console.log(myCoffee);

// function myFunc1( firstArgument, secondArgument ) {
//   return 'Result';
// }

/*
Усложним немного нашу задачу. Теперь наша кофемашина принимает третий аргумент, тип напитка (espresso, double espresso, americano). В зависимости от этого, мы должны наливать определенный объем кофе. В случае, если нам заказали эспрессо, мы наливаем 200мл, в случае если американо - 300мл, в случае двойного эспрессо - 400мл.
*/

// const myConst = 'Simple constant';

// const makeCoffee2 = ( beansKind, water, coffeeType ) => {

//   console.log(myConst);

//   let totalVolume = 0;
//   switch (coffeeType) {
//     case 'espresso': {
//       totalVolume = 200;
//       break;
//     }
//     case 'americano': {
//       totalVolume = 300;
//       break;
//     }
//     case 'double espresso': {
//       totalVolume = 400;
//       break;
//     }
//     default: {
//       totalVolume = 50;
//     }
//   }
//   let simpleVariable = 100;
//   console.log('Inner call', simpleVariable)
//   return `Your coffee is ready: water ${water}, beans ${beansKind}. Vol.${totalVolume}ml`;
// }

// const coffee2 = makeCoffee2('Ambassador', 'Evian', 'double espresso');
// console.log(coffee2)

// // Определяем функцию, которую потом планируем использовать как колбэк
// function simpleCallback() {
//   console.log('Hello from callback!');
// }

// // Определяем функцию, которая будет принимать и вызывать колбэк
// function acceptCallback(callbackFn) {
//   console.log('Start execution of acceptCallback function');
//   // вызываем колбэк
//   callbackFn();
//   console.log('Finish');
// }

// // вызываем нашу функцию, и передаем ей в аргументах ССЫЛКУ на функцию-колбэк
// acceptCallback(simpleCallback);

const array = ["simple", "array"];

// function writeElem(elem) {
//   console.log(elem);
// }

/*
Пройтись по массиву numbers, вывести в консоль квадрат каждого элемента массива.
Посчитать сумму элементов массива.
Вывести в консоль только нечетные элементы массива numbers.
Пройтись по массиву strings, вывести в консоль только те элементы, у которых кол-во символов меньше 5.
Написать свою реализацию метода forEach.
*/

// numbers.forEach( ( elem ) => {
//   console.log(elem ** 2);
// } );

// let totalSum = 0;
// numbers.forEach( (elem) => {
//   totalSum = totalSum + elem;
// });
// console.log('Total sum of elements:', totalSum);

// numbers.forEach( (elem) => {
//   if (elem % 2 !== 0) {
//     console.log(elem);
//   }
// })

const strings = ["this", "is", "an", "array", "of", "simple", "strings"];

/*
Получить из массива numbers массив чисел, кратных 3.
Получить из массива strings массив строк с длиной больше 4 символов.
Получить из массива strings массив тех строк, которые содержат букву 'a'.
Написать свою реализацию filter.
*/

// const stringsWithA = strings.filter( elem => elem.includes('a') );

// console.log(stringsWithA);

function customForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

customForEach(strings, (elem) => {
  console.log(elem);
});
