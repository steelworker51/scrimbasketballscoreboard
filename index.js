// Get the home score element
const homeScoreElement = document.getElementById('home-score');
const guestScoreElement = document.getElementById('guest-score');
// Initialize home score to 0
let homeScore = 0;
let guestScore= 0;

// Function to update the home score
function updateHomeScore(increment) {
    homeScore += increment;  // Increment home score by specified value
    homeScoreElement.textContent = homeScore;  // Update the displayed score
}

// Function to update the guest score
function updateGuestScore(increment) {
    guestScore += increment;  // Increment home score by specified value
    guestScoreElement.textContent = guestScore;  // Update the displayed score
}



// Add event listener to the first home button (Button 1, +1)
const homeButton1 = document.getElementById('home-button1');
homeButton1.addEventListener('click', function() {
    updateHomeScore(1);  // Increment score by 1
});

// Add event listener to the second home button (Button 2, +2)
const homeButton2 = document.getElementById('home-button2');
homeButton2.addEventListener('click', function() {
    updateHomeScore(2);  // Increment score by 2
});

// Add event listener to the second home button (Button 2, +2)
const homeButton3 = document.getElementById('home-button3');
homeButton3.addEventListener('click', function() {
    updateHomeScore(3);  // Increment score by 3
});

// Add event listener to the first guest button (Button 1, +1)
const guestButton1 = document.getElementById('guest-button1');
guestButton1.addEventListener('click', function() {
    updateGuestScore(1);  // Increment score by 1
});

// Add event listener to the second guest button (Button 2, +2)
const guestButton2 = document.getElementById('guest-button2');
guestButton2.addEventListener('click', function() {
    updateGuestScore(2);  // Increment score by 2
});

// Add event listener to the second guest button (Button 2, +2)
const guestButton3 = document.getElementById('guest-button3');
guestButton3.addEventListener('click', function() {
    updateGuestScore(3);  // Increment score by 3
});

