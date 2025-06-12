import React from "react";
import { useNavigate } from "react-router-dom";
import './BoxOpcoes.css'
import icon1 from '../../assets/images/icons/camera-retro-solid.svg';
import icon2 from '../../assets/images/icons/envelope-solid.svg';
import icon3 from '../../assets/images/icons/music-solid.svg';
import icon4 from '../../assets/images/icons/question-solid.svg';

export const BoxOpcoes = () => {
    const navigate = useNavigate();

    const opcoes = [
        { icon: icon1, texto: "Galeria", path: "/galeria" },
        { icon: icon2, texto: "Mensagem", path: "/mensagem" },
        { icon: icon3, texto: "Top 12", path: "/top" },
        { icon: icon4, texto: "Quiz", path: "/quiz" }
    ];

    return(
        <div className="opcoes-container">
            {opcoes.map((opcao, index) => (
                <div
                    key={index}
                    className="box-opcao"
                    onClick={() => navigate(opcao.path)}
                >
                    <img src={opcao.icon} className="icons" alt={opcao.texto}/>
                    <p>{opcao.texto}</p>
                </div>
            ))}
        </div>
    );
};
