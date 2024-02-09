// 0. JavaScript  многопоточный или однопоточный?

// 0.1 Что такое микротаски ?

// 0.2 Что такое макротаски?

// 0.3 Объясните как работает event loop

// 1.0 статусы у промиса?

// 1.1 какой тип данных возвращает then

// 1.2 Разница между then и catch

// 1.3 Для чего нужен finally

// 2.1 Что выведет следующий код?

console.log('before')
const start = Date.now()

while (true) {
    const current = Date.now()
    if (current - start > 5000) {
        break
    }
}

console.log('after')

// 2.1 Что выведет следующий код?
console.log('start')

const promise11 = new Promise((resolve, reject) => {
    console.log(1)
})

const fn1 = () => {
    console.log('3')
}

console.log('end')
// 2.2 Какой результат выполнения этого кода?

console.log('start')

const promise12 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(200)
})

promise12.then((data) => {
    console.log(data)
})

console.log('end')

// 2.3 Какой результат выполнения этого кода?

console.log('start')
// new Promise - конструктор промиса
const promise14 = new Promise((resolve, reject) => {
    console.log(1)
})

promise14.then((res) => {
    console.log(2)
})

console.log('end')

// 2.4 Какой результат выполнения этого кода?
// c setTimeout
console.log('start')

setTimeout(() => {
    console.log('setTimeout')
})

Promise.resolve().then(() => {
    console.log('resolve')
})

console.log('end')

// 3.1 функция job должна вернуть promise new Promise()
// промис должен разрешиться(resolve) через 2 секунды после setTimeout()
// вызывая job в дата - должно быть прокинуто 'hello world'
function job() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('hello world')
        }, 2000)
    })
}

job().then((data) => console.log(data))

//1. Написать промис, который будет резолвится через 1 секунду с тексом "УРА"
const prom = () => new Promise((resolve, reject) => setTimeout(() => resolve('Hourrayy'), 1000))
prom().then((data) => console.log(data))

//2. Написать промис который через 2 секунды негативно разрешается со словом OOUPS
const promise = () => new Promise((resolve, reject) => setTimeout(() => reject('OOUPS'), 2000))

promise()
    .then((data) => console.log(data))
    .catch((er) => console.log('error: ', er))

// 3.2 Функция всегда возвращает промис, если это не число то он rejected с ошибкой "error"
// (isNan(data))
// если нечетное то разрешается resolve через 1 секунду с "odd"
// если число четное то через две секунды возвращает отклоненный reject с 'even'

function processNumber(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number' || isNaN(data)) {
            reject(new Error('error'));
        } else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve('odd');
            }, 1000);
        } else {
            setTimeout(() => {
                reject(new Error('even'));
            }, 2000);
        }
    });
}

// Пример использования
const exampleData1 = 5;
const exampleData2 = 10;
const exampleData3 = 'not a number';

processNumber(exampleData1)
    .then(result => {
        console.log('Resolved:', result);
    })
    .catch(error => {
        console.error('Rejected:', error.message);
    });

processNumber(exampleData2)
    .then(result => {
        console.log('Resolved:', result);
    })
    .catch(error => {
        console.error('Rejected:', error.message);
    });

processNumber(exampleData3)
    .then(result => {
        console.log('Resolved:', result);
    })
    .catch(error => {
        console.error('Rejected:', error.message);
    });
