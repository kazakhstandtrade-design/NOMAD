/* =========================================
   JOURNEY DATA
========================================= */

const journeys = {

    amalfi: {

        title: "AMALFI COAST",

        country: "ITALY • 7 DAYS",

        image: "italy.jpg",

        description:
            "A week between Mediterranean villages, hidden beaches and Italian cuisine.",

        price: "$1,290",

        days: [

            ["DAY 01", "Rome"],

            ["DAY 02", "Rome"],

            ["DAY 03", "Florence"],

            ["DAY 04", "Amalfi"],

            ["DAY 05", "Positano"],

            ["DAY 06", "Capri"],

            ["DAY 07", "Departure"]

        ]

    },


    paris: {

        title: "PARIS ESCAPE",

        country: "FRANCE • 5 DAYS",

        image: "france.jpg",

        description:
            "Five days of Parisian streets, art, architecture and slow mornings in local cafés.",

        price: "$980",

        days: [

            ["DAY 01", "Paris"],

            ["DAY 02", "Paris"],

            ["DAY 03", "Versailles"],

            ["DAY 04", "Montmartre"],

            ["DAY 05", "Departure"]

        ]

    },


    japan: {

        title: "TOKYO TO KYOTO",

        country: "JAPAN • 10 DAYS",

        image: "japan.jpg",

        description:
            "From Tokyo's neon nights to Kyoto's quiet temples and traditional streets.",

        price: "$1,890",

        days: [

            ["DAY 01", "Tokyo"],

            ["DAY 02", "Tokyo"],

            ["DAY 03", "Tokyo"],

            ["DAY 04", "Hakone"],

            ["DAY 05", "Kyoto"],

            ["DAY 06", "Kyoto"],

            ["DAY 07", "Nara"],

            ["DAY 08", "Osaka"],

            ["DAY 09", "Osaka"],

            ["DAY 10", "Departure"]

        ]

    },


    iceland: {

        title: "ICELAND NORTH",

        country: "ICELAND • 7 DAYS",

        image: "iceland.jpg",

        description:
            "Waterfalls, black beaches, volcanic landscapes and endless northern skies.",

        price: "$1,540",

        days: [

            ["DAY 01", "Reykjavik"],

            ["DAY 02", "Golden Circle"],

            ["DAY 03", "South Coast"],

            ["DAY 04", "Vik"],

            ["DAY 05", "Skaftafell"],

            ["DAY 06", "Jökulsárlón"],

            ["DAY 07", "Departure"]

        ]

    }

};



/* =========================================
   ELEMENTS
========================================= */

const form =
    document.getElementById("plannerForm");

const destination =
    document.getElementById("destination");

const duration =
    document.getElementById("duration");

const budget =
    document.getElementById("budget");

const style =
    document.getElementById("style");

const journeyCards =
    document.querySelectorAll(".journey");

const resultsCount =
    document.getElementById("resultsCount");

const noResults =
    document.getElementById("noResults");

const details =
    document.getElementById("journeyDetails");

const detailsClose =
    document.getElementById("detailsClose");

const detailsImage =
    document.getElementById("detailsImage");

const detailsCountry =
    document.getElementById("detailsCountry");

const detailsTitle =
    document.getElementById("detailsTitle");

const detailsDescription =
    document.getElementById("detailsDescription");

const detailsPrice =
    document.getElementById("detailsPrice");

const itinerary =
    document.getElementById("itinerary");

const surpriseButton =
    document.getElementById("surpriseButton");



/* =========================================
   FILTER JOURNEYS
========================================= */

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const selectedCountry =
        destination.value;

    const selectedDuration =
        duration.value;

    const selectedBudget =
        budget.value;

    const selectedStyle =
        style.value;


    let visibleCount = 0;


    journeyCards.forEach(card => {

        const cardCountry =
            card.dataset.country;

        const cardDuration =
            card.dataset.duration;

        const cardBudget =
            card.dataset.budget;

        const cardStyle =
            card.dataset.style;


        const countryMatch =
            selectedCountry === "all" ||
            selectedCountry === cardCountry;


        const durationMatch =
            selectedDuration === "all" ||
            selectedDuration === cardDuration;


        const budgetMatch =
            selectedBudget === "all" ||
            selectedBudget === cardBudget;


        const styleMatch =
            selectedStyle === "all" ||
            selectedStyle === cardStyle;


        if (
            countryMatch &&
            durationMatch &&
            budgetMatch &&
            styleMatch
        ) {

            card.style.display = "grid";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    resultsCount.textContent =
        visibleCount +
        (visibleCount === 1
            ? " journey"
            : " journeys");


    if (visibleCount === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }


    details.classList.remove("open");


    document
        .getElementById("results")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =========================================
   OPEN JOURNEY
========================================= */

document
    .querySelectorAll(".journey__link")
    .forEach(button => {

        button.addEventListener("click", function() {

            const journeyId =
                this.dataset.journey;

            const journey =
                journeys[journeyId];


            if (!journey) return;


            detailsImage.src =
                journey.image;

            detailsImage.alt =
                journey.title;


            detailsCountry.textContent =
                journey.country;


            detailsTitle.textContent =
                journey.title;


            detailsDescription.textContent =
                journey.description;


            detailsPrice.textContent =
                journey.price;


            itinerary.innerHTML = "";


            journey.days.forEach(day => {

                const row =
                    document.createElement("div");

                row.className = "day";


                row.innerHTML = `

                    <span class="day__number">
                        ${day[0]}
                    </span>

                    <span class="day__place">
                        ${day[1]}
                    </span>

                `;


                itinerary.appendChild(row);

            });


            details.classList.add("open");


            setTimeout(() => {

                details.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        });

    });



/* =========================================
   CLOSE DETAILS
========================================= */

detailsClose.addEventListener(
    "click",
    function() {

        details.classList.remove("open");


        document
            .getElementById("results")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);



/* =========================================
   BOOK BUTTON
========================================= */

document
    .getElementById("bookButton")
    .addEventListener("click", function() {

        alert(
            "Бронирование будет доступно после подключения backend."
        );

    });



/* =========================================
   SURPRISE ME
========================================= */

surpriseButton.addEventListener(
    "click",
    function() {

        const cards =
            Array.from(journeyCards);


        const randomCard =
            cards[
                Math.floor(
                    Math.random() * cards.length
                )
            ];


        const journeyId =
            randomCard.dataset.country === "italy"
                ? "amalfi"
                : randomCard.dataset.country === "france"
                    ? "paris"
                    : randomCard.dataset.country === "japan"
                        ? "japan"
                        : "iceland";


        const journey =
            journeys[journeyId];


        detailsImage.src =
            journey.image;

        detailsImage.alt =
            journey.title;


        detailsCountry.textContent =
            journey.country;

        detailsTitle.textContent =
            journey.title;

        detailsDescription.textContent =
            journey.description;

        detailsPrice.textContent =
            journey.price;


        itinerary.innerHTML = "";


        journey.days.forEach(day => {

            const row =
                document.createElement("div");

            row.className = "day";


            row.innerHTML = `

                <span class="day__number">
                    ${day[0]}
                </span>

                <span class="day__place">
                    ${day[1]}
                </span>

            `;


            itinerary.appendChild(row);

        });


        details.classList.add("open");


        setTimeout(() => {

            details.scrollIntoView({
                behavior: "smooth"
            });

        }, 100);

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
    function() {

        mobileNavigation.classList.toggle("open");

        document.body.classList.toggle("menu-open");

        menuButton.classList.toggle("active");

    }
);


mobileNavigation
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function() {

                mobileNavigation.classList.remove("open");

                document.body.classList.remove("menu-open");

                menuButton.classList.remove("active");

            }
        );

    });
