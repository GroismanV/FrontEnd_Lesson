class LibraryItem {
    #id
    #title
    #isAvailable
    #amount
    #price
    constructor(title, isAvailable, amount, price) {
        this.#id = LibraryItem.generateId()
        this.#title = title
        this.#isAvailable = isAvailable
        this.#amount = amount
        this.#price = price
    }

    get id() {
        return this.#id
    }

    get title() {
        return this.#title
    }
    get isAvailable() {
        return this.#isAvailable
    }
    get itemInformation() {
        return `id is ${this.#id} and title is ${this.#title}`
    }
    get sum() {
        return this.#amount * this.#price
    }

    // set id(newId) {
    //   if (typeof newId !== 'number') {
    //     console.log('Id must be a number')
    //   }
    //   this.#id = newId
    // }

    // статический метод, который будет генерировать за нас ключ
    // Math.floor() Math.random()  ключ от 1 до 1000
    // generateId()
    static generateId() {
        return Math.floor(Math.random() * 1000) + 1
    }

    set title(newTitle) {
        this.#title = newTitle
    }
    // если не является булевым значеним, то выдаем ошибку что переменная должна быть true/false
    set isAvailable(newStatus) {
        if (typeof newStatus !== 'boolean') {
            console.log('it must be a boolean value')
        }
        this.#isAvailable = newStatus
    }
}

const libItem = new LibraryItem('AA', true, 10, 100)
console.log(libItem)
console.log(libItem.title)
const libraryInstance = new LibraryItem(1, 'book', true, 3, 100)
// используем геттер для того чтобы получить данные
// геттер эта функция - но мы используем его как просто свойство

// геттеры для все свойств

// сеттеры для свойств

//когда заносим в сеттер id не число, то у нас вывводится ошибка в консоль, id должно быть числом

// новый класс Book расширяем libraryItem
// author, genre, numPages
// все наследуем от родителя
// все свойства приватные

class Book extends LibraryItem {
    #author
    #genre
    #numPages
    constructor(title, isAvailable, amount, price, author, genre, numPages) {
        super(title, isAvailable, amount, price) // СВЯЗЬ С РОДИТЕЛЕМ
        this.#author = author
        this.#genre = genre
        this.#numPages = numPages
    }
}
// конструктор РЕБЕНКА = Свойства Родителя (super) + новые свойства
class DVD extends LibraryItem {
    #director
    #duration
    #releaseYear
    constructor(title, isAvailable, amount, price, director, duration, releaseYear) {
        super(title, isAvailable, amount, price) // он КОПИРУЕТ/ВЫЗЫВАЕТ конструктор РОДИТЕЛЯ
        this.#director = director
        this.#duration = duration
        this.#releaseYear = releaseYear
    }
}
// constructor, extends, super, #, static, getter, setter

// Magazine LibraryItem
// publisher, issueNumber = новые свойства приватные
// constructor - super

class Magazine extends LibraryItem {
    #publisher
    #issueNumber
    constructor(title, isAvailable, amount, price, publisher, issueNumber) {
        // ВСЕ НАСЛЕДОВАЛ ОТ РОДИТЕЛЯ
        super(title, isAvailable, amount, price)
        this.#publisher = publisher
        this.#issueNumber = issueNumber
    }
}

class Library {
    #items = []
    // метод добавляет экземпляр класса libraryItem/Magazine etc. в массив items
    // this.#items
    addItem(item) {
        this.#items.push(item)
    }
    removeItems(itemToDelete) {
        // id не совпадает - элемент остается в новом массиве
        // id совпадает  элемент удаляется
        this.#items.filter((item) => item.id !== itemToDelete.id)
    }
    //  реализовать функцию removeItem кот позволяет удалять элемент из массива items
    get items() {
        return this.#items
    }
}

const mag = new Magazine('Elle', true, 1, 100, 'elle', ' 11.08')
const mag2 = new Magazine('Elle1', true, 1, 100, 'elle1', ' 11.08')

const newLibrary = new Library()
newLibrary.addItem(mag)
newLibrary.addItem(mag2)
console.log(newLibrary.items)

// id всегда УНИКАЛЕН
const elementToDelete = { id: 1, name: 'iphone' }

const arr = [
    { id: 1, name: 'iphone' },
    { id: 2, name: 'xiaomu' },
    { id: 3, name: 'galaxy' },
    { id: 100, name: 'ыфыа' },
]
const newArr = arr.filter((el) => {
    return el.id !== 1 // если el.id ===1 это тру то el добавляется в новый массив
})
//console.log(newArr)

function deleteElement(arr, elemToDelete) {
    return arr.filter((el) => el.id !== elemToDelete.id)
}

console.log(deleteElement(arr, elementToDelete))