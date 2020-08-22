import React from 'react'
import './_index.scss'

const Avatar = (props) => (
    <div className="Avatar">
        <img
            src={props.src}
            alt="Logo do Github"
            className={`Avatar__img img--${props.rounded ? 'rounded' : ''}`}
        />
        {
            props.text ? (
                <p
                    className={`Avatar__text text--${props.textSize} text--${props.textColor}`}
                >
                    {props.text}
                </p>
            ) : null
        }
    </div>
);

export default Avatar;