const li = document.createElement("li");
li.textContent = "New list item";
document.getElementById("myList").appendChild(li);

const p = document.createElement("p");
const txt = document.createTextNode("Hello World!");
p.appendChild(txt);
document.body.appendChild(p);

const button = document.createElement("button");
button.textContent = "Submit";
document.getElementById("formDiv").appendChild(button);
