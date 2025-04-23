function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function mostrarPrimos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(inicio) || isNaN(fim) || inicio < 0 || fim < 0 || inicio > fim) {
        resultado.textContent = "Digite um intervalo válido (ex: de 10 até 50).";
        return;
    }

    let primos = [];

    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    if (primos.length === 0) {
        resultado.textContent = "Não há números primos nesse intervalo.";
    } else {
        resultado.textContent = `Primos entre ${inicio} e ${fim}: ${primos.join(', ')}`;
    }
}
