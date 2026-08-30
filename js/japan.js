/* =========================================
   NOMAD — JAPAN
   japan.js
========================================= */


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
            mobileNavigation.classList.toggle("open");

        menuButton.classList.toggle(
            "active",
            isOpen
        );

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });


    const mobileLinks =
        mobileNavigation.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove(
                "open"
            );

            menuButton.classList.remove(
                "active"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        });

    });

}



/* =========================================
   HEADER ON SCROLL
========================================= */

const header =
    document.querySelector(".header");


if (header) {

    const updateHeader = () => {

        if (window.scrollY > 60) {

            header.classList.add(
                "header--scrolled"
            );

        } else {

            header.classList.remove(
                "header--scrolled"
            );

        }

    };


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();

}



/* =========================================
   PLACE DATA
========================================= */

const places = {

    tokyo: {

        number: "01",

        title: "Tokyo",

        image:
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2400&q=90",

        description:
            "Город, где неоновые улицы, традиционные кварталы и современная культура существуют рядом.",

        months:
            "Март — май",

        days:
            "4–5 дней",

        link:
            "tokyo.html"

    },


    kyoto: {

        number: "02",

        title: "Kyoto",

        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2400&q=90",

        description:
            "Старинные храмы, тихие сады, деревянные улицы и атмосфера традиционной Японии.",

        months:
            "Март — май",

        days:
            "3–4 дня",

        link:
            "kyoto.html"

    },


    osaka: {

        number: "03",

        title: "Osaka",

        image:
            "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=2400&q=90",

        description:
            "Энергичный город с яркими улицами, современной архитектурой и одной из лучших кухонь Японии.",

        months:
            "Март — май",

        days:
            "2–3 дня",

        link:
            "osaka.html"

    },


    hokkaido: {

        number: "04",

        title: "Hokkaido",

        image:
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=2400&q=90",

        description:
            "Просторные пейзажи, горы, озёра и совершенно другой ритм японского путешествия.",

        months:
            "Декабрь — март",

        days:
            "4–6 дней",

        link:
            "hokkaido.html"

    },


    nara: {

        number: "05",

        title: "Nara",

        image:
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=2400&q=90",

        description:
            "Древняя столица, храмы, парки и знаменитые олени среди спокойных исторических улиц.",

        months:
            "Март — май",

        days:
            "1–2 дня",

        link:
            "nara.html"

    },


    fuji: {

        number: "06",

        title: "Mount Fuji",

        image:
            "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=2400&q=90",

        description:
            "Символ Японии, озёра, горные пейзажи и один из самых впечатляющих видов страны.",

        months:
            "Апрель — май",

        days:
            "2–3 дня",

        link:
            "fuji.html"

    }

};



/* =========================================
   MODAL ELEMENTS
========================================= */

const placeModal =
    document.querySelector("#placeModal");

const modalBackground =
    document.querySelector(".place-modal__background");

const modalClose =
    document.querySelector(".place-modal__close");

const modalNumber =
    document.querySelector("#modalNumber");

const modalTitle =
    document.querySelector("#modalTitle");

const modalDescription =
    document.querySelector("#modalDescription");

const modalMonths =
    document.querySelector("#modalMonths");

const modalDays =
    document.querySelector("#modalDays");

const modalLink =
    document.querySelector("#modalLink");



/* =========================================
   OPEN PLACE
========================================= */

const placeCards =
    document.querySelectorAll(".place-card");


placeCards.forEach(card => {

    card.addEventListener("click", () => {

        const placeId =
            card.dataset.place;

        const place =
            places[placeId];

        if (!place) {
            return;
        }


        modalBackground.style.backgroundImage =
            `url("${place.image}")`;


        modalNumber.textContent =
            place.number;


        modalTitle.textContent =
            place.title;


        modalDescription.textContent =
            place.description;


        modalMonths.textContent =
            place.months;


        modalDays.textContent =
            place.days;


        modalLink.href =
            place.link;


        placeModal.classList.add("open");

        placeModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "modal-open"
        );

    });

});



/* =========================================
   CLOSE MODAL
========================================= */

const closeModal = () => {

    placeModal.classList.remove("open");

    placeModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

};


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


placeModal.addEventListener(
    "click",
    event => {

        if (
            event.target === placeModal ||
            event.target ===
            document.querySelector(
                ".place-modal__overlay"
            )
        ) {

            closeModal();

        }

    }
);



/* =========================================
   ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            placeModal.classList.contains("open")
        ) {

            closeModal();

        }

    }
);



/* =========================================
   PREVENT MODAL LINK FROM CLOSING
========================================= */

if (modalLink) {

    modalLink.addEventListener(
        "click",
        event => {

            event.stopPropagation();

        }
    );

}
