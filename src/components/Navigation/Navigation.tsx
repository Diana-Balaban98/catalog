import React from 'react';
import s from './Navigation.module.css'
import {ReactComponent as SunThemeSwitcher} from '../../icons/sun.svg'

export const Navigation = () => {
    return (
        <div className={s.nav}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>

            <SunThemeSwitcher/>
        </div>
    );
};

