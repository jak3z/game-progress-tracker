import styled from 'styled-components'

export const GameCardDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 10rem;
    margin-top: 2rem;
    margin-right: 10rem; 

    img {
        max-width: 100%;
        height: auto;
    }

    .info {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
    }

    h1 {
        text-align: initial;
    }

    p {
        text-align: initial;
        text-overflow: ellipsis;
    }

    @media only screen
        and (max-width : 768px) {
            margin-left: 0;
            margin-right: 0;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
            .info {
                margin-left: 1rem;
            }
        }
`