// The Sum Selector: You are working on a function that should sum all numbers in an array until it
// encounters a negative number. Write a function that performs this summation.

const sumElements = (arrElements) => {
    let sum = 0; // Initialize sum to store the total value

    for (const element of arrElements) {
        if (element < 0) {
            break; // Stop the loop when a negative number is encountered
        }
        sum += element; // Add the current element to the sum
    }

    return sum; 
}

const result = sumElements([1, 2, 3, 4, 5, -6, 7, 8, 9, 10]);
console.log(result);
