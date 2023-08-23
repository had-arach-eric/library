export class Book {
  
  static id = { val: "0" };

  constructor(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.id = Book.id.val;
    Book.id.val = (+(Book.id.val) + 1).toString();
  }
}