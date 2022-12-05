"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.address = address;
        this.name = name;
    }
    getNameWithAddress() {
        // return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }
}
let john = new Employee(1, 'f', 'f');
console.log(john.getNameWithAddress());
// john.id=1
// john.name='John'
// john.address='Bavi'
console.log(john);
