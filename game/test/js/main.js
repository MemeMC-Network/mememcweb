// main.js

document.addEventListener("DOMContentLoaded", () => {
    const game = JSON.parse(localStorage.getItem("selectedGame"));
    if (game) {
        document.getElementById("gameFrame").src = game.url;
        document.getElementById("gameTitle").textContent = game.title;
    }
    displayReviews(game.id);
});

// Submit review
function submitReview(gameId) {
    const username = prompt("Enter your username:");
    if (!username) return;
    const rating = prompt("Enter your rating (1-5):");
    const comment = prompt("Enter your comment:");
    if (!rating || !comment) return;

    const review = { username, rating: parseInt(rating), comment };
    let reviews = JSON.parse(localStorage.getItem(`reviews_${gameId}`)) || [];
    reviews.push(review);
    localStorage.setItem(`reviews_${gameId}`, JSON.stringify(reviews));
    displayReviews(gameId);
}

// Display reviews
function displayReviews(gameId) {
    const reviewsContainer = document.getElementById("reviews");
    const reviews = JSON.parse(localStorage.getItem(`reviews_${gameId}`)) || [];
    reviewsContainer.innerHTML = reviews.map(review =>
        `<div class="review">
            <strong>${review.username}</strong> rated ${review.rating}/5
            <p>${review.comment}</p>
        </div>`
    ).join("");
}
