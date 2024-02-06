class Uber {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distanceInMiles, durationInMinutes) {
        const distanceCost = this.costPerMile * distanceInMiles;
        const durationCost = this.costPerMinute * durationInMinutes;
        const totalPrice = this.baseFare + distanceCost + durationCost + this.bookingFee;
        return totalPrice;
    }
}

// Example usage:
const uberX = new Uber(2.5, 0.35, 1.75, 1.5);
const distance = 10; // in miles
const duration = 25; // in minutes
const totalPrice = uberX.calculatePrice(distance, duration);
console.log("Total price:", totalPrice.toFixed(2)); // Rounded to 2 decimal places