// создаем класс School у него три поля name, numberOfStudents, level
class School {
    constructor(name, numberOfStudents, level) {
        this.name = name
        this.numberOfStudents = numberOfStudents
        this.level = level
    }
    // причины хранить статические свойства
    // внешнюю переменную
    // внутри класса
    static substituteTeachers = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor']
    // статический метод chooseTeacher
    // возвращает элемент (строку) массива
    // Math.random()
    static chooseTeacher() {
        const random = Math.floor(Math.random() * School.substituteTeachers.length)
        return School.substituteTeachers[random]
    }
}
// создать внутри класса статическое свойство
// console.log(School.substituteTeachers) //
const newShool = new School('a', 22, 'primary') // экземпляр
// console.log(newShool.substituteTeachers) // undefined
console.log(School.chooseTeacher())
newShool.chooseTeacher()
// STATIC - статический
// методы и свойства доступны ТОЛЬКО!!! на классе
// они не доступны на экзеплярах классов

Object // класс - глобальный объект
const user = {
    id: 1,
    city: 'Berlin',
    // ключ: значение
    // key: value
}
const user2 = {
    id: 2,
}
// keys - это статический метод
console.log(Object.keys(user)) // возвращает ВСЕ ключи объекта
// массив строк
console.log(user2.keys(user)) // НЕТ потому что keys() статический метод
// работает только!! на классе
const a1 = [1]
console.log(a1.isArray([])) // a1.isArray is not a function
console.log(Array.isArray([]))
console.log(Array.isArray('a'))

class PrimarySchool extends School {
    constructor(name, numberOfStudents, level) {
        super(name, numberOfStudents, level)
        
    }
}
super(pickUpPolicy)
