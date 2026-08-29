/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.querySelector(".contacts-menu-button");


const mobileNavigation =
    document.querySelector(".contacts-mobile-navigation");


if (menuButton && mobileNavigation) {


    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNavigation.classList.contains("open");


            mobileNavigation.classList.toggle("open");

            menuButton.classList.toggle("active");


            document.body.classList.toggle(
                "menu-open"
            );


            menuButton.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        }
    );


    const mobileLinks =
        mobileNavigation.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mobileNavigation.classList.remove(
                    "open"
                );

                menuButton.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}



/* =========================================
   CONTACT FORM
========================================= */

const contactsForm =
    document.querySelector("#contactsForm");


const contactsSuccess =
    document.querySelector("#contactsSuccess");


const sendAnotherMessage =
    document.querySelector("#sendAnotherMessage");



if (
    contactsForm &&
    contactsSuccess
) {


    contactsForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            /*
                Здесь пока нет настоящей отправки
                на сервер.

                Для фронтенд-прототипа мы просто
                показываем сообщение об успехе.
            */


            contactsForm.style.display =
                "none";


            contactsSuccess.classList.add(
                "show"
            );

        }
    );

}



/* =========================================
   SEND ANOTHER MESSAGE
========================================= */

if (
    sendAnotherMessage &&
    contactsForm &&
    contactsSuccess
) {


    sendAnotherMessage.addEventListener(
        "click",
        () => {

            contactsSuccess.classList.remove(
                "show"
            );


            contactsForm.style.display =
                "block";


            contactsForm.reset();


            contactsForm.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}



/* =========================================
   ESCAPE — CLOSE MOBILE MENU
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            mobileNavigation &&
            mobileNavigation.classList.contains("open")
        ) {

            mobileNavigation.classList.remove(
                "open"
            );

            menuButton.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "menu-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);
