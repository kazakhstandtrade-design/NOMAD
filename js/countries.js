/* =========================================================
   NOMAD — COUNTRIES
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

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

const somewhereWord =
    document.getElementById("somewhereWord");



/* =========================================================
   STATE
========================================================= */

let activeCountry = null;

let isChanging = false;



/* =========================================================
   INITIAL STATE
========================================================= */

function setInitialState() {

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


    heroBackground.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90')";


    cards.forEach(card => {

        card.classList.remove("active");

    });

}


setInitialState();



/* =========================================================
   SELECT COUNTRY
========================================================= */

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

    const image =
        card.dataset.image;



    /* Same country */

    if (activeCountry === country) {

        return;
    }


    isChanging = true;



    /* =====================================================
       OLD CONTENT OUT
    ====================================================== */

    heroText.classList.remove("changed");

    heroTitle.style.opacity = "0";

    heroDescription.style.opacity = "0";

    exploreButton.classList.remove(
        "visible"
    );



    /* =====================================================
       BACKGROUND ZOOM
    ====================================================== */

    hero.classList.add(
        "background-changing"
    );


    setTimeout(() => {

        heroBackground.style.backgroundImage =
            `url("${image}")`;

    }, 180);


    setTimeout(() => {

        hero.classList.remove(
            "background-changing"
        );

    }, 650);



    /* =====================================================
       ACTIVE CARD
    ====================================================== */

    cards.forEach(item => {

        item.classList.remove(
            "active"
        );

    });


    card.classList.add(
        "active"
    );



    /* =====================================================
       MOVE CARDS
    ====================================================== */

    moveCards(card);



    /* =====================================================
       UPDATE CONTENT
    ====================================================== */

    setTimeout(() => {

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


        heroTitle.style.opacity =
            "1";


        heroDescription.style.opacity =
            "1";


        heroText.classList.add(
            "changed"
        );


        exploreButton.classList.add(
            "visible"
        );


        activeCountry =
            country;


        isChanging =
            false;

    }, 420);

}



/* =========================================================
   MOVE CARDS
========================================================= */

function moveCards(activeCard) {

    /*
        На мобильном используем
        обычный горизонтальный scroll.
    */

    if (window.innerWidth <= 650) {

        const sliderWidth =
            slider.clientWidth;

        const cardLeft =
            activeCard.offsetLeft;

        const cardWidth =
            activeCard.offsetWidth;


        const target =
            cardLeft -
            (sliderWidth / 2) +
            (cardWidth / 2);


        slider.scrollTo({

            left:
                Math.max(0, target),

            behavior:
                "smooth"

        });


        return;
    }



    /*
        Desktop.
    */

    const cardsArray =
        Array.from(cards);

    const index =
        cardsArray.indexOf(activeCard);


    const gap =
        12;


    const baseCardWidth =
        180;


    let offset =
        index *
        (baseCardWidth + gap);



    if (window.innerWidth > 1200) {

        offset -= 150;

    } else {

        offset -= 90;

    }


    offset =
        Math.max(
            0,
            offset
        );


    track.style.transform =
        `translateX(-${offset}px)`;

}



/* =========================================================
   CARD CLICK
========================================================= */

cards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            selectCountry(card);

        }
    );

});



/* =========================================================
   PREVENT IMAGE DRAG
========================================================= */

cards.forEach(card => {

    const image =
        card.querySelector("img");


    if (image) {

        image.addEventListener(
            "dragstart",
            event => {

                event.preventDefault();

            }
        );

    }

});



/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

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
                String(isOpen)
            );


            document.body.style.overflow =
                isOpen
                    ? "hidden"
                    : "";

        }
    );

}



/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

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



/* =========================================================
   SOMEWHERE SCROLL ANIMATION
========================================================= */

let ticking =
    false;


function updateSomewhere() {

    if (!somewhereWord) {
        return;
    }


    const section =
        document.getElementById(
            "worldWaiting"
        );


    if (!section) {
        return;
    }


    const rect =
        section.getBoundingClientRect();


    const windowHeight =
        window.innerHeight;


    /*
        Когда секция появляется
        снизу и проходит через экран,
        рассчитываем прогресс.
    */

    const progress =
        (windowHeight - rect.top) /
        (windowHeight + rect.height);


    const clamped =
        Math.max(
            0,
            Math.min(
                1,
                progress
            )
        );


    /*
        SOMEWHERE движется
        слева направо.
    */

    const movement =
        (clamped - .2) *
        180;


    somewhereWord.style.transform =
        `translateX(${movement}px)`;


    ticking =
        false;
}


function requestSomewhereUpdate() {

    if (!ticking) {

        window.requestAnimationFrame(
            updateSomewhere
        );

        ticking =
            true;
    }

}


window.addEventListener(
    "scroll",
    requestSomewhereUpdate,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    requestSomewhereUpdate
);


updateSomewhere();



/* =========================================================
   RESIZE
========================================================= */

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
