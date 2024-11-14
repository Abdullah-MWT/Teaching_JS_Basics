// For-of Loop or For Loop

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const Arr of myArray) {
    console.log(Arr);
    
}

// Handling Objects through For Loop

const studentsData = [{Name: 'Abdullah'},{Name: 'Zaryab'},{Name: 'Sufyan'}];

for (const objElements of studentsData) {

    const objKeys = Object.keys(objElements);
    console.log(objKeys);
    const objvalues = Object.values(objElements);
    console.log(objvalues);
}

// Taking Square of  anumber through For of Loop
 const myNums = [2, 4, 6, 8, 10];

 for (const numSquare of myNums) {
    console.log(`The square of ${numSquare} is:`, numSquare* numSquare);
    
 }

 // Taking both Object Keys and Values in a single for of loop
const myObj5 = {
    'Name': 'Abdullah',
    'Designation': 'Front-End Developer'
}

for (const [key, value] of myObj5) {
    console.log(key, ':-', value);
    
}