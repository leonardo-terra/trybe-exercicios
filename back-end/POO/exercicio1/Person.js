var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this.isNameValid(name);
        this.isBirthDateValid(birthDate);
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
    Person.getAge = function (value) {
        var diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        var yearMs = 31536000000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    };
    Person.prototype.isNameValid = function (value) {
        if (value.length < 3)
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
    };
    Person.prototype.isBirthDateValid = function (value) {
        if (value.getTime() > new Date().getTime())
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
        if (Person.getAge(value) > 120)
            throw new Error('A pessoa deve ter no máximo 120 anos.');
    };
    return Person;
}());
var newPerson = new Person('Leonardo', new Date('08/03/1294'));
console.log(newPerson);
