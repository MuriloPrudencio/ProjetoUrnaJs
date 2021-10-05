var seuVotoPara = document.querySelector('.voto span');
var cargo = document.querySelector('.nome-cargo span');
var nome = document.querySelector('.nome');
var aviso = document.querySelector('.d-2');
var lateral = document.querySelector('.d-1-right');
var numeros = document.querySelector('.numero');

var etapaAtual = 0;
var numero ='';

function comecarEtapa() {
    var etapa = etapas[etapaAtual];

    var numerohtml ='';

    for(var i=0;i<etapa.numeros;i++){
        numerohtml +='<div class="number"></div>';
    }

    seuVotoPara.style.display ="none";
    cargo.innerHTML = etapa.titulo;
    nome.innerHTML = '';
    aviso.style.display ="none";
    lateral.innerHTML ='';
    numeros.innerHTML = numerohtml;
}

function atualizaInterface(){

}

function clicou(n) {
    
}

function branco() {
    alert ("Clicou em BRANCO");
}

function corrige() {
    alert ("Clicou em CORRIGE");
}

function confirma() {
    alert ("Clicou em CONFIRMA");
}

comecarEtapa();
