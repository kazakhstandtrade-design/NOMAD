/* =====================================================
   NOMAD — COUNTRIES
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const hero =
    document.getElementById("countriesHero");

const heroBackground =
    document.getElementById("heroBackground");

const heroTitle =
    document.getElementById("heroTitle");

const heroDescription =
    document.getElementById("heroDescription");

const heroMessage =
    document.getElementById("heroMessage");

const currentNumber =
    document.getElementById("currentNumber");

const exploreButton =
    document.getElementById("exploreButton");

const heroText =
    document.querySelector(".countries-hero__text");

const track =
    document.getElementById("countriesTrack");

const slider =
    document.getElementById("countriesSlider");

const cards =
    document.querySelectorAll(".country-card");

const postcardCountry =
    document.getElementById("postcardCountry");


/* =====================================================
   STATE
===================================================== */

let activeCountry = null;
let isChanging = false;


/* =====================================================
   INITIAL STATE
===================================================== */

heroTitle.innerHTML = `
    TIME TO
    <br>
    TRAVEL
`;

heroDescription.textContent =
    "Выберите страну, чтобы открыть новое направление для путешествия.";

heroMessage.textContent =
    "Куда отправимся дальше?";

currentNumber.textContent =
    "00";

exploreButton.classList.remove("visible");

postcardCountry.textContent =
    "SOMEWHERE";


/* =====================================================
   CHANGE BACKGROUND
===================================================== */

function changeBackground(image) {

    heroBackground.classList.add("is-changing");

    setTimeout(() => {

        heroBackground.style.backgroundImage =
            `url("${image}")`;

        requestAnimationFrame(() => {

            heroBackground.classList.remove(
                "is-changing"
            );

        });

    }, 220);

}


/* =====================================================
   SELECT COUNTRY
===================================================== */

function selectCountry(card) {

    if (!card || isChanging) {
        return;
    }

    const country =
        card.dataset.country;

    const title =
        card.dataset.title;

    const description =
        card.dataset.description;

    const message =
        card.dataset.message;

    const number =
        card.dataset.number;

    const link =
        card.dataset.link;

    const image =
        card.dataset.image;


    /* Same country */

    if (activeCountry === country) {
        return;
    }


    isChanging = true;


    /* -------------------------------------------------
       HIDE OLD CONTENT
    -------------------------------------------------- */

    heroText.classList.remove("changed");

    heroTitle.style.opacity = "0";

    heroDescription.style.opacity = "0";

    exploreButton.classList.remove("visible");


    /* -------------------------------------------------
       CHANGE FULL HERO BACKGROUND
    -------------------------------------------------- */

    changeBackground(image);


    /* -------------------------------------------------
       ACTIVE CARD
    -------------------------------------------------- */

    cards.forEach(item => {

        item.classList.remove("active");

    });

    card.classList.add("active");


    /* -------------------------------------------------
       MOVE CARDS
    -------------------------------------------------- */

    moveCards(card);


    /* -------------------------------------------------
       UPDATE TEXT
    -------------------------------------------------- */

    setTimeout(() => {

        heroTitle.textContent =
            title;

        heroDescription.textContent =
            description;

        heroMessage.textContent =
            message;

        currentNumber.textContent =
            number;

        exploreButton.href =
            link;


        /* Postcard */

        postcardCountry.textContent =
            title;


        /* Show */

        heroTitle.style.opacity =
            "1";

        heroDescription.style.opacity =
            "1";

        heroText.classList.add("changed");

        exploreButton.classList.add("visible");


        activeCountry =
            country;

        isChanging =
            false;

    }, 420);

}


/* =====================================================
   MOVE CARDS
===================================================== */

function moveCards(activeCard) {

    if (window.innerWidth <= 650) {

        /*

            Mobile uses native horizontal
            scrolling.

        */

        const sliderRect =
            slider.getBoundingClientRect();

        const cardRect =
            activeCard.getBoundingClientRect();


        const cardCenter =
            cardRect.left +
            cardRect.width / 2;

        const sliderCenter =
            sliderRect.left +
            sliderRect.width / 2;


        const scrollAmount =
            cardCenter -
            sliderCenter;


        slider.scrollBy({

            left: scrollAmount,

            behavior: "smooth"

        });


        return;
    }


    const cardsArray =
        Array.from(cards);

    const index =
        cardsArray.indexOf(activeCard);


    if (index === -1) {
        return;
    }


    const cardWidth =
        activeCard.offsetWidth + 12;


    let offset =
        index * cardWidth;


    if (window.innerWidth > 1200) {

        offset =
            Math.max(
                0,
                offset - 160
            );

    } else {

        offset =
            Math.max(
                0,
                offset - 100
            );

    }


    track.style.transform =
        `translateX(-${offset}px)`;

}


/* =====================================================
   CARD CLICK
===================================================== */

cards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            selectCountry(card);

        }
    );

});


/* =====================================================
   IMAGE DRAG PREVENTION
===================================================== */

cards.forEach(card => {

    const image =
        card.querySelector("img");

    if (!image) {
        return;
    }

    image.addEventListener(
        "dragstart",
        event => {

            event.preventDefault();

        }
    );

});


/* =====================================================
   PRELOAD FULL BACKGROUNDS
===================================================== */

cards.forEach(card => {

    const image =
        card.dataset.image;

    if (!image) {
        return;
    }

    const preload =
        new Image();

    preload.src =
        image;

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");


if (menuButton && mobileNavigation) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                menuButton.classList.toggle(
                    "active"
                );


            mobileNavigation.classList.toggle(
                "open",
                isOpen
            );


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
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


/* =====================================================
   RESIZE
===================================================== */

window.addEventListener(
    "resize",
    () => {

        if (!activeCountry) {

            track.style.transform =
                "";

            return;

        }


        const activeCard =
            document.querySelector(
                `.country-card[data-country="${activeCountry}"]`
            );


        if (!activeCard) {
            return;
        }


        if (window.innerWidth <= 650) {

            track.style.transform =
                "";

        } else {

            moveCards(activeCard);

        }

    }
);


/* =====================================================
   KEYBOARD ACCESSIBILITY
===================================================== */

cards.forEach(card => {

    card.setAttribute(
        "tabindex",
        "0"
    );


    card.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                selectCountry(card);

            }

        }
    );

});
