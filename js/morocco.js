/* =====================================================
   NOMAD — MOROCCO
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");


if (menuButton && mobileNavigation) {

    menuButton.addEventListener("click", () => {

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
            isOpen ? "hidden" : "";

    });


    const mobileLinks =
        mobileNavigation.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("active");

            mobileNavigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow = "";

        });

    });

}



/* =====================================================
   PLACE MODAL
===================================================== */

const placeCards =
    document.querySelectorAll(".place-card");


const placeModal =
    document.getElementById("placeModal");


const modalBackdrop =
    document.getElementById("modalBackdrop");


const modalClose =
    document.getElementById("modalClose");


const modalImage =
    document.getElementById("modalImage");


const modalLocation =
    document.getElementById("modalLocation");


const modalTitle =
    document.getElementById("modalTitle");


const modalDescription =
    document.getElementById("modalDescription");


const addRoute =
    document.getElementById("addRoute");


const moreDetails =
    document.getElementById("moreDetails");



let selectedPlace = null;



/* =====================================================
   OPEN PLACE
===================================================== */

function openPlace(card) {

    selectedPlace = card;


    const title =
        card.dataset.title;


    const location =
        card.dataset.location;


    const description =
        card.dataset.description;


    const image =
        card.dataset.image;



    modalTitle.textContent =
        title;


    modalLocation.textContent =
        location;


    modalDescription.textContent =
        description;


    modalImage.style.backgroundImage =
        `url("${image}")`;



    placeModal.classList.add("open");

    placeModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}



/* =====================================================
   CLOSE PLACE
===================================================== */

function closePlace() {

    placeModal.classList.remove("open");

    placeModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );


    selectedPlace = null;

}



/* =====================================================
   CARD CLICK
===================================================== */

placeCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            openPlace(card);

        }
    );

});



/* =====================================================
   CLOSE EVENTS
===================================================== */

modalClose.addEventListener(
    "click",
    closePlace
);


modalBackdrop.addEventListener(
    "click",
    closePlace
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            placeModal.classList.contains("open")
        ) {

            closePlace();

        }

    }
);



/* =====================================================
   ADD TO ROUTE
===================================================== */

addRoute.addEventListener(
    "click",
    () => {

        if (!selectedPlace) {
            return;
        }


        const title =
            selectedPlace.dataset.title;


        /*
            Пока это фронтенд.

            Позже сюда можно подключить
            настоящий localStorage / аккаунт /
            страницу маршрута.
        */

        let savedPlaces =
            JSON.parse(
                localStorage.getItem(
                    "nomadMoroccoPlaces"
                )
            ) || [];


        if (!savedPlaces.includes(title)) {

            savedPlaces.push(title);

            localStorage.setItem(
                "nomadMoroccoPlaces",
                JSON.stringify(savedPlaces)
            );

            addRoute.innerHTML =
                `
                    Добавлено в мой маршрут
                    <span>✓</span>
                `;

        } else {

            addRoute.innerHTML =
                `
                    Уже в маршруте
                    <span>✓</span>
                `;

        }

    }
);



/* =====================================================
   MORE DETAILS
===================================================== */

moreDetails.addEventListener(
    "click",
    () => {

        if (!selectedPlace) {
            return;
        }


        const title =
            selectedPlace.dataset.title;


        /*
            Сейчас показываем расширенное
            состояние.

            Когда сделаем отдельные страницы
            мест, здесь можно будет заменить
            на:

            window.location.href =
                "places/agafay.html";
        */

        alert(
            `${title}\n\nСтраница места будет открываться здесь.`
        );

    }
);



/* =====================================================
   ROUTE CARDS
===================================================== */

const routeCards =
    document.querySelectorAll(".route-card");


routeCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const route =
                card.dataset.route;


            /*
                Сохраняем выбранный маршрут.
            */

            localStorage.setItem(
                "nomadSelectedRoute",
                route
            );


            /*
                Переходим на страницу маршрутов.
            */

            window.location.href =
                "routes.html";

        }
    );

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".place-card, .route-card, .best-time__content, .intro__content"
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

    revealObserver.observe(element);

});



/* =====================================================
   PREVENT IMAGE DRAG
===================================================== */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "dragstart",
            event => {

                event.preventDefault();

            }
        );

    });
