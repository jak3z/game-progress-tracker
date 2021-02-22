import React from 'react'
import { useQuery, gql } from '@apollo/client'
import GameCard from '../gameCard/gameCard'
import ListCard from '../listCard'
// ckj371ym60000bkva1dl11742

export default function GameList(props) {

    const ALL_GAMES = gql`
        query specificUser($userId: ID!) {
            getUser(id: $userId) {
                lists {
                    listType {
                        name
                    }
                    games {
                        gameInfo
                    }
                }
            }
        }
    `

    const { loading, error, data } = useQuery(ALL_GAMES, {
        variables: { userId: props.userId }
    })

    if (loading) return <p>Carregando...</p>
    if (error) {
        console.log(error)
        return <p>Ops algo deu errado, tente novamente mais tarde!</p>
    }
    console.log(data)
    return (
        <div>
            {/* {data.specificUser.games.map((gameObject, index) => (
                <div key={index}>
                    <GameCard data={gameObject} />
                </div>
            ))} */}
            {data.getUser.lists.map((listObject, index) => (
                <div key={index}>
                    <ListCard listTypeInfo={listObject.listType}>
                        {listObject.games.map((gameObject, index) => (
                            <GameCard key={index} gameInfo={gameObject} />
                        ))}
                    </ListCard>
                </div>
            ))}
        </div>
    )
}
