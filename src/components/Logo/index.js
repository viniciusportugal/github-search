import React from 'react'
import './_index.scss'

import GithubLogo from '../../assets/images/github.png'

const Logo = (props) => (
    <div className="Logo">
        <img src={GithubLogo} alt="Logo do Github" className="Logo__img"/>
        <h2 className="Logo__text">Github Search</h2>
    </div>
);

export default Logo;