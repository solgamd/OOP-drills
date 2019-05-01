let person1 = {
    name: 'Bob',
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
let person2 = {
    name: 'Linda',
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
let person3 = {
    name: 'Tina',
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
let person4 = {
    name: 'Gene',
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
let person5 = {
    name: 'Louise',
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();


////// PSEUDO CLASSES -----------------------------------------------------------

function Info(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}

Info.prototype.whatsUp = function() {
    console.log('Hey! My name is ' + this.name + ', I am ' + this.age + ' years old and I live in ' + this.city + '.');
}

let p1 = new Info('Bob', 'Somewhere, NJ', '49');
p1.whatsUp();

let p2 = new Info('Linda', 'Somewhere, NJ', '47');
p2.whatsUp();

let p3 = new Info('Tina', 'Somewhere, NJ', '14');
p3.whatsUp();

let p4 = new Info('Gene', 'Somewhere, NJ', '11');
p4.whatsUp();

let p5 = new Info('Louise', 'Somewhere, NJ', '8');
p5.whatsUp();

console.log(' '); // making space in the console 


////// ES6/ES2015 Syntax 

class moreInfo {
    constructor(name, city, age) {
        this.name = name;
    this.city = city;
    this.age = age;
    }
    aboutPerson() {
        console.log('Hey! My name is ' + this.name + ', I am ' + this.age + ' years old and I live in ' + this.city + '.');
    }
}

let belcher1 = new moreInfo('Bob', 'Somewhere, NJ', '49');
belcher1.aboutPerson();

let belcher2 = new moreInfo('Linda', 'Somewhere, NJ', '47');
belcher2.aboutPerson();

let belcher3 = new moreInfo('Tina', 'Somewhere, NJ', '14');
belcher3.aboutPerson();

let belcher4 = new moreInfo('Gene', 'Somewhere, NJ', '11');
belcher4.aboutPerson();

let belcher5 = new moreInfo('Louise', 'Somewhere, NJ', '8');
belcher5.aboutPerson();

console.log(' '); // making space in the console 


////// INHERITANCE -----------------------------------------------------

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

class Truck extends Vehicle {
    constructor(manufac, type, wheels, doors, bed) {
        super(manufac, wheels);
        this.doors = doors;
        this.type = type;
        this.bed = (type === 'truck' ? 'has' : 'does not have');
    }
    aboutVehicle() {
        console.log(`This is a ${this.manufac} ${this.type} with ${this.wheels} wheels and ${this.doors} doors, and it ${this.bed} a truckbed.`);
    }
}
let newTruck = new Truck('Cadillac','truck', 4, 2);                 // this.bed condition => 'has'
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
        console.log(`This is a ${this.size}-sized ${this.manufac} ${this.type} with ${this.wheels} wheels, ${this.doors} doors, and it gets ${this.mpg} mpg.`);
    }
}
let sedan = new Sedan('Cadillac','sedan', 4, 4, 'medium', 250);
console.log(sedan);
sedan.aboutVehicle();

class Motorcycle extends Vehicle {
    constructor(manufac, wheels, doors, hdbars, steer) {
        super(manufac, wheels, doors);
        this.type = 'motorcycle';
        this.doors = (doors === 0 ? `is a ${manufac} motorcycle` : `is not a ${manufac} motorcycle`);
        this.hdbars = (hdbars === true ? 'handlebars' : 'NO handlebars');
        this.steer = (hdbars === true ? 'does not have a steering wheel' : 'has a steering wheel');
    }  
    aboutVehicle() {
        console.log(`This ${this.doors} so of course it has ${this.wheels} wheels and ${this.hdbars}, so it ${this.steer}.`);
    }
}
let moto = new Motorcycle('Royal Enfield', 2, 0, true, true);
console.log(moto);
moto.aboutVehicle();

