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
    updateStatus: function () {
      if (this.read == true) {
        this.read = false;
      } else {
        this.read = true;
      }
    },
  };
}

let library = []; //book storage

const book1 = Book("Title 1", "Author 1", 69, true);
const book2 = Book("Title 2", "Author 2", 96, false);
const book3 = Book("Title 3", "Author 3", 23, true);
const book4 = Book("Title 4", "Author 4", 12, false);

library.push(book1);
library.push(book2);
library.push(book3);
library.push(book4);

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

function createBookDiv(book) {
  const bookDiv = document.createElement("div");
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
  if (book.readButton) {
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

function displayBook() {
  library.forEach((book) => {
    bookDiv = createBookDiv(book);
    bookGrid.appendChild(bookDiv);
  });
}

document.onkeydown = function (e) {
  //check for escape key, if escape key deactivate the new book module

  if (e.key == "Escape") {
    clearBookInputs();
    toggleNewBookModule("off");
  } else if (e.key == "a") {
    displayBook();
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
  toggleNewBookModule("off");
  displayBook();
});
