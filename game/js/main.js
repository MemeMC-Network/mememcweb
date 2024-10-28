function loadGame(gameName) {
    localStorage.setItem("selectedGame", gameName);
    window.location.href = "games.html";
}
