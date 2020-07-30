import React from 'react';
import './App.css';
import {observer} from 'mobx-react';
import PokeList from './components/PokeList';
import Modal from './components/Modal'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NavBar} from './components/NavBar'

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path={'/'} component={PokeList}/>
                <Route path={'/pokemon/:id'} component={Modal}/>
            </Switch>
        </BrowserRouter>
    );
}

export default observer(App);
