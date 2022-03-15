//Navbar */

const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".main-nav__content");
const mainLogo = document.querySelector(".bg-video__logo");
const mainNavItem = document.querySelector(".main-nav__item");

hamburger.addEventListener("click", menu);

function menu() {
  hamburger.classList.toggle("active");
  mainNav.classList.toggle("active");
  mainLogo.classList.toggle("active");
  mainNavItem.classList.toggle("active");
}



const scrollToTop = document.querySelector('.scroll-to-top');

scrollToTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});





