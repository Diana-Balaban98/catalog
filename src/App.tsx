import React from 'react';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {RemoteWorkOption} from "./components/RemoteWorkOption/RemoteWorkOption";
import Contacts from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoteWorkOption/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
