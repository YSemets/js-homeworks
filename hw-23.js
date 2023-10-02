

class BankAccount {
    constructor (balance, accountHolder) {
        this._balance = balance;
        this.accountHolder = accountHolder;
    }
    getbalance = () => {
        return this._balance;
    };
    setbalance = (balance) => {
        this._balance = balance;
    };

  }

const account = new BankAccount(1000, "John Doe");
account.balance = 1500;
console.log(account.balance);





class Animal {
    constructor (name) {
        this.name = name;
    }
    getInfo() {
        return `info`
    }
  }
  class Mammal extends Animal{
    constructor (name, breed) {
        super(name);
        this.breed = breed;
    }
    getInfo() {
        const parentInfo = super.getInfo();
        return `${parentInfo}, breed: ${this.breed}`;
    }
    getRun() {
        return `run`;
    }
  }
  class Bird extends Animal {
    constructor (name) {
        super(name);
    }
    getInfo() {
        const parentInfo = super.getInfo();
        return `${parentInfo}, can fly`;
    }
    getFly() {
        return `fly`;
    }
  }
  class Dog extends Mammal{
    constructor (name, breed) {
        super(name, breed);
    }
    getwhoIsGoodDog () {
        return 'woof woof';
    }
  }
  class Penguin extends Bird {
    constructor (name, species) {
        super(name);
        this.species = species;
    }
    getFly () {
        const parentInfo = super.getInfo();
        return `${parentInfo}, can't fly`;
    }
    getSwim () {
        return 'can swim';
    }
  }


const lion = new Mammal("Lion", "African Lion");
const sparrow = new Bird("Sparrow");
const goldenRetriever = new Dog("Golden Retriever", "Retriever");
const emperorPenguin = new Penguin("Emperor Penguin", "Emperor");

console.log(lion.getInfo()); 
console.log(sparrow.getInfo()); 
console.log(goldenRetriever.getInfo()); 
console.log(emperorPenguin.getInfo());

console.log(goldenRetriever.getwhoIsGoodDog());
console.log(emperorPenguin.getSwim());








class Vehicle {
    constructor(power, gasTank, mass, maxSpeed) {
        this.power = power;
        this.gasTank = gasTank;
        this.mass = mass;
        this.started = false;
        this.maxSpeed = maxSpeed;
        this.gasLevel = 0;
    }
    maxSpeed(x) {
        return 0.84 * this.power / this.mass;
    }
    getGasUsage() {
        return Math.round(this.maxSpeed / this.power * 100);
    }
    startEngine () {
        this.started = true;
    }
    stopEngine () {
        this.started = false;
    }
    drive(speed, distance) {
        if (!this.started) {
            console.log("Cannot drive because the engine is not started.");
            return;
        } 

        if (speed < 0) {
            console.log("Speed cannot be negative.");
            return;
        }

        if (speed > this.maxSpeed) {
            console.log(`Speed cannot exceed the maximum speed of ${this.maxSpeed} km/h.`);
            return;
        }

        const time = distance / speed;

        console.log(`Driving at ${speed} km/h for ${distance} km will take ${time} hours.`);
        return [speed, distance];
    }

    consumeGas(distance, speed) {
        if (this.started) {
            const gasLevel = distance * gasUsage / 100;

            if (this.gasLevel >= gasUsage) {
                this.gasLevel -= gasUsage;
                console.log(`Gas consumed: ${gasLevel} liters`);
            } else {
                console.log("Not enough gas to complete the trip.");
            }
        } else {
            console.log("Cannot consume gas because the engine is not started.");
        }
    }
    addGas(gasLevel) {
        if (gasLevel > 0) {
            const totalGas = this.gasLevel + gasLevel;
            if (totalGas > this.gasTank) {
                const availableSpace = this.gasTank - this.gasLevel;
                console.log(`Exceeded gas tank capacity. Added ${availableSpace} liters of gas.`);
                this.gasLevel = this.gasTank;
            } else {
                this.gasLevel = totalGas;
                console.log(`Added ${gasLevel} liters of gas. Current gas level: ${this.gasLevel} liters`);
            }
        } else {
            console.log("Amount must be greater than zero to add gas.");
        }
    }

  }
  
  class Car extends Vehicle {
    constructor(power, gasTank, mass, type, maxPassengerCount) {
        super(power, gasTank, mass, 200);
        this.type = type;
        this.maxPassengerCount = maxPassengerCount;
    }
 
    printInfo() {
        console.log(`type: ${this.type}`);
        console.log(`maxPassengerCount: ${this.maxPassengerCount}`);
        super.printInfo();
    }
  }
  
  class Bus extends Car{
    constructor(power, gasTank, mass, type, maxPassengerCount, passengerCount) {
        super(power, gasTank, mass, type, maxPassengerCount);
        this.passengerCount = passengerCount;
    }

    updatePassengers (passengers) {
        if (passengers >= 0 && passengers <= this.maxPassengerCount) {
            this.passengerCount = passengers;
        } else {
            console.error('Invalid passenger count');
        }
        
    }
    printInfo() {
        console.log(`type: ${this.type}`);
        console.log(`maxPassengerCount: ${this.maxPassengerCount}`);
        super.printInfo();
    }
  }


const myVehicle = new Vehicle(150, 60, 2000, 180);
const myCar = new Car(200, 70, 1800, 'Sedan', 5);
const myBus = new Bus(300, 100, 4000, 'Bus', 30, 10);

myVehicle.startEngine();
myVehicle.drive(150, 300);
myVehicle.addGas(50);
myBus.updatePassengers(4);

myCar.startEngine();
myCar.drive(150, 100);
myCar.addGas(50);
myBus.updatePassengers(15);

myBus.startEngine();
myBus.drive(150, 300);
myBus.addGas(100);
myBus.updatePassengers(15);






