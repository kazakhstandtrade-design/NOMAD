/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.querySelector(".menu-button");
const mobileNavigation = document.querySelector(".mobile-navigation");


if (menuButton && mobileNavigation) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            menuButton.classList.toggle("active");

        mobileNavigation.classList.toggle("open");

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const mobileLinks =
        mobileNavigation.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("active");

            mobileNavigation.classList.remove("open");

            document.body.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}



/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formSuccess =
    document.getElementById("formSuccess");


if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();


        /*
            Сейчас форма работает как frontend-прототип.

            Настоящая отправка сообщений появится,
            когда подключим backend / email-сервис.
        */


        formSuccess.classList.add("show");

        contactForm.reset();


        setTimeout(() => {

            formSuccess.classList.remove("show");

        }, 5000);

    });

}
