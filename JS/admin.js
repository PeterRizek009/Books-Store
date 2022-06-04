

  let addNewBook = document.getElementById("addBtn");
  
  let theBook = {
    BookName : "",
    BookPrice : "",
    BookImage : ""
  }
  
 addNewBook.addEventListener("click", () => {
  let BookName = document.getElementById("bookName").value;
  let BookPrice = document.getElementById("bookPrice").value;
  let BookImage = document.getElementById("uploadFile").value;
   
    
  localStorage.setItem("TheBookName", BookName);
  localStorage.setItem("TheBookPrice", BookPrice);
  localStorage.setItem("TheBookImage", BookImage);
  

});





  
