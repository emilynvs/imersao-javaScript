// criar duas listas com tres jogadores cada
personagens = ["", "", ""]
viloes = ["", "", ""]
listaPossiveisViloes = ["Coringa", "Úrsula", "Malévola", "Thanos", "Jafar"]

forcaPersonagem = 0
forcaViloes = 0

let cont = 0
for (let i = 0; i < 3; i++) {
    personagens[i] = prompt("Digite um nome do seu personagem")
    forcaPersonagem += Math.floor(Math.random() * 10) + 1
}

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
msg = "Sua força: " + forcaPersonagem + "\nForça dos vilões: " + forcaViloes
if (forcaPersonagem > forcaViloes){
    alert("Você venceu " + msg)
} else if(forcaViloes > forcaPersonagem){
    alert("Você perdeu " + msg)
} else{
    alert("Empate " + msg)
}
// calcular a força de cada jogador para as duas listas

//comparar a força das duas listas