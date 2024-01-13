// alert("Hello wrold !!!");
// console.log("Hello world !!!");
// document.write("Hello world !!!");
// document.write("<h1>Hello world !!!</h1>");

// let age;
// console.log(age);

// let age = 25;
// console.log(age);

// Правильно
// let age;
// let user1;
// let $color;
// let _size;

// Неправильно
// let 1user;
// let my-name;

// let let;
// let const;
// let var;
// let for;

// let username;
// username = "Jon";
// console.log(username);

// let usernmae;
// let surname;
// let username, surname;

// username = "Jon";
// surname = "Done";

// console.log(username, surname);

// let a = 5;
// let b = 10;
// console.log(a + b);

// let username = "Jon";
// let age = 25;

// console.log(username, age);
// console.log(username + age);
// console.log(username + " " + age);
// document.write("<h1>Hello "+ username + " " + age + " !</h1>");


// Number()
// String()
// Boolean()
// Undefined

// console.log(5 > 4); // true
// console.log(5 < 4); // false
// console.log(5 = 5); // Error
// console.log("5" == 5); // true
// console.log(+"5" === 5); // false
// console.log(Number("5") === 5); // false
// console.log(5 >= 4);
// console.log(5 <= 4);
// console.log(5 !== 4)

// console.log("5" + "4"); // "54"
// console.log(5 + 3 + "2"); //"82"
// console.log("2" + 3 + 4); //"234"
// console.log("2" + (3 + 4)); //"27"

let rate = 42000;

function exchange() {
    // console.log("Hello world !!!");
    // alert("Ok");
    let currentValue = document.querySelector(".input-1").value; // 10000
    let result = (currentValue / rate).toFixed(2); // 10000 / 42000 = 0.238...

    document.querySelector(".result-1").innerHTML = currentValue + " $ = " + result + " BTC"; // 10000 $ = 0.25 BTC

    // 1. Вносить значение
    // 2. Присвоить к переменным
    // 3. Математика
    // 4. Результат
}

function exchangeReverse() {
    console.log("Hello world !!!!");
}

function add() {
    // alert("OK");

    let currentValue1 = +document.querySelector(".input-3").value; // 10
    let currentValue2 = +document.querySelector(".input-4").value; // 20
    let result = currentValue1 + currentValue2; // 10 + 20 = 30

    console.log(result)
}