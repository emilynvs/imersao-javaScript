listaPossiveisViloes = ["Coringa", "Úrsula", "Malévola", "Thanos", "Jafar"]


resposta = document.getElementById('resultadoFinal')

personagem1 = document.getElementById('persongem1')
personagem2 = document.getElementById('persongem2')
personagem3 = document.getElementById('persongem3')
const personagens = [personagem1, personagem2, personagem3]



function resultado() {
    const msg = forcas()
    document.getElementById('decisao').style.display = 'block'
    document.getElementById('jogo').style.display = 'none'

    if (forcaPersonagem > forcaViloes) {
        resposta.innerText = "Você venceu\n" + msg
    } else if (forcaViloes > forcaPersonagem) {
        resposta.innerText = "Você perdeu\n" + msg
    } else {
        resposta.innerText = "Empate\n" + msg
    }
}

function forcas() {
    forcaPersonagem = 0
    forcaViloes = 0
    viloes = ["", "", ""]
    for (let i = 0; i < 3; i++) {
        forcaPersonagem += Math.floor(Math.random() * 10) + 1
    }
    let cont = 0
    while (cont < 3) {
        escolha = Math.floor(Math.random() * 5)
        let vilao = listaPossiveisViloes[escolha];

        if (viloes.includes(vilao)) {
            continue
        } else {
            viloes[cont] = vilao
            forcaViloes += Math.floor(Math.random() * 10) + 1
            cont++
        }
    }
    return msg = "Sua força: " + forcaPersonagem + "\nForça dos vilões: " + forcaViloes
}

function recomecar() {
    forcaViloes = 0
    forcaPersonagem = 0

    personagens.forEach(personagem => {
        if (personagem) personagem.value = '';
    });
    
    
    document.getElementById('decisao').style.display = 'none'
    document.getElementById('jogo').style.display = 'block'
    document.getElementById('resultadoFinal').innerText = '';
}
