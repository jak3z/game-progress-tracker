import React from 'react'
import './style.css'

export default function GameInput(props) {
    return (
        <div>
          <input className="gameInput" type={props.type} placeholder={props.placeholder}></input>  
        </div>
    )
}
