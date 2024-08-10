// https://www.appbrewery.co/p/web-development-course-resources

// -- class / constructor

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
// call backs

debugger;

function anotherEventListener(event, callback) {

    let someEvent = {
        key: "p"
    }

    if (someEvent.key === event) {
        callback(event)
    }

}

anotherEventListener("p", (e) => {
    console.log(e, " was clicked")
})

