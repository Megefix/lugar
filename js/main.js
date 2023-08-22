const navBtn = document.querySelector(".mobile-nav-btn");
const nav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".nav-icon");
const fade = document.querySelector(".mobile-nav-fade");

navBtn.onclick = function () {
  nav.classList.toggle("mobile-nav--open");
  fade.classList.toggle("mobile-nav-fade--open");
  menuIcon.classList.toggle("nav-icon--active");
  document.body.classList.toggle("no-scroll");
};
fade.onclick = function () {
  nav.classList.toggle("mobile-nav--open");
  fade.classList.toggle("mobile-nav-fade--open");
  menuIcon.classList.toggle("nav-icon--active");
  document.body.classList.toggle("no-scroll");
};
nav.onclick = function () {
  nav.classList.remove("mobile-nav--open");
  fade.classList.remove("mobile-nav-fade--open");
  menuIcon.classList.remove("nav-icon--active");
  document.body.classList.remove("no-scroll");
};

//Animation pack

new WOW().init();

//Scroll animation

const navHeader = document.querySelector(".nav");
const header = document.querySelector(".header");
document.addEventListener("DOMContentLoaded", function () {
  function navAnimation() {
    let scrollY = window.scrollY;
    let headercenter = header.offsetHeight;
    if (scrollY >= headercenter) {
      navHeader.classList.add("fixed");
      navHeader.style.padding = "15px";
      header.style.marginTop = `${navHeader.offsetHeight}px`;
    } else {
      navHeader.classList.remove("fixed");
      navHeader.style.padding = " 44px 0 90px";
      header.style.marginTop = "0px";
    }
  }
  navAnimation();
  window.addEventListener("scroll", function () {
    navAnimation();
  });
});
