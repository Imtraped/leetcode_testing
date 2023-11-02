/* 2620. Counter */
var createCounter = function(n) {
    let count = n;

    return function() {
        return count++;
    };
};

/* 2666. Allow One Function Call */
var once = function(fn) {
    let result;
    let is_it_called = false;

    return function(...args) {
        if (!is_it_called) {
            result = fn(...args);
            is_it_called = true;
            return result;
        };
    };
};


/* 2667. Create Hello World Function */
var createHelloWorld = () => (...args) => `Hello World`;