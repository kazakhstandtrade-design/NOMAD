const countryCards = document.querySelectorAll(".country-card");

const transition = document.querySelector(".transition");
const transitionImage = document.querySelector(".transition-image");
const transitionTitle = document.querySelector(".transition-title");


countryCards.forEach(card => {

    card.addEventListener("click", function (event) {

        event.preventDefault();

        const image =
            this.style.backgroundImage;

        const country =
            this.dataset.country;

        const destination =
            this.getAttribute("href");


        transitionImage.style.backgroundImage =
            image;

        transitionTitle.textContent =
            country;


        transition.classList.add("active");


        setTimeout(() => {

            window.location.href =
                destination;

        }, 1150);

    });

});
