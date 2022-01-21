import React, { useState } from "react";
import "./styles.css"
import { SpriteAnimator } from 'react-sprite-animator'
import owlDeath from "../assets/owl-death.png"
import owlRush from "../assets/owl-rush.png"

export default function Char(props) {
    const [animate, setAnimate] = useState(false)
    const [hover, setHover] = useState(false)

    const handleMouseOver = () => {
        setAnimate(prevState => !prevState)
    }

    return (
        <div className="char-container">
            <div className="char-inner-container">
                <p className="title">Char Clicks: {props.clicks}</p>

                <div 
                    onClick={props.onClick} 
                    onMouseEnter={() => setAnimate(true)} 
                    onMouseLeave={() => setAnimate(false)}
                    className="character"
                >
                    <SpriteAnimator
                        width={32}
                        height={32}
                        sprite={owlRush}
                        shouldAnimate={animate}
                        fps={10}
                        startFrame={0}
                        scale={.3}
                        //stopLastFrame={true}
                        //reset={!animate}
                    />
                </div>
            </div>

        </div>
    )
}