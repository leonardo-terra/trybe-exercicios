var yes = true;
var no = false;
var no1 = 'Ok';
var no2 = false;
// cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// isso não funciona com const
var x;
var w;
var y = 0;
var z = 123.456;
function sayHelloWorld() {
    console.log('Hello World');
}
var nullValue = null;
var undefinedValue = undefined;
var nullValue1 = null;
var studentStatus;
(function (studentStatus) {
    studentStatus[studentStatus["Active"] = 1] = "Active";
    studentStatus[studentStatus["Inactive"] = 2] = "Inactive";
    studentStatus[studentStatus["Paused"] = 3] = "Paused";
})(studentStatus || (studentStatus = {}));
var newStudentStatus = studentStatus.Inactive;
console.log(newStudentStatus); //2
var statusCode;
(function (statusCode) {
    statusCode[statusCode["OK"] = 200] = "OK";
    statusCode[statusCode["BadRequest"] = 400] = "BadRequest";
    statusCode[statusCode["Unauthorized"] = 401] = "Unauthorized";
    statusCode[statusCode["PaymentRequired"] = 402] = "PaymentRequired";
    statusCode[statusCode["Forbidden"] = 403] = "Forbidden";
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
})(statusCode || (statusCode = {}));
var statusT = 400;
for (var i = 0; i < 4; i++) {
    var count = statusT + i;
    console.log('Codigo numero: ', statusCode[count]);
}
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["domingo"] = 0] = "domingo";
    diasDaSemana[diasDaSemana["segunda"] = 1] = "segunda";
    diasDaSemana[diasDaSemana["ter\u00E7a"] = 2] = "ter\u00E7a";
    diasDaSemana[diasDaSemana["quarta"] = 3] = "quarta";
    diasDaSemana[diasDaSemana["quinta"] = 4] = "quinta";
    diasDaSemana[diasDaSemana["sexta"] = 5] = "sexta";
})(diasDaSemana || (diasDaSemana = {}));
var coresArcoIris;
(function (coresArcoIris) {
    coresArcoIris["azul"] = "azul";
    coresArcoIris["verde"] = "verde";
    coresArcoIris["vermelho"] = "vermelho";
    coresArcoIris["violeta"] = "violeta";
    coresArcoIris["anil"] = "anil";
    coresArcoIris["laranja"] = "laranja";
    coresArcoIris["amarelo"] = "amarelo";
})(coresArcoIris || (coresArcoIris = {}));
var acoes;
(function (acoes) {
    acoes[acoes["salvar"] = 0] = "salvar";
    acoes[acoes["imprimir"] = 1] = "imprimir";
    acoes[acoes["abrir"] = 2] = "abrir";
    acoes[acoes["visualizar"] = 3] = "visualizar";
    acoes[acoes["fechar"] = 4] = "fechar";
})(acoes || (acoes = {}));
var pontosCardeais;
(function (pontosCardeais) {
    pontosCardeais["Norte"] = "N";
    pontosCardeais["Sul"] = "S";
    pontosCardeais["Leste"] = "L";
    pontosCardeais["Oeste"] = "O";
})(pontosCardeais || (pontosCardeais = {}));
