const calculator = (num1, num2, operator) => {
  let result;
  
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = 'Error: Division by zero';
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Error: Invalid operator';
  }
  
  return result;
};

const result = calculator(10, 5, '+');
console.log(result);