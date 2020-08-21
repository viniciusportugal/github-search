import React from 'react'
import './_index.scss'

const Button = (props) => (
    <button className="Button" onClick={props.onClick}>
        {props.text}
    </button>
);

export default Button;