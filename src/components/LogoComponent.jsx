import React from 'react';
import logoImg from 'img/main/logo.gif'
import logoName from 'img/main/orbs.png'
import { Link } from 'react-router-dom';

const LogoComponent = ({
        logoBlockClass,
    logoImgClass,
    logoNameClass
    }) => {
    return (
        <div className={logoBlockClass || 'defaultLogoBlock'} >
            <Link to='/home'>
                <img
                    className={logoImgClass || 'defaultLogoImg'}
                    src={logoImg} alt='logoPic'
                />
            </Link>
            <Link to='/home'>
                <img
                    className={logoNameClass || 'defaultLogoName'}
                    src={logoName} alt='logoName'
                />
            </Link>
        </div >
    );
}

export default LogoComponent;
