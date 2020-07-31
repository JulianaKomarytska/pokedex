import React from 'react';
import './App.css';
import {observer} from 'mobx-react';
import PokeList from './components/PokeList';
import Modal from './components/Modal'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NavBar} from './components/NavBar'
import Nav from "./components/Nav";
import SearchScreen from "./components/SearchScreen";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Nav/>
            <Switch>
                <Route exact path={'/'} component={PokeList}/>
                <Route path={'/pokemon/:id'} component={Modal}/>
                <Route path={'/search'} component={SearchScreen}/>
            </Switch>
        </BrowserRouter>
    );
}

export default observer(App);
