const bookContainer = document.querySelector(".book-container")
const btnAddBook = document.querySelector(".book.add-book")
const btnFormClose = document.querySelector(".form-close")
const overlay =document.querySelector(".overlay")
let myLibrary = [];

function Book(title, author , pages, readStaus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStaus = readStaus;
}
const book1= new Book('The Art of Thinking Clearly','Rolf Dobelli','384', 'Read')
const book2= new Book('The Subtle Art of Not Giving a F*ck','Mark Manson','212', 'Not read yet')
const book3= new Book('Ikigai','Francesc Miralles and Hector Garcia','208', 'Read')


function addBookToLibrary() {
  myLibrary.push(book1)
  myLibrary.push(book2)
  myLibrary.push(book3)

}
addBookToLibrary()

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

    const readStaus = document.createElement("div")
    readStaus.classList.add("book-read-status")
    readStaus.textContent = `Status: ${item.readStaus}`
    book.appendChild(readStaus)

    // bookContainer.appendChild(book);
    // bookContainer.insertBefore(book, bookContainer.firstChild.nextSibling);
    btnAddBook.insertAdjacentElement('afterend', book)
})


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
}