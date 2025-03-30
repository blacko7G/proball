document.addEventListener("DOMContentLoaded", function () {
    // Load player name dynamically
    const playerName = "John Doe"; // Replace with actual backend data
    document.getElementById("player-name").innerText = playerName;

    // Sidebar Navigation Clicks
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            // Remove active class from all links
            document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            // Hide all content sections
            document.querySelectorAll(".content-section").forEach(section => section.classList.remove("active"));

            // Show the selected section
            const sectionId = this.getAttribute("data-section");
            document.getElementById(sectionId).classList.add("active");
        });
    });

    // Simulate real-time notifications
    function addNotification(message) {
        const notificationsList = document.getElementById("notifications-list");
        const newNotification = document.createElement("li");
        newNotification.innerHTML = message;
        newNotification.classList.add("fade-in");
        notificationsList.appendChild(newNotification);

        // Auto-remove after 10s
        setTimeout(() => newNotification.classList.add("fade-out"), 9000);
        setTimeout(() => newNotification.remove(), 10000);
    }

    // Auto-update notifications
    setTimeout(() => addNotification("⚽ Scout invited you for a virtual tryout!"), 5000);
    setTimeout(() => addNotification("🔄 Your profile was viewed by a scout!"), 10000);

    // Edit Profile Button
    document.querySelector(".edit-btn").addEventListener("click", function () {
        alert("Profile editing feature coming soon!");
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
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove("active"));

            // Hide all sections
            sections.forEach(section => section.classList.remove("active"));

            // Get the target section
            const sectionId = this.getAttribute("data-section");
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                targetSection.classList.add("active");
            }

            // Add active class to clicked link
            this.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    loadProfileData(); // Load saved data on page load

    // Save Profile Data When Edit Button is Clicked
    document.querySelector(".edit-btn").addEventListener("click", function () {
        let playerName = document.getElementById("player-name").innerText;
        let bioText = document.getElementById("bio-text").innerText;
        let goals = document.getElementById("goals").innerText;
        let assists = document.getElementById("assists").innerText;
        let accuracy = document.getElementById("accuracy").innerText;

        let profileData = {
            playerName: playerName,
            bio: bioText,
            stats: {
                goals: goals,
                assists: assists,
                accuracy: accuracy,
            }
        };

        localStorage.setItem("profileData", JSON.stringify(profileData));
    });
});

function loadProfileData() {
    let savedData = localStorage.getItem("profileData");
    if (savedData) {
        let profileData = JSON.parse(savedData);
        document.getElementById("player-name").innerText = profileData.playerName;
        document.getElementById("bio-text").innerText = profileData.bio;
        document.getElementById("goals").innerText = profileData.stats.goals;
        document.getElementById("assists").innerText = profileData.stats.assists;
        document.getElementById("accuracy").innerText = profileData.stats.accuracy;
    }
}
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (event) {
        let sectionId = this.getAttribute("data-section");

        // Hide all sections
        document.querySelectorAll(".content-section").forEach((section) => {
            section.classList.remove("active");
        });

        // Show the clicked section
        document.getElementById(sectionId).classList.add("active");

        // Prevent page refresh
        event.preventDefault();
    });
});
