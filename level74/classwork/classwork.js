function dayOfWeek() {
    let dayNumber = parseInt(prompt("Enter a number (1-7):"));

    switch(dayNumber) {
        case 1:
            console.log("The day corresponding to 1 is Sunday.");
            break;
        case 2:
            console.log("The day corresponding to 2 is Monday.");
            break;
        case 3:
            console.log("The day corresponding to 3 is Tuesday.");
            break;
        case 4:
            console.log("The day corresponding to 4 is Wednesday.");
            break;
        case 5:
            console.log("The day corresponding to 5 is Thursday.");
            break;
        case 6:
            console.log("The day corresponding to 6 is Friday.");
            break;
        case 7:
            console.log("The day corresponding to 7 is Saturday.");
            break;
        default:
            console.log("Invalid input. Please enter a number between 1 and 7.");
    }
}

dayOfWeek();
