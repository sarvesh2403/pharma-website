/* ==========================================
   PRAKASH PHARMA
   slider.js
   Swiper Slider Configurations
========================================== */

"use strict";

/* ==========================================
   HERO SLIDER
========================================== */

const heroSliderElement = document.querySelector(".heroSwiper");

if (heroSliderElement && typeof Swiper !== "undefined") {

    const heroSwiper = new Swiper(".heroSwiper", {

        loop: true,

        speed: 1200,

        effect: "slide",

        autoplay: {

            delay: 5000,

            disableOnInteraction: false,

        },

        pagination: {

            el: ".hero-pagination",

            clickable: true,

        },

        navigation: {

            nextEl: ".hero-next",

            prevEl: ".hero-prev",

        },

    });

}

/* ==========================================
   TESTIMONIAL SLIDER
========================================== */

const testimonialSlider = document.querySelector(".testimonialSwiper");

if (testimonialSlider && typeof Swiper !== "undefined") {

    const testimonialSwiper = new Swiper(".testimonialSwiper", {

        loop: true,

        spaceBetween: 30,

        speed: 900,

        autoplay: {

            delay: 3500,

            disableOnInteraction: false,

        },

        pagination: {

            el: ".testimonial-pagination",

            clickable: true,

        },

        breakpoints: {

            0: {

                slidesPerView: 1,

            },

            768: {

                slidesPerView: 2,

            },

            1200: {

                slidesPerView: 3,

            }

        }

    });

}

/* ==========================================
   BRANDS SLIDER
========================================== */

const brandSlider = document.querySelector(".brandSwiper");

if (brandSlider && typeof Swiper !== "undefined") {

    const brandSwiper = new Swiper(".brandSwiper", {

        loop: true,

        speed: 5000,

        spaceBetween: 30,

        freeMode: true,

        autoplay: {

            delay: 0,

            disableOnInteraction: false,

        },

        breakpoints: {

            0: {

                slidesPerView: 2,

            },

            576: {

                slidesPerView: 3,

            },

            768: {

                slidesPerView: 4,

            },

            992: {

                slidesPerView: 5,

            },

            1200: {

                slidesPerView: 6,

            }

        }

    });

}

/* ==========================================
   GALLERY SLIDER
========================================== */

const gallerySlider = document.querySelector(".gallerySwiper");

if (gallerySlider && typeof Swiper !== "undefined") {

    const gallerySwiper = new Swiper(".gallerySwiper", {

        loop: true,

        spaceBetween: 20,

        speed: 700,

        autoplay: {

            delay: 3000,

            disableOnInteraction: false,

        },

        pagination: {

            el: ".gallery-pagination",

            clickable: true,

        },

        breakpoints: {

            0: {

                slidesPerView: 1,

            },

            768: {

                slidesPerView: 2,

            },

            1200: {

                slidesPerView: 3,

            }

        }

    });

}

/* ==========================================
   PRODUCT SLIDER
========================================== */

const productSlider = document.querySelector(".productSwiper");

if (productSlider && typeof Swiper !== "undefined") {

    const productSwiper = new Swiper(".productSwiper", {

        loop: true,

        spaceBetween: 25,

        speed: 800,

        autoplay: {

            delay: 2800,

            disableOnInteraction: false,

        },

        navigation: {

            nextEl: ".product-next",

            prevEl: ".product-prev",

        },

        breakpoints: {

            0: {

                slidesPerView: 1,

            },

            768: {

                slidesPerView: 2,

            },

            992: {

                slidesPerView: 3,

            },

            1400: {

                slidesPerView: 4,

            }

        }

    });

}

/* ==========================================
   END
========================================== */

console.log("slider.js loaded successfully");