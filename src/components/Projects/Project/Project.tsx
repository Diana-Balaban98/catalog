import React from 'react';
import s from './Project.module.css'

type PropType = {
    title: string
    description: string
    photo: string
}

export const Project = ({title, description, photo}: PropType) => {
    return <div className={s.wrapperCard}>
        <div className={s.photoCard}>
            <a className={s.view}>View</a>
        </div>
        <div className={s.wrapperDescription}>
            <span className={s.title}>{title}</span>
            <div className={s.description}>{description}</div>
        </div>
    </div>;
};

