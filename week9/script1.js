// Ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    let startTime = new Date();
    let timerInterval;
  
    // Start the session timer
    timerInterval = setInterval(() => {
      const now = new Date();
      const duration = new Date(now - startTime);
      const hours = String(duration.getUTCHours()).padStart(2, '0');
      const minutes = String(duration.getMinutes()).padStart(2, '0');
      const seconds = String(duration.getSeconds()).padStart(2, '0');
      document.getElementById('session-timer').textContent = `Session Duration: ${hours}:${minutes}:${seconds}`;
    }, 1000);
  
    // Handle sign-out button click
    const signOutButton = document.getElementById('sign-out-btn');
    if (signOutButton) {
      signOutButton.addEventListener('click', function () {
        clearInterval(timerInterval);
  
        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('endSessionModal'));
        const sessionDuration = new Date(new Date() - startTime).toISOString().substr(11, 8); // Format duration
        document.getElementById('session-duration-info').textContent = `Your session lasted: ${sessionDuration}`;
        modal.show();
  
        // Handle OK button in modal
        document.getElementById('end-session-btn').addEventListener('click', function () {
          window.location.href = 'index.html'; // Redirect to login page
        });
      });
    }
  });
  