// ++++++++++++++ Operstions +++++++++++

let value = 10;
let NegativeValue = -value;
console.log(NegativeValue);

// Basic Operations In JS
console.log(5+2);
console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);


// Joining Different DataTypes

// String With String
let str1 = 'Hello';
let str2 = ' Abdullah';

let str3 = str1 + str2;
console.log(str3);

// String With Number  
let str = '3';
let Num = 3;

let strPlusnum = str + Num; // Here it just joins both of them
console.log(strPlusnum);
// And Same goes with Num + str as above


// But What if String with Number + Number 
let str4 = '1';
let Num1 = 2;
let Num2 = 3;

let strNumNum = str4 + Num1 + Num2;
console.log(strNumNum);
// In JS it just checks the DataType of 1st Element and then changes all other in to the format of that first one, just like in the above example, As the 1st one is string so it has treated all others as strings.





