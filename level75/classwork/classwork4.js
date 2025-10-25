function parentFunction() {
  let parentVar = "hi"; 

  function innerFunction() {
    console.log(parentVar); 
  }

  innerFunction();  
}

parentFunction();  
