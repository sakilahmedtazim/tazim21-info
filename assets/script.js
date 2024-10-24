// সার্চ ফিচার
function searchVideos() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let videoItems = document.querySelectorAll('.video-item');
    
    videoItems.forEach(item => {
        let videoTitle = item.textContent.toLowerCase();
        if (videoTitle.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// রেটিং সিস্টেম
function rateVideo(stars) {
    let starElements = document.querySelectorAll('.star');
    starElements.forEach((star, index) => {
        if (index < stars) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// স্ক্রল এফেক্ট (প্লেয়ার মিনি মুডে যাওয়া)
window.onscroll = function() {
    let videoPlayer = document.getElementById('videoPlayer');
    if (window.scrollY > 200) {
        videoPlayer.style.position = 'fixed';
        videoPlayer.style.bottom = '10px';
        videoPlayer.style.right = '10px';
        videoPlayer.style.width = '200px';
    } else {
        videoPlayer.style.position = 'static';
        videoPlayer.style.width = '720px';
    }
};
