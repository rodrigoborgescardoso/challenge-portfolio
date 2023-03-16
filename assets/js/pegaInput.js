import { mostraMensagemErro } from "./mostraMensagemErro.js";

const inputs = document.querySelectorAll('[data-form]');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        mostraMensagemErro(evento.target);
    });
});