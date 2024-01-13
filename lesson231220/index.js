// function hello(name, year = 2023) {
//     if(!year) {
//         year = 2023
//     }

//     return `Hello ${name} ${year}.`;
// }

//console.log(hello("Santa"));


//  Объявление функции (Function Declaration)

// let sum = add(5, 3);

// function add(a, b) {
//     return a + b; // 8
// }

// console.log("Declaration", sum);

//  Функциональное выражение (Function Expression)

// let sumV2 = addV2(5,3); // Cannot access 'addV2' before initialization

// const addV2 = (a, b) => {
//     return a + b; // 8
// }

// const addV2 = (a, b) => (a + b);

// let sumV2 = addV2(5,3); 

// console.log("Expression", sumV2)

const hello = name => `Hello ${name}!`;

// console.log(hello("Santa"));

// let count = 0;

// setTimeout(() => {
//     count++;

//     console.log("Count", count);
// }, 7000)

// const hello = name => console.log(`Hello ${name}!`);

// setInterval(hello, 4000, "Santa")


// let timeV1 = setInterval(() => {
//     count++;

//     if(count > 3){
//         clearInterval(timeV1)
//     }

//     console.log("Count", count);
// }, 2000)


// function getNumbers(a, b, c) {
//     console.log(a, b, c);
// }

// function getNumbers() {
//     console.log(arguments[0], arguments[1], arguments[2]);
// }

// function getNumbers(...arguments) {
//     console.log(arguments);
// }
// getNumbers(5, 6, 9)

// let x = [1,2,3];
// let y = [4,5,6];
// let c = ["Hello", "World"]

// let result = [1, 2, 3, ...y]

// result.push("Hello", "World")

// console.log(result);


// function counter(){
//     let count = 0;

//     return () => {
//         count++;

//         // return count;

//         console.log(count);
//     }
// }

// counter()();

// let initFunc = counter();
// initFunc();
// initFunc();
// initFunc();

// let cars = ["BMW", "Mercedes", "Audi", "Opel"];

// for (let i = 0; i < cars.length; i++) {
//     cars[i] = cars[i].toUpperCase()
// }

// console.log(cars);

// let modifedCars = cars.map(function(car, index){
//     // console.log(index, car);
//     return car.toUpperCase()
// })

// let modifedCars = cars.map((car, index) => car.toUpperCase());
// console.log(cars, modifedCars);

// let numbers = [2, 3, 6, 5, 8, 9];

// let modifedNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     // modifedNumbers.push(numbers[i]*numbers[i])
//     let num = numbers[i];

//     modifedNumbers.push(num**2)
// }
// console.log(modifedNumbers);

// numbers = numbers.map(num => num**2);


// const getSquare = x => 6**2; //4 9 36
// numbers = numbers.map(getSquare)
// console.log(numbers);

// let numbers = [2, 3, 6, 5, 8, 9];

// const customMap = (arr, callback) => {
//     let newArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i]; // 2 3 6 5 8 9

//         newArray.push(callback(item))
//     }

//     return newArray;
// }

// console.log(customMap(numbers, getSquare));
// console.log(customMap(numbers, x => x**3));

// let cars = ["BMW", "Mercedes", "Audi", "Opel"];

// let filteredCars = cars.filter(car => car[0] === "A");

// let filteredCars = cars.filter(car => car.indexOf("e") !== -1);

// let search = "e";
// let filteredCars = cars.filter(car => car.toLowerCase().indexOf(search.toLowerCase()) !== -1);

// console.log(cars, filteredCars);

// const customFilter = (arr, callback) => {
//     let newArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];

//         if(callback(item)){
//             newArray.push(item)
//         }

//     }

//     return newArray;
// }

// let search = "e";

// console.log(customFilter(cars, x => x.toLowerCase().indexOf(search.toLowerCase()) !== -1));


let cars = ["BMW", "Mercedes", "Audi", "Opel"];

let newArr = cars.forEach(car => car);

console.log(newArr);