"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this.isNameValid(name);
        this.name = name;
        this.birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setBirthDate", {
        set: function (birthDate) {
            this.birthDate = birthDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getBirthDate", {
        get: function () {
            return this.birthDate;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.isNameValid = function (name) {
        if (name.length <= 3)
            throw new Error('O nome deve possuir mais do que 3 caracteres');
    };
    Person.prototype.isBirthDateValid = function (birthDate) {
        if (moment(birthDate).isBefore('1900/01/01'))
            throw new Error('Você possui mais de 120 anos?:0');
    };
    return Person;
}());
var newPerson = new Person('Leonardo', new Date('08/03/1994'));
console.log(newPerson);
