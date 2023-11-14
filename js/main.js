//swiper
$(document).ready(function () {
  $(".sec-3").owlCarousel({
    nav: true,
    navText: ["", ""],
    slideBy: 1,
    autoplay: true,
    autoplayHoverPause: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    loop: true,
    margin: 20,

    responsive: {
      0: {
        items: 1.2,
        nav: true,
      },
      360: {
        items: 1.2,
        nav: true,
      },
      450: {
        items: 2,
        nav: true,
      },
      690: {
        items: 2.2,
        nav: true,
      },
      750: {
        items: 3,
        nav: true,
      },
      860: {
        items: 3,
        nav: true,
      },
      960: {
        items: 4,
        nav: true,
       
      },
    },
  });
});

(function () {
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  
})();














