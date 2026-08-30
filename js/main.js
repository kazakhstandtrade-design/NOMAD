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
            mobileNavigation.classList.contains("open");


        mobileNavigation.classList.toggle("open");

        menuButton.classList.toggle("active");

        document.body.classList.toggle(
            "menu-open"
        );


        menuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

    });


    const mobileLinks =
        mobileNavigation.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove("open");

            menuButton.classList.remove("active");

            document.body.classList.remove(
                "menu-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}



/* =========================================
   HERO PARALLAX
========================================= */

const heroImage =
    document.querySelector(".hero__image");


if (heroImage) {

    window.addEventListener("scroll", () => {

        const scroll =
            window.scrollY;


        if (scroll < window.innerHeight) {

            heroImage.style.transform =
                `scale(1.02) translateY(${scroll * 0.06}px)`;

        }

    });

}



/* =========================================
   ROUTE DATA
========================================= */

const routes = {

    italy: {

        country: "Italy",

        number: "01",

        route:
            "Rome → Florence → Amalfi",

        days:
            "7 days",

        price:
            "$1,290",

        image:
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2200&q=90",

        description:
            "Путешествие через Рим, Флоренцию и побережье Амальфи — архитектура, искусство, итальянская кухня и море в одном маршруте.",

        itinerary: [

            {
                day: "01",
                title: "Arrival in Rome",
                description:
                    "Прибытие в Рим и первое знакомство с городом. Вечерняя прогулка по историческому центру.",

                places: [

                    {
                        name: "Rome",
                        image:
                            "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Колизей, узкие улицы исторического центра и первые впечатления от Вечного города."
                    },

                    {
                        name: "Trevi Fountain",
                        image:
                            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Вечерняя прогулка к одному из самых известных фонтанов Рима."
                    }

                ]
            },


            {
                day: "02",
                title: "Ancient Rome",
                description:
                    "Полный день среди главных исторических мест Рима.",

                places: [

                    {
                        name: "Colosseum",
                        image:
                            "https://images.unsplash.com/photo-1552832860-cfde7b8e1c48?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Главный символ древнего Рима."
                    },

                    {
                        name: "Roman Forum",
                        image:
                            "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Руины политического и общественного центра Древнего Рима."
                    }

                ]
            },


            {
                day: "03",
                title: "Rome → Florence",
                description:
                    "Переезд во Флоренцию и знакомство с городом эпохи Возрождения.",

                places: [

                    {
                        name: "Florence",
                        image:
                            "https://images.unsplash.com/photo-1543429258-4b8c1c9b4d9e?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Архитектура, площади и атмосфера итальянского Возрождения."
                    },

                    {
                        name: "Piazza del Duomo",
                        image:
                            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Сердце исторической Флоренции."
                    }

                ]
            },


            {
                day: "04",
                title: "Florence",
                description:
                    "День искусства, галерей и неспешных прогулок.",

                places: [

                    {
                        name: "Uffizi Gallery",
                        image:
                            "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Одна из важнейших художественных коллекций Италии."
                    },

                    {
                        name: "Ponte Vecchio",
                        image:
                            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Знаменитый мост через Арно."
                    }

                ]
            },


            {
                day: "05",
                title: "Florence → Amalfi",
                description:
                    "Переезд к морю и начало путешествия по побережью Амальфи.",

                places: [

                    {
                        name: "Amalfi Coast",
                        image:
                            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Скалистое побережье, маленькие города и невероятные виды."
                    }

                ]
            },


            {
                day: "06",
                title: "Amalfi Coast",
                description:
                    "День у моря и исследование небольших прибрежных городков.",

                places: [

                    {
                        name: "Positano",
                        image:
                            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Цветные дома, море и знаменитые виды побережья."
                    },

                    {
                        name: "Ravello",
                        image:
                            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Тихий город на высоте с панорамными видами."
                    }

                ]
            },


            {
                day: "07",
                title: "Departure",
                description:
                    "Последнее утро у моря и завершение путешествия.",

                places: [

                    {
                        name: "Amalfi",
                        image:
                            "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Финальная прогулка перед отъездом."
                    }

                ]
            }

        ]

    },


    japan: {

        country: "Japan",

        number: "02",

        route:
            "Tokyo → Kyoto → Osaka",

        days:
            "10 days",

        price:
            "$2,190",

        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2200&q=90",

        description:
            "Десять дней между неоновым Токио, традиционным Киото и энергичным Осакой.",

        itinerary: [

            {
                day: "01",
                title: "Arrival in Tokyo",
                description:
                    "Прибытие в Токио и знакомство с городом.",

                places: [

                    {
                        name: "Shibuya",
                        image:
                            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Первое знакомство с ритмом японской столицы."
                    },

                    {
                        name: "Shibuya Crossing",
                        image:
                            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Самый узнаваемый перекрёсток Токио."
                    }

                ]
            },


            {
                day: "02",
                title: "Modern Tokyo",
                description:
                    "Современная архитектура, районы и панорамы города.",

                places: [

                    {
                        name: "Tokyo",
                        image:
                            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Город, где технологии соседствуют с традициями."
                    },

                    {
                        name: "Tokyo Tower",
                        image:
                            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Панорамный вид на город."
                    }

                ]
            },


            {
                day: "03",
                title: "Traditional Tokyo",
                description:
                    "Храмы, старые кварталы и спокойная сторона столицы.",

                places: [

                    {
                        name: "Asakusa",
                        image:
                            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Один из самых атмосферных районов Токио."
                    }

                ]
            },


            {
                day: "04",
                title: "Tokyo → Kyoto",
                description:
                    "Переезд в Киото и первые впечатления от древней столицы.",

                places: [

                    {
                        name: "Kyoto",
                        image:
                            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Традиционная Япония, храмы и сады."
                    }

                ]
            },


            {
                day: "05",
                title: "Fushimi Inari",
                description:
                    "День среди храмов и знаменитых красных ворот.",

                places: [

                    {
                        name: "Fushimi Inari",
                        image:
                            "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Тысячи красных ворот ведут вверх по горе."
                    }

                ]
            },


            {
                day: "06",
                title: "Arashiyama",
                description:
                    "Бамбуковая роща и спокойная природа Киото.",

                places: [

                    {
                        name: "Arashiyama",
                        image:
                            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Один из самых красивых природных районов Киото."
                    }

                ]
            },


            {
                day: "07",
                title: "Kyoto",
                description:
                    "Свободный день для самостоятельного исследования города.",

                places: [

                    {
                        name: "Gion",
                        image:
                            "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Исторический квартал с традиционной архитектурой."
                    }

                ]
            },


            {
                day: "08",
                title: "Kyoto → Osaka",
                description:
                    "Переезд в Осаку.",

                places: [

                    {
                        name: "Osaka",
                        image:
                            "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Город еды, неона и современной японской культуры."
                    }

                ]
            },


            {
                day: "09",
                title: "Osaka",
                description:
                    "Полный день для исследования города.",

                places: [

                    {
                        name: "Dotonbori",
                        image:
                            "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Главная улица вечерней Осаки."
                    }

                ]
            },


            {
                day: "10",
                title: "Departure",
                description:
                    "Последнее утро и завершение путешествия.",

                places: [

                    {
                        name: "Osaka",
                        image:
                            "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=90",
                        text:
                            "Последняя прогулка перед вылетом."
                    }

                ]
            }

        ]

    },


    iceland: {

        country: "Iceland",

        number: "03",

        route:
            "Reykjavik → Golden Circle → South Coast",

        days:
            "6 days",

        price:
            "$1,790",

        image:
            "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=2200&q=90",

        description:
            "Путешествие от уютных улиц Рейкьявика через вулканические ландшафты Золотого кольца к дикой природе южного побережья Исландии.",

        itinerary: [

            {
                day: "01",

                title: "Arrival in Reykjavik",

                description:
                    "Прибытие в Исландию. Спокойное начало путешествия, знакомство с Рейкьявиком и первые виды северного города.",

                places: [

                    {
                        name: "Reykjavik",

                        image:
                            "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Старт путешествия. Прогулка по центру, набережной и тихим улицам столицы."
                    },

                    {
                        name: "Hallgrímskirkja",

                        image:
                            "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Одна из главных архитектурных достопримечательностей Рейкьявика."
                    }

                ]
            },


            {
                day: "02",

                title: "Golden Circle",

                description:
                    "Первый большой выезд за пределы столицы. Вулканические ландшафты, водопады и геотермальные источники.",

                places: [

                    {
                        name: "Þingvellir National Park",

                        image:
                            "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Национальный парк между тектоническими плитами Европы и Северной Америки."
                    },

                    {
                        name: "Geysir",

                        image:
                            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Геотермальная зона с горячими источниками и извергающимися гейзерами."
                    },

                    {
                        name: "Gullfoss",

                        image:
                            "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Один из самых впечатляющих водопадов Исландии."
                    }

                ]
            },


            {
                day: "03",

                title: "South Coast",

                description:
                    "Дорога на юг через чёрные пляжи, водопады и открытые пространства.",

                places: [

                    {
                        name: "Seljalandsfoss",

                        image:
                            "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Знаменитый водопад, за которым можно пройти пешком."
                    },

                    {
                        name: "Skógafoss",

                        image:
                            "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Мощный водопад высотой около 60 метров."
                    }

                ]
            },


            {
                day: "04",

                title: "Vík & Black Sand Beach",

                description:
                    "День среди вулканических пейзажей южного побережья.",

                places: [

                    {
                        name: "Reynisfjara",

                        image:
                            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Чёрный вулканический пляж, базальтовые колонны и океан."
                    },

                    {
                        name: "Vík",

                        image:
                            "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Небольшой городок среди драматичных южных ландшафтов."
                    }

                ]
            },


            {
                day: "05",

                title: "Glaciers & Wilderness",

                description:
                    "Путешествие дальше на восток — ледники, лагуны и дикая природа.",

                places: [

                    {
                        name: "Skaftafell",

                        image:
                            "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Горные тропы и ледниковые пейзажи национального парка."
                    },

                    {
                        name: "Jökulsárlón",

                        image:
                            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Ледниковая лагуна с айсбергами, уходящими в океан."
                    }

                ]
            },


            {
                day: "06",

                title: "Return & Departure",

                description:
                    "Возвращение в сторону Рейкьявика и завершение путешествия.",

                places: [

                    {
                        name: "Reykjavik",

                        image:
                            "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=90",

                        text:
                            "Последняя прогулка по городу перед вылетом."
                    }

                ]
            }

        ]

    }

};



/* =========================================
   ROUTE ELEMENTS
========================================= */

const routeExperience =
    document.querySelector("#routeExperience");


const routeBackground =
    document.querySelector(
        ".route-experience__background"
    );


const routePreview =
    document.querySelector(".route-preview");


const fullRoute =
    document.querySelector(".full-route");


const closeRouteButton =
    document.querySelector(
        ".route-experience__close"
    );


const openFullRouteButton =
    document.querySelector(
        "#openFullRoute"
    );


const previewCountry =
    document.querySelector(
        "#previewCountry"
    );


const previewNumber =
    document.querySelector(
        "#previewNumber"
    );


const previewRoute =
    document.querySelector(
        "#previewRoute"
    );


const previewDays =
    document.querySelector(
        "#previewDays"
    );


const previewPrice =
    document.querySelector(
        "#previewPrice"
    );


const fullRouteCountry =
    document.querySelector(
        "#fullRouteCountry"
    );


const fullRouteEyebrow =
    document.querySelector(
        "#fullRouteEyebrow"
    );


const fullRouteTitle =
    document.querySelector(
        "#fullRouteTitle"
    );


const fullRouteDescription =
    document.querySelector(
        "#fullRouteDescription"
    );


const routeDaysContainer =
    document.querySelector(
        "#routeDaysContainer"
    );



let currentRouteName = null;



/* =========================================
   RENDER FULL ROUTE
========================================= */

function renderFullRoute(route) {

    fullRouteCountry.textContent =
        route.country;


    fullRouteEyebrow.textContent =
        `${route.days.toUpperCase()} · ${route.country.toUpperCase()}`;


    fullRouteTitle.textContent =
        route.route;


    fullRouteDescription.textContent =
        route.description;


    routeDaysContainer.innerHTML = "";


    route.itinerary.forEach((day) => {

        const dayElement =
            document.createElement("article");


        dayElement.className =
            "route-day";


        const placesHTML =
            day.places.map((place, index) => {

                return `

                    <article class="route-place">

                        <div class="route-place__image">

                            <img
                                src="${place.image}"
                                alt="${place.name}"
                                loading="lazy"
                            >

                        </div>

                        <div class="route-place__content">

                            <span class="route-place__index">
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <h4>
                                ${place.name}
                            </h4>

                            <p>
                                ${place.text}
                            </p>

                        </div>

                    </article>

                `;

            }).join("");


        dayElement.innerHTML = `

            <div class="route-day__header">

                <div>

                    <span class="route-day__number">
                        DAY ${day.day}
                    </span>

                </div>

                <div>

                    <h2 class="route-day__title">
                        ${day.title}
                    </h2>

                    <p class="route-day__description">
                        ${day.description}
                    </p>

                </div>

            </div>


            <div class="route-places">

                ${placesHTML}

            </div>

        `;


        routeDaysContainer.appendChild(
            dayElement
        );

    });

}



/* =========================================
   OPEN ROUTE PREVIEW
========================================= */

function openRoute(routeName) {

    const route =
        routes[routeName];


    if (!route) {
        return;
    }


    currentRouteName =
        routeName;


    routeBackground.style.backgroundImage =
        `url("${route.image}")`;


    previewCountry.textContent =
        route.country;


    previewNumber.textContent =
        route.number;


    previewRoute.textContent =
        route.route;


    previewDays.textContent =
        route.days;


    previewPrice.textContent =
        route.price;


    renderFullRoute(route);


    routeExperience.classList.remove(
        "full-open"
    );


    routeExperience.classList.add(
        "open"
    );


    routeExperience.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "route-page-open"
    );


    routeExperience.scrollTop = 0;

}



/* =========================================
   OPEN FULL ROUTE
========================================= */

function openFullRoute() {

    if (!currentRouteName) {
        return;
    }


    routeExperience.classList.add(
        "full-open"
    );


    /*
       Мы не меняем HTML-страницу.
       Только добавляем состояние
       в историю браузера.
    */

    history.pushState(
        {
            route: currentRouteName,
            fullRoute: true
        },
        "",
        `#route-${currentRouteName}`
    );


    setTimeout(() => {

        routeExperience.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 100);

}



/* =========================================
   CLOSE ROUTE
========================================= */

function closeRoute() {

    routeExperience.classList.remove(
        "full-open"
    );


    routeExperience.classList.remove(
        "open"
    );


    routeExperience.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "route-page-open"
    );


    currentRouteName = null;


    if (
        window.location.hash.startsWith(
            "#route-"
        )
    ) {

        history.replaceState(
            null,
            "",
            window.location.pathname +
            window.location.search
        );

    }

}



/* =========================================
   CLOSE FULL ROUTE ONLY
========================================= */

function closeFullRouteToPreview() {

    routeExperience.classList.remove(
        "full-open"
    );

}



/* =========================================
   JOURNEY CARDS
========================================= */

const journeyCards =
    document.querySelectorAll(
        ".journey-card"
    );


journeyCards.forEach((card) => {

    card.addEventListener(
        "click",
        () => {

            const routeName =
                card.dataset.route;


            openRoute(routeName);

        }
    );

});



/* =========================================
   OPEN FULL ROUTE BUTTON
========================================= */

if (openFullRouteButton) {

    openFullRouteButton.addEventListener(
        "click",
        openFullRoute
    );

}



/* =========================================
   CLOSE BUTTON
========================================= */

if (closeRouteButton) {

    closeRouteButton.addEventListener(
        "click",
        () => {

            if (
                routeExperience.classList.contains(
                    "full-open"
                )
            ) {

                closeFullRouteToPreview();

                return;

            }


            closeRoute();

        }
    );

}



/* =========================================
   ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        if (
            routeExperience.classList.contains(
                "full-open"
            )
        ) {

            closeFullRouteToPreview();

            return;

        }


        if (
            routeExperience.classList.contains(
                "open"
            )
        ) {

            closeRoute();

        }

    }
);



/* =========================================
   BROWSER BACK BUTTON
========================================= */

window.addEventListener(
    "popstate",
    (event) => {

        if (
            event.state &&
            event.state.fullRoute &&
            event.state.route
        ) {

            currentRouteName =
                event.state.route;


            const route =
                routes[currentRouteName];


            if (!route) {
                return;
            }


            renderFullRoute(route);


            routeExperience.classList.add(
                "open"
            );


            routeExperience.classList.add(
                "full-open"
            );


            routeExperience.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "route-page-open"
            );


            return;

        }


        if (
            routeExperience.classList.contains(
                "full-open"
            )
        ) {

            routeExperience.classList.remove(
                "full-open"
            );

            return;

        }


        if (
            routeExperience.classList.contains(
                "open"
            )
        ) {

            closeRoute();

        }

    }
);



/* =========================================
   BOOK BUTTON
========================================= */

const bookRouteButton =
    document.querySelector(
        "#bookRouteButton"
    );


if (bookRouteButton) {

    bookRouteButton.addEventListener(
        "click",
        () => {

            alert(
                "Бронирование маршрута будет доступно после подключения формы бронирования."
            );

        }
    );

}



/* =========================================
   INITIAL HASH
========================================= */

if (
    window.location.hash.startsWith(
        "#route-"
    )
) {

    const routeName =
        window.location.hash.replace(
            "#route-",
            ""
        );


    if (routes[routeName]) {

        currentRouteName =
            routeName;


        const route =
            routes[routeName];


        routeBackground.style.backgroundImage =
            `url("${route.image}")`;


        previewCountry.textContent =
            route.country;


        previewNumber.textContent =
            route.number;


        previewRoute.textContent =
            route.route;


        previewDays.textContent =
            route.days;


        previewPrice.textContent =
            route.price;


        renderFullRoute(route);


        routeExperience.classList.add(
            "open"
        );


        routeExperience.classList.add(
            "full-open"
        );


        routeExperience.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "route-page-open"
        );

    }

}
