/* =========================================
   NOMAD — JAPAN
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");


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
                isOpen
            );


            document.body.style.overflow =
                isOpen
                    ? "hidden"
                    : "";

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

            document.body.style.overflow =
                "";

        }
    );

});



/* =========================================
   SMOOTH SCROLL
========================================= */

const discoverButton =
    document.querySelector(".hero-scroll");


if (discoverButton) {

    discoverButton.addEventListener(
        "click",
        event => {

            event.preventDefault();


            const target =
                document.querySelector("#places");


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}



/* =========================================
   IMAGE PARALLAX
========================================= */

const statement =
    document.querySelector(
        ".japan-statement"
    );

const statementImage =
    document.querySelector(
        ".japan-statement__image img"
    );


function updateParallax() {

    if (!statement || !statementImage) {
        return;
    }


    if (window.innerWidth <= 650) {
        statementImage.style.transform = "";
        return;
    }


    const rect =
        statement.getBoundingClientRect();


    const windowHeight =
        window.innerHeight;


    if (
        rect.bottom < 0 ||
        rect.top > windowHeight
    ) {

        return;

    }


    const progress =
        (
            windowHeight - rect.top
        ) /
        (
            windowHeight + rect.height
        );


    const movement =
        (progress - .5) * 40;


    statementImage.style.transform =
        `scale(1.04) translateY(${movement}px)`;

}


window.addEventListener(
    "scroll",
    updateParallax,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    updateParallax
);


updateParallax();



/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        ".place-card, .japan-intro__content, .japan-plan__inner"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal-element"
    );

    revealObserver.observe(
        element
    );

});



/* =========================================
   PREVENT IMAGE DRAG
========================================= */

const images =
    document.querySelectorAll("img");


images.forEach(image => {

    image.addEventListener(
        "dragstart",
        event => {

            event.preventDefault();

        }
    );

});
