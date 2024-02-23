import React, { useState } from 'react';

const GerenciamentoGames = () => {
    const [jogos, setJogos] = useState([
        {
            nome: 'Game of Tactics',
            categoria: 'Strategy',
            url: 'https://example.com/game1',
            videoUrl: 'https://www.youtube.com/embed/game1video',
            descricao: 'Conquiste territórios, construa seu império e lute batalhas estratégicas neste emocionante jogo de estratégia.'
        },
        {
            nome: 'Lost Expedition',
            categoria: 'Adventure',
            url: 'https://example.com/game2',
            videoUrl: 'https://www.youtube.com/embed/game2video',
            descricao: 'Embarque em uma jornada épica, descubra tesouros escondidos e enfrente desafios perigosos em uma selva misteriosa.'
        },
        {
            nome: 'Mind Bender',
            categoria: 'Puzzle',
            url: 'https://example.com/game3',
            videoUrl: 'https://www.youtube.com/embed/game3video',
            descricao: 'Teste suas habilidades mentais com quebra-cabeças desafiadores e enigmas intrigantes neste jogo de quebra-cabeça único.'
        },
    ]);

    return (
        <div className="gerenciamento-container">
            <h1>Gerenciamento de Jogos</h1>
            <ul className="jogos-list">
                {jogos.map((jogo, index) => (
                    <li key={index} className="jogo-item">
                        <h2>{jogo.nome}</h2>
                        <p>Categoria: {jogo.categoria}</p>
                        <p>Descrição: {jogo.descricao}</p>
                        <a href={jogo.url} target="_blank" rel="noopener noreferrer">Jogue agora</a>
                        <iframe
                            title={jogo.nome}
                            width="560"
                            height="315"
                            src={jogo.videoUrl}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GerenciamentoGames;
