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

// const EventEmitter = require("events");

// class PizzaShop extends EventEmitter {
//     constructor() {
//         super();
//         this.orderNumber = 0;
//     }

//     order(size, topping) {
//         this.orderNumber++;
//         this.emit("order", size, topping);
//     }

//     displayOrderNumber() {
//         console.log(`Current order number: ${this.orderNumber}`);
//     }
// }

// class DrinkMachine {
//     serveDrink(size) {
//         if (size === "large") {
//             console.log("Serving complimentary drink");
//         }
//     }
// }

// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();

// pizzaShop.on("order", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`);
//     drinkMachine.serveDrink(size);
// });

// pizzaShop.order("large", "mushrooms");
// pizzaShop.displayOrderNumber();

// ------ buil-in fs(file system)
// const fs = require("node:fs");
// // sync method
// const fileContents = fs.readFileSync("./file.txt", "utf8");
// console.log(fileContents);
// // when callback function it's 1st param is error called ( error first callback pattern  )
// // async method
// fs.readFile("./file.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// // sync method
// fs.writeFileSync("./greet.txt", "Hello World");
// // async method
// fs.writeFile("./greet.txt"," Hello Vishwas",{flag: "a",}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File written");
//     }
// });

//----- fs / promise
// const fs = require("node:fs/promises");

// console.log("First");

// async function readFile() {
//     try {
//         const data = await fs.readFile("file.txt", "utf8");
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// readFile();

// // fs.readFile("file.txt", "utf8")
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err));

// console.log("Second");

// ----- Stream
// const fs = require("fs");

// const readableStream = fs.createReadStream("./file.txt", {
//     encoding: "utf8",
//     highWaterMark: 2,
// });

// const writeableStream = fs.createWriteStream("./file2.txt");

// data event
// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk);
// });

// pipe method instead of data event
// readableStream.pipe(writeableStream);

// chained pip ( works only with specific destination stream types : readable , duplex or transform Streams)
// const zlib = require("zlib");
// const gzip = zlib.createGzip(); // transform stream type
// readableStream.pipe(gzip).pipe(fs.createWriteStream("./file2.txt.gz"));

// readableStream.on("end", () => {
//     console.log("Done reading");
// });

// readableStream.on("error", (err) => {
//     console.log(err);
// });


// ----http module

// const http = require("node:http");
// const fs = require("node:fs")

// const server = http.createServer((req , res)=>{
//     const superHero = {name : "Batman"}
//     // const html = fs.readFileSync("./index.html" , "utf-8")
//     let html = fs.readFileSync("./index.html" , "utf-8")
//     const name = "Soliman"
//     html = html.replace("{{name}}" , name)
    
//     // res.writeHead(200 , {"Content-Type" : "text/plain"})
//     // res.writeHead(200 , {"Content-Type" : "application/json"})
//     // res.writeHead(200 , {"Content-Type" : "text/html"})
//     res.writeHead(200 , {"Content-Type" : "text/html"})

//     // res.end("Hello World!")
//     // res.end(JSON.stringify(superHero))
//     // res.end("<h1>Hello World</h1>")
//     // res.end(html)
//     // fs.createReadStream("./index.html").pipe(res) // or fs.createReadStream(__dirname + "/index.html").pipe(res) // /index.html not ./index.html
//     res.end(html)
// });

// server.listen(3000 , ()=>{
//     console.log("Server is Listening")
// });

// ---- Routing 
// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Home page");
//     } else if (req.url === "/about") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("About Page");
//     } else if (req.url === "/api") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(
//         JSON.stringify({
//             firstName: "Bruce",
//             lastName: "Wayne",
//         })
//         );
//     } else {
//         res.writeHead(404);
//         res.end("Page not found");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// -------- Thread loop
const crypto = require("crypto");
const https = require("https");

process.env.UV_THREADPOOL_SIZE = 4;

const start = Date.now();

const MAX_CALLS = 4;

for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
    });

    // https
    //     .request("https://www.google.com", (res) => {
    //     res.on("data", () => {});
    //     res.on("end", () => {
    //         console.log(`Request: ${i + 1}`, Date.now() - start);
    //     });
    //     })
    //     .end();
}