const gameName = "Super Mario Odyssey. Hey there i am abdullah";

console.log(gameName[0]); // Accessing it,s values like in Arrays

console.log(gameName.__proto__); // Proved that string is an object in raelity

let trimedGameName = gameName.trim() // One of the methods that we apply
console.log(trimedGameName);

console.log(gameName.charAt(3)); // checking that what char is there at third place
console.log(gameName.indexOf('M'));

let splittedValue = gameName.split(' ')
console.log(splittedValue.length);




