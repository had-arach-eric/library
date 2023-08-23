import { Book } from "./book.js";

export class UI {
  
  //Node references
  dialog = document.querySelector("#dialog");
  containerUI = document.querySelector(".container");
  addButtonUI = document.querySelector(".add-button");
  cardsUI = document.querySelector(".cards");
  titleInput = document.querySelector(".title");
  authorInput = document.querySelector(".author");
  numberOfPagesInput = document.querySelector(".number-of-pages");
  readInput = document.querySelector(".read");
  confirmButton = document.querySelector(".confirm");
  cancelButton = document.querySelector(".cancel");

  constructor(books) {
    this.books = books;
  };

  createCardUI = book => {
    const cardUI = document.createElement("div");
    cardUI.classList.add("card");
    cardUI.setAttribute("id", book.id);
    this.cardsUI.appendChild(cardUI);
    return cardUI;
  }

  createTitleUI = (book, cardUI) => {
    const titleUI = document.createElement("h2");
    titleUI.textContent = `Title: ${book.title}`;
    cardUI.appendChild(titleUI);
    return titleUI;
  }

  createAuthorUI = (book, cardUI) => {
    const authorUI = document.createElement("p");
    authorUI.textContent = `Author: ${book.author}`;
    cardUI.appendChild(authorUI);
    return authorUI;
  }

  createNumberOfPagesUI = (book, cardUI) => {
    const numberOfPagesUI = document.createElement("p");
    numberOfPagesUI.textContent = `Number of pages: ${book.numberOfPages}`;
    cardUI.appendChild(numberOfPagesUI);
    return numberOfPagesUI;
  }

  createReadUI = (book, cardUI) => {
    const readUI = document.createElement("p");
    readUI.classList.add("container-read");
    const labelReadUI = document.createElement("label");
    labelReadUI.textContent = "Read";
    const inputReadUI = document.createElement("input");
    inputReadUI.setAttribute("type", "checkbox");
    inputReadUI.checked = (book.read) ? true : false;
    readUI.addEventListener("click", () => {
      book.read = !(book.read);
    });
    readUI.appendChild(labelReadUI); 
    readUI.appendChild(inputReadUI);
    cardUI.appendChild(readUI);
    return readUI;
  }

  createRemoveButtonUI = (book, cardUI) => {
    const removeButtonUI = document.createElement("button");
    removeButtonUI.textContent = "Delete";
    removeButtonUI.setAttribute("type", "button");
    removeButtonUI.setAttribute("id", cardUI.getAttribute("id"));
    removeButtonUI.classList.add("card-button");
    cardUI.appendChild(removeButtonUI);
    removeButtonUI.addEventListener("click", () => {
      this.removeBook(book.id);
    });
    return removeButtonUI;
  }

  addBookUI = book => {
    const cardUI = this.createCardUI(book);
    this.createTitleUI(book, cardUI);
    this.createAuthorUI(book, cardUI);
    this.createNumberOfPagesUI(book, cardUI);
    this.createReadUI(book, cardUI);
    this.createRemoveButtonUI(book, cardUI);
  }

  removeBookUI = id => {
    for (let i = 0; i < this.cardsUI.children.length; i++) {
      if (this.cardsUI.children[i].getAttribute("id") === id) {
        this.cardsUI.children[i].remove();
      }
    }
  }

  addBook = book => {
    this.books.addBookToBooks(book);
    this.addBookUI(book);
  }

  removeBook = id => {
    this.books.removeBookFromBooks(id);
    this.removeBookUI(id);
  }

  handleAddButton = () => {
    this.dialog.showModal();
  }

  resetForm = () => {
    this.titleInput.value = "";
    this.authorInput.value = "";
    this.numberOfPagesInput.value = "";
    this.readInput.checked = false;
  }

  handleConfirmButton = e => {
    e.preventDefault();
    const book = new Book(
      this.titleInput.value, 
      this.authorInput.value, 
      this.numberOfPagesInput.value, 
      this.readInput.checked
    );
    this.addBook(book);
    this.dialog.close();
  }
  
  handleCancelButton = () => {
    this.dialog.close();
  }

  addListeners = () => {
    this.addButtonUI.addEventListener("click", this.handleAddButton);
    this.confirmButton.addEventListener("click", this.handleConfirmButton);
    this.cancelButton.addEventListener("click", this.handleCancelButton);
    this.dialog.addEventListener("close", () => {
      this.resetForm();
    });
  }
}





