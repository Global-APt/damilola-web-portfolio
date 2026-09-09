document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       EXISTING ACCORDION FUNCTIONALITY
    ========================================================= */

    const accordionItems =
        document.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item) {

        const button =
            item.querySelector(".accordion-header");

        if (!button) return;

        button.addEventListener("click", function () {

            accordionItems.forEach(function (otherItem) {

                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }

            });

            item.classList.toggle("active");

        });

    });


    /* =========================================================
       GLOBAL-APT MOBILE NAVIGATION
       Mobile menu is created ONLY on screens 700px or smaller.
    ========================================================= */

    const navContainer =
        document.querySelector(".nav-container");

    const desktopNavigation =
        document.querySelector(".navigation");

    const header =
        document.querySelector(".header");

    if (!navContainer || !desktopNavigation || !header) {
        return;
    }


    /* =========================================================
       MOBILE NAVIGATION SETUP
    ========================================================= */

    let mobileToggle = null;
    let mobileNavigation = null;


    function createMobileNavigation() {

        /* Prevent duplicate creation */
        if (
            mobileToggle ||
            mobileNavigation
        ) {
            return;
        }


        /* -----------------------------------------------------
           MOBILE MENU BUTTON
        ----------------------------------------------------- */

        mobileToggle =
            document.createElement("button");

        mobileToggle.className =
            "mobile-menu-toggle";

        mobileToggle.type = "button";

        mobileToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        mobileToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;


        /* -----------------------------------------------------
           MOBILE NAVIGATION
        ----------------------------------------------------- */

        mobileNavigation =
            document.createElement("nav");

        mobileNavigation.className =
            "mobile-navigation";

        mobileNavigation.setAttribute(
            "aria-label",
            "Mobile navigation"
        );


        /* -----------------------------------------------------
           COPY DESKTOP NAVIGATION LINKS
        ----------------------------------------------------- */

        const navigationLinks =
            desktopNavigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            const mobileLink =
                document.createElement("a");

            mobileLink.href =
                link.getAttribute("href");

            mobileLink.innerHTML =
                link.innerHTML.trim();

            if (
                link.classList.contains("active")
            ) {
                mobileLink.classList.add("active");
            }

            mobileNavigation.appendChild(
                mobileLink
            );

        });


        /* -----------------------------------------------------
           MOBILE CTA
        ----------------------------------------------------- */

        const mobileCTA =
            document.createElement("a");

        mobileCTA.href =
            "contact.html";

        mobileCTA.className =
            "mobile-navigation-cta";

        mobileCTA.textContent =
            "Let's Talk";

        mobileNavigation.appendChild(
            mobileCTA
        );


        /* -----------------------------------------------------
           INSERT MOBILE CONTROLS
        ----------------------------------------------------- */

        navContainer.appendChild(
            mobileToggle
        );

        header.appendChild(
            mobileNavigation
        );


        /* -----------------------------------------------------
           OPEN MOBILE MENU
        ----------------------------------------------------- */

        function openMobileMenu() {

            mobileNavigation.classList.add(
                "open"
            );

            mobileToggle.classList.add(
                "active"
            );

            mobileToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            mobileToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

            document.body.classList.add(
                "mobile-menu-open"
            );

        }


        /* -----------------------------------------------------
           CLOSE MOBILE MENU
        ----------------------------------------------------- */

        function closeMobileMenu() {

            mobileNavigation.classList.remove(
                "open"
            );

            mobileToggle.classList.remove(
                "active"
            );

            mobileToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            document.body.classList.remove(
                "mobile-menu-open"
            );

        }


        /* -----------------------------------------------------
           TOGGLE MOBILE MENU
        ----------------------------------------------------- */

        mobileToggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const isOpen =
                    mobileNavigation.classList.contains(
                        "open"
                    );

                if (isOpen) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }

            }
        );


        /* -----------------------------------------------------
           CLOSE AFTER CLICKING A LINK
        ----------------------------------------------------- */

        mobileNavigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );

            });


        /* -----------------------------------------------------
           CLOSE WITH ESCAPE
        ----------------------------------------------------- */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    mobileNavigation.classList.contains(
                        "open"
                    )
                ) {

                    closeMobileMenu();

                    mobileToggle.focus();

                }

            }
        );


        /* -----------------------------------------------------
           CLOSE WHEN CLICKING OUTSIDE
        ----------------------------------------------------- */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    mobileNavigation &&
                    mobileToggle &&
                    !mobileNavigation.contains(
                        event.target
                    ) &&
                    !mobileToggle.contains(
                        event.target
                    ) &&
                    mobileNavigation.classList.contains(
                        "open"
                    )
                ) {

                    closeMobileMenu();

                }

            }
        );

    }


    /* =========================================================
       REMOVE MOBILE NAVIGATION
       When returning to desktop width.
    ========================================================= */

    function removeMobileNavigation() {

        if (mobileToggle) {

            mobileToggle.remove();

            mobileToggle = null;

        }

        if (mobileNavigation) {

            mobileNavigation.remove();

            mobileNavigation = null;

        }

        document.body.classList.remove(
            "mobile-menu-open"
        );

    }


    /* =========================================================
       CHECK SCREEN SIZE
    ========================================================= */

    function handleNavigationResize() {

        if (window.innerWidth <= 700) {

            createMobileNavigation();

        } else {

            removeMobileNavigation();

        }

    }


    /* =========================================================
       INITIAL CHECK
    ========================================================= */

    handleNavigationResize();


    /* =========================================================
       RESPONSIVE SCREEN CHANGE
    ========================================================= */

    let resizeTimer;

    window.addEventListener(
        "resize",
        function () {

            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(
                handleNavigationResize,
                100
            );

        }
    );

});
