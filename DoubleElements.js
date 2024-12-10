const inputArr = ['a', 'a','b','c','d', 'e', 'e', 'f', 'g', 'g'];

let outputArr = []
let lastValue = null


for (const singleValue of inputArr) {
   
    if (singleValue !== lastValue) {
        outputArr.push(singleValue + singleValue)
    } else{
        outputArr.push(singleValue)
    }

    lastValue = singleValue
   
}

console.log(outputArr);



