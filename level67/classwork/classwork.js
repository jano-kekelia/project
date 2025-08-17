const images = ["image.png", "image copy.png", "image copy 2.png", "image copy 3.png"];
let index = 0;

document.getElementById("prev").onclick = function() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("id-1").src = images[index];
};

document.getElementById("next").onclick = function() {
    index = (index + 1) % images.length;
    document.getElementById("id-1").src = images[index];
};

setInterval(function() {
    index = (index + 1) % images.length;
    document.getElementById("id-1").src = images[index];
}, 3000);
