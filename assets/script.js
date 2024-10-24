// ভিডিও স্পিড পরিবর্তন ফিচার
function toggleSpeed() {
    let videoPlayer = document.getElementById('videoPlayer');
    if (videoPlayer.playbackRate === 1) {
        videoPlayer.playbackRate = 1.5;
    } else if (videoPlayer.playbackRate === 1.5) {
        videoPlayer.playbackRate = 2;
    } else {
        videoPlayer.playbackRate = 1;
    }
}

// ক্যাপশন চালু/বন্ধ ফিচার
function toggleCaption() {
    let tracks = document.querySelectorAll('track');
    tracks.forEach(track => {
        track.mode = track.mode === 'showing' ? 'disabled' : 'showing';
    });
}

// ভিডিও প্রিভিউ দেখানোর ফিচার (থাম্বনেইলে মাউস হোভার করলে)
function showPreview(thumbnail) {
    // এখানে আপনি থাম্বনেইলের প্রিভিউ কনটেন্ট যোগ করতে পারেন
    // উদাহরণস্বরূপ, মাউস হোভার করলে থাম্বনেইলে ছোট প্রিভিউ চলবে
    // প্রিভিউ চালানোর জন্য আপনি JavaScript এর টাইমার এবং ভিডিও ফ্রেম সেট করতে পারেন।
    console.log("Preview is shown for: " + thumbnail.alt);
}

// ভিডিও ফিল্টার ফিচার (ক্যাটেগরি ভিত্তিতে ফিল্টার)
function filterVideos() {
    let category = document.getElementById('categoryFilter').value;
    let videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        let videoCategory = item.getAttribute('data-category');
        if (category === 'all' || videoCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ভিডিও ফিল্টার ফিচার (সোর্ট করা - তারিখ বা জনপ্রিয়তা ভিত্তিতে)
function sortVideos() {
    let sortBy = document.getElementById('dateFilter').value;
    let videoList = document.getElementById('videoList');
    let videos = Array.from(document.querySelectorAll('.video-item'));

    videos.sort((a, b) => {
        let aValue, bValue;

        if (sortBy === 'newest') {
            aValue = Date.parse(a.getAttribute('data-date'));
            bValue = Date.parse(b.getAttribute('data-date'));
            return bValue - aValue;
        } else if (sortBy === 'oldest') {
            aValue = Date.parse(a.getAttribute('data-date'));
            bValue = Date.parse(b.getAttribute('data-date'));
            return aValue - bValue;
        } else if (sortBy === 'popular') {
            aValue = parseInt(a.getAttribute('data-popularity'), 10);
            bValue = parseInt(b.getAttribute('data-popularity'), 10);
            return bValue - aValue;
        }
    });

    videoList.innerHTML = '';
    videos.forEach(video => videoList.appendChild(video));
}

// ভিডিও সার্চ ফিচার (টাইটেল ভিত্তিতে ভিডিও সার্চ)
function searchVideos() {
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    let videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        let title = item.querySelector('span').innerText.toLowerCase();
        if (title.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ভিডিও প্রোগ্রেস আপডেট ফিচার (প্রগেস বার আপডেট করা)
let videoPlayer = document.getElementById('videoPlayer');
let progressBar = document.getElementById('progressBar');
let progressPercent = document.getElementById('progressPercent');

if (videoPlayer) {
    videoPlayer.addEventListener('timeupdate', function () {
        let percent = Math.floor((videoPlayer.currentTime / videoPlayer.duration) * 100);
        progressBar.value = percent;
        progressPercent.innerText = percent + '%';
    });

    videoPlayer.addEventListener('ended', function () {
        alert('Video has finished playing!');
    });
}

// ভিডিও বুকমার্কিং ফিচার (ব্যবহারকারী ভিডিও কোথায় শেষ করেছেন, তা সংরক্ষণ করা)
if (videoPlayer) {
    videoPlayer.addEventListener('pause', function () {
        let bookmark = videoPlayer.currentTime;
        localStorage.setItem('videoBookmark', bookmark);
        console.log("Video bookmarked at: " + bookmark + " seconds.");
    });

    window.addEventListener('load', function () {
        let savedTime = localStorage.getItem('videoBookmark');
        if (savedTime) {
            videoPlayer.currentTime = savedTime;
        }
    });
}
