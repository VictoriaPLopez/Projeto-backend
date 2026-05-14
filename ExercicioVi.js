//Programa para cálculo do valor total de uma compra
var precoDoCaderno = 12.50;


var quantidade = prompt("Quantos cadernos você quer comprar?");
var quantidadeNumero = parseFloat(quantidade);

var total = quantidadeNumero * precoDoCaderno;

alert("O valor total é: R$ " + total.toFixed(2));


//Programa para cálculo de lucro em venda de produtos
var precoVenda = 40.00;
var precoCusto = 25.00;


var lucroPorCamiseta = precoVenda - precoCusto;

var entradaUsuario = prompt("Quantas camisetas foram vendidas hoje?");
var quantidadeVendida = parseFloat(entradaUsuario);

var lucroTotal = lucroPorCamiseta * quantidadeVendida;

alert("O lucro total do dia foi de: R$ " + lucroTotal.toFixed(2));

//Programa para desconto em produto
var entradaPreco = prompt("Digite o preço original do produto:");
var precoOriginal = parseFloat(entradaPreco);

var valorDesconto = precoOriginal * 0.10;

var precoFinal = precoOriginal - valorDesconto;

alert(
    "Valor do Desconto: R$ " + valorDesconto.toFixed(2) + 
    "\nPreço Final com 10% OFF: R$ " + precoFinal.toFixed(2)
);