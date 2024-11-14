// ++++++++++++ Objects in Depth ++++++++++++ Constructor Objects

const gameChanger = {
  Name: "Imran Khan",
  Relation: "My Heart",
  bestDrink: "Green Tea",
  userInfo: {
    Name: {
      firstName: "Abdullah",
      lastName: "Developer",
    },
  },
};
// Now how can we access the value if it's inside nested objects, here is way:-
console.log(gameChanger.userInfo.Name.lastName); // like this


// As we had combined two Arrays, so let's see how we'll merge two Objects
const obj1 = {1: 'a', 2: 'b', 3: 'c'};
const obj2 = {4: 'd', 5: 'e', 6: 'f'};

const obj3 = {obj1, obj2}
console.log(obj3); // Now this is Wrong way and doesn't fulfill our requirements so,

// Merging them with .assign() method
const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);
console.log(obj1);

// Mergig them with Spraed-Operator as it was in arrays
const obj5 = {...obj1,...obj2};
console.log(obj5);

// now what if we multiple objects inside an Array
const obj6 = [
  {
    Name: 'Abdullah',
    Class: '9th',
    Id: 5423
  },
  {
    Name: 'Zaryab',
    Class: '10th',
    Id: 56723
  },
  {
    Name: 'Sufyan',
    Class: '9th',
    Id: 698453
  },
  {
    Name: 'Musab',
    Class: '12th',
    Id: 68998
  },
]

console.log(obj6[1].Name); // This is how we would access values inside objects in Array


// Now what if we would want to access just the values or keys of any object
console.log(Object.keys(gameChanger));
console.log(Object.values(gameChanger));

// We can also  convert each key and  value into an array form
console.log(Object.entries(gameChanger));

// Now we'll check that has any object that key or value as we would in arrays .include()
console.log(gameChanger.hasOwnProperty('Relation')); // use .hasOwnProperty

 // ++++++++++++++++++ Destructurig in Objects ++++++++++++++++++

const myInfo = {
    Name: 'Abdullah',
    Class: '11th',
    mySymbol1: 'symkey1',
} 

const {Name,Class} = myInfo // Now when once they are extracted then we can use 
console.log(Name,Class);











