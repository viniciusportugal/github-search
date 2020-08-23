import React from 'react'
import './_index.scss'

const Button = (props) => (
    <button
        className={`Button ${props.disabled === 'disabled' ? 'btn--disabled' : ''}`}
        onClick={props.onClick}
        data-testid="button"
    >
        {props.text}
    </button>
);

export default Button;