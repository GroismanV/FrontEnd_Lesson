let button = document.querySelector(".btn");

// button.onclick = function(){
//     console.log("Click 1");
// }

// button.onclick = function(){
//     console.log("Click 2");
// }

// button.addEventListener("click", function(){
//     console.log("Click 1");
// });

// button.addEventListener("click", function(){
//     console.log("Click 2");
// })

// let count = 0;

// function showAlert() {
//     count++;

//     // if(count >= 1){
//     //     button.removeEventListener("click", showAlert);
//     // }

//     console.log("This is Alert!", count);
// }

// button.addEventListener("click", showAlert)


// button.addEventListener("click", showAlert, { once: true })

let elem1 = document.querySelector(".elem-1");
let elem2 = document.querySelector(".elem-2");
let elem3 = document.querySelector(".elem-3");

elem1.addEventListener("click", function () {
    console.log("Clicked on elem-1")
})

// elem2.addEventListener("click", function(){
//     console.log("Clicked on elem-2")
// }, {capture: true})
elem2.addEventListener("click", function () {
    console.log("Clicked on elem-2")
})

elem3.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("Clicked on elem-3")
})


let link = document.querySelector(".link");

link.onclick = getName;

function getName(event) {
    event.preventDefault();
    console.log(event)
    console.log("Hello!")
}

document.body.addEventListener("contextmenu", function (e) {
    e.preventDefault();

    alert("Hello Developer!!!")
})