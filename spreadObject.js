const library = [
bookOne = {
  bookName : 'zebra',
  bookRating : 5.90
},
bookTwo = {
    bookName : 'maldo',
    bookRating : 8.90
  },
bookThree = {
    bookName : 'nene',
    bookRating : 6.80
  },
bookFour = {
    bookName : 'tree',
    bookRating : 9.70
  },

]
const badB = library.map(book => {if(book.bookRating < 7){
    return book.bookName
}})
const badBooks = {
   ... badB
    
}
const booksName = {
    ... library.bookName
}
console.log(booksName,badBooks)