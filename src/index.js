"use strict";

//Vanilla
window.onload = () => {
  //Navigation Menu Handling
  handleNavMenu();
  //Navigation Sub=menu Handling
  handleSubMenu();
  //Handling Main Slider Background
  handleMainSlider();
  //Handling Accardion
  handleAccardion();
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
    const subLinks = document.querySelectorAll(".sub-primary");
    const menus = document.querySelectorAll(".menu");

    subLinks.forEach((el) =>
      el.addEventListener("mouseover", function () {
        menus.forEach((el) => {
          el.style.height = "";
          el.style.overflow = "hidden";
        });
      })
    );
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
  //Accardion Handler
  function handleAccardion() {
    const accardionTexts = document.querySelectorAll(
      ".accardion .accardion-text"
    );
    const accardionTitles = document.querySelectorAll(
      ".accardion .accardion-title"
    );

    accardionTitles.forEach((title) => {
      title.addEventListener("click", function (e) {
        e.stopPropagation();
        const iconBot = e.target.children[1].children[1];
        const textBox = e.target.nextElementSibling;
        const allIconBots = document.querySelectorAll(
          ".accardion-icon-wrapper .bot"
        );

        if (textBox.style.height == "") {
          accardionTexts.forEach((textBox) => {
            textBox.style.height = "";
            allIconBots.forEach(
              (el) => (el.style.transform = " rotate(90deg) translateX(-2px)")
            );
          });
          textBox.style.height = textBox.scrollHeight + "px";
          iconBot.style.transform = "rotate(0) translateY(-2px)";
        } else {
          textBox.style.height = "";
          iconBot.style.transform = " rotate(90deg) translateX(-2px)";
        }
      });
    });
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
    const active = document.querySelector(".main-slider .swiper-slide-active");
    const mainSlider = document.querySelector(".main-slider");
    const imgIndex = active.getAttribute("data-swiper-slide-index");
    mainSlider.style.backgroundImage = `url('./assets/img/main-slider-imgs/slider-img-${imgIndex}.jpg')`;
  });

  let articleSwiper = new Swiper(".article-swiper", {
    slidesPerView: 5,
    spaceBetween: 40,
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
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });
});
