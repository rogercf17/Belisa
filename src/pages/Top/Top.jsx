import React from "react";
import './Top.css';
import { ListaTop } from "../../components/ListaTop/ListaTop";
import { Voltar } from "../../components/Voltar/Voltar";

export default function Top() {
    return(
        <div className="top-container">
            <Voltar />
            <h1 className="top-title">Top 12 Músicas que me lembram você:</h1>
            <ListaTop />
        </div>
    );
};
