let htmlElement = document.documentElement;
let headElement = document.head;
let bodyElement = document.body;

// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);

let firstChildNode = bodyElement.firstChild;
let lastChildNode = bodyElement.lastChild;

// console.log("firstChildNode", firstChildNode)
// console.log("lastChildNode", lastChildNode)

// let childNodes = bodyElement.childNodes;
// console.log(childNodes);
// console.log(bodyElement.hasChildNodes());

// for (let node of childNodes) {
//     console.log(node);
// }

// for (let i = 0; i < childNodes.length; i++) {
//     const element = childNodes[i];
//     console.log(element)
// }

// let prevSiblingNode = bodyElement.previousSibling;
// let nextSiblingNode = bodyElement.nextSibling;
// let parentNode = bodyElement.parentNode;

// console.log("prevSiblingNode", prevSiblingNode);
// console.log("nextSiblingNode", nextSiblingNode);
// console.log("parentNode", parentNode);

// let bodyChildren = bodyElement.children;
// console.log(bodyChildren)

// let books = document.querySelector(".books");
// console.log(books)
// let liveBooks = books.children;
// let notLiveBooks = document.querySelectorAll(".item");

// console.log(liveBooks);
// console.log(notLiveBooks);

// console.log(liveBooks.length);
// console.log(notLiveBooks.length);

// liveBooks[0].remove()
// console.log(liveBooks.length);
// console.log(liveBooks[0]);

// notLiveBooks[0].remove();
// console.log(notLiveBooks.length);
// console.log(notLiveBooks[0]);

// let booksItemFirst = document.querySelector(".item-1");
// let parentElements = booksItemFirst.closest(".books");
// console.log(parentElements);

let textElement = document.querySelector(".item-2");
// console.log(textElement);

// let parentElement = textElement.parentElement;
// let prevElement = textElement.previousElementSibling;
// let nextElement = textElement.nextElementSibling;
// console.log("prevElement", prevElement);
// console.log("nextElement", nextElement);

let element1 = document.querySelector(".item-1");
let element2 = document.querySelector(".item-2");
let element3 = document.querySelector(".item-3");

let elementContentInner = element1.innerHTML;
let elementContentOuter = element2.outerHTML;
let elementContentTextContent = element3.textContent;
console.log(elementContentInner);
console.log(elementContentOuter);
console.log(elementContentTextContent);

element1.innerHTML = "This is <span>InnerHTML</span>";
element2.outerHTML = "This is <span>outerHTML</span>";
element3.textContent = "This is <span>textContent</span>";

let boxElement = document.querySelector(".box");
// boxElement.before("This is before element!");
// boxElement.after("This is after element!");

// boxElement.prepend("This is prepend element! 1")
// boxElement.prepend("This is prepend element! 2")
// boxElement.prepend("This is prepend element! 3")

// boxElement.append("This is append element! 1")
// boxElement.append("This is append element! 2")
// boxElement.append("This is append element! 3")
let titleElement = document.createElement("h2"); // <h2></h2>
titleElement.innerText = "This is createElement method !"; // <h2>This is createElement method !</h2>
boxElement.append(titleElement);
boxElement.append(titleElement);
boxElement.append(titleElement);

for (let i = 0; i < 10; i++) {
  let titleElement = document.createElement("h2"); // <h2></h2>
  titleElement.innerText = "This is createElement method  " + i;

  boxElement.append(titleElement);
}
