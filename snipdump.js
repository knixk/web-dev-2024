// --

function Housekeeper(name, age) {
    this.name = name;
    this.age = age;

    this.clean = function() {
        console.log("Housekeeper cleans the house");
    }
}

const h1 = new Housekeeper("raj", 23)
const h2 = new Housekeeper("vinay", 22);

console.log(h1, h2)

h2.clean();

// ---