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
    ========================================================= */

    const navContainer =
        document.querySelector(".nav-container");

    const desktopNavigation =
        document.querySelector(".navigation");

    if (!navContainer || !desktopNavigation) return;


    /* ---------------------------------------------------------
       MOBILE MENU BUTTON
    --------------------------------------------------------- */

    const mobileToggle =
        document.createElement("button");

    mobileToggle.className = "mobile-menu-toggle";

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


    /* ---------------------------------------------------------
       MOBILE NAVIGATION
    --------------------------------------------------------- */

    const mobileNavigation =
        document.createElement("nav");

    mobileNavigation.className =
        "mobile-navigation";

    mobileNavigation.setAttribute(
        "aria-label",
        "Mobile navigation"
    );


    /* Copy desktop navigation links */

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


    /* ---------------------------------------------------------
       MOBILE CTA
    --------------------------------------------------------- */

    const mobileCTA =
        document.createElement("a");

    mobileCTA.href = "contact.html";

    mobileCTA.className =
        "mobile-navigation-cta";

    mobileCTA.textContent =
        "Let's Talk";

    mobileNavigation.appendChild(
        mobileCTA
    );


    /* ---------------------------------------------------------
       INSERT MOBILE CONTROLS
    --------------------------------------------------------- */

    navContainer.appendChild(
        mobileToggle
    );

    document.querySelector(".header")
        .appendChild(mobileNavigation);


    /* ---------------------------------------------------------
       TOGGLE MENU
    --------------------------------------------------------- */

    function toggleMobileMenu() {

        const isOpen =
            mobileNavigation.classList.contains("open");

        if (isOpen) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }

    }


    /* ---------------------------------------------------------
       OPEN
    --------------------------------------------------------- */

    function openMobileMenu() {

        mobileNavigation.classList.add("open");

        mobileToggle.classList.add("active");

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


    /* ---------------------------------------------------------
       CLOSE
    --------------------------------------------------------- */

    function closeMobileMenu() {

        mobileNavigation.classList.remove("open");

        mobileToggle.classList.remove("active");

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


    /* ---------------------------------------------------------
       BUTTON CLICK
    --------------------------------------------------------- */

    mobileToggle.addEventListener(
        "click",
        toggleMobileMenu
    );


    /* ---------------------------------------------------------
       CLOSE AFTER CLICKING A LINK
    --------------------------------------------------------- */

    mobileNavigation
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });


    /* ---------------------------------------------------------
       CLOSE WITH ESCAPE
    --------------------------------------------------------- */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                mobileNavigation.classList.contains("open")
            ) {

                closeMobileMenu();

                mobileToggle.focus();

            }

        }
    );


    /* ---------------------------------------------------------
       CLOSE WHEN CLICKING OUTSIDE
    --------------------------------------------------------- */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !mobileNavigation.contains(event.target) &&
                !mobileToggle.contains(event.target) &&
                mobileNavigation.classList.contains("open")
            ) {

                closeMobileMenu();

            }

        }
    );

});
