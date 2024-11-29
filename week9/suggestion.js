// Skills-to-template mappings
const skillTemplateMap = {
    JavaScript: ["Developer", "Full Stack"],
    HTML: ["Frontend Developer", "Web Designer"],
    CSS: ["Frontend Developer", "Web Designer"],
    React: ["Frontend Developer", "React Developer"],
    Photoshop: ["Graphic Designer", "Creative"],
    Illustrator: ["Graphic Designer", "Creative"],
    Sketch: ["UI/UX Designer"]
};

// Button and form references
const suggestButton = document.getElementById("suggest-button");
const templateList = document.getElementById("template-list");

// Event listener for button click
suggestButton.addEventListener("click", () => {
    // Get selected skills
    const selectedSkills = new Set();
    const checkboxes = document.querySelectorAll("#skills-form input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedSkills.add(checkbox.value);
        }
    });

    // Generate template suggestions based on skills
    const suggestedTemplates = new Set();
    selectedSkills.forEach((skill) => {
        if (skillTemplateMap[skill]) {
            skillTemplateMap[skill].forEach((template) => suggestedTemplates.add(template));
        }
    });

    // Update the template list in the UI
    templateList.innerHTML = ""; // Clear existing suggestions
    if (suggestedTemplates.size > 0) {
        suggestedTemplates.forEach((template) => {
            const listItem = document.createElement("li");
            listItem.textContent = template;
            templateList.appendChild(listItem);
        });
    } else {
        templateList.innerHTML = "<li>No templates found for the selected skills.</li>";
    }
});
