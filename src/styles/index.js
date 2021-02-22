import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&display=swap');

  body {
    margin: 0;
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #121212;
    color: white;

    display: flex;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
  }
`

export const InsertGame = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen 
   and (max-width : 768px) {
      justify-content: center;
  }
`