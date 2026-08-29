/* =========================================
   NOMAD — COUNTRIES
========================================= */


/* =========================================
   ELEMENTS
========================================= */

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

const cards =
    document.querySelectorAll(".country-card");



/* =========================================
   STATE
========================================= */

let activeCountry = null;

let isChanging = false;



/* =========================================
   INITIAL STATE
========================================= */

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



/* =========================================
   CHANGE COUNTRY
========================================= */

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



    /* Same country */

    if (activeCountry === country) {

        return;
    }



    isChanging = true;



    /* =====================================
       OLD CONTENT OUT
    ====================================== */

    heroText.classList.remove("changed");

    heroTitle.style.opacity = "0";

    heroDescription.style.opacity = "0";

    exploreButton.classList.remove("visible");



    /* =====================================
       BACKGROUND ANIMATION
    ====================================== */

    hero.classList.add("background-changing");



    setTimeout(() => {

        heroBackground.style.backgroundImage =
            `url("../images/${country}.jpg")`;


        hero.classList.remove("background-changing");

    }, 250);



    /* =====================================
       UPDATE ACTIVE CARD
    ====================================== */

    cards.forEach(item => {

        item.classList.remove("active");

    });


    card.classList.add("active");



    /* =====================================
       MOVE CARDS ON DESKTOP
    ====================================== */

    moveCards(card);



    /* =====================================
       UPDATE TEXT
    ====================================== */

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

        heroText.classList.add("changed");

        exploreButton.classList.add("visible");


        activeCountry =
            country;


        isChanging =
            false;

    }, 400);

}



/* =========================================
   MOVE CARDS
========================================= */

function moveCards(activeCard) {

    /*

        На desktop мы немного сдвигаем
        весь track.

        Активная карточка увеличивается
        сама через CSS.

        Остальные карточки остаются
        на месте и просто смещаются
        вместе с лентой.

    */


    if (window.innerWidth <= 650) {

        /*

            На телефоне браузер сам
            прокручивает горизонтальную
            ленту.

        */

        activeCard.scrollIntoView({

            behavior: "smooth",

            block: "nearest",

            inline: "center"

        });

        return;
    }



    const cardsArray =
        Array.from(cards);

    const index =
        cardsArray.indexOf(activeCard);


    const cardWidth =
        activeCard.offsetWidth + 12;


    /*
        Сдвигаем ленту в зависимости
        от выбранной карточки.
    */

    let offset =
        index * cardWidth;



    /*
        Ограничиваем движение,
        чтобы лента не ушла слишком далеко.
    */

    const viewportWidth =
        window.innerWidth;


    if (viewportWidth > 1200) {

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



/* =========================================
   CARD CLICK
========================================= */

cards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            selectCountry(card);

        }
    );

});



/* =========================================
   MOBILE TOUCH
========================================= */

/*

    Важно:

    На телефоне карточки находятся
    в настоящем горизонтальном scroll-контейнере.

    Поэтому пользователь может:

    ← свайпать →
    
    и смотреть все страны.

    JS здесь специально почти
    не вмешивается в touch.

*/



/* =========================================
   PREVENT IMAGE DRAG
========================================= */

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



/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");


if (menuButton) {

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
   RESIZE
========================================= */

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
