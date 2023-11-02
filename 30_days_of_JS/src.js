/* 2667. Create Hello World Function */
var createHelloWorld = () => (...args) => `Hello World`;

const persona = createHelloWorld();
console.log(persona());