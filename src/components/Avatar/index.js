import React from 'react'
import './_index.scss'

const Avatar = (props) => (
    <div className="Avatar">
        <img src={props.src} alt="Logo do Github" className="Avatar__img"/>
        {
            props.text ? (
                <h2 className={`Avatar__text text--${props.textSize}`}>{props.text}</h2>
            ) : null
        }
    </div>
);

export default Avatar;