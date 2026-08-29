/* =========================================
   NOMAD — ITALY
   italy.js
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

    rome: {

        number: "01",

        title: "Rome",

        image:
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=2400&q=90",

        description:
            "Вечный город, где история, архитектура и современная жизнь встречаются на каждом шагу.",

        months:
            "Апрель — июнь",

        days:
            "3–4 дня",

        link:
            "rome.html"

    },


    florence: {

        number: "02",

        title: "Florence",

        image:
            "https://images.unsplash.com/photo-1543429258-0c5b6a6b1f5f?auto=format&fit=crop&w=2400&q=90",

        description:
            "Город искусства эпохи Возрождения, уютных улиц, галерей и тосканских закатов.",

        months:
            "Май — октябрь",

        days:
            "2–3 дня",

        link:
            "florence.html"

    },


    venice: {

        number: "03",

        title: "Venice",

        image:
            "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=2400&q=90",

        description:
            "Вечерняя Венеция, каналы, старинные площади и город, который невозможно спутать ни с одним другим.",

        months:
            "Апрель — октябрь",

        days:
            "2–3 дня",

        link:
            "venice.html"

    },


    amalfi: {

        number: "04",

        title: "Amalfi Coast",

        image:
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2400&q=90",

        description:
            "Скалистое побережье, маленькие города, бирюзовое море и дороги с невероятными видами.",

        months:
            "Май — сентябрь",

        days:
            "3–5 дней",

        link:
            "amalfi.html"

    },


    dolomites: {

        number: "05",

        title: "Dolomites",

        image:
            "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=2400&q=90",

        description:
            "Горные вершины, альпийские озёра и маршруты для тех, кто хочет увидеть другую Италию.",

        months:
            "Июнь — сентябрь",

        days:
            "3–6 дней",

        link:
            "dolomites.html"

    },


    sicily: {

        number: "06",

        title: "Sicily",

        image:
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=2400&q=90",

        description:
            "Средиземноморское побережье, лимонные сады, маленькие города и медленный ритм островной жизни.",

        months:
            "Май — октябрь",

        days:
            "4–7 дней",

        link:
            "sicily.html"

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
