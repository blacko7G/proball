document.addEventListener("DOMContentLoaded", () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let container = document.getElementById("watchlist-players");

    if (favorites.length === 0) {
        container.innerHTML = "<p>No players in watchlist.</p>";
    } else {
        favorites.forEach(player => {
            let playerCard = document.createElement("div");
            playerCard.classList.add("watchlist-card");

            playerCard.innerHTML = `
                <img src="${player.image}" alt="${player.name}">
                <div class="info">
                    <h3>${player.name}</h3>
                </div>
                <button class="remove-btn">Remove</button>
            `;

            container.appendChild(playerCard);

            // Remove Player from Watchlist
            playerCard.querySelector(".remove-btn").addEventListener("click", () => {
                favorites = favorites.filter(p => p.name !== player.name);
                localStorage.setItem("favorites", JSON.stringify(favorites));
                playerCard.remove();

                if (favorites.length === 0) {
                    container.innerHTML = "<p>No players in watchlist.</p>";
                }
            });
        });
    }
});
