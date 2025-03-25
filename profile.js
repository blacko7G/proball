// Open the message modal
function openMessageModal() {
    document.getElementById("messageModal").style.display = "block";
}

// Close the message modal
function closeMessageModal() {
    document.getElementById("messageModal").style.display = "none";
}

// Simulate sending a message
function sendMessage() {
    let message = document.getElementById("messageInput").value;
    if (message.trim() === "") {
        alert("Please enter a message before sending.");
        return;
    }
    alert("Message sent successfully!");
    document.getElementById("messageInput").value = ""; // Clear the input
    closeMessageModal(); // Close modal after sending
}
