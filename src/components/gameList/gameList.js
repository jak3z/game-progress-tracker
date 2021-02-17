import React from 'react'
import { useQuery, gql } from '@apollo/client'
import GameCard from '../gameCard/gameCard'

// ckj371ym60000bkva1dl11742

export default function GameList(props) {

    const ALL_GAMES = gql`
        query specificUser($userId: ID!) {
            specificUser(id: $userId) {
                games {
                    gameInfo
                }
            }
        }
    `

    const { loading, error, data } = useQuery(ALL_GAMES, {
        variables: { userId: props.userId }
    })

    if (loading) return <p>Carregando...</p>
    if (error) return <p>Ops algo deu errado, tente novamente mais tarde!</p>

    return (
        <div>
            {data.specificUser.games.map((gameObject, index) => (
                <div key={index}>
                    <GameCard data={gameObject} />
                </div>
            ))}
        </div>
    )
}
