// Get references to the relevant DOM elements
const buyButton = document.getElementById("buyButton");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModal");
const totalPriceElement = document.getElementById("totalPrice");
const averagePriceElement = document.getElementById("averagePrice");
const avgDownElement = document.getElementById("avg-down");
const avgUpElement = document.getElementById("avg-up");

// Get all product inputs and prices
const basicCVQuantity = document.getElementById("basicCVQuantity");
const bestTricks = document.getElementById("bestTricks");
const plagiarismCheck = document.getElementById("plagiarismCheck");
const profTemplates = document.getElementById("profTemplates");
const interviewSession = document.getElementById("interviewSession");

// Function to update the current price based on the quantity
function updatePrice(inputElement, priceElement, pricePerUnit) {
    const quantity = inputElement.value;
    const currentPrice = pricePerUnit * quantity;
    priceElement.textContent = currentPrice.toFixed(2);
}

// Function to calculate the total price and average price
function calculateTotalAndAverage() {
    const priceElements = document.querySelectorAll(".price");
    const quantities = [
        basicCVQuantity.value,
        bestTricks.value,
        plagiarismCheck.value,
        profTemplates.value,
        interviewSession.value
    ];

    let total = 0;
    let totalWithoutDiscount = 0;
    let totalWithTax = 0;

    priceElements.forEach((priceElement, index) => {
        const pricePerUnit = parseFloat(priceElement.getAttribute("data-price"));
        const quantity = parseInt(quantities[index]);

        const currentPrice = pricePerUnit * quantity;
        total += currentPrice;

        totalWithoutDiscount += currentPrice * 0.95; // Applying 5% discount
        totalWithTax += currentPrice * 1.10; // Adding 10% tax
    });

    const average = total / 5;

    totalPriceElement.textContent = `Total Price: $${total.toFixed(2)}`;
    averagePriceElement.textContent = `Average Price per Product: $${average.toFixed(2)}`;
    avgDownElement.textContent = `Price after 5% discount: $${totalWithoutDiscount.toFixed(2)}`;
    avgUpElement.textContent = `Price after 10% tax: $${totalWithTax.toFixed(2)}`;
}

// Event listeners to update prices when input changes
basicCVQuantity.addEventListener("input", function () {
    updatePrice(basicCVQuantity, document.querySelector("#pricingTable tr:nth-child(1) td:last-child"), 5);
    calculateTotalAndAverage();
});

bestTricks.addEventListener("input", function () {
    updatePrice(bestTricks, document.querySelector("#pricingTable tr:nth-child(2) td:last-child"), 10);
    calculateTotalAndAverage();
});

plagiarismCheck.addEventListener("input", function () {
    updatePrice(plagiarismCheck, document.querySelector("#pricingTable tr:nth-child(3) td:last-child"), 15);
    calculateTotalAndAverage();
});

profTemplates.addEventListener("input", function () {
    updatePrice(profTemplates, document.querySelector("#pricingTable tr:nth-child(4) td:last-child"), 20);
    calculateTotalAndAverage();
});

interviewSession.addEventListener("input", function () {
    updatePrice(interviewSession, document.querySelector("#pricingTable tr:nth-child(5) td:last-child"), 25);
    calculateTotalAndAverage();
});

// Open modal on "Buy" button click
buyButton.addEventListener("click", function () {
    modal.style.display = "flex";
});

// Close modal on "Close" button click
closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
});
