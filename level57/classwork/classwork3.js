const myObj = {
    name: "jano",
    age: 15,
    city: "Tbilisi",

    printName: function() {
        console.log(this.name);
    },

    printAge: function() {
        console.log(this.age);
    },

    printCity: function() {
        console.log(this.city);
    }
};

myObj.printName(); 
myObj.printAge();  
myObj.printCity(); 
