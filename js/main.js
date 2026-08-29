/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileNavigation =
    document.querySelector(".mobile-navigation");


if (menuButton && mobileNavigation) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNavigation.classList.contains("open");


            mobileNavigation.classList.toggle(
                "open"
            );

            menuButton.classList.toggle(
                "active"
            );

            document.body.classList.toggle(
                "menu-open"
            );


            menuButton.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        }
    );

}



/* =========================================
   CLOSE MOBILE MENU
========================================= */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-navigation a"
    );


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            mobileNavigation.classList.remove(
                "open"
            );

            menuButton.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "menu-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});



/* =========================================
   HERO IMAGE PARALLAX
========================================= */

const heroImage =
    document.querySelector(".hero__image");


if (heroImage) {

    window.addEventListener(
        "scroll",
        () => {

            const scrollPosition =
                window.scrollY;


            if (scrollPosition < window.innerHeight) {

                heroImage.style.transform =
                    `scale(1.01) translateY(${scrollPosition * 0.08}px)`;

            }

        }
    );

}
