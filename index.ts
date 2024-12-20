// 1. Create an enum Status
enum Status {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
  }
  
  // 2. Create the Vehicle interface
  interface Vehicle {
    brand: string;
    model: string;
    year: number;
    status: Status;
  }
  
  // 3. Create a type alias for Driver
  type Driver = {
    name: string;
    licenseNumber: string;
    vehicles: Vehicle[];
  }
  
  // 4. Function to add a vehicle to a driver
  function addVehicleToDriver(driver: Driver, vehicle: Vehicle): void {
    driver.vehicles.push(vehicle);
  }
  
  // 5. Test the addVehicleToDriver function
  const driver: Driver = { name: "John Doe", licenseNumber: "ABC123", vehicles: [] };
  const car1: Vehicle = { brand: "Toyota", model: "Corolla", year: 2020, status: Status.Active };
  const car2: Vehicle = { brand: "Honda", model: "Civic", year: 2019, status: Status.Inactive };
  
  addVehicleToDriver(driver, car1);
  addVehicleToDriver(driver, car2);
  
  console.log(driver); // Logs the driver with the vehicles
  
  // 6. Function to calculate fuel cost
  function calculateFuelCost(distance: number, fuelEfficiency: number = 15, fuelPrice: number): number {
    return (distance / fuelEfficiency) * fuelPrice;
  }
  
  // 7. Test the calculateFuelCost function
  const fuelCost = calculateFuelCost(100, 15, 5); // 100 km, 15 km/l fuel efficiency, 5 per liter fuel price
  console.log(`Fuel cost: $${fuelCost}`);
  
  // 8. Function to calculate discount
  function calculateDiscount(price: number, discountRate: number = 0.1): number {
    return price - (price * discountRate);
  }
  
  // 9. Test the calculateDiscount function
  const discountedPrice = calculateDiscount(200); // Price of 200 with default 10% discount
  console.log(`Discounted price: $${discountedPrice}`);
  
  // 10. Function to format greeting message
  function formatGreeting(name: string, salutation: string = ""): string {
    return salutation ? `${salutation} ${name}` : `Hello, ${name}`;
  }
  
  // 11. Test the formatGreeting function
  console.log(formatGreeting("John")); // Without salutation
  console.log(formatGreeting("John", "Mr.")); // With salutation
  
  // 12. Function to calculate travel cost
  function calculateTravelCost(distance: number, fuelEfficiency: number = 15, fuelPrice: number = 5): number {
    return (distance / fuelEfficiency) * fuelPrice;
  }
  
  // 13. Test the calculateTravelCost function
  const travelCost = calculateTravelCost(100); // 100 km, default 15 km/l fuel efficiency, default 5 per liter fuel price
  console.log(`Travel cost: $${travelCost}`);
  
  // 14. Create the Product class
  class Product {
    constructor(
      public name: string,
      public price: number = 0,
      public category: string = "General"
    ) {}
  
    getDetails = (): void => {
      console.log(`Product Name: ${this.name}, Price: $${this.price}, Category: ${this.category}`);
    };
  }
  
  // 15. Create instances of Product
  const laptop = new Product("Laptop", 1000, "Electronics");
  const notebook = new Product("Notebook"); // Using default price and category
  
  // Call getDetails for both products
  laptop.getDetails();
  notebook.getDetails();
  
  // 16. Create the LibraryAccount class
  class LibraryAccount {
    private booksBorrowed: number = 0;
    private penaltyAmount: number = 0;
  
    constructor(public accountId: string, public owner: string) {}
  
    borrowBook(count: number): void {
      if (this.booksBorrowed + count <= 10) {
        this.booksBorrowed += count;
        console.log(`${count} book(s) borrowed.`);
      } else {
        console.log("You can't borrow more than 10 books.");
      }
    }
  
    returnBook(count: number): void {
      this.booksBorrowed -= count;
      console.log(`${count} book(s) returned.`);
    }
  
    applyPenaltyForLateReturn(): void {
      this.penaltyAmount += 5;
      console.log("Penalty applied for late return.");
    }
  
    showPenalty(): void {
      console.log(`Total penalty: $${this.penaltyAmount}`);
    }
  
    private updatePenalty(amount: number): void {
      this.penaltyAmount += amount;
    }
  }
  
  // 17. Create an object of LibraryAccount
  const libraryAccount = new LibraryAccount("1234", "John");
  
  // Perform actions on the LibraryAccount
  libraryAccount.borrowBook(4); // Borrow 4 books
  libraryAccount.borrowBook(7); // Try borrowing 7 books (should log a warning)
  libraryAccount.returnBook(2); // Return 2 books
  libraryAccount.applyPenaltyForLateReturn(); // Apply penalty
  libraryAccount.showPenalty(); // Show penalty amount
  