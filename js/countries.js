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
   IMAGE PRELOADING
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
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90"

};


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


    /*
        Сначала загружаем изображение
        в скрытый слой.

        Поэтому старый фон остаётся
        видимым до тех пор, пока новый
        полностью не готов.
    */

    nextBackground.style.backgroundImage =
        `url("${url}")`;


    nextBackground.classList.add(
        "is-zooming"
    );


    requestAnimationFrame(() => {

        nextBackground.classList.add(
            "is-visible"
        );

    });


    /*
        После завершения crossfade
        старый слой выключается.
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

    }, 900);

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



    /*
        Если пользователь нажал
        на уже выбранную страну —
        ничего не делаем.
    */

    if (activeCountry === country) {
        return;
    }


    isChanging =
        true;



    /* =================================================
       OLD TEXT OUT
    ================================================== */

    heroText.classList.remove(
        "changed"
    );

    heroTitle.style.opacity =
        "0";

    heroDescription.style.opacity =
        "0";

    exploreButton.classList.remove(
        "visible"
    );



    /* =================================================
       BACKGROUND
    ================================================== */

    changeBackground(
        country
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



    /* =================================================
       MOVE CARDS
    ================================================== */

    moveCards(card);



    /* =================================================
       UPDATE CONTENT
    ================================================== */

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

    }, 300);

}



/* =====================================================
   MOVE CARDS
===================================================== */

function moveCards(activeCard) {

    /*
        На мобильном устройстве
        используем native horizontal scroll.
    */

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

            selectCountry(card);

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
   GO SOMEWHERE — SCROLL MOTION
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


    /*
        Нас интересует только момент,
        когда блок находится в зоне экрана.
    */

    const progress =
        (
            viewportHeight -
            rect.top
        ) /
        (
            viewportHeight +
            rect.height
        );


    /*
        Ограничиваем значение
        от 0 до 1.
    */

    const clamped =
        Math.max(
            0,
            Math.min(
                1,
                progress
            )
        );


    /*
        SOMEWHERE немного
        путешествует по горизонтали.
    */

    const movement =
        (clamped - .5) * 100;


    somewhere.style.transform =
        `translateX(${movement}px)`;

}


window.addEventListener(
    "scroll",
    moveSomewhere,
    {
        passive: true
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
