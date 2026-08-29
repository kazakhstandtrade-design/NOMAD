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
            menuButton.classList.toggle("active");

        mobileNavigation.classList.toggle(
            "open"
        );

        document.body.classList.toggle(
            "menu-open"
        );

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    mobileNavigation
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                menuButton.classList.remove(
                    "active"
                );

                mobileNavigation.classList.remove(
                    "open"
                );

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
   IMAGE HOVER EFFECT
========================================= */

const placeCards =
    document.querySelectorAll(".place-card");


placeCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.zIndex = "5";

    });


    card.addEventListener("mouseleave", () => {

        card.style.zIndex = "";

    });

});



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .place-card, .way-card, .season-item, .route-row"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
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

    element.classList.add(
        "reveal"
    );

    observer.observe(element);

});
