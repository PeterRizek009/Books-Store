
window.onload = addNewBook();

function addNewBook() {
  let BooksSection = document.getElementById("books-section");

  for (let index = 0; index < localStorage.length; index++) {
    let Book = document.createElement("div");
    Book.id = "bookItem";
    Book.className = "book";

    let BookDetails = document.createElement("div");
    BookDetails.className = "thumb-content";

    let bookImage = document.createElement("img");
    bookImage.src = "Pics/Books/book4.jfif";

    let bookName = document.createElement("h4");
    bookName.innerHTML = localStorage.getItem("TheBookName");

    itemPrice = document.createElement("p");
    itemPrice.className = "item-price";

    booknewPrice = document.createElement("span");
    booknewPrice.innerHTML = localStorage.getItem("TheBookPrice");
    itemPrice.appendChild(booknewPrice);

    BookDetails.appendChild(bookImage);
    BookDetails.appendChild(bookName);
    BookDetails.appendChild(itemPrice);

    BooksSection.appendChild(Book);
    Book.appendChild(BookDetails);
  }
}
