async function fetchJobListings() {
    const jobsContainer = document.getElementById("jobs-container");
    jobsContainer.innerHTML = ""; // Clear existing content
  
    try {
      // Fetch job listings from RemoteOK API
      const response = await fetch("https://remoteok.com/api");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const jobs = await response.json();
  
      // Display each job dynamically as a card
      jobs.slice(1).forEach(job => { // Skip the first index (metadata)
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";
  
        jobCard.innerHTML = `
          <h5>${job.position || "No Title Available"}</h5>
          <p><strong>Company:</strong> ${job.company || "Unknown"}</p>
          <p>${job.description || "No Description Available"}</p>
          <a href="${job.url}" target="_blank">Apply Now</a>
        `;
  
        jobsContainer.appendChild(jobCard);
      });
    } catch (error) {
      // Display error message if fetching fails
      jobsContainer.innerHTML = `<p class="error-message">Failed to load job listings. Please try again later.</p>`;
      console.error("Error fetching job listings:", error);
    }
  }
  
  // Automatically fetch jobs on page load
  window.onload = fetchJobListings;
  