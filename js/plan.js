/* =========================================
   DATA
========================================= */

const journeys = [

    {
        id: "amalfi",

        country: "Italy",

        title: "AMALFI COAST",

        days: 7,

        duration: "6-9",

        price: 1290,

        image:
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=90",

        description:
            "A week between Mediterranean villages, hidden beaches and Italian cuisine.",

        page:
            "italy-route.html",

        months: [
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October"
        ]
    },


    {
        id: "japan",

        country: "Japan",

        title: "JAPAN DISCOVERY",

        days: 10,

        duration: "10-14",

        price: 2190,

        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=90",

        description:
            "From neon Tokyo to ancient Kyoto and the vibrant streets of Osaka.",

        page:
            "japan-route.html",

        months: [
            "March",
            "April",
            "May",
            "October",
            "November"
        ]
    },


    {
        id: "iceland",

        country: "Iceland",

        title: "ICELAND ESCAPE",

        days: 6,

        duration: "6-9",

        price: 1790,

        image:
            "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1600&q=90",

        description:
            "Volcanic landscapes, waterfalls, black beaches and the open Icelandic road.",

        page:
            "iceland-route.html",

        months: [
            "June",
            "July",
            "August",
            "September"
        ]
    },


    {
        id: "paris",

        country: "France",

        title: "PARIS & PROVENCE",

        days: 8,

        duration: "6-9",

        price: 1490,

        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=90",

        description:
            "A journey from Parisian streets to the quiet villages of Provence.",

        page:
            "france-route.html",

        months: [
            "April",
            "May",
            "June",
            "September",
            "October"
        ]
    }

];



/* =========================================
   STATE
========================================= */

const state = {

    destination: null,

    month: null,

    duration: null,

    budget: 1500

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


const monthCards =
    document.querySelectorAll(
        "[data-month]"
    );


const durationCards =
    document.querySelectorAll(
        "[data-duration]"
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


const budgetRange =
    document.querySelector(
        "#budgetRange"
    );


const budgetValue =
    document.querySelector(
        "#budgetValue"
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


    progressItems.forEach((item, index) => {

        item.classList.toggle(
            "active",
            index < stepNumber
        );

    });


    window.scrollTo({

        top:
            document.querySelector(
                ".planner"
            ).offsetTop - 40,

        behavior: "smooth"

    });

}



/* =========================================
   DESTINATION
========================================= */

destinationCards.forEach((card) => {

    card.addEventListener("click", () => {

        destinationCards.forEach((item) => {

            item.classList.remove("selected");

        });


        card.classList.add("selected");


        state.destination =
            card.dataset.destination;

    });

});



/* =========================================
   MONTH
========================================= */

monthCards.forEach((card) => {

    card.addEventListener("click", () => {

        monthCards.forEach((item) => {

            item.classList.remove("selected");

        });


        card.classList.add("selected");


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

            item.classList.remove("selected");

        });


        card.classList.add("selected");


        state.duration =
            card.dataset.duration;

    });

});



/* =========================================
   NEXT
========================================= */

nextButtons.forEach((button) => {

    button.addEventListener("click", () => {


        if (currentStep === 1) {

            if (!state.destination) {

                alert(
                    "Сначала выберите направление."
                );

                return;

            }

        }


        if (currentStep === 2) {

            if (!state.month) {

                alert(
                    "Выберите месяц путешествия."
                );

                return;

            }

        }


        if (currentStep === 3) {

            if (!state.duration) {

                alert(
                    "Выберите продолжительность."
                );

                return;

            }

        }


        showStep(
            currentStep + 1
        );

    });

});



/* =========================================
   BACK
========================================= */

backButtons.forEach((button) => {

    button.addEventListener("click", () => {

        showStep(
            currentStep - 1
        );

    });

});



/* =========================================
   BUDGET
========================================= */

function updateBudget() {

    const value =
        Number(
            budgetRange.value
        );


    state.budget =
        value;


    budgetValue.textContent =
        value.toLocaleString("en-US");


    const min =
        Number(
            budgetRange.min
        );


    const max =
        Number(
            budgetRange.max
        );


    const percent =
        ((value - min) /
        (max - min)) * 100;


    budgetRange.style.background =
        `
        linear-gradient(
            to right,
            #111 0%,
            #111 ${percent}%,
            #d5d5d2 ${percent}%,
            #d5d5d2 100%
        )
        `;

}


budgetRange.addEventListener(
    "input",
    updateBudget
);


updateBudget();



/* =========================================
   FIND MATCHES
========================================= */

function findMatches() {

    return journeys.filter(
        (journey) => {


            const destinationMatch =
                !state.destination ||
                journey.country ===
                    state.destination;


            const monthMatch =
                !state.month ||
                journey.months.includes(
                    state.month
                );


            const durationMatch =
                !state.duration ||
                journey.duration ===
                    state.duration;


            const budgetMatch =
                journey.price <=
                    state.budget;


            return (
                destinationMatch &&
                monthMatch &&
                durationMatch &&
                budgetMatch
            );

        }
    );

}



/* =========================================
   RENDER RESULTS
========================================= */

function renderResults(matches) {

    resultsGrid.innerHTML = "";


    if (matches.length === 0) {

        resultsDescription.textContent =
            "Точного совпадения не найдено. Попробуйте изменить параметры путешествия.";


        resultsGrid.innerHTML = `

            <div class="no-results">

                <h3>
                    Пока ничего не нашли.
                </h3>

                <p>
                    Попробуйте увеличить бюджет
                    или изменить продолжительность
                    путешествия.
                </p>

            </div>

        `;

        return;

    }


    resultsDescription.textContent =
        `Мы нашли ${matches.length} подходящ${
            matches.length === 1
                ? "ее"
                : "их"
        } путешестви${
            matches.length === 1
                ? "е"
                : "я"
        } для вас.`;



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
                        class="result-card__link"
                    >
                        View journey
                        <span>→</span>
                    </a>

                </div>

            </div>

        `;


        resultsGrid.appendChild(card);

    });

}



/* =========================================
   SUBMIT
========================================= */

submitButton.addEventListener(
    "click",
    () => {


        const matches =
            findMatches();


        steps.forEach((step) => {

            step.classList.remove("active");

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

        state.budget = 1500;


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


        budgetRange.value = 1500;

        updateBudget();


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


if (menu && mobileNavigation) {

    menu.addEventListener(
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
        .forEach((link) => {

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
