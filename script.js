/*
//******************************************************************
let x = 100;
let y = 10;
let consumoMedio = parseFloat(x / y).toFixed(3);

console.log(consumoMedio + "Km/l")

//******************************************************************
let N = 10;
let par = 2;

while(par <= N){
    console.log(par);
    par += 2
}

//******************************************************************
numero = [1, -2, 3 , -4 , 5, -6];

positivos = numero.filter(value => value > 0);

console.log("São " + positivos.length + " valores positivos.") 

//******************************************************************
var notaMaria = 95;
var mariaPassou = notaMaria >= 100

console.log(mariaPassou);

//******************************************************************
   var resultado = elementoA;
   if(elementoA  % 2 == 0){
        console.log("par");
    }else{
        console.log("ímpar");
    }

  //****************************************************************** 
  var nomes = ["Andrea", "Raphaela", "Ana"];
  for(var i = 0; i < nomes.length; i++){
      console.log("Você é linda, " + nomes[i] + "!")
  }  
 
//******************************************************************
// Funçoes para um carro:

var statusCarro = "Carro desligado";
var aceleracao = 0;
var rotacaoVolante = 0;
var statusFarois = "Faróis apagados";

function ligarDesligar(){
    if(statusCarro === "Carro desligado"){
        statusCarro = "Carro ligado";
    }else{
        statusCarro = "Carro desligado";
    }
    return statusCarro;
}

function ligarFarois(){
    if(statusFarois === "Faróis apagados"){
        statusFarois = "Faróis acesos";
    }else{
        statusFarois = "Faróis apagados";
    }
    return statusFarois;
}

function acelerar(incremento){    
        aceleracao += incremento;
        return "Acelerando a " + aceleracao + "m/s";   
}

function frear(decremento){
    aceleracao -= decremento;
    return "Desacelerando para " + aceleracao + "m/s"; 

}

function girarVolante(anguloRotacao){
    rotacaoVolante = anguloRotacao;
    return rotacaoVolante + "º";
}

console.log(ligarDesligar());
console.log(ligarFarois());
console.log(acelerar(20));
console.log(girarVolante(-45))
console.log(frear(5))
console.log(girarVolante(0))
console.log(frear(15))
console.log(ligarDesligar());
console.log(ligarFarois());

//******************************************************************
var num = 12;
var par = 2;

while(par <= num){
    console.log(par);
    par += 2;
}

var num = 12;
for(var par = 2; par <= num; par += 2){
    console.log(par)
}

//******************************************************************
var resultado = [];
var frase = ("Olá, minha gente!");
for(var i = 0; i <= frase.length-1; i++){
    var conteudo = frase[i];
    resultado.push(conteudo)
}
console.log(resultado)
console.log(resultado.length)

//******************************************************************
var numero =5;
for (var index = 0; index < numero; index++){
    var linha = "";
    for(var coluna = 0; coluna < numero; coluna++){
        linha = linha + "*";
    }
    console.log(linha)
}

//******************************************************************
function myTest() {
    var loc = "foo";
    console.log(loc);
  }
  myTest();
  console.log(loc);
 
//******************************************************************
var n = 10;
var numerosPrimos = [];

for (var numeroAtual = 2; numeroAtual < n; numeroAtual++) {
  var quantidadeDeDivisores = 0;

  for(var numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor++) {
    if (numeroAtual % numeroMenor == 0) {
      quantidadeDeDivisores ++;
    }
  }

  if (quantidadeDeDivisores == 0) {
    numerosPrimos.push(numeroAtual);
  }
}

console.log(numerosPrimos);

//******************************************************************
var palavra = "mirim";
var palindromo = "";

for(var index = palavra.length - 1; index >= 0; index--) {
  palindromo += palavra[index]
}

if (palavra == palindromo) {
  console.log("SIM, SOU UM PALÍNDROMO");
} else {
  console.log("INFELIZMENTE, NÃO SOU UM PALÍNDROMO");
}

//*******************************************************************
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  myFun();

//******************************************************************
var nome = "Valdênio";
var nomeInvertido = ""
for(var i = nome.length - 1; i >= 0 ; i--){
    nomeInvertido += nome[i];
    
}
console.log(nomeInvertido);

//******************************************************************
var caes = {
  Chato: "Poodle",  Cacador: "Doberman",  Bisbilhoteiro: "Beagle"
};
var meuCao = "Cacador";
var minhaRaca = caes[meuCao];
console.log(minhaRaca);
caes.latido = "auau"
console.log(caes)

//******************************************************************
Testes da Trybe:
1)


//******************************************************************
function vezes(frase, letra) {
var frase ;
var letra ;
var quantidade = 0;

for (var i = 0; i < frase.length; i++) {
  
  if (frase[i] == letra) {
      quantidade++;
  }
}
console.log(quantidade);
}
vezes("Fazendo teste na Trybe","e")


/*
//******************************************************************
var soma = 0;
function somaDeGauss(numeroMaximo){  
  for(var i = 1; i <= numeroMaximo; i++){
    soma += i;
  }
}
somaDeGauss(10);
console.log(soma);


  var numero;
  var outroNumero;
  var operação;
function calculadoraAdicaoSubtracao(numero,outroNumero, operacao) {
  
  if (operacao == "+"){
      return numero + outroNumero;
  } else if(operacao == "-"){
      return numero - outroNumero;
  }else{
      return 0;
  }
}
var res = calculadoraAdicaoSubtracao(5,3,"+");
console.log(res);




// Substrings:
var s = "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"
var s2 = s.substring(13,24);
console.log(s);
console.log(s2);

*/
function vezes(frase, letra) {
  var frase ;
  var letra ;
  var quantidade = 0;
  
  for (var i = 0; i < frase.length; i++) {
    
    if (frase[i] == letra) {
        quantidade++;
    }
  }
  console.log(quantidade);
  }
  vezes("Fazendo teste na Trybe","e")
 
/*
  // Arrow function com mais de um parâmetro:
  const sum = (a,b) => a * b;
  console.log(sum(5,3));
 
  // Declaração de variáveis:
  var nome = "Paulo";
  var nome = "Raphaela";
  console.log(nome); // retorna Raphaela

  let nome = "Paulo";
  let nome = "Raphaela";
  console.log(nome); // retorna Identifier 'nome' has already been declared
*/
  const NOME = "Paulo";
  const NOME = "Raphaela";
  console.log(NOME); // retorna Identifier 'NOME' has already been declared