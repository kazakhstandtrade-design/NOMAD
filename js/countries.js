/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.querySelector(
    ".countries-menu-button"
);

const mobileNavigation = document.querySelector(
    ".countries-mobile-navigation"
);


if (menuButton && mobileNavigation) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                menuButton.classList.toggle("active");

            mobileNavigation.classList.toggle(
                "open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

            document.body.style.overflow =
                isOpen ? "hidden" : "";

        }
    );


    const mobileLinks =
        mobileNavigation.querySelectorAll("a");


    mobileLinks.forEach(
        (link) => {

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

                    document.body.style.overflow = "";

                }
            );

        }
    );

}



/* =========================================
   COUNTRY HOVER
========================================= */

const countryItems =
    document.querySelectorAll(".country-item");


countryItems.forEach(
    (item) => {

        item.addEventListener(
            "mouseenter",
            () => {

                item.classList.add("hovered");

            }
        );


        item.addEventListener(
            "mouseleave",
            () => {

                item.classList.remove("hovered");

            }
        );

    }
);
