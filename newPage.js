// Data structure to define categories and subcategories
const categories = {
    "Searching": ["Linear Search", "Binary Search"],
    "Sorting": ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
    "Tree": ["Binary Tree", "Binary Search Tree"]
};

// Function to generate and display breadcrumbs
function generateBreadcrumb(path) {
    const breadcrumbContainer = document.getElementById('breadcrumb');
    breadcrumbContainer.innerHTML = ''; // Clear existing breadcrumb

    path.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        breadcrumbContainer.appendChild(li);
    });
}

// Function to display the category or subcategory content
function displayContent(path) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Clear existing content

    if (path.length === 1) { // Category
        contentContainer.innerHTML = `<div class="category"><h2>${path[0]}</h2></div>`;
    } else { // Subcategory
        contentContainer.innerHTML = `<div class="subcategory"><h2>${path.join(' / ')}</h2></div>`;
    }
}

// Function to setup category and subcategory event listeners
function setupEventListeners() {
    // Category links
    const categoryLinks = document.querySelectorAll('.category');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const category = e.target.textContent;
            generateBreadcrumb([category]);
            displayContent([category]);
        });
    });

    // Subcategory links
    const subcategoryLinks = document.querySelectorAll('.subcategory');
    subcategoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            const subcategory = e.target.textContent;
            generateBreadcrumb([category, subcategory]);
            displayContent([category, subcategory]);
        });
    });
}

// Function to initialize the page with categories and subcategories
function initializePage() {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = ''; // Clear existing categories

    // Loop through categories and create links for each one
    Object.keys(categories).forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.textContent = category;

        // Add subcategory links under each category
        const subcategoryList = document.createElement('ul');
        categories[category].forEach(subcategory => {
            const subcategoryItem = document.createElement('li');
            const subcategoryLink = document.createElement('div');
            subcategoryLink.textContent = subcategory;
            subcategoryLink.classList.add('subcategory');
            subcategoryLink.dataset.category = category;
            subcategoryItem.appendChild(subcategoryLink);
            subcategoryList.appendChild(subcategoryItem);
        });

        categoryDiv.appendChild(subcategoryList);
        categoryContainer.appendChild(categoryDiv);
    });

    // Set up event listeners after elements are created
    setupEventListeners();
}

// Initialize page and set the first breadcrumb
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    generateBreadcrumb(["Home"]);
    displayContent(["Home"]);
});
