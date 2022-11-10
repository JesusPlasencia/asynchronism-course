function sum(a, b) {
    return a + b;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

// console.log('Calculator: ' + calc(10, 5, sum));

setTimeout(greeting, 2000, 'Jesus');

function greeting(name) {
    console.log(`Hola ${name}`);
}