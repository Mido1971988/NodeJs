const upperCase = require("upper-case").upperCase

function greet(name){
    console.log(upperCase(`Welcome ${name}!`))
}

greet("Soliman")
module.exports = greet;