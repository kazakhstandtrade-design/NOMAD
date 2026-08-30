/* =========================================
   NOMAD — SWITZERLAND
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
   PLACE CARDS
========================================= */

const placeCards =
    document.querySelectorAll(
        ".place-card"
    );


placeCards.forEach(card => {

    const routeButton =
        card.querySelector(
            ".place-button--route"
        );


    /*
        Desktop:
        при наведении карточка
        показывает действия.

        Mobile:
        по нажатию карточка
        становится selected.
    */


    card.addEventListener(
        "click",
        event => {

            /*
                Если пользователь нажал
                на кнопку или ссылку,
                не меняем состояние карточки.
            */

            if (
                event.target.closest(
                    ".place-button"
                )
            ) {

                return;

            }


            if (
                window.innerWidth <= 650
            ) {

                placeCards.forEach(
                    item => {

                        if (item !== card) {

                            item.classList.remove(
                                "selected"
                            );

                        }

                    }
                );


                card.classList.toggle(
                    "selected"
                );

            }

        }
    );



    /* =====================================
       ADD TO MY ROUTE
    ====================================== */

    if (routeButton) {

        routeButton.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();


                const title =
                    card.dataset.title;


                /*
                    Получаем существующий маршрут
                    из localStorage.
                */

                let savedRoute = [];


                try {

                    savedRoute =
                        JSON.parse(
                            localStorage.getItem(
                                "nomadRoute"
                            )
                        ) || [];

                } catch (error) {

                    savedRoute = [];

                }



                /*
                    Проверяем,
                    нет ли места уже в маршруте.
                */

                const alreadyAdded =
                    savedRoute.some(
                        item =>
                            item.title === title
                    );


                if (!alreadyAdded) {

                    savedRoute.push({

                        title:
                            title,

                        location:
                            card.dataset.location,

                        image:
                            card.dataset.image,

                        link:
                            card.dataset.link

                    });


                    localStorage.setItem(
                        "nomadRoute",
                        JSON.stringify(
                            savedRoute
                        )
                    );


                    routeButton.textContent =
                        "Добавлено ✓";

                    routeButton.style.background =
                        "white";

                    routeButton.style.color =
                        "#111";


                } else {

                    routeButton.textContent =
                        "Уже в маршруте ✓";

                }


                /*
                    Через несколько секунд
                    возвращаем исходный текст.
                */

                setTimeout(
                    () => {

                        routeButton.textContent =
                            "Добавить в мой маршрут";

                        routeButton.style.background =
                            "";

                        routeButton.style.color =
                            "";

                    },
                    1800
                );

            }
        );

    }

});



/* =========================================
   IMAGE PRELOAD
========================================= */

const images =
    document.querySelectorAll(
        "img"
    );


images.forEach(image => {

    const source =
        image.getAttribute("src");


    if (!source) {
        return;
    }


    const preload =
        new Image();


    preload.src =
        source;

});



/* =========================================
   HERO PARALLAX
========================================= */

const hero =
    document.querySelector(
        ".country-hero"
    );

const heroBackground =
    document.getElementById(
        "heroBackground"
    );


if (
    hero &&
    heroBackground &&
    window.innerWidth > 650
) {

    window.addEventListener(
        "scroll",
        () => {

            const rect =
                hero.getBoundingClientRect();


            if (
                rect.bottom < 0 ||
                rect.top > window.innerHeight
            ) {

                return;

            }


            const offset =
                window.scrollY * 0.12;


            heroBackground.style.transform =
                `scale(1.03) translateY(${offset}px)`;

        },
        {
            passive: true
        }
    );

}



/* =========================================
   TOUCH FEEDBACK
========================================= */

placeCards.forEach(card => {

    card.addEventListener(
        "touchstart",
        () => {

            if (
                window.innerWidth <= 650
            ) {

                card.classList.add(
                    "touching"
                );

            }

        },
        {
            passive: true
        }
    );


    card.addEventListener(
        "touchend",
        () => {

            card.classList.remove(
                "touching"
            );

        },
        {
            passive: true
        }
    );

});



/* =========================================
   RESET MOBILE MENU ON RESIZE
========================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 650
        ) {

            if (mobileNavigation) {

                mobileNavigation.classList.remove(
                    "open"
                );

            }


            if (menuButton) {

                menuButton.classList.remove(
                    "active"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            document.body.style.overflow =
                "";

        }

    }
);
