class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        console.log(this.rate * this.days)
    }
}


let worker1 = new Worker('Jhon', 'Watson', 100, 36);

console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.getSalary());