/* 2620. Counter */
var createCounter = function(n) {
    let count = n;

    return function() {
        return count++;
    };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

/* 2667. Create Hello World Function */
var createHelloWorld = () => (...args) => `Hello World`;

const persona = createHelloWorld();
persona();