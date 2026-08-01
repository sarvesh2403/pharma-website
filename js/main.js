/* ==========================================
   PRAKASH PHARMA
   Main JavaScript
========================================== */

"use strict";

/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }
});

/* ==========================================
   STICKY HEADER
========================================== */

const header = document.getElementById("header");

function stickyHeader() {
    if (!header) return;

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", stickyHeader);
stickyHeader();

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach((link) => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
    }
});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function animateCounters() {

    if (counterStarted) return;

    const trigger = document.querySelector(".counter-area");

    if (!trigger) return;

    const top = trigger.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.innerText;

            let count = 0;

            const increment = target / 100;

            function updateCounter() {

                count += increment;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", animateCounters);
animateCounters();

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.id = "scrollTop";

document.body.appendChild(topButton);

Object.assign(topButton.style, {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    background: "#0b8f61",
    color: "#fff",
    display: "none",
    fontSize: "18px",
    zIndex: "999",
    boxShadow: "0 8px 20px rgba(0,0,0,.2)"
});

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   AOS INITIALIZATION
========================================== */

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 900,

        once: true,

        offset: 100

    });

}

/* ==========================================
   SWIPER INITIALIZATION
========================================== */

if (typeof Swiper !== "undefined") {

    const testimonialSwiper = document.querySelector(".testimonialSwiper");

    if (testimonialSwiper) {

        new Swiper(".testimonialSwiper", {

            loop: true,

            autoplay: {

                delay: 3500,

                disableOnInteraction: false

            },

            pagination: {

                el: ".swiper-pagination",

                clickable: true

            },

            breakpoints: {

                0: {
                    slidesPerView: 1
                },

                768: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },

                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }

            }

        });

    }

}

/* ==========================================
   SEARCH BAR (Products Page)
========================================== */

const searchInput = document.getElementById("productSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const filter = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            const description = card.querySelector("p").textContent.toLowerCase();

            if (title.includes(filter) || description.includes(filter)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/* ==========================================
   SIMPLE CONTACT FORM
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const message = document.getElementById("message")?.value.trim();

        if (!name || !email || !message) {

            alert("Please fill in all required fields.");

            return;

        }

        alert("Thank you! Your message has been received. (Frontend Demo)");

        contactForm.reset();

    });

}

/* ==========================================
   NEWSLETTER FORM
========================================== */

const newsletter = document.getElementById("newsletterForm");

if (newsletter) {

    newsletter.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = newsletter.querySelector("input").value.trim();

        if (!email) {

            alert("Please enter your email.");

            return;

        }

        alert("Thank you for subscribing!");

        newsletter.reset();

    });

}

/* ==========================================
   IMAGE LAZY LOADING
========================================== */

const lazyImages = document.querySelectorAll("img[data-src]");

if ("IntersectionObserver" in window && lazyImages.length) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const img = entry.target;

                img.src = img.dataset.src;

                img.removeAttribute("data-src");

                observer.unobserve(img);

            }

        });

    });

    lazyImages.forEach(img => observer.observe(img));

}

/* ==========================================
   COPYRIGHT YEAR
========================================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("✅ Prakash Pharma Website Loaded Successfully");