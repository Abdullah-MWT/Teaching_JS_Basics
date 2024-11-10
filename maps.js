// Map in JS

// Map is a collection of key-value pairs, where each key is unique in the map and modifies the array instead of replacing it.

//Example #1
const myNums = [56, 85, 67, 87, 34, 56, 89];

const modifiedArray = myNums.map(score => (score >= 60 ? 'Pass' : 'Fail'));

console.log(modifiedArray);

//Example #2
// Adding one more property to Object
const myInfo = [{Name: 'Abdullah', favPerson: 'Imran Khan'}, {Name: 'Zaryab', favPerson: 'M. Tariq Masood'}, {Name: 'Sufyan', favPerson: 'M. Taqi Usmani'},  ];

const myInfoModifiedObject = myInfo.map(addProperty => ({
    ...addProperty,
    favDrink: 'GreenTea'
}));

console.log(myInfoModifiedObject);

// Example #3 performed on the above myInffo Array

const myArrays = [[1,2,3],[4,5,6]]
const myInfoModifiedArrays = myArrays.map(addArray => ([
    ...addArray,
    [7,8,9]
]))

console.log(myInfoModifiedArrays);


