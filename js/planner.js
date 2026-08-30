/* =========================================
   NOMAD PLANNER
========================================= */


/* =========================================
   DATA
========================================= */

const cityData = {

    beijing: {
        name: "Beijing",

        districts: [
            "Dongcheng",
            "Chaoyang",
            "Xicheng",
            "Haidian"
        ]
    },

    shanghai: {
        name: "Shanghai",

        districts: [
            "Huangpu",
            "French Concession",
            "Jing'an",
            "Pudong"
        ]
    },

    rome: {
        name: "Rome",

        districts: [
            "Centro Storico",
            "Trastevere",
            "Monti",
            "Prati"
        ]
    },

    florence: {
        name: "Florence",

        districts: [
            "Centro",
            "Santa Croce",
            "Santa Maria Novella",
            "Santo Spirito"
        ]
    },

    paris: {
        name: "Paris",

        districts: [
            "Le Marais",
            "Saint-Germain",
            "Montmartre",
            "Latin Quarter"
        ]
    },

    barcelona: {
        name: "Barcelona",

        districts: [
            "Eixample",
            "Gothic Quarter",
            "Gràcia",
            "Barceloneta"
        ]
    }

};



const activities = [

    {
        id: "forbidden-city",
        city: "beijing",
        name: "Forbidden City",
        category: "sightseeing",
        categoryName: "Место",
        duration: 180,
        preferredTime: "morning",
        lat: 39.9163,
        lng: 116.3972,
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "great-wall",
        city: "beijing",
        name: "Great Wall",
        category: "nature",
        categoryName: "Природа",
        duration: 300,
        preferredTime: "morning",
        lat: 40.4319,
        lng: 116.5704,
        image: "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "temple-heaven",
        city: "beijing",
        name: "Temple of Heaven",
        category: "sightseeing",
        categoryName: "Место",
        duration: 120,
        preferredTime: "morning",
        lat: 39.8822,
        lng: 116.4066,
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "beijing-duck",
        city: "beijing",
        name: "Peking Duck",
        category: "food",
        categoryName: "Еда",
        duration: 90,
        preferredTime: "evening",
        lat: 39.9087,
        lng: 116.3975,
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "hutong",
        city: "beijing",
        name: "Old Hutongs",
        category: "hidden",
        categoryName: "Hidden gem",
        duration: 120,
        preferredTime: "afternoon",
        lat: 39.941,
        lng: 116.394,
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "bund",
        city: "shanghai",
        name: "The Bund",
        category: "sightseeing",
        categoryName: "Место",
        duration: 120,
        preferredTime: "evening",
        lat: 31.2400,
        lng: 121.4900,
        image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "shanghai-tower",
        city: "shanghai",
        name: "Shanghai Tower",
        category: "sightseeing",
        categoryName: "Место",
        duration: 120,
        preferredTime: "afternoon",
        lat: 31.2354,
        lng: 121.5010,
        image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "french-concession",
        city: "shanghai",
        name: "French Concession",
        category: "hidden",
        categoryName: "Hidden gem",
        duration: 150,
        preferredTime: "afternoon",
        lat: 31.2100,
        lng: 121.4550,
        image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "rome-colosseum",
        city: "rome",
        name: "Colosseum",
        category: "sightseeing",
        categoryName: "Место",
        duration: 150,
        preferredTime: "morning",
        lat: 41.8902,
        lng: 12.4922,
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "rome-trastevere",
        city: "rome",
        name: "Trastevere",
        category: "hidden",
        categoryName: "Hidden gem",
        duration: 150,
        preferredTime: "evening",
        lat: 41.8897,
        lng: 12.4698,
        image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "trevi",
        city: "rome",
        name: "Trevi Fountain",
        category: "sightseeing",
        categoryName: "Место",
        duration: 60,
        preferredTime: "evening",
        lat: 41.9009,
        lng: 12.4833,
        image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "florence-duomo",
        city: "florence",
        name: "Duomo",
        category: "sightseeing",
        categoryName: "Место",
        duration: 120,
        preferredTime: "morning",
        lat: 43.7731,
        lng: 11.2560,
        image: "https://images.unsplash.com/photo-1543429258-0c5b6a6b1f5f?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "paris-eiffel",
        city: "paris",
        name: "Eiffel Tower",
        category: "sightseeing",
        categoryName: "Место",
        duration: 150,
        preferredTime: "evening",
        lat: 48.8584,
        lng: 2.2945,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "paris-montmartre",
        city: "paris",
        name: "Montmartre",
        category: "hidden",
        categoryName: "Hidden gem",
        duration: 150,
        preferredTime: "afternoon",
        lat: 48.8867,
        lng: 2.3431,
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "barcelona-beach",
        city: "barcelona",
        name: "Barceloneta Beach",
        category: "nature",
        categoryName: "Пляж",
        duration: 150,
        preferredTime: "afternoon",
        lat: 41.3784,
        lng: 2.1925,
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "sagrada",
        city: "barcelona",
        name: "Sagrada Família",
        category: "sightseeing",
        categoryName: "Место",
        duration: 150,
        preferredTime: "morning",
        lat: 41.4036,
        lng: 2.1744,
        image: "https://images.unsplash.com/photo-1583779457094-ab6f2e7d0a48?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "gothic-quarter",
        city: "barcelona",
        name: "Gothic Quarter",
        category: "hidden",
        categoryName: "Hidden gem",
        duration: 120,
        preferredTime: "afternoon",
        lat: 41.3839,
        lng: 2.1762,
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "barcelona-surf",
        city: "barcelona",
        name: "Surfing",
        category: "activity",
        categoryName: "Активность",
        duration: 150,
        preferredTime: "morning",
        lat: 41.3750,
        lng: 2.1900,
        image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "barcelona-club",
        city: "barcelona",
        name: "Night Club",
        category: "nightlife",
        categoryName: "Ночная жизнь",
        duration: 180,
        preferredTime: "night",
        lat: 41.3851,
        lng: 2.1734,
        image: "https://images.unsplash.com/photo-1571266028243-d220c9c3b1f2?auto=format&fit=crop&w=1200&q=90"
    }

];


/* =========================================
   STATE
========================================= */

let selectedActivities = [];

let currentCity = "";

let currentDistrict = "";

let arrivalDate = null;

let departureDate = null;

let currentFilter = "all";


/* =========================================
   ELEMENTS
========================================= */

const citySelect =
    document.querySelector("#city");

const districtSelect =
    document.querySelector("#district");

const arrivalInput =
    document.querySelector("#arrival");

const departureInput =
    document.querySelector("#departure");

const startPlanning =
    document.querySelector("#startPlanning");

const formError =
    document.querySelector("#formError");

const activitiesSection =
    document.querySelector("#activitiesSection");

const activitiesGrid =
    document.querySelector("#activitiesGrid");

const summaryCity =
    document.querySelector("#summaryCity");

const summaryDates =
    document.querySelector("#summaryDates");

const routeCount =
    document.querySelector("#routeCount");

const routeInfo =
    document.querySelector("#routeInfo");

const routeDays =
    document.querySelector("#routeDays");

const optimizeButton =
    document.querySelector("#optimizeButton");

const clearButton =
    document.querySelector("#clearButton");

const finalSection =
    document.querySelector("#finalSection");

const viewRouteButton =
    document.querySelector("#viewRouteButton");

const routeModal =
    document.querySelector("#routeModal");

const routeModalClose =
    document.querySelector("#routeModalClose");

const modalRouteDays =
    document.querySelector("#modalRouteDays");

const modalRouteDescription =
    document.querySelector("#modalRouteDescription");

const mobileRouteBar =
    document.querySelector("#mobileRouteBar");

const mobileRouteCount =
    document.querySelector("#mobileRouteCount");

const mobileRouteButton =
    document.querySelector("#mobileRouteButton");


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileNavigation =
    document.querySelector(".mobile-navigation");


if (menuButton && mobileNavigation) {

    menuButton.addEventListener("click", () => {

        const open =
            mobileNavigation.classList.toggle("open");

        menuButton.classList.toggle(
            "active",
            open
        );

        document.body.classList.toggle(
            "menu-open",
            open
        );

    });

}


/* =========================================
   CITY
========================================= */

citySelect.addEventListener(
    "change",
    () => {

        const city =
            cityData[citySelect.value];

        districtSelect.innerHTML = "";


        if (!city) {

            districtSelect.innerHTML =
                `<option value="">
                    Сначала выберите город
                </option>`;

            return;

        }


        districtSelect.innerHTML =
            `<option value="">
                Выберите район
            </option>`;


        city.districts.forEach(
            district => {

                const option =
                    document.createElement("option");

                option.value =
                    district;

                option.textContent =
                    district;

                districtSelect.appendChild(
                    option
                );

            }
        );

    }
);


/* =========================================
   DATES
========================================= */

arrivalInput.addEventListener(
    "change",
    () => {

        departureInput.min =
            arrivalInput.value;

    }
);


/* =========================================
   START PLANNING
========================================= */

startPlanning.addEventListener(
    "click",
    () => {

        formError.textContent = "";


        if (!citySelect.value) {

            formError.textContent =
                "Выберите город.";

            return;

        }


        if (!districtSelect.value) {

            formError.textContent =
                "Выберите район.";

            return;

        }


        if (!arrivalInput.value ||
            !departureInput.value) {

            formError.textContent =
                "Укажите даты путешествия.";

            return;

        }


        const start =
            new Date(arrivalInput.value);

        const end =
            new Date(departureInput.value);


        if (end <= start) {

            formError.textContent =
                "Дата вылета должна быть позже даты прилёта.";

            return;

        }


        currentCity =
            citySelect.value;

        currentDistrict =
            districtSelect.value;

        arrivalDate =
            arrivalInput.value;

        departureDate =
            departureInput.value;


        selectedActivities = [];


        summaryCity.textContent =
            cityData[currentCity].name;


        summaryDates.textContent =
            formatDate(arrivalDate) +
            " — " +
            formatDate(departureDate);


        renderActivities();

        renderRoute();


        activitiesSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================
   FILTERS
========================================= */

document
    .querySelectorAll(".filter-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter-button")
                    .forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                button.classList.add("active");


                currentFilter =
                    button.dataset.category;


                renderActivities();

            }
        );

    });


/* =========================================
   RENDER ACTIVITIES
========================================= */

function renderActivities() {

    activitiesGrid.innerHTML = "";


    let available =
        activities.filter(
            activity =>
                activity.city === currentCity
        );


    if (currentFilter !== "all") {

        available =
            available.filter(
                activity =>
                    activity.category === currentFilter
            );

    }


    if (!available.length) {

        activitiesGrid.innerHTML =
            `<p class="empty-message">
                Для выбранного города пока нет
                мест в этой категории.
            </p>`;

        return;

    }


    available.forEach(
        activity => {

            const selected =
                selectedActivities.some(
                    item =>
                        item.id === activity.id
                );


            const card =
                document.createElement("article");


            card.className =
                "activity-card" +
                (selected ? " selected" : "");


            card.dataset.id =
                activity.id;


            card.innerHTML = `

                <div
                    class="activity-card__image"
                    style="background-image:url('${activity.image}')"
                ></div>

                <div class="activity-card__overlay"></div>

                <button
                    class="activity-card__add"
                    type="button"
                    aria-label="Добавить"
                >
                    ${selected ? "✓" : "+"}
                </button>

                <div class="activity-card__content">

                    <span class="activity-card__category">
                        ${activity.categoryName}
                    </span>

                    <h3>
                        ${activity.name}
                    </h3>

                    <div class="activity-card__meta">

                        <span>
                            ${formatDuration(activity.duration)}
                        </span>

                        <span>
                            ${getTimeLabel(activity.preferredTime)}
                        </span>

                    </div>

                </div>
            `;


            card.addEventListener(
                "click",
                () => toggleActivity(activity.id)
            );


            activitiesGrid.appendChild(card);

        }
    );

}


/* =========================================
   ADD / REMOVE
========================================= */

function toggleActivity(id) {

    const activity =
        activities.find(
            item => item.id === id
        );


    if (!activity) {
        return;
    }


    const exists =
        selectedActivities.some(
            item => item.id === id
        );


    if (exists) {

        selectedActivities =
            selectedActivities.filter(
                item =>
                    item.id !== id
            );

    } else {

        selectedActivities.push(
            activity
        );

    }


    saveState();

    renderActivities();

    renderRoute();

}


/* =========================================
   CREATE DAYS
========================================= */

function getTripDays() {

    if (!arrivalDate ||
        !departureDate) {

        return [];

    }


    const start =
        new Date(arrivalDate);

    const end =
        new Date(departureDate);

    const days = [];


    let current =
        new Date(start);


    while (current < end) {

        days.push(
            new Date(current)
        );

        current.setDate(
            current.getDate() + 1
        );

    }


    return days;

}


/* =========================================
   AUTOMATIC ROUTE
========================================= */

function buildRoute() {

    const days =
        getTripDays();


    if (!days.length) {
        return [];
    }


    const route =
        days.map(
            date => ({
                date,
                activities: []
            })
        );


    const sorted =
        [...selectedActivities]
            .sort(
                (a, b) =>
                    preferredOrder(a) -
                    preferredOrder(b)
            );


    sorted.forEach(
        (activity, index) => {

            const dayIndex =
                index % route.length;


            route[dayIndex]
                .activities
                .push(activity);

        }
    );


    route.forEach(
        day => {

            day.activities.sort(
                (a, b) =>
                    preferredOrder(a) -
                    preferredOrder(b)
            );

        }
    );


    return route;

}


/* =========================================
   OPTIMIZATION
========================================= */

function optimizeRoute() {

    const days =
        getTripDays();


    if (!days.length ||
        !selectedActivities.length) {

        return [];

    }


    const route =
        days.map(
            date => ({
                date,
                activities: []
            })
        );


    const remaining =
        [...selectedActivities];


    let currentPoint = {
        lat: 0,
        lng: 0
    };


    route.forEach(
        day => {

            const maxActivities =
                Math.ceil(
                    remaining.length /
                    (route.length -
                    route.indexOf(day))
                );


            for (
                let i = 0;
                i < maxActivities &&
                remaining.length;
                i++
            ) {

                let bestIndex = 0;

                let bestScore = Infinity;


                remaining.forEach(
                    (activity, index) => {

                        let distance =
                            calculateDistance(
                                currentPoint.lat,
                                currentPoint.lng,
                                activity.lat,
                                activity.lng
                            );


                        let timePenalty =
                            preferredOrder(
                                activity
                            ) * 0.2;


                        let score =
                            distance +
                            timePenalty;


                        if (
                            score <
                            bestScore
                        ) {

                            bestScore =
                                score;

                            bestIndex =
                                index;

                        }

                    }
                );


                const chosen =
                    remaining.splice(
                        bestIndex,
                        1
                    )[0];


                day.activities.push(
                    chosen
                );


                currentPoint = {
                    lat: chosen.lat,
                    lng: chosen.lng
                };

            }

        }
    );


    route.forEach(
        day => {

            day.activities.sort(
                (a, b) =>
                    preferredOrder(a) -
                    preferredOrder(b)
            );

        }
    );


    return route;

}


/* =========================================
   PREFERRED TIME
========================================= */

function preferredOrder(activity) {

    const order = {
        morning: 1,
        afternoon: 2,
        evening: 3,
        night: 4
    };


    return order[
        activity.preferredTime
    ] || 2;

}


function getTimeLabel(time) {

    const labels = {

        morning: "Утро",

        afternoon: "День",

        evening: "Вечер",

        night: "Ночь"

    };


    return labels[time] || "";

}


/* =========================================
   DISTANCE
========================================= */

function calculateDistance(
    lat1,
    lon1,
    lat2,
    lon2
) {

    if (
        !lat1 ||
        !lon1 ||
        !lat2 ||
        !lon2
    ) {

        return 0;

    }


    const R =
        6371;


    const dLat =
        (lat2 - lat1) *
        Math.PI / 180;


    const dLon =
        (lon2 - lon1) *
        Math.PI / 180;


    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );


    return R * c;

}


/* =========================================
   RENDER ROUTE
========================================= */

function renderRoute() {

    routeCount.textContent =
        selectedActivities.length;


    mobileRouteCount.textContent =
        selectedActivities.length +
        (
            selectedActivities.length === 1
                ? " место"
                : " мест"
        );


    if (!selectedActivities.length) {

        routeInfo.style.display =
            "block";

        routeInfo.textContent =
            "Выберите места, и они появятся здесь.";

        routeDays.innerHTML = "";

        finalSection.style.display =
            "none";

        return;

    }


    routeInfo.style.display =
        "none";


    const route =
        buildRoute();


    routeDays.innerHTML = "";


    route.forEach(
        (day, dayIndex) => {

            if (!day.activities.length) {
                return;
            }


            const dayElement =
                document.createElement("div");


            dayElement.className =
                "route-day";


            dayElement.innerHTML = `

                <div class="route-day__title">
                    День ${String(dayIndex + 1).padStart(2, "0")}
                    · ${formatDateObject(day.date)}
                </div>

            `;


            day.activities.forEach(
                (activity, activityIndex) => {

                    const item =
                        document.createElement("div");


                    item.className =
                        "route-item";


                    const time =
                        calculateActivityTime(
                            activity,
                            activityIndex
                        );


                    item.innerHTML = `

                        <span class="route-item__time">
                            ${time}
                        </span>

                        <span class="route-item__name">
                            ${activity.name}
                        </span>

                        <button
                            class="route-item__delete"
                            type="button"
                        >
                            ×
                        </button>

                    `;


                    item
                        .querySelector(
                            ".route-item__delete"
                        )
                        .addEventListener(
                            "click",
                            () => {

                                selectedActivities =
                                    selectedActivities.filter(
                                        selected =>
                                            selected.id !==
                                            activity.id
                                    );

                                saveState();

                                renderActivities();

                                renderRoute();

                            }
                        );


                    dayElement.appendChild(
                        item
                    );

                }
            );


            routeDays.appendChild(
                dayElement
            );

        }
    );


    finalSection.style.display =
        "block";

}


/* =========================================
   ACTIVITY TIME
========================================= */

function calculateActivityTime(
    activity,
    index
) {

    const baseTimes = {

        morning: 9 * 60,

        afternoon: 13 * 60,

        evening: 18 * 60,

        night: 21 * 60

    };


    let minutes =
        baseTimes[
            activity.preferredTime
        ] || 10 * 60;


    minutes +=
        index * 45;


    const hours =
        Math.floor(
            minutes / 60
        ) % 24;


    const mins =
        minutes % 60;


    return (
        String(hours).padStart(2, "0") +
        ":" +
        String(mins).padStart(2, "0")
    );

}


/* =========================================
   OPTIMIZE BUTTON
========================================= */

optimizeButton.addEventListener(
    "click",
    () => {

        if (!selectedActivities.length) {
            return;
        }


        const route =
            optimizeRoute();


        renderOptimizedRoute(
            route
        );

    }
);


/* =========================================
   RENDER OPTIMIZED
========================================= */

function renderOptimizedRoute(route) {

    routeDays.innerHTML = "";


    route.forEach(
        (day, dayIndex) => {

            if (!day.activities.length) {
                return;
            }


            const dayElement =
                document.createElement("div");


            dayElement.className =
                "route-day";


            dayElement.innerHTML = `

                <div class="route-day__title">
                    День ${String(dayIndex + 1).padStart(2, "0")}
                    · ${formatDateObject(day.date)}
                </div>

            `;


            day.activities.forEach(
                (activity, activityIndex) => {

                    const item =
                        document.createElement("div");


                    item.className =
                        "route-item";


                    item.innerHTML = `

                        <span class="route-item__time">
                            ${calculateActivityTime(
                                activity,
                                activityIndex
                            )}
                        </span>

                        <span class="route-item__name">
                            ${activity.name}
                        </span>

                        <button
                            class="route-item__delete"
                            type="button"
                        >
                            ×
                        </button>

                    `;


                    item
                        .querySelector(
                            ".route-item__delete"
                        )
                        .addEventListener(
                            "click",
                            () => {

                                selectedActivities =
                                    selectedActivities.filter(
                                        selected =>
                                            selected.id !==
                                            activity.id
                                    );

                                renderActivities();

                                renderRoute();

                            }
                        );


                    dayElement.appendChild(
                        item
                    );

                }
            );


            routeDays.appendChild(
                dayElement
            );

        }
    );

}


/* =========================================
   CLEAR
========================================= */

clearButton.addEventListener(
    "click",
    () => {

        selectedActivities = [];

        localStorage.removeItem(
            "nomadPlannerState"
        );

        renderActivities();

        renderRoute();

    }
);


/* =========================================
   FINAL MODAL
========================================= */

viewRouteButton.addEventListener(
    "click",
    openRouteModal
);


mobileRouteButton.addEventListener(
    "click",
    openRouteModal
);


function openRouteModal() {

    if (!selectedActivities.length) {
        return;
    }


    const route =
        optimizeRoute();


    modalRouteDays.innerHTML = "";


    const cityName =
        cityData[currentCity].name;


    modalRouteDescription.textContent =
        `${cityName} · ${formatDate(arrivalDate)} — ${formatDate(departureDate)} · ${currentDistrict}`;


    route.forEach(
        (day, index) => {

            if (!day.activities.length) {
                return;
            }


            const dayElement =
                document.createElement("div");


            dayElement.className =
                "modal-day";


            dayElement.innerHTML = `

                <h3>
                    День ${String(index + 1).padStart(2, "0")}
                    · ${formatDateObject(day.date)}
                </h3>

            `;


            day.activities.forEach(
                (activity, activityIndex) => {

                    const item =
                        document.createElement("div");


                    item.className =
                        "modal-item";


                    item.innerHTML = `

                        <span>
                            ${calculateActivityTime(
                                activity,
                                activityIndex
                            )}
                        </span>

                        <strong>
                            ${activity.name}
                        </strong>

                    `;


                    dayElement.appendChild(
                        item
                    );

                }
            );


            modalRouteDays.appendChild(
                dayElement
            );

        }
    );


    routeModal.classList.add(
        "open"
    );


    routeModal.setAttribute(
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

function closeRouteModal() {

    routeModal.classList.remove(
        "open"
    );

    routeModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


routeModalClose.addEventListener(
    "click",
    closeRouteModal
);


routeModal
    .querySelector(".route-modal__overlay")
    .addEventListener(
        "click",
        closeRouteModal
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            routeModal.classList.contains("open")
        ) {

            closeRouteModal();

        }

    }
);


/* =========================================
   DATE HELPERS
========================================= */

function formatDate(date) {

    if (!date) {
        return "—";
    }


    const value =
        new Date(date);


    return value.toLocaleDateString(
        "ru-RU",
        {
            day: "numeric",
            month: "short"
        }
    );

}


function formatDateObject(date) {

    return date.toLocaleDateString(
        "ru-RU",
        {
            day: "numeric",
            month: "short"
        }
    );

}


function formatDuration(minutes) {

    if (minutes < 60) {

        return `${minutes} мин`;

    }


    const hours =
        Math.floor(minutes / 60);

    const remaining =
        minutes % 60;


    if (!remaining) {

        return `${hours} ч`;

    }


    return `${hours} ч ${remaining} мин`;

}


/* =========================================
   LOCAL STORAGE
========================================= */

function saveState() {

    const state = {

        city: currentCity,

        district: currentDistrict,

        arrival: arrivalDate,

        departure: departureDate,

        activities:
            selectedActivities.map(
                activity => activity.id
            )

    };


    localStorage.setItem(
        "nomadPlannerState",
        JSON.stringify(state)
    );

}


function restoreState() {

    const saved =
        localStorage.getItem(
            "nomadPlannerState"
        );


    if (!saved) {
        return;
    }


    try {

        const state =
            JSON.parse(saved);


        if (!state.city) {
            return;
        }


        currentCity =
            state.city;


        citySelect.value =
            state.city;


        citySelect.dispatchEvent(
            new Event("change")
        );


        if (state.district) {

            districtSelect.value =
                state.district;

            currentDistrict =
                state.district;

        }


        if (state.arrival) {

            arrivalDate =
                state.arrival;

            arrivalInput.value =
                state.arrival;

        }


        if (state.departure) {

            departureDate =
                state.departure;

            departureInput.value =
                state.departure;

        }


        if (
            Array.isArray(
                state.activities
            )
        ) {

            selectedActivities =
                state.activities
                    .map(
                        id =>
                            activities.find(
                                activity =>
                                    activity.id === id
                            )
                    )
                    .filter(Boolean);

        }


        if (
            currentCity &&
            arrivalDate &&
            departureDate
        ) {

            summaryCity.textContent =
                cityData[currentCity].name;


            summaryDates.textContent =
                formatDate(arrivalDate) +
                " — " +
                formatDate(departureDate);


            renderActivities();

            renderRoute();

        }

    } catch (error) {

        localStorage.removeItem(
            "nomadPlannerState"
        );

    }

}


/* =========================================
   URL ROUTES
========================================= */

function loadRouteFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const route =
        params.get("route");


    if (!route) {
        return;
    }


    if (
        cityData[route]
    ) {

        citySelect.value =
            route;


        citySelect.dispatchEvent(
            new Event("change")
        );


        currentCity =
            route;


        const city =
            cityData[route];


        if (
            city.districts.length
        ) {

            districtSelect.value =
                city.districts[0];

        }

    }

}


/* =========================================
   INITIALIZATION
========================================= */

loadRouteFromURL();

restoreState();
