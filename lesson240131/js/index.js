// let x = [1, 2, 3, 4, 5].forEach((element) =>
//     console.log(element)
// ) 

// let x = ["red", "yellow", "green"], currentColorIndex = 0;

// function getCurrentColor() {
//     currentColorIndex += 1;

//     return currentColorIndex;
// }

// function switchColor() {
//     return x[currentColorIndex];
// }

// console.log(switchColor());

// Полиморфизм и Абстракция

class Transport {
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log(`${this.name} is driving.`);
    }
}

// let car = new Transport("BMW");
// car.drive();

class Car extends Transport {
    constructor(name) {
        super(name);
    }

    drive() {
        console.log(`${this.name} is driving on the road.`);
    }
}

class Motorcycle extends Transport {
    constructor(name) {
        super(name);
    }

    drive() {
        console.log(`${this.name} is riding on the highway.`);
    }
}

let car = new Car("BMW");
let motorcycle = new Motorcycle("Harley-Devidson");

// car.drive()
// motorcycle.drive()

let transports = [car, motorcycle];

// transports.forEach(transport => transport.drive());


class UIElement {
    constructor() {
        this.element = null;
    }

    render() { };
}

class Button extends UIElement {
    constructor(text, onClick) {
        super();

        this.text = text;
        this.onClick = onClick;
    }

    render() {
        this.element = document.createElement("button");
        this.element.innerText = this.text;
        this.element.addEventListener("click", this.onClick);
        document.body.append(this.element);
    }
}

let button = new Button("Click me", () => alert("Button clicked !!!"))
button.render()


// InputField - наследуют UIElement и реализуют свой собственный метод render(), поле placeholder, onInput - отображение содержимое инпута при вводе


// Создайте класс StringManipulator, у которого есть метод manipulate(str), принимающий строку и выполняющий какую-то манипуляцию с ней. 
// Затем создайте два подкласса UpperCaseManipulator и ReverseManipulator, реализующих конкретные манипуляции: преобразование строки в верхний 
// регистр и обращение строки задом наперед.

class InputFileld extends UIElement {
    constructor(placeholder, onInput) {
        super();
        this.placeholder = placeholder;
        this.onInput = onInput;
    }
    render() {
        this.element = document.createElement("input");
        this.element.placeholder = this.placeholder;
        this.element.addEventListener("input", this.onInput);

        document.body.append(this.element);
    }
}
let input = new InputFileld("input", (event) => console.log(event.target.value));
input.render()

//   const upperCaseString = new UpperCaseManipulator();
//   upperCaseString.manipulate('hello');

//   const reverseCaseString = new ReverseManipulator();
//   reverseCaseString.manipulate('hello');


// Создайте интерфейс для работы с продуктами. У вас должен быть базовый класс Product, который имеет метод calculatePrice(), возвращающий цену продукта.
// От Product наследуются два подкласса: PhysicalProduct и DigitalProduct. Каждый из этих подклассов реализует метод calculatePrice() соответствующим образом.
// calculateShippingCost если у нас внутри класса указан 3-ий параметр, тогда нужно считать и доставку, стоимость за кг - 2$, расчет нужно сделать внутри calculateShippingCost

// 1000 * 2 = 2000
// (2kg * 2$) = 4 

// calculatePrice() 1000 + 4

// const physicalProduct = new PhysicalProduct('Laptop', 1000, 2);
// const digitalProduct = new DigitalProduct('Software', 50, '10 MB');


// Создайте иерархию классов для представления животных. У вас должен быть базовый класс Animal, от которого наследуются подклассы Dog, Cat и Bird. 
// Каждый из подклассов должен реализовывать метод makeSound(), возвращающий звук, издаваемый соответствующим животным.

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() { }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} woof!`);
    }
}

let dog = new Dog("Dog");
dog.makeSound();

console.log(dog);



class Product {
    constructor(productName, price) {
        this.productName = productName;
        this.price = price
    }

    calculatePrice() { }
}

class PhysicalProduct extends Product {
    constructor(productName, price, weightProduct) {
        super(productName, price);
        this.weightProduct = weightProduct

    }

    calculatePrice() {
        return this.price + this.calculateShippingCost();
    }

    calculateShippingCost() {
        return this.weightProduct * 2;
    }
}

class DigitalProduct extends Product {
    constructor(productName, price, quantity) {
        super(productName, price);
        this.quantity = quantity
    }

    calculatePrice() {
        return this.price;
    }
}


const physicalProduct = new PhysicalProduct('Laptop', 1000, 4);
const digitalProduct = new DigitalProduct('Software', 50, '10 MB');

console.log(physicalProduct.calculatePrice());
console.log(digitalProduct.calculatePrice());