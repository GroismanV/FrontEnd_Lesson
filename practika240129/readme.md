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
