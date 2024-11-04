document.addEventListener("DOMContentLoaded", function () {
    const gameName = localStorage.getItem("selectedGame");

    const gameUrls = {
        "game1": "https://class198.github.io/g/top-speed-racing-3d/",  // Replace with actual game URLs
        "game2": "https://class198.github.io/g/drift-hunters",
        "game3": "https://class198.github.io/g/tiny-fishing/",
        "game4": "https://class198.github.io/g177/skibidi-shooter/",
        "game5": "https://class198.github.io/g/ovo/"
        "game6": "http://b.anolink.ru/newga/russian-car-driver-hd1/"
    };

    const iframe = document.getElementById("gameFrame");
    iframe.src = gameUrls[gameName] || "about:blank";
});

function goBack() {
    window.location.href = "index.html";
}
