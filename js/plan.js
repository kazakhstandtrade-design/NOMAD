/* =========================================
   NOMAD — PLAN
========================================= */


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
   JOURNEYS DATABASE
========================================= */

const journeys = [

    {
        id: 1,
        country: "Italy",
        title: "AMALFI COAST",
        route: "Rome → Florence → Amalfi",
        days: 7,
        price: 1290,
        image: "amalfi.jpg",

        types: [
            "beach",
            "aesthetic",
            "food",
            "city",
            "landmarks"
        ],

        months: [
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        description:
            "A week between Mediterranean villages, hidden beaches and Italian cuisine.",

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
            "✓ Hotels",
            "✓ Airport transfer",
            "✓ Local guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    },


    {
        id: 2,
        country: "France",
        title: "FRENCH ESCAPE",
        route: "Paris → Provence → Nice",
        days: 7,
        price: 1450,
        image: "france.jpg",

        types: [
            "city",
            "aesthetic",
            "authentic",
            "food",
            "landmarks",
            "culture"
        ],

        months: [
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        description:
            "Parisian streets, quiet Provençal villages and the Mediterranean coast.",

        itinerary: [
            "Day 01 — Paris",
            "Day 02 — Paris",
            "Day 03 — Paris",
            "Day 04 — Provence",
            "Day 05 — Provence",
            "Day 06 — Nice",
            "Day 07 — Departure"
        ],

        included: [
            "✓ Hotels",
            "✓ Airport transfer",
            "✓ Local guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    },


    {
        id: 3,
        country: "Japan",
        title: "JAPANESE SOUL",
        route: "Tokyo → Kyoto → Osaka",
        days: 10,
        price: 1890,
        image: "japan.jpg",

        types: [
            "city",
            "authentic",
            "culture",
            "food",
            "aesthetic",
            "landmarks"
        ],

        months: [
            "March",
            "April",
            "May",
            "October",
            "November"
        ],

        description:
            "Ancient temples, neon nights, quiet gardens and unforgettable Japanese cuisine.",

        itinerary: [
            "Day 01 — Tokyo",
            "Day 02 — Tokyo",
            "Day 03 — Tokyo",
            "Day 04 — Kyoto",
            "Day 05 — Kyoto",
            "Day 06 — Kyoto",
            "Day 07 — Nara",
            "Day 08 — Osaka",
            "Day 09 — Osaka",
            "Day 10 — Departure"
        ],

        included: [
            "✓ Hotels",
            "✓ Rail pass",
            "✓ Local guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    },


    {
        id: 4,
        country: "Iceland",
        title: "ICELAND WILD",
        route: "Reykjavik → Golden Circle → South Coast",
        days: 6,
        price: 1590,
        image: "iceland.jpg",

        types: [
            "adventure",
            "nature",
            "aesthetic",
            "authentic"
        ],

        months: [
            "February",
            "March",
            "April",
            "May",
            "September",
            "October",
            "November"
        ],

        description:
            "Volcanic landscapes, black beaches, waterfalls and the wild Icelandic coast.",

        itinerary: [
            "Day 01 — Reykjavik",
            "Day 02 — Golden Circle",
            "Day 03 — South Coast",
            "Day 04 — Vik",
            "Day 05 — Black Beach",
            "Day 06 — Departure"
        ],

        included: [
            "✓ Hotels",
            "✓ 4x4 transport",
            "✓ Local guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    },


    {
        id: 5,
        country: "Greece",
        title: "AEGEAN SUMMER",
        route: "Athens → Mykonos → Santorini",
        days: 7,
        price: 1390,
        image: "greece.jpg",

        types: [
            "beach",
            "aesthetic",
            "food",
            "city",
            "landmarks"
        ],

        months: [
            "May",
            "June",
            "July",
            "August",
            "September"
        ],

        description:
            "White villages, deep blue water, warm evenings and slow Mediterranean days.",

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
            "✓ Hotels",
            "✓ Ferry transfers",
            "✓ Local guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    },


    {
        id: 6,
        country: "Portugal",
        title: "ATLANTIC LIGHT",
        route: "Lisbon → Sintra → Algarve",
        days: 7,
        price: 1190,
        image: "portugal.jpg",

        types: [
            "beach",
            "authentic",
            "aesthetic",
            "food",
            "city",
            "nature"
        ],

        months: [
            "March",
            "April",
            "May",
            "June",
            "July",
            "September",
            "October"
        ],

        description:
            "Atlantic coastlines, colorful streets, hidden beaches and slow Portuguese mornings.",

        itinerary: [
            "Day 01 — Lisbon",
            "Day 02 — Lisbon",
            "Day 03 — Sintra",
            "Day 04 — Algarve",
            "Day 05 — Algarve",
            "Day 06 — Algarve",
            "Day 07 — Departure"
        ],

        included: [
            "✓ Hotels",
            "✓ Airport transfer",
            "✓ Local guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    },


    {
        id: 7,
        country: "Italy",
        title: "TUSCAN SLOW",
        route: "Florence → Siena → Val d'Orcia",
        days: 5,
        price: 990,
        image: "tuscany.jpg",

        types: [
            "slow",
            "authentic",
            "food",
            "aesthetic",
            "culture"
        ],

        months: [
            "April",
            "May",
            "June",
            "September",
            "October"
        ],

        description:
            "Rolling hills, family vineyards, medieval villages and long Italian lunches.",

        itinerary: [
            "Day 01 — Florence",
            "Day 02 — Siena",
            "Day 03 — Val d'Orcia",
            "Day 04 — Pienza",
            "Day 05 — Departure"
        ],

        included: [
            "✓ Boutique hotels",
            "✓ Private transfer",
            "✓ Local guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    },


    {
        id: 8,
        country: "France",
        title: "PROVENCE SLOW",
        route: "Avignon → Gordes → Aix-en-Provence",
        days: 5,
        price: 1090,
        image: "provence.jpg",

        types: [
            "slow",
            "authentic",
            "aesthetic",
            "food",
            "nature"
        ],

        months: [
            "May",
            "June",
            "July",
            "August",
            "September"
        ],

        description:
            "Lavender fields, stone villages, local markets and the quiet rhythm of Provence.",

        itinerary: [
            "Day 01 — Avignon",
            "Day 02 — Gordes",
            "Day 03 — Roussillon",
            "Day 04 — Aix-en-Provence",
            "Day 05 — Departure"
        ],

        included: [
            "✓ Boutique hotels",
            "✓ Local transfers",
            "✓ Local guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    },


    {
        id: 9,
        country: "Japan",
        title: "TOKYO AFTER DARK",
        route: "Tokyo → Shibuya → Shinjuku",
        days: 5,
        price: 1190,
        image: "tokyo.jpg",

        types: [
            "city",
            "food",
            "aesthetic",
            "culture"
        ],

        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "October",
            "November",
            "December"
        ],

        description:
            "Neon streets, hidden izakayas, modern architecture and Tokyo after dark.",

        itinerary: [
            "Day 01 — Shibuya",
            "Day 02 — Shinjuku",
            "Day 03 — Asakusa",
            "Day 04 — Daikanyama",
            "Day 05 — Departure"
        ],

        included: [
            "✓ Hotel",
            "✓ Metro pass",
            "✓ Local guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    },


    {
        id: 10,
        country: "Greece",
        title: "CRETE ESCAPE",
        route: "Heraklion → Chania → Elafonisi",
        days: 7,
        price: 1250,
        image: "crete.jpg",

        types: [
            "beach",
            "adventure",
            "nature",
            "authentic",
            "food"
        ],

        months: [
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        description:
            "Turquoise coves, mountain villages, local food and the wild side of Crete.",

        itinerary: [
            "Day 01 — Heraklion",
            "Day 02 — Heraklion",
            "Day 03 — Chania",
            "Day 04 — Chania",
            "Day 05 — Elafonisi",
            "Day 06 — Balos",
            "Day 07 — Departure"
        ],

        included: [
            "✓ Hotels",
            "✓ Car rental",
            "✓ Local guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    },


    {
        id: 11,
        country: "Portugal",
        title: "ALGARVE COAST",
        route: "Faro → Lagos → Sagres",
        days: 5,
        price: 890,
        image: "algarve.jpg",

        types: [
            "beach",
            "nature",
            "adventure",
            "slow"
        ],

        months: [
            "April",
            "May",
            "June",
            "July",
            "September",
            "October"
        ],

        description:
            "Clifftop walks, golden beaches and quiet Atlantic sunsets.",

        itinerary: [
            "Day 01 — Faro",
            "Day 02 — Lagos",
            "Day 03 — Praia da Marinha",
            "Day 04 — Sagres",
            "Day 05 — Departure"
        ],

        included: [
            "✓ Hotels",
            "✓ Car rental",
            "✓ Local guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    },


    {
        id: 12,
        country: "Iceland",
        title: "NORTHERN LIGHTS",
        route: "Reykjavik → Vik → Jokulsarlon",
        days: 7,
        price: 1790,
        image: "northern-lights.jpg",

        types: [
            "adventure",
            "nature",
            "aesthetic"
        ],

        months: [
            "September",
            "October",
            "November",
            "December",
            "January",
            "February",
            "March"
        ],

        description:
            "Dark winter skies, glaciers, waterfalls and the northern lights.",

        itinerary: [
            "Day 01 — Reykjavik",
            "Day 02 — Golden Circle",
            "Day 03 — Vik",
            "Day 04 — Jokulsarlon",
            "Day 05 — Diamond Beach",
            "Day 06 — Reykjavik",
            "Day 07 — Departure"
        ],

        included: [
            "✓ Hotels",
            "✓ 4x4 transport",
            "✓ Aurora guide",
            "✓ Breakfast"
        ],

        notIncluded: [
            "× Flights",
            "× Personal expenses"
        ]
    }

];



/* =========================================
   ELEMENTS
========================================= */

const steps = document.querySelectorAll(".planner-step");

const stepIndicators =
    document.querySelectorAll(".step");

const results =
    document.getElementById("results");

const journeysGrid =
    document.getElementById("journeysGrid");

const budgetRange =
    document.getElementById("budgetRange");

const budgetValue =
    document.getElementById("budgetValue");

const restartButton =
    document.getElementById("restartButton");

const modal =
    document.getElementById("journeyModal");



/* =========================================
   SHOW STEP
========================================= */

function showStep(number) {

    currentStep = number;


    steps.forEach(step => {

        step.classList.toggle(
            "active",
            Number(step.dataset.step) === number
        );

    });


    stepIndicators.forEach((step, index) => {

        step.classList.toggle(
            "active",
            index + 1 <= number
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

            showStep(3);

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

        budgetValue.textContent =
            state.budget.toLocaleString("en-US");

    }
);


document
    .getElementById("budgetContinue")
    .addEventListener("click", () => {

        showStep(5);

    });



/* =========================================
   TYPE
========================================= */

document
    .querySelectorAll(".type-grid button")
    .forEach(button => {

        button.addEventListener("click", () => {

            state.type =
                button.dataset.value;

            showResults();

        });

    });



/* =========================================
   BACK BUTTONS
========================================= */

document
    .querySelectorAll(".back-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            if (currentStep > 1) {

                showStep(currentStep - 1);

            }

        });

    });



/* =========================================
   FILTER JOURNEYS
========================================= */

function getMatchingJourneys() {

    let matches = journeys.filter(journey => {

        const countryMatch =
            journey.country === state.country;

        const monthMatch =
            journey.months.includes(state.month);

        const daysMatch =
            Math.abs(journey.days - state.days) <= 4;

        const budgetMatch =
            journey.price <= state.budget + 500;

        const typeMatch =
            journey.types.includes(state.type);

        return (
            countryMatch &&
            monthMatch &&
            daysMatch &&
            budgetMatch &&
            typeMatch
        );

    });


    /*
        Если строгий фильтр дал мало результатов,
        постепенно ослабляем условия.
    */


    if (matches.length < 3) {

        matches = journeys.filter(journey => {

            return (
                journey.country === state.country &&
                journey.price <= state.budget + 1000
            );

        });

    }


    if (matches.length < 3) {

        matches = journeys.filter(journey => {

            return (
                journey.types.includes(state.type) &&
                journey.price <= state.budget + 1500
            );

        });

    }


    if (matches.length < 3) {

        matches = journeys.filter(journey => {

            return journey.price <= state.budget + 2000;

        });

    }


    /*
        Финальный fallback.
        Пользователь всегда получает маршруты.
    */

    if (matches.length === 0) {

        matches = journeys.slice(0, 6);

    }


    /*
        Убираем дубликаты.
    */

    return [
        ...new Map(
            matches.map(item => [item.id, item])
        ).values()
    ].slice(0, 6);

}



/* =========================================
   SHOW RESULTS
========================================= */

function showResults() {

    steps.forEach(step => {

        step.classList.remove("active");

    });


    document
        .querySelector(".steps")
        .style.display = "none";


    results.classList.add("active");


    const matches =
        getMatchingJourneys();


    journeysGrid.innerHTML = "";


    matches.forEach((journey, index) => {

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

                <div class="journey-card__country">
                    ${journey.country}
                </div>

                <div class="journey-card__number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

            </div>


            <div class="journey-card__bottom">

                <div class="journey-card__route">

                    <h3>
                        ${journey.route}
                    </h3>

                    <span>
                        ${journey.days} days
                    </span>

                </div>


                <button
                    class="journey-card__arrow"
                    type="button"
                    aria-label="Открыть маршрут"
                >
                    →
                </button>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openJourney(journey)
        );


        journeysGrid.appendChild(card);

    });


    document
        .querySelector(".planner")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================================
   OPEN JOURNEY
========================================= */

function openJourney(journey) {

    document
        .querySelector(".journey-modal__background")
        .style.backgroundImage =
            `url("${journey.image}")`;


    document.getElementById("modalCountry")
        .textContent =
            journey.country;


    document.getElementById("modalTitle")
        .textContent =
            journey.title;


    document.getElementById("modalNumber")
        .textContent =
            String(journey.id).padStart(2, "0");


    document.getElementById("modalRoute")
        .textContent =
            journey.route;


    document.getElementById("modalDescription")
        .textContent =
            journey.description;


    document.getElementById("modalPrice")
        .textContent =
            "$" +
            journey.price.toLocaleString("en-US");


    document.getElementById("modalDays")
        .innerHTML =
            journey.itinerary
                .map(day =>
                    `<span class="modal-day">${day}</span>`
                )
                .join("");


    document.getElementById("modalIncluded")
        .innerHTML =
            journey.included
                .map(item =>
                    `<li>${item}</li>`
                )
                .join("");


    document.getElementById("modalNotIncluded")
        .innerHTML =
            journey.notIncluded
                .map(item =>
                    `<li>${item}</li>`
                )
                .join("");


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


document
    .getElementById("modalClose")
    .addEventListener(
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

        budgetValue.textContent =
            "1,500";


        results.classList.remove(
            "active"
        );


        document
            .querySelector(".steps")
            .style.display = "flex";


        showStep(1);

    }
);



/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileNavigation =
    document.querySelector(".mobile-navigation");


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
