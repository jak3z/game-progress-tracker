import styled from 'styled-components'

export const ModalContainer = styled.div`
    background-color: #333333;
    z-index: 999;
    max-width: 28rem;
    width: 90%;
    border-radius: 2rem;
`

export const ModalBase = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #6b7280;
    opacity: 60%;
`

export const ModalContent = styled.div`
    text-align: left;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
`

export const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CloseSvg = styled.svg`
    fill: white;
    margin-top: 0.7rem;
    cursor: pointer;
`