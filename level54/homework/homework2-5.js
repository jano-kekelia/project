//2-5
let favoriteHobby = prompt("What's your favorite hobby?");
alert("Your favorite hobby is: " + favoriteHobby);

let firstName = prompt("What's your first name?");
let lastName = prompt("What's your last name?");
let fullName = firstName + " " + lastName;
alert("Your full name is: " + fullName);

let userMessage = prompt("Please enter a message:");
let pElement = document.querySelector("p");
pElement.textContent = userMessage;

let favoriteEmoji = prompt("What's your favorite emoji?");
alert("Your favorite emoji is: " + favoriteEmoji + " 😊\nThank you!");

let pageTitle = prompt("Enter a word to set the page's title:");
document.title = pageTitle;



