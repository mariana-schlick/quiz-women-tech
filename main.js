const perguntas = [
    {
      pergunta: "Quem foi a primeira mulher a ganhar o Prêmio Nobel, em 1903, por suas pesquisas sobre a radioatividade?",
      respostas: [
        "Marie Curie",
        "Rosalind Franklin",
        "Barbara McClintock",
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi a contribuição mais significativa de Ada Lovelace para a computação?",
      respostas: [
        "Desenvolvimento do primeiro computador eletrônico",
        "Formulação do primeiro algoritmo destinado a ser processado por uma máquina",
        "Criação do primeiro sistema operacional",
      ],
      correta: 1
    },
    {
      pergunta: "Quem foi a primeira mulher negra, médica, a viajar para o espaço, em 1992?",
      respostas: [
        "Sally Ride",
        "Valentina Tereshkova",
        "Mae Jemison",
      ],
      correta: 2
    },
    {
      pergunta: "Qual cientista contribuiu na realização de cálculos cruciais para missões espaciais?",
      respostas: [
        "Katherine Johnson",
        "Rosalind Franklin",
        "Barbara McClintock",
      ],
      correta: 0
    },
    {
      pergunta: "Quem foi a primeira mulher a ser premiada com uma Medalha Fields, considerada o 'Nobel da Matemática'?",
      respostas: [
        "Ada Lovelace",
        "Emmy Noether",
        "Mary Jackson",
      ],
      correta: 1
    },
    {
      pergunta: "Pelo que Barbara McClintock foi premiada com o Prêmio Nobel?",
      respostas: [
        "Pela descoberta dos elementos químicos",
        "Pela descoberta das transposições genéticas",
        "Pela teoria da evolução das espécies",
      ],
      correta: 1
    },
    {
      pergunta: "Qual foi a principal contribuição de Grace Hopper para a ciência da computação?",
      respostas: [
        "Desenvolvimento do primeiro computador pessoal",
        "Criação da primeira linguagem de programação compilada",
        "Invenção do mouse de computador",
      ],
      correta: 1
    },
    {
      pergunta: "Qual cientista brasileira é reconhecida por sua contribuição para o desenvolvimento da mecânica quântica?",
      respostas: [
        "Rita Levi-Montalcini",
        "Emmy Noether",
        "Cecília Payne-Gaposchkin",
      ],
      correta: 2
    },
    {
      pergunta: "Quem foi a primeira mulher engenheira afro-americana na NASA?",
      respostas: [
        "Mary Jackson",
        "Rosalind Franklin",
        "Barbara McClintock",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o principal projeto de pesquisa de Beatriz Barros, pesquisadora brasileira, atualmente?",
      respostas: [
        "Desenvolvimento de assistentes virtuais para empresas",
        "Aplicação de inteligência artificial na medicina",
        "Análise de dados para previsão de desastres naturais",
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço ou repetição
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  