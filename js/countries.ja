const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


/*
    ОТКРЫТИЕ / ЗАКРЫТИЕ
    МОБИЛЬНОЙ НАВИГАЦИИ
*/

menuButton.addEventListener("click", () => {

    const isOpen =
        menuButton.classList.toggle("open");

    mobileMenu.classList.toggle("open", isOpen);

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/*
    ЗАКРЫТЬ МЕНЮ ПОСЛЕ
    ПЕРЕХОДА ПО ССЫЛКЕ
*/

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuButton.classList.remove("open");

        mobileMenu.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/*
    ESC — ЗАКРЫТЬ МЕНЮ
*/

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        menuButton.classList.remove("open");

        mobileMenu.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});
