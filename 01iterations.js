// Iterations in JS

// 1. For Loop
for(let i = 0; i < 10; i++){
    console.log(`Number ${i}`);
}

// Print 5 table through for loop till 20
for (let number = 1; number < 20; number++) {
    console.log(`5 X ${number} =`, 5*number);
    
}

// Loop inside Loop   commented it for 

// for (let i = 0; i < 5; i++) {
//     console.log(`Outer loop is ${i}`);
    
//     for (let j = 0; j < 5; j++) {
//      console.log(`Ineer loop is ${j} with outer ${i}`);
     
        
//     };
    
// }

// Now with the help of nesting loops try to print 5 tables from 1 to 7

for (let a = 1; a < 5; a++) {
    console.log(`Table of ${a} is`);
    for (let b = 1; b <= 10; b++) {
        console.log(`${a} X ${b} = `, a*b);
         
    }
    
}

// Handling 