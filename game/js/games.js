document.addEventListener("DOMContentLoaded", function () {
    const gameName = localStorage.getItem("selectedGame");

    const gameUrls = {
        "game1": "https://kenrick95.github.io/c4/",
        "game2": "https://class811.github.io/g/drift-hunters",
        "game3": "https://class811.github.io/g/tiny-fishing/",
        "game4": "https://class811.github.io/g177/skibidi-shooter/",
        "game5": "https://class811.github.io/g/ovo/",
        "game6": "https://class811.github.io/g3/stick-merge/",
        "game7": "https://firespread01.github.io/slope/",
        "game8": "https://game316009.konggames.com/gamez/0031/6009/live/index.html/"
        "game9": "https://script.google.com/a/macros/my.npsct.org/s/AKfycbw6e8fflbfydV7kom5id09nKaM6ix0hLlXHbs3XHOnxzrndUgPtHUHENrwKomI2Hpk3/exec"
    };

    const iframe = document.getElementById("gameFrame");
    iframe.src = gameUrls[gameName] || "about:blank";
});

function goBack() {
    window.location.href = "index.html";
}
