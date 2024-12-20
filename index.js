// 1. Create an enum Status
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Inactive"] = "Inactive";
    Status["Pending"] = "Pending";
})(Status || (Status = {}));
// 4. Function to add a vehicle to a driver
function addVehicleToDriver(driver, vehicle) {
    driver.vehicles.push(vehicle);
}
// 5. Test the addVehicleToDriver function
var driver = { name: "John Doe", licenseNumber: "ABC123", vehicles: [] };
var car1 = { brand: "Toyota", model: "Corolla", year: 2020, status: Status.Active };
var car2 = { brand: "Honda", model: "Civic", year: 2019, status: Status.Inactive };
addVehicleToDriver(driver, car1);
addVehicleToDriver(driver, car2);
console.log(driver); // Logs the driver with the vehicles
// 6. Function to calculate fuel cost
function calculateFuelCost(distance, fuelEfficiency, fuelPrice) {
    if (fuelEfficiency === void 0) { fuelEfficiency = 15; }
    return (distance / fuelEfficiency) * fuelPrice;
}
// 7. Test the calculateFuelCost function
var fuelCost = calculateFuelCost(100, 15, 5); // 100 km, 15 km/l fuel efficiency, 5 per liter fuel price
console.log("Fuel cost: $".concat(fuelCost));
// 8. Function to calculate discount
function calculateDiscount(price, discountRate) {
    if (discountRate === void 0) { discountRate = 0.1; }
    return price - (price * discountRate);
}
// 9. Test the calculateDiscount function
var discountedPrice = calculateDiscount(200); // Price of 200 with default 10% discount
console.log("Discounted price: $".concat(discountedPrice));
// 10. Function to format greeting message
function formatGreeting(name, salutation) {
    if (salutation === void 0) { salutation = ""; }
    return salutation ? "".concat(salutation, " ").concat(name) : "Hello, ".concat(name);
}
// 11. Test the formatGreeting function
console.log(formatGreeting("John")); // Without salutation
console.log(formatGreeting("John", "Mr.")); // With salutation
// 12. Function to calculate travel cost
function calculateTravelCost(distance, fuelEfficiency, fuelPrice) {
    if (fuelEfficiency === void 0) { fuelEfficiency = 15; }
    if (fuelPrice === void 0) { fuelPrice = 5; }
    return (distance / fuelEfficiency) * fuelPrice;
}
// 13. Test the calculateTravelCost function
var travelCost = calculateTravelCost(100); // 100 km, default 15 km/l fuel efficiency, default 5 per liter fuel price
console.log("Travel cost: $".concat(travelCost));
// 14. Create the Product class
var Product = /** @class */ (function () {
    function Product(name, price, category) {
        if (price === void 0) { price = 0; }
        if (category === void 0) { category = "General"; }
        var _this = this;
        this.name = name;
        this.price = price;
        this.category = category;
        this.getDetails = function () {
            console.log("Product Name: ".concat(_this.name, ", Price: $").concat(_this.price, ", Category: ").concat(_this.category));
        };
    }
    return Product;
}());
// 15. Create instances of Product
var laptop = new Product("Laptop", 1000, "Electronics");
var notebook = new Product("Notebook"); // Using default price and category
// Call getDetails for both products
laptop.getDetails();
notebook.getDetails();
// 16. Create the LibraryAccount class
var LibraryAccount = /** @class */ (function () {
    function LibraryAccount(accountId, owner) {
        this.accountId = accountId;
        this.owner = owner;
        this.booksBorrowed = 0;
        this.penaltyAmount = 0;
    }
    LibraryAccount.prototype.borrowBook = function (count) {
        if (this.booksBorrowed + count <= 10) {
            this.booksBorrowed += count;
            console.log("".concat(count, " book(s) borrowed."));
        }
        else {
            console.log("You can't borrow more than 10 books.");
        }
    };
    LibraryAccount.prototype.returnBook = function (count) {
        this.booksBorrowed -= count;
        console.log("".concat(count, " book(s) returned."));
    };
    LibraryAccount.prototype.applyPenaltyForLateReturn = function () {
        this.penaltyAmount += 5;
        console.log("Penalty applied for late return.");
    };
    LibraryAccount.prototype.showPenalty = function () {
        console.log("Total penalty: $".concat(this.penaltyAmount));
    };
    LibraryAccount.prototype.updatePenalty = function (amount) {
        this.penaltyAmount += amount;
    };
    return LibraryAccount;
}());
// 17. Create an object of LibraryAccount
var libraryAccount = new LibraryAccount("1234", "John");
// Perform actions on the LibraryAccount
libraryAccount.borrowBook(4); // Borrow 4 books
libraryAccount.borrowBook(7); // Try borrowing 7 books (should log a warning)
libraryAccount.returnBook(2); // Return 2 books
libraryAccount.applyPenaltyForLateReturn(); // Apply penalty
libraryAccount.showPenalty(); // Show penalty amount
