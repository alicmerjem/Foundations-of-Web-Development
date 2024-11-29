// Array of objects containing the card data
const cardData = [
    {
        title: "How to Create a Professional CV",
        description: "Learn the key steps in creating a professional CV that stands out to recruiters. Discover tips on layout, design, and content that will make your CV shine.",
        fullContent: "Click 'Read More' to learn all about creating a professional CV."
    },
    {
        title: "Common CV Mistakes to Avoid",
        description: "Discover the most common CV mistakes that could cost you an interview. Learn how to avoid these pitfalls to ensure your CV is perfect.",
        fullContent: "Click 'Read More' to uncover the top CV mistakes."
    },
    {
        title: "How to Tailor Your CV for a Specific Job",
        description: "Tailoring your CV to fit a specific job posting is crucial. Find out how to highlight the skills and experience that are most relevant to the role you're applying for.",
        fullContent: "Click 'Read More' to explore tips on tailoring your CV."
    },
    {
        title: "The Importance of a CV Summary",
        description: "A CV summary can be a powerful tool to catch the recruiter's attention. Learn how to craft a compelling summary that showcases your best skills and experience.",
        fullContent: "Click 'Read More' for details on writing a CV summary."
    }
];

// Reference to the container element
const cardContainer = document.getElementById("card-container");

// Dynamically generate cards
cardData.forEach((card) => {
    // Create a card element
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    // Add the card content
    cardElement.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <a href="#">Read More</a>
    `;

    // Append the card to the container
    cardContainer.appendChild(cardElement);
});
