// const classList = { // add: function () {}, // remove: function () {}, // }

// classList - специальный объект со своими методами root.classList.add('container') root.classList.remove('container') // удаляет // переписывается предыдщуий класс // root.setAttribute('class', 'dark') //root.className = 'dark' // используется к Реакте, потому что class зарезервировано за классами

// root.classList.toggle()

// root.innerHTML = '
CARD
' небезопасно // createElement создаем элемент // innerText - для наполнения // append - крепим к родителю к root // добавить класс к карточке .user-card

// создать файл css добавить классы

// 1 часть пары // object keys values entries // for in цикл // spread operator // деструктуризация

// 2 часть пары // функция конструктор // class - constructor // this в объектах // static - статические методы и свойства // прототипы - prototypes

Ревью Object

Тип ключей, вложенность, in hasOwnProperty keys, values, entries, assign Деструктуризация Spread Operator

this контекст call, bind, apply отличие стрелочных функций от обычных

Classes

ООП Function constructor Classes constructor() props - объект в качестве параметров Наследование extends super prototype static dom в классах getter/setter приватные свойства

// стрелочные функции // события, типы событий // деструктуризация // спред оператор // тернарный оператор // типы данных примитвные и ссылочные // логические ?? || && // импорт и экспорт // запросы на сервер // функциональное программирование

// инкапсуляция - капсула (что-то закрытое) есть свойства, которые закрыты(инкапсулированы) внутри класса, мы не можем получить к ним доступ напрямую

мы используем getter setter для получения/изменения этих данных

// LibraryItem conctrutor id title isAvailable

summary1901jsjs

Classes -

Function constructor Classes -Es5/6 constructor() props - объект в качестве параметров inheritance - Наследование extends super prototype #private method and properties - encapsulation/abstraction getters setters static polymorphism - redefine a method of a parent in a child

событие на каком-то элементе dom addEventListener event.target

// SUMMARY 0202 const inputName = document.querySelector('#userName') const root = document.querySelector('#root')

// addEventListener // add - добавить // event событие // listener - слушатель inputName.addEventListener('input', (event) => { // console.log(event) // event это встроенный в JS объект // к которому мы имеем доступ во время обработки события //console.log(event.target.value) // ПОКАЗЫВАЕТ ЧТО ПРОИСХОДИТ - визуализация const data = event.target.value root.innerText = data }) // value = ВСЕ ЧТО ВВОДИТСЯ В ИНПУТ

// target - Returns the element that triggered the event // that triggered - который запустил // target - отображает элемент, кот. запустил событие // вся разработка состоит из событий

// СОБЫТИЕ ОБЪЕКТ // У него есть свойства // target это свойство объекта EVENT const event = { bubbles: true, cancelBubble: false, cancelable: false, composed: true, currentTarget: null, data: 'a', dataTransfer: null, defaultPrevented: false, detail: 0, eventPhase: 0, inputType: 'insertText', isComposing: false, returnValue: true, sourceCapabilities: null, srcElement: 'input#userName', target: 'input#userName', timeStamp: 1616.7999999523163, type: 'input', view: null, which: 0, }

// console.log(event.target)

Первая часть: // Атрибуты инпуты

// Основные события input, change, click, submit, mouseenter, mouseleave

Event - объект в JS event.target

function sum(a, b) { return a + b }

console.log(sum(3, 4))

function sum1(props) { // const {a,b} =props return props.a + props.b }

console.log( sum1({ a: 1, b: 100, }) )

class User { // конструктор вызывается когда создается новый экземпляр со словом new // встроен в язык и автоматически вызывается constructor(props) { this.name = props.name this.age = props.age this.city = props.city } // init(firstName) { // this.firstName = firstName // } } // класс это "фабрика" по производству объектов(инстансов, сущностей) // this специальное слово встроенное в язык, кот определяет контекст выполнения // объект из свойств - ключ: значение // object - property key:value // properties --> props const user1 = { name: 'Clark', age: 30, city: 'Smallville' }

// const user1 = { name: 'Clark', age: 30, city: 'Smallville' } // const user11 = new User(user1)

// this это объект перед точкой
