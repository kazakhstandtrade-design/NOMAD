/* =========================================
   PAGE TRANSITION
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.body.classList.add("loaded");

    }, 150);

});



/* =========================================
   JOURNEY DATABASE
========================================= */

const journeys = [

    {
        id: "amalfi",

        country: "Italy",

        title: "AMALFI COAST",

        days: 7,

        duration: "6-9",

        price: 1290,

        months: [
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        styles: [
            "beach",
            "aesthetic",
            "romance",
            "food"
        ],

        image:
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=90",

        description:
            "A week between Mediterranean villages, hidden beaches and Italian cuisine.",

        page:
            "italy-route.html"
    },


    {
        id: "rome-florence",

        country: "Italy",

        title: "ROME & FLORENCE",

        days: 6,

        duration: "6-9",

        price: 1190,

        months: [
            "March",
            "April",
            "May",
            "June",
            "September",
            "October",
            "November"
        ],

        styles: [
            "city",
            "culture",
            "aesthetic",
            "food"
        ],

        image:
            "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1600&q=90",

        description:
            "Ancient streets, Renaissance architecture and the best of Italian city life.",

        page:
            "italy-route.html"
    },


    {
        id: "dolomites",

        country: "Italy",

        title: "DOLOMITES ESCAPE",

        days: 8,

        duration: "6-9",

        price: 1690,

        months: [
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        styles: [
            "adventure",
            "nature",
            "roadtrip",
            "aesthetic"
        ],

        image:
            "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1600&q=90",

        description:
            "Mountain roads, alpine lakes and dramatic landscapes in northern Italy.",

        page:
            "italy-route.html"
    },


    {
        id: "japan",

        country: "Japan",

        title: "JAPAN DISCOVERY",

        days: 10,

        duration: "10-14",

        price: 2190,

        months: [
            "March",
            "April",
            "May",
            "October",
            "November"
        ],

        styles: [
            "culture",
            "city",
            "food",
            "aesthetic"
        ],

        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=90",

        description:
            "From neon Tokyo to ancient Kyoto and the vibrant streets of Osaka.",

        page:
            "japan-route.html"
    },


    {
        id: "kyoto",

        country: "Japan",

        title: "KYOTO SLOW JOURNEY",

        days: 7,

        duration: "6-9",

        price: 1790,

        months: [
            "March",
            "April",
            "May",
            "October",
            "November"
        ],

        styles: [
            "culture",
            "aesthetic",
            "food",
            "wellness"
        ],

        image:
            "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=1600&q=90",

        description:
            "Temples, gardens, quiet streets and traditional Japanese cuisine.",

        page:
            "japan-route.html"
    },


    {
        id: "iceland",

        country: "Iceland",

        title: "ICELAND ESCAPE",

        days: 6,

        duration: "6-9",

        price: 1790,

        months: [
            "January",
            "February",
            "March",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],

        styles: [
            "adventure",
            "nature",
            "roadtrip",
            "aesthetic"
        ],

        image:
            "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1600&q=90",

        description:
            "Volcanic landscapes, waterfalls, black beaches and the open Icelandic road.",

        page:
            "iceland-route.html"
    },


    {
        id: "iceland-winter",

        country: "Iceland",

        title: "NORTHERN LIGHTS",

        days: 5,

        duration: "3-5",

        price: 1490,

        months: [
            "January",
            "February",
            "March",
            "October",
            "November",
            "December"
        ],

        styles: [
            "adventure",
            "nature",
            "winter",
            "aesthetic",
            "romance"
        ],

        image:
            "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1600&q=90",

        description:
            "Chase the northern lights across Icelandic landscapes and winter roads.",

        page:
            "iceland-route.html"
    },


    {
        id: "paris",

        country: "France",

        title: "PARIS & PROVENCE",

        days: 8,

        duration: "6-9",

        price: 1490,

        months: [
            "April",
            "May",
            "June",
            "September",
            "October"
        ],

        styles: [
            "city",
            "aesthetic",
            "culture",
            "food",
            "romance"
        ],

        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=90",

        description:
            "A journey from Parisian streets to the quiet villages of Provence.",

        page:
            "france-route.html"
    },


    {
        id: "barcelona",

        country: "Spain",

        title: "BARCELONA & COSTA BRAVA",

        days: 6,

        duration: "6-9",

        price: 1190,

        months: [
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        styles: [
            "city",
            "beach",
            "food",
            "aesthetic",
            "nightlife"
        ],

        image:
            "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=90",

        description:
            "Mediterranean beaches, Gaudí architecture and late nights in Barcelona.",

        page:
            "spain-route.html"
    },


    {
        id: "portugal",

        country: "Portugal",

        title: "PORTUGAL ATLANTIC",

        days: 8,

        duration: "6-9",

        price: 1390,

        months: [
            "March",
            "April",
            "May",
            "June",
            "September",
            "October",
            "November"
        ],

        styles: [
            "roadtrip",
            "beach",
            "food",
            "aesthetic",
            "romance"
        ],

        image:
            "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=90",

        description:
            "A slow Atlantic road trip through Lisbon, coastal towns and hidden beaches.",

        page:
            "portugal-route.html"
    },


    {
        id: "greece",

        country: "Greece",

        title: "CYCLADES ESCAPE",

        days: 7,

        duration: "6-9",

        price: 1390,

        months: [
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        styles: [
            "beach",
            "romance",
            "aesthetic",
            "food"
        ],

        image:
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=90",

        description:
            "Whitewashed villages, blue water and slow Mediterranean evenings.",

        page:
            "greece-route.html"
    },


    {
        id: "norway",

        country: "Norway",

        title: "NORWEGIAN FJORDS",

        days: 7,

        duration: "6-9",

        price: 1890,

        months: [
            "May",
            "June",
            "July",
            "August",
            "September"
        ],

        styles: [
            "adventure",
            "nature",
            "roadtrip",
            "aesthetic"
        ],

        image:
            "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=1600&q=90",

        description:
            "Dramatic fjords, mountain roads and some of Europe's wildest landscapes.",

        page:
            "norway-route.html"
    },


    {
        id: "switzerland",

        country: "Switzerland",

        title: "ALPINE SWITZERLAND",

        days: 8,

        duration: "6-9",

        price: 1990,

        months: [
            "June",
            "July",
            "August",
            "September",
            "December",
            "January",
            "February"
        ],

        styles: [
            "nature",
            "adventure",
            "aesthetic",
            "winter"
        ],

        image:
            "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=90",

        description:
            "Mountain villages, alpine trains and extraordinary Swiss landscapes.",

        page:
            "switzerland-route.html"
    },


    {
        id: "thailand",

        country: "Thailand",

        title: "THAILAND ISLANDS",

        days: 10,

        duration: "10-14",

        price: 1590,

        months: [
            "January",
            "February",
            "March",
            "November",
            "December"
        ],

        styles: [
            "beach",
            "food",
            "wellness",
            "aesthetic"
        ],

        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90",

        description:
            "Island beaches, tropical mornings and slow days by the Andaman Sea.",

        page:
            "thailand-route.html"
    },


    {
        id: "bali",

        country: "Indonesia",

        title: "BALI SLOW ESCAPE",

        days: 10,

        duration: "10-14",

        price: 1690,

        months: [
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        styles: [
            "beach",
            "wellness",
            "nature",
            "aesthetic",
            "food"
        ],

        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=90",

        description:
            "Rice terraces, ocean sunsets, hidden cafés and peaceful tropical mornings.",

        page:
            "indonesia-route.html"
    },


    {
        id: "vietnam",

        country: "Vietnam",

        title: "VIETNAM NORTH TO SOUTH",

        days: 12,

        duration: "10-14",

        price: 1590,

        months: [
            "January",
            "February",
            "March",
            "April",
            "October",
            "November",
            "December"
        ],

        styles: [
            "adventure",
            "culture",
            "food",
            "nature"
        ],

        image:
            "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=90",

        description:
            "A journey through ancient cities, mountain landscapes and Vietnamese cuisine.",

        page:
            "vietnam-route.html"
    },


    {
        id: "korea",

        country: "South Korea",

        title: "SEOUL & BUSAN",

        days: 9,

        duration: "6-9",

        price: 1890,

        months: [
            "March",
            "April",
            "May",
            "September",
            "October",
            "November"
        ],

        styles: [
            "city",
            "culture",
            "food",
            "nightlife",
            "aesthetic"
        ],

        image:
            "https://images.unsplash.com/photo-1538485399081-7c8972d5e0a1?auto=format&fit=crop&w=1600&q=90",

        description:
            "Modern Seoul, coastal Busan and the contrasts of contemporary Korea.",

        page:
            "korea-route.html"
    },


    {
        id: "australia",

        country: "Australia",

        title: "EAST COAST AUSTRALIA",

        days: 14,

        duration: "10-14",

        price: 2990,

        months: [
            "January",
            "February",
            "March",
            "April",
            "October",
            "November",
            "December"
        ],

        styles: [
            "beach",
            "roadtrip",
            "adventure",
            "nature",
            "city"
        ],

        image:
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=90",

        description:
            "Sydney, tropical beaches, coastal roads and Australia's wild east.",

        page:
            "australia-route.html"
    },


    {
        id: "new-zealand",

        country: "New Zealand",

        title: "NEW ZEALAND WILD",

        days: 14,

        duration: "10-14",

        price: 3190,

        months: [
            "January",
            "February",
            "March",
            "November",
            "December"
        ],

        styles: [
            "adventure",
            "nature",
            "roadtrip",
            "aesthetic"
        ],

        image:
            "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1600&q=90",

        description:
            "Glacial lakes, mountains and one of the world's greatest road trips.",

        page:
            "new-zealand-route.html"
    },


    {
        id: "morocco",

        country: "Morocco",

        title: "MOROCCO DESERT",

        days: 8,

        duration: "6-9",

        price: 1290,

        months: [
            "January",
            "February",
            "March",
            "April",
            "October",
            "November",
            "December"
        ],

        styles: [
            "adventure",
            "culture",
            "aesthetic",
            "food",
            "roadtrip"
        ],

        image:
            "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1600&q=90",

        description:
            "Marrakech, desert nights and a road through Morocco's most dramatic landscapes.",

        page:
            "morocco-route.html"
    },


    {
        id: "turkey",

        country: "Turkey",

        title: "TURKEY COAST",

        days: 8,

        duration: "6-9",

        price: 1090,

        months: [
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        styles: [
            "beach",
            "culture",
            "food",
            "romance",
            "aesthetic"
        ],

        image:
            "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=90",

        description:
            "Turquoise coastlines, ancient ruins and long Mediterranean evenings.",

        page:
            "turkey-route.html"
    },


    {
        id: "austria",

        country: "Austria",

        title: "VIENNA & THE ALPS",

        days: 7,

        duration: "6-9",

        price: 1390,

        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],

        styles: [
            "city",
            "culture",
            "aesthetic",
            "winter",
            "food"
        ],

        image:
            "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1600&q=90",

        description:
            "Imperial Vienna, alpine villages and elegant European landscapes.",

        page:
            "austria-route.html"
    },


    {
        id: "croatia",

        country: "Croatia",

        title: "CROATIAN ADRIATIC",

        days: 7,

        duration: "6-9",

        price: 1190,

        months: [
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        styles: [
            "beach",
            "roadtrip",
            "aesthetic",
            "romance",
            "food"
        ],

        image:
            "https://images.unsplash.com/photo-1555990538-1e7f6f9a4b98?auto=format&fit=crop&w=1600&q=90",

        description:
            "Adriatic islands, old stone towns and crystal-clear Mediterranean water.",

        page:
            "croatia-route.html"
    },


    {
        id: "london",

        country: "United Kingdom",

        title: "LONDON & COTSWOLDS",

        days: 6,

        duration: "6-9",

        price: 1590,

        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],

        styles: [
            "city",
            "culture",
            "food",
            "aesthetic",
            "nightlife"
        ],

        image:
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=90",

        description:
            "London icons, hidden neighbourhoods and the quiet English countryside.",

        page:
            "uk-route.html"
    }

];



/* =========================================
   STATE
========================================= */

const state = {

    destination: null,

    month: null,

    duration: null,

    styles: [],

    budgetMin: null,

    budgetMax: null

};



/* =========================================
   ELEMENTS
========================================= */

const steps =
    document.querySelectorAll(
        ".planner-step"
    );


const progressItems =
    document.querySelectorAll(
        ".planner-progress__item"
    );


const destinationCards =
    document.querySelectorAll(
        ".destination-card"
    );


const countrySearch =
    document.querySelector(
        "#countrySearch"
    );


const searchEmpty =
    document.querySelector(
        "#searchEmpty"
    );


const monthCards =
    document.querySelectorAll(
        "[data-month]"
    );


const durationCards =
    document.querySelectorAll(
        "[data-duration]"
    );


const styleCards =
    document.querySelectorAll(
        "[data-style]"
    );


const budgetCards =
    document.querySelectorAll(
        ".budget-card"
    );


const nextButtons =
    document.querySelectorAll(
        ".planner-next"
    );


const backButtons =
    document.querySelectorAll(
        ".planner-back"
    );


const submitButton =
    document.querySelector(
        ".planner-submit"
    );


const results =
    document.querySelector(
        "#plannerResults"
    );


const resultsGrid =
    document.querySelector(
        "#resultsGrid"
    );


const resultsDescription =
    document.querySelector(
        "#resultsDescription"
    );


const restartButton =
    document.querySelector(
        ".planner-restart"
    );



/* =========================================
   CURRENT STEP
========================================= */

let currentStep = 1;



/* =========================================
   SHOW STEP
========================================= */

function showStep(stepNumber) {

    currentStep = stepNumber;


    steps.forEach((step) => {

        step.classList.toggle(
            "active",
            Number(step.dataset.step) === stepNumber
        );

    });


    progressItems.forEach((item) => {

        item.classList.toggle(
            "active",
            Number(item.dataset.progress) <= stepNumber
        );

    });


    const planner =
        document.querySelector(
            ".planner"
        );


    window.scrollTo({

        top:
            planner.offsetTop - 35,

        behavior: "smooth"

    });

}



/* =========================================
   DESTINATION
========================================= */

destinationCards.forEach((card) => {

    card.addEventListener("click", () => {

        destinationCards.forEach((item) => {

            item.classList.remove(
                "selected"
            );

        });


        card.classList.add(
            "selected"
        );


        state.destination =
            card.dataset.destination;

    });

});



/* =========================================
   COUNTRY SEARCH
========================================= */

countrySearch.addEventListener(
    "input",
    () => {

        const query =
            countrySearch.value
                .trim()
                .toLowerCase();


        let visibleCards = 0;


        destinationCards.forEach((card) => {

            const country =
                card.dataset.destination
                    .toLowerCase();


            const visible =
                country.includes(query);


            card.classList.toggle(
                "hidden",
                !visible
            );


            if (visible) {

                visibleCards++;

            }

        });


        searchEmpty.style.display =
            visibleCards === 0
                ? "block"
                : "none";

    }
);



/* =========================================
   MONTH
========================================= */

monthCards.forEach((card) => {

    card.addEventListener("click", () => {

        monthCards.forEach((item) => {

            item.classList.remove(
                "selected"
            );

        });


        card.classList.add(
            "selected"
        );


        state.month =
            card.dataset.month;

    });

});



/* =========================================
   DURATION
========================================= */

durationCards.forEach((card) => {

    card.addEventListener("click", () => {

        durationCards.forEach((item) => {

            item.classList.remove(
                "selected"
            );

        });


        card.classList.add(
            "selected"
        );


        state.duration =
            card.dataset.duration;

    });

});



/* =========================================
   TRAVEL STYLE
   MULTIPLE SELECTION
========================================= */

styleCards.forEach((card) => {

    card.addEventListener("click", () => {

        const style =
            card.dataset.style;


        card.classList.toggle(
            "selected"
        );


        if (
            state.styles.includes(style)
        ) {

            state.styles =
                state.styles.filter(
                    (item) =>
                        item !== style
                );

        } else {

            state.styles.push(
                style
            );

        }

    });

});



/* =========================================
   BUDGET
========================================= */

budgetCards.forEach((card) => {

    card.addEventListener("click", () => {

        budgetCards.forEach((item) => {

            item.classList.remove(
                "selected"
            );

        });


        card.classList.add(
            "selected"
        );


        state.budgetMin =
            Number(
                card.dataset.min
            );


        state.budgetMax =
            Number(
                card.dataset.max
            );

    });

});



/* =========================================
   VALIDATION
========================================= */

function validateStep() {

    if (currentStep === 1) {

        if (!state.destination) {

            alert(
                "Сначала выберите страну."
            );

            return false;

        }

    }


    if (currentStep === 2) {

        if (!state.month) {

            alert(
                "Выберите месяц путешествия."
            );

            return false;

        }

    }


    if (currentStep === 3) {

        if (!state.duration) {

            alert(
                "Выберите продолжительность."
            );

            return false;

        }

    }


    if (currentStep === 4) {

        if (state.styles.length === 0) {

            alert(
                "Выберите хотя бы один вид отдыха."
            );

            return false;

        }

    }


    return true;

}



/* =========================================
   NEXT BUTTON
========================================= */

nextButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (!validateStep()) {

            return;

        }


        showStep(
            currentStep + 1
        );

    });

});



/* =========================================
   BACK BUTTON
========================================= */

backButtons.forEach((button) => {

    button.addEventListener("click", () => {

        showStep(
            currentStep - 1
        );

    });

});



/* =========================================
   DURATION MATCH
========================================= */

function durationMatch(
    journey
) {

    if (
        state.duration ===
        journey.duration
    ) {

        return true;

    }


    return false;

}



/* =========================================
   SCORE JOURNEY
========================================= */

function scoreJourney(
    journey
) {

    let score = 0;


    /*
        COUNTRY
    */

    if (
        journey.country ===
        state.destination
    ) {

        score += 100;

    }



    /*
        MONTH
    */

    if (
        journey.months.includes(
            state.month
        )
    ) {

        score += 30;

    }



    /*
        DURATION
    */

    if (
        durationMatch(journey)
    ) {

        score += 30;

    }



    /*
        TRAVEL STYLE
    */

    state.styles.forEach((style) => {

        if (
            journey.styles.includes(style)
        ) {

            score += 20;

        }

    });



    /*
        BUDGET
    */

    if (
        journey.price >=
            state.budgetMin &&
        journey.price <=
            state.budgetMax
    ) {

        score += 40;

    } else if (
        journey.price <
        state.budgetMin
    ) {

        score += 15;

    } else {

        score += 5;

    }


    return score;

}



/* =========================================
   FIND JOURNEYS
========================================= */

function findJourneys() {

    let scoredJourneys =
        journeys.map((journey) => {

            return {

                journey,

                score:
                    scoreJourney(
                        journey
                    )

            };

        });


    /*
        First prefer exact country.
    */

    const countryMatches =
        scoredJourneys.filter(
            (item) =>
                item.journey.country ===
                state.destination
        );


    /*
        If country has routes,
        rank those first.
    */

    if (
        countryMatches.length > 0
    ) {

        scoredJourneys =
            countryMatches;

    }


    /*
        Sort by score.
    */

    scoredJourneys.sort(
        (a, b) =>
            b.score - a.score
    );


    /*
        Always show at least
        one route.
    */

    return scoredJourneys
        .slice(0, 6)
        .map(
            (item) =>
                item.journey
        );

}



/* =========================================
   RENDER RESULTS
========================================= */

function renderResults(
    matches
) {

    resultsGrid.innerHTML = "";


    if (
        matches.length === 0
    ) {

        resultsGrid.innerHTML = `

            <div class="no-results">

                <h3>
                    Мы уже ищем для вас маршрут.
                </h3>

                <p>
                    Попробуйте изменить параметры
                    путешествия.
                </p>

            </div>

        `;

        return;

    }


    resultsDescription.textContent =
        `Мы подобрали ${matches.length} маршрутов, которые могут вам подойти.`;



    matches.forEach((journey) => {


        const card =
            document.createElement(
                "article"
            );


        card.className =
            "result-card";


        card.innerHTML = `

            <div class="result-card__image">

                <img
                    src="${journey.image}"
                    alt="${journey.title}"
                >

                <span class="result-card__country">
                    ${journey.country}
                </span>

            </div>


            <div class="result-card__content">

                <h3>
                    ${journey.title}
                </h3>


                <div class="result-card__meta">
                    ${journey.country} • ${journey.days} days
                </div>


                <p class="result-card__description">
                    ${journey.description}
                </p>


                <div class="result-card__bottom">

                    <span class="result-card__price">
                        $${journey.price.toLocaleString("en-US")} / person
                    </span>


                    <a
                        href="${journey.page}"
                        class="result-card__link page-link"
                    >
                        View journey
                        <span>→</span>
                    </a>

                </div>

            </div>

        `;


        resultsGrid.appendChild(
            card
        );

    });


    attachPageTransitions();

}



/* =========================================
   SUBMIT
========================================= */

submitButton.addEventListener(
    "click",
    () => {


        if (
            state.budgetMin === null
        ) {

            alert(
                "Выберите диапазон бюджета."
            );

            return;

        }


        const matches =
            findJourneys();


        steps.forEach((step) => {

            step.classList.remove(
                "active"
            );

        });


        document.querySelector(
            ".planner-progress"
        ).style.display =
            "none";


        results.classList.add(
            "active"
        );


        renderResults(
            matches
        );


        window.scrollTo({

            top:
                results.offsetTop - 40,

            behavior: "smooth"

        });

    }
);



/* =========================================
   RESTART
========================================= */

restartButton.addEventListener(
    "click",
    () => {


        state.destination = null;

        state.month = null;

        state.duration = null;

        state.styles = [];

        state.budgetMin = null;

        state.budgetMax = null;



        destinationCards.forEach(
            (card) =>
                card.classList.remove(
                    "selected"
                )
        );


        monthCards.forEach(
            (card) =>
                card.classList.remove(
                    "selected"
                )
        );


        durationCards.forEach(
            (card) =>
                card.classList.remove(
                    "selected"
                )
        );


        styleCards.forEach(
            (card) =>
                card.classList.remove(
                    "selected"
                )
        );


        budgetCards.forEach(
            (card) =>
                card.classList.remove(
                    "selected"
                )
        );


        countrySearch.value = "";


        destinationCards.forEach(
            (card) =>
                card.classList.remove(
                    "hidden"
                )
        );


        searchEmpty.style.display =
            "none";


        results.classList.remove(
            "active"
        );


        document.querySelector(
            ".planner-progress"
        ).style.display =
            "flex";


        showStep(1);

    }
);



/* =========================================
   PAGE TRANSITIONS
========================================= */

function attachPageTransitions() {

    const links =
        document.querySelectorAll(
            ".page-link"
        );


    links.forEach((link) => {

        if (
            link.dataset.transitionAttached
        ) {

            return;

        }


        link.dataset.transitionAttached =
            "true";


        link.addEventListener(
            "click",
            (event) => {

                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href === "#" ||
                    href.startsWith(
                        "http"
                    )
                ) {

                    return;

                }


                event.preventDefault();


                document.body.classList.remove(
                    "loaded"
                );


                setTimeout(() => {

                    window.location.href =
                        href;

                }, 700);

            }
        );

    });

}


attachPageTransitions();



/* =========================================
   MOBILE MENU
========================================= */

const menu =
    document.querySelector(
        ".plan-menu"
    );


const mobileNavigation =
    document.querySelector(
        ".plan-mobile-navigation"
    );


const closeMenu =
    document.querySelector(
        ".mobile-navigation__close"
    );


function openMenu() {

    mobileNavigation.classList.add(
        "open"
    );


    menu.classList.add(
        "active"
    );


    menu.setAttribute(
        "aria-expanded",
        "true"
    );


    document.body.classList.add(
        "menu-open"
    );

}


function closeMobileMenu() {

    mobileNavigation.classList.remove(
        "open"
    );


    menu.classList.remove(
        "active"
    );


    menu.setAttribute(
        "aria-expanded",
        "false"
    );


    document.body.classList.remove(
        "menu-open"
    );

}


menu.addEventListener(
    "click",
    () => {

        if (
            mobileNavigation.classList.contains(
                "open"
            )
        ) {

            closeMobileMenu();

        } else {

            openMenu();

        }

    }
);


closeMenu.addEventListener(
    "click",
    closeMobileMenu
);


mobileNavigation
    .querySelectorAll(
        ".page-link"
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                closeMobileMenu();

            }
        );

    });
