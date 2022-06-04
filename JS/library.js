//change navbar background color
document.addEventListener("DOMContentLoaded", () => {
  let navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
});

//display nav links when click on menu Btn
let menuBtn = document.getElementById("menuBtn");
let closeBtn = document.getElementById("close");
var links = document.getElementById("links");
menuBtn.addEventListener("click", () => {
  links.style.display = "block";
  closeBtn.style.display = "block";
  menuBtn.style.opacity = "0";
});

//close navbar
closeBtn.addEventListener("click", () => {
  menuBtn.style.opacity = "1";
  closeBtn.style.display = "none";
  links.style.display = "none";
});

//on click on profile btn - open sign box
let icons = document.querySelectorAll(".icons .fa");
let loginBox = document.getElementById("LoginBox");
icons.forEach((item) => {
  if (item.classList.contains("fa-user-circle")) {
    item.addEventListener("click", () => {
      loginBox.style.width = "120px";
      setInterval(() => {
        loginBox.style.width = "0";
      }, 5000);
    });
  }
});

