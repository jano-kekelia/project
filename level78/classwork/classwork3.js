let word = prompt("Enter a word:");

let booleanValue = prompt("Enter a boolean value (True or False):").trim();

if (booleanValue.toLowerCase() === "true") {
    console.log((word + " ").repeat(10).trim()); 
} else {
    console.log((word + " ").repeat(5).trim());   
}
