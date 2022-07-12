class Person {
  protected name: string;
  protected birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.isNameValid(name);
    this.isBirthDateValid(birthDate);
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

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private isNameValid(value: string): void {
    if (value.length < 3)
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }

  private isBirthDateValid(value: Date): void {
    if (value.getTime() > new Date().getTime())
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(value) > 120)
      throw new Error('A pessoa deve ter no máximo 120 anos.');
  }
}

const newPerson = new Person('Leonardo', new Date('08/03/1994'));

console.log(newPerson);
