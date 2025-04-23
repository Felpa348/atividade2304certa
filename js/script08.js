function validarCPF() {
    const cpf = document.getElementById('cpf').value.replace(/[^\d]/g, ''); // remove tudo que não for número
    const mensagem = document.getElementById('mensagem');

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        mensagem.textContent = "CPF inválido.";
        return;
    }

    const digitoVerificador = (cpf, pos) => {
        let soma = 0;
        for (let i = 0; i < pos; i++) {
            soma += parseInt(cpf[i]) * ((pos + 1) - i);
        }
        let resto = (soma * 10) % 11;
        return resto === 10 ? 0 : resto;
    };

    const d1 = digitoVerificador(cpf, 9);
    const d2 = digitoVerificador(cpf, 10);

    if (d1 === parseInt(cpf[9]) && d2 === parseInt(cpf[10])) {
        mensagem.textContent = "✅ CPF válido!";
    } else {
        mensagem.textContent = "❌ CPF inválido.";
    }
}

