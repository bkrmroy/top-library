const bookContainer = document.querySelector(".book-container")
const btnAddBook = document.querySelector(".book.add-book")
const btnFormClose = document.querySelector(".form-close")
const overlay = document.querySelector(".overlay")
const btnFormSubmit = document.querySelector(".btn-form-submit");

let myLibrary = [];

function Book(title, author , pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  // this.readStaus = readStaus;
}

function addBookToLibrary(event) {
  event.preventDefault()
  const title = document.getElementById("new-book-title").value;
  const author = document.getElementById("new-book-author").value;
  const pages = document.getElementById("new-book-pages").value;

  if(title === '' || author === '' || pages === '') return;
  else{
    const book = new Book(title, author, pages)
    myLibrary.push(book)
    loopThroughLibrary()

    const form = document.querySelector(".form.active")
    closeForm(form);
  }
}
btnFormSubmit.addEventListener("click",()=>{
  const form = document.querySelector(".main-form")
  form.checkValidity();
  form.reportValidity();
})
btnFormSubmit.addEventListener("click",addBookToLibrary)

function loopThroughLibrary(){
  myLibrary.forEach(item => {
    const book = document.createElement("div")
    book.classList.add("book")

    const bookTitle = document.createElement("div")
    bookTitle.classList.add("book-title")
    bookTitle.textContent = item.title
    book.appendChild(bookTitle)

    const bookAuthor = document.createElement("div")
    bookAuthor.classList.add("book-author")
    bookAuthor.textContent = `${item.author}`
    book.appendChild(bookAuthor)

    const bookPages = document.createElement("div")
    bookPages.classList.add("book-pages")
    bookPages.textContent = `${item.pages} pages`
    book.appendChild(bookPages)

    // const readStaus = document.createElement("div")
    // readStaus.classList.add("book-read-status")
    // readStaus.textContent = `Status: ${item.readStaus}`
    // book.appendChild(readStaus)

    // bookContainer.appendChild(book);
    // bookContainer.insertBefore(book, bookContainer.firstChild.nextSibling);

    if(item.title === document.querySelector(".book-title").textContent) return
    btnAddBook.insertAdjacentElement('afterend', book)
})
}

//popup form
btnAddBook.addEventListener("click", ()=>{
  const form = document.querySelector(".form")
  openForm(form);
})
btnFormClose.addEventListener("click",()=>{
  const form = document.querySelector(".form")
  closeForm(form);
})
overlay.addEventListener("click",()=>{
  const form = document.querySelector(".form.active")
  closeForm(form);
})
function openForm(form){
  if(form == null) return
  form.classList.add("active")
  overlay.classList.add("active")
}
function closeForm(form){
  if(form == null) return
  form.classList.remove("active")
  overlay.classList.remove("active")
  document.querySelector(".main-form").reset()
}