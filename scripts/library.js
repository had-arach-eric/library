export class Library {

  books = {};

  constructor() {};

  addBookToBooks = book => {
    this.books[book.id] = book;
  }

  removeBookFromBooks(id) {
    for (let key in this.books) {
      if (key === id) {
        delete this.books[key];
      }
    }
  }
}