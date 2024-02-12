// let newDate = new Date();

// console.log("Year", newDate.getFullYear())
// console.log("Month", newDate.getMonth())
// console.log("Hours", newDate.getDate())

// new Date(year, month, day, hours, minuts, seconds, ms)
// let newDate = new Date(2000, 1, 10, 11, 55);

// console.log(Date.now());

let produtcs = [
    {
        id: 1,
        title: "Iphone 15",
        price: 1500
    },
    {
        id: 2,
        title: "Iphone 15",
        price: 1500
    },
    {
        id: 3,
        title: "Iphone 15",
        price: 1500
    }
]

// localStorage.setItem("cart", produtcs);
localStorage.setItem("cart", JSON.stringify(produtcs));
console.log("getItem", localStorage.getItem("cart"))
console.log("getItem parse", JSON.parse(localStorage.getItem("cart")))

function increment() {
    let count = localStorage.getItem("count");

    if (count) {
        count = Number(count) + 1;

        localStorage.setItem("count", count);
    } else {
        localStorage.setItem("count", 0);
    }

    updateResult();
}

function updateResult() {
    let count = localStorage.getItem("count");

    document.querySelector(".count").innerText = count;
}

function remove() {
    localStorage.clear()
    updateResult()
} 
