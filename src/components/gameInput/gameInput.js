import React from 'react'
import { InputGame } from './style.js'

export default function GameInput(props) {
    return (
        <div>
          <InputGame type={props.type} placeholder={props.placeholder}></InputGame>  
        </div>
    )
}
