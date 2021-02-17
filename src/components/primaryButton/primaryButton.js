import React from 'react'
import './style.css'

export default function PrimaryButton(props) {
    return (
        <div>
            <button className="primaryButton">{props.text}</button>
        </div>
    )
}
