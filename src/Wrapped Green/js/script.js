let mobileMenu = document.getElementById("mobile-menu");
let mobileMenuBtn = document.getElementById("mobile-menu-btn");

mobileMenuBtn.onclick = displayMenu;

function displayMenu() {
  if (mobileMenu.style.right == "-180px" || mobileMenu.style.right == "") {
    mobileMenu.style.right = "20px";
  } else {
    mobileMenu.style.right = "-180px";
  }
}
