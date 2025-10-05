function maxNumbers() {
  let max = -Infinity; 

  for (let num of arguments) {
    if (num > max) {
      max = num;
    }
  }
  
  return max;
}

const result = maxNumbers(5, 8, 12, 3, 7, 20, 15, 10, 25, 9);
console.log(result); 
