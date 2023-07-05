const bookContainer = document.querySelector(".book-container")

let myLibrary = [];

function Book(title, author , pages, readStaus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStaus = readStaus;
}
const book1= new Book('The Art of Thinking Clearly','Rolf Dobelli','55', 'read')
const book2= new Book('Y','a','51', 'not read yet')
const book3= new Book('asdf','zxcv',414, 'asdf')

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
    bookAuthor.textContent = `Author : ${item.author}`
    book.appendChild(bookAuthor)

    const bookPages = document.createElement("div")
    bookPages.classList.add("book-pages")
    bookPages.textContent = `Pages : ${item.pages}`
    book.appendChild(bookPages)

    const readStaus = document.createElement("div")
    readStaus.classList.add("book-read-status")
    readStaus.textContent = `Status: ${item.readStaus}`
    book.appendChild(readStaus)

    bookContainer.appendChild(book);
})


