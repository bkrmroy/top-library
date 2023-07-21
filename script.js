const bookContainer = document.querySelector(".book-container")
const btnAddBook = document.querySelector(".add-book")
const btnFormClose = document.querySelector(".form-close")
const overlay = document.querySelector(".overlay")
const btnFormSubmit = document.querySelector(".btn-form-submit");
const form = document.querySelector(".main-form")
const infoContainer = document.querySelector(".info-container")
const totalBooks = document.querySelector(".total-books")
const totalPages = document.querySelector(".total-pages")
let myLibrary = [];

function Book(title, author , pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}
function addBookToLibrary(event) {
  event.preventDefault()
  const title = document.getElementById("new-book-title").value;
  const author = document.getElementById("new-book-author").value;
  const pages = document.getElementById("new-book-pages").value;

  if(title === '' || author === '' || pages === '') return;

  let bookExistsInArray = false;
  myLibrary.forEach(item =>{
    if(title === item.title &&
      author === item.author &&
      pages === item.pages.replace(/[A-Za-z$-]/g, "")){
        bookExistsInArray = true;
        alert("Book already exists in libray")
      }
  })
  if(bookExistsInArray === true) return
  else{
    const book = new Book(title, author, pages, 'Not read yet')
    myLibrary.push(book)
    loopThroughLibrary()
    console.log(myLibrary)

    const form = document.querySelector(".form.active")
    closeForm(form);
    updateInfo()
  }
}
btnFormSubmit.addEventListener("click",()=>{
  form.checkValidity();
  form.reportValidity();
})
btnFormSubmit.addEventListener("click",addBookToLibrary)

function loopThroughLibrary(){
  myLibrary.forEach(item => {
    const domBooklist = document.querySelectorAll(".book")

    let bookExists= false;
    domBooklist.forEach(book => {
      if(book.childNodes[0].textContent === item.title &&
         book.childNodes[1].textContent === item.author &&
         book.childNodes[2].textContent === `${item.pages} pages` ){
          
        return bookExists = true;
      }
    })
    if(bookExists === true) return 

    const book = document.createElement("div")
    book.classList.add("book")
    
    book.dataset.number = myLibrary.indexOf(item)

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

    const readStatus = document.createElement("div")
    readStatus.classList.add("book-read-status")
    readStatus.textContent = `Status: ${item.readStatus}`
    book.appendChild(readStatus)

    const changeReadStatus= document.createElement("button")
    changeReadStatus.classList.add("change-read-status")
    changeReadStatus.textContent = 'Change read status'
    book.appendChild(changeReadStatus)

    const removeBook = document.createElement("button")
    removeBook.classList.add("remove-book")
    removeBook.textContent = 'Remove'
    book.appendChild(removeBook)

    btnAddBook.insertAdjacentElement('afterend', book)
})
}
function setDataNum(){
  const domBooklist = document.querySelectorAll(".book")
  myLibrary.forEach(item =>{
    domBooklist.forEach(book =>{
      if(book.childNodes[0].textContent === item.title &&
        book.childNodes[1].textContent === item.author &&
        book.childNodes[2].textContent === `${item.pages} pages`){
          book.dataset.number = myLibrary.indexOf(item)
        }
    })
  })
}
//remove book
bookContainer.addEventListener('click',function(event){
  if(event.target.classList.contains('remove-book')){
    event.target.parentElement.remove()
    let index = event.target.parentElement.dataset.number
    myLibrary.splice(index, 1)
    setDataNum()
    updateInfo()
  }
})
//change read status
bookContainer.addEventListener('click',function(event){
  if(event.target.classList.contains('change-read-status')){
    const bookReadStatus = event.target.parentElement.querySelector('.book-read-status')
    let index = event.target.parentElement.dataset.number

    if(bookReadStatus.textContent === 'Status: Not read yet'){
      bookReadStatus.textContent = 'Status: Read'
      myLibrary[index].readStatus = 'Read'
      console.log(myLibrary[index].readStatus)
      return
    }
    if(bookReadStatus.textContent === 'Status: Read'){
      bookReadStatus.textContent = 'Status: Not read yet'
      myLibrary[index].readStatus = 'Not read yet'
      console.log(myLibrary[index].readStatus)
      return
    }
  }
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
  document.querySelector(".main-form").reset()
}
//info Container
let pagesNum;
function countPages(){
  myLibrary.forEach(item =>{
    pagesNum += parseInt(item.pages)
    return pagesNum
  })
}
function updateInfo(){
  pagesNum = 0
  countPages()
  totalBooks.textContent = `Total books: ${myLibrary.length}`
  totalPages.textContent = `Total Pages: ${pagesNum}`
}