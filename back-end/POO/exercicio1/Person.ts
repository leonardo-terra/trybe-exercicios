import * as moment from 'moment';

class Person {
  protected name: string;
  protected birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.isNameValid(name);
    this.name = name;
    this.birthDate = birthDate;
  }

  set setName(name: string) {
    this.name = name;
  }
  get getName() {
    return this.name;
  }

  set setBirthDate(birthDate: Date) {
    this.birthDate = birthDate;
  }
  get getBirthDate() {
    return this.birthDate;
  }

  private isNameValid(name: string): void {
    if (name.length <= 3)
      throw new Error('O nome deve possuir mais do que 3 caracteres');
  }

  private isBirthDateValid(birthDate: Date): void {
    if (moment(birthDate).isBefore('1900/01/01'))
      throw new Error('Você possui mais de 120 anos?:0');
  }
}

const newPerson = new Person('Leonardo', new Date('08/03/1994'));

console.log(newPerson);
