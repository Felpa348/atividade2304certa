function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const mensagem = document.getElementById('mensagem');

    if (isNaN(idade) || idade < 0) {
        mensagem.textContent = "Por favor, informe uma idade válida.";
        return;
    }

    let classificacao = '';

    if (idade < 12) {
        classificacao = 'Criança';
    } else if (idade < 18) {
        classificacao = 'Adolescente';
    } else if (idade < 60) {
        classificacao = 'Adulto';
    } else {
        classificacao = 'Idoso';
    }

    mensagem.textContent = `Você é ${classificacao}.`;
}
