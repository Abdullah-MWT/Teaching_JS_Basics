const myHeros = ['Abu-Bakar', 'Umer', 'Usman', 'Ali'];
const myPakistaniHeros = ['Imran Khan', 'Irfan Malik', 'Hisham sarwar', ]

// Using .push()
// myHeros.push(myPakistaniHeros);
// console.log(myHeros); 
// We wanted to join the above two arrays with push method but didn't work let's try any other

// Using .concat()
const mergedArrays = myHeros.concat(myPakistaniHeros)
console.log(mergedArrays);
// Now the .concat() method worked properly and merged 2 Arrays in good way

// Using Spread Operator like ...something....
const allHeros = [...myHeros, ...myPakistaniHeros];
console.log(allHeros);
// Now the Spread method also worked properly and merged 2 Arrays in good way


// But what if we have Array inside Array or Array in Array inside Array, So how to Handle that
// For this purpose we'll use .flat() which brings all the elements on one-Place by taking parameter
const complex_Array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const flat_Array = complex_Array.flat(Infinity);
console.log(flat_Array);


// Some other concepts used in Data-Scraping in Arrays
console.log(Array.isArray('Abdullah')); // To check wheather it's an array or not if not then chnage
console.log(Array.from('Abdullah')); // Now it's converted into array 
// But what if we have object inside Array let's Check
console.log(Array.from({
    Name: 'Abdullah'
}));







