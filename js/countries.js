/* =====================================================
   NOMAD — COUNTRIES
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const hero =
    document.getElementById("countriesHero");

const backgroundOne =
    document.getElementById("heroBackgroundOne");

const backgroundTwo =
    document.getElementById("heroBackgroundTwo");

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

const cards =
    document.querySelectorAll(".country-card");

const somewhere =
    document.getElementById("somewhere");



/* =====================================================
   STATE
===================================================== */

let activeCountry =
    null;

let isChanging =
    false;

let activeBackground =
    backgroundOne;

let changeTimer =
    null;



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

exploreButton.classList.remove(
    "visible"
);



/* =====================================================
   IMAGE URLS
===================================================== */

const imageUrls = {

    italy:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2400&q=90",

    france:
        "https://images.unsplash.com/photo-1665487761610-f58aad3faf54?auto=format&fit=crop&w=2400&q=90",

    japan:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2400&q=90",

    iceland:
        "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=2400&q=90",

    switzerland:
        "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&w=2400&q=90",

    morocco:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",

    kazakhstan:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=2400&q=90",

    china:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=2400&q=90"

};



/* =====================================================
   IMAGE PRELOADING
===================================================== */

Object.values(imageUrls).forEach(url => {

    const image =
        new Image();

    image.src =
        url;

});



/* =====================================================
   CHANGE BACKGROUND
===================================================== */

function changeBackground(country) {

    const nextBackground =
        activeBackground === backgroundOne
            ? backgroundTwo
            : backgroundOne;


    const url =
        imageUrls[country];


    if (!url) {
        return;
    }


    nextBackground.style.backgroundImage =
        `url("${url}")`;


    nextBackground.classList.remove(
        "is-visible"
    );

    nextBackground.classList.remove(
        "is-zooming"
    );


    /*
        Новый фон пока скрыт.
        Он начнёт появляться ровно
        тогда же, когда появится новый текст.
    */

    requestAnimationFrame(() => {

        nextBackground.classList.add(
            "is-zooming"
        );

        nextBackground.classList.add(
            "is-visible"
        );

    });


    /*
        Через время crossfade полностью
        заканчивается.
    */

    setTimeout(() => {

        activeBackground.classList.remove(
            "is-visible"
        );

        activeBackground.classList.remove(
            "is-zooming"
        );


        activeBackground =
            nextBackground;

    }, 750);

}



/* =====================================================
   SELECT COUNTRY
===================================================== */

function selectCountry(card) {

    if (isChanging) {
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


    if (activeCountry === country) {
        return;
    }


    isChanging =
        true;


    if (changeTimer) {

        clearTimeout(
            changeTimer
        );

    }



    /* =================================================
       STEP 1 — OLD CONTENT DISAPPEARS
    ================================================== */

    heroText.classList.remove(
        "content-visible"
    );

    heroText.classList.add(
        "content-hidden"
    );

    exploreButton.classList.remove(
        "visible"
    );



    /* =================================================
       ACTIVE CARD
    ================================================== */

    cards.forEach(item => {

        item.classList.remove(
            "active"
        );

    });


    card.classList.add(
        "active"
    );


    moveCards(
        card
    );



    /* =================================================
       STEP 2 — WAIT UNTIL OLD TEXT IS GONE
    ================================================= */

    changeTimer = setTimeout(() => {


        /* ---------------------------------------------
           CHANGE TEXT
        --------------------------------------------- */

        heroTitle.innerHTML =
            title;

        heroDescription.textContent =
            description;

        heroMessage.textContent =
            message;

        currentNumber.textContent =
            number;

        exploreButton.href =
            link;



        /* ---------------------------------------------
           START BACKGROUND
           AND TEXT AT THE SAME MOMENT
        --------------------------------------------- */

        changeBackground(
            country
        );


        heroText.classList.remove(
            "content-hidden"
        );


        /*
            Сбрасываем animation,
            чтобы она могла запуститься
            заново для каждой страны.
        */

        heroText.classList.remove(
            "content-visible"
        );


        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                heroText.classList.add(
                    "content-visible"
                );

                exploreButton.classList.add(
                    "visible"
                );

            });

        });


        activeCountry =
            country;

        isChanging =
            false;


    }, 400);

}



/* =====================================================
   MOVE CARDS
===================================================== */

function moveCards(activeCard) {

    if (window.innerWidth <= 650) {

        activeCard.scrollIntoView({

            behavior:
                "smooth",

            block:
                "nearest",

            inline:
                "center"

        });

        return;
    }


    const cardsArray =
        Array.from(cards);

    const index =
        cardsArray.indexOf(
            activeCard
        );


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

            selectCountry(
                card
            );

        }
    );

});



/* =====================================================
   PREVENT IMAGE DRAG
===================================================== */

cards.forEach(card => {

    const image =
        card.querySelector("img");


    image.addEventListener(
        "dragstart",
        event => {

            event.preventDefault();

        }
    );

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const mobileNavigation =
    document.getElementById(
        "mobileNavigation"
    );


if (menuButton) {

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
   GO SOMEWHERE
===================================================== */

function moveSomewhere() {

    if (!somewhere) {
        return;
    }


    const section =
        somewhere.closest(
            ".world-waiting"
        );


    if (!section) {
        return;
    }


    const rect =
        section.getBoundingClientRect();


    const viewportHeight =
        window.innerHeight;


    const progress =
        (
            viewportHeight -
            rect.top
        ) /
        (
            viewportHeight +
            rect.height
        );


    const clamped =
        Math.max(
            0,
            Math.min(
                1,
                progress
            )
        );


    const movement =
        (clamped - .5) * 100;


    somewhere.style.transform =
        `translateX(${movement}px`;

}


window.addEventListener(
    "scroll",
    moveSomewhere,
    {
        passive:
            true
    }
);


moveSomewhere();



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

            moveCards(
                activeCard
            );

        }

    }
);
