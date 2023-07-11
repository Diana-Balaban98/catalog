import React from 'react';
import styleContainer from '../../common/styles/Container.module.css';
import s from './Header.module.css'
import {Navigation} from "../Navigation/Navigation";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${styleContainer.container} ${s.headerContainer}`}>
                <Navigation/>
            </div>
        </div>
    );
};

