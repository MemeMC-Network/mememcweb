// Main Javascript
// www.mememc.club/game/test
document.addEventListener("DOMContentLoaded", () => {
    const game = JSON.parse(localStorage.getItem("selectedGame"));
    if (game) {
        document.getElementById("gameFrame").src = game.url;
        document.getElementById("gameTitle").textContent = game.title;
    }
    displayReviews(game.id);

    // Back to Game List
    document.getElementById("backToList").addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // Fullscreen Toggle
    const gameFrame = document.getElementById("gameFrame");
    document.getElementById("fullscreenToggle").addEventListener("click", () => {
        if (!document.fullscreenElement) {
            gameFrame.requestFullscreen().catch(err => {
                alert(`Error attempting to enable fullscreen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });
});
