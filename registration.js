document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    const messageContainer = document.getElementById("message");

    registrationForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(registrationForm);
        const userData = Object.fromEntries(formData);

        try {
            // Load existing users from users.json
            const response = await fetch("users.json");
            const users = await response.json();

            const usernameExists = users.some((user) => user.username === userData.uname);
            const emailExists = users.some((user) => user.email === userData.emailadd);

            if (usernameExists) {
                messageContainer.textContent = "Error: Username already exists.";
                messageContainer.style.color = "red";
            } else if (emailExists) {
                messageContainer.textContent = "Error: Email already exists.";
                messageContainer.style.color = "red";
            } else {
                messageContainer.textContent = "Success: Registration complete!";
                messageContainer.style.color = "green";

                // Simulate saving the new user (for now, just log it to the console)
                console.log("New user registered:", userData);
            }
        } catch (error) {
            console.error("Error loading users.json:", error);
            messageContainer.textContent = "Error: Unable to process registration.";
            messageContainer.style.color = "red";
        }
    });
});
