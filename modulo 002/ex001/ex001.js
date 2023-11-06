/* 
## Média das Avaliações de um Fast-Food

#### Em uma empresa de fast-food, após a refeição, os clientes fazem uma avaliação da loja, com nota de 1 a 5 estrelas. Em determinado dia, foram atendidos exatamente 100 clientes, e as notas obtidas foram:

&nbsp; 
Avaliação   | Total de Clientes
----------- | -----------
1 estrela   | 2
2 estrelas  | 15
3 estrelas  | 18
4 estrelas  | 25
5 estrelas  | 40

&nbsp;
- Após o fechamento do expediente, o gerente decidiu calcular a nota média das avaliações naquele dia; retorne o valor da nota média considerando o valor fixo de 100 clientes.
*/


const notas = [1, 2, 3, 4, 5];
const clientes = [2, 15, 18, 25, 40];


let totalPontos = 0;
let totalClientes = 0;

for (let i = 0; i < notas.length; i++) {
    totalPontos += notas[i] * clientes[i];
    totalClientes += clientes[i];
}


const notaMedia = totalPontos / totalClientes;


const notaMediaFormatada = notaMedia.toFixed(1);


console.log("A nota média é: " + notaMediaFormatada);


