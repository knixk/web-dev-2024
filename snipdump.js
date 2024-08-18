// dracula dark mode theme is dainty


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


// ------


function gamer() {
    return null;
}

gamer()

const var = 1;
const arr = [];
const obj = {}

const set = new Set(1,2,3,4);

setTimeout(() => {

}, 1000)

class Gamer {
    constructor() {
        this.name = null;
        this.age = null;
    }
    
    get showName() {
        return;
    }

    set changeName() {
        return;
    }
}


for (let i = 0; i < 100; i++) {
    console.log('first')
}

const gamer1 = new Gamer();

// obj.append("asdasd")
