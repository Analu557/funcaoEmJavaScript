// Função para apresentar um aluno
function apresentarAluno() {
    let nome = "Ana"; // Substitua "Ana" pelo seu nome
    let turma = "3°C"; // Substitua "3°C" pela sua turma
    console.log(`Meu nome é ${nome} e estou na turma ${turma}.`);
}

// Função para calcular o dobro de um número
function calcularDobro(numero) {
    let dobro = numero * 2;
    console.log(dobro);
    return dobro;
}

// Função para verificar a idade
function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

// Função para somar dois valores
function somarValores(num1, num2) {
    let soma = num1 + num2;
    console.log(soma);
    return soma;
}

// Função para calcular a média de três notas
function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    console.log(media);
    return media;
}

// Função para verificar se um número é par ou ímpar
function verificarPar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Exemplos de uso das funções
apresentarAluno();
calcularDobro(5);
console.log(verificarIdade(20));
somarValores(10, 15);
calcularMedia(7, 8, 9);
console.log(verificarPar(4));