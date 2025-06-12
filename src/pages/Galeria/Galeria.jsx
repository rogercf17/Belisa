import React from "react";
import './Galeria.css';
import { Voltar } from "../../components/Voltar/Voltar";
import { BoxGaleria } from "../../components/BoxGaleria/BoxGaleria";

export default function Galeria() {
    return(
        <div className="galeria-container">
            <Voltar />
            <h1 className="galeria-title">Nossas Melhores Memórias</h1>
            <BoxGaleria />
        </div>
    );
};
