// There are two ways to declare objects in JS
// 1. Object Literal
// 2. Object Constructor

// Here we will practice just Object literals, In this type of objects we simply define key and value directly inside the curly braces, just like

const mySymbol1 = Symbol('symbol1');
const mySymbol2 = Symbol('symbol2')

const myInfo = {
    Name: 'Abdullah',
    Class: '11th',
    mySymbol1: 'symkey1',
    [mySymbol2]: 'symbol2'
}

// Now how to access the key,Values from Objects, there are 2 ways and why you should know both ways

console.log(myInfo.Name); // 1st and most used way
console.log(myInfo["Class"]); // There are some key,value which are not accessible with the 1st method, just like when we want to declare symbols inside objects
console.log(typeof myInfo.mySymbol1); // so it's even right but it's type is string but we wanted symbol
console.log(typeof myInfo[mySymbol2]); // so this is correct way of accessing and writing Symbols in JS


// How can we change the value in Objects or Freez the object o that no one can change it 

myInfo.Class = '12th'; // Here we can change the values 
console.log(myInfo.Class);

// Now let's freez the object so that no changes should be made

Object.freeze(myInfo); // Now it's freezed   Try to change it's values....
myInfo.Name = 'Zaryab';
console.log(myInfo.Name); // Name is not changes because object is freezed

// ++++++++++++++ Using Functions in JS +++++++++++++++++++
const newObj = {
    favGame:'Cricket',
    bestFriend: 'Zaryab',
}

newObj.greetings = function(){
    console.log('Hello JS User'); // 1st way
    console.log(`Hello Abdullah's Friend ${this.bestFriend}`); // 2nd way
    
}

console.log(newObj.greetings());









