
// Taking Factorial of anumber through For of Loop
const myNums = [2, 4, 6, 8, 10];  

for (const numFactorial of myNums) {

  let factorial = 1;
  for (let i = 1; i <= numFactorial; i++) {
    factorial = factorial * i
  }
  console.log(`The factorial of ${numFactorial} is:`, factorial);
}