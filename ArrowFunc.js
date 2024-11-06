// ++++++++++ Arrow Function and use of .this

// .this is used to access the current object or context of the function
const myinfo = {
    userName: 'Abdullah',
    closeFriend:'Zaryab',
    welcomeMessage: function(){
      console.log(`${this.userName}, Welcome to Our Website`);
      
    }
}

myinfo.welcomeMessage();
myinfo.userName = 'Zaryab'; // now the user name is changed as we hadn't hardcoded it
myinfo.welcomeMessage();

// Arrow Functions

const addTwo = (num1,num2) => {     // simple Array Function
      return num1 + num2
}

console.log(addTwo(4,7));

// Implicit Return in Arrow Functions

const addThree = (num1, num2, num3) => num1 + num2 + num3

console.log(addThree(6,6,6));

// Now what if we would have to pass any object in implicit return
// Here you'll get undefined so you will have to wrap object in paranthesis ()

const myObj = () => ({userName: 'Abdullah'})

console.log(myObj());




