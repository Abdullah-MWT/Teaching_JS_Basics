const createMirrorString = (orignalString) => {
     const reversedString = orignalString.split('').reverse().join('')
     console.log(reversedString);
     
}

createMirrorString('iH')


// Reverse Array Elements

const reverseArray = (realArray) => {
    const reversedArr = [];
   realArray.forEach((arrElement) => {
    const reversedValue = arrElement.split('').reverse().join('');
   reversedArr.push(reversedValue)
  
   })

   return reversedArr
}

const myArr = ['Abdullah', 'Imran', 'Umer', 'Usman', 'Ali'];
console.log(reverseArray(myArr));

// Doing the same as above bu through for-of  loop

const myArr2 = ['halludbA', 'narmI', 'remU', 'namsU', 'ilA'];

const reverseArray2 = []

for (const singleName of myArr2) {
    const reversedValue1 = singleName.split('').reverse().join('');
    reverseArray2.push(reversedValue1)
    
}

console.log(reverseArray2);
