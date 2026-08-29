const countryItems =
    document.querySelectorAll(".country-item");

const pageBackground =
    document.querySelector(".page-background");

const pageTransition =
    document.querySelector(".page-transition");

const transitionImage =
    document.querySelector(".transition-image");

const transitionTitle =
    document.querySelector(".transition-title");


/*
    ФОНОВАЯ КАРТИНКА
    ПРИ НАВЕДЕНИИ
*/

countryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        const image =
            item.dataset.image;

        pageBackground.style.backgroundImage =
            `url("${image}")`;

        pageBackground.classList.add("zoom");

    });


    item.addEventListener("mouseleave", () => {

        pageBackground.classList.remove("zoom");

    });


    /*
        ПЕРЕХОД НА СТРАНИЦУ
    */

    item.addEventListener("click", event => {

        event.preventDefault();

        const image =
            item.dataset.image;

        const country =
            item.dataset.country;

        const destination =
            item.getAttribute("href");


        transitionImage.style.backgroundImage =
            `url("${image}")`;

        transitionTitle.textContent =
            country;


        pageTransition.classList.add("active");


        setTimeout(() => {

            window.location.href =
                destination;

        }, 1150);

    });

});
