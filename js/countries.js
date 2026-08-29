/* =========================================
   COUNTRY DATA
========================================= */

const countryCards = document.querySelectorAll(".country-card");

const heroBackground =
    document.getElementById("heroBackground");

const countryName =
    document.getElementById("countryName");

const countryDescription =
    document.getElementById("countryDescription");

const exploreButton =
    document.getElementById("exploreButton");

const heroText =
    document.querySelector(".countries-hero__text");

const countryTrack =
    document.getElementById("countryTrack");

const chooseCountry =
    document.getElementById("chooseCountry");

const heroCounter =
    document.querySelector(
        ".hero-message__inner span:last-child"
    );



/* =========================================
   INITIAL POSITION
========================================= */

let activeIndex = 0;



/* =========================================
   UPDATE COUNTRY
========================================= */

function changeCountry(card, index) {

    if (!card) {
        return;
    }


    if (card.classList.contains("active")) {
        return;
    }


    /*
        1. Hide text
    */

    heroText.classList.add("changing");

    heroBackground.classList.add("changing");


    setTimeout(() => {


        /*
            2. Get data
        */

        const name =
            card.dataset.country;

        const description =
            card.dataset.description;

        const image =
            card.dataset.image;

        const link =
            card.dataset.link;


        /*
            3. Change content
        */

        countryName.textContent =
            name;

        countryDescription.textContent =
            description;

        exploreButton.href =
            link;


        /*
            4. Change background
        */

        heroBackground.style.backgroundImage =
            `url("${image}")`;


        /*
            5. Change active card
        */

        countryCards.forEach((item) => {

            item.classList.remove("active");

        });


        card.classList.add("active");


        /*
            6. Counter
        */

        const number =
            String(index + 1).padStart(2, "0");

        heroCounter.textContent =
            `${number} / 06`;


        /*
            7. Move cards
        */

        moveSlider(index);


        /*
            8. Show content again
        */

        requestAnimationFrame(() => {

            heroBackground.classList.remove(
                "changing"
            );

            heroText.classList.remove(
                "changing"
            );

        });


    }, 280);


}



/* =========================================
   MOVE SLIDER
========================================= */

function moveSlider(index) {


    const isMobile =
        window.innerWidth <= 650;


    /*
        Desktop
    */

    if (!isMobile) {

        const cardWidth =
            countryCards[0].offsetWidth;

        const gap = 12;


        /*
            На десктопе активная карточка
            остается в начале видимой зоны,
            остальные уходят вправо.
        */

        const offset =
            index *
            (cardWidth + gap);


        countryTrack.style.transform =
            `translateX(-${offset}px)`;


        return;
    }



    /*
        Mobile
    */

    const firstCard =
        countryCards[0];

    const currentCard =
        countryCards[index];


    if (!currentCard) {
        return;
    }


    const trackRect =
        countryTrack.getBoundingClientRect();

    const cardRect =
        currentCard.getBoundingClientRect();


    const containerWidth =
        document.querySelector(
            ".country-slider"
        ).offsetWidth;


    const currentCenter =
        cardRect.left +
        cardRect.width / 2;


    const targetCenter =
        containerWidth / 2;


    const difference =
        currentCenter -
        targetCenter;


    const currentTransform =
        getCurrentTransform();


    let newTransform =
        currentTransform - difference;


    const maxTransform =
        -(countryTrack.scrollWidth -
        containerWidth);


    if (newTransform > 0) {
        newTransform = 0;
    }


    if (newTransform < maxTransform) {
        newTransform = maxTransform;
    }


    countryTrack.style.transform =
        `translateX(${newTransform}px)`;
}



/* =========================================
   GET CURRENT TRANSFORM
========================================= */

function getCurrentTransform() {

    const style =
        window.getComputedStyle(
            countryTrack
        );

    const matrix =
        new DOMMatrixReadOnly(
            style.transform
        );


    return matrix.m41;
}



/* =========================================
   CLICK CARDS
========================================= */

countryCards.forEach((card, index) => {

    card.addEventListener(
        "click",
        () => {

            activeIndex = index;

            changeCountry(
                card,
                index
            );

        }
    );

});



/* =========================================
   CHOOSE COUNTRY BUTTON
========================================= */

chooseCountry.addEventListener(
    "click",
    () => {

        const slider =
            document.querySelector(
                ".country-slider"
            );

        slider.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);



/* =========================================
   RESIZE
========================================= */

window.addEventListener(
    "resize",
    () => {

        moveSlider(activeIndex);

    }
);



/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileNavigation =
    document.querySelector(
        ".mobile-navigation"
    );


menuButton.addEventListener(
    "click",
    () => {

        const isOpen =
            menuButton.classList.toggle(
                "active"
            );


        mobileNavigation.classList.toggle(
            "open"
        );


        document.body.classList.toggle(
            "menu-open"
        );


        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);



/* =========================================
   CLOSE MOBILE MENU
========================================= */

document
    .querySelectorAll(
        ".mobile-navigation a"
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                menuButton.classList.remove(
                    "active"
                );

                mobileNavigation.classList.remove(
                    "open"
                );

                document.body.classList.remove(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });
