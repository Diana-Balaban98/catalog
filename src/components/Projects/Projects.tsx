import React from 'react';
import style from '../../common/styles/Container.module.css'
import s from './Projects.module.css'
import {Project} from "./Project/Project";

type ProjectsCard = {
    id: number
    title: string
    description: string
    photo: string
}

export const Projects = () => {
    const projectsCards = ([
        {id: 1, title: "Todolist", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco description", photo: "Photo"},
        {id: 2, title: "Social network", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco description", photo: "Photo2"}
    ] as ProjectsCard[]).map(p => <Project key={p.id}
                                                 title={p.title}
                                                 description={p.description}
                                                 photo={p.photo}/>);

    return <div className={s.projectsBlock}>
            <div className={style.container}>
                <div className={s.wrapperProjects}>
                    <h2 className={s.title}>My projects</h2>
                    <div className={s.projects}>
                        {projectsCards}
                    </div>
                </div>
            </div>
        </div>;
};

