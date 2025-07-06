const button = document.getElementById("button");

function changeBackgroundColor() {
    button.style.backgroundColor = "black";
}

button.addEventListener("click", changeBackgroundColor);