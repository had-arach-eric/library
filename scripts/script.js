/*
Todos tus objetos libro van a ser almacenados en un simple array, así que añade una función al script (no el constructor) que pueda tomar la entrada del usuario y almacenar los nuevos objetos libro en un array. Tu código debería ser algo como esto:
*/

const myLibrary = [];

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

/*
Escribe una función que recorra el array y muestre cada libro en la página. Puedes mostrarlos en algún tipo de tabla, o cada uno en su propia "tarjeta". Por ahora puede ser útil añadir manualmente algunos libros a tu matriz para que puedas ver la pantalla.
*/




/*
Añade un botón "NUEVO LIBRO" que muestre un formulario que permita a los usuarios introducir los datos del nuevo libro: autor, título, número de páginas, número de páginas leídas, si se ha leído y cualquier otra cosa que desees. Usted decide cómo mostrar este formulario. Por ejemplo, puede que desee mostrar un formulario en una barra lateral o puede que desee explorar diálogos y modales utilizando la etiqueta <dialog>. 
No importa cómo lo hagas, lo más probable es que te encuentres con un problema en el que enviar el formulario no hará lo que esperas que haga. Eso es porque el input submit intenta enviar los datos a un servidor por defecto. Si has hecho la sección extra para la tarea de la calculadora, puede que estés familiarizado con event.preventDefault();. Vuelve a leer la documentación de event.preventDefault y verás cómo puedes resolver este problema.
*/

/*
Añade un botón en la pantalla de cada libro para eliminarlo de la biblioteca. Necesitarás asociar tus elementos DOM con los objetos libro de alguna manera. Una solución fácil es darles un data-attribute que corresponde al índice de la matriz de la biblioteca.
*/

/*
Añade un botón en la pantalla de cada libro para cambiar su estado de lectura. Para facilitar esto, querrás crear la función que cambia el estado de lectura de un libro en tu prototipo de Libro.
*/