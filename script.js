// Swiper
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x")
  navbar.classList.toggle("active");
  // console.log("Clicked");
  // if (navbar.classList.contains("active")) {
  //   menu.classList.replace("ri-menu-line", "ri-close-line");

  // } else{
  //   menu.classList.replace("ri-close-line", "ri-menu-line");
  // }
  // console.log(navbar);
};

window.onscroll = () => {
  menu.classList.remove("bx-x")
  navbar.classList.remove("active");
  // console.log(menu)
};

// console.log(menu)