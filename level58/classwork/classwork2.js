function discountFunc() {
  let ageInput = prompt("Enter your age:");
  let age = Number(ageInput);

  if (isNaN(age)) {
    alert("Enter your number correctly.");
    return;
  }

  if (age < 18) {
    alert("your discount is: 20%");
  } else if (age >= 18 && age < 65) {
    alert("your discount is: 5%");
  } else {
    alert("your discount is: 10%");
  }
}
