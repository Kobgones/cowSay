const cowsay = require("cowsay");
const { myName, campus } = require("./information");

console.log(cowsay.say({text :`Hi, i'm ${myName} from ${campus} campus !`}))