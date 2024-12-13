// function to handle routing based on the current URL path
function route() {
    const route = window.location.pathname; // Get the current path of the URL
    const container = document.getElementById('app-container'); // This is where the content will go

    // default route if no specific route is defined (i.e., Home page)
    if (route === '/' || route === '/home') {
        container.innerHTML = `
            <div class="container">
                <h1>Welcome to My App</h1>
                <p>Home Page</p>
            </div>
        `;
    }

    // handle login route
    else if (route === '/login') {
        container.innerHTML = `
            <div class="container">
                <div class="form-box">
                    <h2>Login</h2>
                    <form id="login-form">
                        <input type="text" id="email" placeholder="Email" required><br><br>
                        <input type="password" id="password" placeholder="Password" required><br><br>
                        <button type="submit">Login</button><br><br>
                        <a href="#" onclick="navigateTo('/register')">Register</a> | 
                        <a href="#" onclick="navigateTo('/forgot-password')">Forgot Password?</a>
                    </form>
                </div>
            </div>
        `;
        // Add event listener to handle login form submission
        document.getElementById('login-form').addEventListener('submit', handleLogin);
    }

    // handle register route
    else if (route === '/register') {
        container.innerHTML = `
            <div class="container">
                <div class="form-box">
                    <h2>Register</h2>
                    <form action="#">
                        <input type="text" placeholder="Username" required><br><br>
                        <input type="password" placeholder="Password" required><br><br>
                        <button type="submit">Register</button><br><br>
                        <a href="#" onclick="navigateTo('/login')">Already have an account? Login</a> | 
                        <a href="#" onclick="navigateTo('/forgot-password')">Forgot Password?</a>
                    </form>
                </div>
            </div>
        `;
    }
    
    // handle forgot password route
    else if (route === '/forgot-password') {
        container.innerHTML = `
            <div class="container">
                <div class="form-box">
                    <h2>Forgot Password</h2>
                    <form action="#">
                        <input type="email" placeholder="Enter your email" required><br><br>
                        <button type="submit">Submit</button><br><br>
                        <a href="#" onclick="navigateTo('/login')">Back to Login</a>
                    </form>
                </div>
            </div>
        `;
    }
}

// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Fetch the users from the JSON file
    fetch('usersr.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                // If user exists, navigate to home page
                navigateTo('/home');
            } else {
                // If user does not exist, show error message
                alert('Incorrect email or password. Please try again or reset your password.');
            }
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            alert('An error occurred while checking your credentials. Please try again.');
        });
}

// function to navigate to a specific route and update the URL without refreshing the page
function navigateTo(path) {
    window.history.pushState({}, "", path); // Change the URL without reloading the page
    route(); // Call route() again to load the new content
}

// initial call to load the correct content based on the current path
route();

// listen for changes in the URL (e.g., when the user presses the back or forward button)
window.addEventListener('popstate', route);
