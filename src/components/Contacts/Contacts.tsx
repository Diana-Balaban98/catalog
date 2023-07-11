import React from 'react';
import styleContainer from '../../common/styles/Container.module.css';
import s from './Contacts.module.css'
import {Button} from "../Button/Button";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={styleContainer.container}>
                <div className={s.wrapperContacts}>
                    <h3>Contacts</h3>
                    <form className={s.form}>
                        <input/>
                        <input/>
                        <textarea></textarea>
                    </form>
                    <Button name="Send"/>
                </div>
            </div>
        </div>
    );
};

export default Contacts;