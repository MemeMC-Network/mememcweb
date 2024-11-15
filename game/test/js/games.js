// Game Javascript
// www.mememc.club/game/test

const games = [
    { id: "game1", title: "Connect Four", url: "https://kenrick95.github.io/c4/", thumbnail: "https://play-lh.googleusercontent.com/lZr9XlmL3TWpwqMDI_WF5k_ud9UeVW6QLzAnb17_bsyjfJBIGZxDLfLEN2AqCW2JD9A" },
    { id: "game2", title: "Drift Hunters", url: "https://class811.github.io/g/drift-hunters", thumbnail: "https://m.media-amazon.com/images/I/91SfPYITE-L.png" },
    { id: "game3", title: "Tiny Fishing", url: "https://class811.github.io/g/tiny-fishing/", thumbnail: "https://play-lh.googleusercontent.com/XmnVxmSzSX94xpkQep8zCUh7AZ9kNsplSRE-DH5s6UYjCKWfr-pzjD-86NqLm3uFLbKO" },
    { id: "game4", title: "Skibidi Shooter", url: "https://class811.github.io/g177/skibidi-shooter/", thumbnail: "https://cdn-1.webcatalog.io/catalog/poki-skibidi-shooter/poki-skibidi-shooter-icon-filled-256.png?v=1714781386807" },
    { id: "game5", title: "OvO", url: "https://class811.github.io/g/ovo/", thumbnail: "https://play-lh.googleusercontent.com/v7KwGdPjJGjJjRXn46sck4DwDBdKSeRzGN44CjiXUtKV0jjOi51Bt4wcXud0m-SkXg" },
    { id: "game6", title: "Stick Merge", url: "https://class811.github.io/g3/stick-merge/", thumbnail: "https://www.virlan.co/unblocked-games/wp-content/uploads/2022/08/stick-merge-game.jpg" },
    { id: "game7", title: "Slope", url: "https://firespread01.github.io/slope/", thumbnail: "https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs" },
    { id: "game9", title: "Cluster Rush", url: "https://script.google.com/a/macros/my.npsct.org/s/AKfycbw6e8fflbfydV7kom5id09nKaM6ix0hLlXHbs3XHOnxzrndUgPtHUHENrwKomI2Hpk3/exec/", thumbnail: "images/cluster-rush.jpg" },
    { id: "game10", title: "Burrito Bison", url: "https://burritobisononline.github.io/file/", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tzXZodkuIxTTRNsOdrTGtPs4Szg08kFlrQ&s" },
    { id: "game11", title: "Rooftop Snipers", url: "https://spew45.github.io/simple-games-assets/src/rooftop-snipers/", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKY2uliGeNKbqaj4zsKGgQih6z4WKF7mgkew&s" },
    { id: "game12", title: "Basketball Random", url: "https://spew45.github.io/simple-games-assets/src/basket-random/", thumbnail: "https://play-lh.googleusercontent.com/gP8T5Z1O-ngxIloiwcBZzrzyLPYDp0R_1BDNKUDZboIRPVImeyWI8-7aExvB9gAGNKc" },
    { id: "game13", title: "Soccer Random", url: "https://spew45.github.io/simple-games-assets/src/soccer-random/", thumbnail: "https://play-lh.googleusercontent.com/G1PIlb6HWKSaDre0XpUcmKGps9T4iamsSlwrogB3EJzYv4bz0M2am4D17MtGzndaOOU" },
    { id: "game14", title: "MonkeyMart", url: "https://swordslasher.com/games/ugi7ftbv2kgodcq7vful9u9v34wein5z/index.html/", thumbnail: "https://monkey-mart.io/wp-content/uploads/2023/06/monkey-mart.png" },
    { id: "game15", title: "Stickman Hook", url: "https://hypackel.github.io/fork/0/g/stickmanhook/game/index.html/", thumbnail: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/99e090d154caf30f3625df7e456d5984.png" },
    { id: "game16", title: "N-Gon", url: "https://swordslasher.com/games/ngon/game.html/", thumbnail: "https://repository-images.githubusercontent.com/493354908/d15c0322-7cac-410f-8526-ddcbf2a16ec9" },
    { id: "game17", title: "Gun Spin", url: "https://class811.github.io/g/gunspin/", thumbnail: "https://play-lh.googleusercontent.com/fLqvWSVq5rENEvu32xl0hf96wwSHVwQm-_9xc6KZg9Vgv9PbAtf1CyBYW7i1mlAXoSA" }
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
