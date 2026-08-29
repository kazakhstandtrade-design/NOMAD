/* =========================================
   JOURNEY DATABASE
========================================= */

const journeys = [

    {
        title: "AMALFI COAST",
        country: "Italy",
        days: 7,
        duration: "6-9",
        price: 1290,

        types: [
            "beach",
            "city",
            "aesthetic"
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

        image:
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=90",

        description:
            "A week between Mediterranean villages, hidden beaches and Italian cuisine.",

        page: "italy-route.html"
    },


    {
        title: "ROME & TUSCANY",
        country: "Italy",
        days: 6,
        duration: "6-9",
        price: 1090,

        types: [
            "city",
            "aesthetic"
        ],

        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "September",
            "October",
            "November",
            "December"
        ],

        image:
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=90",

        description:
            "Ancient Rome, Tuscan hills and quiet evenings among historic villages.",

        page: "italy-route.html"
    },


    {
        title: "DOLOMITES ESCAPE",
        country: "Italy",
        days: 8,
        duration: "6-9",
        price: 1790,

        types: [
            "adventure",
            "aesthetic"
        ],

        months: [
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=90",

        description:
            "Mountain roads, alpine lakes and some of Italy's most dramatic landscapes.",

        page: "italy-route.html"
    },


    {
        title: "TOKYO TO KYOTO",
        country: "Japan",
        days: 10,
        duration: "10-14",
        price: 2190,

        types: [
            "city",
            "aesthetic"
        ],

        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "September",
            "October",
            "November",
            "December"
        ],

        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=90",

        description:
            "From neon Tokyo to ancient Kyoto and the vibrant streets of Osaka.",

        page: "japan-route.html"
    },


    {
        title: "JAPAN IN SPRING",
        country: "Japan",
        days: 12,
        duration: "10-14",
        price: 2490,

        types: [
            "aesthetic",
            "city"
        ],

        months: [
            "March",
            "April"
        ],

        image:
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1600&q=90",

        description:
            "Cherry blossoms, quiet temples and the most atmospheric side of Japan.",

        page: "japan-route.html"
    },


    {
        title: "ICELAND RING ROAD",
        country: "Iceland",
        days: 9,
        duration: "6-9",
        price: 1990,

        types: [
            "adventure",
            "aesthetic"
        ],

        months: [
            "May",
            "June",
            "July",
            "August",
            "September"
        ],

        image:
            "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1600&q=90",

        description:
            "Waterfalls, glaciers, black beaches and the open Icelandic road.",

        page: "iceland-route.html"
    },


    {
        title: "ICELAND WINTER",
        country: "Iceland",
        days: 6,
        duration: "6-9",
        price: 1690,

        types: [
            "adventure",
            "aesthetic"
        ],

        months: [
            "January",
            "February",
            "November",
            "December"
        ],

        image:
            "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1600&q=90",

        description:
            "Northern lights, frozen landscapes and Iceland beneath winter skies.",

        page: "iceland-route.html"
    },


    {
        title: "PARIS & PROVENCE",
        country: "France",
        days: 8,
        duration: "6-9",
        price: 1490,

        types: [
            "city",
            "aesthetic"
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

        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=90",

        description:
            "A journey from Parisian streets to the quiet villages of Provence.",

        page: "france-route.html"
    },


    {
        title: "FRENCH RIVIERA",
        country: "France",
        days: 7,
        duration: "6-9",
        price: 1690,

        types: [
            "beach",
            "aesthetic"
        ],

        months: [
            "May",
            "June",
            "July",
            "August",
            "September"
        ],

        image:
            "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1600&q=90",

        description:
            "Blue water, coastal towns and slow Mediterranean days on the French Riviera.",

        page: "france-route.html"
    },


    {
        title: "ANDALUSIA",
        country: "Spain",
        days: 7,
        duration: "6-9",
        price: 1190,

        types: [
            "city",
            "aesthetic"
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

        image:
            "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=90",

        description:
            "Seville, Granada and white villages beneath the Andalusian sun.",

        page: "spain-route.html"
    },


    {
        title: "BALEARIC ESCAPE",
        country: "Spain",
        days: 6,
        duration: "6-9",
        price: 1290,

        types: [
            "beach",
            "aesthetic"
        ],

        months: [
            "May",
            "June",
            "July",
            "August",
            "September"
        ],

        image:
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1600&q=90",

        description:
            "Hidden coves, warm Mediterranean water and long island evenings.",

        page: "spain-route.html"
    },


    {
        title: "NORWAY FJORDS",
        country: "Norway",
        days: 7,
        duration: "6-9",
        price: 1890,

        types: [
            "adventure",
            "aesthetic"
        ],

        months: [
            "May",
            "June",
            "July",
            "August",
            "September"
        ],

        image:
            "https://images.unsplash.com/photo-1520769669658-f07657e2c0c5?auto=format&fit=crop&w=1600&q=90",

        description:
            "Fjords, mountain roads and quiet villages surrounded by Nordic nature.",

        page: "norway-route.html"
    },


    {
        title: "LISBON & THE COAST",
        country: "Portugal",
        days: 6,
        duration: "6-9",
        price: 1090,

        types: [
            "city",
            "beach",
            "aesthetic"
        ],

        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "September",
            "October",
            "November",
            "December"
        ],

        image:
            "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=90",

        description:
            "Lisbon streets, Atlantic sunsets and the relaxed rhythm of Portugal.",

        page: "portugal-route.html"
    },


    {
        title: "THAI ISLANDS",
        country: "Thailand",
        days: 8,
        duration: "6-9",
        price: 990,

        types: [
            "beach",
            "adventure"
        ],

        months: [
            "January",
            "February",
            "March",
            "April",
            "November",
            "December"
        ],

        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90",

        description:
            "Tropical islands, turquoise water and slow days beneath the palms.",

        page: "thailand-route.html"
    },


    {
        title: "GREEK ISLANDS",
        country: "Greece",
        days: 8,
        duration: "6-9",
        price: 1390,

        types: [
            "beach",
            "aesthetic"
        ],

        months: [
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
        ],

        image:
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=90",

        description:
            "White villages, blue seas and quiet Mediterranean mornings.",

        page: "greece-route.html"
    },


    {
        title: "SWISS ALPS",
        country: "Switzerland",
        days: 7,
        duration: "6-9",
        price: 1990,

        types: [
            "adventure",
            "aesthetic"
        ],

        months: [
            "January",
            "February",
            "March",
            "June",
            "July",
            "August",
            "September",
            "December"
        ],

        image:
            "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=90",

        description:
            "Mountain trains, alpine villages and spectacular Swiss landscapes.",

        page: "switzerland-route.html"
    },


    {
        title: "BALI SLOW ESCAPE",
        country: "Indonesia",
        days: 10,
        duration: "10-14",
        price: 1290,

        types: [
            "beach",
            "aesthetic"
        ],

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

        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=90",

        description:
            "Rice terraces, tropical beaches and slow mornings in Bali.",

        page: "indonesia-route.html"
    },


    {
        title: "MOROCCO DISCOVERY",
        country: "Morocco",
        days: 8,
        duration: "6-9",
        price: 1090,

        types: [
            "adventure",
            "city",
            "aesthetic"
        ],

        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "September",
            "October",
            "November",
            "December"
        ],

        image:
            "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1600&q=90",

        description:
            "Medinas, desert landscapes and colourful streets across Morocco.",

        page: "morocco-route.html"
    }

];



/* =========================================
   STATE
========================================= */

const state = {

    destination: null,

    month: null,

    duration: null,

    type: null,

    budgetMin: 500,

    budgetMax: 1000

};


let currentStep = 1;



/* =========================================
   ELEMENTS
========================================= */

const steps =
    document.querySelectorAll(".planner-step");

const progressItems =
    document.querySelectorAll(
        ".planner-progress__item"
    );

const destinationCards =
    document.querySelectorAll(
        ".destination-card"
    );

const monthCards =
    document.querySelectorAll(
        "[data-month]"
    );

const durationCards =
    document.querySelectorAll(
        "[data-duration]"
    );

const typeCards =
    document.querySelectorAll(
        "[data-type]"
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
   STEP NAVIGATION
========================================= */

function showStep(step) {

    currentStep = step;


    steps.forEach((item) => {

        item.classList.toggle(
            "active",
            Number(item.dataset.step) === step
        );

    });


    progressItems.forEach((item, index) => {

        item.classList.toggle(
            "active",
            index < step
        );

    });


    window.scrollTo({

        top:
            document.querySelector(
                ".planner"
            ).offsetTop - 35,

        behavior: "smooth"

    });

}



/* =========================================
   SELECTION
========================================= */

destinationCards.forEach((card) => {

    card.addEventListener("click", () => {

        destinationCards.forEach(
            item =>
                item.classList.remove(
                    "selected"
                )
        );

        card.classList.add("selected");

        state.destination =
            card.dataset.destination;

    });

});


monthCards.forEach((card) => {

    card.addEventListener("click", () => {

        monthCards.forEach(
            item =>
                item.classList.remove(
                    "selected"
                )
        );

        card.classList.add("selected");

        state.month =
            card.dataset.month;

    });

});


durationCards.forEach((card) => {

    card.addEventListener("click", () => {

        durationCards.forEach(
            item =>
                item.classList.remove(
                    "selected"
                )
        );

        card.classList.add("selected");

        state.duration =
            card.dataset.duration;

    });

});


typeCards.forEach((card) => {

    card.addEventListener("click", () => {

        typeCards.forEach(
            item =>
                item.classList.remove(
                    "selected"
                )
        );

        card.classList.add("selected");

        state.type =
            card.dataset.type;

    });

});


budgetCards.forEach((card) => {

    card.addEventListener("click", () => {

        budgetCards.forEach(
            item =>
                item.classList.remove(
                    "selected"
                )
        );

        card.classList.add("selected");

        state.budgetMin =
            Number(
                card.dataset.budgetMin
            );

        state.budgetMax =
            Number(
                card.dataset.budgetMax
            );

    });

});



/* =========================================
   COUNTRY SEARCH
========================================= */

const countrySearch =
    document.querySelector(
        "#countrySearch"
    );

const noCountries =
    document.querySelector(
        "#noCountries"
    );


countrySearch.addEventListener(
    "input",
    () => {

        const query =
            countrySearch.value
                .trim()
                .toLowerCase();


        let visible = 0;


        destinationCards.forEach((card) => {

            const country =
                card.dataset.destination
                    .toLowerCase();


            const matches =
                country.includes(query);


            card.style.display =
                matches
                    ? ""
                    : "none";


            if (matches) {
                visible++;
            }

        });


        noCountries.style.display =
            visible === 0
                ? "block"
                : "none";

    }
);



/* =========================================
   VALIDATION
========================================= */

function validateStep() {

    if (currentStep === 1) {

        if (!state.destination) {

            alert(
                "Выберите страну."
            );

            return false;

        }

    }


    if (currentStep === 2) {

        if (!state.month) {

            alert(
                "Выберите месяц."
            );

            return false;

        }

    }


    if (currentStep === 3) {

        if (!state.duration) {

            alert(
                "Выберите количество дней."
            );

            return false;

        }

    }


    if (currentStep === 4) {

        if (!state.type) {

            alert(
                "Выберите вид отдыха."
            );

            return false;

        }

    }


    if (currentStep === 5) {

        if (!state.budgetMin) {

            alert(
                "Выберите бюджет."
            );

            return false;

        }

    }


    return true;

}



/* =========================================
   NEXT BUTTONS
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
   BACK BUTTONS
========================================= */

backButtons.forEach((button) => {

    button.addEventListener("click", () => {

        showStep(
            currentStep - 1
        );

    });

});



/* =========================================
   FIND JOURNEYS
========================================= */

function getExactMatches() {

    return journeys.filter((journey) => {

        const country =
            journey.country ===
            state.destination;


        const month =
            journey.months.includes(
                state.month
            );


        const duration =
            journey.duration ===
            state.duration;


        const type =
            journey.types.includes(
                state.type
            );


        const budget =
            journey.price >=
                state.budgetMin &&
            journey.price <=
                state.budgetMax;


        return (
            country &&
            month &&
            duration &&
            type &&
            budget
        );

    });

}



/*
    Чтобы пользователь практически
    никогда не получал пустой результат,
    используем каскад поиска.

    1. Всё совпадает.
    2. Убираем бюджет.
    3. Убираем длительность.
    4. Убираем тип отдыха.
    5. Ищем хотя бы маршрут страны.
*/

function findMatches() {

    let matches;


    matches =
        getExactMatches();


    if (matches.length) {
        return matches;
    }


    matches =
        journeys.filter((journey) => {

            return (
                journey.country ===
                state.destination &&

                journey.months.includes(
                    state.month
                ) &&

                journey.duration ===
                state.duration
            );

        });


    if (matches.length) {
        return matches;
    }


    matches =
        journeys.filter((journey) => {

            return (
                journey.country ===
                state.destination &&

                journey.months.includes(
                    state.month
                )
            );

        });


    if (matches.length) {
        return matches;
    }


    matches =
        journeys.filter((journey) => {

            return (
                journey.country ===
                state.destination
            );

        });


    return matches;

}



/* =========================================
   RENDER RESULTS
========================================= */

function renderResults(matches) {

    resultsGrid.innerHTML = "";


    if (!matches.length) {

        resultsDescription.textContent =
            "Попробуйте изменить параметры путешествия.";

        resultsGrid.innerHTML = `

            <div class="no-results">

                <h3>
                    Маршрутов пока нет.
                </h3>

                <p>
                    Мы продолжаем добавлять
                    новые путешествия в NOMAD.
                </p>

            </div>

        `;

        return;

    }


    resultsDescription.textContent =
        `Мы нашли ${matches.length} маршрута,
        которые могут вам подойти.`;


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


        resultsGrid.appendChild(card);

    });


    attachPageTransitions();

}



/* =========================================
   SHOW RESULTS
========================================= */

submitButton.addEventListener(
    "click",
    () => {

        if (!validateStep()) {
            return;
        }


        const matches =
            findMatches();


        steps.forEach(
            step =>
                step.classList.remove(
                    "active"
                )
        );


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
                results.offsetTop - 50,

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

        state.type = null;

        state.budgetMin = 500;

        state.budgetMax = 1000;


        destinationCards.forEach(
            card =>
                card.classList.remove(
                    "selected"
                )
        );


        monthCards.forEach(
            card =>
                card.classList.remove(
                    "selected"
                )
        );


        durationCards.forEach(
            card =>
                card.classList.remove(
                    "selected"
                )
        );


        typeCards.forEach(
            card =>
                card.classList.remove(
                    "selected"
                )
        );


        budgetCards.forEach(
            card =>
                card.classList.remove(
                    "selected"
                )
        );


        countrySearch.value = "";


        destinationCards.forEach(
            card =>
                card.style.display = ""
        );


        noCountries.style.display =
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
   MOBILE NAVIGATION
========================================= */

const menu =
    document.querySelector(
        ".plan-menu"
    );

const mobileNavigation =
    document.querySelector(
        ".plan-mobile-navigation"
    );

const mobileClose =
    document.querySelector(
        ".mobile-close"
    );


menu.addEventListener(
    "click",
    () => {

        mobileNavigation.classList.add(
            "open"
        );

        document.body.classList.add(
            "menu-open"
        );

    }
);


mobileClose.addEventListener(
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



/* =========================================
   PAGE TRANSITIONS
========================================= */

const pageTransition =
    document.querySelector(
        ".page-transition"
    );


function attachPageTransitions() {

    document
        .querySelectorAll(".page-link")
        .forEach((link) => {

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


                    pageTransition.classList.remove(
                        "exit"
                    );


                    pageTransition.classList.add(
                        "active"
                    );


                    setTimeout(() => {

                        window.location.href =
                            href;

                    }, 600);

                }
            );

        });

}


attachPageTransitions();


/*
    Когда новая страница загрузилась,
    шторка уходит вверх.
*/

window.addEventListener(
    "pageshow",
    () => {

        pageTransition.classList.remove(
            "active"
        );

        pageTransition.classList.add(
            "exit"
        );


        setTimeout(() => {

            pageTransition.classList.remove(
                "exit"
            );

        }, 700);

    }
);
