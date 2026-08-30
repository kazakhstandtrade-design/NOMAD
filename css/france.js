/* =====================================================
   NOMAD — FRANCE
===================================================== */


/* =====================================================
   CITY DATA
===================================================== */

const cities = {

    paris: {

        number: "01",

        title: "Paris",

        tagline:
            "The city of endless possibilities.",

        tip:
            "Начните день рано и просто идите пешком. " +
            "Лучшие моменты Парижа часто находятся между " +
            "главными достопримечательностями.",

        places:
            "Louvre · Montmartre · Le Marais · Seine",

        food:
            "Круассаны, французская выпечка, устрицы, " +
            "сырные тарелки и классические бистро.",

        nightlife:
            "Cocktail bars, wine bars, джаз-клубы " +
            "и поздние вечера в маленьких кафе.",

        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2400&q=90",

        mustSeeImage:
            "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=1400&q=90",

        mustSeeTitle:
            "Eiffel Tower",

        mustSeeDescription:
            "Поднимитесь ближе к вечеру, когда Париж " +
            "начинает загораться огнями."

    },


    nice: {

        number: "02",

        title: "Nice",

        tagline:
            "Where the French Riviera slows down.",

        tip:
            "Пройдите весь Promenade des Anglais пешком, " +
            "а затем поднимитесь на Castle Hill ради вида " +
            "на всю бухту.",

        places:
            "Promenade des Anglais · Old Town · Castle Hill · Port",

        food:
            "Socca, salade niçoise, свежая рыба, морепродукты " +
            "и мороженое в старом городе.",

        nightlife:
            "Beach bars, rooftop terraces, коктейль-бары " +
            "и вечерние прогулки вдоль моря.",

        image:
            "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=2400&q=90",

        mustSeeImage:
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=90",

        mustSeeTitle:
            "Castle Hill",

        mustSeeDescription:
            "Лучшее место, чтобы увидеть Ниццу сверху. " +
            "Особенно красиво перед закатом."

    },


    lyon: {

        number: "03",

        title: "Lyon",

        tagline:
            "France's city of food and hidden passages.",

        tip:
            "Исследуйте Vieux Lyon утром, а потом просто " +
            "ищите маленькие bouchon, где едят местные.",

        places:
            "Vieux Lyon · Fourvière · Presqu'île · Croix-Rousse",

        food:
            "Обязательно попробуйте quenelle, praline tart " +
            "и классический lyonnais bouchon.",

        nightlife:
            "Wine bars, небольшие коктейльные бары " +
            "и оживлённые улицы Presqu'île.",

        image:
            "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2400&q=90",

        mustSeeImage:
            "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?auto=format&fit=crop&w=1400&q=90",

        mustSeeTitle:
            "Fourvière",

        mustSeeDescription:
            "Поднимитесь к базилике Fourvière, чтобы увидеть " +
            "Лион с высоты."

    },


    marseille: {

        number: "04",

        title: "Marseille",

        tagline:
            "Wild Mediterranean energy.",

        tip:
            "Не ограничивайтесь старым портом. Возьмите " +
            "время на Calanques и проведите хотя бы один день " +
            "у моря.",

        places:
            "Vieux-Port · Le Panier · Calanques · Notre-Dame de la Garde",

        food:
            "Bouillabaisse, свежие морепродукты, паниссы " +
            "и блюда с прованскими травами.",

        nightlife:
            "Rooftop bars, портовые бары, live music " +
            "и ночные террасы у моря.",

        image:
            "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=2400&q=90",

        mustSeeImage:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90",

        mustSeeTitle:
            "Calanques",

        mustSeeDescription:
            "Скалы, прозрачная вода и бухты между Марселем " +
            "и Кассисом. Это то место, ради которого стоит приехать."

    },


    bordeaux: {

        number: "05",

        title: "Bordeaux",

        tagline:
            "Slow days, wine and elegant streets.",

        tip:
            "Гуляйте по центру утром, а после обеда отправляйтесь " +
            "за город в винодельческий регион.",

        places:
            "Place de la Bourse · Saint-Pierre · Chartrons · Garonne",

        food:
            "Canelé, oysters, local cheese, steak-frites " +
            "и, конечно, вина региона.",

        nightlife:
            "Wine bars, hidden cocktail spots " +
            "и спокойные террасы у Garonne.",

        image:
            "https://images.unsplash.com/photo-1548777123-6b4e9a7b4b5e?auto=format&fit=crop&w=2400&q=90",

        mustSeeImage:
            "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?auto=format&fit=crop&w=1400&q=90",

        mustSeeTitle:
            "Place de la Bourse",

        mustSeeDescription:
            "Самая узнаваемая площадь Бордо. Приходите вечером, " +
            "когда здания отражаются в воде Miroir d'eau."

    },


    strasbourg: {

        number: "06",

        title: "Strasbourg",

        tagline:
            "Where France meets another Europe.",

        tip:
            "Лучший способ узнать город — потеряться " +
            "в маленьких улицах Petite France.",

        places:
            "Petite France · Cathedral · European Quarter · Canals",

        food:
            "Flammekueche, choucroute, kougelhopf " +
            "и эльзасские вина.",

        nightlife:
            "Уютные wine bars, небольшие пивные " +
            "и спокойные вечера у каналов.",

        image:
            "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=2400&q=90",

        mustSeeImage:
            "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1400&q=90",

        mustSeeTitle:
            "Petite France",

        mustSeeDescription:
            "Самый атмосферный район Страсбурга: каналы, " +
            "фахверковые дома и маленькие мосты."

    }

};



/* =====================================================
   ELEMENTS
===================================================== */

const cards =
    document.querySelectorAll(".city-card");

const background =
    document.getElementById("cityBackground");

const title =
    document.getElementById("cityTitle");

const number =
    document.getElementById("experienceNumber");

const tagline =
    document.getElementById("cityTagline");

const tip =
    document.getElementById("cityTip");

const places =
    document.getElementById("cityPlaces");

const food =
    document.getElementById("cityFood");

const nightlife =
    document.getElementById("cityNightlife");

const mustSeeImage =
    document.getElementById("mustSeeImage");

const mustSeeTitle =
    document.getElementById("mustSeeTitle");

const mustSeeDescription =
    document.getElementById("mustSeeDescription");

const footerCity =
    document.getElementById("footerCity");

const cityInfo =
    document.getElementById("cityInfo");

const cityTitle =
    document.querySelector(".city-experience__title");



/* =====================================================
   PRELOAD
===================================================== */

Object.values(cities).forEach(city => {

    const image = new Image();

    image.src = city.image;


    const mustSee = new Image();

    mustSee.src = city.mustSeeImage;

});



/* =====================================================
   CHANGE CITY
===================================================== */

let currentCity = "paris";

let changing = false;


function changeCity(cityName) {

    if (changing) {
        return;
    }


    const city =
        cities[cityName];


    if (!city) {
        return;
    }


    if (currentCity === cityName) {

        document
            .getElementById("cityExperience")
            .scrollIntoView({
                behavior: "smooth"
            });

        return;

    }


    changing = true;



    /* ---------------------------------------------
       OLD CONTENT OUT
    --------------------------------------------- */

    cityTitle.classList.add("changing");

    cityInfo.classList.add("changing");

    background.classList.add("changing");



    /* ---------------------------------------------
       WAIT FOR TRANSITION
    --------------------------------------------- */

    setTimeout(() => {


        background.style.backgroundImage =
            `url("${city.image}")`;


        title.textContent =
            city.title;


        number.textContent =
            city.number;


        tagline.textContent =
            city.tagline;


        tip.textContent =
            city.tip;


        places.textContent =
            city.places;


        food.textContent =
            city.food;


        nightlife.textContent =
            city.nightlife;


        mustSeeImage.src =
            city.mustSeeImage;


        mustSeeImage.alt =
            city.mustSeeTitle;


        mustSeeTitle.textContent =
            city.mustSeeTitle;


        mustSeeDescription.textContent =
            city.mustSeeDescription;


        footerCity.textContent =
            city.title.toUpperCase();


        currentCity =
            cityName;


        /* -----------------------------------------
           ACTIVE CARD
        ----------------------------------------- */

        cards.forEach(card => {

            card.classList.toggle(
                "active",
                card.dataset.city === cityName
            );

        });


        /* -----------------------------------------
           CONTENT IN
        ----------------------------------------- */

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                cityTitle.classList.remove(
                    "changing"
                );

                cityInfo.classList.remove(
                    "changing"
                );

                background.classList.remove(
                    "changing"
                );

            });

        });


        changing = false;


    }, 450);

}



/* =====================================================
   CARD CLICK
===================================================== */

cards.forEach(card => {

    card.addEventListener("click", () => {

        const city =
            card.dataset.city;


        changeCity(city);


        const experience =
            document.getElementById(
                "cityExperience"
            );


        setTimeout(() => {

            experience.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    });

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.querySelector(".menu-button");

const mobileNavigation =
    document.querySelector(".mobile-navigation");


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


            document.body.classList.toggle(
                "menu-open",
                isOpen
            );


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    mobileNavigation
        .querySelectorAll("a")
        .forEach(link => {

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

}



/* =====================================================
   INITIAL CITY
===================================================== */

background.style.backgroundImage =
    `url("${cities.paris.image}")`;

title.textContent =
    cities.paris.title;

number.textContent =
    cities.paris.number;

tagline.textContent =
    cities.paris.tagline;

tip.textContent =
    cities.paris.tip;

places.textContent =
    cities.paris.places;

food.textContent =
    cities.paris.food;

nightlife.textContent =
    cities.paris.nightlife;

mustSeeImage.src =
    cities.paris.mustSeeImage;

mustSeeTitle.textContent =
    cities.paris.mustSeeTitle;

mustSeeDescription.textContent =
    cities.paris.mustSeeDescription;

footerCity.textContent =
    "PARIS";
