// //  while 
// let a = 1
// while (a <= 10) {
// console.log (a);
//     a++
// }

// // do ... while 
// let senha;

// do {
//     senha = prompt ("Digite a senha:");
// } while (senha !== "1234");
// console.log ("Acesso liberado!")

// // for
// // Estrutura: (inicio, condição, incremetro)
// for (let i = 1; i <= 10; i ++) {
//    console.log (`7 c ${i} = ${ 7 * 1}`);
// }

// // for..of 
// const frutas = ["Maçã", "banana", "laranja"];
// for (const fruta of frutas) {
// console.log ("Fruta:", fruta)
// }

// // for ... in 
// const pessoa = {nome: "Lucas", idade: 27, cidade: "Santo André"};
// for (const chave in pessoa){
//     console.log (`${chave}: ${pessoa[chave]}`)
// }

// // forEach

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// numeros.forEach(function(n){
//     console.log (`7 x ${n} = ${7 * n}`)
// });

// numeros.forEach (n => console.log (`7 x ${n} = ${7 * n}`))

// //  contador com While
// let b = 1
// while (b <= 10) {
// console.log (b);
//     b++
// }

// // mostrar a tabuada do 5 com for
// for (let c = 1; c <= 10; c ++){
//    console.log (`5 x ${c} = ${ 5 * 1}`);
// }

// // Somar os numeros de 1 a 100 com for
// let soma1 = 0

// for (let d = 1; d <= 100; d ++){
//     soma1 += d; }
//    console.log (`a soma de 1 a 100 ${soma1}`);

// //// Media de 5 numeros 

// let soma = 0

// for (let i = 1; i <= 5; i ++) {
// const num = Number(prompt(`digite o ${i} numero:`));
//     soma += num
// }

// const media = soma / 5;
// console.log (`A media é ${media}`)

// //// ler nomes ate sair 


// let nome;
// do {
//      nome = prompt("digite um nome (ou)'sair' para emcerrar:");
//      if (nome !== "sair") {
//         console.log (`você digitou: ${nome}`)
//      }
// } while (nome !== "sair");

// for (let i =1; i <= 10; i ++) {
//     console.log (`numero ${idade}`)

// // ### Nível Básico

// // ## Contagem de 1 a 10:

// for (let b =1; b <= 10; b++) {
//     console.log(`numero: ${b}`); 
//  }

// // ## 2 Tabuada de um número:

// for (let i = 1; i <= 10; i ++) {
//     console.log (`3 x ${i} = ${3 * i}`)
// }

// for (let b =1; b <= 10; b++) {
//     console.log(`Tabuada do ${b}:`);
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${b} x ${i} = ${b * i}`)
//     }
// }

// // ## 3 Soma dos primeiros N números naturais:

// let soma2 = 0

// const b = Number(prompt("digite um numero:"));
//     for (let i = 1; i <= b; i++) {
//         soma2 += i; }
//         console.log (`a soma de 1 até ${b} é ${soma2}`);

// // ### Nível Intermediário

// // ## 1. Exibir os números pares de 1 a 50: 
 
// for (let i = 0; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(`Número par: ${i}`);
//   }
// }

// console.log("");

// let i = 1;

// while (i <= 51) {
//   if (i % 2 === 1) {
//     console.log(`Número impar: ${i}`);
//   }
//   i++;
// }

// // ## 2. Jogo de adivinhação:  

// const segredo = Math.floor (Math.random () * 100) + 1;

// let tentativa;

//  do { 
//     tentativa = Number(prompt("Digite um número entre 1 e 100:"));

//     if (tentativa > segredo) {
//         console.log (`o numero secreto é menor`);
//     } else if (tentativa < segredo) {
//         console.log (`o numero secreto é maior`);
//         } else {
//     console.log(`Parabéns! Você acertou o número secreto: ${segredo}`);
//     } 
//       } while (tentativa !== segredo);

// // #Math

// console.log(Math.PI);
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.round(4,5));
// console.log(Math.pow(2, 3));
// console.log(2 ** 3);
// console.log(Math.sqrt(2, 3));
// console.log(Math.min(4, 7, 1, 9));
// console.log(Math.max(4, 7, 1, 9));


// // ##  3.Contagem regressiva:

// let c = Number(prompt("Digite um número:"));

// while (c <= 100) {
//   console.log(`A contagem regressiva é: ${c}`);
//   if (c === 0) {
//     break; 
//   }
//   c--;
// }

// // ### Nível Intermediário

// // ## 1. Soma dos dígitos de um número:

let numero = Number(prompt("Digite um número inteiro positivo:"));
let soma = 0;

while (numero > 0) {
  let digito = numero % 10;
  soma += digito;
}

// console.log(`A soma dos dígitos é: ${soma}`);

// // ## 2. Fatorial de um número:

// let fat = 1;

// const num = Number(prompt("Digite um número:"));
// for (let i = 1; i <= num; i++) {
//     fat *= i;
// }
// console.log(`O fatorial de ${num} é ${fat}`);

// // ## 3. Inverter um número:

