/* =========================================
   PLACES DATABASE
========================================= */

const places = {

    reykjavik: {
        name: "Reykjavik",
        location: "Capital region",
        days: 1,
        cost: 100
    },


    golden: {
        name: "Golden Circle",
        location: "Þingvellir · Geysir · Gullfoss",
        days: 1,
        cost: 90
    },


    south: {
        name: "South Coast",
        location: "Seljalandsfoss · Skógafoss · Reynisfjara",
        days: 2,
        cost: 180
    },


    vik: {
        name: "Vík",
        location: "Black beach · Dyrhólaey · cliffs",
        days: 1,
        cost: 140
    },


    jokulsarlon: {
        name: "Jökulsárlón",
        location: "Glacier Lagoon",
        days: 1,
        cost: 170
    },


    skaftafell: {
        name: "Skaftafell",
        location: "Glacier hiking area",
        days: 1,
        cost: 150
    },


    blueLagoon: {
        name: "Blue Lagoon",
        location: "Geothermal spa",
        days: 1,
        cost: 110
    },


    snaefellsnes: {
        name: "Snæfellsnes",
        location: "Peninsula · Kirkjufell",
        days: 2,
        cost: 230
    }

};


/* =========================================
   DEFAULT ROUTE
========================================= */

const defaultRoute = [
    "reykjavik",
    "golden",
    "south",
    "vik"
];


let currentRoute =
    JSON.parse(
        localStorage.getItem(
            "nomadIcelandRoute"
        )
    ) || [...defaultRoute];


/* =========================================
   DOM
========================================= */

const daysList =
    document.querySelector("#daysList");


const currentPlaces =
    document.querySelector("#currentPlaces");


const availablePlaces =
    document.querySelector("#availablePlaces");


const editModal =
    document.querySelector("#editModal");


const editRouteButton =
    document.querySelector("#editRouteButton");


const editClose =
    document.querySelector("#editClose");


const saveRoute =
    document.querySelector("#saveRoute");


const resetRoute =
    document.querySelector("#resetRoute");


const bookingButton =
    document.querySelector("#bookingButton");


const bookingModal =
    document.querySelector("#bookingModal");


const bookingForm =
    document.querySelector("#bookingForm");


const bookingSuccess =
    document.querySelector("#bookingSuccess");


/* =========================================
   CALCULATIONS
========================================= */

function calculateDays() {

    let total = 1;


    currentRoute.forEach((id) => {

        total += places[id].days;

    });


    return Math.max(
        2,
        Math.round(total)
    );

}


function calculatePrice() {

    let total = 0;


    currentRoute.forEach((id) => {

        total += places[id].cost;

    });


    return 1790 + (total - 510);

}


function formatPrice(value) {

    return "$" +
        Math.max(990, value)
            .toLocaleString("en-US");

}


/* =========================================
   SCHEDULE
========================================= */

const scheduleData = {

    reykjavik: [

        [
            "10:00",
            "Прибытие в Рейкьявик. Получите автомобиль и заселитесь в отель."
        ],

        [
            "13:00",
            "Обед в центре города."
        ],

        [
            "15:00",
            "Harpa, набережная и прогулка по центральным улицам."
        ],

        [
            "18:30",
            "Hallgrímskirkja и панорамный вид на город."
        ],

        [
            "20:00",
            "Ужин и спокойный вечер."
        ]

    ],


    golden: [

        [
            "08:00",
            "Выезд из Рейкьявика. Утренний старт позволяет избежать основной части туристического потока."
        ],

        [
            "09:00",
            "Þingvellir National Park — разлом между тектоническими плитами и историческое место."
        ],

        [
            "11:30",
            "Geysir — геотермальная зона и Strokkur."
        ],

        [
            "13:00",
            "Обед по пути."
        ],

        [
            "14:30",
            "Gullfoss — главный водопад Golden Circle."
        ],

        [
            "17:00",
            "Переезд к следующей точке и заселение."
        ]

    ],


    south: [

        [
            "08:00",
            "Выезд на South Coast."
        ],

        [
            "09:00",
            "Seljalandsfoss — водопад, за которым можно пройти по тропе."
        ],

        [
            "10:30",
            "Gljúfrabúi — скрытый водопад рядом с Seljalandsfoss."
        ],

        [
            "12:00",
            "Skógafoss — один из самых впечатляющих водопадов юга."
        ],

        [
            "14:00",
            "Обед и короткий отдых."
        ],

        [
            "15:30",
            "Переезд вдоль южного побережья."
        ],

        [
            "18:00",
            "Заселение и свободный вечер."
        ]

    ],


    vik: [

        [
            "08:00",
            "Выезд к Reynisfjara."
        ],

        [
            "08:30",
            "Black Sand Beach — чёрный вулканический песок и базальтовые колонны."
        ],

        [
            "10:30",
            "Dyrhólaey — арка и обзор побережья."
        ],

        [
            "12:30",
            "Обед в Vík."
        ],

        [
            "14:00",
            "Свободное время и прогулка."
        ],

        [
            "16:00",
            "Начало обратного маршрута."
        ]

    ],


    jokulsarlon: [

        [
            "07:30",
            "Ранний выезд в сторону ледниковой лагуны."
        ],

        [
            "11:30",
            "Jökulsárlón — ледяные глыбы и лагуна."
        ],

        [
            "13:00",
            "Diamond Beach."
        ],

        [
            "15:00",
            "Возвращение или ночёвка в районе Höfn."
        ]

    ],


    skaftafell: [

        [
            "08:00",
            "Выезд в Skaftafell."
        ],

        [
            "10:00",
            "Прогулка к Svartifoss."
        ],

        [
            "13:00",
            "Обед."
        ],

        [
            "14:00",
            "Короткий ледниковый маршрут."
        ]

    ],


    blueLagoon: [

        [
            "10:00",
            "Спокойное утро и переезд к Blue Lagoon."
        ],

        [
            "12:00",
            "Геотермальная лагуна."
        ],

        [
            "15:00",
            "Поздний обед."
        ],

        [
            "17:00",
            "Возвращение в Reykjavik."
        ]

    ],


    snaefellsnes: [

        [
            "08:00",
            "Выезд на полуостров Snæfellsnes."
        ],

        [
            "11:00",
            "Kirkjufell и Kirkjufellsfoss."
        ],

        [
            "14:00",
            "Побережье и небольшие рыбацкие поселения."
        ],

        [
            "17:00",
            "Заселение."
        ]

    ]

};


/* =========================================
   RENDER ITINERARY
========================================= */

function renderItinerary() {

    daysList.innerHTML = "";


    currentRoute.forEach(
        (placeId, index) => {

            const place =
                places[placeId];


            const article =
                document.createElement("article");


            article.className = "day";


            const schedule =
                scheduleData[placeId] ||
                [
                    [
                        "09:00",
                        "Начало дня и знакомство с местом."
                    ],

                    [
                        "12:00",
                        "Основная прогулка и осмотр достопримечательностей."
                    ],

                    [
                        "15:00",
                        "Свободное время."
                    ],

                    [
                        "18:00",
                        "Заселение и отдых."
                    ]
                ];


            article.innerHTML = `

                <div class="day__number">
                    DAY ${String(index + 1).padStart(2, "0")}
                </div>


                <div class="day__main">

                    <h3>
                        ${place.name}
                    </h3>

                    <div class="day__location">
                        ${place.location}
                    </div>


                    <div class="day__schedule">

                        ${schedule.map(item => `

                            <div class="schedule-item">

                                <span class="schedule-time">
                                    ${item[0]}
                                </span>

                                <span class="schedule-text">
                                    ${item[1]}
                                </span>

                            </div>

                        `).join("")}

                    </div>

                </div>


                <div class="day__side">

                    <div class="day__side-block">

                        <span class="day__side-label">
                            Стоимость дня
                        </span>

                        <strong class="day__side-value">
                            ~$${place.cost}
                        </strong>

                    </div>


                    <div class="day__side-block">

                        <span class="day__side-label">
                            Ночёвка
                        </span>

                        <strong class="day__side-value">
                            ${
                                index === currentRoute.length - 1
                                    ? "Отправление"
                                    : "В регионе"
                            }
                        </strong>

                    </div>

                </div>

            `;


            daysList.appendChild(article);

        }
    );


    updateNumbers();

}


/* =========================================
   UPDATE NUMBERS
========================================= */

function updateNumbers() {

    const days =
        calculateDays();


    const price =
        calculatePrice();


    document.querySelector("#heroDays")
        .textContent =
        `${days} days`;


    document.querySelector("#infoDays")
        .textContent =
        `${days} дней`;


    document.querySelector("#heroPrice")
        .textContent =
        formatPrice(price);


    document.querySelector("#infoPrice")
        .textContent =
        formatPrice(price);


    document.querySelector("#budgetTotal")
        .textContent =
        formatPrice(price);

}


/* =========================================
   EDITOR
========================================= */

function renderEditor() {

    currentPlaces.innerHTML = "";


    currentRoute.forEach(
        (placeId) => {

            const place =
                places[placeId];


            const row =
                document.createElement("div");


            row.className =
                "edit-place";


            row.innerHTML = `

                <div>

                    <div class="edit-place__name">
                        ${place.name}
                    </div>

                    <div class="edit-place__meta">
                        ${place.location}
                    </div>

                </div>


                <button
                    class="delete-place"
                    type="button"
                    data-delete="${placeId}"
                >
                    ×
                </button>

            `;


            currentPlaces.appendChild(row);

        }
    );


    availablePlaces.innerHTML = "";


    Object.keys(places).forEach(
        (placeId) => {

            if (
                currentRoute.includes(placeId)
            ) {
                return;
            }


            const place =
                places[placeId];


            const row =
                document.createElement("div");


            row.className =
                "available-place";


            row.innerHTML = `

                <div>

                    <div class="edit-place__name">
                        ${place.name}
                    </div>

                    <div class="edit-place__meta">
                        ${place.location}
                    </div>

                </div>


                <button
                    class="add-place"
                    type="button"
                    data-add="${placeId}"
                >
                    + Добавить
                </button>

            `;


            availablePlaces.appendChild(row);

        }
    );


    document
        .querySelectorAll("[data-delete]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.delete;


                    if (
                        currentRoute.length <= 1
                    ) {
                        return;
                    }


                    currentRoute =
                        currentRoute.filter(
                            item => item !== id
                        );


                    renderEditor();

                }
            );

        });


    document
        .querySelectorAll("[data-add]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.add;


                    currentRoute.push(id);


                    renderEditor();

                }
            );

        });

}


/* =========================================
   OPEN EDIT
========================================= */

editRouteButton.addEventListener(
    "click",
    () => {

        renderEditor();

        editModal.classList.add("open");

        document.body.classList.add(
            "modal-open"
        );

    }
);


/* =========================================
   CLOSE EDIT
========================================= */

editClose.addEventListener(
    "click",
    () => {

        editModal.classList.remove(
            "open"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }
);


editModal.addEventListener(
    "click",
    event => {

        if (
            event.target === editModal
        ) {

            editModal.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "modal-open"
            );

        }

    }
);


/* =========================================
   SAVE
========================================= */

saveRoute.addEventListener(
    "click",
    () => {

        localStorage.setItem(
            "nomadIcelandRoute",
            JSON.stringify(currentRoute)
        );


        renderItinerary();


        editModal.classList.remove(
            "open"
        );


        document.body.classList.remove(
            "modal-open"
        );


        document
            .querySelector(".itinerary")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================
   RESET
========================================= */

resetRoute.addEventListener(
    "click",
    () => {

        currentRoute =
            [...defaultRoute];


        localStorage.removeItem(
            "nomadIcelandRoute"
        );


        renderEditor();

    }
);


/* =========================================
   BOOKING
========================================= */

bookingButton.addEventListener(
    "click",
    () => {

        bookingModal.classList.add(
            "open"
        );

    }
);


bookingModal.addEventListener(
    "click",
    event => {

        if (
            event.target === bookingModal
        ) {

            bookingModal.classList.remove(
                "open"
            );

        }

    }
);


bookingForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        bookingForm.style.display =
            "none";


        bookingSuccess.classList.add(
            "show"
        );

    }
);


/* =========================================
   ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        editModal.classList.remove(
            "open"
        );


        bookingModal.classList.remove(
            "open"
        );


        document.body.classList.remove(
            "modal-open"
        );

    }
);


/* =========================================
   INITIALIZATION
========================================= */

renderItinerary();
