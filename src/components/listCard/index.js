import React from 'react'
import './style.css'

export default function ListCard(props) {
    let listName = props.listTypeInfo
    return (
        <div className="container">
            <div className="list-info">
                <h1>{listName.name}</h1>
            </div>
            {/* {props.children} */}
        </div>
    )
}
