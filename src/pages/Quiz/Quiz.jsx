import React from "react";
import './Quiz.css';
import { Voltar } from '../../components/Voltar/Voltar';
import { BoxQuiz } from "../../components/BoxQuiz/BoxQuiz";

export default function Quiz() {
    return(
        <div className="quiz-container">
            <Voltar />
            <h1 className="quiz-title">Vamos te testar amor kkkkkk sem colar em ai ai</h1>
            <BoxQuiz />
        </div>
    );
};
