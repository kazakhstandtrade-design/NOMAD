/* =====================================================
   NOMAD — MOROCCO
===================================================== */


/* =====================================================
   HERO
===================================================== */

const heroBackground =
    document.getElementById("heroBackground");


/*
    Предзагрузка картинки.

    Благодаря этому новая картинка сначала полностью
    загружается, а уже потом появляется на экране.

    Поэтому между изображениями не появляется
    черный кадр.
*/

function changeHeroBackground(imageUrl) {

    const image = new Image();

    image.src = imageUrl;

    image.onload = () => {

        heroBackground.style.opacity = "0";


        setTimeout(() => {

            heroBackground.style.backgroundImage =
                `url("${imageUrl}")`;

            heroBackground.style.opacity = "1";

        }, 150);

    };

}


/* =====================================================
   PLACE CARDS
===================================================== */

const placeCards =
    document.querySelectorAll(".place-card");


const placeModal =
    document.getElementById("placeModal");


const modalImage =
    document.getElementById("modalImage");


const modalTitle =
    document.getElementById("modalTitle");


const modalLocation =
    document.getElementById("modalLocation");


const modalDescription =
    document.getElementById("modalDescription");


const modalDetails =
    document.getElementById("modalDetails");


const modalClose =
    document.getElementById("modalClose");


const addRouteButton =
    document.getElementById("addRouteButton");


let selectedPlace = null;



/* =====================================================
   OPEN MODAL
===================================================== */

function openPlace(card) {

    selectedPlace = {

        name:
            card.dataset.name,

        location:
            card.dataset.location,

        image:
            card.dataset.image,

        description:
            card.dataset.description,

        details:
            card.dataset.details

    };


    modalImage.src =
        selectedPlace.image;

    modalImage.alt =
        selectedPlace.name;


    modalTitle.textContent =
        selectedPlace.name;


    modalLocation.textContent =
        selectedPlace.location;


    modalDescription.textContent =
        selectedPlace.description;


    modalDetails.textContent =
        selectedPlace.details;


    placeModal.classList.add("open");

    document.body.classList.add("modal-open");

}



/* =====================================================
   CARD CLICK
===================================================== */

placeCards.forEach(card => {

    card.addEventListener("click", event => {

        /*
            Если пользователь нажал на внутреннюю
            кнопку — всё равно открываем карточку.
        */

        event.preventDefault();

        openPlace(card);

    });

});



/* =====================================================
   CLOSE MODAL
===================================================== */

function closePlace() {

    placeModal.classList.remove("open");

    document.body.classList.remove("modal-open");

}


modalClose.addEventListener(
    "click",
    closePlace
);


const modalBackdrop =
    document.querySelector(".place-modal__backdrop");


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
   ADD TO MY ROUTE
===================================================== */

addRouteButton.addEventListener(
    "click",
    () => {

        if (!selectedPlace) {
            return;
        }


        let savedRoute =
            JSON.parse(
                localStorage.getItem("nomadRoute")
            ) || [];


        const alreadyAdded =
            savedRoute.some(
                item =>
                    item.name === selectedPlace.name
            );


        if (!alreadyAdded) {

            savedRoute.push({
                name: selectedPlace.name,
                location: selectedPlace.location,
                image: selectedPlace.image,
                description: selectedPlace.description
            });


            localStorage.setItem(
                "nomadRoute",
                JSON.stringify(savedRoute)
            );

        }


        addRouteButton.innerHTML =
            "Добавлено ✓";


        setTimeout(() => {

            addRouteButton.innerHTML =
                "Добавить в мой маршрут <span>+</span>";

        }, 1600);

    }
);



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");


const mobileNavigation =
    document.getElementById("mobileNavigation");


if (menuButton) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNavigation.classList.toggle("open");


            menuButton.classList.toggle(
                "active",
                isOpen
            );


            document.body.style.overflow =
                isOpen
                    ? "hidden"
                    : "";

        }
    );

}



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document
    .querySelectorAll(".mobile-navigation a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileNavigation.classList.remove(
                    "open"
                );

                menuButton.classList.remove(
                    "active"
                );

                document.body.style.overflow =
                    "";

            }
        );

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
