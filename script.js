document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get("role");

    if (role) {
        document.getElementById("userRole").textContent = `Welcome, ${role}!`;
    }
});
