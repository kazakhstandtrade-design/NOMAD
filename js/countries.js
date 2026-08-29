/* =========================================
   COUNTRIES PAGE
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.querySelector(".menu-button");
const mobileNavigation = document.querySelector(".mobile-navigation");

if (menuButton && mobileNavigation) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            mobileNavigation.classList.toggle("open");

        menuButton.classList.toggle("active", isOpen);

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

            mobileNavigation.classList.remove("open");

            menuButton.classList.remove("active");

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
   COUNTRY SELECTOR
========================================= */

const hero =
    document.querySelector(".countries-hero");

const heroBackground =
    document.querySelector("#heroBackground");

const countryTitle =
    document.querySelector("#countryTitle");

const countryDescription =
    document.querySelector("#countryDescription");

const exploreButton =
    document.querySelector("#exploreButton");

const countryCounter =
    document.querySelector("#countryCounter");

const countryCards =
    document.querySelectorAll(".country-card");



/* =========================================
   IMAGE PATHS
========================================= */

const countryImages = {

    italy:
        "url('../images/italy.jpg')",

    france:
        "url('../images/france.jpg')",

    japan:
        "url('../images/japan.jpg')",

    iceland:
        "url('../images/iceland.jpg')",

    spain:
        "url('../images/spain.jpg')",

    switzerland:
        "url('../images/switzerland.jpg')"

};



/* =========================================
   INITIAL STATE
========================================= */

let selectedCountry = null;



/* =========================================
   SELECT COUNTRY
========================================= */

function selectCountry(card) {

    const country =
        card.dataset.country;

    const title =
        card.dataset.title;

    const description =
        card.dataset.description;

    const link =
        card.dataset.link;


    /* -----------------------------
       If same country clicked
    ----------------------------- */

    if (selectedCountry === country) {

        return;

    }


    selectedCountry = country;



    /* -----------------------------
       Active card
    ----------------------------- */

    countryCards.forEach(item => {

        item.classList.remove("active");

    });

    card.classList.add("active");



    /* -----------------------------
       Counter
    ----------------------------- */

    countryCounter.textContent =
        card.querySelector(
            ".country-card__number"
        ).textContent;



    /* -----------------------------
       Background animation
    ----------------------------- */

    hero.classList.add("country-selected");


    /*
       Маленькая задержка нужна,
       чтобы смена изображения
       воспринималась как отдельная
       плавная фаза анимации.
    */

    heroBackground.style.opacity = "0";


    setTimeout(() => {

        heroBackground.style.backgroundImage =
            countryImages[country];

        heroBackground.style.opacity = "1";

    }, 220);



    /* -----------------------------
       Content animation
    ----------------------------- */

    countryTitle.style.opacity = "0";
    countryTitle.style.transform =
        "translateY(15px)";


    countryDescription.style.opacity = "0";
    countryDescription.style.transform =
        "translateY(15px)";


    setTimeout(() => {

        countryTitle.innerHTML =
            title;

        countryDescription.textContent =
            description;

        exploreButton.href =
            link;


        countryTitle.style.opacity = "1";
        countryTitle.style.transform =
            "translateY(0)";


        countryDescription.style.opacity = "1";
        countryDescription.style.transform =
            "translateY(0)";


        exploreButton.classList.add(
            "visible"
        );

    }, 300);

}



/* =========================================
   CARD EVENTS
========================================= */

countryCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            selectCountry(card);

        }
    );

});
