import React from 'react';
import style from '../../common/styles/Container.module.css'
import s from  './Skills.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    const skills = [
        {id: 1, title: "HTML", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
        {id: 2, title: "CSS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
        {id: 3, title: "JavaScript", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"}
    ];

    const skillCards = skills.map(s => <Skill key={s.id} title={s.title} description={s.description}/>)

    return <div className={s.skillsBlock}>
            <div className={style.container}>
                <div className={s.wrapperSkills}>
                    <h3 className={s.title}>My skills</h3>
                    <div className={s.skills}>
                        {skillCards}
                    </div>
                </div>
            </div>
        </div>;
};

