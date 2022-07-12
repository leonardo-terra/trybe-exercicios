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
}

const newPerson = new Person('Leonardo', new Date('08/03/1994'));

console.log(newPerson);
