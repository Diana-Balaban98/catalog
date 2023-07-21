import React from 'react';
import styleContainer from '../../common/styles/Container.module.css'
import s from './Main.module.css'
import "../../common/styles/fonts/fonts.css"

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                    <div className={s.wrapper}>
                        <div className={`${s.text} ${"fontSora"}`}>
                            <h1>Hi, I'm Diana Balaban.</h1>
                            <p>Frontend Developer</p>
                            <span>I am passionate about creating visually appealing and user-friendly applications. My goal is to continue learning and improving my skills to deliver high-quality projects that exceed client expectations.</span>
                        </div>
                        <div className={s.photo}></div>
                    </div>
            </div>
        </div>
    );
};

