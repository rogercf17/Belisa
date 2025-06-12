import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Voltar.css';

export const Voltar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === '/') {
        return null;
    }

    return(
        <button 
            className="button-voltar"
            onClick={() => navigate('/')}
        >
            Voltar
        </button>
    );
};
