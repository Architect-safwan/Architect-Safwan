/* =========================
   SAFWAN ARCHITECT
   Main JavaScript
========================= */


/* Smooth project links */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* Navbar background when scrolling */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.style.position = "fixed";
        navbar.style.background = "rgba(15,15,15,.92)";
        navbar.style.backdropFilter = "blur(10px)";

    } else {

        navbar.style.position = "absolute";
        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";

    }

});


/* Reveal animations */

const revealElements =
    document.querySelectorAll(
        ".intro, .project, .about-grid, .process-grid, .contact"
    );


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});
