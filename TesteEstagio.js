//Resolucao 1
const INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K += 1;
    SOMA += K;
}

console.log(SOMA); // Resultado: 91


//Resolucao 2
function pertenceAFibonacci(numero) {
    // Gera a sequência de Fibonacci até que o último número seja maior ou igual ao número informado
    let fib = [0, 1];

    while (fib[fib.length - 1] < numero) {
        let next = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(next);
    }

    // Verifica se o número informado pertence à sequência
    if (fib.includes(numero)) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}


//Resolucao 3
// Dados de faturamento diário em formato JSON
const faturamentoDiario = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];


// Função para calcular o faturamento
function calcularFaturamento(faturamento) {
    let totalFaturamento = 0;
    let diasComFaturamento = 0;
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;

    // Calcular total, menor e maior faturamento
    for (const dia of faturamento) {
        if (dia.valor > 0) {
            totalFaturamento += dia.valor;
            diasComFaturamento++;

            if (dia.valor < menorFaturamento) {
                menorFaturamento = dia.valor;
            }
            if (dia.valor > maiorFaturamento) {
                maiorFaturamento = dia.valor;
            }
        }
    }

    // Calcular média mensal
    const mediaFaturamento = totalFaturamento / diasComFaturamento;

    // Calcular número de dias com faturamento acima da média
    let diasAcimaDaMedia = 0;
    for (const dia of faturamento) {
        if (dia.valor > mediaFaturamento) {
            diasAcimaDaMedia++;
        }
    }

    return {
        menorFaturamento,
        maiorFaturamento,
        mediaFaturamento,
        diasAcimaDaMedia,
    };
}

// Executar a função e obter os resultados
const resultados = calcularFaturamento(faturamentoDiario);
console.log(`Menor faturamento: ${resultados.menorFaturamento}`);
console.log(`Maior faturamento: ${resultados.maiorFaturamento}`);
console.log(`Média mensal: ${resultados.mediaFaturamento.toFixed(2)}`);
console.log(`Dias acima da média: ${resultados.diasAcimaDaMedia}`);

//resolucao 4
// Faturamento mensal por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular o percentual de cada estado
function calcularPercentuais(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    
    const percentuais = {};
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / totalFaturamento) * 100;
        percentuais[estado] = percentual.toFixed(2); // Formata para 2 casas decimais
    }
    
    return {
        totalFaturamento,
        percentuais
    };
}

// Executar a função e obter os resultados
const resultadosPercentuais = calcularPercentuais(faturamentoPorEstado);

// Exibir resultados
console.log(`Total de faturamento: R$ ${resultados.totalFaturamento.toFixed(2)}`);
console.log("Percentuais de representação por estado:");
for (const estado in resultados.percentuais) {
    console.log(`${estado}: ${resultados.percentuais[estado]}%`);
}
//resolucao 5
// Função para inverter os caracteres de uma string
function inverterString(str) {
    let stringInvertida = "";
    
    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

// Exemplo de uso: string definida no código
const stringOriginal = "Olá, mundo!";
const resultado = inverterString(stringOriginal);
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${resultado}`);
