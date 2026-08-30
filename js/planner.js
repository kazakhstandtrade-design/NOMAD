/* =========================================
   NOMAD PLANNER
========================================= */


/* =========================================
   CITY DATA
========================================= */

const countryData = {

    france: {
        name: "France",

        cities: {
            paris: {
                name: "Paris",
                districts: [
                    "Le Marais",
                    "Saint-Germain-des-Prés",
                    "Montmartre",
                    "Latin Quarter",
                    "Batignolles"
                ]
            },

            nice: {
                name: "Nice",
                districts: [
                    "Vieux Nice",
                    "Promenade des Anglais",
                    "Cimiez",
                    "Port Lympia"
                ]
            },

            marseille: {
                name: "Marseille",
                districts: [
                    "Le Panier",
                    "Vieux-Port",
                    "Endoume",
                    "La Corniche"
                ]
            },

            lyon: {
                name: "Lyon",
                districts: [
                    "Vieux Lyon",
                    "Presqu'île",
                    "Croix-Rousse",
                    "Part-Dieu"
                ]
            }
        }
    },


    italy: {
        name: "Italy",

        cities: {
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

            milan: {
                name: "Milan",
                districts: [
                    "Brera",
                    "Navigli",
                    "Duomo",
                    "Porta Venezia"
                ]
            },

            venice: {
                name: "Venice",
                districts: [
                    "San Marco",
                    "Cannaregio",
                    "Dorsoduro",
                    "Castello"
                ]
            }
        }
    },


    spain: {
        name: "Spain",

        cities: {
            barcelona: {
                name: "Barcelona",
                districts: [
                    "Eixample",
                    "Gothic Quarter",
                    "Gràcia",
                    "Barceloneta"
                ]
            },

            madrid: {
                name: "Madrid",
                districts: [
                    "Centro",
                    "Malasaña",
                    "Salamanca",
                    "Lavapiés"
                ]
            },

            seville: {
                name: "Seville",
                districts: [
                    "Santa Cruz",
                    "Triana",
                    "Alameda",
                    "Centro"
                ]
            },

            valencia: {
                name: "Valencia",
                districts: [
                    "Ciutat Vella",
                    "Ruzafa",
                    "Cabanyal",
                    "El Carmen"
                ]
            }
        }
    },


    china: {
        name: "China",

        cities: {
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

            chengdu: {
                name: "Chengdu",
                districts: [
                    "Jinjiang",
                    "Wuhou",
                    "Qingyang"
                ]
            },

            hangzhou: {
                name: "Hangzhou",
                districts: [
                    "West Lake",
                    "Shangcheng",
                    "Xihu"
                ]
            }
        }
    },


    japan: {
        name: "Japan",

        cities: {
            tokyo: {
                name: "Tokyo",
                districts: [
                    "Shibuya",
                    "Shinjuku",
                    "Asakusa",
                    "Ginza",
                    "Harajuku"
                ]
            },

            kyoto: {
                name: "Kyoto",
                districts: [
                    "Gion",
                    "Higashiyama",
                    "Arashiyama",
                    "Downtown Kyoto"
                ]
            },

            osaka: {
                name: "Osaka",
                districts: [
                    "Namba",
                    "Umeda",
                    "Tennoji",
                    "Shinsaibashi"
                ]
            }
        }
    },


    switzerland: {
        name: "Switzerland",

        cities: {
            zurich: {
                name: "Zurich",
                districts: [
                    "Old Town",
                    "Enge",
                    "Seefeld",
                    "Langstrasse"
                ]
            },

            geneva: {
                name: "Geneva",
                districts: [
                    "Old Town",
                    "Eaux-Vives",
                    "Plainpalais",
                    "Champel"
                ]
            },

            interlaken: {
                name: "Interlaken",
                districts: [
                    "Central Interlaken",
                    "Matten",
                    "Unterseen"
                ]
            }
        }
    }
};


/* =========================================
   ACTIVITIES
========================================= */

const activities = [

    /* PARIS */

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
        id: "paris-louvre",
        city: "paris",
        name: "Louvre Museum",
        category: "sightseeing",
        categoryName: "Музей",
        duration: 180,
        preferredTime: "morning",
        lat: 48.8606,
        lng: 2.3376,
        image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1200&q=90"
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
        id: "paris-marais",
        city: "paris",
        name: "Le Marais",
        category: "hidden",
        categoryName: "Район",
        duration: 150,
        preferredTime: "afternoon",
        lat: 48.8566,
        lng: 2.3622,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "paris-seine",
        city: "paris",
        name: "Seine River Walk",
        category: "nature",
        categoryName: "Прогулка",
        duration: 120,
        preferredTime: "evening",
        lat: 48.8566,
        lng: 2.3522,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "paris-saint-germain",
        city: "paris",
        name: "Saint-Germain",
        category: "city",
        categoryName: "Район",
        duration: 120,
        preferredTime: "afternoon",
        lat: 48.853,
        lng: 2.333,
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "paris-versailles",
        city: "paris",
        name: "Versailles",
        category: "city",
        categoryName: "Поездка",
        duration: 360,
        preferredTime: "morning",
        lat: 48.8049,
        lng: 2.1204,
        image: "https://images.unsplash.com/photo-1591280063444-7e8d8bde2d04?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "paris-food",
        city: "paris",
        name: "French Bistro",
        category: "food",
        categoryName: "Еда",
        duration: 90,
        preferredTime: "evening",
        lat: 48.853,
        lng: 2.35,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "paris-bakery",
        city: "paris",
        name: "Local Bakery",
        category: "food",
        categoryName: "Еда",
        duration: 45,
        preferredTime: "morning",
        lat: 48.86,
        lng: 2.34,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "paris-shopping",
        city: "paris",
        name: "Galeries Lafayette",
        category: "shopping",
        categoryName: "Шопинг",
        duration: 120,
        preferredTime: "afternoon",
        lat: 48.8738,
        lng: 2.332,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=90"
    },


    /* ROME */

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
        id: "rome-trevi",
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
        id: "rome-vatican",
        city: "rome",
        name: "Vatican Museums",
        category: "sightseeing",
        categoryName: "Музей",
        duration: 180,
        preferredTime: "morning",
        lat: 41.9065,
        lng: 12.4536,
        image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "rome-trastevere",
        city: "rome",
        name: "Trastevere",
        category: "hidden",
        categoryName: "Район",
        duration: 150,
        preferredTime: "evening",
        lat: 41.8897,
        lng: 12.4698,
        image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "rome-piazza-navona",
        city: "rome",
        name: "Piazza Navona",
        category: "sightseeing",
        categoryName: "Площадь",
        duration: 60,
        preferredTime: "afternoon",
        lat: 41.8992,
        lng: 12.4731,
        image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "rome-pasta",
        city: "rome",
        name: "Roman Pasta",
        category: "food",
        categoryName: "Еда",
        duration: 90,
        preferredTime: "evening",
        lat: 41.89,
        lng: 12.47,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=90"
    },


    /* BARCELONA */

    {
        id: "barcelona-sagrada",
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
        id: "barcelona-gothic",
        city: "barcelona",
        name: "Gothic Quarter",
        category: "hidden",
        categoryName: "Район",
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
        lat: 41.375,
        lng: 2.19,
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
    },


    /* BEIJING */

    {
        id: "beijing-forbidden",
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
        id: "beijing-wall",
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
        id: "beijing-temple",
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
        id: "beijing-hutong",
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


    /* TOKYO */

    {
        id: "tokyo-shibuya",
        city: "tokyo",
        name: "Shibuya Crossing",
        category: "sightseeing",
        categoryName: "Место",
        duration: 90,
        preferredTime: "evening",
        lat: 35.6595,
        lng: 139.7005,
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "tokyo-asakusa",
        city: "tokyo",
        name: "Asakusa",
        category: "hidden",
        categoryName: "Район",
        duration: 150,
        preferredTime: "morning",
        lat: 35.7148,
        lng: 139.7967,
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "tokyo-teamlab",
        city: "tokyo",
        name: "teamLab Borderless",
        category: "activity",
        categoryName: "Активность",
        duration: 150,
        preferredTime: "afternoon",
        lat: 35.6267,
        lng: 139.775,
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "tokyo-food",
        city: "tokyo",
        name: "Local Ramen",
        category: "food",
        categoryName: "Еда",
        duration: 60,
        preferredTime: "evening",
        lat: 35.67,
        lng: 139.7,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=90"
    },


    /* ZURICH */

    {
        id: "zurich-old-town",
        city: "zurich",
        name: "Old Town",
        category: "sightseeing",
        categoryName: "Место",
        duration: 150,
        preferredTime: "morning",
        lat: 47.3769,
        lng: 8.5417,
        image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "zurich-lake",
        city: "zurich",
        name: "Lake Zurich",
        category: "nature",
        categoryName: "Природа",
        duration: 150,
        preferredTime: "afternoon",
        lat: 47.366,
        lng: 8.55,
        image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=90"
    },

    {
        id: "zurich-shopping",
        city: "zurich",
        name: "Bahnhofstrasse",
        category: "shopping",
        categoryName: "Шопинг",
        duration: 120,
        preferredTime: "afternoon",
        lat: 47.374,
        lng: 8.539,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=90"
    }
];


/* =========================================
   STATE
========================================= */

let selectedActivities = [];
let currentCountry = "";
let currentCity = "";
let currentDistrict = "";
let arrivalDate = "";
let departureDate = "";
let currentFilter = "all";
let optimizedRoute = [];


/* =========================================
   ELEMENTS
========================================= */

const countrySelect = document.querySelector("#country");
const citySelect = document.querySelector("#city");
const districtSelect = document.querySelector("#district");

const arrivalInput = document.querySelector("#arrival");
const departureInput = document.querySelector("#departure");

const startPlanning = document.querySelector("#startPlanning");
const formError = document.querySelector("#formError");

const activitiesSection =
    document.querySelector("#activitiesSection");

const activitiesGrid =
    document.querySelector("#activitiesGrid");

const summaryCountry =
    document.querySelector("#summaryCountry");

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

const saveRouteButton =
    document.querySelector("#saveRouteButton");

const clearButton =
    document.querySelector("#clearButton");

const readyRouteSection =
    document.querySelector("#readyRouteSection");

const readyRouteDays =
    document.querySelector("#readyRouteDays");

const readyRouteDescription =
    document.querySelector("#readyRouteDescription");

const readySaveButton =
    document.querySelector("#readySaveButton");

const mobileRouteCount =
    document.querySelector("#mobileRouteCount");

const mobileRouteButton =
    document.querySelector("#mobileRouteButton");

const routeModal =
    document.querySelector("#routeModal");

const routeModalClose =
    document.querySelector("#routeModalClose");

const modalRouteDays =
    document.querySelector("#modalRouteDays");

const modalRouteDescription =
    document.querySelector("#modalRouteDescription");

const modalSaveButton =
    document.querySelector("#modalSaveButton");

const manualPlaceButton =
    document.querySelector("#manualPlaceButton");

const manualPlaceForm =
    document.querySelector("#manualPlaceForm");

const manualPlaceInput =
    document.querySelector("#manualPlaceInput");

const manualPlaceCategory =
    document.querySelector("#manualPlaceCategory");

const addManualPlace =
    document.querySelector("#addManualPlace");


/* =========================================
   COUNTRY SELECT
========================================= */

Object.entries(countryData).forEach(
    ([key, country]) => {

        const option =
            document.createElement("option");

        option.value = key;
        option.textContent = country.name;

        countrySelect.appendChild(option);

    }
);


countrySelect.addEventListener(
    "change",
    () => {

        currentCountry = countrySelect.value;

        citySelect.innerHTML =
            `<option value="">
                Выберите город
            </option>`;

        districtSelect.innerHTML =
            `<option value="">
                Сначала выберите город
            </option>`;

        citySelect.disabled = !currentCountry;
        districtSelect.disabled = true;

        if (!currentCountry) {
            return;
        }

        const cities =
            countryData[currentCountry].cities;

        Object.entries(cities).forEach(
            ([key, city]) => {

                const option =
                    document.createElement("option");

                option.value = key;
                option.textContent = city.name;

                citySelect.appendChild(option);

            }
        );

    }
);


/* =========================================
   CITY SELECT
========================================= */

citySelect.addEventListener(
    "change",
    () => {

        currentCity = citySelect.value;

        districtSelect.innerHTML =
            `<option value="">
                Выберите район
            </option>`;

        districtSelect.disabled =
            !currentCity;

        if (!currentCity) {
            return;
        }

        const city =
            countryData[currentCountry]
                .cities[currentCity];

        city.districts.forEach(
            district => {

                const option =
                    document.createElement("option");

                option.value = district;
                option.textContent = district;

                districtSelect.appendChild(option);

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
   START
========================================= */

startPlanning.addEventListener(
    "click",
    () => {

        formError.textContent = "";

        if (!countrySelect.value) {
            formError.textContent =
                "Выберите страну.";
            return;
        }

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

        currentCountry =
            countrySelect.value;

        currentCity =
            citySelect.value;

        currentDistrict =
            districtSelect.value;

        arrivalDate =
            arrivalInput.value;

        departureDate =
            departureInput.value;

        selectedActivities = [];
        optimizedRoute = [];

        summaryCountry.textContent =
            countryData[currentCountry].name;

        summaryCity.textContent =
            countryData[currentCountry]
                .cities[currentCity]
                .name;

        summaryDates.textContent =
            `${formatDate(arrivalDate)} — ${formatDate(departureDate)}`;

        renderActivities();
        renderRoute();

        activitiesSection.scrollIntoView({
            behavior: "smooth"
        });

        saveState();

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
                            item.classList.remove("active")
                    );

                button.classList.add("active");

                currentFilter =
                    button.dataset.category;

                renderActivities();

            }
        );

    });


/* =========================================
   ACTIVITIES
========================================= */

function getAvailableActivities() {

    let result =
        activities.filter(
            activity =>
                activity.city === currentCity
        );

    if (currentFilter !== "all") {

        result =
            result.filter(
                activity =>
                    activity.category === currentFilter
            );

    }

    return result;
}


function renderActivities() {

    activitiesGrid.innerHTML = "";

    const available =
        getAvailableActivities();

    if (!available.length) {

        activitiesGrid.innerHTML =
            `<p class="empty-message">
                Для этого города пока нет предложений
                в выбранной категории.
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

            card.innerHTML = `

                <div
                    class="activity-card__image"
                    style="background-image:url('${activity.image}')"
                ></div>

                <div class="activity-card__overlay"></div>

                <button
                    class="activity-card__add"
                    type="button"
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
                event => {

                    if (
                        event.target.closest(
                            ".activity-card__add"
                        )
                    ) {
                        event.stopPropagation();
                    }

                    toggleActivity(activity.id);

                }
            );

            activitiesGrid.appendChild(card);

        }
    );

}


/* =========================================
   TOGGLE
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
                item => item.id !== id
            );

    } else {

        selectedActivities.push(activity);

    }

    optimizedRoute = [];

    saveState();

    renderActivities();
    renderRoute();

}


/* =========================================
   MANUAL PLACE
========================================= */

manualPlaceButton.addEventListener(
    "click",
    () => {

        manualPlaceForm.classList.toggle("open");

        if (
            manualPlaceForm.classList.contains("open")
        ) {
            manualPlaceInput.focus();
        }

    }
);


addManualPlace.addEventListener(
    "click",
    () => {

        const name =
            manualPlaceInput.value.trim();

        if (!name) {
            return;
        }

        const manualActivity = {

            id:
                "manual-" +
                Date.now(),

            city: currentCity,

            name,

            category:
                manualPlaceCategory.value,

            categoryName:
                getCategoryName(
                    manualPlaceCategory.value
                ),

            duration: 90,

            preferredTime: "afternoon",

            lat: 0,

            lng: 0,

            manual: true,

            image:
                "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90"

        };

        activities.push(manualActivity);

        selectedActivities.push(manualActivity);

        manualPlaceInput.value = "";

        optimizedRoute = [];

        saveState();

        renderActivities();
        renderRoute();

    }
);


function getCategoryName(category) {

    const names = {

        sightseeing: "Место",
        food: "Еда",
        nature: "Природа",
        activity: "Активность",
        nightlife: "Ночная жизнь",
        shopping: "Шопинг"

    };

    return names[category] || "Место";
}


/* =========================================
   TRIP DAYS
========================================= */

function getTripDays() {

    if (!arrivalDate || !departureDate) {
        return [];
    }

    const start =
        new Date(arrivalDate + "T00:00:00");

    const end =
        new Date(departureDate + "T00:00:00");

    const days = [];

    const current =
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
   ROUTE OPTIMIZATION
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

    const capacity =
        Math.max(
            1,
            Math.ceil(
                remaining.length /
                route.length
            )
        );


    route.forEach(
        (day, dayIndex) => {

            while (
                remaining.length &&
                day.activities.length < capacity
            ) {

                let bestIndex = 0;
                let bestScore = Infinity;

                remaining.forEach(
                    (activity, index) => {

                        let score =
                            preferredOrder(activity) * 20;

                        if (
                            day.activities.length
                        ) {

                            const previous =
                                day.activities[
                                    day.activities.length - 1
                                ];

                            const distance =
                                calculateDistance(
                                    previous.lat,
                                    previous.lng,
                                    activity.lat,
                                    activity.lng
                                );

                            score +=
                                distance * 10;

                        }

                        score +=
                            activity.duration * 0.01;

                        if (
                            score < bestScore
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

                day.activities.push(chosen);

            }

        }
    );


    /* Если остались места,
       добавляем их в дни
       с наименьшей загрузкой */

    while (remaining.length) {

        let target =
            route.reduce(
                (best, day) =>
                    day.activities.length <
                    best.activities.length
                        ? day
                        : best
            );

        target.activities.push(
            remaining.shift()
        );

    }


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

    return (
        order[activity.preferredTime] || 2
    );
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
    lng1,
    lat2,
    lng2
) {

    if (
        !lat1 ||
        !lng1 ||
        !lat2 ||
        !lng2
    ) {
        return 0;
    }

    const R = 6371;

    const dLat =
        (lat2 - lat1) *
        Math.PI / 180;

    const dLng =
        (lng2 - lng1) *
        Math.PI / 180;

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) ** 2;

    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;
}


/* =========================================
   RENDER SIDE ROUTE
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

        routeDays.innerHTML = "";

        routeInfo.textContent =
            "Выберите места, и они появятся здесь.";

        readyRouteSection.classList.remove(
            "visible"
        );

        return;

    }


    routeInfo.style.display =
        "none";

    const route =
        optimizedRoute.length
            ? optimizedRoute
            : optimizeRoute();

    renderRouteDays(
        routeDays,
        route,
        false
    );

}


/* =========================================
   OPTIMIZE
========================================= */

optimizeButton.addEventListener(
    "click",
    () => {

        if (!selectedActivities.length) {
            return;
        }

        optimizedRoute =
            optimizeRoute();

        renderRoute();

        renderReadyRoute(
            optimizedRoute
        );

        readyRouteSection.classList.add(
            "visible"
        );

        setTimeout(
            () => {

                readyRouteSection.scrollIntoView({
                    behavior: "smooth"
                });

            },
            100
        );

        saveState();

    }
);


/* =========================================
   ROUTE DAYS
========================================= */

function renderRouteDays(
    container,
    route,
    modalMode
) {

    container.innerHTML = "";

    route.forEach(
        (day, dayIndex) => {

            if (!day.activities.length) {
                return;
            }

            const dayElement =
                document.createElement("div");

            dayElement.className =
                modalMode
                    ? "modal-day"
                    : "route-day";

            const title =
                `
                День ${String(dayIndex + 1).padStart(2, "0")}
                · ${formatDateObject(day.date)}
                `;


            if (modalMode) {

                dayElement.innerHTML =
                    `<h3>${title}</h3>`;

            } else {

                dayElement.innerHTML =
                    `<div class="route-day__title">
                        ${title}
                    </div>`;

            }


            day.activities.forEach(
                (activity, activityIndex) => {

                    const time =
                        calculateActivityTime(
                            activity,
                            activityIndex
                        );

                    if (modalMode) {

                        const item =
                            document.createElement("div");

                        item.className =
                            "modal-item";

                        item.innerHTML = `
                            <span>
                                ${time}
                            </span>

                            <strong>
                                ${activity.name}
                            </strong>
                        `;

                        dayElement.appendChild(
                            item
                        );

                    } else {

                        const item =
                            document.createElement("div");

                        item.className =
                            "route-item";

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

                                    optimizedRoute = [];

                                    saveState();

                                    renderActivities();
                                    renderRoute();

                                }
                            );

                        dayElement.appendChild(
                            item
                        );

                    }

                }
            );

            container.appendChild(
                dayElement
            );

        }
    );

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
        Math.floor(minutes / 60) % 24;

    const mins =
        minutes % 60;

    return (
        String(hours).padStart(2, "0") +
        ":" +
        String(mins).padStart(2, "0")
    );
}


/* =========================================
   READY ROUTE
========================================= */

function renderReadyRoute(route) {

    readyRouteDays.innerHTML = "";

    const country =
        countryData[currentCountry].name;

    const city =
        countryData[currentCountry]
            .cities[currentCity]
            .name;

    readyRouteDescription.textContent =
        `${country} · ${city} · ${formatDate(arrivalDate)} — ${formatDate(departureDate)} · ${currentDistrict}`;


    route.forEach(
        (day, dayIndex) => {

            if (!day.activities.length) {
                return;
            }

            const dayElement =
                document.createElement("div");

            dayElement.className =
                "ready-day";

            dayElement.innerHTML = `

                <div class="ready-day__date">

                    День
                    ${String(dayIndex + 1).padStart(2, "0")}

                    <br><br>

                    ${formatDateObject(day.date)}

                </div>

                <div class="ready-day__items"></div>

            `;

            const items =
                dayElement.querySelector(
                    ".ready-day__items"
                );

            day.activities.forEach(
                (activity, index) => {

                    const item =
                        document.createElement("div");

                    item.className =
                        "ready-item";

                    item.innerHTML = `

                        <span class="ready-item__time">
                            ${calculateActivityTime(
                                activity,
                                index
                            )}
                        </span>

                        <strong class="ready-item__name">
                            ${activity.name}
                        </strong>

                        <span class="ready-item__type">
                            ${activity.categoryName}
                        </span>

                    `;

                    items.appendChild(item);

                }
            );

            readyRouteDays.appendChild(
                dayElement
            );

        }
    );

}


/* =========================================
   SAVE ROUTE
========================================= */

function saveRoute() {

    if (!selectedActivities.length) {
        return;
    }

    const route =
        optimizedRoute.length
            ? optimizedRoute
            : optimizeRoute();

    const savedRoute = {

        country: currentCountry,
        city: currentCity,
        district: currentDistrict,

        arrival: arrivalDate,
        departure: departureDate,

        activities:
            selectedActivities.map(
                activity => activity.id
            ),

        route:
            route.map(
                day => ({
                    date:
                        day.date.toISOString(),

                    activities:
                        day.activities.map(
                            activity =>
                                activity.id
                        )
                })
            ),

        savedAt:
            new Date().toISOString()

    };

    localStorage.setItem(
        "nomadSavedRoute",
        JSON.stringify(savedRoute)
    );


    const buttons = [
        saveRouteButton,
        readySaveButton,
        modalSaveButton
    ];

    buttons.forEach(
        button => {

            if (!button) {
                return;
            }

            const original =
                button.textContent;

            button.textContent =
                "Маршрут сохранён";

            setTimeout(
                () => {
                    button.textContent =
                        original;
                },
                1800
            );

        }
    );

}


saveRouteButton.addEventListener(
    "click",
    saveRoute
);

readySaveButton.addEventListener(
    "click",
    saveRoute
);

modalSaveButton.addEventListener(
    "click",
    saveRoute
);


/* =========================================
   MOBILE ROUTE
========================================= */

mobileRouteButton.addEventListener(
    "click",
    () => {

        if (!selectedActivities.length) {
            return;
        }

        openRouteModal();

    }
);


/* =========================================
   MODAL
========================================= */

function openRouteModal() {

    if (!selectedActivities.length) {
        return;
    }

    const route =
        optimizedRoute.length
            ? optimizedRoute
            : optimizeRoute();

    modalRouteDays.innerHTML = "";

    const country =
        countryData[currentCountry].name;

    const city =
        countryData[currentCountry]
            .cities[currentCity]
            .name;

    modalRouteDescription.textContent =
        `${country} · ${city} · ${formatDate(arrivalDate)} — ${formatDate(departureDate)} · ${currentDistrict}`;

    renderRouteDays(
        modalRouteDays,
        route,
        true
    );

    routeModal.classList.add("open");

    routeModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


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
   CLEAR
========================================= */

clearButton.addEventListener(
    "click",
    () => {

        selectedActivities = [];
        optimizedRoute = [];

        localStorage.removeItem(
            "nomadPlannerState"
        );

        renderActivities();
        renderRoute();

    }
);


/* =========================================
   DATE HELPERS
========================================= */

function formatDate(date) {

    if (!date) {
        return "—";
    }

    return new Date(
        date + "T00:00:00"
    ).toLocaleDateString(
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

        country: currentCountry,
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


/* =========================================
   RESTORE
========================================= */

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

        if (
            !state.country ||
            !state.city
        ) {
            return;
        }

        currentCountry =
            state.country;

        countrySelect.value =
            state.country;

        countrySelect.dispatchEvent(
            new Event("change")
        );


        currentCity =
            state.city;

        citySelect.value =
            state.city;

        citySelect.dispatchEvent(
            new Event("change")
        );


        if (state.district) {

            currentDistrict =
                state.district;

            districtSelect.value =
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
            currentCountry &&
            currentCity &&
            arrivalDate &&
            departureDate
        ) {

            summaryCountry.textContent =
                countryData[currentCountry].name;

            summaryCity.textContent =
                countryData[currentCountry]
                    .cities[currentCity]
                    .name;

            summaryDates.textContent =
                `${formatDate(arrivalDate)} — ${formatDate(departureDate)}`;

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
   ROUTE FROM URL
========================================= */

function loadRouteFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const country =
        params.get("country");

    const city =
        params.get("city");

    if (
        !country ||
        !city ||
        !countryData[country] ||
        !countryData[country].cities[city]
    ) {
        return;
    }


    currentCountry =
        country;

    countrySelect.value =
        country;

    countrySelect.dispatchEvent(
        new Event("change")
    );


    currentCity =
        city;

    citySelect.value =
        city;

    citySelect.dispatchEvent(
        new Event("change")
    );


    const districts =
        countryData[country]
            .cities[city]
            .districts;

    if (districts.length) {

        currentDistrict =
            districts[0];

        districtSelect.value =
            districts[0];

    }

}


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileNavigation =
    document.querySelector(".mobile-navigation");

if (
    menuButton &&
    mobileNavigation
) {

    menuButton.addEventListener(
        "click",
        () => {

            const open =
                mobileNavigation.classList.toggle(
                    "open"
                );

            document.body.classList.toggle(
                "menu-open",
                open
            );

        }
    );

}


/* =========================================
   INITIALIZATION
========================================= */

loadRouteFromURL();

restoreState();
