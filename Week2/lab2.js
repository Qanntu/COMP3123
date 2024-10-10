//Comp-3123 
//Lab 2

//Exercise 1:
const greeter = (myArray, counter) =>{
    const greetText = 'Hello ';

    for (const person of myArray){
        console.log(`${greetText}${person}`);
    }
}
greeter(['Randy', 'Ric Flair', 'Hulk Hogan'], 3);


//Exercise 2:
const capitalize = ([v1, ...rem]) =>
    v1.toUpperCase() + rem.join('').toLocaleLowerCase();

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Exercise 3:
const colors = ['red', 'green', 'blue']
const capitalizedColors = colors.map((n) => capitalize(n));

console.log(capitalizedColors)

//Exercise 4:
var values = [1, 60, 34, 30, 20, 5]
var filterLessThan20 = values.filter((val) => val < 20);

console.log(filterLessThan20)

//Exercise 5:
var array = [1, 2, 3, 4]
const calculateSum = (t,e) => t+e;
const calculateProduct = (t,e) => t*e;

console.log(array.reduce(calculateSum));
console.log(array.reduce(calculateProduct));

//Exercise 6:
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details(){
        return `Model: ${this.model}, Engine ${this.year}`;
    }
}

//subclass - extends Car super Class
class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details()); 

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
