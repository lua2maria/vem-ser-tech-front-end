// exercicio separação de strings em array 
const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;'
// passo 1 

function formatarRecibos(recibo) {
        // array de vendas realizadas
        const vendas_realizadas = recibo.trim().split(";")
        const lista_da_venda = []
        // loop que vai interar entre o array 
        for (const venda of vendas_realizadas) {
            const produto = venda.split("/")[0]
            const valor = Number( venda.slice(venda.indexOf("valor") + 5, venda.indexOf("=")))
            let quantidade = 1
            const cupom = Number( venda.slice(venda.indexOf("cupom") + 5))
            const index_produto = lista_da_venda.findIndex((venda)=> venda.produto === produto)

            if(index_produto !== -1){ 
                lista_da_venda[index_produto].quantidade += 1
            }else{
                lista_da_venda.push({
                    produto,
                    valor,
                    cupom,
                    quantidade
                })
            }
        }
        return lista_da_venda
}

function total_pedido(pedido) {
    const lista = formatarRecibos(pedido)
    let valor_total = 0
    let valor_total_desconto = 0
    let quantidade_de_produtos = 0 

    for (const item of lista) {
        valor_total+= (item.valor * item.quantidade)
        valor_total_desconto += (valor_total * (item.cupom / 100)) + valor_total
        quantidade_de_produtos += item.quantidade 
    }
    const totais = {
        valor_total:Number( valor_total.toFixed(2)),
        valor_total_desconto:Number( valor_total_desconto.toFixed(2)),
        quantidade_de_produtos
    }
    return totais
}
console.log(formatarRecibos(reciboDeVenda))
console.log(total_pedido(reciboDeVenda))