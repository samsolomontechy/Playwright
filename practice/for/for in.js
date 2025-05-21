const person = {
    name: "Sam",
    age: 25,
    city: "Carmel"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}