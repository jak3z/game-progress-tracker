import React from 'react'
import { ButtonPrimary } from './style.js'

export default function PrimaryButton(props) {
    return (
        <div>
            <ButtonPrimary>{props.text}</ButtonPrimary>
        </div>
    )
}
