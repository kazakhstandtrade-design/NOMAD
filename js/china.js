/* =========================================
   NOMAD — CHINA
   china.js
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

    beijing: {

        number: "01",

        title: "Beijing",

        image:
            "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=2400&q=90",

        description:
            "Древняя столица, где императорские дворцы, современные кварталы и история Китая встречаются в одном городе.",

        months:
            "Апрель — май",

        days:
            "3–5 дней",

        link:
            "beijing.html"

    },


    shanghai: {

        number: "02",

        title: "Shanghai",

        image:
            "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=2400&q=90",

        description:
            "Город небоскрёбов, неона и старых кварталов, где традиционный Китай встречается с современной Азией.",

        months:
            "Март — май",

        days:
            "3–4 дня",

        link:
            "shanghai.html"

    },


    zhangjiajie: {

        number: "03",

        title: "Zhangjiajie",

        image:
            "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=2400&q=90",

        description:
            "Огромные каменные столбы, туман и горные тропы — пейзажи, которые выглядят почти нереальными.",

        months:
            "Апрель — октябрь",

        days:
            "3–4 дня",

        link:
            "zhangjiajie.html"

    },


    guilin: {

        number: "04",

        title: "Guilin",

        image:
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=2400&q=90",

        description:
            "Карстовые горы, река Ли и спокойные пейзажи южного Китая, которые лучше всего исследовать медленно.",

        months:
            "Апрель — октябрь",

        days:
            "2–4 дня",

        link:
            "guilin.html"

    },


    xian: {

        number: "05",

        title: "Xi'an",

        image:
            "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=2400&q=90",

        description:
            "Один из важнейших городов древнего Китая, знаменитый Терракотовой армией и атмосферой старого Шёлкового пути.",

        months:
            "Март — май",

        days:
            "2–3 дня",

        link:
            "xian.html"

    },


    chengdu: {

        number: "06",

        title: "Chengdu",

        image:
            "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=2400&q=90",

        description:
            "Спокойный ритм Сычуани, чайные дома, острая кухня и возможность увидеть знаменитых больших панд.",

        months:
            "Март — июнь",

        days:
            "2–4 дня",

        link:
            "chengdu.html"

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
