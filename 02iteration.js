// While and Do-while loop

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}


// Handling Arrays through while loop

const myArr = ['Apple', 'Samsung', 'Xiomi', 'Oppo', 'Vivo', 'Realme', 'Techno'];

let arrIndex = 0;

while (arrIndex < myArr.length) {
    console.log(`Value of arrIndex is ${myArr[arrIndex]}`);
    arrIndex = arrIndex + 1
}

// Handling Object through while loop
const myObj = {Name:'Abdullah', Friend: 'Zaryab', Viialge: 'Ghazi Khel'}

let values = 0;

while (values < Object.values(myObj).length) {
    console.log(Object.values(myObj));
    values = values+1
    
}


//  Do While loops

let number = 1;

do {
    console.log(`Number is ${number}`);
    number = number + 1
    
} while (number <= 10);
