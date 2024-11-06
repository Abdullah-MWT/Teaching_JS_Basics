// IIfe is called Immediately Invoked Function Expression also it creates a private scope, protecting them from the global scope
// It's a Function that runs as soon as it's called

// in IIFE the simple function is closed in brackets () and then put one more/calling bracket at the end of that function

(function myinfo(a) {
    var a = 7;
    console.log(a);
    
})()

var a = 8;
console.log(a);

// Now we can see that the var values are not clashing or replacing each other as it would do before

// Arrow Functons in IFFE

((name) => {
  console.log(`Hello! ${name}`);
  
})('Abdullah');

