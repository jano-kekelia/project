const textContainer = document.getElementById("textContainer");

const newPara = document.createElement("p");
newPara.textContent = "ეს არის ახალი პარაგრაფი";

const oldPara = textContainer.querySelector("p");

textContainer.replaceChild(newPara, oldPara);



const buttonContainer = document.getElementById("buttonContainer");

const newSpan = document.createElement("span");
newSpan.textContent = "ეს არის ახალი span ელემენტი";

const oldButton = buttonContainer.querySelector("button");

buttonContainer.replaceChild(newSpan, oldButton);



const ul = document.getElementById("myList");

const newLi = document.createElement("li");
newLi.textContent = "ეს არის ახალი ელემენტი";

const oldLi = ul.querySelector("li");

ul.replaceChild(newLi, oldLi);



const oldH2 = document.querySelector("h2"); 

const newH1 = document.createElement("h1");
newH1.textContent = "ეს არის ახალი H1 სათაური";

oldH2.parentNode.replaceChild(newH1, oldH2);
