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
                menuButton.classList.toggle("active");

            mobileNavigation.classList.toggle(
                "open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

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

                document.body.classList.remove(
                    "menu-open"
                );

            }
        );

    });

}



/* =========================================
   COUNTRY PAGE TRANSITION
========================================= */

const countryCards =
    document.querySelectorAll(".country-card");


countryCards.forEach(card => {

    card.addEventListener(
        "click",
        function(event) {

            const destination =
                this.getAttribute("href");


            /*
             * На мобильных оставляем
             * обычный переход.
             */

            if (window.innerWidth <= 650) {
                return;
            }


            /*
             * Сохраняем красивый
             * переход перед открытием страницы.
             */

            event.preventDefault();


            this.classList.add(
                "country-card--opening"
            );


            setTimeout(
                () => {

                    window.location.href =
                        destination;

                },
                450
            );

        }
    );

});
