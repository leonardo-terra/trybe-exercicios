"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = exports.sum = exports.identity = exports.greeter = void 0;
function greeter(name) {
    return `Olá, ${name}`;
}
exports.greeter = greeter;
function identity(name, age) {
    return `${greeter(name)}. Você tem ${age} anos de idade.`;
}
exports.identity = identity;
function sum(x, y) {
    return x + y;
}
exports.sum = sum;
function sumArray(numbers) {
    return numbers.reduce(sum, 0);
}
exports.sumArray = sumArray;
console.log(greeter('Leonardo'));
console.log(identity('Leonardo', 28));
console.log(sumArray([0, 1, 2, 3, 4, 5]));
