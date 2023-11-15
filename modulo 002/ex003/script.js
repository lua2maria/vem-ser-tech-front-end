// Lista de parceiros
const parceiros = [
    { parceirosId: '19660156627897', nome: 'Fernanda Santos' },
    { parceirosId: '23998058019370', nome: 'Rafael Souza' },
    { parceirosId: '92291338611', nome: 'Maria Silva' },
    { parceirosId: '55443795656', nome: 'Maria Souza' },
    { parceirosId: '77743761456', nome: 'Ana Costa' },
    { parceirosId: '47202302326', nome: 'Maria Ferreira' },
    { parceirosId: '58017232567', nome: 'Sofia Costa' },
    { parceirosId: '16733009491247', nome: 'Lucas Silva' },
    { parceirosId: '63351859919', nome: 'Rafael Souza' },
    { parceirosId: '84297701780', nome: 'Carlos Oliveira' },
];

// Função para preencher a tabela com os dados dos parceiros
function preencherTabela() {
    const tabela = document.querySelector("table tbody");

    parceiros.forEach(parceiro => {
        const row = tabela.insertRow();
        const col1 = row.insertCell(0);
        const col2 = row.insertCell(1);

        col1.textContent = parceiro.parceirosId;
        col2.textContent = parceiro.nome;
    });
}

// Função para separar parceiros por CPF e CNPJ
function separarPorTipo() {
    const listaCPF = document.getElementById("listaCPF");
    const listaCNPJ = document.getElementById("listaCNPJ");

    parceiros.forEach(parceiro => {
        if (parceiro.parceirosId.length === 11) {
            // Parceiro PF (CPF)
            listaCPF.innerHTML += `<li>${parceiro.nome}</li>`;
        } else if (parceiro.parceirosId.length === 14) {
            // Parceiro PJ (CNPJ)
            listaCNPJ.innerHTML += `<li>${parceiro.nome}</li>`;
        }
    });
}

// Chamadas das funções para preencher a tabela e separar por tipo
preencherTabela();
separarPorTipo();

