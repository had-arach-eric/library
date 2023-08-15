const myLibrary = {};
const containerUI = document.querySelector(".container");
const addButtonUI = document.querySelector(".add-button");
const cardsUI = document.querySelector(".cards");
let id = {val: "0"};

function Book(title, author, numberOfPages, read, id) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
  this.id = id.val;
  id.val = (+(id.val) + 1).toString();
}

function addBookToLibrary(book) {
  myLibrary[book.id] = book;
}

function addBookToPage(book) {
  
  const cardUI = document.createElement("div");
  cardUI.classList.add("card");
  cardsUI.appendChild(cardUI);
  
  const titleUI = document.createElement("h2");
  titleUI.textContent = `Title: ${book.title}`;
  cardUI.setAttribute("id", book.id);
  cardUI.appendChild(titleUI);

  const authorUI = document.createElement("p");
  authorUI.textContent = `Author: ${book.author}`;
  cardUI.appendChild(authorUI);

  const numberOfPagesUI = document.createElement("p");
  numberOfPagesUI.textContent = `Number of pages: ${book.numberOfPages}`;
  cardUI.appendChild(numberOfPagesUI);

  const readUI = document.createElement("p");
  const labelReadUI = document.createElement("label");
  labelReadUI.textContent = "Read";
  const inputReadUI = document.createElement("input");
  inputReadUI.setAttribute("type", "checkbox");
  inputReadUI.checked = (book.read) ? true : false;
  readUI.appendChild(labelReadUI); 
  readUI.appendChild(inputReadUI);
  cardUI.appendChild(readUI);
  readUI.style.display = "flex";
  readUI.style.columnGap = "10px";

  const removeButtonUI = document.createElement("button");
  removeButtonUI.textContent = "Delete";
  removeButtonUI.setAttribute("type", "button");
  removeButtonUI.setAttribute("id", id.val);
  cardUI.appendChild(removeButtonUI);
}

function addBook(book) {
  addBookToLibrary(book);
  addBookToPage(book);
}

function removeBook(book, id) {
  for (let key in book) {
    if (key === identifier) {
      delete book[key];
    }
  }
  /*for (let i = 0; i < cardsUI.length; i++) {
    if (cardsUI.children[i] === )
  }*/
}



const libro1 = new Book("Harry Potter", "JK", 500, false, id);
const libro2 = new Book("Batman", "Nolan", "250", true, id);
//console.log(libro1);
//console.log(libro2);

addBook(libro1);
addBook(libro2);

console.log(myLibrary);
console.log(cardsUI);



