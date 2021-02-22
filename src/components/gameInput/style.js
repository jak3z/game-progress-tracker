import styled from 'styled-components'

export const InputGame = styled.input`
    min-height: 3rem;
    margin-right: 5rem;
    border-radius: 10px;
    padding-left: 2rem;
    border: 1px #000;
    background-color: #ebf0fa;
    color: #7c879c;
    width: 80%;

    @media only screen 
        and (max-width : 768px) {
            margin-right: 0;
            margin-bottom: 1rem;
        }
`