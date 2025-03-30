
function toggleForm() {
    document.getElementById('login-box').classList.toggle('active');
    document.getElementById('register-box').classList.toggle('active');
}


window.onload = function () {
    if (localStorage.getItem("savedEmail")) {
        document.getElementById("login-email").value = localStorage.getItem("savedEmail");
        document.getElementById("login-password").value = localStorage.getItem("savedPassword");
        document.getElementById("remember").checked = true;
    }
};

// Remember Me Feature
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission for simulation

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let errorMsg = document.getElementById("login-error");

    if (!email || !password) {
        errorMsg.innerText = "Email and Password are required!";
        return;
    }

    if (document.getElementById("remember").checked) {
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
    } else {
        localStorage.removeItem("savedEmail");
        localStorage.removeItem("savedPassword");
    }

    alert("Login Successful!");
    window.location.href = "dashboard.html"; // Redirect after successful login
});

// OTP Simulation
function sendOTP() {
    alert("OTP Sent to your registered email/phone! Enter it in the form.");
    document.getElementById('otp-box').style.display = 'block';
}

function verifyOTP() {
    let otp = document.getElementById('otp-input').value;
    if (otp === "123456") { // Simulating OTP verification
        alert("OTP Verified! You are now logged in.");
        window.location.href = "selection.html"; 
    } else {
        alert("Invalid OTP. Try again.");
    }
}


function forgotPassword() {
    let email = prompt("Enter your registered email:");
    if (email) {
        alert("A password reset link has been sent to " + email);
    }
}


function socialLogin(provider) {
    alert(`Logging in with ${provider}...`);
    window.location.href = "dashboard.html"; 
}
