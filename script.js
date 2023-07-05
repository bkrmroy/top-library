const bookContainer = document.querySelector(".book-container")

let myLibrary = [];

function Book(title, author , pages, readStaus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStaus = readStaus;
}
const book1= new Book('X','a','55', 'read')
const book2= new Book('Y','a','51', 'not read yet')

function addBookToLibrary() {
  myLibrary.push(book1)
  myLibrary.push(book2)
}
addBookToLibrary()

