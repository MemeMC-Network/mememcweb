// Game Javascript
// www.mememc.club/game/test

const games = [
    { id: "game1", title: "Connect Four", url: "https://kenrick95.github.io/c4/", thumbnail: "images/connect-four.jpg" },
    { id: "game2", title: "Drift Hunters", url: "https://class811.github.io/g/drift-hunters", thumbnail: "images/drift-hunters.jpg" },
    { id: "game3", title: "Tiny Fishing", url: "https://class811.github.io/g/tiny-fishing/", thumbnail: "images/tiny-fishing.jpg" },
    { id: "game4", title: "Skibidi Shooter", url: "https://class811.github.io/g177/skibidi-shooter/", thumbnail: "images/skibidi-shooter.jpg" },
    { id: "game5", title: "OvO", url: "https://class811.github.io/g/ovo/", thumbnail: "images/ovo.jpg" },
    { id: "game6", title: "Stick Merge", url: "https://class811.github.io/g3/stick-merge/", thumbnail: "images/stick-merge.jpg" },
    { id: "game7", title: "Slope", url: "https://firespread01.github.io/slope/", thumbnail: "images/slope.jpg" },
    { id: "game9", title: "Cluster Rush", url: "https://script.google.com/a/macros/my.npsct.org/s/AKfycbw6e8fflbfydV7kom5id09nKaM6ix0hLlXHbs3XHOnxzrndUgPtHUHENrwKomI2Hpk3/exec/", thumbnail: "images/cluster-rush.jpg" },
    { id: "game10", title: "Burrito Bison", url: "https://burritobisononline.github.io/file/", thumbnail: "images/burrito-bison.jpg" },
    { id: "game11", title: "Rooftop Snipers", url: "https://spew45.github.io/simple-games-assets/src/rooftop-snipers/", thumbnail: "images/rooftop-snipers.jpg" },
    { id: "game12", title: "Basketball Random", url: "https://spew45.github.io/simple-games-assets/src/basket-random/", thumbnail: "images/basket-random.jpg" },
    { id: "game13", title: "Soccer Random", url: "https://spew45.github.io/simple-games-assets/src/soccer-random/", thumbnail: "images/soccer-random.jpg" },
    { id: "game14", title: "MonkeyMart", url: "https://swordslasher.com/games/ugi7ftbv2kgodcq7vful9u9v34wein5z/index.html/", thumbnail: "images/monkeymart.jpg" },
    { id: "game15", title: "Stickman Hook", url: "https://hypackel.github.io/fork/0/g/stickmanhook/game/index.html/", thumbnail: "images/stickman-hook.jpg" },
    { id: "game16", title: "N-Gon", url: "https://swordslasher.com/games/ngon/game.html/", thumbnail: "images/ngon.jpg" },
    { id: "game17", title: "Gun Spin", url: "https://class811.github.io/g/gunspin/", thumbnail: "images/gunspin.jpg" }
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
