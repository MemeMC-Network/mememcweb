document.addEventListener("DOMContentLoaded", function () {
    const gameName = localStorage.getItem("selectedGame");

    const gameUrls = {
        "game1": "https://class198.github.io/g/top-speed-racing-3d/",  // Replace with actual game URLs
        "game2": "https://class198.github.io/g/drift-hunters"
    };

    const iframe = document.getElementById("gameFrame");
    iframe.src = gameUrls[gameName] || "about:blank";
});

function goBack() {
    window.location.href = "index.html";
}