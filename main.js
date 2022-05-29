const form = document.querySelector(".form");
const newBook = document.querySelector("#new-book");
const newBookModule = document.querySelector("#module");

function getBookInformation() {
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

newBook.addEventListener("click", (e) => {
  console.log(e);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(getBookInformation());
});
