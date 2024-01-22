// let user = {
//     name: "Jon",
//     surname: "Done",
//     age: 20
// };


// let inputs = document.querySelectorAll(".form__input");

// inputs.forEach(item => item.addEventListener("keyup", (e) => {
//     // console.log(e);
//     // console.log(e.target.name, e.target.value)
//     // console.log("Before", user)

//     user[e.target.name] = e.target.value

//     console.log("After", user)
// }))


// let input1 = document.querySelector(".input-1");
// let input2 = document.querySelector(".input-2");
// let input3 = document.querySelector(".input-3");
// let input4 = document.querySelector(".input-4");


// input1.addEventListener("keyup", (e) => {
//     user.name = e.target.value;

//     console.log(user)
// })

// input2.addEventListener("keyup", (e) => {
//     user.surname = e.target.value;

//     console.log(user)
// })

// input3.addEventListener("keyup", (e) => {
//     user.age = e.target.value;

//     console.log(user)
// })

// input4.addEventListener("keyup", (e) => {
//     user.address = e.target.value;

//     console.log(user)
// })

// console.log({} === {}); // false
// console.log({name:"Jon"} === {name:"Jon"}); // false
// console.log([] === []); // false

// let entitiy = {};
// let copyEntity = entitiy;

// console.log(entitiy === copyEntity);

// let product = {
//     id: 1,
//     name: "Macbook Max 16 inch",
//     price: 4000,
//     count: 10
// };

// for (let key in product) {
//    console.log(key, product[key])
// }

// let keys = Object.keys(product);
// console.log(keys);

// let values = Object.values(product);
// console.log(values);

// let entries = Object.entries(product);
// console.log(entries);

// let car1 = ["BMW", "Mercedes", "Audi"];
// let car2 = ["Opel", "Ford"];

// let newCar = car1.concat(car2);

// Spred operator
// let newCar = [...car1, ...car2]
// console.log(newCar);

// let car = [1, "BMW", "X6", 2024, "black", "4X4"];

// let id = car[0];
// let name = car[1];
// let model = car[2];
// let year = car[3];

// let [id, name, model, year, ...options] = car;
// console.log(id, name, model, year, options);

// let [id, name,, year, ...options] = car;
// console.log(id, name, year, options);


// let user = {
//     name: "Jon",
//     surname: "Done"
// }

// let skills = {
//     frontend: ["HTML", "CSS", "JavaScript"],
//     backend: ["Node.js", "PHP"]
// }

// let developer = Object.assign(user, skills);
// console.log(developer);

// let developer = {...user, ...skills}
// console.log(user);

// developer.name = "Bob"
// console.log(developer);


// let user = {
//     name: "Jon",
//     surname: "Done",
//     address: {
//         country: "USA"
//     }
//     // email: "admin@gmail.com"
// }

// let name = user.name;
// let surname = user.surname;
// let email = user.email;

// let {name:nameV2, surname:surnameV2, email: emailV2} = user;

// console.log(name, surname, email);
// console.log(nameV2, surnameV2, emailV2);

// let {name, surname, email = "test@gmail.com", address: {country}} = user;

// console.log(email, country);

// let user1 = {
//     name: "Jon",
//     say: function(){
//         // return `Hello ${user1.name}`;
//         return `Hello ${this.name}`;
//     }
// }

// let user2 = {
//     name: "Bob",
//     say: function(){
//         return `Hello ${this.name}`;
//     }
// }

// console.log(user1.say());
// console.log(user2.say());

// function Person(name, age){
//     let temp = {};

//     temp.name = name;
//     temp.age = age;

//     temp.getPersonInfo = function () {
//         return `Hello ${this.name}`;
//     }

//     return temp;
// }

// let user1 = Person("Jon", 28);
// let user2 = Person("Bob", 30);
// console.log(user1);
// console.log(user1.getPersonInfo());

// console.log(user2);
// console.log(user2.getPersonInfo());

// function User(username, surname) {
//     this.username = username;
//     this.surname = surname;

//     this.displayInfo = function(){
//         document.write(`Name: ${this.username}; Surname: ${this.surname}`)
//     }
// }

// let user1 = User("Jon", 25);
// console.log(user1); // undefined

// let user1 = new User("Jon", "Done");
// console.log(user1);
// user1.displayInfo();

// let user2 = new User("Bob", "Done");
// console.log(user2);
// user2.displayInfo();



// function User(username, surname) {
//     this.username = username;
//     this.surname = surname;
// this.displayInfo = function(){
//     document.write(`Name: ${this.username}; Surname: ${this.surname}`)
// }
// }

// User.prototype.displayInfo = function(){
//     document.write(`Name: ${this.username}; Surname: ${this.surname}`)
// }

// let user = new User("Jon", "Done");
// console.log(user);
// user.displayInfo()

// console.log("displayInfo" in user);
// console.log(user.hasOwnProperty("displayInfo"));


// class User {
//     constructor(username, age){
//         this.username = username;
//         this.age = age;

//         // this.displayInfo = function(){
//         //     document.write(`Name: ${this.username}; Age: ${this.age}`)
//         // }
//     }

//     displayInfo(){
//         document.write(`Name: ${this.username}; Age: ${this.age}`); 
//     }
// }

// let user = new User("Jon", 25);
// console.log(user);
// user.displayInfo()

// let user2 = new User("Bob", 20);
// console.log(user2);
// user2.displayInfo()


// class MathCustom {
//     static add(a, b) {
//         return a + b;
//     }

//     static minus(a, b) {
//         return a - b
//     }
// }

// let x = new MathCustom()
// console.log(x.add(5, 4));

// console.log(MathCustom.add(5, 4));
// console.log(MathCustom.minus(10, 5));

// MathCustom.multyply = function (a, b){
//     return a * b;
// }

// console.log(MathCustom.multyply(5,5));

// console.dir(console);


// console.hello = function(x){
//     console.log(`Hi,`, x)
// }

// console.hello("Jon")


class User {
    constructor(username) {
        this.username = username;
    }

    say(x) {
        console.log(x);
    }
}

let user = new User("Jon")

console.log(User);
console.dir(User);

user.say("Hello")


const users = [
    {
        id: 1,
        username: "Jon",
        age: 20,
        status: "online",
        lastActivity: 0,
        salary: 150
    },
    {
        id: 2,
        username: "Anna",
        age: 32,
        status: "offline",
        lastActivity: 25,
        salary: 300
    },
    {
        id: 3,
        username: "Bob",
        age: 19,
        status: "offline",
        lastActivity: 120,
        salary: 100
    },
    {
        id: 4,
        username: "David",
        age: 46,
        status: "online",
        lastActivity: 120,
        salary: 1500
    },
    {
        id: 5,
        username: "Bill",
        age: 18,
        status: "offline",
        lastActivity: 8,
        salary: 2000
    },
];

// Задача на понимание объектов, указан массив с данными пользователей
// 1. getLoan - Отобразить только тех пользователей у кого зарплата больше 200$ и они старше 20 лет, так как банк остальным не одобряет кредит
// 2. getUserNames - Отобразить в console имена тех пользователей кто сейчас в сети
// 3. getUserNames - Далее отобразить не только тех кто в онлайн, также добавить offline пользователей у кого активность была не больше 10 минут назад, и рядом с offline вывести имена
//    как в примере Jon 10 minutes ago