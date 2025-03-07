// script.js
document.getElementById('comparisonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numberA = parseFloat(document.getElementById('numberA').value);
    const numberB = parseFloat(document.getElementById('numberB').value);
    const resultElement = document.getElementById('result');

    if (isNaN(numberA) || isNaN(numberB)) {
        resultElement.textContent = 'Por favor, insira valores válidos.';
        resultElement.className = 'error';
        return;
    }

    if (numberB > numberA) {
        resultElement.textContent = 'O formulário está válido: Número B é maior que o Número A.';
        resultElement.className = 'success';
    } else {
        resultElement.textContent = 'O formulário está incorreto: Número B deve ser maior que o Número A.';
        resultElement.className = 'error';
    }
});