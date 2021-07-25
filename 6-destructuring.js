const book = {
    bookId: 1,
    bookName: "Madolduwa",
    bookPrice: 250,
    bookPages: 60,
};

//  BAD

const bookId = book.bookId;
const bookName = book.bookName;
const bookPrice = book.bookPrice;
const bookPages = book.bookPages;

// GOOD

const { bookId, bookName, bookPages, bookPrice } = book;
