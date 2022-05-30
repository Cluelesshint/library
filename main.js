//grab the main elements

const form = document.querySelector(".form");
const newBook = document.querySelector("#new-book");
const bookGrid = document.querySelector(".book-grid");
const newBookModule = document.querySelector("#module");

function Book(title, author, pages, read) {
  return {
    title: title,
    author: author,
    pages: pages,
    read: read,
  };
}

let library = []; //book storage

const book1 = Book("Title1", "Author1", 344, true);
library.push(book1);
displayBooks();

function getBookData() {
  //grab all book info from different inputs

  let data = [];
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#checkbox").checked;
  data.push(title);
  data.push(author);
  data.push(pages);
  data.push(read);
  return data;
}

function clearBookInputs() {
  //clears all book module input fields, sets checked to false

  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#checkbox").checked = false;
}

function toggleNewBookModule(onOrOff) {
  if (onOrOff == "on") {
    newBookModule.classList.add("active");
  } else if (onOrOff == "off") {
    newBookModule.classList.remove("active");
  }
}

function createBookDiv(book, index) {
  const bookDiv = document.createElement("div");
  bookDiv.id = index;
  bookDiv.classList.add("book-div");
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("book-title");
  titleDiv.innerHTML = book.title;
  const authorDiv = document.createElement("div");
  authorDiv.classList.add("book-author");
  authorDiv.innerHTML = book.author;
  const pageDiv = document.createElement("div");
  pageDiv.classList.add("book-pages");
  pageDiv.innerHTML = book.pages;
  const readButton = document.createElement("button");
  readButton.classList.add("read");
  if (book.read) {
    readButton.classList.add("true");
    readButton.innerHTML = "Read";
  } else {
    readButton.classList.add("false");
    readButton.innerHTML = "Not read";
  }
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.innerHTML = "Remove";
  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(pageDiv);
  bookDiv.appendChild(readButton);
  bookDiv.appendChild(removeButton);
  return bookDiv;
}

function displayBooks() {
  let index = 0;
  library.forEach((book) => {
    bookDiv = createBookDiv(book, index);
    bookGrid.appendChild(bookDiv);
    index++;
  });
}

function clearBookGrid() {
  while (bookGrid.lastChild) {
    bookGrid.removeChild(bookGrid.lastChild);
  }
}

function deleteBook(index) {
  console.log(library);
  library.splice(index, 1);
  console.log(library);
}

bookGrid.addEventListener("click", (e) => {
  const bookID = e.path[1].id;
  if (e.path[0].innerHTML == "Remove") {
    deleteBook(bookID);
    clearBookGrid();
    displayBooks();
  }
});

document.onkeydown = function (e) {
  //check for escape key, if escape key deactivate the new book module

  if (e.key == "Escape") {
    clearBookInputs();
    toggleNewBookModule("off");
  }
};

newBook.addEventListener("click", (e) => {
  //check for if new book button has been clicked, if clicked activate the new book module

  toggleNewBookModule("on");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  bookData = getBookData();
  const book = Book(bookData[0], bookData[1], bookData[2], bookData[3]);
  library.push(book);
  clearBookInputs();
  clearBookGrid();
  toggleNewBookModule("off");
  displayBooks();
});
