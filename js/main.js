/* ========================================
   MOBILE MENU
======================================== */

const menuButton =
    document.querySelector(".mobile-menu-button");

const mobileMenu =
    document.querySelector(".mobile-menu");

const mobileMenuLinks =
    document.querySelectorAll(".mobile-menu a");


function toggleMobileMenu() {

    const isOpen =
        mobileMenu.classList.contains("open");


    mobileMenu.classList.toggle(
        "open"
    );

    menuButton.classList.toggle(
        "active"
    );

    document.body.classList.toggle(
        "menu-open"
    );

    menuButton.setAttribute(
        "aria-expanded",
        !isOpen
    );
}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        toggleMobileMenu
    );

}


mobileMenuLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        menuButton.classList.remove("active");

        document.body.classList.remove(
            "menu-open"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});



/* ========================================
   TRAVEL SEARCH
======================================== */

const searchButton =
    document.querySelector("#search-button");

const destinationInput =
    document.querySelector("#destination");

const durationSelect =
    document.querySelector("#duration");

const styleSelect =
    document.querySelector("#travel-style");


if (searchButton) {

    searchButton.addEventListener(
        "click",
        handleSearch
    );

}


function handleSearch() {

    const destination =
        destinationInput.value.trim();

    const duration =
        durationSelect.value;

    const style =
        styleSelect.value;


    if (
        !destination &&
        !duration &&
        !style
    ) {

        showMessage(
            "Расскажите немного о вашем путешествии."
        );

        return;
    }


    console.log(
        "Параметры поиска:",
        {
            destination,
            duration,
            style
        }
    );


    showMessage(
        "Ищем путешествия, которые вам подойдут..."
    );

}



/* ========================================
   MESSAGE
======================================== */

function showMessage(message) {

    const oldMessage =
        document.querySelector(".search-message");


    if (oldMessage) {

        oldMessage.remove();

    }


    const messageElement =
        document.createElement("div");


    messageElement.className =
        "search-message";


    messageElement.textContent =
        message;


    document.body.appendChild(
        messageElement
    );


    setTimeout(() => {

        messageElement.classList.add(
            "search-message--visible"
        );

    }, 10);


    setTimeout(() => {

        messageElement.classList.remove(
            "search-message--visible"
        );


        setTimeout(() => {

            messageElement.remove();

        }, 300);

    }, 3000);

}



/* ========================================
   IMAGE LOADING
======================================== */

const images =
    document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener(
        "load",
        () => {

            image.classList.add(
                "image-loaded"
            );

        }
    );

});
