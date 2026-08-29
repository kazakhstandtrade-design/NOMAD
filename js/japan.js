/* =========================================
   NOMAD — JAPAN
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");

const mobileLinks =
    document.querySelectorAll(
        ".mobile-navigation a"
    );

const revealElements =
    document.querySelectorAll(".reveal");

const placeCurrent =
    document.getElementById("placeCurrent");



/* =========================================
   MOBILE MENU
========================================= */

if (menuButton && mobileNavigation) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                menuButton.classList.toggle("active");


            mobileNavigation.classList.toggle(
                "open",
                isOpen
            );


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        }
    );

}



/* =========================================
   CLOSE MOBILE MENU
========================================= */

mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            menuButton.classList.remove(
                "active"
            );


            mobileNavigation.classList.remove(
                "open"
            );


            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


            document.body.classList.remove(
                "menu-open"
            );

        }
    );

});



/* =========================================
   REVEAL ON SCROLL
========================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

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
   ACTIVE PLACE COUNTER
========================================= */

const placeCards =
    document.querySelectorAll(".place-card");


const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting &&
                    entry.intersectionRatio > 0.35
                ) {

                    const number =
                        entry.target.dataset.place;

                    if (number) {

                        placeCurrent.textContent =
                            number;

                    }

                }

            });

        },
        {
            threshold: [
                0.35,
                0.6
            ]
        }
    );


placeCards.forEach(card => {

    counterObserver.observe(card);

});



/* =========================================
   IMAGE PRELOAD
========================================= */

const images =
    document.querySelectorAll("img");


images.forEach(image => {

    image.addEventListener(
        "error",
        () => {

            image.style.opacity =
                "0.4";

        }
    );

});



/* =========================================
   SMOOTH SCROLL
========================================= */

const scrollLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


scrollLinks.forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});



/* =========================================
   PARALLAX HERO
========================================= */

const hero =
    document.querySelector(".japan-hero");

const heroBackground =
    document.querySelector(
        ".japan-hero__background"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!hero || !heroBackground) {
            return;
        }


        const scroll =
            window.scrollY;


        const heroHeight =
            hero.offsetHeight;


        if (scroll <= heroHeight) {

            const movement =
                scroll * 0.18;


            heroBackground.style.transform =
                `scale(1.03) translateY(${movement}px)`;

        }

    },
    {
        passive: true
    }
);



/* =========================================
   PREVENT IMAGE DRAG
========================================= */

images.forEach(image => {

    image.addEventListener(
        "dragstart",
        event => {

            event.preventDefault();

        }
    );

});
