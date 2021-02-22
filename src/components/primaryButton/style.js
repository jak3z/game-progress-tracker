import styled from 'styled-components'

export const ButtonPrimary = styled.button`
    background-color: #4851f6;
    outline: 0;
    border: none;
    color: white;
    cursor: pointer;
    padding: 1rem 2.5rem;
    border-radius: 10px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    transition: background-color 0.3s;

    :hover {
        background-color: #1d28fc;
    }
`