document.addEventListener("DOMContentLoaded", () => {
    const players = [
        { name: "John Doe", position: "Striker", club: "FC Lagos", goals: 30, assists: 15, matches: 50, rating: 8.9, image: "public/icon.jpg" },
        { name: "James Smith", position: "Defender", club: "Abuja United", goals: 5, assists: 10, matches: 60, rating: 7.8, image: "public/icon.jpg" },
        { name: "David Johnson", position: "Midfielder", club: "Enugu Rangers", goals: 10, assists: 20, matches: 55, rating: 8.2, image: "public/icon.jpg" },
        { name: "Michael Brown", position: "Goalkeeper", club: "Kano Pillars", goals: 0, assists: 3, matches: 70, rating: 9.1, image: "public/icon.jpg" }
    ];

    const playerList = document.getElementById("player-list");
    const compareBtn = document.getElementById("compareBtn");
    const rankBtn = document.getElementById("rankBtn");
    const modal = document.getElementById("comparison-modal");
    const comparisonContainer = document.getElementById("comparison-container");
    const closeModal = document.querySelector(".close");

    let selectedPlayers = [];

    function displayPlayers(filteredPlayers = players) {
        playerList.innerHTML = "";
        filteredPlayers.forEach(player => {
            let playerCard = document.createElement("div");
            playerCard.classList.add("player-card");

            playerCard.innerHTML = `
                <img src="${player.image}" alt="${player.name}">
                <h3>${player.name}</h3>
                <p>${player.position} - ${player.club}</p>
                <p>⚽ Goals: ${player.goals} | 🎯 Assists: ${player.assists} | 🎮 Matches: ${player.matches} | ⭐ Rating: ${player.rating}</p>
                <input type="checkbox" class="compare-checkbox" data-name="${player.name}">
                <button class="favorite-btn">&#11088;</button>
            `;

            playerList.appendChild(playerCard);
        });

        setupComparison();
    }

    function setupComparison() {
        const checkboxes = document.querySelectorAll(".compare-checkbox");

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                if (this.checked) {
                    if (selectedPlayers.length < 2) {
                        selectedPlayers.push(players.find(p => p.name === this.dataset.name));
                    } else {
                        this.checked = false;
                    }
                } else {
                    selectedPlayers = selectedPlayers.filter(p => p.name !== this.dataset.name);
                }

                compareBtn.disabled = selectedPlayers.length !== 2;
            });
        });
    }

    compareBtn.addEventListener("click", () => {
        comparisonContainer.innerHTML = `
            <div class="comparison-table">
                <div class="player-col">
                    <img src="${selectedPlayers[0].image}" alt="${selectedPlayers[0].name}">
                    <h3>${selectedPlayers[0].name}</h3>
                    <p>⚽ Goals: ${selectedPlayers[0].goals}</p>
                    <p>🎯 Assists: ${selectedPlayers[0].assists}</p>
                    <p>🎮 Matches: ${selectedPlayers[0].matches}</p>
                    <p>⭐ Rating: ${selectedPlayers[0].rating}</p>
                </div>
                <div class="player-col">
                    <img src="${selectedPlayers[1].image}" alt="${selectedPlayers[1].name}">
                    <h3>${selectedPlayers[1].name}</h3>
                    <p> Goals: ${selectedPlayers[1].goals}</p>
                    <p> Assists: ${selectedPlayers[1].assists}</p>
                    <p> Matches: ${selectedPlayers[1].matches}</p>
                    <p>⭐ Rating: ${selectedPlayers[1].rating}</p>
                </div>
            </div>
        `;
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    rankBtn.addEventListener("click", () => {
        let rankedPlayers = [...players].sort((a, b) => b.rating - a.rating);
        displayPlayers(rankedPlayers);
    });

    displayPlayers();
});
