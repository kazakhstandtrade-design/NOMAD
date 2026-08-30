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

let activeCountry = null;

let isChanging = false;

let activeBackground = backgroundOne;



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

    /* Kazakhstan */

    kazakhstan:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=90",

    /* Zhangjiajie / Avatar mountains */

    china:
        "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=2400&q=90"

};



/* =====================================================
   PRELOAD IMAGES
===================================================== */

const preloadedImages = {};

Object.entries(imageUrls).forEach(
    ([country, url]) => {

        const image = new Image();

        image.src = url;

        preloadedImages[country] = image;

    }
);



/* =====================================================
   LOAD IMAGE
===================================================== */

function loadImage(country) {

    return new Promise((resolve, reject) => {

        const url =
            imageUrls[country];

        if (!url) {
            reject();
            return;
        }


        const image =
            preloadedImages[country];


        if (
            image &&
            image.complete &&
            image.naturalWidth > 0
        ) {

            resolve(url);

            return;

        }


        const loader =
            new Image();


        loader.onload = () => {

            preloadedImages[country] =
                loader;

            resolve(url);

        };


        loader.onerror = () => {

            reject();

        };


        loader.src = url;

    });

}



/* =====================================================
   CHANGE BACKGROUND
===================================================== */

function changeBackground(country) {

    return loadImage(country)
        .then(url => {

            const nextBackground =
                activeBackground === backgroundOne
                    ? backgroundTwo
                    : backgroundOne;


            /*
                Полностью подготавливаем
                новый слой ДО начала анимации.
            */

            nextBackground.style.backgroundImage =
                `url("${url}")`;


            nextBackground.classList.remove(
                "is-visible"
            );

            nextBackground.classList.remove(
                "is-zooming"
            );


            /*
                В следующем кадре
                одновременно запускаем
                opacity + zoom.
            */

            requestAnimationFrame(() => {

                requestAnimationFrame(() => {

                    nextBackground.classList.add(
                        "is-visible"
                    );

                    nextBackground.classList.add(
                        "is-zooming"
                    );

                });

            });


            /*
                Возвращаем слой,
                чтобы текст мог стартовать
                ТОЧНО вместе с ним.
            */

            return nextBackground;

        });

}



/* =====================================================
   UPDATE TEXT
===================================================== */

function updateText(
    title,
    description,
    message,
    number,
    link
) {

    /*
        Сначала убираем старый текст.
    */

    heroTitle.classList.add(
        "text-changing"
    );

    heroDescription.classList.add(
        "text-changing"
    );

    exploreButton.classList.remove(
        "visible"
    );


    /*
        Меняем содержимое
        пока оно невидимо.
    */

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


    /*
        Следующий кадр —
        одновременно с появлением
        нового background.
    */

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            heroTitle.classList.remove(
                "text-changing"
            );

            heroDescription.classList.remove(
                "text-changing"
            );

            exploreButton.classList.add(
                "visible"
            );

        });

    });

}



/* =====================================================
   SELECT COUNTRY
===================================================== */

async function selectCountry(card) {

    if (isChanging) {
        return;
    }


    const country =
        card.dataset.country;


    if (!country) {
        return;
    }


    if (activeCountry === country) {
        return;
    }


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


    isChanging = true;



    /*
        Сначала загружаем картинку.

        Пока она не загрузилась,
        вообще ничего визуально
        не меняем.
    */

    let nextBackground;

    try {

        nextBackground =
            await changeBackground(
                country
            );

    } catch (error) {

        isChanging = false;

        return;

    }



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
       TEXT
    ================================================== */

    /*
        Запускаем смену текста
        сразу после подготовки
        background.

        Поэтому они начинают
        переход одновременно.
    */

    updateText(
        title,
        description,
        message,
        number,
        link
    );


    activeCountry =
        country;



    /*
        Через время transition
        выключаем старый background.
    */

    setTimeout(() => {

        if (
            activeBackground &&
            activeBackground !== nextBackground
        ) {

            activeBackground.classList.remove(
                "is-visible"
            );

            activeBackground.classList.remove(
                "is-zooming"
            );

        }


        activeBackground =
            nextBackground;


        isChanging = false;

    }, 950);

}



/* =====================================================
   MOVE CARDS
===================================================== */

function moveCards(activeCard) {

    if (window.innerWidth <= 650) {

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
        cardsArray.indexOf(
            activeCard
        );


    /*
        Для последней карточки
        рассчитываем реальный размер
        track, чтобы он никогда
        не уезжал за границу.
    */

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


    const sliderWidth =
        document.querySelector(
            ".countries-slider"
        ).clientWidth;


    const trackWidth =
        track.scrollWidth;


    const maxOffset =
        Math.max(
            0,
            trackWidth - sliderWidth
        );


    offset =
        Math.min(
            offset,
            maxOffset
        );


    track.style.transform =
        `translate3d(-${offset}px, 0, 0)`;

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


if (
    menuButton &&
    mobileNavigation
) {

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

            if (menuButton) {

                menuButton.classList.remove(
                    "active"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            if (mobileNavigation) {

                mobileNavigation.classList.remove(
                    "open"
                );

            }


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
