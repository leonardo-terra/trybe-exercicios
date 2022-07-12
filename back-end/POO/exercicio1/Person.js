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
    return Person;
}());
var newPerson = new Person('Leonardo', new Date('08/03/1994'));
console.log(newPerson);
