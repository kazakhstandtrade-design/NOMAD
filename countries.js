const countryCards = document.querySelectorAll(".country-card");

const pageTransition = document.querySelector(".page-transition");
const transitionImage = document.querySelector(".transition-image");
const transitionCountry = document.querySelector(".transition-country");


countryCards.forEach(card => {

    card.addEventListener("click", function (event) {

        event.preventDefault();


        const country = this.dataset.country;
        const image = this.dataset.image;
        const destination = this.getAttribute("href");


        /*
            Устанавливаем фотографию
            выбранной страны
        */

        transitionImage.style.backgroundImage =
            `url("${image}")`;


        /*
            Устанавливаем название страны
        */

        transitionCountry.textContent = country;


        /*
            Показываем transition
        */

        pageTransition.classList.add("active");


        /*
            Даём анимации завершиться
            перед переходом на новую страницу
        */

        setTimeout(() => {

            window.location.href = destination;

        }, 1100);

    });

});
