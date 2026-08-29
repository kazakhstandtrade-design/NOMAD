document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       STATE
    ========================================= */

    const state = {

        country: null,

        month: null,

        days: null,

        budget: 1500,

        type: null,

        selectedJourney: null

    };


    let currentStep = 1;



    /* =========================================
       ELEMENTS
    ========================================= */

    const plannerSteps =
        document.querySelectorAll(".planner-step");

    const stepIndicators =
        document.querySelectorAll(".step");

    const results =
        document.getElementById("results");

    const journeysGrid =
        document.getElementById("journeysGrid");

    const resultDescription =
        document.getElementById("resultDescription");

    const budgetRange =
        document.getElementById("budgetRange");

    const budgetValue =
        document.getElementById("budgetValue");

    const budgetContinue =
        document.getElementById("budgetContinue");

    const restartButton =
        document.getElementById("restartButton");

    const journeyModal =
        document.getElementById("journeyModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalBackground =
        document.querySelector(
            ".journey-modal__background"
        );

    const modalCountry =
        document.getElementById("modalCountry");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalNumber =
        document.getElementById("modalNumber");

    const modalRoute =
        document.getElementById("modalRoute");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalPrice =
        document.getElementById("modalPrice");

    const modalDays =
        document.getElementById("modalDays");

    const modalIncluded =
        document.getElementById("modalIncluded");

    const modalNotIncluded =
        document.getElementById("modalNotIncluded");

    const routeButton =
        document.getElementById("routeButton");

    const menuButton =
        document.querySelector(".menu-button");

    const mobileNavigation =
        document.querySelector(".mobile-navigation");



    /* =========================================
       JOURNEYS DATABASE
    ========================================= */

    const journeys = [

        /* ================= ITALY ================= */

        {
            id: "amalfi-coast",

            country: "Italy",

            title: "AMALFI COAST",

            route: "Rome → Florence → Amalfi",

            days: 7,

            minBudget: 1200,
            maxBudget: 3500,

            types: [
                "beach",
                "aesthetic",
                "food",
                "romantic",
                "luxury",
                "city"
            ],

            image: "images/amalfi.jpg",

            description:
                "A week between Mediterranean villages, hidden beaches and Italian cuisine.",

            price: 1290,

            itinerary: [
                "Day 01 — Rome",
                "Day 02 — Rome",
                "Day 03 — Florence",
                "Day 04 — Amalfi",
                "Day 05 — Positano",
                "Day 06 — Capri",
                "Day 07 — Departure"
            ],

            included: [
                "Hotels",
                "Airport transfer",
                "Local guide",
                "Breakfast"
            ],

            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        {
            id: "tuscany-escape",

            country: "Italy",

            title: "TUSCANY ESCAPE",

            route: "Florence → Siena → Val d'Orcia",

            days: 5,

            minBudget: 1000,
            maxBudget: 3000,

            types: [
                "aesthetic",
                "food",
                "authentic",
                "culture",
                "slow",
                "romantic"
            ],

            image: "images/tuscany.jpg",

            description:
                "Golden hills, small villages, family wineries and slow Italian mornings.",

            price: 1090,

            itinerary: [
                "Day 01 — Florence",
                "Day 02 — Siena",
                "Day 03 — San Gimignano",
                "Day 04 — Val d'Orcia",
                "Day 05 — Departure"
            ],

            included: [
                "Boutique hotels",
                "Wine tasting",
                "Local guide",
                "Breakfast"
            ],

            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        {
            id: "sicily-slow",

            country: "Italy",

            title: "SICILY SLOW",

            route: "Palermo → Taormina → Syracuse",

            days: 10,

            minBudget: 1300,
            maxBudget: 3500,

            types: [
                "beach",
                "food",
                "authentic",
                "slow",
                "culture",
                "nature"
            ],

            image: "images/sicily.jpg",

            description:
                "Ten days of Sicilian beaches, ancient streets and unforgettable food.",

            price: 1450,

            itinerary: [
                "Day 01 — Palermo",
                "Day 02 — Palermo",
                "Day 03 — Cefalù",
                "Day 04 — Agrigento",
                "Day 05 — Catania",
                "Day 06 — Mount Etna",
                "Day 07 — Taormina",
                "Day 08 — Syracuse",
                "Day 09 — Noto",
                "Day 10 — Departure"
            ],

            included: [
                "Hotels",
                "Private transfers",
                "Local guide",
                "Breakfast"
            ],

            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        /* ================= FRANCE ================= */

        {
            id: "paris-provence",

            country: "France",

            title: "PARIS & PROVENCE",

            route: "Paris → Lyon → Provence",

            days: 7,

            minBudget: 1400,
            maxBudget: 4000,

            types: [
                "city",
                "aesthetic",
                "food",
                "culture",
                "romantic",
                "landmarks"
            ],

            image: "images/paris.jpg",

            description:
                "Elegant Parisian streets followed by lavender fields and quiet Provençal villages.",

            price: 1490,

            itinerary: [
                "Day 01 — Paris",
                "Day 02 — Paris",
                "Day 03 — Paris",
                "Day 04 — Lyon",
                "Day 05 — Avignon",
                "Day 06 — Provence",
                "Day 07 — Departure"
            ],

            included: [
                "Hotels",
                "Train tickets",
                "Local guide",
                "Breakfast"
            ],

            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        {
            id: "french-riviera",

            country: "France",

            title: "FRENCH RIVIERA",

            route: "Nice → Cannes → Monaco",

            days: 5,

            minBudget: 1600,
            maxBudget: 5000,

            types: [
                "beach",
                "luxury",
                "aesthetic",
                "romantic",
                "city"
            ],

            image: "images/riviera.jpg",

            description:
                "Blue Mediterranean water, elegant coastal towns and slow afternoons on the Riviera.",

            price: 1690,

            itinerary: [
                "Day 01 — Nice",
                "Day 02 — Cannes",
                "Day 03 — Antibes",
                "Day 04 — Monaco",
                "Day 05 — Departure"
            ],

            included: [
                "Hotels",
                "Private transfer",
                "Breakfast",
                "Local guide"
            ],

            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        /* ================= JAPAN ================= */

        {
            id: "tokyo-kyoto",

            country: "Japan",

            title: "TOKYO TO KYOTO",

            route: "Tokyo → Hakone → Kyoto",

            days: 10,

            minBudget: 1800,
            maxBudget: 5000,

            types: [
                "city",
                "culture",
                "aesthetic",
                "food",
                "landmarks",
                "authentic"
            ],

            image: "images/japan-route.jpg",

            description:
                "From Tokyo nights to quiet Kyoto temples, discover two sides of Japan.",

            price: 1890,

            itinerary: [
                "Day 01 — Tokyo",
                "Day 02 — Tokyo",
                "Day 03 — Tokyo",
                "Day 04 — Hakone",
                "Day 05 — Kyoto",
                "Day 06 — Kyoto",
                "Day 07 — Nara",
                "Day 08 — Kyoto",
                "Day 09 — Osaka",
                "Day 10 — Departure"
            ],

            included: [
                "Hotels",
                "Rail pass",
                "Local guide",
                "Breakfast"
            ],

            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        {
            id: "japan-slow",

            country: "Japan",

            title: "JAPAN SLOW",

            route: "Kyoto → Nara → Takayama",

            days: 7,

            minBudget: 1500,
            maxBudget: 4000,

            types: [
                "slow",
                "authentic",
                "culture",
                "nature",
                "aesthetic"
            ],

            image: "images/kyoto.jpg",

            description:
                "A quieter Japan filled with temples, mountain villages and traditional streets.",

            price: 1590,

            itinerary: [
                "Day 01 — Kyoto",
                "Day 02 — Kyoto",
                "Day 03 — Nara",
                "Day 04 — Takayama",
                "Day 05 — Shirakawa-go",
                "Day 06 — Takayama",
                "Day 07 — Departure"
            ],

            included: [
                "Ryokan stay",
                "Hotels",
                "Local guide",
                "Breakfast"
            ],

            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        /* ================= ICELAND ================= */

        {
            id: "iceland-ring-road",

            country: "Iceland",

            title: "ICELAND RING ROAD",

            route: "Reykjavik → Vik → Akureyri",

            days: 10,

            minBudget: 1900,
            maxBudget: 5000,

            types: [
                "adventure",
                "nature",
                "authentic",
                "aesthetic"
            ],

            image: "images/iceland-route.jpg",

            description:
                "Waterfalls, black beaches, glaciers and endless northern landscapes.",

            price: 1990,

            itinerary: [
                "Day 01 — Reykjavik",
                "Day 02 — Golden Circle",
                "Day 03 — Vik",
                "Day 04 — Skaftafell",
                "Day 05 — Jokulsarlon",
                "Day 06 — East Fjords",
                "Day 07 — Akureyri",
                "Day 08 — North Iceland",
                "Day 09 — Reykjavik",
                "Day 10 — Departure"
            ],

            included: [
                "Hotels",
                "4x4 transport",
                "Local guide",
                "Breakfast"
            ],

            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        /* ================= GREECE ================= */

        {
            id: "cyclades",

            country: "Greece",

            title: "CYCLADES ESCAPE",

            route: "Athens → Mykonos → Santorini",

            days: 7,

            minBudget: 1300,
            maxBudget: 4000,

            types: [
                "beach",
                "aesthetic",
                "romantic",
                "luxury",
                "food"
            ],

            image: "images/cyclades.jpg",

            description:
                "Whitewashed villages, blue seas and long Mediterranean evenings.",

            price: 1390,

            itinerary: [
                "Day 01 — Athens",
                "Day 02 — Athens",
                "Day 03 — Mykonos",
                "Day 04 — Mykonos",
                "Day 05 — Santorini",
                "Day 06 — Santorini",
                "Day 07 — Departure"
            ],

            included: [
                "Hotels",
                "Ferry tickets",
                "Breakfast",
                "Local guide"
            ],

            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        /* ================= PORTUGAL ================= */

        {
            id: "portugal-atlantic",

            country: "Portugal",

            title: "ATLANTIC PORTUGAL",

            route: "Lisbon → Sintra → Porto",

            days: 7,

            minBudget: 1100,
            maxBudget: 3500,

            types: [
                "city",
                "aesthetic",
                "food",
                "authentic",
                "culture"
            ],

            image: "images/portugal-route.jpg",

            description:
                "Colourful streets, Atlantic sunsets and authentic Portuguese flavours.",

            price: 1190,

            itinerary: [
                "Day 01 — Lisbon",
                "Day 02 — Lisbon",
                "Day 03 — Sintra",
                "Day 04 — Nazaré",
                "Day 05 — Porto",
                "Day 06 — Porto",
                "Day 07 — Departure"
            ],

            included: [
                "Hotels",
                "Train tickets",
                "Breakfast",
                "Local guide"
            ],

            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        }

    ];



    /* =========================================
       SHOW STEP
    ========================================= */

    function showStep(stepNumber) {

        currentStep = stepNumber;


        plannerSteps.forEach(step => {

            const number =
                Number(step.dataset.step);

            step.classList.toggle(
                "active",
                number === stepNumber
            );

        });


        stepIndicators.forEach(indicator => {

            const number =
                Number(indicator.dataset.stepIndicator);

            indicator.classList.toggle(
                "active",
                number <= stepNumber
            );

        });


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }



    /* =========================================
       COUNTRY
    ========================================= */

    document
        .querySelectorAll(".choice-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                state.country =
                    card.dataset.value;

                showStep(2);

            });

        });



    /* =========================================
       MONTH
    ========================================= */

    document
        .querySelectorAll(".month-grid button")
        .forEach(button => {

            button.addEventListener("click", () => {

                state.month =
                    button.dataset.value;


                document
                    .querySelectorAll(
                        ".month-grid button"
                    )
                    .forEach(item => {

                        item.classList.remove(
                            "selected"
                        );

                    });


                button.classList.add(
                    "selected"
                );


                setTimeout(() => {

                    showStep(3);

                }, 250);

            });

        });



    /* =========================================
       DAYS
    ========================================= */

    document
        .querySelectorAll(".days-grid button")
        .forEach(button => {

            button.addEventListener("click", () => {

                state.days =
                    Number(button.dataset.value);


                document
                    .querySelectorAll(
                        ".days-grid button"
                    )
                    .forEach(item => {

                        item.classList.remove(
                            "selected"
                        );

                    });


                button.classList.add(
                    "selected"
                );


                setTimeout(() => {

                    showStep(4);

                }, 250);

            });

        });



    /* =========================================
       BUDGET
    ========================================= */

    function updateBudget() {

        state.budget =
            Number(budgetRange.value);

        budgetValue.textContent =
            state.budget.toLocaleString("en-US");

    }


    budgetRange.addEventListener(
        "input",
        updateBudget
    );


    budgetContinue.addEventListener(
        "click",
        () => {

            updateBudget();

            showStep(5);

        }
    );



    /* =========================================
       TYPES
    ========================================= */

    document
        .querySelectorAll(".type-grid button")
        .forEach(button => {

            button.addEventListener("click", () => {

                state.type =
                    button.dataset.value;


                document
                    .querySelectorAll(
                        ".type-grid button"
                    )
                    .forEach(item => {

                        item.classList.remove(
                            "selected"
                        );

                    });


                button.classList.add(
                    "selected"
                );


                setTimeout(() => {

                    showResults();

                }, 300);

            });

        });



    /* =========================================
       FILTER JOURNEYS
    ========================================= */

    function getMatchingJourneys() {

        /*
         * ВАЖНО:
         * страна является ОБЯЗАТЕЛЬНЫМ фильтром.
         *
         * Поэтому если выбрана Italy,
         * Greece / Portugal / France
         * сюда никогда не попадут.
         */

        let matches =
            journeys.filter(journey => {

                return journey.country ===
                    state.country;

            });


        /*
         * Сначала пытаемся найти
         * маршруты, которые подходят
         * абсолютно по всем параметрам.
         */

        const perfectMatches =
            matches.filter(journey => {

                const monthMatch =
                    true;

                const daysMatch =
                    Math.abs(
                        journey.days - state.days
                    ) <= 4;

                const budgetMatch =
                    state.budget >=
                    journey.minBudget &&
                    state.budget <=
                    journey.maxBudget;

                const typeMatch =
                    journey.types.includes(
                        state.type
                    );

                return (
                    monthMatch &&
                    daysMatch &&
                    budgetMatch &&
                    typeMatch
                );

            });


        if (perfectMatches.length > 0) {

            return perfectMatches;

        }


        /*
         * Если идеальных совпадений нет,
         * показываем маршруты ТОЙ ЖЕ СТРАНЫ.
         *
         * Это гарантирует, что пользователь
         * всегда получит результат.
         */

        matches.sort((a, b) => {

            let scoreA = 0;
            let scoreB = 0;


            if (
                a.types.includes(state.type)
            ) {
                scoreA += 5;
            }


            if (
                b.types.includes(state.type)
            ) {
                scoreB += 5;
            }


            scoreA -=
                Math.abs(
                    a.days - state.days
                );


            scoreB -=
                Math.abs(
                    b.days - state.days
                );


            const budgetDistanceA =
                Math.min(
                    Math.abs(
                        state.budget - a.minBudget
                    ),
                    Math.abs(
                        state.budget - a.maxBudget
                    )
                );


            const budgetDistanceB =
                Math.min(
                    Math.abs(
                        state.budget - b.minBudget
                    ),
                    Math.abs(
                        state.budget - b.maxBudget
                    )
                );


            scoreA -=
                budgetDistanceA / 1000;


            scoreB -=
                budgetDistanceB / 1000;


            return scoreB - scoreA;

        });


        return matches;

    }



    /* =========================================
       SHOW RESULTS
    ========================================= */

    function showResults() {

        const matches =
            getMatchingJourneys();


        plannerSteps.forEach(step => {

            step.classList.remove("active");

        });


        stepIndicators.forEach(indicator => {

            indicator.classList.add("active");

        });


        results.classList.add("active");


        resultDescription.textContent =
            `${state.country} · ${state.days} days · ${state.month} · $${state.budget.toLocaleString("en-US")} · ${getTypeName(state.type)}`;


        renderJourneys(matches);


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }



    /* =========================================
       TYPE NAME
    ========================================= */

    function getTypeName(type) {

        const names = {

            beach: "Пляж",

            adventure: "Приключения",

            city: "Город",

            aesthetic: "Эстетичные места",

            authentic: "Аутентичные места",

            landmarks: "Достопримечательности",

            food: "Гастрономия",

            nature: "Природа",

            culture: "Культура",

            slow: "Slow travel",

            romantic: "Романтика",

            luxury: "Luxury"

        };


        return names[type] || type;

    }



    /* =========================================
       RENDER JOURNEYS
    ========================================= */

    function renderJourneys(items) {

        journeysGrid.innerHTML = "";


        items.forEach((journey, index) => {

            const card =
                document.createElement("article");


            card.className =
                "journey-card";


            card.dataset.id =
                journey.id;


            card.innerHTML = `

                <div class="journey-card__image">

                    <img
                        src="${journey.image}"
                        alt="${journey.title}"
                    >

                    <span class="journey-card__country">
                        ${journey.country}
                    </span>

                    <span class="journey-card__number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                </div>


                <div class="journey-card__bottom">

                    <div class="journey-card__route">

                        <h3>
                            ${journey.title}
                        </h3>

                        <span>
                            ${journey.route} · ${journey.days} days
                        </span>

                    </div>


                    <span class="journey-card__arrow">
                        →
                    </span>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openJourney(journey);

                }
            );


            journeysGrid.appendChild(card);

        });

    }



    /* =========================================
       OPEN JOURNEY
    ========================================= */

    function openJourney(journey) {

        state.selectedJourney =
            journey;


        modalCountry.textContent =
            journey.country;


        modalTitle.textContent =
            journey.title;


        modalNumber.textContent =
            String(
                journeys.indexOf(journey) + 1
            ).padStart(2, "0");


        modalRoute.textContent =
            journey.route;


        modalDescription.textContent =
            journey.description;


        modalPrice.textContent =
            `$${journey.price.toLocaleString("en-US")}`;


        modalBackground.style.backgroundImage =
            `url("${journey.image}")`;


        modalDays.innerHTML = "";


        journey.itinerary.forEach(day => {

            const element =
                document.createElement("div");

            element.className =
                "modal-day";

            element.textContent =
                day;

            modalDays.appendChild(
                element
            );

        });


        modalIncluded.innerHTML = "";


        journey.included.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent =
                `✓ ${item}`;

            modalIncluded.appendChild(li);

        });


        modalNotIncluded.innerHTML = "";


        journey.notIncluded.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent =
                `× ${item}`;

            modalNotIncluded.appendChild(li);

        });


        routeButton.dataset.route =
            journey.id;


        journeyModal.classList.add(
            "open"
        );


        journeyModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "modal-open"
        );

    }



    /* =========================================
       CLOSE MODAL
    ========================================= */

    function closeJourney() {

        journeyModal.classList.remove(
            "open"
        );


        journeyModal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "modal-open"
        );

    }


    modalClose.addEventListener(
        "click",
        closeJourney
    );


    journeyModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                journeyModal
            ) {

                closeJourney();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                journeyModal.classList.contains("open")
            ) {

                closeJourney();

            }

        }
    );



    /* =========================================
       GO TO ROUTE
    ========================================= */

    routeButton.addEventListener(
        "click",
        () => {

            const routeId =
                routeButton.dataset.route;


            if (!routeId) {
                return;
            }


            /*
             * Пока отдельной страницы
             * маршрута нет.
             *
             * Поэтому передаём ID маршрута
             * через URL.
             *
             * Например:
             *
             * route.html?id=amalfi-coast
             */

            window.location.href =
                `route.html?id=${encodeURIComponent(routeId)}`;

        }
    );



    /* =========================================
       BACK BUTTONS
    ========================================= */

    document
        .querySelectorAll(".back-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    if (currentStep > 1) {

                        showStep(
                            currentStep - 1
                        );

                    }

                }
            );

        });



    /* =========================================
       RESTART
    ========================================= */

    restartButton.addEventListener(
        "click",
        () => {

            state.country = null;

            state.month = null;

            state.days = null;

            state.budget = 1500;

            state.type = null;

            state.selectedJourney = null;


            budgetRange.value = 1500;

            budgetValue.textContent =
                "1,500";


            document
                .querySelectorAll(
                    ".selected"
                )
                .forEach(element => {

                    element.classList.remove(
                        "selected"
                    );

                });


            results.classList.remove(
                "active"
            );


            showStep(1);

        }
    );



    /* =========================================
       MOBILE MENU
    ========================================= */

    menuButton.addEventListener(
        "click",
        () => {

            mobileNavigation.classList.toggle(
                "open"
            );

            document.body.classList.toggle(
                "menu-open"
            );

        }
    );


    mobileNavigation
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileNavigation.classList.remove(
                        "open"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        });



    /* =========================================
       INIT
    ========================================= */

    updateBudget();

});
