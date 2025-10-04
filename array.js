// // Função Callback
// // map transforma cada elemento do array original em um novo valor.
// // Retorna um novo array (não altera o original).

// const aluno = ["Ana", "Bruno", "Carla"];

// const listaNumerada2 = aluno.map((nome, index) => {
//   return `${index + 1} - ${nome}`;
// });
// console.log("Lista numerada 2:", listaNumerada2);

// const listaNumerada = aluno.map((nome, index) => `${index + 1} - ${nome}`);
// console.log("Lista numerada:", listaNumerada);

// const produtos = ["lápis", "caneta", "caderno"];
// const maiusculo = produtos.map((element) => {
//   return element.toUpperCase();
// });
// console.log("Produtos em maiúsculo:", maiusculo);

// // Objetos de pessoas
// const lucas = { name: "Lucas", lastname: "Lacerda", age: 20 };
// const maria = { name: "Maria", lastname: "Oliveira", age: 17 };
// const joao = { name: "Joao", lastname: "Silva", age: 18 };
// const ana = { name: "Ana", lastname: "Santos", age: 22 };

// const people = [lucas, maria, joao, ana];

// // Filter - A peneira
// // Cria um novo array com elementos que passam em um teste lógico.
// // Callback deve retornar true ou false.
// // Retorna novo array (não altera o original).

// const maiores = people.filter((value, index) => {
//   console.log("Index:", index);
//   console.log("Value:", value.name);
//   return value.age >= 18;
// });
// console.log("Resultado filter:", maiores);

// // Map - O transformador
// // Cria um novo array do mesmo tamanho, transformando os elementos.
// // Útil para extrair campos, modificar valores, gerar novos objetos.
// // Retorna um array novo (imutável).

// const frases = people.map((value, index) => {
//   console.log("Index:", index);
//   console.log("Pessoa:", value.name);
//   console.log("Idade:", value.age);
//   return `${value.name} tem ${value.age} anos!`;
// });
// console.log("Resultado map:", frases);

// // Find - O buscador único
// // Retorna o primeiro elemento que satisfaz a condição.
// // Se nenhum elemento atender, retorna undefined.
// // Não altera o array original.

// const mariaEncontrada = people.find((value, index) => {
//   console.log("Index:", index);
//   console.log("Pessoa:", value.name);
//   return value.name === "Maria";
// });
// console.log("Resultado find:", mariaEncontrada);

// // Reduce - O agregador
// // Reduce "reduz" um array inteiro a um único valor.
// // Ele percorre cada elemento do array e acumula um resultado.
// // Esse valor pode ser: número, string, objeto, array, etc.
// // Muito poderoso para somatórios, agrupamentos e estatísticas.

// const somaIdade = people.reduce((acc, value, index) => {
//   console.log("Index:", index);
//   console.log("Pessoa:", value.name);
//   console.log("Acumulador antes:", acc);
//   return acc + value.age;
// }, 0);
// console.log("Resultado reduce:", somaIdade);

// Ex 1 - Filter (Fácil)
// Dado const arr = [10, 15, 20, 25, 30], use filter para obter núneros maiores ou iguais a 20

const arr = [10, 15, 20, 25, 30]
const ge20 = arr.filter((n => n >=20))
console.log(ge20);


// Ex 2 - Map (Fácil)
// Dado const palavras = ["js", "html"] `, use `map` para capitalizar (JS , HTML)`.

const palavras = ["js", "html"];
const maiusc = palavras.map ((element) => {
    return element.toLocaleUpperCase();
})

console.log("Linguagem maiúsculo:", maiusc);

// ====

const palavras2 = ["js", "html", "java"]; 
const upper = palavras2.map(s => s.toLowerCase());
console.log("Linguagens minúsculas:", upper);

// EX 3 - find (medio)
// Dado um array de obejets usuarios, encontre o usuário com id === 3

const usuarios = [
    { id: 1, nome: "A" },
    { id: 3, nome: "C" },
    { id: 3, nome: "B" }
];

const u = usuarios.find(u => u.id === 3); 
console.log("Usuário com id 3:", u);


// =====

const idEncontrado = usuarios.find((value, index) => {
    console.log("Index:", index);
    console.log("Nome:", value.nome);
    return value.nome === "C";
});

console.log("Resultado find por nome:", idEncontrado);

// Ex 4 - Map + filter (medio)

// Dado produtos com {nome, preço, cire um array vom nomes dos produtos com  preço > 20}

const produtos = [
    { nome: "X", preco: 10 },
    { nome: "y", preco: 30 },
    { nome: "z", preco: 40 },
];

const nomes = produtos.filter(p => p.preco > 20).map(p => p.nome);
console.log(nomes);

// =====

const nomess = produtos
.filter((p) => {
    return p.preco > 20;
})
.map ((p)=> {
    return p.nome;
})
console.log(nomes)

// Básicos
// 1. Adicione um sufixo às palavras
// 1. Crie um programa que filtre todos os números maiores que 10 em um array.
const lista = [
    { nomes: "ana" , numb: 10, idade: 28 },
    { nomes: "mario" , numb: 20, idade: 38 },
    { nomes: "amanda" , numb: 30, idade: 48 },
    { nomes: "lucas" , numb: 40, idade: 58 },
];

const listaexcla = lista.filter(q => q.numb > 10).map(s => s.nomes + "!!!");
console.log(listaexcla);

const listanumb = lista.filter(q => q.numb > 10);
console.log(listanumb);

// 2. Adicione o prefixo “Colaborador: “ às palavras
// 2. Crie um programa que filtre todos os nomes que começam com a letra A; em um array de nomes.

const listaprefixo = lista.map (s => "Colaborador: " + s.nomes);
console.log(listaprefixo);

const listanomes = lista.filter(n => n.nomes.startsWith("a"));
console.log(listanomes);

// Intermediários

// 3. Extraindo nomes de objetos
const nomeobj = lista.map(a => a.nomes);
console.log(nomeobj); // ["ana", "mario", "amanda", "lucas"]
  
// 4. Calculando áreas de círculos
const raios = [3, 5, 7];
const areas = raios.map(raio => (Math.PI * Math.pow(raio, 2)).toFixed(2));
console.log (areas);

// 5. Formatando preços
const convreais = lista.map(r => "RS" + r.numb + ",00")
console.log(convreais);

const convtreais = lista.map(p => "R$ " + p.numb.toFixed(2).replace('.', ','));
console.log(convtreais);
