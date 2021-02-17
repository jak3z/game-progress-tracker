import React from 'react'
import './style.css'

export default function GameCard(props) {
    let gameInfo = props.data.gameInfo
    let imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${gameInfo.image_id}.jpg`
    return (
        <div className="gameCard">
            <img src={imageUrl} alt="Capa do jogo" />
            <div className="info">
                <h1>{gameInfo.name}</h1>
                <p>{gameInfo.description}</p>
            </div>
        </div>
    )
}
