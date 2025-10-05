const student = {
    name: "John Doe",
    age: 16,
    grade: "A"
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
