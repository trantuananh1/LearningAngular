class Employee {
    private id:number;
    name!:string;
    address!:string;

    constructor(id:number, name:string, address:string){
        this.id = id;
        this.address = address;
        this.name = name;
    }

    getNameWithAddress() : string {
        // return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }
}

let john = new Employee(1, 'f', 'f');
console.log(john.getNameWithAddress())
// john.id=1
// john.name='John'
// john.address='Bavi'

console.log(john)