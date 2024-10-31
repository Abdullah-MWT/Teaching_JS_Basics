let score = 200;
console.log(score);

// We make special type of Number like this
let Balance = new Number(400);
console.log(Balance);


// let's change the above Number into string

let stringBalance = Balance.toString();
console.log(stringBalance);
console.log(typeof stringBalance);

// Some Prperties off Numbers in JS
let myNum = 273.35;
console.log(myNum.toFixed(1)); // fixes the limit of Nums after decimal
console.log(myNum.toPrecision(4)); // Precises the number of Digits in a number
console.log(myNum.toExponential(1)); // Return Num in exponential form with how many digits you want after decimal

// Note: As we have some limited properties for Numbers so to get more properties we may convert the num into string and then can use the properties of strings as well, Just Like =>
    let bankBalance = 127.45;
    let stringBankBalance = bankBalance.toString();
    console.log(typeof stringBankBalance); // We've converted num into stroing so can use stronig props
    console.log(stringBankBalance.length);
    console.log(stringBankBalance.includes(9));
    console.log(stringBankBalance.split('.'));
    
    
    
    
    






