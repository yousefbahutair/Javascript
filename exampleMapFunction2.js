booksLibrary = [
   {
    bookName : "LIFE IS EASY",
    bookRating : 8.90

   },
   {
    bookName : "Bridge",
    bookRating : 7.90

   },
   {
    bookName : "universe",
    bookRating : 8.10
   },
];
details = booksLibrary.map(function(book){return book}) 
bookNames = booksLibrary.map(function(names){ return names.bookName})
booksRatings = booksLibrary.map(function(ratings){ return ratings.bookRating})
console.log(details)
console.log(bookNames)
console.log(booksRatings)