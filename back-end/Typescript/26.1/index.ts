let yes: boolean = true;
let no: boolean = false;
let no1: boolean = 'Ok';
let no2 = false;


// cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// isso não funciona com const
let x: number;
const w:number;
let y: number = 0;
let z: number = 123.456;

function sayHelloWorld ():void {
  console.log('Hello World');
}

let nullValue = null;
let undefinedValue = undefined;
let nullValue1:null = null;


enum studentStatus {
  Active =1,
  Inactive,
  Paused,
}

let newStudentStatus = studentStatus.Inactive;

console.log(newStudentStatus); //2

enum statusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

let statusT = 400

for (let i=0; i<4; i++){
  let count = statusT +i;
  console.log('Codigo numero: ', statusCode[count]);
}

enum diasDaSemana {
  domingo,
  segunda,
  terça,
  quarta,
  quinta, 
  sexta
}

enum coresArcoIris {
  azul = "azul",
  verde = "verde",
  vermelho = "vermelho",
  violeta = "violeta",
  anil = "anil",
  laranja ="laranja",
  amarelo = "amarelo"
}

enum acoes {
  salvar,
  imprimir,
  abrir,
  visualizar,
  fechar
}

enum pontosCardeais {
  Norte = "N",
  Sul = "S",
  Leste = "L",
  Oeste = "O"
}