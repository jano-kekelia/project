const greetingElement = document.getElementById('h1-1');
const button = document.getElementById('id-1');

button.addEventListener('click', function() { // fuction შექმნა იმისათვის რომ ავამუშავოთ ღილაკი
  greetingElement.textContent = 'hello, Luka!';   // ტექსტის შეცვლა ღილაკზე დაკლიკებისას
});