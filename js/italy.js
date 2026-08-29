/* =========================================
   NOMAD — ITALY PAGE
   italy.js
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.querySelector(".menu-button");
const mobileNavigation = document.querySelector(".mobile-navigation");

if (menuButton && mobileNavigation) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            mobileNavigation.classList.toggle("open");

        menuButton.classList.toggle("active", isOpen);

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });


    /* Закрываем меню при переходе по ссылке */

    const mobileLinks =
        mobileNavigation.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove("open");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        });

    });

}



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}



/* =========================================
   IMAGE PARALLAX
========================================= */

const countryHero =
    document.querySelector(".country-hero__image");

if (countryHero) {

    window.addEventListener(
        "scroll",
        () => {

            const scrollY =
                window.scrollY;

            const heroHeight =
                window.innerHeight;

            if (scrollY <= heroHeight) {

                countryHero.style.transform =
                    `translateY(${scrollY * 0.18}px) scale(1.03)`;

            }

        },
        {
            passive: true
        }
    );

}



/* =========================================
   PLACE CARDS
========================================= */

const placeCards =
    document.querySelectorAll(".place-card");

placeCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.classList.add("is-hovered");

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.classList.remove("is-hovered");

        }
    );

});



/* =========================================
   SMOOTH ANCHOR SCROLL
========================================= */

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );

anchorLinks.forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});



/* =========================================
   HEADER APPEARANCE
========================================= */

const header =
    document.querySelector(".header");

if (header) {

    const updateHeader =
        () => {

            if (window.scrollY > 60) {

                header.classList.add(
                    "header--scrolled"
                );

            } else {

                header.classList.remove(
                    "header--scrolled"
                );

            }

        };


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();

}



/* =========================================
   GALLERY
========================================= */

const galleryImages =
    document.querySelectorAll(
        ".italy-gallery img"
    );

const galleryPreview =
    document.querySelector(
        ".gallery-preview"
    );

const galleryPreviewImage =
    document.querySelector(
        ".gallery-preview img"
    );

const galleryClose =
    document.querySelector(
        ".gallery-preview__close"
    );


if (
    galleryImages.length > 0 &&
    galleryPreview &&
    galleryPreviewImage
) {

    galleryImages.forEach(image => {

        image.addEventListener(
            "click",
            () => {

                galleryPreviewImage.src =
                    image.src;

                galleryPreviewImage.alt =
                    image.alt;

                galleryPreview.classList.add(
                    "open"
                );

                document.body.classList.add(
                    "modal-open"
                );

            }
        );

    });


    const closeGallery = () => {

        galleryPreview.classList.remove(
            "open"
        );

        document.body.classList.remove(
            "modal-open"
        );

    };


    if (galleryClose) {

        galleryClose.addEventListener(
            "click",
            closeGallery
        );

    }


    galleryPreview.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                galleryPreview
            ) {

                closeGallery();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                galleryPreview.classList.contains(
                    "open"
                )
            ) {

                closeGallery();

            }

        }
    );

}



/* =========================================
   CURRENT YEAR
========================================= */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );

yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});
