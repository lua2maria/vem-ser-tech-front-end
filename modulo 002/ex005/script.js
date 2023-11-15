/*
    Calculadora de Índice de Massa Corporal (IMC)
Descrição: A tarefa é criar uma calculadora de IMC usando variáveis. O IMC é uma medida que relaciona o peso e a altura de uma pessoa para avaliar se ela está abaixo do peso, no peso normal, com sobrepeso ou obesa. A fórmula do IMC é: IMC = peso / (altura * altura).

Instruções:

Peça ao usuário que informe seu peso (em kg) e sua altura (em metros).
Utilize variáveis para armazenar esses valores.
Calcule o IMC usando a fórmula fornecida.
Com base no resultado, informe ao usuário em qual faixa de IMC ele se encontra, de acordo com a tabela abaixo:

Abaixo do peso: IMC < 18.5 Peso normal: 18.5
<= IMC < 24.9 Sobrepeso: 25 <= IMC < 29.9

Obesidade: IMC >= 30
*/

// script.js
function calcularImc() {
    const nome = document.getElementById('nome').value;
    const peso = Number(document.getElementById('peso').value);
    const alturaEmCentimetros = Number(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(alturaEmCentimetros) || peso <= 0 || alturaEmCentimetros <= 0) {
        document.getElementById('resultadoImc').textContent = 'Informe valores válidos para peso e altura.';
        return;
    }

    // Convertendo altura para metros
    const alturaEmMetros = alturaEmCentimetros / 100;

    const imc = peso / (alturaEmMetros * alturaEmMetros);

    let resultado = '';

    if (imc < 18.5) {
        resultado = `Você está ABAIXO do peso. Seu IMC é: ${imc.toFixed(4)}`;
    } else if (imc < 25) {
        resultado = `Você está no peso ideal. Seu IMC é: ${imc.toFixed(4)}`;
    } else if (imc < 30) {
        resultado = `Você está ACIMA do peso. Seu IMC é: ${imc.toFixed(4)}`;
    } else if (imc < 40) {
        resultado = `Você está OBESO. Seu IMC é: ${imc.toFixed(4)}`;
    } else {
        resultado = `Você está à beira da morte. Seu IMC é: ${imc.toFixed(4)}`;
    }

    document.getElementById('resultadoImc').textContent = resultado.replace('.', ',');
}
