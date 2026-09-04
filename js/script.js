document.addEventListener("DOMContentLoaded", function () {

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

});