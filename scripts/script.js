const myLibrary = [];
const containerUI = document.querySelector(".container");
const addButtonUI = document.querySelector(".add-button");
const cardsUI = document.querySelector(".cards");
let identifier = {val: "0"};

function Book(title, author, numberOfPages, identifier) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
  this.identifier = identifier.val;
  toString(Number(identifier.val) + 1);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addBookToPage(book) {
  
  const cardUI = document.createElement("div");
  cardUI.classList.add("card");
  cardsUI.appendChild(cardUI);
  
  const titleUI = document.createElement("h2");
  titleUI.textContent = `Title: ${book.title}`;
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
  removeButtonUI.setAttribute("data-identifier", identifier.val);
}

function addBook(book) {
  addBookToLibrary(book);
  addBookToPage(book);
}

function removeBook(identifier) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].identifier === identifier) {
      cardsUI.children[]
      myLibrary.splice(i, 1);

    }
  }
}



const libro1 = new Book("Harry Potter", "JK", 500, false);
const libro2 = new Book("Batman", "Nolan", "250", true);

addBook(libro1);
addBook(libro2);

