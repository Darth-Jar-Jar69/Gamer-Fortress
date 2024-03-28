// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to display videos
function displayVideos(videos) {
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = '';

    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        
        // Generate a random color for the background
        const backgroundColor = getRandomColor();

        videoItem.innerHTML = `
            <div class="video-icon" style="background-color: ${backgroundColor};">
                <i class="fas fa-play"></i>
            </div>
            <h3>${video.title}</h3>
        `;
        videoGrid.appendChild(videoItem);
    });
}

// Fake video data generator with gaming-related titles
function generateFakeVideos(count) {
    const videos = [];
    const titles = [
        "Epic Boss Fight Strategy",
        "Speedrun Masterclass",
        "Top 10 Gaming Moments",
        "Ultimate Weapon Showcase",
        "Beginner's Guide to Leveling Up",
        "Hidden Easter Eggs Revealed",
        "Multiplayer Mayhem Highlights",
        "Legendary Loot Unboxing",
        "Pro Gamer Tips and Tricks",
        "Rage Quit Compilation",
        "Game Review: Title of the Game",
        "Mastering Your Favorite Character",
        "Gaming Setup Tour",
        "Co-op Campaign Adventures",
        "Virtual Reality Showcase",
        "Game Development Insights",
        "Gaming Memes Compilation",
        "Competitive eSports Analysis",
        "Gaming News Update",
        "The Future of Gaming"
    ];

    for (let i = 1; i <= count; i++) {
        const randomIndex = Math.floor(Math.random() * titles.length);
        const title = titles[randomIndex];
        videos.push({
            id: i,
            title: title
        });
    }
    return videos;
}

// Function to handle video upload
function uploadVideo() {
    // Placeholder function, you can implement the actual upload process here
    alert('Video upload functionality not implemented in this example.');
}

// Event listener for the upload button
document.getElementById('uploadBtn').addEventListener('click', uploadVideo);

// Generate fake videos and display them
const fakeVideos = generateFakeVideos(1000);
displayVideos(fakeVideos);
// Function to handle video upload
function uploadVideo() {
    // Create an input element to allow the user to select a file
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*'; // Allow only video files to be selected
    input.addEventListener('change', function(event) {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            // Here you can implement the upload process for the selected file
            alert(`Uploading file: ${file.name}`);
            // Reset the input to allow selecting another file if needed
            input.value = '';
        }
    });
    // Click the input element to trigger the file selection dialog
    input.click();
}
