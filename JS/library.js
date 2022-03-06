document.addEventListener("DOMContentLoaded", () => {
    let navbar = document.getElementById("navbar");  
    var sticky = navbar.offsetTop;
  window.addEventListener("scroll", ()=> {
          if (window.pageYOffset >= 50) {
            navbar.classList.add("sticky");
          }else{
            navbar.classList.remove("sticky");
          }
  });
});
