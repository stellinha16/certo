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
