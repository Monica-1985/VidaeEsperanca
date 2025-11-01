// Aguarda o carregamento completo do DOM para garantir que os elementos existam
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os campos pelos IDs
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    // Adiciona o listener de input para o campo de CPF
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto após o terceiro dígito
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto após o sexto dígito
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen antes dos dois últimos dígitos
            e.target.value = value.slice(0, 14); // Limita o tamanho
        });
    }

    // Adiciona o listener de input para o campo de Telefone
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            value = value.replace(/^(\d{2})(\d)/, '($1) $2'); // Coloca parênteses nos dois primeiros dígitos
            value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen após o nono dígito (para celular)
            e.target.value = value.slice(0, 15); // Limita o tamanho
        });
    }

    // Adiciona o listener de input para o campo de CEP
    if (cepInput) {
        cepInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen após o quinto dígito
            e.target.value = value.slice(0, 9); // Limita o tamanho
        });
    }

});
