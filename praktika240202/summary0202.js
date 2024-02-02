const inputName = document.querySelector('#userName')
const inputAge = document.querySelector('#userAge')
const root = document.querySelector('#root')
const changeColorButton = document.querySelector('#change-color')
const colorInput = document.querySelector('#colorInput')
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target)
    console.log(event.submitter)

    const userData = {
        name: inputName.value,
        age: inputAge.value,
    }
    // const newUser = new User(userData)
})

inputName.addEventListener('input', (event) => {
    root.innerText = event.target.value
})

inputName.addEventListener('change', (event) => {
    console.log(event)
    console.log('this happens on change')
})
changeColorButton.addEventListener('click', () => console.log('click'))

// const divClick = document.createElement('div')
// root.append(divClick)
// divClick.classList.add('click-div')

const changeColor = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue}
    )`
}
let counter = 1

// divClick.addEventListener('click', (event) => {
//   console.log(event.target)
//   counter += 1
//   console.log(counter)
//   divClick.style.transform = `scale(1.${counter})`
// })

// divClick.addEventListener('mouseenter', (event) => {
//   console.log(event.target)
//   divClick.style.background = changeColor()
// })

// divClick.addEventListener('mouseleave', (event) => {
//   console.log(event.target)
//   divClick.style.background = changeColor()
// })

// CHANGE происходит в тот момент, когда фокус убирается с инпута
colorInput.addEventListener('change', (event) => {
    console.log(event.target.value)
    divClick.style.background = event.target.value
})

// начинается с зглавной буквы
// создаем объекты
// This constructor function may be converted to a class declaration.
// function User(name) {
//   this.name = name
// }

class User {
    constructor(props) {
        this.name = props.name
        this.age = props.age
        this.city = props.city
    }
}

class Admin extends User {
    constructor(props) {
        super(props)
        this.canModerate = props.canModerate
        this.access = props.access
    }
    generateId() {
        return Math.random() * 1000
    }
}

const admin = new Admin({
    name: 'Clark',
    age: 30,
    surName: 'Smalling',
    city: 'Smallville',
    canModerate: true,
    access: true,
})
console.log(admin.generateId())
// Инкапсуляция - капсула -что-то закрытое и что-то в нее прячем
// приватными свойствами и методами
// эти свойства и методы недоступны извне
// пользователь/дрйго разработчик не может получить к ним доступ

class AdminWithPriveligies extends Admin {
    #id
    constructor(props) {
        super(props)
        this.hasPrivelegies = props.hasPrivelegies
        //this.#id = AdminWithPriveligies.generateId() // инкапсулировано и недоступно
    }
    // static - массив доступен только на классе
    // недоступен на экземпляре
    static users = ['peter', 'clarck', 'bruce']
    // Polymorphism - poly - много
    // morphisme - форм
    // может метод меняться в ребенке
    // полиморфизм - Я могу переписать метод родителя в ребенке
    generateId() {
        return 'Я поменял эту функцию потмоу что ПОЛИМОРФИЗМ'
    }

    get id() {
        return this.#id
    }
    // set id(newId) {
    //   if (typeof newId !== 'number') throw new Error('itmust be a number')
    //   const changedId = newId * 1000
    //   this.#id = changedId
    // }
    // мы не можем напрямую изменять
    // getters and setters
}

console.log(AdminWithPriveligies.users)

const superAdmin = new AdminWithPriveligies({
    name: 'Clark',
    age: 30,
    surName: 'Smalling',
    city: 'Smallville',
    canModerate: true,
    access: true,
    hasPrivelegies: true,
    id: 1,
})
console.log(superAdmin.users)
console.log(superAdmin.generateId())
superAdmin.id = '11'
console.log(superAdmin)

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
}

const newObj = {}
console.log(Object.keys(object1))
//console.log(newObj.keys(object1))

class Animal {
    constructor() { }
    sayHi() {
        console.log('mouuuu')
    }
}

class Cat extends Animal {
    sayHi() {
        console.log('MEAOW')
    }
}
// полиморфизм - КОНЦЕПТ
// полиморфизм - изменение функции родителя в ребенке