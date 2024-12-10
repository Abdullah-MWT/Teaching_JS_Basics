//  1. The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school.
// Implement a JavaScript function that takes an array of student names and assigns them to one of
// the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length
// less than 12), or Slytherin (length greater than or equal to 12)) based on the length of their names.

const sortStudentsByHouse = (studentNames) => {
     const Houses = {
        Gryffindor: [],
    Hufflepuff: [],
    Ravenclaw: [],
    Slytherin: []
     };

     studentNames.forEach(name => {
        if (name.length < 6) {
            Houses.Gryffindor.push(name)
        }
        else if(name.length < 8){
            Houses.Hufflepuff.push(name)
        }
        else if(name.length < 12){
            Houses.Ravenclaw.push(name)
        } else{
            Houses.Slytherin.push(name)
        }
     })

     return Houses
}

// Usage

const students = ["Harry", "Hermione", "Ron", "Draco", "Luna", "Cedric", "Neville", "Voldemort"];
const sortedHouses = sortStudentsByHouse(students);
console.log(sortedHouses);


// Filtering Out Numbers

const filterNumbers = (inputNums) => {
    const numsCatogs = {
        EvenNums: [],
        OddNums: [],
    }

    inputNums.forEach((nums) => {
        if (nums % 2 === 0) {
            numsCatogs.EvenNums.push(nums)
        } else {
            numsCatogs.OddNums.push(nums)
        }
    });


    return numsCatogs;


}

const myNums = [2,5,6,7,4,89,78,67];
const filteredNums = filterNumbers(myNums);
console.log(filteredNums);
