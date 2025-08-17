let counter = 0;

const heading = document.getElementById('heading');

heading.onmouseout = function() {
  counter++;
  console.log("mouseout . counter =", counter);
};
