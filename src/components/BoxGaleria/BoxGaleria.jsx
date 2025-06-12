import React, { useState, useEffect, useRef } from 'react';
import './BoxGaleria.css';
import foto1 from '../../assets/images/midiaGaleria/foto1.jpg';
import foto2 from '../../assets/images/midiaGaleria/foto2.jpg';
import foto3 from '../../assets/images/midiaGaleria/foto3.jpg';
import foto4 from '../../assets/images/midiaGaleria/foto4.jpg';
import foto5 from '../../assets/images/midiaGaleria/foto5.jpg';
import foto6 from '../../assets/images/midiaGaleria/foto6.jpg';
import foto7 from '../../assets/images/midiaGaleria/foto7.jpg';
import foto8 from '../../assets/images/midiaGaleria/foto8.jpg';
import foto9 from '../../assets/images/midiaGaleria/foto9.jpg';
import foto10 from '../../assets/images/midiaGaleria/foto10.jpg';
import video1 from '../../assets/images/midiaGaleria/video1.mp4';
import video2 from '../../assets/images/midiaGaleria/video2.mp4';

export const BoxGaleria = () => {
    const itens = [
        { tipo: 'foto', src: foto1, legenda: 'A gente na Anhembi... antes de nos despedirmos ' },
        { tipo: 'foto', src: foto2, legenda: 'Cara séria durante a fila da barca viking (que filas absurdas)' },
        { tipo: 'foto', src: foto3, legenda: 'Me apresentando o mirante no sesc Paulista, nossos biquinhos' },
        { tipo: 'foto', src: foto4, legenda: 'Nós no restaurante chinês, lembro até hoje daql cebola' },
        { tipo: 'foto', src: foto5, legenda: 'Te levando para Barra Funda com pausa para foto de biquinho' },
        { tipo: 'foto', src: foto6, legenda: 'Bem guerreiros do Minecraft nessa foto' },
        { tipo: 'foto', src: foto7, legenda: 'Uma das nossas fotos mais bonitas, sdds desse parque pena que ele fecha cedo (e a gnt já ficou preso)' },
        { tipo: 'foto', src: foto8, legenda: 'Tirando foto na Sé, foi tão bom esse dia' },
        { tipo: 'foto', src: foto9, legenda: 'Modelos na cafeteria coreana (estavámos a metros de onde minha mãe trabalha)' },
        { tipo: 'foto', src: foto10, legenda: 'De saída da cafeteria e beijinho na cabeça' },
        { tipo: 'video', src: video1, legenda: 'Esse vídeo é muito bom kkkk' },
        { tipo: 'video', src: video2, legenda: 'Mdssss a minha cara, faltou você gritar "vai Corinthians"' }
    ];

    const [indiceAtual, setIndiceAtual] = useState(0);
    const carrosselRef = useRef(null);

    const proximo = () => {
        setIndiceAtual((prev) => (prev + 1) % itens.length)
    }
    const anterior = () => {
        setIndiceAtual((prev) => (prev - 1 + itens.length) % itens.length)
    }

    useEffect(() => {
        if(carrosselRef.current) {
            carrosselRef.current.scrollTo({
                left: carrosselRef.current.offsetWidth * indiceAtual,
                behavior: 'smooth',
            });
        }
    }, [indiceAtual]);
    
    return(
        <div className='box-galeria-carrossel'>
            <div className='botoes-nav'>
                <button onClick={anterior}>&lt; Anterior</button>
                <button onClick={proximo}>Próximo &gt;</button>
            </div>

            <div className='galeria-carrossel' ref={carrosselRef}>
                {itens.map((item, index) => (
                    <div className="slide" key={index}>
                        {item.tipo === 'foto' ? (
                            <img src={item.src} alt={`Foto ${index + 1}`} />
                        ) : (
                            <video controls>
                                <source src={item.src} type='video/mp4' />
                                Seu navegador não suporta vídeo.
                            </video>
                        )}
                        <p className="legenda">{item.legenda}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
