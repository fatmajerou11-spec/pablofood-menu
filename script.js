
document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category-button");
    const menuCards = document.querySelectorAll(".menu-card");
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    categoryButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const category = button.dataset.category;

            categoryButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            menuCards.forEach(function (card) {
                if (category === "all" || card.dataset.category === category) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
