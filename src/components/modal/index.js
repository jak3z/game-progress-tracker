import React from 'react'
import {
    ModalBase,
    ModalContent,
    ModalContainer,
    ModalOverlay,
    ModalTitle,
    CloseSvg
} from './styles'

export default function Modal() {
    return (
        <ModalBase>
            <ModalOverlay />
            <ModalContainer>
                <ModalContent>
                    <ModalTitle>
                        <h1>Criar conta</h1>
                        <div>
                            <CloseSvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </CloseSvg>
                        </div>
                    </ModalTitle>
                    <p>What the fuck did you just fucking say about me,
                        you little bitch? I'll have you know I graduated top of my class in</p>
                </ModalContent>
            </ModalContainer>
        </ModalBase>
    )
}
