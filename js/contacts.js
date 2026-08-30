/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileNavigation =
    document.querySelector(".mobile-navigation");


if (menuButton && mobileNavigation) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            mobileNavigation.classList.contains("open");


        mobileNavigation.classList.toggle("open");

        menuButton.classList.toggle("active");

        document.body.classList.toggle(
            "menu-open"
        );


        menuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

    });


    const mobileLinks =
        mobileNavigation.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove("open");

            menuButton.classList.remove("active");

            document.body.classList.remove(
                "menu-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}



/* =========================================
   CONTACT HERO PARALLAX
========================================= */

const heroImage =
    document.querySelector(".contact-hero__image");


if (heroImage) {

    window.addEventListener("scroll", () => {

        const scroll =
            window.scrollY;


        if (scroll < window.innerHeight) {

            heroImage.style.transform =
                `scale(1.03) translateY(${scroll * 0.04}px)`;

        }

    });

}



/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.querySelector("#contactForm");


const formSuccess =
    document.querySelector("#formSuccess");


if (contactForm && formSuccess) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            formSuccess.classList.add("show");


            contactForm.reset();


            setTimeout(() => {

                formSuccess.classList.remove("show");

            }, 5000);

        }
    );

}
