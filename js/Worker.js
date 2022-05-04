class Worker{
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        let salary = this.rate * this.days;
        return salary;
    }

}

const worker = new Worker('Иван', 'Иванов', 10, 31);
const worker1 = new Worker('Антон', 'Андреев', 15, 30);
const worker2 = new Worker('Николай', 'Антонов', 20, 14);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
console.log(worker1.getSalary());
console.log(worker2.getSalary());
