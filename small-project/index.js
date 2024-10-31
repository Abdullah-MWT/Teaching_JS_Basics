// This Small project which was done for Practice purpose, will find out the Decimal or Real Part of Num

const answerWord1 = 'What is Decimal-Part of the Number';
const answerWord2 = 'What is Real-Part of the Number';

const userSay = 'What Real-Part';

let myNum = 123.056;
let stringNum = myNum.toString();
let splittedParts = stringNum.split('.')
let splittedPart1 = splittedParts[0];
let splittedPart2 = splittedParts[1];

// console.log(splittedPart1);
// console.log(splittedPart2);

if (userSay.includes('Decimal-Part')) {
    console.log(splittedPart2);
} else if(userSay.includes('Real-Part')){
    console.log(splittedPart1);
} else{
    console.log('Try Again');
    
}






