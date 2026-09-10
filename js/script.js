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

    if (headerLogo) {
        headerLogo.setAttribute("aria-label", "Global-Apt Media & Technologies Home");
    }

    const desktopNavigation = document.querySelector(".navigation");

    if (desktopNavigation) {
        desktopNavigation.setAttribute("aria-label", "Main navigation");
    }

    /* Add the SEO page to every site's primary navigation. */
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

    /* =========================================================
       GLOBAL FOOTER STANDARDIZATION
       ========================================================= */

    const footer = document.querySelector(".footer");

    if (footer) {
        const legacyFooterLogo = footer.querySelector(".logo");
        if (legacyFooterLogo) {
            legacyFooterLogo.remove();
        }

        const footerContent = footer.querySelector(".footer-content");

        if (footerContent) {
            let footerBrand = footerContent.querySelector(".footer-brand");

            if (!footerBrand) {
                footerBrand = document.createElement("div");
                footerBrand.className = "footer-brand";
                footerBrand.innerHTML = `
                    <strong>GLOBAL-APT</strong>
                    <span>Media &amp; Technologies</span>
                `;

                const footerCopyExisting = footerContent.querySelector(".footer-copy");
                footerContent.insertBefore(footerBrand, footerCopyExisting || null);
            }
        }

        const footerCopy = footer.querySelector(".footer-copy");

        if (footerCopy) {
            footerCopy.innerHTML = `
                <p>© 2026 Global-Apt Media &amp; Technologies.</p>
                <p>Founded by Akinrefon Damilola Rufus. All rights reserved.</p>
            `;
        }
    }

    /* =========================================================
       PORTFOLIO RESPONSIVE SPACING
       Existing design preserved; only portfolio spacing is refined.
    ========================================================= */

    if (window.location.pathname.endsWith("/portfolio.html")) {
        const portfolioStyle = document.createElement("style");
        portfolioStyle.textContent = `
            .projects-section {
                padding: 82px 0 !important;
            }

            .projects-intro {
                margin-bottom: 38px !important;
            }

            .laim-panel,
            .mrgs-panel,
            .case-panel {
                padding: 32px !important;
            }

            .laim-project-header,
            .mrgs-project-header {
                gap: 45px !important;
                margin-bottom: 32px !important;
            }

            .laim-responsibilities,
            .mrgs-technology {
                margin-top: 30px !important;
                padding-top: 30px !important;
            }

            .portfolio-tools {
                padding: 72px 0 !important;
            }

            .portfolio-final-cta {
                padding: 78px 0 !important;
            }

            .portfolio-final-cta .container {
                max-width: 900px;
            }

            .portfolio-final-cta h2 {
                margin-bottom: 16px !important;
            }

            .portfolio-final-cta p {
                margin-bottom: 25px !important;
            }

            @media (max-width: 700px) {
                .projects-section {
                    padding: 55px 0 !important;
                }

                .projects-intro {
                    margin-bottom: 28px !important;
                }

                .projects-intro h2 {
                    font-size: 30px !important;
                    line-height: 1.18 !important;
                }

                .project-accordion {
                    gap: 10px !important;
                }

                .project-trigger {
                    grid-template-columns: 34px 1fr 30px !important;
                    padding: 18px 16px !important;
                }

                .project-trigger-content strong {
                    font-size: 16px !important;
                    line-height: 1.35 !important;
                }

                .project-trigger-content span {
                    font-size: 12px !important;
                    line-height: 1.5 !important;
                }

                .project-icon {
                    width: 28px !important;
                    height: 28px !important;
                    font-size: 18px !important;
                }

                .laim-panel,
                .mrgs-panel,
                .case-panel {
                    padding: 22px 16px !important;
                }

                .laim-project-header,
                .mrgs-project-header {
                    gap: 22px !important;
                    margin-bottom: 28px !important;
                }

                .laim-project-header h2,
                .mrgs-project-header h2,
                .case-header h2 {
                    font-size: 28px !important;
                    line-height: 1.2 !important;
                }

                .laim-gallery,
                .mrgs-gallery {
                    grid-template-columns: 1fr !important;
                    gap: 14px !important;
                }

                .mrgs-image-card:nth-child(3) {
                    grid-column: auto !important;
                }

                .laim-responsibility-grid,
                .mrgs-feature-grid,
                .case-steps {
                    grid-template-columns: 1fr !important;
                }

                .mrgs-feature,
                .case-step {
                    border-right: none !important;
                    border-bottom: 1px solid #dedbd4 !important;
                }

                .mrgs-feature:last-child,
                .case-step:last-child {
                    border-bottom: none !important;
                }

                .portfolio-tools {
                    padding: 55px 0 !important;
                }

                .tools-list {
                    margin-top: 22px !important;
                    gap: 8px !important;
                }

                .tools-list span {
                    padding: 8px 11px !important;
                }

                .portfolio-final-cta {
                    padding: 52px 0 !important;
                }

                .portfolio-final-cta h2 {
                    font-size: 29px !important;
                    line-height: 1.2 !important;
                    margin-bottom: 14px !important;
                }

                .portfolio-final-cta p {
                    font-size: 15px !important;
                    line-height: 1.7 !important;
                    margin-bottom: 22px !important;
                }

                .portfolio-final-cta .btn {
                    width: 100%;
                    text-align: center;
                }
            }
        `;
        document.head.appendChild(portfolioStyle);

        const portfolioSections = Array.from(document.querySelectorAll("main section"));
        const portfolioFinalCta = portfolioSections.find(function (section) {
            const text = section.textContent.toLowerCase();
            return text.includes("need reliable") &&
                   (text.includes("support your website") || text.includes("keep your website"));
        });

        if (portfolioFinalCta) {
            portfolioFinalCta.classList.add("portfolio-final-cta");
        }
    }

    /* =========================================================
       EXISTING ACCORDION FUNCTIONALITY
    ========================================================= */

    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item) {
        const button = item.querySelector(".accordion-header");
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

    const navContainer = document.querySelector(".nav-container");
    const header = document.querySelector(".header");

    if (!navContainer || !desktopNavigation || !header) {
        return;
    }

    let mobileToggle = null;
    let mobileNavigation = null;
    let mobileBackdrop = null;

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

        mobileBackdrop = document.createElement("div");
        mobileBackdrop.className = "mobile-menu-backdrop";
        mobileBackdrop.setAttribute("aria-hidden", "true");
        Object.assign(mobileBackdrop.style, {
            position: "fixed",
            left: "0",
            right: "0",
            bottom: "0",
            top: "68px",
            background: "#ffffff",
            zIndex: "9998",
            display: "none"
        });

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
        header.appendChild(mobileBackdrop);
        header.appendChild(mobileNavigation);

        function openMobileMenu() {
            mobileNavigation.classList.add("open");
            mobileToggle.classList.add("active");
            mobileToggle.setAttribute("aria-expanded", "true");
            mobileToggle.setAttribute("aria-label", "Close navigation menu");
            mobileBackdrop.style.display = "block";
            document.body.classList.add("mobile-menu-open");
        }

        function closeMobileMenu() {
            mobileNavigation.classList.remove("open");
            mobileToggle.classList.remove("active");
            mobileToggle.setAttribute("aria-expanded", "false");
            mobileToggle.setAttribute("aria-label", "Open navigation menu");
            mobileBackdrop.style.display = "none";
            document.body.classList.remove("mobile-menu-open");
        }

        mobileToggle.addEventListener("click", function (event) {
            event.stopPropagation();

            const isOpen = mobileNavigation.classList.contains("open");

            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        mobileBackdrop.addEventListener("click", closeMobileMenu);

        mobileNavigation.querySelectorAll("a").forEach(function (link) {
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

    function removeMobileNavigation() {
        if (mobileToggle) {
            mobileToggle.remove();
            mobileToggle = null;
        }

        if (mobileNavigation) {
            mobileNavigation.remove();
            mobileNavigation = null;
        }

        if (mobileBackdrop) {
            mobileBackdrop.remove();
            mobileBackdrop = null;
        }

        document.body.classList.remove("mobile-menu-open");
    }

    function handleNavigationResize() {
        if (window.innerWidth <= 700) {
            createMobileNavigation();
        } else {
            removeMobileNavigation();
        }
    }

    handleNavigationResize();

    let resizeTimer;

    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(
            handleNavigationResize,
            100
        );
    });

});