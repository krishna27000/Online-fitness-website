//for header

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

//for window scroll

window.onscroll = () => {
  menu.classList.remove("fa-times");
  menu.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  window.onload = () =>{
    if (window.scrollY > 0) {
      document.querySelector(".header").classList.add("active");
    } else {
      document.querySelector(".header").classList.remove("active");
    }
  }
}

// for homesection
var swiper = new Swiper(".home-slider",{
    spaceBetween: 20,
    effect: "fade",
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
});


// for feature section
var swiper = new Swiper(".feature-slider",{
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// for trainer slider

var swiper = new Swiper(".trainer-slider",{
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});