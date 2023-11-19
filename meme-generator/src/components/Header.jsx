import React from 'react'
import trollFace from '../assets/troll-face.png'

export default function Header() {
    return(
        <header>
            <h2>Meme Generator</h2>
            <img src={trollFace} />
            <h4>React course - Project 3</h4>
        </header>
    )
}