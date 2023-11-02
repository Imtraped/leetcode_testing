/* 2620. Counter */
var createCounter = function(n) {
    let count = n;

    return function() {
        return count++;
    };
};


/* 2667. Create Hello World Function */
var createHelloWorld = () => (...args) => `Hello World`;