const Queue = require("./queue");
const cars = new Queue();
cars.enqueue("Honda");
cars.enqueue("Toyota");
cars.enqueue("Mazda");
cars.enqueue("Honda");

console.log(cars.getSize());
console.log(cars.peek());
console.log(cars.dequeue());
