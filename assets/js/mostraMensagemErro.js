export const mostraMensagemErro = (input) => {
    const tipoDeInput = input.dataset.form;

    if(input.validity.valid) {
        input.parentElement.classList.remove('formulario__input-container--invalido');
        input.parentElement.querySelector('.formulario__invalido').innerHTML = '';
    } else {
        input.parentElement.classList.add('formulario__input-container--invalido');
        input.parentElement.querySelector('.formulario__invalido').innerHTML = selecionaMensagemErro(tipoDeInput, input);
    }
};

const tiposDeErro = [
    'valueMissing',
    'typeMismatch'
];

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo e-Mail não pode estar vazio.',
        typeMismatch: 'O e-Mail digitado não é válido.'
    },
    assunto: {
        valueMissing: 'O campo assunto não pode estar vazio.'
    },
    mensagem: {
        valueMissing: 'O campo mensagem não pode estar vazio.'
    }
};

const selecionaMensagemErro = (tipoDeInput, input) => {
    let mensagem = '';

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    });
    return mensagem;
};