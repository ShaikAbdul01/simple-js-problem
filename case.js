// String
const userName = "ShaIk";
const userInput = "ShaiK";

console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userInput.toLocaleLowerCase());

if (userName.toLowerCase() === userInput.toUpperCase()) {
  console.log("Vaild");
} else {
  console.log("Invaild");
}
