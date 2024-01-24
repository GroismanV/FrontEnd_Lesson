// let obj = {
//     username: "Jon",
//     age: 40
// }

// let username = obj.username;
// let age = obj.age;

// let {username, age} = obj;



// let arr = [1, "Bob", 45];

// let [id, username, age] = arr;

// console.log(id, username, age);


// {} === {} // false

// let arr1 = ["France", "USA"];
// let arr2 = ["China"]
// let arr3 = ["Canada"]

// let arr = [...arr1, ...arr2, ...arr3]

// function User(username){
//     this.name = username

// this.say = function(){
//     return this.name
// }
// }

// let user = {
//     prototype: {}
// }

// user.prototype.say = function(){
//     return this.name
// }

// User.prototype.say = function(){
//     return this.name
// }

// let obj = new User("Jon")
// console.log(obj);

// class User {
//     constructor(username){
//         this.name = username;
//         this.say = function(){
//             return this.name
//         }
//     }

//     // say(){
//     //     return this.name
//     // }
// }

// let obj = new User("Jon")
// console.log(obj);

// class MathCustom {
//     static add(a, b) {
//         return a + b;
//     }

// }

// let x = new MathCustom()

// console.log(MathCustom.add(5, 6));

// MathCustom.minus = function(a, b) {
//     return a - b;
// }



// class Hero {
//     constructor(name, health){
//         this.name = name;
//         this.health = health;
//     }

//     attack(target){
//         console.log(`${this.name} атакует ${target.name}`);

//         target.health -= 10;

//         console.log(`${target.name} получает урон. Здоровье: ${target.health}`);
//     }

//     heal(){
//         if(this.health < 100){
//             console.log(`${this.name} исцеляет себя!`);

//             this.health += 10;

//             console.log(`${this.name} исцелен. Здоровье: ${this.health}`);
//         }
//     }
// }

// class Treasure {
//     constructor(value){
//         this.value = value;
//     }

//     collect(hero){
//         console.log(`${hero.name} находит сокровище стоимостью $${this.value}!`);
//     }
// }

// let hero1 = new Hero("Герой 1", 100);
// let hero2 = new Hero("Герой 2", 80);
// let treasure = new Treasure(500);

// console.log(treasure);

// hero1.attack(hero2);
// hero2.attack(hero1);
// hero2.heal();
// treasure.collect(hero1);


// let user1 = {
//     name: "Bob",
//     age: 25,
//     getName(x){
//         // return user1.name;
//         // console.log("this", this);
//         return `${x}, ${this.name}`;
//     }
// }

// let user2 = {
//     name: "Jon"
// }

// let user3 = {
//     name: "Anna"
// }

// let user4 = {
//     name: "Anton"
// }

// let username1 = user1.getName("Hello");
// let username2 = user1.getName.call(user2, "Hi");
// let username3 = user1.getName.apply(user3, ["By"]);

// console.log("username1", username1);
// console.log("username2", username2);
// console.log("username3", username3);


// let boundMethod = user1.getName.bind(user4);
// console.log("boundMethod", boundMethod("Good morning"));


// class Transport {
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }

//     accelerate() {
//         console.log(`${this.name} ускоряется до ${this.speed} км/ч.`);
//     }

//     stop() {
//         console.log(`${this.name} останавливается.`);
//     }
// }

// let car = new Transport("BMW", 280);
// car.accelerate();


// class Car extends Transport {
//     constructor(name, speed) {
//         super(name, speed);
//     }

//     drift() {
//         console.log(`${this.name} делает занос.`);
//     }
// }

// let car = new Car("BMW", 80);
// car.accelerate();
// car.drift();
// car.stop();


// Motorcycle
// метод wheelie - вилли


// class Motorcycle extends Transport {
//     constructor(name, speed) {
//         super(name, speed);
//     }

//     wheelie(){
//         console.log(`${this.name} делает вилли.`);
//     }
// }

// let moto = new Motorcycle("BMS", 80);
// moto.accelerate();
// moto.wheelie();
// moto.stop();

// В этом примере мы создаем базовый класс Shape, который представляет общие свойства и методы для всех фигур.
// Дочерние классы Circle и Rectangle наследуют класс Shape и расширяют его функциональность для отображения конкретных фигу
// Определение базового класса Shape

class Shape {
    constructor(className) {
        this.element = document.createElement("div");

        this.element.classList.add("shape", className);
    }

    render() {
        document.querySelector(".container").append(this.element);
    }
}

// let shape = new Shape("circle");
// shape.render();

// let rectangle = new Shape("rectangle");
// rectangle.render();


class Circle extends Shape {
    constructor() {
        super("circle")
    }
}

let circle = new Circle();
// circle.setStyle({
//     background: "orange",
//     borderRadius: "50px"
// });
circle.render()