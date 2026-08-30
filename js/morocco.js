/* =========================================
   NOMAD — MOROCCO
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
                String(isOpen)
            );


            document.body.style.overflow =
                isOpen
                    ? "hidden"
                    : "";

        }
    );


    const mobileLinks =
        mobileNavigation.querySelectorAll("a");


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

}



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

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
   EDITORIAL WORD MOVEMENT
========================================= */

const statement =
    document.querySelector(".statement");

const statementWord =
    document.querySelector(".statement__word");


function moveStatementWord() {

    if (
        !statement ||
        !statementWord
    ) {
        return;
    }


    const rect =
        statement.getBoundingClientRect();


    const windowHeight =
        window.innerHeight;


    const progress =
        (
            windowHeight - rect.top
        ) /
        (
            windowHeight + rect.height
        );


    const clamped =
        Math.max(
            0,
            Math.min(
                1,
                progress
            )
        );


    const movement =
        (
            clamped - 0.5
        ) * 100;


    statementWord.style.transform =
        `translateX(${movement}px)`;

}


window.addEventListener(
    "scroll",
    moveStatementWord,
    {
        passive: true
    }
);


moveStatementWord();



/* =========================================
   IMAGE LOAD EFFECT
========================================= */

const heroBackground =
    document.querySelector(
        ".hero-background"
    );


if (heroBackground) {

    heroBackground.classList.add(
        "loaded"
    );

}



/* =========================================
   CARD IMAGE HOVER
========================================= */

const placeCards =
    document.querySelectorAll(
        ".place-card"
    );


placeCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.classList.add(
                "hovered"
            );

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.classList.remove(
                "hovered"
            );

        }
    );

});



/* =========================================
   ESC — CLOSE MENU
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            menuButton &&
            mobileNavigation
        ) {

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

    }
);
