let person1 = {
    name: 'Don',

    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person2 = {
    name: 'Michelle',

    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
let person3 = {
    name: 'Kristen',

    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
let person4 = {
    name: 'Hank',

    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
let person5 = {
    name: 'Lucas',

    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

function Info(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}

Info.prototype.whatsUp = function () {
    console.log('Hey! My name is ' + this.name + ', I am ' + this.age + ' years old and I live in ' + this.city + '.');
}

let p1 = new Info('Don', 'PR', '61');
p1.whatsUp();

let p2 = new Info('Michelle', 'PR', '59');
p2.whatsUp();

let p3 = new Info('Kristen', 'Okinawa', '33');
p3.whatsUp();

let p4 = new Info('Hank', 'Okinawa', '2');
p4.whatsUp();

let p5 = new Info('Lucas', 'Okinawa', '1');
p5.whatsUp();

////// ES6/ES2015 Syntax for OOP
class Vehicle {
    constructor(manufac, wheels) {
        this.manufac = manufac;
        this.wheels = wheels;
        this.type = 'vehicle';
    }
    aboutVehicle() {
        console.log(`This is a ${this.type} made by ${this.manufac} that has ${this.wheels} wheels.`);
    }
}
let vehicle = new Vehicle('Cadillac', 4)
console.log(vehicle);
vehicle.aboutVehicle();

console.log(' ');

class Truck extends Vehicle {
    constructor(manufac, type, wheels, doors, bed) {
        super(manufac, wheels);
        this.doors = doors;
        this.type = type;
        this.bed = (type === 'truck' ? 'has' : 'does not have');
    
    }
    aboutVehicle() {
        console.log(`This is a ${this.manufac} ${this.type} with ${this.wheels} wheels, ${this.doors} doors, and it ${this.bed} a truckbed.`);
    }
}
const newTruck = new Truck('Cadillac','truck', 4, 2);                 // this.bed condition => 'has'
// const newTruck = new Truck('Cadillac','sedan', 4, 2);            // this.bed condition => 'does not have'
console.log(newTruck);
newTruck.aboutVehicle();

class Sedan extends Vehicle {
    constructor(manufac, type, wheels, doors, size, mpg) {
        super(manufac, wheels);
        this.type = type;
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This is a ${this.size} size ${this.manufac} ${this.type} with ${this.wheels} wheels, ${this.doors} doors, and gets ${this.mpg} mpg.`);
    }
}
let sedan = new Sedan('Cadillac','sedan', 4, 4, 'medium', 250);
sedan.aboutVehicle();
console.log(sedan);

class Motorcycle extends Vehicle {
    constructor(hdbars, steer, doors, wheels) {
        super(doors, wheels);
        this.doors = (doors === 0 ? 'is a motorcycle' : 'is not a motorcycle');
        this.hdbars = (hdbars === true ? 'handlebars' : 'NO handlebars');
        this.steer = (steer === true ? 'has a steering wheel' : 'does NOT have a steering wheel');
    }  
    aboutVehicle() {
        console.log(`This ${this.doors} so of course is has ${this.wheels} wheels, plus ${this.hdbars}, and it ${this.steer}.`);
    }
}
let moto = new Motorcycle(true, false, 0, 2);
moto.aboutVehicle();
console.log(moto);
