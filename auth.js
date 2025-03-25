   function toggleForm() {
            document.getElementById('login-box').classList.toggle('active');
            document.getElementById('register-box').classList.toggle('active');
        }

        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Login successful!');
        });

        document.getElementById('register-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Registration successful!');
        });
 