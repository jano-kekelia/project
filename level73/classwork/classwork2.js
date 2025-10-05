let numbers = [];
let i = 0;

do {
  numbers.push(i + 1); 
  i++;
} while (i < 5);

for (let num of numbers) {
  console.log(num);
}
