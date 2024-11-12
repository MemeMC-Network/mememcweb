function loadGame(gameName) {
    localStorage.setItem("selectedGame", gameName);
    window.location.href = "games.html";
}
function loadGame(gameId) {
    // Trigger fade-out transition
    document.body.classList.add("fade-out");

    // Load the game page after a short delay to allow fade-out to complete
    setTimeout(() => {
        // You can set the URL of the game iframe or content here
        document.location.href = `/game/games.html`;
    }, 500); // Delay should match the CSS animation duration
}

// Reapply fade-in when the page is loaded
window.onload = () => {
    document.body.classList.add("fade-in");
};
