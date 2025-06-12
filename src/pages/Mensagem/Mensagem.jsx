import React from "react";
import './Mensagem.css';
import { LoveButton } from "../../components/LoveButton/LoveButton";
import { Voltar } from '../../components/Voltar/Voltar';

export default function Mensagem() {
    return(
        <div className="mensagem-container">
            <Voltar />
            <LoveButton />
        </div>
    );
};
