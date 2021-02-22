import React from 'react'
import { GameCardDiv } from './style.js'

export default function GameCard(props) {
    let gameInfo = props.gameInfo.gameInfo
    console.log(gameInfo)
    let imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${gameInfo.image_id}.jpg`
    return (
        <GameCardDiv>
            <img src={imageUrl} alt="Capa do jogo" />
            <div className="info">
                <h1>{gameInfo.name}</h1>
                <p>{gameInfo.description}</p>
            </div>
        </GameCardDiv>
    )
}
