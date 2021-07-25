//  BAD

const book = {
    bookId: 1,
    bookName: "Madolduwa",
    bookPrice: 250,
    bookPages: 60,
};

book.bookId;
book.bookName; // <--  unwamted context

// GOOD

const book = {
    id: 1,
    name: "Madolduwa",
    price: 250,
    pages: 60,
};

book.id;
book.name;
