// let car1 = "BMW";
// let car2 = "Mercedes Benz";
// let car3 = "Volvo";

// document.write(`<h1>${car1}</h1>`);
// document.write(`<h1>${car2}</h1>`);
// document.write(`<h1>${car3}</h1>`);

// let cars = ["BMW", "Mercedes Benz", "Volvo", "Audi"];
// console.log(cars[1])
// cars[8] = "Opel";
// console.log("cars", cars);

// document.write(`<h1>${cars[0]}</h1>`);
// document.write(`<h1>${cars[1]}</h1>`);
// document.write(`<h1>${cars[2]}</h1>`);
// document.write(`<h1>${cars[3]}</h1>`);

// console.log(cars.length)

// for (let i = 0; i < cars.length; i++) {
//     document.write(`<h1>${cars[i]}</h1>`);
// }

// let cars = ["BMW", "Mercedes Benz", "Volvo", "Audi"];
// cars.push("Land Rover", "lamborghini");
// console.log("cars", cars);
// cars.pop();

// cars.unshift("Land Rover")
// console.log(cars);
// cars.shift()

// let countries = ["Malta", "Greenland", "Panama", "Armenia"];
// let people = [44153, 60055, 904540, 1000000];

// for (let i = 0; i < countries.length; i++) {
//     document.write(`<p>${countries[i]} - ${people[i]}</p>`);
// }


// let countries = ["Malta", "Greenland", "Panama", "Armenia"];
// countries.splice(1, 2);
// console.log(countries)

// let x = countries.splice(1, 2);
// console.log(x)

// countries.splice(1, 1, "France");
// countries.splice(1, 0, "France", "China");
// console.log(countries);

// countries.splice(-1, 1);
// console.log(countries);
// countries.splice(-2, 1);

// countries.splice(0, 1);
// console.log(countries);


// let countries = ["Malta", "Greenland", "Panama", "Armenia"];
// let newCountry = countries.slice(0, 2);
// let newCountry = countries.slice();
// console.log(countries, newCountry);

// let countries = ["Malta", "Greenland", "Panama", "Armenia"];
// let concatArray = countries.concat("China");

// let otherCountries = ["France", "China", "USA"];
// let concatArray = countries.concat(otherCountries);

// console.log(countries, concatArray);

// let panama = 0;
// let countries = ["Malta", "Greenland", "Panama", "Armenia"];

// console.log(countries.indexOf("Panama"));
// console.log(countries.indexOf("USA"));
// console.log(countries.indexOf("Greenland", 2));

// console.log(countries.includes("Panama"));
// console.log(countries.includes("USA"));
// console.log(countries.includes("Greenland", 2));

// if(countries.includes("Panama")){
//     console.log(`This is ${countries[countries.indexOf("Panama")]}`)
// }

// let str = "Hello world!!!"; // ["h", "e", "l", "l", "o"]
// console.log(str.indexOf("o"));
// console.log(str[1])

// console.log(countries.indexOf(panama), countries.indexOf("panama"));


// let numbers = [10, 20, 15, 3, 80, 60];
// let maxNumber = numbers[0]; // 10 20

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i]
//     }
// }
// console.log(maxNumber);

// let even = 0, odd = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log("Even", numbers[i])
//         even++;
//     }else {
//         console.log("Odd", numbers[i])
//         odd++;
//     }
// }

// console.log(even, odd);


// let str = "apple,banana,orange"; // ["apple", "banana", "orange"];

// let arr = str.split(",")
// console.log(arr); // ["apple", "banana", "orange"];

// str = arr.join(" "); 
// console.log(str); // apple-banana-orange

// let arr = str.split("");
//     arr = arr.join("")
// console.log(arr)

let str = "I love Javascript";

str = str.toUpperCase();
console.log(str)

str = str.toLowerCase();
console.log(str)