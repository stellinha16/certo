import React, { useState } from 'react';
import Eu from '../eu/Eu';
import'./Main.css'
type EuType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}


export default function Main() {
    const [texto, setTexto] = useState("");

    const me: EuType[] = [
        {
            id: 1,
            titulo: 'Ballet',
            sinopse: "Possuo 10 anos de experiência como bailarina, com graduação em ballet. Instrutora de ballet e jazz, ministrando aulas para bebês, crianças e adultos, compartilhando meu conhecimento e paixão pela dança.",
            imagem: '/quadro.jpg'
        },
        {
            id: 1,
            titulo: 'Inglês',
            sinopse: "Sou um estudante dedicado de inglês com seis anos de experiência no idioma, atualmente no nível intermediário. Meu objetivo é aprimorar minha fluência e habilidades de comunicação em inglês, e para alcançar esse objetivo, estou planejando realizar um intercâmbio.",
            imagem: '/ingles.jpg'
        },
        {
            id: 1,
            titulo: 'Robótica',
            sinopse: "Concluí um curso de robótica de 5 anos no SENAI, sendo consistentemente o melhor da turma. Recebi diversas medalhas por desempenho destacado em projetos durante as aulas. Participei de um torneio de robótica durante o ano, mas enfrentei desafios devido à pandemia global.",
            imagem: '/robotica.png'
        },
        {
            id: 4,
            titulo: 'Libras',
            sinopse: "Durante um período de dois anos, dediquei-me ao estudo da Língua Brasileira de Sinais (Libras). Esse curso foi uma experiência enriquecedora que me permitiu adquirir habilidades essenciais para a comunicação eficaz com pessoas surdas e com deficiência auditiva.",
            imagem: '/LIBRAS.png'
        },
        {
            id: 5,
            titulo: 'Espanhol',
            sinopse: "Estudei espanhol no IFMS por dois anos, adquirindo proficiência na língua e enriquecendo meu conhecimento cultural.",
            imagem: '/espanhol.jpg'
        },
    ]


    function TrataTexto(e: React.ChangeEvent<HTMLInputElement>) {
        setTexto(e.target.value);
    }

    
    return (
        
        <>  
    <div className="stella">
    <img src='/eu.jpg' alt="" />
    <div className="text-eu">
        <p> Me chamo Stella Giovana De Oliveira Veiga, tenho 16 anos, estudante do terceiro ano do ensino médio no IFMS de Naviraí, e instrutora de ballet e jazz com 10 anos de experiência . Além disso, tendo estudado  Inglês por 6 anos. </p>
    </div>
    </div>
        <div className="campo_pesquisa">
                <input type="text"
                    className='botao_pesquisa'
                    placeholder='Pesquise um Filme'
                    onChange={TrataTexto} />
                {texto && <p>Resultados: {texto} </p>}
            </div>


           
            <main className="content-main">

                {me.filter((eu) => eu.titulo.toLowerCase().includes(texto)).map(
                    (eu) => <Eu
                        key={eu.id}
                        sinopse={eu.sinopse}
                        titulo={eu.titulo}
                        imagem={eu.imagem} />
                )}

            </main>
        </>
    );
}
