// PARTE 1: Lista de perguntas e repostas
const perguntas = [
  {
    pergunta: "Qual foi o primeiro nome dado ao Brasil pelos portugueses quando chegaram em 1500?",
    respostas: [
      { opcao: "a) Terra de Vera Cruz", correto: false },
      { opcao: "b) Ilha de Santa Cruz", correto: false },
      { opcao: "c) Terra de Santa Cruz", correto: true },
      { opcao: "d) Colônia do Brasil", correto: false }
    ]
  },
  {
    pergunta: "Quem foi o líder da Inconfidência Mineira, movimento que buscava a independência de Minas Gerais em 1789?",
    respostas: [
      { opcao: "a) Dom Pedro I", correto: false },
      { opcao: "b) Tiradentes", correto: true },
      { opcao: "c) Bento Gonçalves", correto: false },
      { opcao: "d) Marquês de Pombal", correto: false }
    ]
  },
  {
    pergunta: "Qual foi o principal produto econômico do Brasil durante o período colonial, especialmente no século XVII?",
    respostas: [
      { opcao: "a) Café", correto: false },
      { opcao: "b) Ouro", correto: false },
      { opcao: "c) Algodão", correto: false },
      { opcao: "d) Açúcar", correto: true }
    ]
  },
  {
    pergunta: "Qual foi o movimento político-militar que levou Getúlio Vargas ao poder em 1930?",
    respostas: [
      { opcao: "a) Revolução Constitucionalista", correto: false },
      { opcao: "b) Revolução Farroupilha", correto: false },
      { opcao: "c) Revolução de 1930", correto: true },
      { opcao: "d) Revolta da Armada", correto: false }
    ]
  },
  {
    pergunta: "Que evento importante ocorreu no Nordeste brasileiro durante o século XVII?",
    respostas: [
      { opcao: "a) Guerra de Canudos", correto: false },
      { opcao: "b) Cangaço", correto: false },
      { opcao: "c) Descobrimento do Brasil", correto: false },
      { opcao: "d) Invasões holandesas", correto: true }
    ]
  },
  {
    pergunta: "Quem foi o primeiro presidente do Brasil eleito pelo voto direto após a Ditadura Militar?",
    respostas: [
      { opcao: "a) José Sarney", correto: false },
      { opcao: "b) Fernando Collor de Mello", correto: true },
      { opcao: "c) Itamar Franco", correto: false },
      { opcao: "d) João Goulart", correto: false }
    ]
  },
  {
    pergunta: "Quais as duas únicas capitanias hereditárias que prosperaram durante o período Colonial?",
    respostas: [
      { opcao: "a) Pernambuco e São Vicente", correto: true },
      { opcao: "b) São Vicente e Ilhéus", correto: false },
      { opcao: "c) Itamaracá e Pernambuco", correto: false },
      { opcao: "d) Ceará e Rio Grande do Norte", correto: false }
    ]
  },
  {
    pergunta: "Em que ano foi proclamada a República no Brasil?",
    respostas: [
      { opcao: "a) 1889", correto: true },
      { opcao: "b) 1880", correto: false },
      { opcao: "c) 1885", correto: false },
      { opcao: "d) 1890", correto: false }
    ]
  },
  {
    pergunta: "Quem foi o primeiro presidente do Brasil",
    respostas: [
      { opcao: "a) José Bonifácio", correto: false },
      { opcao: "b) Deodoro da Fonseca", correto: true },
      { opcao: "c) Floriano Peixoto", correto: false },
      { opcao: "d) Prudente de Morais", correto: false }
    ]
  },
  {
    pergunta: "O que foi o 'Estado Novo'?",
    respostas: [
      { opcao: "a) Período de reformas sociais no Brasil durante a Monarquia", correto: false },
      { opcao: "b) Movimento separatista no Sul do Brasil", correto: false },
      { opcao: "c) Plano econômico para modernizar o Brasil nos anos 1970", correto: false },
      { opcao: "d) Ditadura de Getúlio Vargas entre 1937 e 1945", correto: true }
    ]
  },
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();