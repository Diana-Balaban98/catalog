import React from 'react';
import styleContainer from '../../common/styles/Container.module.css';
import s from  './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={styleContainer.container}>
                <div className={s.wrapperFooter}>
                    <h3 className={s.owner}>Diana Balaban</h3>
                    <div className={s.wrapperSocial}>
                        <div className={s.socialIcon}></div>
                        <div className={s.socialIcon}></div>
                        <div className={s.socialIcon}></div>
                        <div className={s.socialIcon}></div>
                    </div>
                    <div className={s.copyright}>© 2023 All rights reserved</div>
                </div>
            </div>
        </div>
    );
};

