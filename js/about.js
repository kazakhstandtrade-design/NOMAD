document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       HERO ANIMATION
    ========================================== */

    const hero = document.querySelector(".about-hero");

    if (hero) {

        requestAnimationFrame(() => {

            hero.classList.add("loaded");

        });

    }



    /* =========================================
       MOBILE MENU
    ========================================== */

    const menuButton =
        document.querySelector(".menu-button");

    const mobileNavigation =
        document.querySelector(".mobile-navigation");


    if (menuButton && mobileNavigation) {


        menuButton.addEventListener("click", () => {


            const isOpen =
                mobileNavigation.classList.toggle("open");


            menuButton.classList.toggle(
                "active",
                isOpen
            );


            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );


            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        const mobileLinks =
            mobileNavigation.querySelectorAll("a");


        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileNavigation.classList.remove("open");

                menuButton.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            });

        });

    }



    /* =========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements =
        document.querySelectorAll(
            ".intro__content, .story__grid, .discover__top, .discover-card, .philosophy__inner, .about-cta__box"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });



    /* =========================================
       PARALLAX HERO
    ========================================== */

    const heroImage =
        document.querySelector(
            ".about-hero__image"
        );


    if (heroImage) {

        window.addEventListener(
            "scroll",
            () => {

                const scrollY =
                    window.scrollY;

                if (scrollY < window.innerHeight) {

                    heroImage.style.transform =
                        `scale(1) translateY(${scrollY * 0.12}px)`;

                }

            },
            {
                passive: true
            }
        );

    }

});
