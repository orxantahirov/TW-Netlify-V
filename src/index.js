"use strict";

//Vanilla
window.onload = () => {
  //Navigation Menu Handling
  handleNavMenu();
  //Navigation Sub=menu Handling
  handleSubMenu();
  //Handling Main Slider Background
  handleMainSlider();

  //Main Slider changing background on hover
  function handleMainSlider() {
    const sliderItems = document.querySelectorAll(".main-slider .swiper-slide");
    const mainSlider = document.querySelector(".main-slider");
    sliderItems.forEach((el) => {
      el.addEventListener("mouseover", () => {
        sliderItems.forEach((el) => el.classList.remove("swiper-slide-active"));
        el.classList.add("swiper-slide-active");
        const imgIndex = el.getAttribute("data-swiper-slide-index");
        mainSlider.style.backgroundImage = `url('./assets/img/main-slider-imgs/slider-img-${imgIndex}.jpg')`;
      });
    });
  }
  //Opening Navigation Menus
  function handleNavMenu() {
    const navLinks = document.querySelectorAll(".menu-act");
    const menus = document.querySelectorAll(".menu");
    navLinks.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        e.stopPropagation();

        menus.forEach((el) => {
          el.style.height = "";
          el.style.overflow = "hidden";
        });

        el.nextElementSibling.style.overflow = "visible";
        if (el.nextElementSibling.scrollHeight < 447) {
          el.nextElementSibling.style.height = "447px";
        } else {
          el.nextElementSibling.style.height =
            el.nextElementSibling.scrollHeight + "px";
        }
        console.log(el.nextElementSibling.scrollHeight);
        el.nextElementSibling.firstElementChild.nextElementSibling.classList.remove(
          "d-none"
        );
      });
      menus.forEach((el) =>
        el.addEventListener("mouseleave", () => {
          el.style.height = "";
          el.style.overflow = "hidden";
        })
      );
    });
  }
  //Opening Navigation submenus
  function handleSubMenu() {
    const subActs = document.querySelectorAll(".sub-act");
    const allMenus = document.querySelectorAll(".sub-menu");

    subActs.forEach((el) =>
      el.addEventListener("mouseover", () => {
        const tgl = el.getAttribute("data-toggle");
        const menu = document.querySelector(`.${tgl}`);
        console.log(menu);
        allMenus.forEach((el) => el.classList.add("d-none"));
        menu.classList.remove("d-none");
      })
    );
  }
};

$(document).ready(function () {
  let swiper = new Swiper(".main-slider", {
    slidesPerView: 4,
    spaceBetween: 2,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-c-button-next",
      prevEl: ".swiper-c-button-prev",
    },
    breakpoints: {
      200: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  });
  swiper.on("slideChange", function () {
    console.log("slide changed");
    const active = document.querySelector(".main-slider .swiper-slide-active");
    const mainSlider = document.querySelector(".main-slider");
    const imgIndex = active.getAttribute("data-swiper-slide-index");
    mainSlider.style.backgroundImage = `url('./assets/img/main-slider-imgs/slider-img-${imgIndex}.jpg')`;
  });

  let articleSwiper = new Swiper(".article-swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-custom-button-next",
      prevEl: ".swiper-custom-button-prev",
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
});
