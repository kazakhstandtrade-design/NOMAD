// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("nav--open");
        menuToggle.classList.toggle("menu-toggle--active");

    });

}



// =========================
// TRAVEL SEARCH
// =========================

const searchButton =
    document.querySelector("#searchButton");

const destinationInput =
    document.querySelector("#destinationInput");

const durationSelect =
    document.querySelector("#durationSelect");

const styleSelect =
    document.querySelector("#styleSelect");


if (searchButton) {

    searchButton.addEventListener("click", () => {

        const destination =
            destinationInput.value.trim();

        const duration =
            durationSelect.value;

        const style =
            styleSelect.value;


        if (!destination && !duration && !style) {

            alert(
                "Tell us a little about your trip first."
            );

            return;
        }


        console.log("Travel search:", {
            destination,
            duration,
            style
        });


        alert(
            `Great choice! We're looking for journeys ${
                destination
                    ? `to ${destination}`
                    : ""
            }`
        );

    });

}



// =========================
// IMAGE LOADING
// =========================

const images =
    document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener("load", () => {

        image.classList.add("loaded");

    });

});
