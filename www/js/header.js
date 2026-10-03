/* ============================================================
   VARMA FANCY NUMBERS
   COMPLETE WORKING JAVASCRIPT
   NO CDN / NO EXTERNAL JS PACKAGES
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* ============================================================
       HELPERS
    ============================================================ */

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);


    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];


    function formatPrice(price) {

        return Number(price || 0)
            .toLocaleString("en-IN");

    }


    function scrollToElement(selector) {

        const element = $(selector);

        if (!element) {
            return;
        }

        element.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    /* ============================================================
       TOAST
    ============================================================ */

    const toast =
        $("#toastMessage") ||
        $("#varmaToast");


    function showToast(message) {

        if (!toast) {

            console.log(message);

            return;
        }

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(showToast.timer);

        showToast.timer =
            setTimeout(() => {

                toast.classList.remove("show");

            }, 2400);

    }


    /* ============================================================
       OPERATOR DATA
    ============================================================ */

    const operatorData = {

        Airtel: {
            logo: "img/airtel.png",
            className: "airtel"
        },

        Jio: {
            logo: "img/jio.png",
            className: "jio"
        },

        VI: {
            logo: "img/idea.png",
            className: "vi"
        },

        BSNL: {
            logo: "img/bsnl.png",
            className: "bsnl"
        }

    };


    /* ============================================================
       50 FANCY NUMBERS
    ============================================================ */

    const fancyNumbers = [


        {
            operator: "Jio",
            number: "88888 55555",
            price: 49999,
            oldPrice: 69999,
            premium: true,
            offer: true
        },


        {
            operator: "BSNL",
            number: "70707 70707",
            price: 19999,
            oldPrice: 29999,
            premium: true,
            offer: true
        },

        {
            operator: "Airtel",
            number: "99999 00000",
            price: 59999,
            premium: true,
            offer: true
        },

        {
            operator: "Jio",
            number: "77777 88888",
            price: 39999,
            premium: true,
            offer: true
        },

        {
            operator: "Airtel",
            number: "90000 99999",
            price: 29999,
            oldPrice: 39999,
            premium: true,
            offer: true
        },

        {
            operator: "Airtel",
            number: "88888 12345",
            price: 44999,
            oldPrice: 59999,
            premium: true,
            offer: true
        },

        {
            operator: "Jio",
            number: "90000 77777",
            price: 34999,
            premium: true,
            offer: true
        },

        {
            operator: "BSNL",
            number: "66666 66666",
            price: 29999,
            oldPrice: 44999,
            premium: true,
            offer: true
        },

        {
            operator: "Airtel",
            number: "70000 70000",
            price: 24999,
            premium: true,
            offer: true
        },

        {
            operator: "Jio",
            number: "99999 11111",
            price: 54999,
            oldPrice: 69999,
            premium: true,
            offer: true
        },

        {
            operator: "VI",
            number: "88888 00000",
            price: 39999,
            premium: true,
            offer: true
        },


        {
            operator: "Airtel",
            number: "77777 00000",
            price: 29999,
            oldPrice: 39999,
            premium: true,
            offer: true
        },


        {
            operator: "VI",
            number: "99999 88888",
            price: 69999,
            oldPrice: 89999,
            premium: true,
            offer: true
        },

        {
            operator: "BSNL",
            number: "55555 55555",
            price: 24999,
            premium: true,
            offer: true
        },

        {
            operator: "VI",
            number: "70000 12345",
            price: 11999,
            oldPrice: 15999,
            premium: false,
            offer: true
        },

        {
            operator: "BSNL",
            number: "88888 99999",
            price: 49999,
            oldPrice: 64999,
            premium: true,
            offer: true
        },

        {
            operator: "Airtel",
            number: "78787 78787",
            price: 21999,
            premium: true,
            offer: true
        },

        {
            operator: "BSNL",
            number: "77777 77777",
            price: 59999,
            oldPrice: 79999,
            premium: true,
            offer: true
        },

        {
            operator: "Airtel",
            number: "90909 99999",
            price: 44999,
            oldPrice: 59999,
            premium: true,
            offer: true
        },

        {
            operator: "VI",
            number: "88888 77777",
            price: 39999,
            oldPrice: 54999,
            premium: true,
            offer: true
        },

        {
            operator: "Airtel",
            number: "99999 99999",
            price: 89999,
            oldPrice: 119999,
            premium: true,
            offer: true
        },

        {
            operator: "VI",
            number: "90009 90009",
            price: 22999,
            oldPrice: 29999,
            premium: true,
            offer: true
        },


        {
            operator: "Airtel",
            number: "88888 88888",
            price: 74999,
            oldPrice: 99999,
            premium: true,
            offer: true
        },

        {
            operator: "Jio",
            number: "70000 70000",
            price: 29999,
            premium: true,
            offer: true
        },


        {
            operator: "BSNL",
            number: "80808 80808",
            price: 19999,
            oldPrice: 24999,
            premium: false,
            offer: true
        },

        {
            operator: "Airtel",
            number: "66666 00000",
            price: 22999,
            premium: true,
            offer: true
        },

        {
            operator: "Jio",
            number: "99999 55555",
            price: 49999,
            oldPrice: 64999,
            premium: true,
            offer: true
        },


        {
            operator: "BSNL",
            number: "99999 11111",
            price: 34999,
            premium: true,
            offer: true
        },

        {
            operator: "Airtel",
            number: "90000 90000",
            price: 39999,
            oldPrice: 49999,
            premium: true,
            offer: true
        },

        {
            operator: "BSNL",
            number: "55555 00000",
            price: 24999,
            oldPrice: 34999,
            premium: true,
            offer: true
        }

    ];




    /* =========================================================
   NUMBER CATEGORY CARDS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const categoryCards =
        document.querySelectorAll(
            ".number-category-card"
        );


    const exploreButtons =
        document.querySelectorAll(
            ".category-explore-btn"
        );


    function openCategory(category) {

        /*
         * If your existing filterByCategory()
         * function is available, use it.
         */

        if (
            typeof filterByCategory ===
            "function"
        ) {

            filterByCategory(
                category
            );

            return;
        }


        /*
         * Otherwise scroll to Featured section.
         */

        const featured =
            document.querySelector(
                "#featured"
            );


        if (featured) {

            featured.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }


    /* =====================================================
       CARD CLICK
    ===================================================== */

    categoryCards.forEach(
        card => {

            card.addEventListener(
                "click",
                event => {

                    /*
                     * Don't trigger twice
                     * when button itself is clicked.
                     */

                    if (
                        event.target.closest(
                            ".category-explore-btn"
                        )
                    ) {

                        return;
                    }


                    const category =
                        card.dataset.category;


                    openCategory(
                        category
                    );

                }
            );

        }
    );


    /* =====================================================
       EXPLORE NOW BUTTON
    ===================================================== */

    exploreButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    const category =
                        button.dataset.category;


                    openCategory(
                        category
                    );

                }
            );

        }
    );

});





    /* ============================================================
       DATE & TIME
    ============================================================ */

    function updateDateTime() {

        const now = new Date();

        const dateText =
            now.toLocaleDateString(
                "en-IN",
                {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            );

        let hours = now.getHours();

        const minutes =
            String(now.getMinutes())
                .padStart(2, "0");

        const seconds =
            String(now.getSeconds())
                .padStart(2, "0");

        const ampm =
            hours >= 12
                ? "PM"
                : "AM";

        hours =
            hours % 12 || 12;

        const dateElement =
            $("#currentDate");

        const timeElement =
            $("#currentTime");

        if (dateElement) {

            dateElement.textContent =
                dateText;
        }

        if (timeElement) {

            timeElement.textContent =
                `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
        }

    }


    updateDateTime();

    setInterval(
        updateDateTime,
        1000
    );

    /* =========================================================
   WHY VARMA FEATURE ANIMATION
========================================================= */

const whyFeatures =
    $$(".why-feature");


if (whyFeatures.length) {

    whyFeatures.forEach(
        (feature, index) => {

            feature.style.opacity = "0";

            feature.style.transform =
                "translateY(10px)";

            feature.style.transition =
                `
                opacity .45s ease,
                transform .45s ease
                `;

            feature.style.transitionDelay =
                `${index * 0.08}s`;

        }
    );


    const whySection =
        $(".why-varma-section");


    if (
        whySection &&
        "IntersectionObserver" in window
    ) {

        const whyObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                whyFeatures.forEach(
                                    feature => {

                                        feature.style.opacity =
                                            "1";

                                        feature.style.transform =
                                            "translateY(0)";

                                    }
                                );


                                whyObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        whyObserver.observe(
            whySection
        );

    } else {

        whyFeatures.forEach(
            feature => {

                feature.style.opacity =
                    "1";

                feature.style.transform =
                    "translateY(0)";

            }
        );

    }

}



/* =========================================================
   HAPPY CUSTOMERS - CONTINUOUS REVIEW SLIDER
========================================================= */

const viewport =
    document.getElementById(
        "reviewsViewport"
    );

const track =
    document.getElementById(
        "reviewsTrack"
    );

const prevButton =
    document.getElementById(
        "reviewsPrev"
    );

const nextButton =
    document.getElementById(
        "reviewsNext"
    );


if (
    viewport &&
    track
) {

    const AUTO_SPEED = 0.35;

    const BUTTON_MOVE = 320;

    let position = 0;

    let animationFrame = null;

    let isPaused = false;

    let isButtonMoving = false;


    /* =================================================
       ORIGINAL CARDS
    ================================================= */

    const originalCards =
        Array.from(
            track.children
        );


    if (
        originalCards.length
    ) {

        originalCards.forEach(
            card => {

                const clone =
                    card.cloneNode(true);

                clone.setAttribute(
                    "aria-hidden",
                    "true"
                );

                track.appendChild(
                    clone
                );

            }
        );


        /* =================================================
           LOOP WIDTH
        ================================================= */

        let loopWidth = 0;


        function calculateLoopWidth() {

            const cards =
                track.children;

            const half =
                cards.length / 2;


            if (
                cards.length < 2
            ) {
                return;
            }


            const firstCard =
                cards[0];

            const secondCard =
                cards[1];


            const cardWidth =
                firstCard.getBoundingClientRect()
                    .width;


            const gap =
                secondCard.getBoundingClientRect()
                    .left
                -
                firstCard.getBoundingClientRect()
                    .right;


            loopWidth =
                (
                    cardWidth + gap
                ) * half;

        }


        calculateLoopWidth();


        /* =================================================
           NORMALIZE
        ================================================= */

        function normalizePosition() {

            if (
                loopWidth <= 0
            ) {
                return;
            }


            while (
                position <= -loopWidth
            ) {

                position +=
                    loopWidth;

            }


            while (
                position > 0
            ) {

                position -=
                    loopWidth;

            }

        }


        /* =================================================
           RENDER
        ================================================= */

        function renderPosition() {

            track.style.transform =
                `translate3d(
                    ${position}px,
                    0,
                    0
                )`;

        }


        /* =================================================
           AUTO SLIDE
        ================================================= */

        function animate() {

            if (
                !isPaused &&
                !isButtonMoving
            ) {

                position -=
                    AUTO_SPEED;

                normalizePosition();

                renderPosition();

            }


            animationFrame =
                requestAnimationFrame(
                    animate
                );

        }


        animate();


        /* =================================================
           PAUSE ON HOVER
        ================================================= */

        viewport.addEventListener(
            "mouseenter",
            () => {

                isPaused = true;

            }
        );


        viewport.addEventListener(
            "mouseleave",
            () => {

                isPaused = false;

            }
        );


        /* =================================================
           TOUCH PAUSE
        ================================================= */

        viewport.addEventListener(
            "touchstart",
            () => {

                isPaused = true;

            },
            {
                passive: true
            }
        );


        viewport.addEventListener(
            "touchend",
            () => {

                isPaused = false;

            },
            {
                passive: true
            }
        );


        /* =================================================
           MANUAL MOVE
        ================================================= */

        function manualMove(
            direction
        ) {

            if (
                isButtonMoving
            ) {
                return;
            }


            isButtonMoving = true;


            position +=
                direction *
                BUTTON_MOVE;


            normalizePosition();


            track.style.transition =
                "transform .55s cubic-bezier(.2,.8,.2,1)";


            renderPosition();


            setTimeout(
                () => {

                    track.style.transition =
                        "none";

                    isButtonMoving =
                        false;

                },
                570
            );

        }


        /* =================================================
           PREVIOUS
        ================================================= */

        if (
            prevButton
        ) {

            prevButton.addEventListener(
                "click",
                () => {

                    manualMove(
                        1
                    );

                }
            );

        }


        /* =================================================
           NEXT
        ================================================= */

        if (
            nextButton
        ) {

            nextButton.addEventListener(
                "click",
                () => {

                    manualMove(
                        -1
                    );

                }
            );

        }


        /* =================================================
           RESIZE
        ================================================= */

        window.addEventListener(
            "resize",
            () => {

                calculateLoopWidth();

                normalizePosition();

                renderPosition();

            }
        );


        /* =================================================
           MOUSE DRAG
        ================================================= */

        let isDragging = false;

        let startX = 0;

        let startPosition = 0;


        viewport.addEventListener(
            "mousedown",
            event => {

                isDragging = true;

                isPaused = true;

                startX =
                    event.clientX;

                startPosition =
                    position;

                viewport.style.cursor =
                    "grabbing";

            }
        );


        window.addEventListener(
            "mousemove",
            event => {

                if (
                    !isDragging
                ) {
                    return;
                }


                const difference =
                    event.clientX -
                    startX;


                position =
                    startPosition +
                    difference;


                normalizePosition();

                renderPosition();

            }
        );


        window.addEventListener(
            "mouseup",
            () => {

                if (
                    !isDragging
                ) {
                    return;
                }


                isDragging = false;

                isPaused = false;

                viewport.style.cursor = "";

            }
        );


        /* =================================================
           CLEANUP
        ================================================= */

        window.addEventListener(
            "beforeunload",
            () => {

                if (
                    animationFrame
                ) {

                    cancelAnimationFrame(
                        animationFrame
                    );

                }

            }
        );

    }

}


/* =========================================================
   FOOTER
========================================================= */


/* =========================================================
   CURRENT YEAR
========================================================= */

const footerYear =
    document.getElementById(
        "footerYear"
    );

if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   FOOTER SMOOTH LINKS
========================================================= */

const footerLinks =
    document.querySelectorAll(
        ".site-footer a[href^='#']"
    );


footerLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    event.preventDefault();

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }
);


/* =========================================================
   FOOTER SOCIAL / PAYMENT HOVER
========================================================= */

const footerPaymentLogos =
    document.querySelectorAll(
        ".payment-logo"
    );


footerPaymentLogos.forEach(
    logo => {

        logo.addEventListener(
            "mouseenter",
            () => {

                logo.style.transform =
                    "translateY(-2px)";

            }
        );


        logo.addEventListener(
            "mouseleave",
            () => {

                logo.style.transform =
                    "translateY(0)";

            }
        );

    }
);


    /* ============================================================
       LANGUAGE DROPDOWN
    ============================================================ */

    const languageButton =
        $("#languageButton");

    const languageMenu =
        $("#languageMenu");

    const selectedLanguage =
        $("#selectedLanguage");


    if (
        languageButton &&
        languageMenu
    ) {

        languageButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                languageMenu.classList.toggle(
                    "open"
                );

            }
        );


        $$("#languageMenu button").forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        const language =
                            button.dataset.language;

                        if (selectedLanguage) {

                            selectedLanguage.textContent =
                                language === "te"
                                    ? "తెలుగు"
                                    : "English";
                        }


                        languageMenu.classList.remove(
                            "open"
                        );


                        if (language === "te") {

                            $("#headerSearch")?.setAttribute(
                                "placeholder",
                                "మీ లక్కీ నంబర్ కోసం వెతకండి..."
                            );

                            if ($("#loginGreeting")) {
                                $("#loginGreeting").textContent =
                                    "హలో, లాగిన్ చేయండి";
                            }

                            if ($("#loginRegisterText")) {
                                $("#loginRegisterText").textContent =
                                    "లాగిన్ / రిజిస్టర్";
                            }

                        } else {

                            $("#headerSearch")?.setAttribute(
                                "placeholder",
                                "Search your lucky number..."
                            );

                            if ($("#loginGreeting")) {
                                $("#loginGreeting").textContent =
                                    "Hello, Please Login";
                            }

                            if ($("#loginRegisterText")) {
                                $("#loginRegisterText").textContent =
                                    "Login / Register";
                            }

                        }


                        showToast(
                            language === "te"
                                ? "తెలుగు భాష ఎంపిక చేయబడింది"
                                : "English language selected"
                        );

                    }
                );

            }
        );


        document.addEventListener(
            "click",
            event => {

                if (
                    !languageMenu.contains(
                        event.target
                    ) &&
                    event.target !== languageButton
                ) {

                    languageMenu.classList.remove(
                        "open"
                    );
                }

            }
        );

    }


    /* ============================================================
       CATEGORY DROPDOWN
    ============================================================ */

    const categoryButton =
        $("#categoryButton");

    const categoryDropdown =
        $(".nav-dropdown");

    const categoryMenu =
        $("#categoryMenu");


    if (
        categoryButton &&
        categoryDropdown
    ) {

        categoryButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                categoryDropdown.classList.toggle(
                    "open"
                );

            }
        );


        if (categoryMenu) {

            $$("#categoryMenu button").forEach(
                button => {

                    button.addEventListener(
                        "click",
                        event => {

                            event.stopPropagation();

                            const category =
                                button.dataset.category ||
                                button.textContent.trim();

                            categoryDropdown.classList.remove(
                                "open"
                            );

                            filterByCategory(
                                category
                            );

                        }
                    );

                }
            );

        }


        document.addEventListener(
            "click",
            event => {

                if (
                    !categoryDropdown.contains(
                        event.target
                    )
                ) {

                    categoryDropdown.classList.remove(
                        "open"
                    );
                }

            }
        );

    }


    /* ============================================================
       CATEGORY CARDS
    ============================================================ */

    $$(".category-card").forEach(
        card => {

            card.addEventListener(
                "click",
                () => {

                    filterByCategory(
                        card.dataset.category
                    );

                }
            );

        }
    );


    function filterByCategory(category) {

        const lower =
            String(category || "")
                .toLowerCase();


        let filtered =
            [...fancyNumbers];


        if (
            lower.includes("vip") ||
            lower.includes("premium")
        ) {

            filtered =
                fancyNumbers.filter(
                    item =>
                        item.premium
                );

        } else if (
            lower.includes("business")
        ) {

            filtered =
                fancyNumbers.filter(
                    item =>
                        item.number.includes("00")
                );

        } else if (
            lower.includes("repeating")
        ) {

            filtered =
                fancyNumbers.filter(
                    item => {

                        const number =
                            item.number
                                .replace(/\s/g, "");

                        return /(.)\1{3,}/.test(
                            number
                        );

                    }
                );

        } else if (
            lower.includes("sequence")
        ) {

            filtered =
                fancyNumbers.filter(
                    item =>
                        item.number
                            .replace(/\s/g, "")
                            .includes("12345")
                );

        } else if (
            lower.includes("budget")
        ) {

            filtered =
                fancyNumbers.filter(
                    item =>
                        item.price <= 20000
                );

        } else if (
            lower.includes("lucky")
        ) {

            filtered =
                fancyNumbers.filter(
                    item =>
                        item.number
                            .replace(/\s/g, "")
                            .includes("7")
                );

        }


        currentNumbers =
            filtered;

        visibleCards =
            cardsPerLoad;

        renderCards();

        scrollToElement(
            "#featured"
        );

        showToast(
            `${filtered.length} ${category} found`
        );

    }


    /* ============================================================
       NAV ACTIVE STATE
    ============================================================ */

    $$(".nav-link").forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    $$(".nav-link").forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );

                    link.classList.add(
                        "active"
                    );

                }
            );

        }
    );


    /* ============================================================
       HERO SLIDER
    ============================================================ */

    const heroSlides =
        $$(".hero-slide");

    const sliderDots =
        $$(".slider-dots .dot");

    let currentSlide = 0;

    let sliderTimer = null;


    function showSlide(index) {

        if (!heroSlides.length) {
            return;
        }

        currentSlide =
            (index + heroSlides.length) %
            heroSlides.length;


        heroSlides.forEach(
            (slide, i) => {

                slide.classList.toggle(
                    "active",
                    i === currentSlide
                );

            }
        );


        sliderDots.forEach(
            (dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === currentSlide
                );

            }
        );

    }


    function startHeroSlider() {

        clearInterval(
            sliderTimer
        );

        if (heroSlides.length <= 1) {
            return;
        }

        sliderTimer =
            setInterval(
                () => {

                    showSlide(
                        currentSlide + 1
                    );

                },
                2000
            );

    }


    if (heroSlides.length) {

        showSlide(0);

        startHeroSlider();


        sliderDots.forEach(
            (dot, index) => {

                dot.addEventListener(
                    "click",
                    () => {

                        showSlide(index);

                        startHeroSlider();

                    }
                );

            }
        );

    }


    /* ============================================================
       OPERATOR DROPDOWN
    ============================================================ */

    const operatorWrapper =
        $(".operator-select-wrapper");

    const operatorButton =
        $("#operatorSelect");

    const selectedOperator =
        $("#selectedOperator");

    const operatorMenu =
        $("#operatorMenu");


    if (
        operatorButton &&
        operatorWrapper
    ) {

        operatorButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                operatorWrapper.classList.toggle(
                    "open"
                );

            }
        );


        $$("#operatorMenu button").forEach(
            option => {

                option.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        const value =
                            option.dataset.operator ||
                            "All";


                        if (selectedOperator) {

                            selectedOperator.textContent =
                                value === "All"
                                    ? "All Operators"
                                    : value;
                        }


                        $$("#operatorMenu button")
                            .forEach(
                                item =>
                                    item.classList.remove(
                                        "selected"
                                    )
                            );


                        option.classList.add(
                            "selected"
                        );


                        operatorWrapper.classList.remove(
                            "open"
                        );


                        runNumberFilter();

                    }
                );

            }
        );


        document.addEventListener(
            "click",
            event => {

                if (
                    !operatorWrapper.contains(
                        event.target
                    )
                ) {

                    operatorWrapper.classList.remove(
                        "open"
                    );
                }

            }
        );

    }


    /* ============================================================
       FEATURED
    ============================================================ */

    const cardsPerLoad = 8;

    let visibleCards = 8;

    let currentNumbers =
        [...fancyNumbers];


    const fancyGrid =
        $("#fancyNumberGrid");

    const loadMoreBtn =
        $("#loadMoreBtn");

    const cardsCount =
        $("#cardsCount");

    const featuredViewAll =
        $("#featuredViewAll") ||
        $(".featured-view-all");


    const countdownTimers =
        new Map();


    /* ============================================================
       ICONS
    ============================================================ */

    const heartIcon = `
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
            />
        </svg>
    `;


    const cartIcon = `
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <circle
                cx="9"
                cy="20"
                r="1.5"
            ></circle>

            <circle
                cx="18"
                cy="20"
                r="1.5"
            ></circle>

            <path
                d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H7"
            ></path>
        </svg>
    `;


    /* ============================================================
       CLEAR COUNTDOWNS
    ============================================================ */

    function clearCountdowns() {

        countdownTimers.forEach(
            timer =>
                clearInterval(timer)
        );

        countdownTimers.clear();

    }


    /* ============================================================
       CREATE CARD
    ============================================================ */

    function createFancyCard(
        item,
        index
    ) {

        const operator =
            operatorData[item.operator] ||
            operatorData.Airtel;


        const card =
            document.createElement("article");


        card.className =
            "fancy-number-card";


        if (item.offer) {

            card.classList.add(
                "has-offer"
            );

        }


        card.dataset.number =
            item.number;


        card.dataset.operator =
            item.operator;


        /* OFFER BADGE */

        const offerBadge =
            item.offer
                ? `
                    <div class="offer-badge">
                        20% OFF
                    </div>
                `
                : "";


        /* PREMIUM */

        const premiumBadge =
            item.premium
                ? `
                    <div class="premium-badge">
                        PREMIUM
                    </div>
                `
                : "";


        /* COUNTDOWN */

        const countdown =
            item.offer
                ? `
                    <div
                        class="card-countdown"
                        data-countdown="${item.number}"
                    >

                        <span class="countdown-dot"></span>

                        <span class="countdown-value">
                            08:00:00
                        </span>

                    </div>
                `
                : "";


        /* PRICE */

        let priceHTML = "";


        if (item.oldPrice) {

            priceHTML = `
                <div class="price-wrapper price-row">

                    <span class="old-price">
                        ₹${formatPrice(item.oldPrice)}
                    </span>

                    <span class="current-price">
                        ₹${formatPrice(item.price)}
                    </span>

                </div>
            `;

        } else {

            priceHTML = `
                <div class="price-wrapper price-row">

                    <span class="current-price">
                        ₹${formatPrice(item.price)}
                    </span>

                </div>
            `;

        }


        /* CARD */

        card.innerHTML = `

            ${offerBadge}


            <div class="number-card-top">

                <div class="operator-info">

                    <img
                        src="${operator.logo}"
                        class="operator-logo"
                        alt="${item.operator}"
                    >

                    <span
                        class="operator-name ${operator.className}"
                    >
                        ${item.operator}
                    </span>

                </div>


                ${item.offer ? countdown : ""}


                <button
                    class="favourite-btn"
                    type="button"
                    aria-label="Add to favourites"
                    aria-pressed="false"
                >
                    ${heartIcon}
                </button>

            </div>


            <div class="number-area">

                <span class="fancy-number">
                    ${item.number}
                </span>

            </div>


            ${priceHTML}


            ${premiumBadge}


            <div class="card-actions">

                <button
                    class="enquire-btn"
                    type="button"
                >
                    Enquire
                </button>


                <button
                    class="add-cart-btn"
                    type="button"
                >
                    ${cartIcon}

                    <span>
                        Add to Cart
                    </span>
                </button>

            </div>

        `;


        card.style.animationDelay =
            `${(index % cardsPerLoad) * 0.055}s`;


        return card;

    }


    /* ============================================================
       RENDER
    ============================================================ */

    function renderCards() {

        if (!fancyGrid) {
            return;
        }


        clearCountdowns();


        fancyGrid.innerHTML =
            "";


        const items =
            currentNumbers.slice(
                0,
                visibleCards
            );


        items.forEach(
            (item, index) => {

                fancyGrid.appendChild(
                    createFancyCard(
                        item,
                        index
                    )
                );

            }
        );


        updateCardsCount();

        attachCardEvents();

        startCountdowns();

    }


    /* ============================================================
       COUNT
    ============================================================ */

    function updateCardsCount() {

        const shown =
            Math.min(
                visibleCards,
                currentNumbers.length
            );


        if (cardsCount) {

            cardsCount.textContent =
                `Showing ${shown} of ${currentNumbers.length} numbers`;

        }


        if (loadMoreBtn) {

            loadMoreBtn.style.display =
                shown >= currentNumbers.length
                    ? "none"
                    : "inline-flex";

        }

    }


    /* ============================================================
       CARD EVENTS
    ============================================================ */

    function attachCardEvents() {


        /* =========================================
           FAVOURITE
        ========================================= */

        $$(".favourite-btn").forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        const active =
                            button.classList.toggle(
                                "active"
                            );


                        button.setAttribute(
                            "aria-pressed",
                            active
                                ? "true"
                                : "false"
                        );


                        button.innerHTML =
                            heartIcon;


                        showToast(
                            active
                                ? "Added to favourites"
                                : "Removed from favourites"
                        );

                    }
                );

            }
        );


        /* =========================================
           CART
        ========================================= */

        $$(".add-cart-btn").forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        const card =
                            button.closest(
                                ".fancy-number-card"
                            );


                        const number =
                            card?.dataset.number;


                        const item =
                            fancyNumbers.find(
                                value =>
                                    value.number ===
                                    number
                            );


                        if (!item) {
                            return;
                        }


                        addToCart(item);


                        button.classList.add(
                            "added"
                        );


                        button.innerHTML = `
                            ${cartIcon}
                            <span>
                                Added ✓
                            </span>
                        `;


                        setTimeout(
                            () => {

                                button.classList.remove(
                                    "added"
                                );


                                button.innerHTML = `
                                    ${cartIcon}
                                    <span>
                                        Add to Cart
                                    </span>
                                `;

                            },
                            1500
                        );

                    }
                );

            }
        );


        /* =========================================
           ENQUIRE
        ========================================= */

        $$(".enquire-btn").forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        const card =
                            button.closest(
                                ".fancy-number-card"
                            );


                        const number =
                            card?.dataset.number ||
                            "";


                        const operator =
                            card?.dataset.operator ||
                            "";


                        const item =
                            fancyNumbers.find(
                                value =>
                                    value.number ===
                                    number
                            );


                        const price =
                            item
                                ? formatPrice(
                                    item.price
                                )
                                : "";


                        const message =
                            `Hi, I am interested in the fancy number ${number} (${operator}) priced at ₹${price}.`;


                        const whatsapp =
                            `https://wa.me/?text=${encodeURIComponent(
                                message
                            )}`;


                        window.open(
                            whatsapp,
                            "_blank"
                        );

                    }
                );

            }
        );


        /* =========================================
           NUMBER COPY
        ========================================= */

        $$(".fancy-number").forEach(
            number => {

                number.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        const value =
                            number.textContent.trim();


                        if (
                            navigator.clipboard &&
                            navigator.clipboard.writeText
                        ) {

                            navigator.clipboard
                                .writeText(value)
                                .then(
                                    () =>
                                        showToast(
                                            `${value} copied`
                                        )
                                )
                                .catch(
                                    () => {}
                                );

                        }

                    }
                );

            }
        );

    }


    /* ============================================================
       CART
    ============================================================ */

    let cartCount = 0;


    const cartCountElement =
        $("#cartCount");


    function updateCartCount() {

        if (cartCountElement) {

            cartCountElement.textContent =
                cartCount;

        }

    }


    function addToCart(item) {

        cartCount++;

        updateCartCount();

        showToast(
            `${item.number} added to cart`
        );

    }


    $("#cartButton")?.addEventListener(
        "click",
        () => {

            if (cartCount === 0) {

                showToast(
                    "Your cart is currently empty"
                );

            } else {

                showToast(
                    `${cartCount} number(s) in your cart`
                );

            }

        }
    );


    /* ============================================================
       COUNTDOWN
       ONLY OFFER CARDS
    ============================================================ */

    function startCountdowns() {

        $$("[data-countdown]").forEach(
            element => {

                const key =
                    element.dataset.countdown;


                let remaining =
                    8 * 60 * 60;


                updateTimer(
                    element,
                    remaining
                );


                const timer =
                    setInterval(
                        () => {

                            remaining--;

                            updateTimer(
                                element,
                                remaining
                            );


                            if (
                                remaining <= 0
                            ) {

                                clearInterval(
                                    timer
                                );


                                expireOffer(
                                    element
                                );

                            }

                        },
                        1000
                    );


                countdownTimers.set(
                    key,
                    timer
                );

            }
        );

    }


    function updateTimer(
        element,
        remaining
    ) {

        const safe =
            Math.max(
                0,
                remaining
            );


        const hours =
            Math.floor(
                safe / 3600
            );


        const minutes =
            Math.floor(
                (safe % 3600) / 60
            );


        const seconds =
            safe % 60;


        const timerValue =
            $(".countdown-value", element);


        if (timerValue) {

            timerValue.textContent =
                `${String(hours).padStart(2, "0")}:` +
                `${String(minutes).padStart(2, "0")}:` +
                `${String(seconds).padStart(2, "0")}`;

        }

    }


    function expireOffer(
        timerElement
    ) {

        const card =
            timerElement.closest(
                ".fancy-number-card"
            );


        if (!card) {
            return;
        }


        card.classList.add(
            "expired"
        );


        const timerValue =
            $(".countdown-value", timerElement);


        if (timerValue) {

            timerValue.textContent =
                "00:00:00";

        }


        const badge =
            $(".offer-badge", card);


        if (badge) {

            badge.textContent =
                "OFFER ENDED";

        }

    }


    /* ============================================================
       LOAD MORE
       8 → 16 → 24 → 32 → 40 → 48 → 50
    ============================================================ */

    if (loadMoreBtn) {

        loadMoreBtn.addEventListener(
            "click",
            () => {

                loadMoreBtn.classList.add(
                    "loading"
                );


                const text =
                    $(".load-more-text",
                        loadMoreBtn);


                if (text) {

                    text.textContent =
                        "Loading...";

                }


                setTimeout(
                    () => {

                        visibleCards +=
                            cardsPerLoad;


                        if (
                            visibleCards >
                            currentNumbers.length
                        ) {

                            visibleCards =
                                currentNumbers.length;

                        }


                        renderCards();


                        loadMoreBtn.classList.remove(
                            "loading"
                        );


                        if (text) {

                            text.textContent =
                                "Load More";

                        }

                    },
                    350
                );

            }
        );

    }


    /* ============================================================
       VIEW ALL
    ============================================================ */

    if (featuredViewAll) {

        featuredViewAll.addEventListener(
            "click",
            event => {

                event.preventDefault();


                currentNumbers =
                    [...fancyNumbers];


                visibleCards =
                    cardsPerLoad;


                renderCards();


                scrollToElement(
                    "#featured"
                );

            }
        );

    }


    /* ============================================================
       NUMBER SEARCH
    ============================================================ */

    const numberSearch =
        $("#numberSearch");

    const searchNumbersBtn =
        $("#searchNumbersBtn");

    const headerSearch =
        $("#headerSearch");

    const headerSearchBtn =
        $("#headerSearchBtn");


    function getOperatorValue() {

        return (
            selectedOperator?.textContent?.trim() ||
            "All Operators"
        );

    }


    function runNumberFilter(
        patternOverride = null
    ) {

        const pattern =
            patternOverride !== null
                ? patternOverride
                : numberSearch?.value?.trim() ||
                  "";


        const operator =
            getOperatorValue();


        const cleanPattern =
            pattern
                .replace(/\s+/g, "")
                .toLowerCase();


        currentNumbers =
            fancyNumbers.filter(
                item => {

                    const cleanNumber =
                        item.number
                            .replace(/\s+/g, "")
                            .toLowerCase();


                    const operatorMatch =
                        operator === "All Operators" ||
                        operator === "All" ||
                        !operator ||
                        item.operator === operator;


                    const numberMatch =
                        !cleanPattern ||
                        cleanNumber.includes(
                            cleanPattern
                        );


                    return (
                        operatorMatch &&
                        numberMatch
                    );

                }
            );


        visibleCards =
            cardsPerLoad;


        renderCards();


        scrollToElement(
            "#featured"
        );


        showToast(
            `${currentNumbers.length} numbers found`
        );

    }


    searchNumbersBtn?.addEventListener(
        "click",
        () => {

            const value =
                numberSearch?.value?.trim() ||
                "";


            if (!value) {

                showToast(
                    "Enter a number pattern first"
                );


                numberSearch?.focus();

                return;
            }


            runNumberFilter();

        }
    );


    numberSearch?.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                runNumberFilter();

            }

        }
    );


    /* ============================================================
       HEADER SEARCH
    ============================================================ */

    function performHeaderSearch() {

        const value =
            headerSearch?.value?.trim() ||
            "";


        if (!value) {

            headerSearch?.focus();

            return;
        }


        if (numberSearch) {

            numberSearch.value =
                value;

        }


        runNumberFilter(
            value
        );

    }


    headerSearchBtn?.addEventListener(
        "click",
        performHeaderSearch
    );


    headerSearch?.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                performHeaderSearch();

            }

        }
    );


    /* ============================================================
       SPECIAL OFFER CARDS
    ============================================================ */

    $$(".offer-card").forEach(
        card => {

            card.addEventListener(
                "click",
                () => {

                    const offer =
                        card.dataset.offer ||
                        $("img", card)?.alt ||
                        "Offer";


                    showToast(
                        `${offer} selected`
                    );


                    scrollToElement(
                        "#featured"
                    );

                }
            );


            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateY =
                        ((x / rect.width) - 0.5) * 4;


                    const rotateX =
                        ((y / rect.height) - 0.5) * -4;


                    card.style.transform =
                        `perspective(600px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-4px)
                         scale(1.015)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );


    /* ============================================================
       VIEW OFFERS
    ============================================================ */

    const viewOffersBtn =
        $("#viewOffersBtn") ||
        $(".view-offers");


    viewOffersBtn?.addEventListener(
        "click",
        () => {

            scrollToElement(
                "#offers"
            );


            showToast(
                "Showing special offers"
            );

        }
    );


    /* ============================================================
       LOGIN MODAL
    ============================================================ */

    const loginModal =
        $("#loginModal");

    const openLogin =
        $("#openLogin");

    const closeLogin =
        $("#closeLogin");


    function closeLoginModal() {

        loginModal?.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "";

    }


    openLogin?.addEventListener(
        "click",
        () => {

            loginModal?.classList.add(
                "show"
            );

            document.body.style.overflow =
                "hidden";

        }
    );


    closeLogin?.addEventListener(
        "click",
        closeLoginModal
    );


    loginModal?.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                loginModal
            ) {

                closeLoginModal();

            }

        }
    );


    /* ============================================================
       AUTH TABS
    ============================================================ */

    const authTabs =
        $$(".auth-tab");

    const loginForm =
        $("#loginForm");

    const registerForm =
        $("#registerForm");


    authTabs.forEach(
        tab => {

            tab.addEventListener(
                "click",
                () => {

                    const auth =
                        tab.dataset.auth;


                    authTabs.forEach(
                        item =>
                            item.classList.toggle(
                                "active",
                                item === tab
                            )
                    );


                    if (loginForm) {

                        loginForm.classList.toggle(
                            "hidden",
                            auth !== "login"
                        );

                        loginForm.classList.toggle(
                            "active",
                            auth === "login"
                        );

                    }


                    if (registerForm) {

                        registerForm.classList.toggle(
                            "hidden",
                            auth !== "register"
                        );

                        registerForm.classList.toggle(
                            "active",
                            auth === "register"
                        );

                    }

                }
            );

        }
    );


    /* ============================================================
       PASSWORD TOGGLE
    ============================================================ */

    $$(".password-toggle").forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    let targetId =
                        button.dataset.target;


                    if (!targetId) {

                        const input =
                            $("input",
                                button.parentElement);

                        if (input) {

                            targetId =
                                input.id;

                        }

                    }


                    const input =
                        targetId
                            ? document.getElementById(
                                targetId
                            )
                            : button.parentElement
                                ?.querySelector(
                                    "input"
                                );


                    if (!input) {
                        return;
                    }


                    if (
                        input.type ===
                        "password"
                    ) {

                        input.type =
                            "text";

                        button.textContent =
                            "🙈";

                    } else {

                        input.type =
                            "password";

                        button.textContent =
                            "👁";

                    }

                }
            );

        }
    );


    /* ============================================================
       LOGIN
    ============================================================ */

    loginForm?.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            showToast(
                "Login form submitted"
            );

        }
    );


    /* ============================================================
       REGISTER
    ============================================================ */

    registerForm?.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            showToast(
                "Registration form submitted"
            );

        }
    );


    /* ============================================================
       GOOGLE LOGIN
    ============================================================ */

    $("#googleLogin")?.addEventListener(
        "click",
        () => {

            showToast(
                "Google login ready for backend integration"
            );

        }
    );


    /* ============================================================
       FORGOT PASSWORD
    ============================================================ */

    $("#forgotPasswordLink")?.addEventListener(
        "click",
        event => {

            event.preventDefault();

            showToast(
                "Forgot password flow ready"
            );

        }
    );


    /* ============================================================
       ADVANCED SEARCH
    ============================================================ */

    const advancedButton =
        $("#advancedSearchButton");

    const advancedOverlay =
        $("#advancedOverlay");

    const advancedClose =
        $("#advancedClose");


    function closeAdvancedSearch() {

        advancedOverlay?.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "";

    }


    advancedButton?.addEventListener(
        "click",
        () => {

            advancedOverlay?.classList.add(
                "show"
            );

            document.body.style.overflow =
                "hidden";

        }
    );


    advancedClose?.addEventListener(
        "click",
        closeAdvancedSearch
    );


    advancedOverlay?.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                advancedOverlay
            ) {

                closeAdvancedSearch();

            }

        }
    );


    /* ============================================================
       CLEAR ADVANCED FILTERS
    ============================================================ */

    $("#clearFilters")?.addEventListener(
        "click",
        () => {

            const operator =
                $("#advancedOperator");

            const maxPrice =
                $("#advancedMaxPrice");

            const pattern =
                $("#advancedPattern");

            const premium =
                $("#advancedPremium");

            const offer =
                $("#advancedOffer");


            if (operator) {
                operator.value = "All";
            }


            if (maxPrice) {
                maxPrice.value = "";
            }


            if (pattern) {
                pattern.value = "";
            }


            if (premium) {
                premium.checked = false;
            }


            if (offer) {
                offer.checked = false;
            }


            showToast(
                "Filters cleared"
            );

        }
    );


    /* ============================================================
       APPLY ADVANCED FILTERS
    ============================================================ */

    $("#applyFilters")?.addEventListener(
        "click",
        () => {

            const operator =
                $("#advancedOperator")?.value ||
                "All";


            const maxPrice =
                Number(
                    $("#advancedMaxPrice")?.value ||
                    0
                );


            const pattern =
                (
                    $("#advancedPattern")?.value ||
                    ""
                )
                    .replace(/\s+/g, "")
                    .toLowerCase();


            const premium =
                $("#advancedPremium")?.checked ||
                false;


            const offer =
                $("#advancedOffer")?.checked ||
                false;


            currentNumbers =
                fancyNumbers.filter(
                    item => {

                        const operatorMatch =
                            operator === "All" ||
                            item.operator === operator;


                        const priceMatch =
                            !maxPrice ||
                            item.price <= maxPrice;


                        const numberMatch =
                            !pattern ||
                            item.number
                                .replace(/\s+/g, "")
                                .toLowerCase()
                                .includes(pattern);


                        const premiumMatch =
                            !premium ||
                            item.premium === true;


                        const offerMatch =
                            !offer ||
                            item.offer === true;


                        return (
                            operatorMatch &&
                            priceMatch &&
                            numberMatch &&
                            premiumMatch &&
                            offerMatch
                        );

                    }
                );


            visibleCards =
                cardsPerLoad;


            renderCards();


            closeAdvancedSearch();


            scrollToElement(
                "#featured"
            );


            showToast(
                `${currentNumbers.length} numbers found`
            );

        }
    );


    /* ============================================================
       ESC KEY
    ============================================================ */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Escape"
            ) {
                return;
            }


            closeLoginModal();

            closeAdvancedSearch();

            categoryDropdown?.classList.remove(
                "open"
            );

            operatorWrapper?.classList.remove(
                "open"
            );

            languageMenu?.classList.remove(
                "open"
            );

        }
    );


    /* ============================================================
       SCROLL REVEAL
    ============================================================ */

    const revealElements =
        $$(".reveal-section");


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "section-visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.08
                }
            );


        revealElements.forEach(
            element =>
                observer.observe(
                    element
                )
        );

    } else {

        revealElements.forEach(
            element =>
                element.classList.add(
                    "section-visible"
                )
        );

    }


    /* ============================================================
       INITIAL LOAD
    ============================================================ */

    renderCards();

    updateCartCount();


    console.log(
        "Varma Fancy Numbers JS loaded successfully."
    );

});