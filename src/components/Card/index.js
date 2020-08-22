import React from 'react'
import './_index.scss'

const Card = (props) => (
    <div className="Card">
        {props.children}
    </div>
);

export default Card;