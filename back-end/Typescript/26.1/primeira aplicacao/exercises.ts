export function greeter(name:string) {
  return `Olá, ${name}`
}

export function identity(name: string, age: number) {
  return `${greeter(name)}. Você tem ${age} anos de idade.`
}

export function sum (x:number, y:number) {
  return x+y
}

export function sumArray(numbers: number[]){
  return numbers.reduce(sum, 0)
}

console.log(greeter('Leonardo'));
console.log(identity('Leonardo', 28));
console.log(sumArray([0, 1, 2, 3, 4, 5]));