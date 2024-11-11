document.addEventListener("DOMContentLoaded", function () {
    const gameName = localStorage.getItem("selectedGame");

    const gameUrls = {
        "game1": "https://kenrick95.github.io/c4/",
        "game2": "https://class811.github.io/g/drift-hunters",
        "game3": "https://class811.github.io/g/tiny-fishing/",
        "game4": "https://class811.github.io/g177/skibidi-shooter/",
        "game5": "https://class811.github.io/g/ovo/",
        "game6": "https://class811.github.io/g3/stick-merge/",
        "game7": "https://www.y8.com/games/slope",
        "game8": "https://retro-bowl.com/play/"
    };

    const iframe = document.getElementById("gameFrame");
    iframe.src = gameUrls[gameName] || "about:blank";
});

function goBack() {
    window.location.href = "index.html";
}
