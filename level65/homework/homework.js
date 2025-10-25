const box = document.getElementById("myBox");
const moveBtn = document.getElementById("moveBtn");

let pos = 0;
let direction = 1;
let isMoving = false;

moveBtn.addEventListener("click", function () {
  if (isMoving) return; 
  isMoving = true;

  const interval = setInterval(() => {
    if (pos >= 300) direction = -1;
    if (pos <= 0) direction = 1;

    pos += direction * 5;
    box.style.top = pos + "px";
  }, 30);
});


const countParagraph = document.getElementById("count");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

let count = 0;

plusBtn.addEventListener("click", function () {
  count++;
  countParagraph.textContent = count;
});

minusBtn.addEventListener("click", function () {
  count--;
  countParagraph.textContent = count;
});
