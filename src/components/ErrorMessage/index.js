import React from 'react'
import './_index.scss'

const notFound = {
    icon: require('../../assets/images/not-found.png'),
    title: 'Nenhum usuário encontrado.',
    message: 'Por favor, veja se o nome do usuário está correto e tente novamente.'
};
const generalError = {
    icon: require('../../assets/images/sad.png'),
    title: 'Ops! Pareceu que algo deu errado.',
    message: 'Por favor, verifique sua conexão e tente novamente.'
};

const ErrorMessage = (props) => (
    <div className="ErrorMessage">
        <div className="ErrorMessage__header">
            <img
                src={props.error === 404 ? notFound.icon : generalError.icon}
                alt="ícone que representa o erro"
                className="ErrorMessage__header__icon"
            />
            <p className="ErrorMessage__header__title">
                {props.error === 404 ? notFound.title : generalError.title}
            </p>
        </div>
        <div className="ErrorMessage__body">
            <p className="ErrorMessage__body__message">
                {props.error === 404 ? notFound.message : generalError.message}
            </p>
        </div>
    </div>
);

export default ErrorMessage;