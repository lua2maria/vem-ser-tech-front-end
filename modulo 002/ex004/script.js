const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;';

const vendasIndividuais = reciboDeVenda.split(';');

const listaDaVenda = [];

vendasIndividuais.forEach(venda => {
    // Adicione um teste de null ou undefined antes de chamar split
    if (venda) {
        const [nomeProduto, infoProduto] = venda.split('/');
        const [valorString, cupomString] = infoProduto.split('=');

        const produtoFormatado = nomeProduto.charAt(0).toUpperCase() + nomeProduto.slice(1);
        const valor = parseFloat(valorString);
        const cupom = parseInt(cupomString);

        const produtoExistente = listaDaVenda.find(item => item.produto === produtoFormatado);

        if (produtoExistente) {
            produtoExistente.quantidade++;
        } else {
            listaDaVenda.push({
                produto: produtoFormatado,
                valor: valor,
                cupom: cupom,
                quantidade: 1,
            });
        }
    }
});

const totais = {
    valorTotal: 0,
    valorTotalDesconto: 0,
    quantidadeDeProdutos: 0,
};

listaDaVenda.forEach(item => {
    if (item.valor && !isNaN(item.valor) && item.quantidade && !isNaN(item.quantidade) && item.cupom && !isNaN(item.cupom)) {
        totais.valorTotal += item.valor * item.quantidade;
        totais.valorTotalDesconto += item.valor * (1 - item.cupom / 100) * item.quantidade;
        totais.quantidadeDeProdutos += item.quantidade;
    } else {
        console.error("Valores inválidos encontrados na lista de vendas.");
    }
});

console.log(listaDaVenda);
console.log(totais);
