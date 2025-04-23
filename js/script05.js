let numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function verificar() {
    const palpite = parseInt(document.getElementById('palpite').value);
    const mensagem = document.getElementById('mensagem');

    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        mensagem.textContent = "Digite um número válido entre 1 e 10.";
        return;
    }

    if (palpite === numeroSecreto) {
        mensagem.textContent = "🎉 Parabéns! Você acertou!";
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "Tente um número **maior**.";
    } else {
        mensagem.textContent = "Tente um número **menor**.";
    }
}

function reiniciar() {
    numeroSecreto = gerarNumeroSecreto();
    document.getElementById('mensagem').textContent = "Novo número gerado. Boa sorte!";
    document.getElementById('palpite').value = '';
}
