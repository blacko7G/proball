document.addEventListener("DOMContentLoaded", () => {
    const scoutButtons = document.querySelectorAll(".scout-btn");

    scoutButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("You have scouted this player!");
        });
    });
});

document.getElementById("search-bar").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    document.querySelectorAll(".player-card").forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = name.includes(searchValue) ? "block" : "none";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    document.querySelectorAll(".favorite-btn").forEach(button => {
        const playerName = button.closest(".player-card").dataset.player;

        // Set initial state if player is already in favorites
        if (favorites.includes(playerName)) {
            button.classList.add("active");
        }

        button.addEventListener("click", function () {
            if (favorites.includes(playerName)) {
                // Remove from favorites
                favorites = favorites.filter(name => name !== playerName);
                this.classList.remove("active");
            } else {
                // Add to favorites
                favorites.push(playerName);
                this.classList.add("active");
            }

            // Save to local storage
            localStorage.setItem("favorites", JSON.stringify(favorites));
        });
    });
});
