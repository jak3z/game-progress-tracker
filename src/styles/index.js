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

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .logo {
    margin-left: 2rem;
  }

  
  @media (min-width: 769px) {
    .header,
    .main-nav {
      display: flex;
    }
    .header {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: 1025px) {
    .header {
      flex-direction: row;
      justify-content: space-between;
    }

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