import React from 'react';
import s from './Skill.module.css'


type PropType = {
    title: string
    description: string
}

export const Skill = ({title, description}: PropType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>icon</div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

