const library = [
    {
        bookName : 'FRED',
        bookRating : 9.09
    },
    {
        bookName : 'Boo Friends',
        bookRating : 8.90
    },
    {
        bookName : 'Cristiano Journey',
        bookRating : 6.0
    },
    {
        bookName : 'Way Of Life',
        bookRaring : 5.8
    },
]

const HighRatedBooks =  library.filter(b => b.bookRating >= 8)