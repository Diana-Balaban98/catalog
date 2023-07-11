import React from 'react';
import styleContainer from '../../common/styles/Container.module.css'
import s from './Main.module.css'
export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                    <div className={s.wrapper}>
                        <div className={s.text}>
                            <span>Hi There</span>
                            <h1>I am Diana Balaban</h1>
                            <p>Frontend Developer</p>
                        </div>
                        <div className={s.photo}></div>
                    </div>
            </div>
        </div>
    );
};

