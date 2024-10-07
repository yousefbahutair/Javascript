library = [
    {
        bookName: 'Axe BOO',
        bookRating: 9.99,
        genre: 'Action'


    },
    {
        bookName: '10 Wolves',
        bookRating: 4.09,
        genre: 'Action'


    },
    {
        bookName: 'Bad Life',
        bookRating: 10,
        genre: 'phsycology'


    },
    {
        bookName: 'Little prince',
        bookRating: 9.0,
        genre: 'fiction'


    },
    
]

const HighRatedBooks = library.find(book => book.bookRating > 8.0)
const listFictionBooks = library.map(book => book.genre.includes(fiction))
const libraryHaveHighClassBooks = library.some(book => book.bookRating >= 8.0)
const libraryAllBooksHighClass = library.every(book => book.bookRating >= 8.0)