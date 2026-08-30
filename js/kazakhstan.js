/* =========================================
   NOMAD — KAZAKHSTAN
   kazakhstan.js
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

    almaty: {

        number: "01",

        title: "Almaty",

        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=90",

        description:
            "Город у подножия гор, где ритм большого города встречается с природой, садами и горными маршрутами.",

        months:
            "Май — сентябрь",

        days:
            "3–5 дней",

        link:
            "almaty.html"

    },


    astana: {

        number: "02",

        title: "Astana",

        image:
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=90",

        description:
            "Современная столица Казахстана с необычной архитектурой, широкими проспектами и атмосферой нового города.",

        months:
            "Май — сентябрь",

        days:
            "2–3 дня",

        link:
            "astana.html"

    },


    charyn: {

        number: "03",

        title: "Charyn Canyon",

        image:
            "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2400&q=90",

        description:
            "Огромный каньон на юго-востоке страны, где каменные стены, ущелья и степные пейзажи создают совершенно другой Казахстан.",

        months:
            "Апрель — октябрь",

        days:
            "1–2 дня",

        link:
            "charyn.html"

    },


    kolsai: {

        number: "04",

        title: "Kolsai Lakes",

        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90",

        description:
            "Горные озёра среди хвойных лесов и вершин Северного Тянь-Шаня — одно из самых красивых природных мест страны.",

        months:
            "Май — октябрь",

        days:
            "2–3 дня",

        link:
            "kolsai.html"

    },


    mangystau: {

        number: "05",

        title: "Mangystau",

        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=90",

        description:
            "Пустынные плато, белые скалы, каньоны и бескрайние пространства Каспийского региона.",

        months:
            "Апрель — май",

        days:
            "3–5 дней",

        link:
            "mangystau.html"

    },


    turkistan: {

        number: "06",

        title: "Turkistan",

        image:
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",

        description:
            "Древний город Великого Шёлкового пути с историей, архитектурой и культурным наследием Казахстана.",

        months:
            "Апрель — май",

        days:
            "2–3 дня",

        link:
            "turkistan.html"

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
