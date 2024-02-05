// Синхронный код и асинхронный код

// <-------- START ------->

// Синхронный код

// console.log("Начало кода!");
// for (let i = 0; i < 10; i++) {
//     console.log("i", i);
// }
// console.log("Конец кода!");

// <-------- END ------->

// <-------- START ------->

// Асинхронный код

// setTimeout(() => {
//     console.log("SetTimeout 1")
// }, 3000);

// setInterval(() => {
//     console.log("setInterval 2")
// }, 2000);

// setTimeout(() => {
//     console.log("setTimeout 1")
// }, 0);

// console.log("console 1");

// setTimeout(() => {
//     console.log("setTimeout 2")
// }, 0);

// console 1
// setTimeout 1
// setTimeout 2

// <-------- END ------->


// <-------- START ------->
// let data = [];

// setTimeout(() => {
//     data.push(
//         {
//             id: 1,
//             name: "Jon",
//             isAdmin: true
//         },
//         {
//             id: 2,
//             name: "Bob",
//             isAdmin: false
//         },
//         {
//             id: 3,
//             name: "Anna",
//             isAdmin: false
//         },
//     )
// }, 0)

// let searchData = data.find(user => user.id === 1); // undefined

// console.log("searchData", searchData);

// setTimeout(() => {
//     let users = data.find(user => user.id === 1); // [...]

//     console.log("SetTimeout users", users);
//     console.log("SetTimeout searchData", searchData);
// }, 3000)
// <-------- END ------->


// let data = [];

// let getAllUsers = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             data.push(
//                 {
//                     id: 1,
//                     name: "Jon",
//                     isAdmin: true
//                 },
//                 {
//                     id: 2,
//                     name: "Bob",
//                     isAdmin: false
//                 },
//                 {
//                     id: 3,
//                     name: "Anna",
//                     isAdmin: false
//                 },
//             )

//             resolve(data);
//         }, 5000)
//     })
// }

// let findUser = (id) => {
//     return new Promise((resolve, reject)=>{ 
//         let searchData = data.find(user => user.id === id);

//         resolve(searchData);
//     })
// }

// let checkIsAdmin = (user) => {
//     return new Promise((resolve, reject)=>{ 
//         if(user.isAdmin){
//             resolve(`Привет дорогой Админ ${user.name}`)
//         }else {
//             reject(`Это не Админ!`)
//         }
//     })
// }

// console.log(getAllUsers()); // Promise {<pending>}

// Объект Promise в JavaScript имеет три возможных состояния (статуса):
// 1. Pending (ожидание): Исходное состояние Promise. Значение обещания не определено, и оно остается в ожидании выполнения или отклонения.
// 2. Fulfilled (выполнено): Состояние, когда Promise успешно выполнено. Значение, связанное с обещанием, теперь доступно,
//    и все соответствующие обратные вызовы, связанные с методом then, будут вызваны с этим значением.
// 3. Rejected (отклонено): Состояние, когда Promise отклонено. Это происходит, когда происходит ошибка или отказ в выполнении обещания.
//    В этом случае все связанные обратные вызовы с методом catch или вторым аргументом метода then для обработки отклонения будут вызваны с соответствующей ошибкой.

// getAllUsers()
//     .then((resolve)=>{
//         console.log(resolve); // Fulfilled (выполнено)

//         return findUser(2);
//     })
//     .then((user)=>{
//         console.log("findUser", user)

//         return checkIsAdmin(user)
//     })
//     .then((msg)=>{
//         console.log(msg)
//     })
//     .catch(err => console.log(err))
//     .finally(()=> console.log("finally"))



// let func1 = () => {
//     console.log("1")
// }

// let func2 = () => {
//     setTimeout(() => console.log("2"), 1000)
// }

// let func3 = () => {
//     console.log("3")
// }

// func1()
// func2()
// func3()

// 1, 3, 2


// console.log(new Promise((resolve, reject) => {}))

// let func1 = () => {
//     return new Promise((resolve, reject) => {
//         resolve("1");
//     })
// }

// let func2 = () => {
//     return new Promise((resolve, rej) => {
//         setTimeout(() => resolve("2"), 5000);
//     })
// }

// let func3 = () => {
//     return new Promise((resolve, rej) => {
//         resolve("3");
//     })
// }

// func1()
//     .then(res => {
//         console.log(res); // 1

//         return func2();
//     })
//     .then(res => {
//         console.log(res); // 2

//         return func3();
//     }) 
//     .then(res => {
//         console.log(res); // 3
//     })
//     .catch(err => console.log(err))



// let foo = () => console.log("1");
// let bar = () => console.log("2");
// let bar = () => setTimeout(() => console.log("2"), 2000);
// let baz = () => console.log("3");

// foo()
// bar()
// baz()


// let first = () => console.log("1");
// let second = () => setTimeout(() => console.log("2"), 2000);
// let third = () => {
//     console.log("3")

//     Promise.resolve().then(()=>{
//         console.log("Third promise 1")
//     })

//     Promise.resolve().then(()=>{
//         console.log("Third promise 2")
//     })
// }
// let fourth = () => console.log("4");

// first()
// second()
// third()
// fourth()

// В JavaScript EventLoop также есть понятие приоритета.
// Задачи с более высоким приоритетом называются мИкрозадачами. Например: Promise, ObjectObserver, MutationObserver, process.nextTick, async/await.
// Задачи с более низким приоритетом называются мАкрозадачами. Например: setTimeout, setInterval и XHR.

// Интерпретатор JavaScript всегда сначала выполняет синхронный код, а затем асинхронный.
// Микрозадачи имеют приоритет над макрозадачами.
// Макрозадачами - Таймеры, События клик, загрузка, изображения
// Микрозадачами - Промисы, queueMicrotask, mutationObserver


// console.log("start")
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// })
// console.log("end");
// start 1 end


// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
// })

// promise1.then(res => {
//     console.log(res);
// })

// console.log('end');

// start 1 end 2 



// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })

// promise1.then(res => {
//     console.log(res)
// })

// console.log('end');

// start 1 3 end 2


// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// })

// promise1.then(res => {
//     console.log(2);
// })

// console.log('end');

// start 1 end


// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//     console.log(res)
// })

// console.log('end')

// start middle 1 end success


console.log('start')

Promise.resolve(1).then((res) => {
    console.log(res)
})

Promise.resolve(2).then((res) => {
    console.log(res)
})

console.log('end')

// start end 1 2