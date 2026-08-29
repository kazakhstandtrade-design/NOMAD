document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ROUTES DATABASE
    ========================================= */

    const routes = [

        {
            country: "Switzerland",
            title: "ALPINE SWITZERLAND",
            category: "nature",
            categoryName: "Nature",
            route: "Zurich → Lucerne → Interlaken",
            days: 8,
            price: "$1,790",
            image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1400&q=85",
            description:
                "Mountain lakes, alpine villages and some of the most beautiful landscapes in Europe.",
            itinerary: [
                "Day 01 — Zurich",
                "Day 02 — Lucerne",
                "Day 03 — Mount Pilatus",
                "Day 04 — Interlaken",
                "Day 05 — Lauterbrunnen",
                "Day 06 — Grindelwald",
                "Day 07 — Lake Brienz",
                "Day 08 — Departure"
            ]
        },


        {
            country: "Norway",
            title: "NORWEGIAN FJORDS",
            category: "adventure",
            categoryName: "Adventure",
            route: "Oslo → Bergen → Geiranger",
            days: 9,
            price: "$1,950",
            image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1400&q=85",
            description:
                "Dramatic fjords, northern landscapes, quiet villages and unforgettable road trips.",
            itinerary: [
                "Day 01 — Oslo",
                "Day 02 — Oslo",
                "Day 03 — Bergen",
                "Day 04 — Flåm",
                "Day 05 — Sognefjord",
                "Day 06 — Geiranger",
                "Day 07 — Trollstigen",
                "Day 08 — Ålesund",
                "Day 09 — Departure"
            ]
        },


        {
            country: "Morocco",
            title: "MOROCCO COLORS",
            category: "culture",
            categoryName: "Culture",
            route: "Marrakech → Aït Benhaddou → Sahara",
            days: 8,
            price: "$1,190",
            image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1400&q=85",
            description:
                "Ancient medinas, desert sunsets, colorful markets and the atmosphere of North Africa.",
            itinerary: [
                "Day 01 — Marrakech",
                "Day 02 — Marrakech",
                "Day 03 — Aït Benhaddou",
                "Day 04 — Dades Valley",
                "Day 05 — Merzouga",
                "Day 06 — Sahara Desert",
                "Day 07 — Ouarzazate",
                "Day 08 — Departure"
            ]
        },


        {
            country: "South Korea",
            title: "SEOUL AFTER DARK",
            category: "city",
            categoryName: "City",
            route: "Seoul → Busan → Jeju",
            days: 9,
            price: "$1,490",
            image: "https://images.unsplash.com/photo-1538485399081-7c8975e7c0b5?auto=format&fit=crop&w=1400&q=85",
            description:
                "Neon streets, modern architecture, traditional neighborhoods and Korean food culture.",
            itinerary: [
                "Day 01 — Seoul",
                "Day 02 — Seoul",
                "Day 03 — Seoul",
                "Day 04 — Busan",
                "Day 05 — Busan",
                "Day 06 — Gyeongju",
                "Day 07 — Jeju",
                "Day 08 — Jeju",
                "Day 09 — Departure"
            ]
        },


        {
            country: "Thailand",
            title: "ISLANDS OF THAILAND",
            category: "beach",
            categoryName: "Beach",
            route: "Bangkok → Krabi → Koh Samui",
            days: 10,
            price: "$1,290",
            image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=85",
            description:
                "Tropical islands, turquoise water, street food and warm evenings by the sea.",
            itinerary: [
                "Day 01 — Bangkok",
                "Day 02 — Bangkok",
                "Day 03 — Krabi",
                "Day 04 — Railay",
                "Day 05 — Phi Phi Islands",
                "Day 06 — Krabi",
                "Day 07 — Koh Samui",
                "Day 08 — Koh Samui",
                "Day 09 — Koh Tao",
                "Day 10 — Departure"
            ]
        },


        {
            country: "Turkey",
            title: "TURKEY BY THE SEA",
            category: "beach",
            categoryName: "Beach",
            route: "Istanbul → Antalya → Kaş",
            days: 8,
            price: "$1,090",
            image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=85",
            description:
                "Ancient cities, Mediterranean beaches, turquoise bays and relaxed coastal mornings.",
            itinerary: [
                "Day 01 — Istanbul",
                "Day 02 — Istanbul",
                "Day 03 — Antalya",
                "Day 04 — Antalya",
                "Day 05 — Olympos",
                "Day 06 — Kaş",
                "Day 07 — Kekova",
                "Day 08 — Departure"
            ]
        },


        {
            country: "New Zealand",
            title: "SOUTH ISLAND",
            category: "nature",
            categoryName: "Nature",
            route: "Christchurch → Queenstown → Milford Sound",
            days: 12,
            price: "$2,490",
            image: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1400&q=85",
            description:
                "Wild mountains, crystal-clear lakes, dramatic coastlines and endless open roads.",
            itinerary: [
                "Day 01 — Christchurch",
                "Day 02 — Lake Tekapo",
                "Day 03 — Aoraki",
                "Day 04 — Wanaka",
                "Day 05 — Queenstown",
                "Day 06 — Queenstown",
                "Day 07 — Milford Sound",
                "Day 08 — Te Anau",
                "Day 09 — Fiordland",
                "Day 10 — Dunedin",
                "Day 11 — Christchurch",
                "Day 12 — Departure"
            ]
        },


        {
            country: "Spain",
            title: "ANDALUSIA",
            category: "food",
            categoryName: "Food",
            route: "Seville → Córdoba → Granada → Málaga",
            days: 8,
            price: "$1,250",
            image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=85",
            description:
                "Tapas, white villages, Moorish architecture and warm Andalusian evenings.",
            itinerary: [
                "Day 01 — Seville",
                "Day 02 — Seville",
                "Day 03 — Córdoba",
                "Day 04 — Granada",
                "Day 05 — Alhambra",
                "Day 06 — Málaga",
                "Day 07 — Nerja",
                "Day 08 — Departure"
            ]
        },


        {
            country: "Vietnam",
            title: "VIETNAM NORTH TO SOUTH",
            category: "food",
            categoryName: "Food",
            route: "Hanoi → Hoi An → Ho Chi Minh City",
            days: 11,
            price: "$1,190",
            image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=85",
            description:
                "Street food, ancient towns, rice fields and the vibrant energy of Vietnam.",
            itinerary: [
                "Day 01 — Hanoi",
                "Day 02 — Hanoi",
                "Day 03 — Ha Long Bay",
                "Day 04 — Hanoi",
                "Day 05 — Hoi An",
                "Day 06 — Hoi An",
                "Day 07 — Da Nang",
                "Day 08 — Ho Chi Minh City",
                "Day 09 — Mekong Delta",
                "Day 10 — Ho Chi Minh City",
                "Day 11 — Departure"
            ]
        },

        {
            country: "Indonesia",
            title: "BALI SLOW ESCAPE",
            category: "beach",
            categoryName: "Beach",
            route: "Ubud → Canggu → Uluwatu",
            days: 9,
            price: "$1,150",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85",
            description:
                "Rice terraces, ocean sunsets, tropical mornings and a slower way of travelling.",
            itinerary: [
                "Day 01 — Ubud",
                "Day 02 — Ubud",
                "Day 03 — Tegallalang",
                "Day 04 — Canggu",
                "Day 05 — Canggu",
                "Day 06 — Uluwatu",
                "Day 07 — Uluwatu",
                "Day 08 — Nusa Penida",
                "Day 09 — Departure"
            ]
        },

        {
            country: "Egypt",
            title: "ANCIENT EGYPT",
            category: "culture",
            categoryName: "Culture",
            route: "Cairo → Luxor → Aswan",
            days: 8,
            price: "$1,090",
            image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1400&q=85",
            description:
                "Ancient temples, desert landscapes and the timeless history of the Nile.",
            itinerary: [
                "Day 01 — Cairo",
                "Day 02 — Giza",
                "Day 03 — Cairo",
                "Day 04 — Luxor",
                "Day 05 — Valley of the Kings",
                "Day 06 — Nile Cruise",
                "Day 07 — Aswan",
                "Day 08 — Departure"
            ]
        },

        {
            country: "Mexico",
            title: "YUCATÁN ROAD TRIP",
            category: "adventure",
            categoryName: "Adventure",
            route: "Cancún → Valladolid → Tulum",
            days: 9,
            price: "$1,390",
            image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1400&q=85",
            description:
                "Jungle roads, cenotes, ancient Mayan cities and Caribbean beaches.",
            itinerary: [
                "Day 01 — Cancún",
                "Day 02 — Isla Mujeres",
                "Day 03 — Valladolid",
                "Day 04 — Chichén Itzá",
                "Day 05 — Cenotes",
                "Day 06 — Tulum",
                "Day 07 — Tulum",
                "Day 08 — Akumal",
                "Day 09 — Departure"
            ]
        }

    ];


    /* =========================================
       ELEMENTS
    ========================================= */

    const routesGrid =
        document.getElementById("routesGrid");

    const filters =
        document.querySelectorAll(".filter");

    const modal =
        document.getElementById("routeModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalBackground =
        document.getElementById("modalBackground");

    const modalCountry =
        document.getElementById("modalCountry");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalNumber =
        document.getElementById("modalNumber");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalRoute =
        document.getElementById("modalRoute");

    const modalDays =
        document.getElementById("modalDays");

    const modalPrice =
        document.getElementById("modalPrice");

    const modalItinerary =
        document.getElementById("modalItinerary");

    const modalPlanButton =
        document.getElementById("modalPlanButton");


    /* =========================================
       RENDER
    ========================================= */

    function renderRoutes(data) {

        routesGrid.innerHTML = "";

        data.forEach((route, index) => {

            const card =
                document.createElement("article");

            card.className =
                "route-card";

            card.style.animationDelay =
                `${index * 0.05}s`;

            card.innerHTML = `

                <img
                    src="${route.image}"
                    alt="${route.country}"
                    loading="lazy"
                >

                <div class="route-card__overlay"></div>


                <div class="route-card__top">

                    <span class="route-card__country">
                        ${route.country}
                    </span>

                    <span class="route-card__number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                </div>


                <div class="route-card__content">

                    <span class="route-card__category">
                        ${route.categoryName}
                    </span>

                    <h3>
                        ${route.title}
                    </h3>

                    <p class="route-card__route">
                        ${route.route} · ${route.days} days
                    </p>


                    <div class="route-card__bottom">

                        <div class="route-card__price">
                            ${route.price}
                            <span>
                                / person
                            </span>
                        </div>

                        <span class="route-card__arrow">
                            →
                        </span>

                    </div>

                </div>

            `;


            card.addEventListener(
                "click",
                () => openModal(route, index)
            );


            routesGrid.appendChild(card);

        });

    }


    /* =========================================
       FILTERS
    ========================================= */

    filters.forEach(filter => {

        filter.addEventListener(
            "click",
            () => {

                filters.forEach(item => {
                    item.classList.remove("active");
                });

                filter.classList.add("active");


                const value =
                    filter.dataset.filter;


                if (value === "all") {

                    renderRoutes(routes);

                    return;

                }


                const filtered =
                    routes.filter(
                        route =>
                            route.category === value
                    );


                renderRoutes(filtered);

            }
        );

    });


    /* =========================================
       MODAL
    ========================================= */

    function openModal(route, index) {

        modalCountry.textContent =
            route.country;

        modalCategory.textContent =
            route.categoryName.toUpperCase();

        modalNumber.textContent =
            String(index + 1).padStart(2, "0");

        modalTitle.textContent =
            route.title;

        modalDescription.textContent =
            route.description;

        modalRoute.textContent =
            route.route;

        modalDays.textContent =
            `${route.days} days`;

        modalPrice.textContent =
            route.price;


        modalBackground.style.backgroundImage =
            `url("${route.image}")`;


        modalItinerary.innerHTML = "";


        route.itinerary.forEach(day => {

            const element =
                document.createElement("div");

            element.className =
                "modal-day";

            element.textContent =
                day;

            modalItinerary.appendChild(element);

        });


        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

    }


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


    modalClose.addEventListener(
        "click",
        closeModal
    );


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal ||
                event.target.classList.contains(
                    "route-modal__overlay"
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
       PLAN BUTTON
    ========================================= */

    modalPlanButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "plan.html";

        }
    );


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

    }


    /* =========================================
       INITIAL RENDER
    ========================================= */

    renderRoutes(routes);

});
