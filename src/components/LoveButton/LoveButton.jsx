import React, { useState } from "react";
import './LoveButton.css';
import videoMensagem from '../../assets/images/midiaMensagem/videoMensagem.mp4';

export const LoveButton = () => {
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    return(
        <div className="button-container">
            <button 
                className="love-button"
                onClick={() => setMostrarMensagem(!mostrarMensagem)}
            >
                Clique para uma surpresa
            </button>
            {mostrarMensagem && (
                <div className="box-mensagem">
                    <video controls className="video">
                        <source src={videoMensagem} type="video/mp4" />
                        Seu navegador não suporta vídeo.
                    </video>
                    <p className="mensagem">
                        Feliz Dia dos Namorados, meu amor! 
                        Sou imensamente grato por ter você ao meu lado.
                        Com seu jeito único, você transforma os dias simples em momentos inesquecíveis.
                        Cada sorriso seu ilumina minha vida, e cada instante contigo faz meu coração bater mais forte.
                        Te amo mais a cada dia, e não há nada no mundo mais bonito do que construir essa história com você.
                    </p>
                </div>
            )}
        </div>
    );
};
