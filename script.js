// Select all video cards
const videoCards = document.querySelectorAll('.video-card');

// Select the main video player
const videoPlayer = document.getElementById('main-video-player');

// Add event listener to each video card
videoCards.forEach(card => {
    card.addEventListener('click', () => {
        // Get the video URL from the data attribute
        const videoSrc = card.getAttribute('data-video');
        
        // Change the source of the video player
        videoPlayer.src = videoSrc;
        
        // Play the selected video
        videoPlayer.play();
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
