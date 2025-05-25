function formsubmit(event){
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Age:", age);


  name.value = "";
  email.value = "";
  age.value = "";
};
