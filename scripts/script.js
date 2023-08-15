//Node references
const dialog = document.querySelector("#dialog");
const containerUI = document.querySelector(".container");
const addButtonUI = document.querySelector(".add-button");
const cardsUI = document.querySelector(".cards");

const titleInput = document.querySelector(".title");
const authorInput = document.querySelector(".author");
const numberOfPagesInput = document.querySelector(".number-of-pages");
const readInput = document.querySelector(".read");
const confirmButton = document.querySelector(".confirm");
const cancelButton = document.querySelector(".cancel");

//Card IDs
const books = {};
let id = { val: "0" };

// ---------------------------------------------------------------------

function Book(title, author, numberOfPages, read, idObj) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
  this.id = idObj.val;
  idObj.val = (+(idObj.val) + 1).toString();
}

function addBookToBooks(book) {
  books[book.id] = book;
}

function addBookUI(book) {
  
  const cardUI = document.createElement("div");
  cardUI.classList.add("card");
  cardUI.setAttribute("id", book.id);
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
  readUI.classList.add("container-read");
  const labelReadUI = document.createElement("label");
  labelReadUI.textContent = "Read";
  const inputReadUI = document.createElement("input");
  inputReadUI.setAttribute("type", "checkbox");
  inputReadUI.checked = (book.read) ? true : false;
  readUI.addEventListener("click", () => {
    books[cardUI.id].read = !(books[cardUI.id].read);
  });
  readUI.appendChild(labelReadUI); 
  readUI.appendChild(inputReadUI);
  cardUI.appendChild(readUI);

  const removeButtonUI = document.createElement("button");
  removeButtonUI.textContent = "Delete";
  removeButtonUI.setAttribute("type", "button");
  removeButtonUI.setAttribute("id", cardUI.getAttribute("id"));
  removeButtonUI.classList.add("card-button");
  cardUI.appendChild(removeButtonUI);
  removeButtonUI.addEventListener("click", () => {
    removeBook(books, cardsUI, removeButtonUI.id);
  });
}

function addBook(book) {
  addBookToBooks(book);
  addBookUI(book);
}

function removeBookFromBooks(books, id) {
  for (let key in books) {
    if (key === id) {
      delete books[key];
    }
  }
}

function removeBookUI(cardsUI, id) {
  for (let i = 0; i < cardsUI.children.length; i++) {
    if (cardsUI.children[i].getAttribute("id") === id) {
      cardsUI.children[i].remove();
    }
  }
}

function removeBook(books, cardsUI, id) {
  removeBookFromBooks(books, id);
  removeBookUI(cardsUI, id);
}

function handleAddButton() {
  dialog.showModal();
}

function resetForm() {
  titleInput.value = "";
  authorInput.value = "";
  numberOfPagesInput.value = "";
  readInput.checked = false;
}

function handleConfirmButton(e) {
  e.preventDefault();
  addBook(new Book(titleInput.value, authorInput.value, numberOfPagesInput.value, readInput.checked, id));
  dialog.close();
}

function handleCancelButton() {
  dialog.close();
}

function main() {
  addButtonUI.addEventListener("click", handleAddButton);
  confirmButton.addEventListener("click", handleConfirmButton);
  cancelButton.addEventListener("click", handleCancelButton);
  dialog.addEventListener("close", () => {
    resetForm();
  });
}




main();

















