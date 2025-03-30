document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Performance Score',
                data: [75, 80, 85, 90, 92],
                borderColor: '#007BFF',
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("performanceRadarChart").getContext("2d");

    new Chart(ctx, {
        type: "radar",
        data: {
            labels: ["Speed", "Stamina", "Strength", "Pass Accuracy", "Agility"],
            datasets: [{
                label: "Player Stats",
                data: [80, 90, 75, 85, 88], // Sample data, replace with real values
                backgroundColor: "rgba(0, 123, 255, 0.3)",
                borderColor: "#007BFF",
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
});
