// +++++++++++++++ FUNCTIONS IN JS +++++++++++++++++

// 1. Functions Declaration
sayHello();
function sayHello(){
    console.log('Hello JS User');
}

sayHello(); 

// In the above function we have declared a function and then called it before it was declared.

// 2. Function Expression
let myFunction = function(){
    console.log('Hello JS User');
}
myFunction();

// In the above function we have declared a function and then called it after it was declared.

// 3. Functions with Parameters and Arguments also practised return()

function addNums(num1,num2) {
//    console.log(num1 + num2); not good practice
return num1 + num2;
// Now we can't write anything after return keyword and that won't be excuted
   
}

const result = addNums(5,6);
console.log(result); // now we're getting undefined in output, so must use return in function


// By using Rest Operator (...anyting) we will gather all the items into place/Array

function calculatePrice(value1,...item1Price){
    return item1Price
}

console.log(calculatePrice(200,300,400));

// Let's see that how can we pass Objects through Functions

const myObj = {
    itemName: 'Perfume',
    itemPrice: '$499'
}
function handleObjects(anyObject){
  console.log(`The Product Name is ${anyObject.itemName} and the Product Price is ${anyObject.itemPrice}`);
  
}

handleObjects(myObj)

// And we  can also directly Pass object at the function calling time just like

function handleObjectsDirectly(anyObject){
    console.log(`The Product Name is ${anyObject.userName} and the Product Price is ${anyObject.Price}`);
    
  }

handleObjectsDirectly({
    userName: 'Abdullah',
    Price: '$299'
})

// Let's see that how can we pass Arrays through Functions

const myProducts = ['Toys','Chocolates', 'Ice-Cream', 'Pizza', 'Mango'];

function handleArrays(getArray){
  return getArray[1]
}

console.log(handleArrays(myProducts));

// And we  can also directly Pass Arrays at the function calling time just like

function handleDirectArrays(getArray){
    return getArray[3]
}

console.log(handleDirectArrays(['Toys','Chocolates', 'Ice-Cream', 'Pizza', 'Mango']));


 

