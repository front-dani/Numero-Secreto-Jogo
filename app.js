let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirtextonNtela( tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Famele", {rate:1.2});
}

function exibirMensagemInicial(){
    exibirtextonNtela("h1", "jogo do número secreto");
    exibirtextonNtela("p", "Escolha um número entre 1 e 30");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        let PalavraTentativa = tentativas > 1 ? "Tentativas" : "tentativa";
        let mensagemenTentativas = `Você descobriu o número secreto com o total de ${tentativas} ${PalavraTentativa}!`;
        exibirtextonNtela("h1", "Acertou!!");
        exibirtextonNtela("p", mensagemenTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto){
            exibirtextonNtela("p", "O número secreto é menor");
        } else {
            exibirtextonNtela("p", "O número secreto é maior");
        }
       //tentativas = tentativas + 1
       tentativas++;
       limparCampo();
    }
} 

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * 30 + 1);
   let quantidadeDeElemntos = listaDeNumerosSorteados.length
    if (quantidadeDeElemntos == 30 ){
        listaDeNumerosSorteados = []
    }


   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagemInicial()
    limparCampo();
    tentativas = 1
    document.getElementById('reiniciar').setAttribute('disabled', true);
}