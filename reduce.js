// Using .reduce in JS
// .reduce takes 2 parameters first one is accomulator and the other is currentValue

const productPrices = [1200, 2380, 4530, 2300, 990, 560, 650];

const reducedPrices = productPrices.reduce((accomulator, product) => {
    console.log(`Accomulator is ${accomulator} and the productPrice is ${product}`);
    
      return accomulator + product
}, 0)

console.log(reducedPrices);

// Chaining in JS by Using Array methods on one place

const books = [
    {
      BookName: "To Kill a Mockingbird",
      writer: "Harper Lee",
      Edition: "1st",
      Booktype: "Fiction"
    },
    {
      BookName: "1984",
      writer: "George Orwell",
      Edition: "2nd",
      Booktype: "Dystopian"
    },
    {
      BookName: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      Edition: "3rd",
      Booktype: "Classic"
    },
    {
      BookName: "Pride and Prejudice",
      writer: "Jane Austen",
      Edition: "4th",
      Booktype: "Romance"
    },
    {
      BookName: "The Catcher in the Rye",
      writer: "J.D. Salinger",
      Edition: "1st",
      Booktype: "Fiction"
    },
    {
      BookName: "Moby-Dick",
      writer: "Herman Melville",
      Edition: "5th",
      Booktype: "Adventure"
    },
    {
      BookName: "War and Peace",
      writer: "Leo Tolstoy",
      Edition: "3rd",
      Booktype: "Historical"
    },
    {
      BookName: "The Odyssey",
      writer: "Homer",
      Edition: "Ancient",
      Booktype: "Epic"
    },
    {
      BookName: "The Hobbit",
      writer: "J.R.R. Tolkien",
      Edition: "2nd",
      Booktype: "Fantasy"
    },
    {
      BookName: "Crime and Punishment",
      writer: "Fyodor Dostoevsky",
      Edition: "4th",
      Booktype: "Psychological Fiction"
    }
  ];

  
  const processedBooksData = books.filter( (myBook) => myBook.Booktype === 'Fiction'  )
  .filter( (myBook) => myBook.Edition === '1st' );

  console.log(processedBooksData);
  
