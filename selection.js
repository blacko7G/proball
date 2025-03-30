document.addEventListener("DOMContentLoaded", () => {
    const roleButtons = document.querySelectorAll(".role-btn");
    const modal = document.querySelector(".overlay");

    roleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedRole = this.id;  // 'player', 'scout', or 'academy'
            localStorage.setItem("userRole", selectedRole); // Save selection

            // Add bounce effect
            this.classList.add("selected");

            setTimeout(() => {
                modal.style.opacity = "0"; // Fade out
                setTimeout(() => {
                    modal.style.display = "none"; // Hide after fade
                    redirectToDashboard(selectedRole);
                }, 300);
            }, 200);
        });
    });

    function redirectToDashboard(role) {
        if (role === "player") {
            window.location.href = "player-dashboard.html";
        } else if (role === "scout") {
            window.location.href = "scout-dashboard.html";
        } else if (role === "academy") {
            window.location.href = "academy-dashboard.html";
        }
    }
});
