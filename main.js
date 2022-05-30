//grab the main elements

const form = document.querySelector(".form");
const newBook = document.querySelector("#new-book");
const newBookModule = document.querySelector("#module");

function getBookInformation() {
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

document.onkeydown = function (e) {
  //check for escape key, if escape key deactivate the new book module

  if (e.key == "Escape") {
    clearBookInputs();
    newBookModule.classList.remove("active");
  }
};

newBook.addEventListener("click", (e) => {
  //check for if new book button has been clicked, if clicked activate the new book module

  newBookModule.classList.add("active");
});

form.addEventListener("submit", (e) => {
  clearBookInputs();
  e.preventDefault();
  console.log(getBookInformation());
});
