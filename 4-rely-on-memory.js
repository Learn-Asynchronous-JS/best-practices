//  BAD

const books = ["book 1", "book 2", "book 3"];

books.forEach((b) => {
    // DO stuff
    // more stuff
    // .....
    // .....
    // .....
    // .....
    // .....
    // .....
    // .....
    // .....
    //  Oh no, what is b ?
    read(b);
});

// GOOD

const books = ["book 1", "book 2", "book 3"];

books.forEach((book) => {
    read(book);
});
