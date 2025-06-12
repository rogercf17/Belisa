import React from "react";
import './ListaTop.css';

export const ListaTop = () => {
    const musicas = [
        {nome: 'My Lover, My Friend', link: 'https://youtu.be/YXG2jOBspss?si=JXmkRoKjzJdAzWwj'},
        {nome: 'Kiss Me', link: 'https://youtu.be/UC9VfzwGdFU?si=VWdC_jRtBg87tkbZ'},
        {nome: 'Lifetime', link: 'https://youtu.be/Il-R_o_rldA?si=XTeNfu0V0BKiVKWY'},
        {nome: 'Last First Kiss', link: 'https://youtu.be/YSbCncXmJtY?si=TXeYtOVycMrQ2jwy'},
        {nome: 'You', link: 'https://youtu.be/rOKf1ZY5Ssc?si=XXIIxf3CwvrSKUv6'},
        {nome: 'Butterflies', link: 'https://youtu.be/SzSRGSSul08?si=GNTU_USWmFqjaxWg'},
        {nome: 'Light My World', link: 'https://youtu.be/jmCY5cvP6kI?si=wXEoHu2dOX-zW1nf'},
        {nome: 'Black And White', link: 'https://youtu.be/qNskbUlg0Cc?si=ZSg3IRitL-mleXrW'},
        {nome: 'Blue', link: 'https://youtu.be/KXwftNuuVJo?si=4SzzbwKIQBmxjYg2'},
        {nome: 'Home', link: 'https://youtu.be/F8DcpX6FqCQ?si=z0LxRNnyCB0unEGt'},
        {nome: 'Like This', link: 'https://youtu.be/ey4m4M8wmSo?si=ev9TRoVgEITOKxZE'},
        {nome: 'XO', link: 'https://youtu.be/RSJO4y9VUcY?si=zC3pr8XHsCkEP27V'},
    ];

    return(
        <ul className="box-toplist">
            {musicas.map((musica, index) => (
                <li key={index} className="toplist-item">
                    <p>{index + 1}. {musica.nome}</p>
                    <a href={musica.link} target="_blank" rel="noopener noreferrer" className="toplist-link">Veja a letra</a>
                </li>
            ))}
        </ul>
    );
};
