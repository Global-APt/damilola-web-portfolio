document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       GLOBAL-APT SITE STANDARDIZATION
    ========================================================= */

    const headerLogo = document.querySelector(".header .logo");

    if (headerLogo && !headerLogo.querySelector("img")) {
        headerLogo.innerHTML = `
            <img
                src="images/global-apt-logo-webp.webp"
                alt="Global-Apt Media & Technologies"
                class="site-logo"
            >
        `;
        headerLogo.setAttribute("aria-label", "Global-Apt Media & Technologies Home");
    }

    const footerLogo = document.querySelector(".footer .logo");

    if (footerLogo && !footerLogo.querySelector("img")) {
        footerLogo.innerHTML = `
            <img
                src="images/global-apt-logo-webp.webp"
                alt="Global-Apt Media & Technologies"
                class="site-logo"
            >
        `;
        footerLogo.setAttribute("aria-label", "Global-Apt Media & Technologies Home");
    }

    const desktopNavigation = document.querySelector(".navigation");

    if (desktopNavigation && !desktopNavigation.querySelector('a[href="seo.html"]')) {
        const seoLink = document.createElement("a");
        seoLink.href = "seo.html";
        seoLink.textContent = "SEO";

        if (window.location.pathname.endsWith("/seo.html")) {
            seoLink.classList.add("active");
        }

        desktopNavigation.insertBefore(
            seoLink,
            desktopNavigation.querySelector('a[href="portfolio.html"]') || null
        );
    }

    const footerCopy = document.querySelector(".footer-copy");

    if (footerCopy) {
        footerCopy.innerHTML = `
            <p>© 2026 Global-Apt Media &amp; Technologies.</p>
            <p>Founded by Akinrefon Damilola Rufus. All rights reserved.</p>
        `;
    }


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

        if (mobileToggle || mobileNavigation) {
            return;
        }

        mobileToggle = document.createElement("button");
        mobileToggle.className = "mobile-menu-toggle";
        mobileToggle.type = "button";
        mobileToggle.setAttribute("aria-label", "Open navigation menu");
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        mobileNavigation = document.createElement("nav");
        mobileNavigation.className = "mobile-navigation";
        mobileNavigation.setAttribute("aria-label", "Mobile navigation");

        const navigationLinks = desktopNavigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            const mobileLink = document.createElement("a");
            mobileLink.href = link.getAttribute("href");
            mobileLink.innerHTML = link.innerHTML.trim();

            if (link.classList.contains("active")) {
                mobileLink.classList.add("active");
            }

            mobileNavigation.appendChild(mobileLink);
        });

        const mobileCTA = document.createElement("a");
        mobileCTA.href = "contact.html";
        mobileCTA.className = "mobile-navigation-cta";
        mobileCTA.textContent = "Let's Talk";
        mobileNavigation.appendChild(mobileCTA);

        navContainer.appendChild(mobileToggle);
        header.appendChild(mobileNavigation);

        function openMobileMenu() {
            mobileNavigation.classList.add("open");
            mobileToggle.classList.add("active");
            mobileToggle.setAttribute("aria-expanded", "true");
            mobileToggle.setAttribute("aria-label", "Close navigation menu");
            document.body.classList.add("mobile-menu-open");
        }

        function closeMobileMenu() {
            mobileNavigation.classList.remove("open");
            mobileToggle.classList.remove("active");
            mobileToggle.setAttribute("aria-expanded", "false");
            mobileToggle.setAttribute("aria-label", "Open navigation menu");
            document.body.classList.remove("mobile-menu-open");
        }

        mobileToggle.addEventListener("click", function (event) {
            event.stopPropagation();

            const isOpen =
                mobileNavigation.classList.contains("open");

            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        mobileNavigation
            .querySelectorAll("a")
            .forEach(function (link) {
                link.addEventListener("click", closeMobileMenu);
            });

        document.addEventListener("keydown", function (event) {
            if (
                event.key === "Escape" &&
                mobileNavigation.classList.contains("open")
            ) {
                closeMobileMenu();
                mobileToggle.focus();
            }
        });

        document.addEventListener("click", function (event) {
            if (
                mobileNavigation &&
                mobileToggle &&
                !mobileNavigation.contains(event.target) &&
                !mobileToggle.contains(event.target) &&
                mobileNavigation.classList.contains("open")
            ) {
                closeMobileMenu();
            }
        });
    }


    /* =========================================================
       REMOVE MOBILE NAVIGATION
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

        document.body.classList.remove("mobile-menu-open");
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

    window.addEventListener("resize", function () {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(
            handleNavigationResize,
            100
        );
    });

});