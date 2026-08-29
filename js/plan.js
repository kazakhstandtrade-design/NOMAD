/* =========================================
   NOMAD — PLAN YOUR JOURNEY
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       STATE
    ========================================= */

    const state = {
        country: null,
        month: null,
        days: null,
        budget: 1500,
        type: null
    };


    let currentStep = 1;


    /* =========================================
       ELEMENTS
    ========================================= */

    const steps = document.querySelectorAll(".planner-step");
    const stepIndicators = document.querySelectorAll(".step");

    const budgetRange =
        document.getElementById("budgetRange");

    const budgetValue =
        document.getElementById("budgetValue");

    const budgetContinue =
        document.getElementById("budgetContinue");

    const results =
        document.getElementById("results");

    const journeysGrid =
        document.getElementById("journeysGrid");

    const resultDescription =
        document.getElementById("resultDescription");

    const restartButton =
        document.getElementById("restartButton");

    const modal =
        document.getElementById("journeyModal");

    const modalClose =
        document.getElementById("modalClose");


    /* =========================================
       JOURNEYS DATABASE
    ========================================= */

    const journeys = [

        /* ================= ITALY ================= */

        {
            country: "Italy",
            title: "AMALFI COAST",
            route: "Rome → Florence → Amalfi",
            days: 7,
            minBudget: 1200,
            maxBudget: 3000,
            types: [
                "beach",
                "aesthetic",
                "authentic",
                "food",
                "culture",
                "landmarks",
                "slow"
            ],
            image: "images/amalfi.jpg",
            description:
                "A week between Mediterranean villages, hidden beaches and Italian cuisine.",
            price: "$1,290",
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
            country: "Italy",
            title: "TUSCAN ESCAPE",
            route: "Florence → Siena → Tuscany",
            days: 5,
            minBudget: 900,
            maxBudget: 2200,
            types: [
                "aesthetic",
                "authentic",
                "food",
                "culture",
                "slow",
                "nature"
            ],
            image: "images/tuscany.jpg",
            description:
                "Rolling hills, stone villages, vineyards and the timeless beauty of Tuscany.",
            price: "$990",
            itinerary: [
                "Day 01 — Florence",
                "Day 02 — Siena",
                "Day 03 — Val d'Orcia",
                "Day 04 — Montepulciano",
                "Day 05 — Departure"
            ],
            included: [
                "Hotels",
                "Breakfast",
                "Local guide",
                "Transfers"
            ],
            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },

        {
            country: "Italy",
            title: "ROME & THE SOUTH",
            route: "Rome → Naples → Sorrento",
            days: 7,
            minBudget: 1000,
            maxBudget: 2600,
            types: [
                "city",
                "landmarks",
                "food",
                "culture",
                "authentic"
            ],
            image: "images/rome.jpg",
            description:
                "Ancient streets, legendary landmarks and the vibrant atmosphere of southern Italy.",
            price: "$1,150",
            itinerary: [
                "Day 01 — Rome",
                "Day 02 — Rome",
                "Day 03 — Vatican City",
                "Day 04 — Naples",
                "Day 05 — Pompeii",
                "Day 06 — Sorrento",
                "Day 07 — Departure"
            ],
            included: [
                "Hotels",
                "Breakfast",
                "Museum tickets",
                "Local guide"
            ],
            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        /* ================= FRANCE ================= */

        {
            country: "France",
            title: "PARIS IN SEVEN DAYS",
            route: "Paris → Versailles → Montmartre",
            days: 7,
            minBudget: 1300,
            maxBudget: 3200,
            types: [
                "city",
                "aesthetic",
                "landmarks",
                "food",
                "culture"
            ],
            image: "images/paris.jpg",
            description:
                "Parisian cafés, hidden streets, museums and unforgettable evenings along the Seine.",
            price: "$1,390",
            itinerary: [
                "Day 01 — Paris",
                "Day 02 — Louvre",
                "Day 03 — Montmartre",
                "Day 04 — Versailles",
                "Day 05 — Le Marais",
                "Day 06 — Saint-Germain",
                "Day 07 — Departure"
            ],
            included: [
                "Hotels",
                "Breakfast",
                "Museum passes",
                "Local guide"
            ],
            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },

        {
            country: "France",
            title: "FRENCH RIVIERA",
            route: "Nice → Cannes → Monaco",
            days: 5,
            minBudget: 1200,
            maxBudget: 3000,
            types: [
                "beach",
                "aesthetic",
                "city",
                "slow",
                "food"
            ],
            image: "images/nice.jpg",
            description:
                "Blue Mediterranean water, elegant streets and slow days on the French Riviera.",
            price: "$1,350",
            itinerary: [
                "Day 01 — Nice",
                "Day 02 — Antibes",
                "Day 03 — Cannes",
                "Day 04 — Monaco",
                "Day 05 — Departure"
            ],
            included: [
                "Hotels",
                "Breakfast",
                "Transfers",
                "Local guide"
            ],
            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        /* ================= JAPAN ================= */

        {
            country: "Japan",
            title: "TOKYO & KYOTO",
            route: "Tokyo → Kyoto → Osaka",
            days: 7,
            minBudget: 1400,
            maxBudget: 3500,
            types: [
                "city",
                "culture",
                "authentic",
                "food",
                "aesthetic",
                "landmarks"
            ],
            image: "images/tokyo.jpg",
            description:
                "A contrast of neon Tokyo, ancient temples, quiet gardens and Japanese cuisine.",
            price: "$1,590",
            itinerary: [
                "Day 01 — Tokyo",
                "Day 02 — Tokyo",
                "Day 03 — Tokyo",
                "Day 04 — Kyoto",
                "Day 05 — Kyoto",
                "Day 06 — Osaka",
                "Day 07 — Departure"
            ],
            included: [
                "Hotels",
                "Breakfast",
                "Rail pass",
                "Local guide"
            ],
            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },

        {
            country: "Japan",
            title: "JAPAN SLOW TRAVEL",
            route: "Kyoto → Nara → Hakone",
            days: 10,
            minBudget: 1800,
            maxBudget: 4000,
            types: [
                "slow",
                "culture",
                "nature",
                "authentic",
                "aesthetic"
            ],
            image: "images/kyoto.jpg",
            description:
                "Quiet temples, mountain landscapes, traditional villages and peaceful Japanese mornings.",
            price: "$1,990",
            itinerary: [
                "Day 01 — Kyoto",
                "Day 02 — Kyoto",
                "Day 03 — Nara",
                "Day 04 — Nara",
                "Day 05 — Kanazawa",
                "Day 06 — Hakone",
                "Day 07 — Hakone",
                "Day 08 — Tokyo",
                "Day 09 — Tokyo",
                "Day 10 — Departure"
            ],
            included: [
                "Hotels",
                "Breakfast",
                "Rail pass",
                "Local guide"
            ],
            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        /* ================= ICELAND ================= */

        {
            country: "Iceland",
            title: "ICELAND ROAD TRIP",
            route: "Reykjavik → Vik → Akureyri",
            days: 10,
            minBudget: 1700,
            maxBudget: 4000,
            types: [
                "adventure",
                "nature",
                "authentic"
            ],
            image: "images/iceland.jpg",
            description:
                "Waterfalls, black beaches, glaciers and endless northern landscapes.",
            price: "$1,890",
            itinerary: [
                "Day 01 — Reykjavik",
                "Day 02 — Golden Circle",
                "Day 03 — Vik",
                "Day 04 — Black Beach",
                "Day 05 — Skaftafell",
                "Day 06 — Glacier Lagoon",
                "Day 07 — East Fjords",
                "Day 08 — Akureyri",
                "Day 09 — Reykjavik",
                "Day 10 — Departure"
            ],
            included: [
                "Hotels",
                "Car rental",
                "Breakfast",
                "Route guide"
            ],
            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        /* ================= GREECE ================= */

        {
            country: "Greece",
            title: "ISLAND SUMMER",
            route: "Athens → Mykonos → Santorini",
            days: 7,
            minBudget: 1200,
            maxBudget: 3000,
            types: [
                "beach",
                "aesthetic",
                "food",
                "slow"
            ],
            image: "images/santorini.jpg",
            description:
                "White villages, blue water, warm evenings and slow Mediterranean days.",
            price: "$1,350",
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
                "Breakfast",
                "Ferry tickets",
                "Local guide"
            ],
            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },


        /* ================= PORTUGAL ================= */

        {
            country: "Portugal",
            title: "LISBON & THE COAST",
            route: "Lisbon → Sintra → Cascais",
            days: 5,
            minBudget: 800,
            maxBudget: 2200,
            types: [
                "city",
                "beach",
                "aesthetic",
                "food",
                "authentic",
                "slow"
            ],
            image: "images/lisbon.jpg",
            description:
                "Colourful streets, ocean views, local food and relaxed Portuguese evenings.",
            price: "$890",
            itinerary: [
                "Day 01 — Lisbon",
                "Day 02 — Lisbon",
                "Day 03 — Sintra",
                "Day 04 — Cascais",
                "Day 05 — Departure"
            ],
            included: [
                "Hotels",
                "Breakfast",
                "Transfers",
                "Local guide"
            ],
            notIncluded: [
                "Flights",
                "Personal expenses"
            ]
        },

        {
            country: "Portugal",
            title: "PORTUGAL DISCOVERED",
            route: "Porto → Lisbon → Algarve",
            days: 10,
            minBudget: 1400,
            maxBudget: 3500,
            types: [
                "beach",
                "city",
                "food",
                "nature",
                "authentic"
            ],
            image: "images/portugal.jpg",
            description:
                "From northern wine country to Lisbon streets and the wild Algarve coast.",
            price: "$1,490",
            itinerary: [
                "Day 01 — Porto",
                "Day 02 — Porto",
                "Day 03 — Douro Valley",
                "Day 04 — Lisbon",
                "Day 05 — Lisbon",
                "Day 06 — Sintra",
                "Day 07 — Algarve",
                "Day 08 — Algarve",
                "Day 09 — Lagos",
                "Day 10 — Departure"
            ],
            included: [
                "Hotels",
                "Breakfast",
                "Transfers",
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

        steps.forEach(step => {

            step.classList.toggle(
                "active",
                Number(step.dataset.step) === stepNumber
            );

        });


        stepIndicators.forEach((indicator, index) => {

            indicator.classList.toggle(
                "active",
                index + 1 <= stepNumber
            );

        });


        results.classList.remove("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* =========================================
       COUNTRY
    ========================================= */

    document.querySelectorAll(
        ".countries .choice-card"
    ).forEach(card => {

        card.addEventListener("click", () => {

            state.country =
                card.dataset.value;

            showStep(2);
        });

    });


    /* =========================================
       MONTH
    ========================================= */

    document.querySelectorAll(
        ".month-grid button"
    ).forEach(button => {

        button.addEventListener("click", () => {

            state.month =
                button.dataset.value;

            showStep(3);

        });

    });


    /* =========================================
       DAYS
    ========================================= */

    document.querySelectorAll(
        ".days-grid button"
    ).forEach(button => {

        button.addEventListener("click", () => {

            state.days =
                Number(button.dataset.value);

            showStep(4);

        });

    });


    /* =========================================
       BUDGET
    ========================================= */

    budgetRange.addEventListener(
        "input",
        () => {

            state.budget =
                Number(budgetRange.value);

            if (state.budget >= 10000) {

                budgetValue.textContent =
                    "10000+";

            } else {

                budgetValue.textContent =
                    state.budget;
            }

        }
    );


    budgetContinue.addEventListener(
        "click",
        () => {

            showStep(5);

        }
    );


    /* =========================================
       TYPE
    ========================================= */

    document.querySelectorAll(
        ".type-grid button"
    ).forEach(button => {

        button.addEventListener("click", () => {

            state.type =
                button.dataset.value;

            generateResults();

        });

    });


    /* =========================================
       BACK BUTTONS
    ========================================= */

    document.querySelectorAll(
        ".back-button"
    ).forEach(button => {

        button.addEventListener("click", () => {

            if (currentStep > 1) {

                showStep(currentStep - 1);

            }

        });

    });


    /* =========================================
       FILTER JOURNEYS
    ========================================= */

    function filterJourneys() {

        /*
         IMPORTANT:
         Сначала фильтруем ПО СТРАНЕ.

         Поэтому если пользователь выбрал Italy,
         ему НИКОГДА не покажутся Greece,
         Portugal и другие страны.
        */

        let filtered =
            journeys.filter(
                journey =>
                    journey.country === state.country
            );


        /* DAYS */

        if (state.days) {

            const exactDays =
                filtered.filter(
                    journey =>
                        journey.days === state.days
                );

            if (exactDays.length > 0) {

                filtered = exactDays;

            }

        }


        /* BUDGET */

        const budgetMatches =
            filtered.filter(
                journey =>
                    state.budget >= journey.minBudget &&
                    state.budget <= journey.maxBudget
            );


        if (budgetMatches.length > 0) {

            filtered = budgetMatches;

        }


        /* TYPE */

        if (state.type) {

            const typeMatches =
                filtered.filter(
                    journey =>
                        journey.types.includes(state.type)
                );


            if (typeMatches.length > 0) {

                filtered = typeMatches;

            }

        }


        /*
         Если после дополнительных фильтров
         ничего не осталось — возвращаем маршруты
         ТОЛЬКО выбранной страны.

         Другие страны НИКОГДА не добавляем.
        */

        if (filtered.length === 0) {

            filtered =
                journeys.filter(
                    journey =>
                        journey.country === state.country
                );

        }


        return filtered;

    }


    /* =========================================
       GENERATE RESULTS
    ========================================= */

    function generateResults() {

        const filtered =
            filterJourneys();


        steps.forEach(step => {

            step.classList.remove("active");

        });


        results.classList.add("active");


        resultDescription.textContent =
            `${state.country} • ${state.days} days • ${state.budget >= 10000 ? "$10,000+" : "$" + state.budget} • ${filtered.length} journeys`;


        renderJourneys(filtered);


        setTimeout(() => {

            results.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }


    /* =========================================
       RENDER JOURNEY CARDS
    ========================================= */

    function renderJourneys(data) {

        journeysGrid.innerHTML = "";


        data.forEach((journey, index) => {

            const card =
                document.createElement("article");


            card.className =
                "journey-card";


            card.dataset.index =
                index;


            /*
             ВАЖНО:

             Здесь сверху карточки выводится
             ТОЛЬКО COUNTRY.

             TITLE здесь больше НЕТ.
            */

            card.innerHTML = `

                <div class="journey-card__image">

                    <img
                        src="${journey.image}"
                        alt="${journey.country}"
                        loading="lazy"
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
                            ${journey.route} • ${journey.days} days
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

        document.getElementById(
            "modalCountry"
        ).textContent =
            journey.country;


        document.getElementById(
            "modalTitle"
        ).textContent =
            journey.title;


        document.getElementById(
            "modalRoute"
        ).textContent =
            journey.route;


        document.getElementById(
            "modalDescription"
        ).textContent =
            journey.description;


        document.getElementById(
            "modalPrice"
        ).textContent =
            journey.price;


        /* BACKGROUND */

        const modalBackground =
            document.querySelector(
                ".journey-modal__background"
            );


        modalBackground.style.backgroundImage =
            `url("${journey.image}")`;


        /* DAYS */

        const modalDays =
            document.getElementById(
                "modalDays"
            );


        modalDays.innerHTML = "";


        journey.itinerary.forEach(day => {

            const element =
                document.createElement("div");


            element.className =
                "modal-day";


            element.textContent =
                day;


            modalDays.appendChild(element);

        });


        /* INCLUDED */

        const included =
            document.getElementById(
                "modalIncluded"
            );


        included.innerHTML = "";


        journey.included.forEach(item => {

            const li =
                document.createElement("li");


            li.textContent =
                "✓ " + item;


            included.appendChild(li);

        });


        /* NOT INCLUDED */

        const notIncluded =
            document.getElementById(
                "modalNotIncluded"
            );


        notIncluded.innerHTML = "";


        journey.notIncluded.forEach(item => {

            const li =
                document.createElement("li");


            li.textContent =
                "× " + item;


            notIncluded.appendChild(li);

        });


        /* OPEN */

        modal.classList.add("open");

        modal.setAttribute(
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

    function closeModal() {

        modal.classList.remove("open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "modal-open"
        );

    }


    modalClose.addEventListener(
        "click",
        closeModal
    );


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal ||
                event.target.classList.contains(
                    "journey-modal__overlay"
                )
            ) {

                closeModal();

            }

        }
    );


    /* =========================================
       ESC
    ========================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("open")
            ) {

                closeModal();

            }

        }
    );


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


            budgetRange.value = 1500;

            budgetValue.textContent = 1500;


            results.classList.remove(
                "active"
            );


            showStep(1);

        }
    );


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuButton =
        document.querySelector(
            ".menu-button"
        );


    const mobileNavigation =
        document.querySelector(
            ".mobile-navigation"
        );


    if (
        menuButton &&
        mobileNavigation
    ) {

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

    }


});
