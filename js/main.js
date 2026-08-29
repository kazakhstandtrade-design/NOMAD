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
   HERO PARALLAX
========================================= */

const heroImage =
    document.querySelector(".hero__image");


if (heroImage) {

    window.addEventListener("scroll", () => {

        const scroll =
            window.scrollY;


        if (scroll < window.innerHeight) {

            heroImage.style.transform =
                `scale(1.02) translateY(${scroll * 0.06}px)`;

        }

    });

}



/* =========================================
   ROUTE DATA
========================================= */

const routes = {

    italy: {

        country: "Italy",

        number: "01",

        route:
            "Rome → Florence → Amalfi",

        days:
            "7 days",

        price:
            "$1,290",

        image:
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2200&q=90",

        page:
            "italy-route.html"

    },


    japan: {

        country: "Japan",

        number: "02",

        route:
            "Tokyo → Kyoto → Osaka",

        days:
            "10 days",

        price:
            "$2,190",

        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2200&q=90",

        page:
            "japan-route.html"

    },


    iceland: {

        country: "Iceland",

        number: "03",

        route:
            "Reykjavik → Golden Circle → South Coast",

        days:
            "6 days",

        price:
            "$1,790",

        image:
            "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=2200&q=90",

        page:
            "iceland-route.html"

    }

};



/* =========================================
   ROUTE MODAL ELEMENTS
========================================= */

const routeModal =
    document.querySelector(".route-modal");

const modalBackground =
    document.querySelector(
        ".route-modal__background"
    );

const modalCountry =
    document.querySelector(
        "#modalCountry"
    );

const modalNumber =
    document.querySelector(
        "#modalNumber"
    );

const modalRoute =
    document.querySelector(
        "#modalRoute"
    );

const modalDays =
    document.querySelector(
        "#modalDays"
    );

const modalPrice =
    document.querySelector(
        "#modalPrice"
    );

const modalLink =
    document.querySelector(
        "#modalLink"
    );

const closeButton =
    document.querySelector(
        ".route-modal__close"
    );



/* =========================================
   OPEN ROUTE
========================================= */

function openRoute(routeName) {

    const route =
        routes[routeName];


    if (!route) {
        return;
    }


    modalBackground.style.backgroundImage =
        `url("${route.image}")`;


    modalCountry.textContent =
        route.country;


    modalNumber.textContent =
        route.number;


    modalRoute.textContent =
        route.route;


    modalDays.textContent =
        route.days;


    modalPrice.textContent =
        route.price;


    modalLink.href =
        route.page;


    routeModal.classList.add("open");

    routeModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}



/* =========================================
   CLOSE ROUTE
========================================= */

function closeRoute() {

    routeModal.classList.remove("open");

    routeModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}



/* =========================================
   CARD CLICK
========================================= */

const journeyCards =
    document.querySelectorAll(
        ".journey-card"
    );


journeyCards.forEach((card) => {

    card.addEventListener("click", () => {

        const routeName =
            card.dataset.route;


        openRoute(routeName);

    });

});



/* =========================================
   CLOSE BUTTON
========================================= */

if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeRoute
    );

}



/* =========================================
   CLOSE ON BACKGROUND CLICK
========================================= */

if (routeModal) {

    routeModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === routeModal ||
                event.target ===
                document.querySelector(
                    ".route-modal__overlay"
                )
            ) {

                closeRoute();

            }

        }
    );

}



/* =========================================
   ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            routeModal.classList.contains("open")
        ) {

            closeRoute();

        }

    }
);
