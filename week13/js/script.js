$(document).ready(function () {
    // defined the page templates
    const pages = {
        home: `
            <h1>Welcome to MyApp</h1>
            <p>This is the Home page. Explore our app using the navigation bar.</p>
        `,
        login: `
            <h1>Login</h1>
            <form id="login-form">
                <label for="login-email">Email:</label><br>
                <input type="email" id="login-email" placeholder="Enter your email" required><br>
                <label for="login-password">Password:</label><br>
                <input type="password" id="login-password" placeholder="Enter your password" required><br>
                <button type="submit">Login</button>
            </form>
        `,
        register: `
            <h1>Register</h1>
            <form id="register-form">
                <label for="register-email">Email:</label><br>
                <input type="email" id="register-email" placeholder="Enter your email" required><br>
                <label for="register-password">Password:</label><br>
                <input type="password" id="register-password" placeholder="Enter your password" required><br>
                <label for="register-confirm-password">Confirm Password:</label><br>
                <input type="password" id="register-confirm-password" placeholder="Re-enter your password" required><br>
                <button type="submit">Register</button>
            </form>
        `,
        "forgot-password": `
            <h1>Forgot Password</h1>
            <form id="forgot-password-form">
                <label for="reset-email">Email:</label><br>
                <input type="email" id="reset-email" placeholder="Enter your email to reset password" required><br>
                <button type="submit">Reset Password</button>
            </form>
        `,
    };

    // load the home page by default
    $("#app").html(pages.home);

    // handle nav
    $(".nav-link").click(function (e) {
        e.preventDefault();
        const page = $(this).data("page"); 
        $("#app").html(pages[page]); 
    });

    // handle form submission
    $(document).on("submit", "form", function (e) {
        e.preventDefault();
        let isValid = true;

        $(this)
            .find("input[required]")
            .each(function () {
                if ($(this).val().trim() === "") {
                    alert("Please fill out all required fields!");
                    isValid = false;
                    return false;
                }
            });

        if (isValid && $(this).attr("id") === "register-form") {
            const password = $("#register-password").val();
            const confirmPassword = $("#register-confirm-password").val();

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                isValid = false;
            }
        }
        
        if (isValid) {
            alert("Form submitted successfully!");
        }
    });
});
