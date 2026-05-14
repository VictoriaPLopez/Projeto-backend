//04) Juros Compostos:

const cCapital = 1000.00; //valor inicial investido
const iTaxa = 0.05; // 5%
const tMeses = 12;   //  12 meses

// Cálculo do Juro Total (J = C * i * t)
const Jjuros = Ccapital * iTaxa * tMeses;

// 2. Cálculo do Valor Total (Montante = C + J)
const valorTotaL = cCapital + Jjuros;

console.log(` Resumo do Empréstimo`);
console.log(`Capital Inicial: R$ ${cCapital.toFixed(2)}`); //(o toFixed serve para controlar quantas casas decimais quero exibir)
console.log(`Total de Juros: R$ ${Jjuros.toFixed(2)}`);
console.log(`Valor Final a Pagar: R$ ${valorTotal.toFixed(2)}`);

//05) Comissão de vendedor:

const vR = 1500.00; //venda realizada
const vC = 0.05; // 5% valor comissão
const salário = 1000.00


// Cálculo da comissão (Valor= vR + vC)
const valorC = vR * vC;
const valorMensal = valorC + salário



console.log(` Resultado do sálario fixo + porcentagem da comissão`);
console.log(`Seu salário fixo: R$ ${salário.toFixed(2)}. Sua venda realizada no mês: R$ ${vR.toFixed(2)}.`) (`Então sua renda mensal será: R$ ${valorMensal.toFixed(2)}.` ); //(o toFixed serve para controlar quantas casas decimais quero exibir)

//06) Comissão de vendedor:

// Simulando a entrada de dados (ex: valores vendidos de segunda a domingo)
const vendasDaSemana = [1200.50 + 850.00 + 900.20 + 1100.00 + 1500.30 + 2000.00 + 1800.00];//usando o length, sabemos que seriam 5 dias.

// Variável para acumular a soma
let totalDiarias = 0;

// Laço para percorrer o array e somar os valores
for (let i = 0; i < vendasDiarias.length; i++)//o length é o que diz ao programa quantos dias foram registrados
 {
    vendasDiarias[i];
}

// Cálculo da média 
const mediaVendas = vendasDaSemana / vendasDiarias.length;

// Exibição dos resultados
console.log(`Relatório Semanal`);
console.log(`Total Vendido na Semana: R$ ${vendasDaSemana.toFixed(2)}`);
console.log(`Média de Vendas por Dia: R$ ${mediaVendas.toFixed(2)}`);