const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
 function aumentaTamanho(){
    if (tamanhoSenha < 20){
           // tamanhoSenha = tamanhoSenha+1;
           tamanhoSenha++;
     }
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelector('.checkbox');

console.log(checkbox[1].checked);

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';

geraSenha();

function geraSenha(){
    let senha ='';
    if(checkbox[0].checked){
        alfabeto
    }
    for (let i = 0; i <tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.lenght;
        numeroAleatorio = Math.floor([numeroAleatorio]);
       senha = senha + letrasMaiusculas[numeroAleatorio];
    }
campoSenha.value = letrasMaiusculas;
}