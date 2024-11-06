// var is a global scope variable and it's hoisted to the top of the code
// let and const are block scope variable and it's not hoisted
// const is block scope variable and it's not hoisted


// Hoisting is the process of moving variable and function declarations to the top of their scope

// Nested scope

function parentFn() {
    const userName = 'Imran Khan';
    console.log('I am parent and my child can access me but i can\'t');

    function childFn() {
        const website = 'Youtube';
        console.log(`UserName is ${userName} and he is using ${website}`); 
        // child can access parent elements 
    }
    
    // console.log(website); // Parent can't access it's child elements
    
    childFn()
    
}

parentFn()