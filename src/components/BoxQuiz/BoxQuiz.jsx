import React, { useState } from "react";
import './BoxQuiz.css';

export const BoxQuiz = () => {
    const perguntas = [
        {
            pergunta: 'Que dia a gente conversou pela primeira vez?',
            opcoes: ['26 de Outubro', '25 de Outubro', '23 de Outubro'],
            resposta: 1
        },
        {
            pergunta: 'Que dia que a gente se viu pela primeira vez?',
            opcoes: ['14 de Novembro', '20 de Novembro', '17 de Novembro'],
            resposta: 0
        },
        {
            pergunta: 'Onde foi nosso primeiro beijo?',
            opcoes: ['CCSP', 'Estação Ana Rosa', 'Pq. Ibirapuera'],
            resposta: 2
        },
        {
            pergunta: 'Qual a cor do boné q eu estava usando quando a gnt se viu pela 1ª vez?',
            opcoes: ['Vermelho', 'Preto', 'Azul'],
            resposta: 0
        },
        {
            pergunta: 'Qual desses apelidos eu nunca te chamei?',
            opcoes: ['Baguete', 'Fufas', 'Behzinha'],
            resposta: 2
        },
        {
            pergunta: 'Qual foi a primeira música do One Direction que eu te dediquei?',
            opcoes: ['Back For You', 'Strong', 'Last First Kiss'],
            resposta: 0
        },
        {
            pergunta: 'Que dia você veio pela 1ª vez na minha casa?',
            opcoes: ['28 de Fevereiro', '1 de Março', '18 de Março'],
            resposta: 1
        },
        {
            pergunta: 'Quantas figurinhas minha você já fez?',
            opcoes: ['3', '4', '2'],
            resposta: 0
        },
        {
            pergunta: 'Qual parte do seu corpo eu mais gosto e qual parte do meu você mais gosta?',
            opcoes: ['Cabelo e Ombros', 'Olhos e Costas', 'Boca e Olhos'],
            resposta: 2
        },
        {
            pergunta: 'Qual foi o primeiro filme que a gnt assistiu juntos no cinema?',
            opcoes: ['Minecraft O Filme', 'Thuderbolts', 'Branca de Neve'],
            resposta: 2
        },
        {
            pergunta: 'Do que sua família me chamava antes de saber o meu nome?',
            opcoes: ['Rogério', 'Garibalda', 'Scott'],
            resposta: 1
        },
        {
            pergunta: 'Quem da minha família você conheceu primeiro?',
            opcoes: ['Minhas dogs', 'Meu Vô', 'Minha Vó'],
            resposta: 0
        }
    ];

    const [indice, setIndice] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);
    const [finalizado, setFinalizado] = useState(false);

    const responder = (index) => {
        if (index === perguntas[indice].resposta) {
            setPontuacao(pontuacao + 1);
        }

        if (indice + 1 < perguntas.length) {
            setIndice(indice + 1);
        }else {
            setFinalizado(true);
        }
    };

    if (finalizado) {
        return(
            <div className="box-quiz">
                <h2>Quiz finalizado! 🎉</h2>
                <p className="pergunta">Sua pontuação: {pontuacao} de {perguntas.length}</p>
                <button className="botao-reiniciar"
                    onClick={() => {
                        setIndice(0);
                        setPontuacao(0);
                        setFinalizado(false);
                    }}
                >Reiniciar o quiz</button>
            </div>
        );
    }

    return(
        <div className="box-quiz">
            <h2>Pergunta {indice + 1} de {perguntas.length}</h2>
            <p className="pergunta">{perguntas[indice].pergunta}</p>
            <div className="opcoes">
                {perguntas[indice].opcoes.map((opcao, i) => (
                    <button key={i} onClick={() => responder(i)}>{opcao}</button>
                ))}
            </div>
        </div>
    );
};
