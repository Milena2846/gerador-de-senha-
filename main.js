const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

console.log(botoes)
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    function aumentaTamanho(){
        if (tamanhoSenha < 20){
           // tamanhoSenha = tamanhoSenha+1;
           tamanhoSenha++;
        }
        numeroSenha.textContent = tamanhoSenha;
    }
    <input name="senha" type="text" id="campo-senha" readonly>
        const campoSenha = document.querySelector('#campo-senha');
        const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';

campoSenha.value = letrasMaiusculas;
    </input>
}