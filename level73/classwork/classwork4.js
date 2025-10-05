for (let num = 1; num <= 100; num++) {
    if (num % 5 === 0 && num % 7 === 0) {
        continue; 
    }
    console.log(num);
}
