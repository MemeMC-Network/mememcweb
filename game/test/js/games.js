// games.js

const games = [
    { id: "game1", title: "Connect Four", url: "https://kenrick95.github.io/c4/", thumbnail: "images/connect-four.jpg" },
    { id: "game2", title: "Drift Hunters", url: "https://class811.github.io/g/drift-hunters", thumbnail: "images/drift-hunters.jpg" },
    { id: "game3", title: "Tiny Fishing", url: "https://class811.github.io/g/tiny-fishing/", thumbnail: "images/tiny-fishing.jpg" },
    // Add more games as necessary
];

// Load game and add to history
function loadGame(gameId) {
    const selectedGame = games.find(game => game.id === gameId);
    if (selectedGame) {
        localStorage.setItem("selectedGame", JSON.stringify(selectedGame));
        addToHistory(selectedGame);
        window.location.href = "games.html";  // Redirect to game page
    }
}

// Search for games
document.getElementById("searchBar").addEventListener("input", function (e) {
    const searchText = e.target.value.toLowerCase();
    displayGames(searchText);
});

// Display games in gallery
function displayGames(searchText = "") {
    const gallery = document.getElementById("gameGallery");
    gallery.innerHTML = "";
    games.filter(game => game.title.toLowerCase().includes(searchText)).forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <span class="game-title">${game.title}</span>
        `;
        gameCard.onclick = () => loadGame(game.id);
        gallery.appendChild(gameCard);
    });
}

// Add to recently played games
function addToHistory(game) {
    let history = JSON.parse(localStorage.getItem("recentlyPlayed")) || [];
    history = history.filter(item => item.id !== game.id);
    history.unshift(game);
    if (history.length > 5) history.pop();
    localStorage.setItem("recentlyPlayed", JSON.stringify(history));
}

// Display recently played games
function displayRecentlyPlayed() {
    const list = document.getElementById("recentlyPlayedList");
    const history = JSON.parse(localStorage.getItem("recentlyPlayed")) || [];
    list.innerHTML = history.map(game => `<li onclick="loadGame('${game.id}')">${game.title}</li>`).join("");
}

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Apply saved dark mode preference
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
    displayGames();
    displayRecentlyPlayed();
});
