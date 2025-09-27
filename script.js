// Exercícios de Condicionais

// ### **Nível Básico** 

// 1. ** Verificar maioridade: ** 

const idade1 = Number(prompt("conte sua idade:"));

if (Number.isNaN(idade) || idade < 0) {
    alert ("idade invalida")
} else {
    } if (idade1 >=18) {
        alert ("maior de idade") }
             else {
                alert ("menor de idade")        
    }

// ===================================================================================== 


// 2. ** Verificar se um número é positivo ou negativo: ** 

const Numero1 = Number(prompt("Digite um número"));

if (Numero1 > 0) {
    alert("número positivo");
} else {
    alert("número negativo ou zero");
}

// ==================================================================================== 

// 3. **Aprovação em uma prova: ** 

const nota = Number(prompt("Insira a nota do aluno"));
 
if (nota >= 60) {
    alert("Aprovado")
} else {
    alert ("Reprovado")
}

// ==================================================================================== 

// 4. ** erificar se um número é positivo, negativo ou zero: ** 

const Numero = Number(prompt("Digite um número"));

if (Numero > 0 ) {
    alert ("número positivo")
} else if (Numero < 0){
    alert ("numero negativo")}
        else {
            alert("zero"); }


// ==================================================================================== 

// 5. ** Classificação de idade:** 

const idade = Number(prompt("Insira sua idade"));
 
if (idade <= 12) {
    alert("criança")
} else if (idade <= 17) {
    alert ("Adolescente")
    } else {
        alert ("Adulto");
}
// ==================================================================================== 

// 6. ** Verificar se um número é par ou ímpar: ** 
const n = Number(prompt("Número"));
const tipo = Number.isNaN(n) ? "inválido" : (n % 2 === 0 ? "par" : "ímpar");
alert (`Número ${tipo}`);


// ### **Nível Intermediário** 

//  1. **Calculadora simples:** 


const numero1 = Number(prompt ("digite o primeiro número"));
const operacao = prompt ("escolha um operador (`+`,`-`,`*`, `/`)");
const numero2 = Number(prompt ("digite o segundo número"));

switch (operacao) {
    case "+":
           alert (numero1 + numero2);
        break; 
    case "-":
          alert (numero1 - numero2);
        break; 
    case "*":
           alert (numero1 * numero2);
        break; 
    case "/":
        if (numero2 === 0) {
            alert ("divisão por 0 não é permitida")
            } else { alert (numero1 / numero2);
                }
        break; 
    default:
        alert ("digite um operador valido")
        break;
}

// ==================================================================================== 

// 2. ** Maior entre três números: ** 

const num1 = Number(prompt("Insira o primeiro número"));
const num2 = Number(prompt("Insira o segundo número"));
const num3 = Number(prompt("Insira o terceiro número"));

if (num1 > num2 && num1 > num3){
    alert (`${num1} é o primeiro numero e o maior`)
 } else if (num2 > num3) {
    alert (`${num2} é o segundo numero e o maior`)
 } else {
    alert (`${num3} é o terceiro numero e o maior`)
 }

// ==================================================================================== 
// 3. ** 	Desconto em compras: ** 

const compra = Number(prompt("informe o valor da compra"))

if (compra >= 100) {
 alert (`o valor desconto é ${compra * 0.10} reais e o valor a ser a pago é ${compra * 0.90} reais`) 
} else 
    alert (`o valor da compra é ${compra} reais`)

// ==================================================================================== 

// 4. ** Sistema de login simples: ** 

const login = prompt("Digite seu usuário");
const senha = prompt("Digite sua senha");

const senhaCorreta = "1234";
const usuarioValido = (login === "admin" || login === "gerente") && senha === senhaCorreta;

if (usuarioValido) {
    alert("Login com sucesso!");
} else {
    alert("Acesso negado");
}

// ### **Nível Avançado 	** 

//  1. **Classificação de triângulos:** 

const a = Number(prompt("Digite o primeiro número:"));
const b = Number(prompt("Digite o segundo número:"));
const c = Number(prompt("Digite o terceiro número:"));

// Verifica se os lados formam um triângulo válido
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert("É um triângulo equilátero");
    } else if (a === b || b === c || a === c) {
        alert("É um triângulo isósceles");
    } else {
        alert("É um triângulo escaleno");
    }
} else {
    alert("Os valores não formam um triângulo");
}


//  2. **Conversão de notas para conceitos:** 

const notas = Number(prompt("Digite uma nota"));

if (notas >= 90 && nota <= 100) {
    alert ("Nota A");
} else if (notas >= 80){
    alert ("Nota B");
} else if (notas >= 70) {
    alert ("Nota C");
} else if (notas >= 60){
    alert ("Nota D"); 
} else if (notas < 60 && nota >=0) {
    alert ("Nota f"); 
} else {
    alert ("nota inválida");
}


//  3. **Cálculo de IMC::** 

const peso = Number(prompt("Informe o seu peso (kg)"));
const altura = Number(prompt("Informe sua altura (m)"));
const imc = peso / (altura ** 2);

if (imc < 18.5) {
    alert("Magreza");
} else if (imc <= 24.9) {
    alert("Peso Normal");
} else if (imc <= 29.9) {
    alert("Sobrepeso");
} else if (imc <= 39.9) {
    alert("Obesidade Grau I");
} else {
    alert("Obesidade Grau III");
}

//  4. **Validação de ano bissexto** 
const ano = Number(prompt("Digite um ano para verificar se é bissexto:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    alert(`${ano} é um ano bissexto.`);
} else {
    alert(`${ano} não é um ano bissexto.`);
}

