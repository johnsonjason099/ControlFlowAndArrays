//console.log("here it is")
class Vehicle{
    //constructor
    constructor (vin, make, model) {
        this.make = make;
        this.vin = vin;
    }
}const plane = new Vehicle('9916', 'Toyota')
const car = new Vehicle ('9916', 'Toyota', 'Prius');
console.log(plane);
