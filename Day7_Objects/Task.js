// // Activity 1 : Object creation and access

// // Task1:

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}

console.log(book);

console.log();

// // Task2:

console.log({
    title: book.title,
    author: book.author,
});

// // Activity 2 : Object methods

// // Task3:

console.log();

book.fun = function () {
    return `Title of the book is ${this.title} and Author name is ${this.author}`
}

console.log(book.fun());

console.log();

// // Task4:

book.updateYear = function (year) {
    this.year = year;
    return JSON.stringify(this)
}

console.log(book.updateYear(2024));

console.log();

// // Activity - 3 : Nessted objects

// // Task5:

const library = {
    name: "The Library",
    address: "123 Main St",
    books: [{
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    }, {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
    }, {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
    }]
}

console.log(library);

console.log();

// // Task6:

console.log({
    name: library.name,
    books: library.books
});

// // Activity - 4 : The this keyword

// // Task7:

library.returnBooks = function() {
    return this.books
}

console.log(library.returnBooks());

console.log();

// // Activity - 5 : Object iteration

// // Task8:

for(let key in book) {
    if(typeof book[key] !== "function")
    console.log(key + ": " + book[key]);
}

console.log();

// // Task9:

const keys = Object.keys(book)

const vals = Object.values(book)

for(let i=0;i<keys.length;i++) {
    if(typeof vals[i] !== 'function') 
    console.log(`key: ${keys[i]} , value: ${vals[i]}`);
}

console.log();

