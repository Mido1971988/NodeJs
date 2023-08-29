// require("./add")
// const addFn = require("./add")

// const sum = addFn.add(1,2) // when using exports
// const sum = addFn(1,2) // when using module.exports 
// console.log(sum)

// require("./batman");
// require("./superman");

// const Bat = require("./batman");
// const Super = require("./superman");

// console.log(Bat); // Batman because we wrote in superman.js module.exports = superhero; 
// console.log(Super); // empty object because we wrote in superman.js exports = superhero; 

// -------import Json File
// const data = require("./data.json")
// console.log(data)
// console.log(data.age)

// -------built-in module Path 

const path = require("node:path");

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));

// console.log(path.join("folder1", "folder2", "index.html")); // will join all together
// console.log(path.join("/folder1", "folder2", "index.html")); // will join all together
// console.log(path.join("/folder1", "//folder2", "index.html")); // will join all together
// console.log(path.join("/folder1", "//folder2", "../index.html")); // output : /folder1/index.html because we go up on step because of ..
// console.log(path.join(__dirname, "data.json"));

// console.log(path.resolve("folder1", "folder2", "index.html")); // will add file location because you did not add / to tell it that is the absolute path not your file location
// console.log(path.resolve("/folder1", "folder2", "index.html")); // /folder1 means this is the absolute path so will not add you file location
// console.log(path.resolve("/folder1", "//folder2", "index.html")); // //folder2 means this is root folder
// console.log(path.resolve("/folder1", "//folder2", "../index.html")); // output : /index.html because folder2 is the root and you go up by using .. so will be only index.html
// console.log(path.resolve(__dirname, "data.json"));

// ---- buil-in Event
// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();

// // Register a listener
// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// });

// // Register another listener
// emitter.on("order-pizza", (size) => {
//     if (size === "large") {
//         console.log("Serving complimentary drink");
//     }
// });

// // Emit an event
// emitter.emit("order-pizza", "large", "mushrooms");

//----- extend with built-in event

const EventEmitter = require("events");

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(size, topping) {
        this.orderNumber++;
        this.emit("order", size, topping);
    }

    displayOrderNumber() {
        console.log(`Current order number: ${this.orderNumber}`);
    }
}

class DrinkMachine {
    serveDrink(size) {
        if (size === "large") {
            console.log("Serving complimentary drink");
        }
    }
}

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();