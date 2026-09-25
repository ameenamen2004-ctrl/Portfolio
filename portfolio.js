/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


/* Close mobile menu when clicking a link */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   PROJECT HOVER CURSOR EFFECT
========================================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

    });

});


/* =========================================
   PARALLAX PROFILE CARD
========================================= */

const profileCard = document.querySelector(".profile-card");

if (profileCard) {

    document.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 900) return;

        const x = (window.innerWidth / 2 - event.clientX) / 70;
        const y = (window.innerHeight / 2 - event.clientY) / 70;

        profileCard.style.transform =
            `rotate(3deg) rotateX(${y}deg) rotateY(${x}deg)`;

    });

}


/* =========================================
   BUTTON RIPPLE
========================================= */

const buttons = document.querySelectorAll(
    ".primary-button, .secondary-button, .view-project"
);

buttons.forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* =========================================
   SMOOTH BACK TO TOP
========================================= */

const logo = document.querySelectorAll(".logo");

logo.forEach(item => {

    item.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});/* =========================================
   VIDEO PLAYER
========================================= */

// ===============================
// VIDEO PLAYER
// ===============================

const videoContainers = document.querySelectorAll(".video-container");

videoContainers.forEach(container => {
    const video = container.querySelector("video");
    const overlay = container.querySelector(".video-overlay");
    const playButton = container.querySelector(".play-button");

    // Click anywhere on video
    container.addEventListener("click", () => {

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }

    });

    // Video starts playing
    video.addEventListener("play", () => {
        overlay.classList.add("hidden");
    });

    // Video paused
    video.addEventListener("pause", () => {
        overlay.classList.remove("hidden");
    });

    // Video ended
    video.addEventListener("ended", () => {
        overlay.classList.remove("hidden");
    });
});