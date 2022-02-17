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
  handleServiceNav();
  handleDefaultAccardion();
  //Main Slider changing background on hover
  function handleMainSlider() {
    const sliderItems = document.querySelectorAll(".main-slider .swiper-slide");
    const mainSlider = document.querySelector(".main-slider");
    sliderItems.forEach((el) => {
      el.addEventListener(
        "mouseover",
        () => {
          sliderItems.forEach((el) =>
            el.classList.remove("swiper-slide-active")
          );
          el.classList.add("swiper-slide-active");
          const imgIndex = el.getAttribute("data-swiper-slide-index");
          mainSlider.style.backgroundImage = `url('./assets/img/main-slider-imgs/slider-img-${imgIndex}.jpg')`;
        },
        true
      );
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

        // el.nextElementSibling.style.overflow = "visible";
        if (el.nextElementSibling.scrollHeight < 447) {
          el.nextElementSibling.style.height = "447px";
        } else {
          el.nextElementSibling.style.height =
            el.nextElementSibling.scrollHeight + "px";
        }
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
  const navbar = document.querySelector(".top-header");
  const bottomHeader = document.querySelector(".bot-header");
  const hoverMenus = document.querySelectorAll(".menu");
  // OnScroll event handler
  const onScroll = () => {
    // Get scroll value
    const scroll = document.documentElement.scrollTop;
    console.log(document.documentElement.scrollTop);
    //Manage Navbar and Menus while scrolling
    if (scroll > 100) {
      navbar.classList.add("header-none");
      bottomHeader.classList.add("transform-top");
      hoverMenus.forEach((el) => (el.style.top = "62px"));
      console.log(navbar);
    } else {
      console.log(navbar);
      navbar.classList.remove("header-none");
      bottomHeader.classList.remove("transform-top");
      hoverMenus.forEach((el) => (el.style.top = "200px"));
    }
  };

  window.addEventListener("scroll", onScroll);
};
//Default Accardion
function handleDefaultAccardion() {
  const accardionTexts = document.querySelectorAll(
    ".accardion-default .accardion-default-text"
  );
  const accardionTitles = document.querySelectorAll(
    ".accardion-default .accardion-default-title"
  );

  accardionTitles.forEach((title) => {
    title.addEventListener("click", function (e) {
      console.log(e.target);
      e.stopPropagation();
      const iconBot = e.target.children[1];
      const textBox = e.target.nextElementSibling;
      const allIconBots = document.querySelectorAll(
        ".accardion-default-icon-wrapper"
      );

      if (textBox.style.height == "") {
        accardionTexts.forEach((textBox) => {
          textBox.style.height = "";
          allIconBots.forEach((el) => (el.style.transform = "rotate(180deg)"));
        });
        textBox.style.height = textBox.scrollHeight + "px";
        iconBot.style.transform = "rotate(0)";
      } else {
        textBox.style.height = "";
        iconBot.style.transform = " rotate(180deg) ";
      }
    });
  });
}
//Handle SideNav on Services PAge
function handleServiceNav() {
  const navWrapper = document.querySelectorAll(".nav-wrapper");

  [...navWrapper].forEach((el) =>
    el.addEventListener("click", function () {
      const navDropDown = el.nextElementSibling;
      const icon = el.children[1];
      console.log(icon);
      if (navDropDown.style.height != "") {
        navDropDown.style.height = "";
        icon.style.transform = "rotate(0)";
      } else {
        icon.style.transform = "rotate(90deg)";

        navDropDown.style.height = navDropDown.scrollHeight + "px";
      }
    })
  );
}

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
        slidesPerView: 4,
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

// $(window).on("scroll", function () {
//   if ($(window).scrollTop() > 300) {
//     $(".header-top").addClass("header-none");
//   } else {
//     // $(".header-top").addClass("header-top");
//     $(".header-top").removeClass("header-none");
//   }
// });
