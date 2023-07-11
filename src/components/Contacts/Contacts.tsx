import React from 'react';
import styleContainer from '../../common/styles/Container.module.css';
import s from './Contacts.module.css'

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
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;