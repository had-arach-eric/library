import { Library } from "./library.js";
import { UI } from "./ui.js";

(function main() {
  
  const books = new Library();

  const interfaceObj = new UI(books);
  interfaceObj.addListeners();  
  
})();

















