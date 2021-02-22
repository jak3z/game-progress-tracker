import React from 'react'
import PrimaryButton from '../primaryButton/'
import './style.css'
export default function Profile() {
    return (
        <div style={{ marginBottom: 10, display: 'flex', padding: 20 }}>
            {/* <PrimaryButton text="Login"></PrimaryButton>             */}
            <p style={{ marginRight: 10 }}>Kaike Carlos</p>
            <img className="avatar" src="https://ui-avatars.com/api/?name=Kaike+Carlos" alt="Avatar" />
        </div>
    )
}
