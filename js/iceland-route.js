/* =========================================
   ROUTE DATA
========================================= */

const places = {

    hallgrimskirkja: {

        title: "Hallgrímskirkja",

        type: "PLACE",

        time: "09:00",

        duration: "1 hour",

        price: "$0",

        link: "places/hallgrimskirkja.html"

    },


    harpa: {

        title: "Harpa Concert Hall",

        type: "PLACE",

        time: "10:30",

        duration: "1 hour",

        price: "$0",

        link: "places/harpa.html"

    },


    thingvellir: {

        title: "Þingvellir National Park",

        type: "PLACE",

        time: "08:30",

        duration: "2 hours",

        price: "$12",

        link: "places/thingvellir.html"

    },


    geysir: {

        title: "Geysir",

        type: "PLACE",

        time: "11:30",

        duration: "1 hour",

        price: "$0",

        link: "places/geysir.html"

    },


    gullfoss: {

        title: "Gullfoss",

        type: "PLACE",

        time: "13:00",

        duration: "1.5 hours",

        price: "$0",

        link: "places/gullfoss.html"

    },


    seljalandsfoss: {

        title: "Seljalandsfoss",

        type: "PLACE",

        time: "09:00",

        duration: "1 hour",

        price: "$0",

        link: "places/seljalandsfoss.html"

    },


    skogafoss: {

        title: "Skógafoss",

        type: "PLACE",

        time: "11:00",

        duration: "1 hour",

        price: "$0",

        link: "places/skogafoss.html"

    },


    reynisfjara: {

        title: "Reynisfjara Beach",

        type: "PLACE",

        time: "14:00",

        duration: "1.5 hours",

        price: "$0",

        link: "places/reynisfjara.html"

    }

};



/* =========================================
   DEFAULT ROUTE
========================================= */

const defaultRoute = [

    {
        kind: "arrival",
        title: "Прибытие в Reykjavík",
        time: "08:00",
        meta: "Аэропорт → центр города"
    },

    {
        kind: "place",
        id: "hallgrimskirkja"
    },

    {
        kind: "place",
        id: "harpa"
    },

    {
        kind: "hotel",
        title: "Отель Reykjavík",
        time: "15:00",
        meta: "Заселение"
    },

    {
        kind: "day",
        title: "DAY 2"
    },

    {
        kind: "place",
        id: "thingvellir"
    },

    {
        kind: "place",
        id: "geysir"
    },

    {
        kind: "place",
        id: "gullfoss"
    },

    {
        kind: "hotel",
        title: "Отель Golden Circle",
        time: "18:00",
        meta: "Ночь"
    },

    {
        kind: "day",
        title: "DAY 3"
    },

    {
        kind: "place",
        id: "seljalandsfoss"
    },

    {
        kind: "place",
        id: "skogafoss"
    },

    {
        kind: "place",
        id: "reynisfjara"
    },

    {
        kind: "departure",
        title: "Отправка назад",
        time: "18:00",
        meta: "South Coast → Reykjavík Airport"
    }

];



/* =========================================
   STORAGE
========================================= */

const STORAGE_KEY =
    "nomad-iceland-route";


function loadRoute() {

    const saved =
        localStorage.getItem(STORAGE_KEY);


    if (!saved) {

        return [...defaultRoute];
    }


    try {

        return JSON.parse(saved);

    } catch {

        return [...defaultRoute];

    }

}


let currentRoute =
    loadRoute();



function saveRoute() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(currentRoute)
    );

}



/* =========================================
   ELEMENTS
========================================= */

const timeline =
    document.querySelector("#timeline");


const totalDays =
    document.querySelector("#totalDays");


const editRoute =
    document.querySelector("#editRoute");


const editPanel =
    document.querySelector("#editPanel");


const editClose =
    document.querySelector("#editClose");


const placeSelect =
    document.querySelector("#placeSelect");


const addPlace =
    document.querySelector("#addPlace");


const bookRoute =
    document.querySelector("#bookRoute");



/* =========================================
   CREATE SELECT
========================================= */

Object.entries(places).forEach(
    ([id, place]) => {

        const option =
            document.createElement("option");

        option.value = id;

        option.textContent =
            place.title;

        placeSelect.appendChild(option);

    }
);



/* =========================================
   RENDER ROUTE
========================================= */

function renderRoute() {

    timeline.innerHTML = "";


    let animationIndex = 0;


    currentRoute.forEach(
        (item, index) => {

            if (item.kind === "day") {

                const divider =
                    document.createElement("div");

                divider.className =
                    "timeline-divider";

                divider.textContent =
                    item.title;

                timeline.appendChild(
                    divider
                );

                return;
            }


            const element =
                document.createElement("div");

            element.className =
                "timeline-item";


            element.style.animationDelay =
                `${animationIndex * 0.06}s`;


            animationIndex++;


            let title = "";
            let time = "";
            let meta = "";
            let type = "";
            let link = null;


            if (item.kind === "place") {

                const place =
                    places[item.id];

                if (!place) {
                    return;
                }

                title =
                    place.title;

                time =
                    place.time;

                meta =
                    `${place.duration} · ${place.price}`;

                type =
                    place.type;

                link =
                    place.link;

            }


            if (
                item.kind === "arrival" ||
                item.kind === "departure" ||
                item.kind === "hotel"
            ) {

                title =
                    item.title;

                time =
                    item.time;

                meta =
                    item.meta;

                type =
                    item.kind === "hotel"
                        ? "HOTEL"
                        : "TRANSFER";

            }


            const timeElement =
                document.createElement("div");

            timeElement.className =
                "timeline-item__time";

            timeElement.textContent =
                time;


            const titleElement =
                document.createElement("div");

            titleElement.className =
                "timeline-item__title";


            const titleText =
                document.createElement("div");


            if (link) {

                const anchor =
                    document.createElement("a");

                anchor.href =
                    link;

                anchor.className =
                    "page-link";

                anchor.textContent =
                    title;

                titleText.appendChild(
                    anchor
                );

            } else {

                titleText.textContent =
                    title;

            }


            const typeElement =
                document.createElement("span");

            typeElement.className =
                "timeline-item__type";

            typeElement.textContent =
                type;


            titleElement.appendChild(
                titleText
            );

            titleElement.appendChild(
                typeElement
            );


            const metaElement =
                document.createElement("div");

            metaElement.className =
                "timeline-item__meta";

            metaElement.textContent =
                meta;


            const removeButton =
                document.createElement("button");

            removeButton.className =
                "timeline-item__remove";

            removeButton.type =
                "button";

            removeButton.textContent =
                "Удалить";


            removeButton.addEventListener(
                "click",
                () => {

                    removeItem(index);

                }
            );


            element.appendChild(
                timeElement
            );

            element.appendChild(
                titleElement
            );

            element.appendChild(
                metaElement
            );

            element.appendChild(
                removeButton
            );


            timeline.appendChild(
                element
            );

        }
    );


    updateDays();

}



/* =========================================
   DAYS
========================================= */

function updateDays() {

    const days =
        currentRoute.filter(
            item => item.kind === "day"
        ).length + 1;


    totalDays.textContent =
        days;

}



/* =========================================
   REMOVE PLACE
========================================= */

function removeItem(index) {

    const item =
        currentRoute[index];


    if (
        item.kind === "arrival" ||
        item.kind === "departure"
    ) {

        return;
    }


    currentRoute.splice(
        index,
        1
    );


    saveRoute();

    renderRoute();

}



/* =========================================
   ADD PLACE
========================================= */

addPlace.addEventListener(
    "click",
    () => {

        const id =
            placeSelect.value;


        if (!id) {
            return;
        }


        currentRoute.push({

            kind: "place",

            id: id

        });


        saveRoute();

        renderRoute();


        placeSelect.value = "";

    }
);



/* =========================================
   EDIT MODE
========================================= */

editRoute.addEventListener(
    "click",
    () => {

        editPanel.classList.add(
            "open"
        );

        timeline.classList.add(
            "editing"
        );

        editRoute.style.display =
            "none";

    }
);


editClose.addEventListener(
    "click",
    () => {

        editPanel.classList.remove(
            "open"
        );

        timeline.classList.remove(
            "editing"
        );

        editRoute.style.display =
            "";

    }
);



/* =========================================
   BOOK
========================================= */

bookRoute.addEventListener(
    "click",
    () => {

        alert(
            "Бронирование маршрута будет доступно после подключения системы бронирования."
        );

    }
);



/* =========================================
   PAGE TRANSITIONS
========================================= */

const transition =
    document.querySelector(
        ".page-transition"
    );


document.querySelectorAll(
    ".page-link"
).forEach(
    link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute("href");


                if (
                    !href ||
                    href === "#" ||
                    href.startsWith("http")
                ) {

                    return;
                }


                event.preventDefault();


                transition.classList.add(
                    "active"
                );


                document.body.classList.add(
                    "leaving"
                );


                setTimeout(
                    () => {

                        window.location.href =
                            href;

                    },
                    600
                );

            }
        );

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


menuButton.addEventListener(
    "click",
    () => {

        mobileNavigation.classList.toggle(
            "open"
        );

    }
);



/* =========================================
   INITIAL RENDER
========================================= */

renderRoute();
