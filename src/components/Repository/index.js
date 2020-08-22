import React from 'react'
import StarIcon from '../../assets/images/star.png'
import './_index.scss'

const Repository = (props) => (
    <div className="Repository">
        <div className="Repository__name">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <p>{props.name}</p>
            </a>
            <p className="Repository__description">{props.description}</p>
        </div>
        <div className="Repository__stars">
            <img src={StarIcon} alt="ícone de estrela" className="Repository__stars__icon" />
            <p className="Repository__stars__text" >{props.stars ? props.stars: 0}</p>
        </div>
    </div>
);

export default Repository;