let contadorJogosAlugados = 0;

function alterarStatus(identificador) {
    let idGame = document.getElementById(`game-${identificador}`);
    let imagem = idGame.querySelector(".dashboard__item__img");
    let botao = idGame.querySelector(".dashboard__item__button");
    let nomeJogo = idGame.querySelector(".dashboard__item__name") 

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Confirmar devoluçaõ do jogo ${nomeJogo.textContent}?`)){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        contadorJogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        contadorJogosAlugados++
    }
    contadorAluguel(contadorJogosAlugados)
}

function contadorAluguel(contadorJogosAlugados){
    console.log(`Jogos em aluguel = ${contadorJogosAlugados}`);
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    contadorJogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contadorAluguel();
});