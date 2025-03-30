document.addEventListener("DOMContentLoaded", function () {
    // Load player name dynamically
    const playerName = "John Doe"; // Replace with actual backend data
    document.getElementById("player-name").innerText = playerName;

    // Message Button
    document.querySelector(".message-btn").addEventListener("click", function () {
        alert("Messaging feature coming soon!");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const playerName = "John Doe"; // Replace with actual data from backend
    document.getElementById("player-name").innerText = playerName;

    // Notifications auto-update (Simulation)
    setTimeout(() => {
        const notificationsList = document.getElementById("notifications-list");
        const newNotification = document.createElement("li");
        newNotification.innerHTML = "🔥 New trial opportunity at Elite FC!";
        notificationsList.appendChild(newNotification);
    }, 5000);

    // Edit Profile Button
    document.querySelector(".edit-btn").addEventListener("click", function () {
        alert("Profile editing feature coming soon!");
    });

    // Sidebar Navigation
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelectorAll(".content-section").forEach(section => {
                section.classList.remove("active");
            });
            document.getElementById(this.dataset.section).classList.add("active");

            document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// Video Upload and Engagement
function uploadVideo() {
    const fileInput = document.getElementById("videoUpload");
    if (fileInput.files.length === 0) {
        alert("Please select a video to upload.");
        return;
    }

    const file = fileInput.files[0];
    const videoURL = URL.createObjectURL(file);

    const videoContainer = document.createElement("div");
    videoContainer.classList.add("video-card");
    videoContainer.innerHTML = `
        <video controls src="${videoURL}" class="highlight-video"></video>
        <div class="video-engagement">
            <button class="like-btn">❤️ 0</button>
            <button class="comment-btn">💬 Comment</button>
            <span class="views">👁️ 1</span>
        </div>
        <div class="comments-section" style="display: none;">
            <input type="text" class="comment-input" placeholder="Add a comment...">
            <button class="post-comment">Post</button>
            <ul class="comments-list"></ul>
        </div>
    `;

    document.getElementById("video-list").appendChild(videoContainer);

    // Engagement Features
    let likeCount = 0;
    let viewsCount = 1;

    videoContainer.querySelector(".like-btn").addEventListener("click", function () {
        likeCount++;
        this.innerText = `❤️ ${likeCount}`;
    });

    videoContainer.querySelector(".highlight-video").addEventListener("play", function () {
        viewsCount++;
        videoContainer.querySelector(".views").innerText = `👁️ ${viewsCount}`;
    });

    videoContainer.querySelector(".comment-btn").addEventListener("click", function () {
        const commentSection = videoContainer.querySelector(".comments-section");
        commentSection.style.display = commentSection.style.display === "none" ? "block" : "none";
    });

    videoContainer.querySelector(".post-comment").addEventListener("click", function () {
        const commentInput = videoContainer.querySelector(".comment-input");
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentList = videoContainer.querySelector(".comments-list");
            const commentItem = document.createElement("li");
            commentItem.innerText = commentText;
            commentList.appendChild(commentItem);
            commentInput.value = "";
        }
    });
}
