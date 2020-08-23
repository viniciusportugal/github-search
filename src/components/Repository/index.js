import React from 'react'
import StarIcon from '../../assets/images/star.png'
import './_index.scss'

const Repository = (props) => (
    <div className="Repository">
        <div className="Repository__name">
            <a href={props.url} target="_blank" rel="noopener noreferrer" data-testid="repository-link">
                <p data-testid="repository-name">{props.name}</p>
            </a>
            <p className="Repository__description" data-testid="repository-description">
                {
                    props.description
                    ? props.description
                    : 'Sem descrição'
                }
            </p>
        </div>
        <div className="Repository__stars">
            <img
                src={StarIcon}
                alt="ícone de estrela"
                className="Repository__stars__icon"
                data-testid="repository-starIcon"
            />
            <p
                className="Repository__stars__text"
                data-testid="repository-stars"
            >
                {props.stars ? props.stars: 0}
            </p>
        </div>
    </div>
);

export default Repository;