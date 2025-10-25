const previous = document.getElementById("previous");
const next = document.getElementById("next");
let image = document.getElementById("image");

const images = ["images.jfif", "images(1).jfif", "images(2).jfif"];

let index = 0;

function showImage(currentIndex) {
  index = currentIndex;

  if (currentIndex >= images.length) {
    index = 0;
  }
  else if (currentIndex < 0) {
    index = images.length - 1;
  }

  image.src = images[index];
}

previous.addEventListener("click", function() {
  showImage(index - 1);
});

next.addEventListener("click", function() {
  showImage(index + 1);
});
