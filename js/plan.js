/* =========================================
   NOMAD — PLAN
========================================= */


/* =========================================
   ROUTES DATABASE
========================================= */

const routes = [

    /* ITALY */

    {
        name: "AMALFI COAST",
        country: "Италия",
        code: "IT",
        route: "Rome → Florence → Amalfi → Positano → Capri",
        days: 7,
        price: 1290,
        months: [5, 6, 7, 8, 9, 10],
        types: [
            "beach",
            "aesthetic",
            "food",
            "romantic",
            "relax",
            "culture"
        ],
        image:
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: май — октябрь"
    },

    {
        name: "ROME & FLORENCE",
        country: "Италия",
        code: "IT",
        route: "Rome → Vatican → Florence → Tuscany",
        days: 7,
        price: 1190,
        months: [3, 4, 5, 6, 9, 10, 11],
        types: [
            "city",
            "culture",
            "aesthetic",
            "food"
        ],
        image:
            "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: апрель — июнь"
    },

    {
        name: "SICILY DISCOVERY",
        country: "Италия",
        code: "IT",
        route: "Palermo → Taormina → Syracuse → Noto",
        days: 8,
        price: 1390,
        months: [4, 5, 6, 9, 10],
        types: [
            "beach",
            "food",
            "culture",
            "aesthetic",
            "relax"
        ],
        image:
            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: май — октябрь"
    },


    /* JAPAN */

    {
        name: "SAKURA IN JAPAN",
        country: "Япония",
        code: "JP",
        route: "Tokyo → Kyoto → Nara → Osaka",
        days: 10,
        price: 2390,
        months: [3, 4],
        types: [
            "aesthetic",
            "culture",
            "city",
            "nature",
            "food"
        ],
        image:
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=85",
        season:
            "Сакура: конец марта — апрель"
    },

    {
        name: "JAPAN HIGHLIGHTS",
        country: "Япония",
        code: "JP",
        route: "Tokyo → Kyoto → Osaka",
        days: 10,
        price: 2190,
        months: [3, 4, 5, 10, 11],
        types: [
            "city",
            "culture",
            "food",
            "aesthetic"
        ],
        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: весна и осень"
    },

    {
        name: "TOKYO & FUJI",
        country: "Япония",
        code: "JP",
        route: "Tokyo → Hakone → Mount Fuji",
        days: 7,
        price: 1890,
        months: [4, 5, 10, 11],
        types: [
            "nature",
            "aesthetic",
            "adventure",
            "city"
        ],
        image:
            "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: апрель — май"
    },


    /* FRANCE */

    {
        name: "PARIS & RIVIERA",
        country: "Франция",
        code: "FR",
        route: "Paris → Nice → Monaco → Cannes",
        days: 9,
        price: 1990,
        months: [5, 6, 7, 8, 9, 10],
        types: [
            "city",
            "romantic",
            "beach",
            "aesthetic",
            "food"
        ],
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: май — сентябрь"
    },

    {
        name: "PROVENCE ESCAPE",
        country: "Франция",
        code: "FR",
        route: "Marseille → Aix-en-Provence → Avignon",
        days: 7,
        price: 1590,
        months: [6, 7, 8, 9],
        types: [
            "aesthetic",
            "nature",
            "food",
            "relax",
            "romantic"
        ],
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: июнь — сентябрь"
    },


    /* SPAIN */

    {
        name: "ANDALUSIA",
        country: "Испания",
        code: "ES",
        route: "Seville → Córdoba → Granada → Málaga",
        days: 9,
        price: 1490,
        months: [3, 4, 5, 9, 10, 11],
        types: [
            "culture",
            "city",
            "food",
            "aesthetic",
            "romantic"
        ],
        image:
            "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: март — май"
    },

    {
        name: "BARCELONA & COSTA BRAVA",
        country: "Испания",
        code: "ES",
        route: "Barcelona → Girona → Cadaqués",
        days: 7,
        price: 1390,
        months: [5, 6, 7, 8, 9],
        types: [
            "beach",
            "city",
            "aesthetic",
            "food",
            "relax"
        ],
        image:
            "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: май — сентябрь"
    },


    /* PORTUGAL */

    {
        name: "LISBON & PORTO",
        country: "Португалия",
        code: "PT",
        route: "Lisbon → Sintra → Coimbra → Porto",
        days: 8,
        price: 1290,
        months: [3, 4, 5, 6, 9, 10],
        types: [
            "city",
            "culture",
            "food",
            "aesthetic",
            "romantic"
        ],
        image:
            "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: март — июнь"
    },

    {
        name: "ALGARVE COAST",
        country: "Португалия",
        code: "PT",
        route: "Faro → Lagos → Albufeira",
        days: 7,
        price: 1390,
        months: [5, 6, 7, 8, 9],
        types: [
            "beach",
            "nature",
            "relax",
            "aesthetic"
        ],
        image:
            "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: май — сентябрь"
    },


    /* GREECE */

    {
        name: "GREEK ISLANDS",
        country: "Греция",
        code: "GR",
        route: "Athens → Mykonos → Santorini",
        days: 8,
        price: 1790,
        months: [5, 6, 7, 8, 9],
        types: [
            "beach",
            "romantic",
            "aesthetic",
            "relax",
            "food"
        ],
        image:
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: май — сентябрь"
    },


    /* SWITZERLAND */

    {
        name: "SWISS ALPS",
        country: "Швейцария",
        code: "CH",
        route: "Zurich → Lucerne → Interlaken → Zermatt",
        days: 9,
        price: 2290,
        months: [6, 7, 8, 9, 12, 1, 2, 3],
        types: [
            "nature",
            "adventure",
            "aesthetic",
            "romantic"
        ],
        image:
            "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лето и зимний сезон"
    },


    /* NORWAY */

    {
        name: "NORWAY FJORDS",
        country: "Норвегия",
        code: "NO",
        route: "Oslo → Bergen → Flåm → Geiranger",
        days: 9,
        price: 2190,
        months: [5, 6, 7, 8, 9],
        types: [
            "nature",
            "adventure",
            "aesthetic",
            "roadtrip"
        ],
        image:
            "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: май — сентябрь"
    },

    {
        name: "NORTHERN LIGHTS",
        country: "Норвегия",
        code: "NO",
        route: "Tromsø → Senja → Alta",
        days: 7,
        price: 1990,
        months: [10, 11, 12, 1, 2, 3],
        types: [
            "nature",
            "adventure",
            "aesthetic"
        ],
        image:
            "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1400&q=85",
        season:
            "Северное сияние: октябрь — март"
    },


    /* ICELAND */

    {
        name: "ICELAND SOUTH",
        country: "Исландия",
        code: "IS",
        route: "Reykjavik → Golden Circle → Vik → South Coast",
        days: 7,
        price: 1790,
        months: [5, 6, 7, 8, 9],
        types: [
            "nature",
            "adventure",
            "roadtrip",
            "aesthetic"
        ],
        image:
            "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: июнь — август"
    },


    /* TURKEY */

    {
        name: "TURKISH RIVIERA",
        country: "Турция",
        code: "TR",
        route: "Antalya → Fethiye → Kaş",
        days: 8,
        price: 1090,
        months: [5, 6, 7, 8, 9, 10],
        types: [
            "beach",
            "relax",
            "nature",
            "romantic"
        ],
        image:
            "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: май — октябрь"
    },


    /* MOROCCO */

    {
        name: "MOROCCO DISCOVERY",
        country: "Марокко",
        code: "MA",
        route: "Marrakech → Ait Benhaddou → Sahara",
        days: 8,
        price: 1190,
        months: [3, 4, 5, 9, 10, 11],
        types: [
            "adventure",
            "culture",
            "aesthetic",
            "food",
            "roadtrip"
        ],
        image:
            "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: март — май"
    },


    /* INDONESIA */

    {
        name: "BALI ESCAPE",
        country: "Индонезия",
        code: "ID",
        route: "Ubud → Canggu → Uluwatu",
        days: 9,
        price: 1390,
        months: [4, 5, 6, 7, 8, 9, 10],
        types: [
            "beach",
            "aesthetic",
            "relax",
            "nature",
            "food"
        ],
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: апрель — октябрь"
    },


    /* THAILAND */

    {
        name: "THAILAND DISCOVERY",
        country: "Таиланд",
        code: "TH",
        route: "Bangkok → Chiang Mai → Phuket",
        days: 10,
        price: 1590,
        months: [1, 2, 3, 11, 12],
        types: [
            "beach",
            "city",
            "food",
            "culture",
            "relax"
        ],
        image:
            "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: ноябрь — март"
    },


    /* AUSTRALIA */

    {
        name: "AUSTRALIA EAST COAST",
        country: "Австралия",
        code: "AU",
        route: "Sydney → Byron Bay → Brisbane → Great Barrier Reef",
        days: 14,
        price: 2890,
        months: [9, 10, 11, 12, 1, 2, 3],
        types: [
            "beach",
            "nature",
            "adventure",
            "roadtrip"
        ],
        image:
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d7?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: сентябрь — март"
    },


    /* NEW ZEALAND */

    {
        name: "NEW ZEALAND SOUTH",
        country: "Новая Зеландия",
        code: "NZ",
        route: "Queenstown → Milford Sound → Wanaka",
        days: 10,
        price: 2690,
        months: [11, 12, 1, 2, 3],
        types: [
            "adventure",
            "nature",
            "roadtrip",
            "aesthetic"
        ],
        image:
            "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: ноябрь — март"
    },


    /* USA */

    {
        name: "WEST COAST USA",
        country: "США",
        code: "US",
        route: "Los Angeles → Big Sur → San Francisco",
        days: 10,
        price: 2490,
        months: [4, 5, 6, 7, 8, 9, 10],
        types: [
            "roadtrip",
            "city",
            "nature",
            "adventure"
        ],
        image:
            "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: апрель — октябрь"
    },


    /* CANADA */

    {
        name: "CANADIAN ROCKIES",
        country: "Канада",
        code: "CA",
        route: "Vancouver → Banff → Lake Louise → Jasper",
        days: 12,
        price: 2590,
        months: [6, 7, 8, 9],
        types: [
            "nature",
            "adventure",
            "roadtrip",
            "aesthetic"
        ],
        image:
            "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: июнь — сентябрь"
    },


    /* SOUTH KOREA */

    {
        name: "SEOUL & BUSAN",
        country: "Южная Корея",
        code: "KR",
        route: "Seoul → Gyeongju → Busan",
        days: 8,
        price: 1890,
        months: [4, 5, 9, 10, 11],
        types: [
            "city",
            "culture",
            "food",
            "aesthetic"
        ],
        image:
            "https://images.unsplash.com/photo-1538485399081-7c897a4d9b7f?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: весна и осень"
    },


    /* AUSTRIA */

    {
        name: "AUSTRIAN ALPS",
        country: "Австрия",
        code: "AT",
        route: "Vienna → Salzburg → Hallstatt → Innsbruck",
        days: 8,
        price: 1790,
        months: [5, 6, 7, 8, 9, 12, 1, 2],
        types: [
            "nature",
            "aesthetic",
            "culture",
            "romantic"
        ],
        image:
            "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лето и зимний сезон"
    },


    /* CROATIA */

    {
        name: "CROATIAN COAST",
        country: "Хорватия",
        code: "HR",
        route: "Split → Hvar → Dubrovnik",
        days: 8,
        price: 1590,
        months: [5, 6, 7, 8, 9],
        types: [
            "beach",
            "aesthetic",
            "relax",
            "romantic"
        ],
        image:
            "https://images.unsplash.com/photo-1555990538-1e8f5f5f8d1c?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: май — сентябрь"
    },


    /* UK */

    {
        name: "LONDON & SCOTLAND",
        country: "Великобритания",
        code: "GB",
        route: "London → Edinburgh → Scottish Highlands",
        days: 9,
        price: 1990,
        months: [5, 6, 7, 8, 9],
        types: [
            "city",
            "culture",
            "nature",
            "roadtrip",
            "aesthetic"
        ],
        image:
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
        season:
            "Лучше всего: май — сентябрь"
    }

];


/* =========================================
   COUNTRY DATABASE
========================================= */

const countries = [

    /* EUROPE */

    ["Италия", "IT"],
    ["Франция", "FR"],
    ["Испания", "ES"],
    ["Португалия", "PT"],
    ["Греция", "GR"],
    ["Швейцария", "CH"],
    ["Норвегия", "NO"],
    ["Исландия", "IS"],
    ["Великобритания", "GB"],
    ["Ирландия", "IE"],
    ["Германия", "DE"],
    ["Австрия", "AT"],
    ["Нидерланды", "NL"],
    ["Бельгия", "BE"],
    ["Дания", "DK"],
    ["Швеция", "SE"],
    ["Финляндия", "FI"],
    ["Польша", "PL"],
    ["Чехия", "CZ"],
    ["Венгрия", "HU"],
    ["Хорватия", "HR"],
    ["Словения", "SI"],
    ["Черногория", "ME"],
    ["Албания", "AL"],
    ["Румыния", "RO"],
    ["Болгария", "BG"],
    ["Турция", "TR"],
    ["Мальта", "MT"],
    ["Кипр", "CY"],
    ["Грузия", "GE"],
    ["Армения", "AM"],

    /* ASIA */

    ["Япония", "JP"],
    ["Южная Корея", "KR"],
    ["Китай", "CN"],
    ["Таиланд", "TH"],
    ["Индонезия", "ID"],
    ["Вьетнам", "VN"],
    ["Сингапур", "SG"],
    ["Малайзия", "MY"],
    ["Филиппины", "PH"],
    ["Мальдивы", "MV"],
    ["Индия", "IN"],
    ["Непал", "NP"],
    ["Шри-Ланка", "LK"],
    ["Камбоджа", "KH"],
    ["Лаос", "LA"],
    ["Монголия", "MN"],
    ["ОАЭ", "AE"],
    ["Иордания", "JO"],
    ["Израиль", "IL"],

    /* AMERICAS */

    ["США", "US"],
    ["Канада", "CA"],
    ["Мексика", "MX"],
    ["Бразилия", "BR"],
    ["Аргентина", "AR"],
    ["Чили", "CL"],
    ["Перу", "PE"],
    ["Колумбия", "CO"],
    ["Коста-Рика", "CR"],
    ["Панама", "PA"],
    ["Эквадор", "EC"],
    ["Уругвай", "UY"]

];


/* =========================================
   DOM
========================================= */

const countrySearch =
    document.getElementById("countrySearch");

const clearSearch =
    document.getElementById("clearSearch");

const countryList =
    document.getElementById("countryList");

const showCountries =
    document.getElementById("showCountries");

const countriesButtonText =
    document.getElementById("countriesButtonText");

const monthSelect =
    document.getElementById("month");

const daysSelect =
    document.getElementById("days");

const budget =
    document.getElementById("budget");

const budgetValue =
    document.getElementById("budgetValue");

const tripTypes =
    document.getElementById("tripTypes");

const routesGrid =
    document.getElementById("routesGrid");

const resultsCount =
    document.getElementById("resultsCount");

const noResults =
    document.getElementById("noResults");

const resetFilters =
    document.getElementById("resetFilters");

const resetFromEmpty =
    document.getElementById("resetFromEmpty");

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");

const navigationClose =
    document.getElementById("navigationClose");

const countryMessage =
    document.getElementById("countryMessage");

const messageClose =
    document.getElementById("messageClose");

const messageButton =
    document.getElementById("messageButton");


/* =========================================
   STATE
========================================= */

let selectedCountry = null;

let selectedType = null;

let visibleCountries = 4;

let countriesExpanded = false;


/* =========================================
   COUNTRY HELPERS
========================================= */

function hasRoutes(country) {

    return routes.some(
        route => route.country === country
    );

}


/* =========================================
   RENDER COUNTRIES
========================================= */

function renderCountries() {

    const search =
        countrySearch.value
            .trim()
            .toLowerCase();

    let filteredCountries =
        countries.filter(country =>
            country[0]
                .toLowerCase()
                .includes(search)
        );


    /*
       При поиске показываем все
       совпадения.
    */

    if (search !== "") {

        countryList.classList.add("searching");

        showCountries.style.display = "none";

    } else {

        countryList.classList.remove("searching");

        showCountries.style.display = "flex";

        filteredCountries =
            countries.slice(
                0,
                visibleCountries
            );

    }


    countryList.innerHTML = "";


    filteredCountries.forEach(
        ([name, code]) => {

            const item =
                document.createElement("button");

            item.className =
                "country-item";

            if (
                selectedCountry === name
            ) {
                item.classList.add("active");
            }


            if (!hasRoutes(name)) {

                item.classList.add("no-route");

            }


            item.innerHTML = `

                <span>
                    ${name}
                </span>

                <span class="country-code">
                    ${code}
                </span>

            `;


            item.addEventListener(
                "click",
                () => {

                    selectCountry(name);

                }
            );


            countryList.appendChild(item);

        }
    );


    updateCountriesButton();

}


/* =========================================
   COUNTRY BUTTON
========================================= */

function updateCountriesButton() {

    if (
        countriesExpanded
    ) {

        countriesButtonText.textContent =
            "Показать меньше";

        showCountries.classList.add(
            "expanded"
        );

    } else {

        countriesButtonText.textContent =
            "Показать ещё";

        showCountries.classList.remove(
            "expanded"
        );

    }

}


/* =========================================
   COUNTRY SELECTION
========================================= */

function selectCountry(country) {

    selectedCountry = country;

    countrySearch.value = country;

    clearSearch.style.display = "block";


    if (!hasRoutes(country)) {

        countryMessage.classList.add(
            "active"
        );

        renderCountries();

        return;

    }


    renderCountries();

    applyFilters();


    window.scrollTo({

        top:
            document.querySelector(
                ".results-section"
            ).offsetTop - 80,

        behavior: "smooth"

    });

}


/* =========================================
   SHOW MORE COUNTRIES
========================================= */

showCountries.addEventListener(
    "click",
    () => {

        if (!countriesExpanded) {

            visibleCountries += 4;


            if (
                visibleCountries >= countries.length
            ) {

                visibleCountries =
                    countries.length;

                countriesExpanded = true;

            }

        } else {

            visibleCountries = 4;

            countriesExpanded = false;


            document.querySelector(
                ".planner-section"
            ).scrollIntoView({
                behavior: "smooth"
            });

        }


        renderCountries();

    }
);


/* =========================================
   COUNTRY SEARCH
========================================= */

countrySearch.addEventListener(
    "input",
    () => {

        if (
            countrySearch.value.trim() !== ""
        ) {

            clearSearch.style.display =
                "block";

        } else {

            clearSearch.style.display =
                "none";

            selectedCountry = null;

        }

        renderCountries();

    }
);


clearSearch.addEventListener(
    "click",
    () => {

        countrySearch.value = "";

        selectedCountry = null;

        clearSearch.style.display =
            "none";

        renderCountries();

        applyFilters();

    }
);


/* =========================================
   TRIP TYPES
========================================= */

tripTypes
    .querySelectorAll("button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const type =
                    button.dataset.type;


                if (
                    selectedType === type
                ) {

                    selectedType = null;

                    button.classList.remove(
                        "active"
                    );

                } else {

                    selectedType = type;

                    tripTypes
                        .querySelectorAll("button")
                        .forEach(btn =>
                            btn.classList.remove(
                                "active"
                            )
                        );

                    button.classList.add(
                        "active"
                    );

                }


                applyFilters();

            }
        );

    });


/* =========================================
   BUDGET
========================================= */

function updateBudget() {

    const max =
        Number(budget.value);


    const min =
        Math.max(500, max - 500);


    if (max >= 5000) {

        budgetValue.textContent =
            "$4,500+";

    } else {

        budgetValue.textContent =
            `$${min.toLocaleString()}–$${max.toLocaleString()}`;

    }

}


budget.addEventListener(
    "input",
    () => {

        updateBudget();

        applyFilters();

    }
);


/* =========================================
   FILTER LISTENERS
========================================= */

monthSelect.addEventListener(
    "change",
    applyFilters
);

daysSelect.addEventListener(
    "change",
    applyFilters
);


/* =========================================
   DAYS FILTER
========================================= */

function matchesDays(route) {

    const selected =
        daysSelect.value;


    if (
        selected === "all"
    ) {
        return true;
    }


    const value =
        Number(selected);


    if (value === 3) {

        return route.days >= 3 &&
               route.days <= 4;

    }


    if (value === 5) {

        return route.days >= 5 &&
               route.days <= 6;

    }


    if (value === 7) {

        return route.days >= 7 &&
               route.days <= 9;

    }


    if (value === 10) {

        return route.days >= 10 &&
               route.days <= 14;

    }


    if (value === 15) {

        return route.days >= 15;

    }


    return true;

}


/* =========================================
   ROUTE MATCHING
========================================= */

function routeMatches(route) {

    /* COUNTRY */

    if (
        selectedCountry &&
        route.country !== selectedCountry
    ) {

        return false;

    }


    /* MONTH */

    const month =
        monthSelect.value;


    if (
        month !== "all" &&
        !route.months.includes(
            Number(month)
        )
    ) {

        return false;

    }


    /* TYPE */

    if (
        selectedType &&
        !route.types.includes(
            selectedType
        )
    ) {

        return false;

    }


    /* DAYS */

    if (
        !matchesDays(route)
    ) {

        return false;

    }


    /* BUDGET */

    const maxBudget =
        Number(budget.value);


    if (
        route.price > maxBudget
    ) {

        return false;

    }


    return true;

}


/* =========================================
   ROUTE SCORE
========================================= */

function calculateScore(route) {

    let score = 0;


    const month =
        monthSelect.value;


    /*
       Сезонный маршрут получает
       дополнительный приоритет.
    */

    if (
        month !== "all" &&
        route.months.includes(
            Number(month)
        )
    ) {

        score += 5;

    }


    /*
       Вид отдыха.
    */

    if (
        selectedType &&
        route.types.includes(
            selectedType
        )
    ) {

        score += 5;

    }


    /*
       Чем ближе цена к выбранному
       бюджету, тем выше маршрут.
    */

    const budgetDifference =
        Math.abs(
            Number(budget.value) -
            route.price
        );


    score +=
        Math.max(
            0,
            5 - budgetDifference / 500
        );


    return score;

}


/* =========================================
   APPLY FILTERS
========================================= */

function applyFilters() {

    updateBudget();


    let matchingRoutes =
        routes.filter(route =>
            routeMatches(route)
        );


    /*
       Сначала наиболее подходящие.
    */

    matchingRoutes.sort(
        (a, b) =>
            calculateScore(b) -
            calculateScore(a)
    );


    renderRoutes(
        matchingRoutes
    );

}


/* =========================================
   RENDER ROUTES
========================================= */

function renderRoutes(routeArray) {

    routesGrid.innerHTML = "";


    resultsCount.textContent =
        `${routeArray.length} ${
            routeArray.length === 1
                ? "маршрут"
                : "маршрутов"
        }`;


    if (
        routeArray.length === 0
    ) {

        noResults.classList.add(
            "active"
        );

        return;

    }


    noResults.classList.remove(
        "active"
    );


    routeArray.forEach(
        route => {

            const card =
                document.createElement("article");

            card.className =
                "route-card";


            card.innerHTML = `

                <div
                    class="route-image"
                    style="
                        background-image:
                        url('${route.image}');
                    "
                >

                    <span class="route-country">
                        ${route.country}
                    </span>

                    <span class="route-season">
                        ${route.season}
                    </span>

                </div>


                <div class="route-content">

                    <h3>
                        ${route.name}
                    </h3>

                    <p class="route-line">
                        ${route.route}
                    </p>


                    <div class="route-bottom">

                        <div>

                            <span class="route-days">
                                ${route.days} дней
                            </span>

                            <span class="route-price">
                                $${route.price.toLocaleString()}
                            </span>

                        </div>

                        <span class="route-arrow">
                            →
                        </span>

                    </div>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openRoute(route);

                }
            );


            routesGrid.appendChild(card);

        }
    );

}


/* =========================================
   OPEN ROUTE
========================================= */

function openRoute(route) {

    /*
       Пока карточка ведёт
       на будущую страницу маршрута.
    */

    localStorage.setItem(
        "selectedRoute",
        JSON.stringify(route)
    );


    document.body.classList.add(
        "route-opening"
    );


    setTimeout(
        () => {

            window.location.href =
                "journey.html";

        },
        450
    );

}


/* =========================================
   RESET
========================================= */

function resetAllFilters() {

    selectedCountry = null;

    selectedType = null;

    visibleCountries = 4;

    countriesExpanded = false;


    countrySearch.value = "";

    clearSearch.style.display =
        "none";


    monthSelect.value =
        "all";

    daysSelect.value =
        "all";

    budget.value =
        "1000";


    tripTypes
        .querySelectorAll("button")
        .forEach(button =>
            button.classList.remove(
                "active"
            )
        );


    renderCountries();

    applyFilters();

}


resetFilters.addEventListener(
    "click",
    resetAllFilters
);

resetFromEmpty.addEventListener(
    "click",
    resetAllFilters
);


/* =========================================
   NAVIGATION
========================================= */

function openNavigation() {

    navigation.classList.add(
        "active"
    );

    document.body.classList.add(
        "menu-open"
    );

}


function closeNavigation() {

    navigation.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "menu-open"
    );

}


menuButton.addEventListener(
    "click",
    openNavigation
);

navigationClose.addEventListener(
    "click",
    closeNavigation
);


/* =========================================
   CLOSE NAV ON LINK CLICK
========================================= */

navigation
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                closeNavigation();

            }
        );

    });


/* =========================================
   COUNTRY MESSAGE
========================================= */

function closeCountryMessage() {

    countryMessage.classList.remove(
        "active"
    );

}


messageClose.addEventListener(
    "click",
    closeCountryMessage
);

messageButton.addEventListener(
    "click",
    closeCountryMessage
);

countryMessage.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            countryMessage
        ) {

            closeCountryMessage();

        }

    }
);


/* =========================================
   INITIALIZATION
========================================= */

renderCountries();

updateBudget();

applyFilters();
