let original = document.getElementById("myDiv");
let Clone = original.cloneNode(false); // false = არ იღებს შიგნით არსებულ ელემენტებს
document.body.appendChild(Clone);

// ამ კოდში ვიყენებთ cloneNode(false) მეთოდს, რომელიც მხოლოდ ტეგს აკოპირებს,
// შიგთავსისა და შიგნით არსებული ელემენტების გარეშე.

let originalDiv = document.getElementById("myDiv");
let deepClone = originalDiv.cloneNode(true); // true = იღებს შიგთავსსაც
document.body.appendChild(deepClone);


// cloneNode(true) ქმნის ელემენტის და მისი ყველა შიგთავსის სრულ კლონს.

//------------------------------------------------------------------------------

let newParagraph = document.createElement("p");
newParagraph.textContent = "hi";
document.body.appendChild(newParagraph);


// აქ ვქმნით ახალ <p> ელემენტს და ვამატებთ ტექსტს შიგნით.

let button = document.createElement("button");
button.textContent = "click me";
document.body.appendChild(button);


// ვქმნით ახალ ღილაკს და ვამატებთ ტესტურად body-ში.

//------------------------------------------------------------------------------



let container = document.getElementById("container");
let item = document.createElement("li");
item.textContent = "hello";
container.appendChild(item);


// ახალი <li> ელემენტი დაემატა `container` ელემენტში ბოლოში.

let img = document.createElement("img");
img.src = "image.jpg";
document.body.appendChild(img);

// ვქმნით <img> ელემენტს და ვამატებთ მას body-ში.

let img = document.createElement("img");
img.src = "image.jpg";
document.body.appendChild(img);


// ვქმნით <img> ელემენტს და ვამატებთ მას body-ში.

//------------------------------------------------------------------------------

let oldPara = document.getElementById("old");
let newPara = document.createElement("p");
newPara.textContent = "new p";

document.body.replaceChild(newPara, oldPara);


// `oldPara` ჩანაცვლდა `newPara`-ით body-ში.


let oldButton = document.getElementById("submitBtn");
let newButton = document.createElement("button");
newButton.textContent = "new button";

oldButton.parentNode.replaceChild(newButton, oldButton);

// ძველი ღილაკი ჩანაცვლდა ახალით.
